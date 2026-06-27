/* ============================================================
   Desafio 6W2H — lógica do app
   Uso local (sem backend). Dados em data.js.
   ============================================================ */

/* ----------------------------- DOM refs ----------------------------- */
const app = document.getElementById("app");
const root = document.documentElement;
const confettiLayer = document.getElementById("confetti-layer");

const competitiveToggle = document.getElementById("competitiveToggle");
const nameModal = document.getElementById("nameModal");
const participantNameInput = document.getElementById("participantNameInput");
const participantAreaLabel = document.getElementById("participantAreaLabel");
const participantModeLabel = document.getElementById("participantModeLabel");
const nameModalError = document.getElementById("nameModalError");

/* ----------------------------- Config ------------------------------- */
const DEFAULT_THEME_ID = "logistica";
const STORAGE_RESULTS = "quizCompetitiveResults";
const STORAGE_COMP_MODE = "quizCompetitiveModeEnabled";

// Modos do quiz: rótulo + nº de perguntas. Nada de número mágico solto.
const QUIZ_MODES = {
  rapido: { label: "Rápido (3 perguntas)", count: 3 },
  completo: { label: "6W2H completo (8 perguntas)", count: 8 }
};

const moduleThemes = {
  phc:       { logo: "assets/logos/phc.png",       color1: "#2E7DF6", color2: "#67A6FF", color3: "#14D4C8" },
  baby:      { logo: "assets/logos/baby.png",      color1: "#EC4899", color2: "#F472B6", color3: "#F59E0B" },
  fem:       { logo: "assets/logos/fem.png",       color1: "#A855F7", color2: "#D946EF", color3: "#7C3AED" },
  fhc:       { logo: "assets/logos/fhc.png",       color1: "#0EA5E9", color2: "#06B6D4", color3: "#22C55E" },
  logistica: { logo: "assets/logos/logistica.png", color1: "#2563EB", color2: "#60A5FA", color3: "#14B8A6" },
  qualidade: { logo: "assets/logos/qualidade.png", color1: "#16A34A", color2: "#22C55E", color3: "#84CC16" }
};

const letters = ["A", "B", "C", "D", "E", "F"];

/* ----------------------------- Estado ------------------------------- */
const state = {
  selectedModule: null,
  selectedGroup: null,
  selectedQuestions: [],
  currentQuestionIndex: 0,
  answers: [],
  quizMode: "rapido",
  competitiveMode: readJSON(STORAGE_COMP_MODE, false),
  participantName: "",
  pendingModuleId: null,
  resultSaved: false
};

/* --------------------------- Utilidades ----------------------------- */
function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

// Escapa qualquer texto vindo de dados/usuário antes de ir pro innerHTML.
function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandomItems(arr, count) {
  return shuffleArray(arr).slice(0, count);
}

function getTheme(moduleId) {
  return moduleThemes[moduleId] || moduleThemes[DEFAULT_THEME_ID];
}

function applyTheme(moduleId) {
  const theme = getTheme(moduleId);
  root.style.setProperty("--theme-1", theme.color1);
  root.style.setProperty("--theme-2", theme.color2);
  root.style.setProperty("--theme-3", theme.color3);
}

function getModes() {
  return QUIZ_MODES[state.quizMode] || QUIZ_MODES.rapido;
}

function getModeLabel() {
  return getModes().label;
}

function getModeCount() {
  return getModes().count;
}

function getModules() {
  return (typeof quizData !== "undefined" && Array.isArray(quizData.modules))
    ? quizData.modules
    : [];
}

// Um grupo só é jogável se tem perguntas suficientes e cada pergunta usada
// tem exatamente uma alternativa correta. Evita travar a tela com dado ruim.
function isQuestionValid(question) {
  return question
    && Array.isArray(question.options)
    && question.options.length >= 2
    && question.options.filter(o => o && o.correct).length === 1;
}

function getEligibleGroups(module, requiredCount) {
  return (module.groups || []).filter(group =>
    Array.isArray(group.questions)
    && group.questions.filter(isQuestionValid).length >= requiredCount
  );
}

function setQuizMode(mode) {
  if (QUIZ_MODES[mode]) state.quizMode = mode;
  renderModules();
}

