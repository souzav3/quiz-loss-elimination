const quizData = {
  modules: [
    {
      id: "phc",
      name: "PHC",
      description: "Exemplos específicos do módulo PHC.",
      groups: []
    },
    {
      id: "baby",
      name: "Baby",
      description: "Exemplos específicos do módulo Baby.",
      groups: []
    },
    {
      id: "fem",
      name: "Fem",
      description: "Exemplos específicos do módulo Fem.",
      groups: []
    },
    {
      id: "fhc",
      name: "F&HC",
      description: "Exemplos específicos do módulo F&HC.",
      groups: []
    },
    {
      id: "logistica",
      name: "Logística",
      description: "Exemplos de abastecimento, armazenagem e expedição.",
      groups: [
        {
          id: "log-01",
          title: "Abastecimento de linha",
          scenario: "Houve atraso no abastecimento da linha porque os pallets chegaram fora da sequência necessária de produção.",
          questions: [
            {
              type: "O que",
              prompt: 'Para esse cenário, qual é o melhor "O que"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Quanto",
              prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Como",
              prompt: 'Para esse cenário, qual é o melhor "Como"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            }
          ]
        },
        {
          id: "log-02",
          title: "Organização de armazenagem",
          scenario: "Materiais semelhantes estavam armazenados em posições erradas, gerando confusão na separação e risco de envio incorreto.",
          questions: [
            {
              type: "O que",
              prompt: 'Para esse cenário, qual é o melhor "O que"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Quanto",
              prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Como",
              prompt: 'Para esse cenário, qual é o melhor "Como"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            }
          ]
        },
        {
          id: "log-03",
          title: "Conferência de expedição",
          scenario: "Alguns pedidos saíram com divergência entre o que foi separado e o que estava na documentação de expedição.",
          questions: [
            {
              type: "O que",
              prompt: 'Para esse cenário, qual é o melhor "O que"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Quanto",
              prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            },
            {
              type: "Como",
              prompt: 'Para esse cenário, qual é o melhor "Como"?',
              explanation: "Exemplo de explicação para demonstrar o funcionamento do app.",
              options: [
                { text: "Teste1.", correct: true },
                { text: "Teste2.", correct: false },
                { text: "Teste3.", correct: false },
                { text: "Teste4.", correct: false }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "qualidade",
      name: "Qualidade",
      description: "Exemplos específicos do módulo Qualidade.",
      groups: []
    }
  ]
};