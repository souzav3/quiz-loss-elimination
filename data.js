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
  groups: [
    {
      id: "fem-01",
      title: "Rejeito de caixas",
      scenario: "Caixas com produto acabado na LCC3 é rejeitada após passar pelos sensores da Masipack, mesmo com os critérios de qualidade sendo atendidos.",

      questions: [
        {
          type: "O quê",
          prompt: 'Para esse cenário, qual é o melhor "O quê"?',
          explanation: "A melhor resposta descreve claramente o fenômeno observado: caixas dentro dos parâmetros esperados estão sendo rejeitadas indevidamente após a leitura dos sensores.",
          options: [
            { text: "Caixas com os parâmetros dentro do esperado (QR Code, código de barras, lote e fita) são rejeitadas pelo Masipack após a passagem pelos sensores de checagem.", correct: true },
            { text: "As caixas chegam vazias na esteira e são descartadas automaticamente antes do selamento.", correct: false },
            { text: "O produto é perdido porque a caixa estoura mecanicamente dentro do magazine de alimentação.", correct: false },
            { text: "O problema ocorre porque o operador deixa de colocar produto na caixa antes da selagem.", correct: false }
          ]
        },

        {
          type: "Como",
          prompt: 'Para esse cenário, qual é o melhor "Como"?',
          explanation: "A melhor resposta descreve as circunstâncias e o modo de falha: a caixa atende aos critérios, passa pelos sensores, o alarme é acionado e mesmo assim ela é rejeitada.",
          options: [
            { text: "O problema ocorre durante a passagem da caixa pelos sensores do Masipack: mesmo com os critérios atendidos, o sistema aciona alarme sonoro e rejeita a caixa na sequência.", correct: true },
            { text: "O problema acontece apenas quando a caixa cai da esteira por excesso de velocidade e quebra o leitor.", correct: false },
            { text: "O problema ocorre exclusivamente quando o código de barras não é impresso, fazendo a máquina parar imediatamente antes do dobrador.", correct: false },
            { text: "O problema acontece porque a caixa é aberta manualmente pelo operador após o selamento superior.", correct: false }
          ]
        },

        {
          type: "Onde",
          prompt: 'Para esse cenário, qual é o melhor "Onde"?',
          explanation: "A melhor resposta identifica os pontos do processo onde o fenômeno se manifesta: após os sensores, com início do alarme após o sensor de fita e rejeição na saída do Masipack.",
          options: [
            { text: "Após a caixa passar pelos dobradores, selador inferior e superior, o alarme se inicia depois do sensor de fita e a rejeição ocorre na saída do Masipack para a cama de roletes lateral.", correct: true },
            { text: "O problema ocorre exclusivamente dentro do magazine de caixas, antes mesmo da formação da embalagem.", correct: false },
            { text: "A rejeição acontece apenas no palletizador, depois que o produto já saiu da área da Masipack.", correct: false },
            { text: "O ponto de falha está no túnel de contração, onde a caixa perde o lote impresso antes da leitura óptica.", correct: false }
          ]
        },

        {
          type: "Quando",
          prompt: 'Para esse cenário, qual é o melhor "Quando"?',
          explanation: "A melhor resposta informa quando o problema começou e em quais condições ele ocorre com maior frequência.",
          options: [
            { text: "O problema iniciou após a instalação dos sensores, ocorre durante operação normal e tem maior incidência após change-over.", correct: true },
            { text: "O problema começou antes da instalação dos sensores e só acontece durante shutdown programado.", correct: false },
            { text: "O problema ocorre somente em start-up e desaparece completamente após os primeiros 5 minutos de produção.", correct: false },
            { text: "O problema surgiu após troca de operador e acontece apenas quando a linha está parada para limpeza.", correct: false }
          ]
        },

        {
          type: "Qual",
          prompt: 'Para esse cenário, qual é o melhor "Qual"?',
          explanation: "A melhor resposta define em quais formatos o problema ocorre e destaca o principal formato afetado.",
          options: [
            { text: "Ocorre com todos os counts, exceto 32 x 8, com maior incidência no formato 8 x 18.", correct: true },
            { text: "Ocorre apenas no formato 32 x 8 e nunca foi observado no 8 x 18.", correct: false },
            { text: "Fem Care.", correct: false },
            { text: "A falha ocorre somente em materiais de embalagem importados e não depende de formato.", correct: false }
          ]
        },

        {
          type: "Quem e para quem",
          prompt: 'Para esse cenário, qual é o melhor "Quem e para quem"?',
          explanation: "A melhor resposta mostra onde o impacto é mais percebido e quem é afetado pela ocorrência e pelo retrabalho.",
          options: [
            { text: "O problema ocorre principalmente na LCC3, impactando a operação de embalagem e os times envolvidos no retrabalho das caixas rejeitadas.", correct: true },
            { text: "O problema é exclusivo do time administrativo e não gera impacto na operação da linha.", correct: false },
            { text: "A falha acontece apenas na expedição, sem qualquer relação com a linha produtiva ou com a embalagem.", correct: false },
            { text: "O desvio afeta somente a manutenção elétrica e não interfere no fluxo de produção nem no retrabalho.", correct: false }
          ]
        },

        {
          type: "Quanto",
          prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
          explanation: "A melhor resposta quantifica a perda e o esforço envolvido no retrabalho.",
          options: [
            { text: "São rejeitadas cerca de 400 caixas por dia, com aproximadamente 13 segundos de retrabalho por caixa, gerando cerca de 2400 toques e 1h25min de trabalho sem valor agregado.", correct: true },
            { text: "A perda é inferior a 10 caixas por mês, sem impacto relevante em tempo ou esforço operacional.", correct: false },
            { text: "O problema gera somente parada de máquina, sem rejeição de caixas e sem necessidade de retrabalho.", correct: false },
            { text: "A linha perde apenas matéria-prima em setup, sem interferência em caixas acabadas ou tempo de operação.", correct: false }
          ]
        },

        {
          type: "Definição focada",
          prompt: 'Para esse cenário, qual é a melhor "Definição focada"?',
          explanation: "A melhor definição focada conecta perda, defeito e efeito de forma clara e direta.",
          options: [
            { text: "Posicionamento fora da linha de centro, somado ao fechamento fora do padrão das abas, causa erro de leitura dos sensores. Isso ocorre porque o feixe de luz não é refletido corretamente pela aba e pela fita devido ao espaçamento e/ou inclinação das abas, resultando em 1h25min diários de retrabalho para checagem e reposição das caixas.", correct: true },
            { text: "A rejeição acontece porque o produto feminino apresenta variação natural de lote, obrigando a máquina a retirar qualquer caixa com leitura válida para inspeção preventiva.", correct: false },
            { text: "O problema está ligado ao excesso de caixas aprovadas pela Masipack, o que reduz o retrabalho diário e melhora o fluxo operacional após change-over.", correct: false },
            { text: "A principal causa é a ausência de operadores suficientes na linha, o que faz os sensores deixarem de ler lote e QR Code por falta de abastecimento de caixas.", correct: false }
          ]
        }
      ]
    },
{
  id: "fem-02",
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
          text: "O problema é causado exclusivamente pela 
  ]
}
    },
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