function renderScreen(html) {
  if (!app) return;
  app.innerHTML = `<div class="screen">${html}</div>`;
}

/* --------------------------- Conteúdo fixo -------------------------- */
function getMotivation(percent) {
  if (percent < 60) {
    return "Boa tentativa. Você já começou a construir a lógica do 6W2H e pode evoluir ainda mais.";
  }
  if (percent < 85) {
    return "Muito bom. Seu raciocínio está alinhado com a estrutura do 6W2H e você está no caminho certo.";
  }
  return "Excelente desempenho. Você demonstrou forte compreensão de 6W2H — com certeza é um mestre solucionador de perda!";
}

function normalizeQuestionType(type) {
  return (type || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\//g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getQuestionTip(type) {
  const normalized = normalizeQuestionType(type);

  if (normalized.includes("definicao focada")) {
    return { title: "Definição focada", text: "Estrutura de uma boa definição focada: • Perda: qual o impacto do problema? • Defeito: o que não está funcionando como deveria? • Efeito: qual fenômeno o defeito está gerando?" };
  }
  if (normalized.includes("o que") || normalized.includes("o quê")) {
    return { title: "O quê", text: "Descreva quais fenômenos estão acontecendo com o componente/produto em relação às partes/componentes da máquina." };
  }
  if (normalized.includes("como")) {
    return { title: "Como", text: "Descreva como o fenômeno está acontecendo." };
  }
  if (normalized.includes("onde")) {
    return { title: "Onde", text: "Quais os pontos de transformação?" };
  }
  if (normalized.includes("quando")) {
    return { title: "Quando", text: "Quando o problema começou? (Start-up, operação normal, change-over, shutdown)." };
  }
  if (normalized === "qual" || normalized.includes("qual ")) {
    return { title: "Qual", text: "Marcas, SKUs, formatos, materiais afetados, transações (e quais NÃO são)." };
  }
  if (normalized.includes("quem e para quem") || normalized.includes("quem para quem")) {
    return { title: "Quem e para quem", text: "Quais linhas, sistemas, operações e departamentos tiveram o problema? Quais NÃO viram o problema?" };
  }
  if (normalized.includes("quanto")) {
    return { title: "Quanto", text: "Quantas vezes a perda acontece? Extensão do dano por perda? Frequência?" };
  }
  return { title: "Dica", text: "Analise o cenário e escolha a alternativa que melhor descreve o problema de forma clara e objetiva." };
}

/* ----------------------- Modo competitivo --------------------------- */
function updateCompetitiveToggleUI() {
  if (!competitiveToggle) return;
  competitiveToggle.textContent = `🏆 Modo competitivo: ${state.competitiveMode ? "ON" : "OFF"}`;
  competitiveToggle.classList.toggle("active", state.competitiveMode);
}

function toggleCompetitiveMode() {
  state.competitiveMode = !state.competitiveMode;
  localStorage.setItem(STORAGE_COMP_MODE, JSON.stringify(state.competitiveMode));
  updateCompetitiveToggleUI();
}

function handleModuleSelection(moduleId) {
  if (state.competitiveMode) {
    openParticipantModal(moduleId);
    return;
  }
  startModule(moduleId);
}

function openParticipantModal(moduleId) {
  const module = getModules().find(m => m.id === moduleId);
  if (!module || !nameModal) return;

  state.pendingModuleId = moduleId;

  if (participantAreaLabel) participantAreaLabel.textContent = `Área: ${module.name}`;
  if (participantModeLabel) participantModeLabel.textContent = `Modo: ${getModeLabel()}`;
  if (participantNameInput) participantNameInput.value = "";
  if (nameModalError) nameModalError.textContent = "";

  nameModal.classList.remove("hidden");
  setTimeout(() => participantNameInput?.focus(), 50);
}

function closeParticipantModal() {
  state.pendingModuleId = null;
  if (nameModalError) nameModalError.textContent = "";
  nameModal?.classList.add("hidden");
}

function confirmParticipantName() {
  const typedName = (participantNameInput?.value || "").trim();

  if (!typedName) {
    if (nameModalError) nameModalError.textContent = "Digite o nome do participante para continuar.";
    participantNameInput?.focus();
    return;
  }

  state.participantName = typedName;
  const moduleId = state.pendingModuleId;
  closeParticipantModal();
  if (moduleId) startModule(moduleId);
}

function saveCompetitiveResult(result) {
  const existing = readJSON(STORAGE_RESULTS, []);
  existing.push(result);
  localStorage.setItem(STORAGE_RESULTS, JSON.stringify(existing));
}

/* ------------------------------ Telas ------------------------------- */
function goHome() {
  state.selectedModule = null;
  state.selectedGroup = null;
  state.selectedQuestions = [];
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.resultSaved = false;

  applyTheme(DEFAULT_THEME_ID);
  updateCompetitiveToggleUI();

  const logos = getModules().map(module => {
    const theme = getTheme(module.id);
    return `
      <div class="home-module-logo-item" title="${escapeHtml(module.name)}">
        <img src="${theme.logo}" alt="Logo ${escapeHtml(module.name)}" class="home-module-logo-img">
      </div>`;
  }).join("");

  renderScreen(`
    <section class="hero">
      <div class="hero-card">
        <div class="kicker">⚡ Treinamento pilar de LE</div>
        <h2 class="hero-title">6W2H de uma forma <span class="gradient-text">divertida e visual</span></h2>
        <p class="hero-text">
          Escolha a sua área, veja cases reais da operação e descubra a melhor resposta
          para cada etapa do 6W2H. A cada rodada o sistema sorteia um cenário diferente.
        </p>
        <div class="hero-actions">
          <button type="button" class="btn btn-primary btn-pulse" data-action="go-modules">Começar agora</button>
          <button type="button" class="btn btn-outline" data-action="open-ranking">Ver ranking</button>
        </div>
      </div>

      <aside class="side-panel">
        <div class="metric-card">
          <span class="metric-label">Áreas disponíveis</span>
          <strong class="metric-number">${getModules().length}</strong>
          <div class="home-module-logos">${logos}</div>
        </div>
        <div class="feature-list">
          <div class="feature-item"><strong>🎯 Aprendizado por área</strong><small>Cada área traz situações ligadas à sua realidade.</small></div>
          <div class="feature-item"><strong>🔀 Sorteio automático</strong><small>Os cenários são escolhidos aleatoriamente para variar os casos.</small></div>
          <div class="feature-item"><strong>🏁 Resultado e ranking</strong><small>Ao final, veja acertos, feedback e a classificação dos participantes.</small></div>
        </div>
      </aside>
    </section>
  `);
}

function renderModules() {
  applyTheme(DEFAULT_THEME_ID);
  const isChallenge = state.quizMode === "completo";

  const cards = getModules().map(module => {
    const theme = getTheme(module.id);
    const eligible = getEligibleGroups(module, getModeCount());
    const ready = eligible.length > 0;
    const tag = ready
      ? `${eligible.length} cenário${eligible.length !== 1 ? "s" : ""}`
      : "Em breve";

    return `
      <button
        type="button"
        class="module-card ${isChallenge ? "module-card-challenge" : ""} ${ready ? "" : "module-card-disabled"}"
        style="background: linear-gradient(135deg, ${theme.color1}, ${theme.color2});"
        data-action="pick-module"
        data-id="${escapeHtml(module.id)}"
        ${ready ? "" : "disabled aria-disabled=\"true\""}
      >
        <div class="module-card-top">
          <div class="module-icon"><img src="${theme.logo}" alt="Logo ${escapeHtml(module.name)}" class="module-logo"></div>
          <span class="module-tag">${escapeHtml(tag)}</span>
        </div>
        <h3>${escapeHtml(module.name)}</h3>
        <p>${escapeHtml(module.description || "Módulo do quiz.")}</p>
        ${isChallenge && ready ? `<div class="challenge-badge-inline">DESAFIO</div>` : ""}
        <div class="module-footer">
          <span>${ready ? (isChallenge ? "Fazer 6W2H completo" : "Entrar no desafio") : "Sem cenários para este modo"}</span>
          <span class="module-arrow">→</span>
        </div>
      </button>`;
  }).join("");

  renderScreen(`
    <section class="${isChallenge ? "challenge-screen" : ""}">
      <div class="section-header">
        <div>
          <h2>${isChallenge ? "Modo completo ativado" : "Escolha sua área"}</h2>
          <p>${isChallenge
            ? "Você escolheu o 6W2H completo. Selecione a área e enfrente o cenário com todas as perguntas."
            : "Selecione o modo do quiz e a área."}</p>
        </div>
      </div>

      <div class="mode-selector ${isChallenge ? "mode-selector-challenge" : ""}">
        <button type="button" class="btn ${state.quizMode === "rapido" ? "btn-primary" : "btn-light"}" data-action="set-mode" data-mode="rapido">
          Modo rápido (3 perguntas)
        </button>
        <button type="button" class="btn ${state.quizMode === "completo" ? "btn-danger mode-complete-active" : "btn-light"}" data-action="set-mode" data-mode="completo">
          Modo 6W2H completo
        </button>
      </div>

      <div class="modules-grid ${isChallenge ? "modules-grid-challenge" : ""}">${cards}</div>

      <div class="actions">
        <button type="button" class="btn btn-dark" data-action="go-home">Voltar ao início</button>
      </div>
    </section>
  `);
}

function activateModuleCard(card, moduleId) {
  if (state.quizMode === "completo" && card) {
    card.classList.add("module-card-activated");
    setTimeout(() => handleModuleSelection(moduleId), 380);
  } else {
    handleModuleSelection(moduleId);
  }
}

function mapQuestion(group, question) {
  return {
    groupId: group.id,
    groupTitle: group.title,
    scenario: group.scenario,
    type: question.type,
    prompt: question.prompt,
    explanation: question.explanation || "",
    options: shuffleArray(question.options)
  };
}

function startModule(moduleId) {
  const module = getModules().find(m => m.id === moduleId);
  if (!module) return;

  applyTheme(module.id);
  const requiredCount = getModeCount();
  const eligibleGroups = getEligibleGroups(module, requiredCount);

  if (eligibleGroups.length < 1) {
    renderScreen(`
      <section class="alert-panel">
        <h2>${escapeHtml(module.name)}</h2>
        <div class="alert-box">
          Este módulo ainda não tem <strong>nenhum cenário com pelo menos ${requiredCount} perguntas válidas</strong>,
          que é o mínimo para o modo selecionado.
        </div>
        <div class="actions">
          <button type="button" class="btn btn-primary" data-action="go-modules">Escolher outra área</button>
          <button type="button" class="btn btn-light" data-action="go-home">Voltar ao início</button>
        </div>
      </section>
    `);
    return;
  }

  const selectedGroup = pickRandomItems(eligibleGroups, 1)[0];
  const validQuestions = selectedGroup.questions.filter(isQuestionValid);

  // Modo completo: ordem fixa das 8 perguntas. Modo rápido: 3 sorteadas.
  const chosen = state.quizMode === "completo"
    ? validQuestions.slice(0, requiredCount)
    : pickRandomItems(validQuestions, requiredCount);

  state.selectedModule = module;
  state.selectedGroup = selectedGroup;
  state.selectedQuestions = chosen.map(q => mapQuestion(selectedGroup, q));
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.resultSaved = false;

  renderQuestion();
}

function renderQuestion() {
  const total = state.selectedQuestions.length;
  const index = state.currentQuestionIndex;
  const question = state.selectedQuestions[index];
  const progress = Math.round(((index + 1) / total) * 100);
  const theme = getTheme(state.selectedModule.id);
  const tip = getQuestionTip(question.type);

  const optionsHtml = question.options.map((option, i) => `
    <label class="option" data-index="${i}">
      <input type="radio" name="answer" value="${i}" />
      <span class="option-letter">${letters[i] || (i + 1)}</span>
      <span class="option-text">${escapeHtml(option.text)}</span>
    </label>
  `).join("");

  renderScreen(`
    <section>
      <div class="progress-wrap">
        <div class="progress-top">
          <span>Área: <strong>${escapeHtml(state.selectedModule.name)}</strong></span>
          <span>Pergunta ${index + 1} de ${total}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width: ${progress}%"></div></div>
      </div>

      <div class="quiz-layout">
        <aside class="quiz-side">
          <div class="side-widget primary">
            <div class="side-widget-logo-wrap">
              <img src="${theme.logo}" alt="Logo ${escapeHtml(state.selectedModule.name)}" class="side-widget-logo">
            </div>
            <h4>Cenário sorteado</h4>
            <p><strong>${escapeHtml(question.groupTitle)}</strong></p>
          </div>
          <div class="side-widget secondary side-widget-tip">
            <h4 class="tip-title">${escapeHtml(tip.title)}</h4>
            <div class="tip-content-box"><p class="tip-copy">${escapeHtml(tip.text)}</p></div>
          </div>
        </aside>

        <div class="quiz-panel">
          <div class="badge-row">
            <span class="badge badge-with-logo">
              <img src="${theme.logo}" alt="Logo ${escapeHtml(state.selectedModule.name)}" class="badge-logo">
              ${escapeHtml(state.selectedModule.name)}
            </span>
          </div>

          <div class="scenario-box">
            <strong>Cenário</strong>
            <p>${escapeHtml(question.scenario)}</p>
          </div>

          <p class="question-type">${escapeHtml(question.type)}</p>
          <h3 class="question-title">${escapeHtml(question.prompt)}</h3>

          <div class="options" role="radiogroup" aria-label="Alternativas">${optionsHtml}</div>

          <div id="questionHint" class="hint" aria-live="polite"></div>
          <div id="reviewBox" class="review-box"></div>

          <div class="actions">
            <button type="button" id="confirmBtn" class="btn btn-primary" data-action="submit-answer">Confirmar resposta</button>
            <button type="button" id="nextBtn" class="btn btn-accent" data-action="next-question" hidden>Avançar</button>
            <button type="button" class="btn btn-light" data-action="go-modules">Trocar área</button>
          </div>
        </div>
      </div>
    </section>
  `);
}

function submitAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const hint = document.getElementById("questionHint");
  const reviewBox = document.getElementById("reviewBox");
  const confirmBtn = document.getElementById("confirmBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!selected) {
    if (hint) {
      hint.classList.remove("hint-ok");
      hint.classList.add("hint-error");
      hint.textContent = "Selecione uma alternativa antes de continuar.";
    }
    return;
  }

  const current = state.selectedQuestions[state.currentQuestionIndex];
  const selectedIndex = Number(selected.value);
  const selectedOption = current.options[selectedIndex];
  const correctOption = current.options.find(opt => opt.correct);

  state.answers.push({
    groupTitle: current.groupTitle,
    type: current.type,
    prompt: current.prompt,
    selected: selectedOption.text,
    correct: correctOption.text,
    explanation: current.explanation || "",
    isCorrect: !!selectedOption.correct
  });

  document.querySelectorAll(".option").forEach((el, i) => {
    el.classList.add("locked");
    const input = el.querySelector("input");
    if (input) input.disabled = true;
    if (current.options[i].correct) el.classList.add("correct");
    if (i === selectedIndex && !current.options[i].correct) el.classList.add("wrong");
  });

  if (confirmBtn) confirmBtn.disabled = true;
  if (nextBtn) nextBtn.hidden = false;

  const last = state.currentQuestionIndex === state.selectedQuestions.length - 1;
  if (nextBtn) nextBtn.textContent = last ? "Ver resultado" : "Avançar";

  if (reviewBox) {
    reviewBox.innerHTML = `
      <div class="feedback-item ${selectedOption.correct ? "ok" : "error"}">
        <strong>${selectedOption.correct ? "Resposta correta" : "Vamos revisar a resposta"}</strong>
        <p><strong>Correta:</strong> ${escapeHtml(correctOption.text)}</p>
        <p><strong>Explicação:</strong> ${escapeHtml(current.explanation || "Sem explicação cadastrada.")}</p>
      </div>`;
  }

  if (hint) {
    hint.classList.toggle("hint-ok", selectedOption.correct);
    hint.classList.toggle("hint-error", !selectedOption.correct);
    hint.textContent = "Resposta confirmada.";
  }
}

