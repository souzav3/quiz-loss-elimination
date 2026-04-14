const app = document.getElementById("app");
const root = document.documentElement;
const confettiLayer = document.getElementById("confetti-layer");

const moduleThemes = {
  phc: {
    logo: "assets/logos/phc.png",
    color1: "#2E7DF6",
    color2: "#67A6FF",
    color3: "#14D4C8"
  },
  baby: {
    logo: "assets/logos/baby.png",
    color1: "#EC4899",
    color2: "#F472B6",
    color3: "#F59E0B"
  },
  fem: {
    logo: "assets/logos/fem.png",
    color1: "#A855F7",
    color2: "#D946EF",
    color3: "#7C3AED"
  },
  fhc: {
    logo: "assets/logos/fhc.png",
    color1: "#0EA5E9",
    color2: "#06B6D4",
    color3: "#22C55E"
  },
  logistica: {
    logo: "assets/logos/logistica.png",
    color1: "#2563EB",
    color2: "#60A5FA",
    color3: "#14B8A6"
  },
  qualidade: {
    logo: "assets/logos/qualidade.png",
    color1: "#16A34A",
    color2: "#22C55E",
    color3: "#84CC16"
  }
};

const letters = ["A", "B", "C", "D", "E", "F"];

const state = {
  selectedModule: null,
  selectedGroups: [],
  selectedQuestions: [],
  currentQuestionIndex: 0,
  answers: [],
  selectedOptionIndex: null,
  quizMode: 3
};

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
  return moduleThemes[moduleId] || moduleThemes.logistica;
}

function applyTheme(moduleId) {
  const theme = getTheme(moduleId);
  root.style.setProperty("--theme-1", theme.color1);
  root.style.setProperty("--theme-2", theme.color2);
  root.style.setProperty("--theme-3", theme.color3);
}

function setQuizMode(mode) {
  state.quizMode = mode;
  renderModules();
}

function renderScreen(html) {
  if (!app) return;
  app.innerHTML = `<div class="screen">${html}</div>`;
}

function getMotivation(percent) {
  if (percent < 60) {
    return "Boa tentativa. Você já começou a construir a lógica do 6W2H e pode evoluir ainda mais.";
  }

  if (percent < 85) {
    return "Muito bom. Seu raciocínio está alinhado com a estrutura do 6W2H e você está no caminho certo.";
  }

  return "Excelente desempenho. Você demonstrou forte compreensão de 6W2H, você com certeza é um mestre solucionador de perda!";
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
    return {
      title: "Definição focada",
      text: "Estrutura de uma boa definição focada: • Perda: Qual o impacto do problema? • Defeito: O que não está funcionando como deveria? • Efeito: Qual fenômeno o defeito está gerando?"
    };
  }

  if (normalized.includes("o que") || normalized.includes("o quê")) {
    return {
      title: "O quê",
      text: "Descreva quais fenômenos estão acontecendo com o componente / produto em relação às partes / componentes da máquina."
    };
  }

  if (normalized.includes("como")) {
    return {
      title: "Como",
      text: "Descreva como o fenômeno está acontecendo."
    };
  }

  if (normalized.includes("onde")) {
    return {
      title: "Onde",
      text: "Quais os pontos de transformações?"
    };
  }

  if (normalized.includes("quando")) {
    return {
      title: "Quando",
      text: "Quando o problema começou? (Start-up, Operação normal, change-over, shutdown)."
    };
  }

  if (normalized === "qual" || normalized.includes("qual ")) {
    return {
      title: "Qual",
      text: "Marcas, SKUs, formatos, materiais afetados, transações (quais não são)."
    };
  }

  if (
    normalized.includes("quem e para quem") ||
    normalized.includes("quem para quem")
  ) {
    return {
      title: "Quem e para quem",
      text: "Quais linhas, sistemas, operações e departamentos tiveram o problema? Que NÃO viram o problema?"
    };
  }

  if (normalized.includes("quanto")) {
    return {
      title: "Quanto",
      text: "Quantas vezes a perda acontece? Extensão do dano por perda? Frequência?"
    };
  }

  return {
    title: "Dica",
    text: "Analise o cenário e escolha a alternativa que melhor descreve o problema de forma clara e objetiva."
  };
}

