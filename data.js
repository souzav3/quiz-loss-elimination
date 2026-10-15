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
  id: "fem-01",
  title: "Jam no Stacker",
  scenario: "Ocorrem paradas no stacker devido à variação da posição do pad na entrada do slot, causando jams durante a produção normal.",

  questions: [
    {
      type: "O quê",
      prompt: 'Para esse cenário, qual é o melhor "O quê"?',
      explanation: "A melhor resposta descreve claramente o fenômeno observado: variação da posição do pad gerando jam no stacker.",
      options: [
        {
          text: "Jam no stacker após variação MD do pad, mostrando que um pad está com distância menor em relação ao próximo.",
          correct: true
        },
        {
          text: "O produto apresenta alteração de gramatura durante a fabricação, gerando defeitos visuais no liner.",
          correct: false
        },
        {
          text: "O problema ocorre devido à falta de matéria-prima na unwind principal.",
          correct: false
        },
        {
          text: "Os pads são rejeitados por falha de peso na inspeção final.",
          correct: false
        }
      ]
    },

    {
      type: "Como",
      prompt: 'Para esse cenário, qual é o melhor "Como"?',
      explanation: "A melhor resposta descreve a condição operacional em que o problema ocorre.",
      options: [
        {
          text: "O fenômeno ocorre em processo normal, com a linha rodando sem rejeitos seguidos ou aleatórios.",
          correct: true
        },
        {
          text: "Ocorre exclusivamente durante startup após troca de produto.",
          correct: false
        },
        {
          text: "Ocorre apenas quando há falta de vácuo nas conveyors do RPW.",
          correct: false
        },
        {
          text: "Acontece somente durante limpeza programada da linha.",
          correct: false
        }
      ]
    },

    {
      type: "Onde",
      prompt: 'Para esse cenário, qual é o melhor "Onde"?',
      explanation: "A melhor resposta identifica os pontos do processo onde o fenômeno é percebido.",
      options: [
        {
          text: "Infeed, twist e entrada do stacker.",
          correct: true
        },
        {
          text: "Exclusivamente na pouch knife durante o corte do pad.",
          correct: false
        },
        {
          text: "Apenas no sistema de embalagem secundária após o stacker.",
          correct: false
        },
        {
          text: "Somente no sistema de pallets da expedição.",
          correct: false
        }
      ]
    },

    {
      type: "Quando",
      prompt: 'Para esse cenário, qual é o melhor "Quando"?',
      explanation: "A melhor resposta indica quando o problema passou a ganhar relevância operacional.",
      options: [
        {
          text: "Historicamente sempre existiu jam no stacker, mas o problema se intensificou em meados de maio de 2026, gerando crises de produção.",
          correct: true
        },
        {
          text: "O problema iniciou após a última parada anual e nunca havia sido observado anteriormente.",
          correct: false
        },
        {
          text: "O fenômeno ocorre apenas durante shutdowns programados.",
          correct: false
        },
        {
          text: "O problema começou após a troca de fornecedor de matéria-prima realizada este mês.",
          correct: false
        }
      ]
    },

    {
      type: "Qual",
      prompt: 'Para esse cenário, qual é o melhor "Qual"?',
      explanation: "A melhor resposta identifica os produtos afetados pelo fenômeno.",
      options: [
        {
          text: "O problema está acontecendo em todos os SKUs da Joa.",
          correct: true
        },
        {
          text: "O fenômeno ocorre somente em SKUs de menor velocidade.",
          correct: false
        },
        {
          text: "Ocorre apenas em um único count específico.",
          correct: false
        },
        {
          text: "Está restrito aos produtos recém-lançados.",
          correct: false
        }
      ]
    },

    {
      type: "Quem e para quem",
      prompt: 'Para esse cenário, qual é o melhor "Quem e para quem"?',
      explanation: "A melhor resposta identifica a área diretamente impactada.",
      options: [
        {
          text: "O problema ocorre no stacker da Joa 1 em Fem Care, afetando a produção de liners e a operação da linha.",
          correct: true
        },
        {
          text: "O impacto ocorre somente na área administrativa e planejamento.",
          correct: false
        },
        {
          text: "O problema afeta apenas a expedição sem interferência na produção.",
          correct: false
        },
        {
          text: "A perda ocorre exclusivamente na manutenção predial.",
          correct: false
        }
      ]
    },

    {
      type: "Quanto",
      prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
      explanation: "A melhor resposta quantifica a frequência e o impacto operacional da perda.",
      options: [
        {
          text: "Média de 5 paradas por dia, afetando scrap de startup e shutdown.",
          correct: true
        },
        {
          text: "Menos de uma parada por mês, sem impacto operacional relevante.",
          correct: false
        },
        {
          text: "Apenas uma ocorrência anual durante manutenção geral.",
          correct: false
        },
        {
          text: "Não existem perdas de produção associadas ao fenômeno.",
          correct: false
        }
      ]
    },

    {
      type: "Definição focada",
      prompt: 'Para esse cenário, qual é a melhor "Definição focada"?',
      explanation: "A melhor definição conecta claramente o fenômeno, as condições de ocorrência e o impacto.",
      options: [
        {
          text: "Jam no stacker com pad variando a posição de entrada do slot durante a produção normal, ocorrendo tanto após rejeitos quanto em rodadas normais, independentemente do produto ou count produzido, gerando crises de produção e paradas frequentes.",
          correct: true
        },
        {
          text: "O problema é causado exclusivamente pela qualidade do pad recebido dos fornecedores, sendo resolvido com troca de lote.",
          correct: false
        },
        {
          text: "As paradas acontecem apenas por erro operacional no abastecimento de matéria-prima da linha.",
          correct: false
        },
        {
          text: "O fenômeno ocorre somente durante startup e não possui relação com a posição dos pads.",
          correct: false
        }
      ]
    }
  ]
}
    {
  id: "fhc",
  name: "F&HC",
  description: "Exemplos específicos do módulo F&HC.",
  groups: [ ]
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
      description: "Exemplos específicos de Qualidade.",
      groups: []
    }
  ]
};