function nextQuestion() {
  state.currentQuestionIndex++;
  if (state.currentQuestionIndex >= state.selectedQuestions.length) {
    renderResult();
  } else {
    renderQuestion();
  }
}

function renderResult() {
  const total = state.answers.length;
  const hits = state.answers.filter(a => a.isCorrect).length;
  const percent = total ? Math.round((hits / total) * 100) : 0;
  const angle = Math.round((percent / 100) * 360);

  if (state.competitiveMode && state.participantName && !state.resultSaved) {
    saveCompetitiveResult({
      nome: state.participantName,
      area: state.selectedModule?.name || "",
      areaId: state.selectedModule?.id || "",
      modo: getModeLabel(),
      cenario: state.selectedGroup?.title || "",
      acertos: hits,
      totalPerguntas: total,
      percentual: percent,
      dataHora: new Date().toISOString()
    });
    state.resultSaved = true;
  }

  if (percent >= 85) launchConfetti();

  const detail = state.answers.map(answer => `
    <div class="feedback-item ${answer.isCorrect ? "ok" : "error"}">
      <strong>${escapeHtml(answer.groupTitle)} • ${escapeHtml(answer.type)}</strong>
      <p><strong>Pergunta:</strong> ${escapeHtml(answer.prompt)}</p>
      <p><strong>Sua resposta:</strong> ${escapeHtml(answer.selected)}</p>
      <p><strong>Resposta correta:</strong> ${escapeHtml(answer.correct)}</p>
      <p><strong>Explicação:</strong> ${escapeHtml(answer.explanation || "Sem explicação cadastrada.")}</p>
    </div>`).join("");

  const rankingBtn = state.competitiveMode
    ? `<button type="button" class="btn btn-outline" data-action="open-ranking">Ver ranking</button>`
    : "";

  renderScreen(`
    <section class="result-panel" style="--score-angle:${angle}deg;">
      <div class="result-header">
        <div class="score-ring">
          <div class="score-inner">
            <div class="score-value">${percent}%</div>
            <div class="score-label">${hits} de ${total} acertos</div>
          </div>
        </div>
        <div class="result-copy">
          <h2>Resultado final</h2>
          <p><strong>Área:</strong> ${escapeHtml(state.selectedModule.name)}</p>
          ${state.competitiveMode && state.participantName ? `<p><strong>Participante:</strong> ${escapeHtml(state.participantName)}</p>` : ""}
          <p>${getMotivation(percent)}</p>
          <div class="pill-row">
            <span class="small-pill">🏆 ${hits} acertos</span>
            <span class="small-pill">📚 ${total} perguntas</span>
            <span class="small-pill">🎯 ${percent}% desempenho</span>
          </div>
        </div>
      </div>

      <div class="section-header section-header-light">
        <div>
          <h3>Detalhamento das respostas</h3>
          <p>Veja onde acertou e onde pode evoluir.</p>
        </div>
      </div>

      <div class="result-grid">${detail}</div>

      <div class="actions">
        <button type="button" class="btn btn-primary" data-action="restart-module" data-id="${escapeHtml(state.selectedModule.id)}">Refazer área</button>
        <button type="button" class="btn btn-accent" data-action="go-modules">Escolher outra área</button>
        ${rankingBtn}
        <button type="button" class="btn btn-light" data-action="go-home">Voltar ao início</button>
      </div>
    </section>
  `);
}