function goHome() {
  state.selectedModule = null;
  state.selectedGroups = [];
  state.selectedQuestions = [];
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.selectedOptionIndex = null;

  applyTheme("logistica");

  renderScreen(`
    <section class="hero">
      <div class="hero-card">
        <div class="kicker">⚡ Treinamento pilar de LE</div>

        <h2 class="hero-title">
          6W2H de uma forma
          <span class="gradient-text">divertida e visual</span>
        </h2>

        <p class="hero-text">
          Escolha a sua área, veja cases reais da sua área e descubra a melhor resposta
          para cada etapa do 6W2H. O sistema utiliza grupos aleatórios para cada rodada ser um cenário diferente.
        </p>

        <div class="hero-actions">
          <button type="button" class="btn btn-primary btn-pulse" onclick="renderModules()">
            Começar agora
          </button>
        </div>
      </div>

      <aside class="side-panel">
        <div class="metric-card">
          Áreas disponíveis

          <div class="home-module-logos">
            ${(quizData?.modules || []).map(module => {
              const theme = getTheme(module.id);
              return `
                <div class="home-module-logo-item" title="${module.name}">
                  <img src="${theme.logo}" alt="Logo ${module.name}" class="home-module-logo-img">
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <div class="feature-list">
          <div class="feature-item">
            <strong>🎯 Aprendizado por área</strong>
            <small>Cada área responde com base em situações ligadas à sua área.</small>
          </div>

          <div class="feature-item">
            <strong>🔀 Sorteio automático</strong>
            <small>Os grupos são escolhidos aleatoriamente para variar os casos.</small>
          </div>

          <div class="feature-item">
            <strong>🏁 Resultado</strong>
            <small>Ao final, o colaborador vê acertos, erros e feedback de cada caso.</small>
          </div>
        </div>
      </aside>
    </section>
  `);
}

function renderModules() {
  applyTheme("logistica");

  const isChallengeMode = state.quizMode === 9;

  const cards = (quizData.modules || []).map(module => {
    const theme = getTheme(module.id);
    const totalGroups = module.groups?.length || 0;

    return `
      <button
        type="button"
        class="module-card ${isChallengeMode ? "module-card-challenge" : ""}"
        style="background: linear-gradient(135deg, ${theme.color1}, ${theme.color2});"
        onclick="activateModuleCard(event, '${module.id}')"
      >
        <div class="module-card-top">
          <div class="module-icon">
            <img src="${theme.logo}" alt="Logo ${module.name}" class="module-logo">
          </div>
          <span class="module-tag">${totalGroups} grupo${totalGroups !== 1 ? "s" : ""}</span>
        </div>

        <h3>${module.name}</h3>
        <p>${module.description || "Módulo do quiz."}</p>

        ${isChallengeMode ? `
          <div class="challenge-badge-inline">DESAFIO</div>
        ` : ""}

        <div class="module-footer">
          <span>${isChallengeMode ? "Entrar em modo extremo" : "Entrar no desafio"}</span>
          <span class="module-arrow">→</span>
        </div>
      </button>
    `;
  }).join("");

  renderScreen(`
    <section class="${isChallengeMode ? "challenge-screen" : ""}">
      <div class="section-header">
        <div>
          <h2>${isChallengeMode ? "Modo completo ativado" : "Escolha sua área"}</h2>
          <p>
            ${
              isChallengeMode
                ? "Você escolheu o 6W2H completo. Agora selecione a área e enfrente o cenário com todas as perguntas."
                : "Selecione a área e defina o modo do quiz."
            }
          </p>
        </div>
      </div>

      <div class="mode-selector ${isChallengeMode ? "mode-selector-challenge" : ""}">
        <button
          type="button"
          class="btn ${state.quizMode === 3 ? "btn-primary" : "btn-light"}"
          onclick="setQuizMode(3)"
        >
          Modo rápido • 3 perguntas
        </button>

        <button
          type="button"
          class="btn ${state.quizMode === 9 ? "btn-danger mode-complete-active" : "btn-light"}"
          onclick="setQuizMode(9)"
        >
          Modo 6W2H completo
        </button>
      </div>

      <div class="modules-grid ${isChallengeMode ? "modules-grid-challenge" : ""}">
        ${cards}
      </div>

      <div class="actions">
        <button type="button" class="btn btn-dark" onclick="goHome()">Voltar ao início</button>
      </div>
    </section>
  `);
}

function activateModuleCard(event, moduleId) {
  const card = event.currentTarget;
  const isChallengeMode = state.quizMode === 9;

  if (!card) {
    startModule(moduleId);
    return;
  }

  if (isChallengeMode) {
    card.classList.add("module-card-activated");
    setTimeout(() => {
      startModule(moduleId);
    }, 380);
  } else {
    startModule(moduleId);
  }
}

function startModule(moduleId) {
  const module = (quizData.modules || []).find(m => m.id === moduleId);
  if (!module) return;

  applyTheme(module.id);

  const requiredQuestions = state.quizMode === 9 ? 9 : 3;

  // filtra apenas grupos com perguntas suficientes para o modo escolhido
  const eligibleGroups = (module.groups || []).filter(group =>
    Array.isArray(group.questions) && group.questions.length >= requiredQuestions
  );

  if (eligibleGroups.length < 1) {
    renderScreen(`
      <section class="alert-panel">
        <h2>${module.name}</h2>

        <div class="alert-box">
          Este módulo ainda não possui <strong>1 grupo com pelo menos ${requiredQuestions} perguntas cadastradas</strong>,
          que é o mínimo para o modo selecionado.
        </div>

        <div class="actions">
          <button type="button" class="btn btn-primary" onclick="renderModules()">Escolher outro módulo</button>
          <button type="button" class="btn btn-light" onclick="goHome()">Voltar ao início</button>
        </div>
      </section>
    `);
    return;
  }

  state.selectedModule = module;

  // sorteia apenas 1 cenário
  const selectedGroup = pickRandomItems(eligibleGroups, 1)[0];
  state.selectedGroups = [selectedGroup];

  let selectedQuestions;

  if (state.quizMode === 9) {
    // pega todas as perguntas do cenário
    selectedQuestions = selectedGroup.questions.map(question => ({
      groupId: selectedGroup.id,
      groupTitle: selectedGroup.title,
      scenario: selectedGroup.scenario,
      type: question.type,
      prompt: question.prompt,
      explanation: question.explanation || "",
      options: shuffleArray(question.options)
    }));
  } else {
    // sorteia apenas 3 perguntas do cenário
    selectedQuestions = pickRandomItems(selectedGroup.questions, 3).map(question => ({
      groupId: selectedGroup.id,
      groupTitle: selectedGroup.title,
      scenario: selectedGroup.scenario,
      type: question.type,
      prompt: question.prompt,
      explanation: question.explanation || "",
      options: shuffleArray(question.options)
    }));
  }

  state.selectedQuestions = selectedQuestions;
  state.currentQuestionIndex = 0;
  state.answers = [];
  state.selectedOptionIndex = null;

  renderQuestion();
}
function renderQuestion() {
  const total = state.selectedQuestions.length;
  const index = state.currentQuestionIndex;
  const question = state.selectedQuestions[index];
  const progress = Math.round(((index + 1) / total) * 100);
  const theme = getTheme(state.selectedModule.id);
  const questionTip = getQuestionTip(question.type);

  renderScreen(`
    <section>
      <div class="progress-wrap">
        <div class="progress-top">
          <span>Área: <strong>${state.selectedModule.name}</strong></span>
          <span>Pergunta ${index + 1} de ${total}</span>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
      </div>

      <div class="quiz-layout">
        <aside class="quiz-side">
          <div class="side-widget secondary">
  <div class="side-widget-logo-wrap">
    <img src="${theme.logo}" alt="Logo ${state.selectedModule.name}" class="side-widget-logo">
  </div>
  <h4>${questionTip.title}</h4>
  <p>${questionTip.text}</p>

  <div class="tip-image-wrap">
    <img src="assets/logos/funil.png" alt="Funil de eliminação de perdas" class="tip-image">
  </div>
</div>
        </aside>

        <div class="quiz-panel">
          <div class="badge-row">
            <span class="badge badge-with-logo">
              <img src="${theme.logo}" alt="Logo ${state.selectedModule.name}" class="badge-logo">
              ${state.selectedModule.name}
            </span>
          </div>

          <div class="scenario-box">
            <strong>Cenário</strong>
            <p>${question.scenario}</p>
          </div>

          <p class="question-type">${question.type}</p>
          <h3 class="question-title">${question.prompt}</h3>

          <div class="options">
            ${question.options.map((option, i) => `
              <label class="option" data-index="${i}" onclick="selectOption(${i})">
                <input type="radio" name="answer" value="${i}" />
                <div class="option-letter">${letters[i]}</div>
                <div class="option-text">${option.text}</div>
              </label>
            `).join("")}
          </div>

          <div id="questionHint" class="hint"></div>

          <div id="reviewBox" style="margin-top: 16px;"></div>

          <div class="actions">
            <button type="button" id="confirmBtn" class="btn btn-primary" onclick="submitAnswer()">
              Confirmar resposta
            </button>

            <button type="button" id="nextBtn" class="btn btn-accent" onclick="nextQuestion()" style="display: none;">
              Avançar
            </button>

            <button type="button" class="btn btn-light" onclick="renderModules()">
              Trocar área
            </button>
          </div>
        </div>
      </div>
    </section>
  `);
}

function selectOption(index) {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(el => el.classList.remove("selected"));

  const currentOption = document.querySelector(`.option[data-index="${index}"]`);
  if (!currentOption || currentOption.classList.contains("locked")) return;

  currentOption.classList.add("selected");

  const input = currentOption.querySelector("input");
  if (input) input.checked = true;

  state.selectedOptionIndex = index;

  const hint = document.getElementById("questionHint");
  if (hint) hint.textContent = "";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const hint = document.getElementById("questionHint");
  const reviewBox = document.getElementById("reviewBox");
  const confirmBtn = document.getElementById("confirmBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!selected) {
    if (hint) {
      hint.style.color = "var(--danger)";
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
    isCorrect: selectedOption.correct
  });

  const optionElements = [...document.querySelectorAll(".option")];
  optionElements.forEach((el, i) => {
    el.classList.add("locked");

    if (current.options[i].correct) {
      el.classList.add("correct");
    }

    if (i === selectedIndex && !current.options[i].correct) {
      el.classList.add("wrong");
    }
  });

  if (confirmBtn) confirmBtn.disabled = true;
  if (nextBtn) nextBtn.style.display = "inline-flex";

  if (reviewBox) {
    reviewBox.innerHTML = `
      <div class="feedback-item ${selectedOption.correct ? "ok" : "error"}">
        <strong>${selectedOption.correct ? "Resposta correta" : "Vamos revisar a resposta"}</strong>
        <p><strong>Correta:</strong> ${correctOption.text}</p>
        <p><strong>Explicação:</strong> ${current.explanation || "Sem explicação cadastrada."}</p>
      </div>
    `;
  }

  if (hint) {
    hint.style.color = selectedOption.correct ? "var(--success)" : "var(--danger)";
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
  const percent = Math.round((hits / total) * 100);
  const angle = Math.round((percent / 100) * 360);

  if (percent >= 85) {
    launchConfetti();
  }

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
          <p><strong>Área:</strong> ${state.selectedModule.name}</p>
          <p>${getMotivation(percent)}</p>

          <div class="pill-row">
            <span class="small-pill">🏆 ${hits} acertos</span>
            <span class="small-pill">📚 ${total} perguntas</span>
            <span class="small-pill">🎯 ${percent}% desempenho</span>
          </div>
        </div>
      </div>

      <div class="section-header" style="margin-top: 12px;">
        <div>
          <h3 style="color:#142742;">Detalhamento das respostas</h3>
          <p style="color:#5b6d88;">Veja onde acertou e onde pode evoluir.</p>
        </div>
      </div>

      <div class="result-grid">
        ${state.answers.map(answer => `
          <div class="feedback-item ${answer.isCorrect ? "ok" : "error"}">
            <strong>${answer.groupTitle} • ${answer.type}</strong>
            <p><strong>Pergunta:</strong> ${answer.prompt}</p>
            <p><strong>Sua resposta:</strong> ${answer.selected}</p>
            <p><strong>Resposta correta:</strong> ${answer.correct}</p>
            <p><strong>Explicação:</strong> ${answer.explanation || "Sem explicação cadastrada."}</p>
          </div>
        `).join("")}
      </div>

      <div class="actions">
        <button type="button" class="btn btn-primary" onclick="startModule('${state.selectedModule.id}')">
          Refazer área
        </button>

        <button type="button" class="btn btn-accent" onclick="renderModules()">
          Escolher outra área
        </button>

        <button type="button" class="btn btn-light" onclick="goHome()">
          Voltar ao início
        </button>
      </div>
    </section>
  `);
}

function launchConfetti() {
  if (!confettiLayer) return;

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

  setTimeout(() => {
    confettiLayer.innerHTML = "";
  }, 3500);
}

window.goHome = goHome;
window.renderModules = renderModules;
window.startModule = startModule;
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.setQuizMode = setQuizMode;
window.activateModuleCard = activateModuleCard;

applyTheme("logistica");
goHome();
