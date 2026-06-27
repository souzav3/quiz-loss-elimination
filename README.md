# Desafio 6W2H

Aplicativo web interno de treinamento gamificado de **6W2H** para ambiente industrial.
Feito em HTML, CSS e JavaScript puro, sem framework e sem backend — roda 100% localmente no navegador.

## Como rodar

Por usar apenas arquivos estáticos, basta abrir o `index.html` no navegador.
Se algum logo não aparecer ao abrir direto pelo arquivo, sirva a pasta por um servidor local:

```bash
# Python 3
python -m http.server 8000
# depois acesse http://localhost:8000
```

## Estrutura

```
desafio-6w2h/
├── index.html      # estrutura da página
├── style.css       # layout e identidade visual
├── app.js          # lógica do quiz, ranking e modo competitivo
├── data.js         # conteúdo (módulos, cenários, perguntas)
└── assets/logos/   # logos (ver lista abaixo)
```

## Logos necessárias

Coloque as imagens em `assets/logos/` com estes nomes:

`logoapp.png`, `pillar.png`, `planta.png`, `phc.png`, `baby.png`, `fem.png`,
`fhc.png`, `logistica.png`, `qualidade.png`

## Como usar o app

1. Na home, clique em **Começar agora**.
2. Escolha o modo: **Rápido** (3 perguntas) ou **6W2H completo** (8 perguntas).
3. Escolha a área. Cada card mostra quantos cenários estão disponíveis para o modo
   selecionado; áreas sem conteúdo suficiente ficam desabilitadas.
4. O sistema sorteia um cenário, você responde uma pergunta por vez, confirma,
   vê o feedback e avança até o resultado final.

## Modo competitivo e ranking

- Ative o **Modo competitivo** no topo. Ao escolher a área, o app pede o nome do participante.
- Ao final, o resultado é salvo no `localStorage` do navegador (chave `quizCompetitiveResults`).
- O botão **🏅 Ranking** mostra a classificação ordenada por desempenho.
  Há também a opção de limpar o ranking.

> Os resultados ficam salvos apenas no computador/navegador em que foram jogados —
> não há sincronização entre máquinas.

## Adicionar conteúdo

Edite `data.js`. Cada área (`module`) tem `groups` (cenários), e cada grupo tem
`questions`. Uma pergunta só é considerada válida quando tem **exatamente uma**
alternativa com `correct: true` e pelo menos 2 opções — perguntas inválidas são
ignoradas automaticamente para não quebrar o quiz.

Tipos de pergunta reconhecidos: O quê, Como, Onde, Quando, Qual, Quem e para quem,
Quanto e Definição focada.