/* ----------------------------- Ranking ------------------------------ */
function formatDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "-";
  return d.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function renderRanking() {
  applyTheme(DEFAULT_THEME_ID);
  const results = readJSON(STORAGE_RESULTS, []);

  const sorted = [...results].sort((a, b) => {
    if (b.percentual !== a.percentual) return b.percentual - a.percentual;
    if (b.acertos !== a.acertos) return b.acertos - a.acertos;
    return new Date(b.dataHora) - new Date(a.dataHora);
  });

  const body = sorted.length === 0
    ? `<div class="ranking-empty">
         <div class="ranking-empty-icon">🏁</div>
         <strong>Nenhuma partida registrada ainda.</strong>
         <p>Ative o modo competitivo no topo e jogue uma rodada para aparecer aqui.</p>
       </div>`
    : `<div class="ranking-table-wrap">
         <table class="ranking-table">
           <thead>
             <tr><th>#</th><th>Participante</th><th>Área</th><th>Cenário</th><th>Modo</th><th>Acertos</th><th>%</th><th>Data</th></tr>
           </thead>
           <tbody>
             ${sorted.map((r, i) => {
               const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1);
               return `
                 <tr class="${i < 3 ? "ranking-top" : ""}">
                   <td class="ranking-pos">${medal}</td>
                   <td>${escapeHtml(r.nome)}</td>
                   <td>${escapeHtml(r.area)}</td>
                   <td>${escapeHtml(r.cenario)}</td>
                   <td>${escapeHtml(r.modo)}</td>
                   <td>${escapeHtml(r.acertos)}/${escapeHtml(r.totalPerguntas)}</td>
                   <td><span class="ranking-score">${escapeHtml(r.percentual)}%</span></td>
                   <td class="ranking-date">${escapeHtml(formatDate(r.dataHora))}</td>
                 </tr>`;
             }).join("")}
           </tbody>
         </table>
       </div>`;

  renderScreen(`
    <section class="ranking-panel">
      <div class="section-header section-header-light">
        <div>
          <h2>🏅 Ranking de participantes</h2>
          <p>${sorted.length} partida${sorted.length !== 1 ? "s" : ""} registrada${sorted.length !== 1 ? "s" : ""} neste computador.</p>
        </div>
      </div>
      ${body}
      <div class="actions">
        <button type="button" class="btn btn-primary" data-action="go-modules">Jogar uma rodada</button>
        ${sorted.length ? `<button type="button" class="btn btn-danger" data-action="clear-ranking">Limpar ranking</button>` : ""}
        <button type="button" class="btn btn-light" data-action="go-home">Voltar ao início</button>
      </div>
    </section>
  `);
}

function clearRanking() {
  if (!confirm("Tem certeza que deseja apagar todo o ranking deste computador? Esta ação não pode ser desfeita.")) return;
  localStorage.removeItem(STORAGE_RESULTS);
  renderRanking();
}

/* ----------------------------- Confetti ----------------------------- */
function launchConfetti() {
  if (!confettiLayer) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  confettiLayer.innerHTML = "";
  const colors = ["#2E7DF6", "#14D4C8", "#22C55E", "#F59E0B", "#EC4899", "#8B5CF6"];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${-10 - Math.random() * 20}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.4}s`;
    confettiLayer.appendChild(piece);
  }
  setTimeout(() => { confettiLayer.innerHTML = ""; }, 3500);
}

/* --------------------------- Roteamento ----------------------------- */
// Event delegation: um único listener cuida de tudo via data-action.
const actions = {
  "go-home": goHome,
  "go-modules": renderModules,
  "open-ranking": renderRanking,
  "clear-ranking": clearRanking,
  "toggle-competitive": toggleCompetitiveMode,
  "submit-answer": submitAnswer,
  "next-question": nextQuestion,
  "close-modal": closeParticipantModal,
  "confirm-name": confirmParticipantName,
  "set-mode": (el) => setQuizMode(el.dataset.mode),
  "pick-module": (el) => activateModuleCard(el, el.dataset.id),
  "restart-module": (el) => startModule(el.dataset.id)
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger || trigger.disabled) return;
  const handler = actions[trigger.dataset.action];
  if (handler) handler(trigger);
});

// Seleção visual da alternativa (o estado real vem do radio nativo).
document.addEventListener("change", (event) => {
  if (event.target.matches('input[name="answer"]')) {
    document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
    event.target.closest(".option")?.classList.add("selected");
    const hint = document.getElementById("questionHint");
    if (hint) hint.textContent = "";
  }
});

// Teclado no modal: Enter confirma, Esc cancela.
document.addEventListener("keydown", (event) => {
  if (nameModal?.classList.contains("hidden")) return;
  if (event.key === "Enter") { event.preventDefault(); confirmParticipantName(); }
  if (event.key === "Escape") { event.preventDefault(); closeParticipantModal(); }
});

// Fecha o modal ao clicar fora do card.
nameModal?.addEventListener("click", (event) => {
  if (event.target === nameModal) closeParticipantModal();
});

/* ------------------------------ Boot -------------------------------- */
updateCompetitiveToggleUI();
applyTheme(DEFAULT_THEME_ID);
goHome();
