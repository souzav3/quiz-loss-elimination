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
         {
  id: "fem-02",
  title: "Jam no Stacker",
  scenario: "Durante a produção de liners, ocorrem paradas por jam no stacker. Nas ocorrências, observa-se variação na posição dos pads e, em alguns casos, mais de um pad no mesmo slot dos K7s.",
  questions: [
    {
      type: "O quê",
      prompt: 'Qual alternativa descreve melhor o fenômeno observado?',
      explanation: "O documento relata jams no stacker associados à variação da posição MD dos pads e à redução da distância entre pads consecutivos. Isso descreve o que foi visto, sem concluir qual é a causa raiz.",
      options: [
        { text: "Ocorrem jams no stacker, com variação da posição MD dos pads e menor distância entre pads consecutivos.", correct: true },
        { text: "Ocorrem jams apenas quando os pads estão fora da especificação de dobra e caliper.", correct: false },
        { text: "Os pads chegam regularmente espaçados ao stacker, mas são rejeitados por falha de impressão.", correct: false },
        { text: "A linha para porque todos os pads são desviados antes de chegar à infeed do stacker.", correct: false }
      ]
    },
    {
      type: "Como",
      prompt: 'Em que condição o jam acontece?',
      explanation: "O problema foi observado durante a produção normal, tanto após rejeitos quanto em sequências normais de produção.",
      options: [
        { text: "Durante a produção normal, tanto após rejeitos quanto em rodadas normais, sem depender de uma sequência específica de rejeição.", correct: true },
        { text: "Somente após uma sequência de rejeitos consecutivos.", correct: false },
        { text: "Somente no start-up, antes de começar a produção normal.", correct: false },
        { text: "Apenas durante a parada programada para limpeza do stacker.", correct: false }
      ]
    },
    {
      type: "Onde",
      prompt: 'Quais pontos do processo devem ser observados nesse fenômeno?',
      explanation: "A análise aponta a infeed, a twist e a entrada do stacker. Nessa região, os pads são espaçados, posicionados e direcionados para entrar individualmente nos slots.",
      options: [
        { text: "Infeed, twist e entrada do stacker.", correct: true },
        { text: "Apenas a saída do stacker, depois que os pads já passaram pelos K7s.", correct: false },
        { text: "Somente a pouch knife, sem necessidade de observar a entrada do stacker.", correct: false },
        { text: "Apenas a esteira de separação, antes da checagem de posição MD e CD.", correct: false }
      ]
    },
    {
      type: "Quando",
      prompt: 'Quando o problema passou a ter maior impacto?',
      explanation: "Segundo o documento, jams já aconteciam historicamente, mas se intensificaram em meados de maio de 2026.",
      options: [
        { text: "Os jams já existiam, mas se intensificaram em meados de maio de 2026.", correct: true },
        { text: "Os jams começaram somente após a elaboração do documento e ainda não afetaram a produção.", correct: false },
        { text: "Os jams sempre tiveram a mesma frequência, sem períodos de maior impacto.", correct: false },
        { text: "Os jams ocorrem exclusivamente durante shutdowns programados.", correct: false }
      ]
    },
    {
      type: "Qual",
      prompt: 'O problema está restrito a algum produto ou count?',
      explanation: "A tabela informa ocorrência em todos os SKUs da linha analisada, independentemente do produto ou count produzido.",
      options: [
        { text: "Não. O problema foi observado em diferentes produtos e counts, sem ficar restrito a um SKU específico.", correct: true },
        { text: "Sim. O problema ocorre somente no count de menor velocidade.", correct: false },
        { text: "Sim. O problema ocorre apenas em produtos recém-lançados.", correct: false },
        { text: "Sim. O problema está restrito a um único SKU, identificado na análise.", correct: false }
      ]
    },
    {
      type: "Quem e para quem",
      prompt: 'Qual operação é diretamente afetada?',
      explanation: "O impacto descrito está na operação do stacker durante a produção de liners. O documento também identifica essa operação como pertencente à Joa 1, em Fem Care.",
      options: [
        { text: "A operação da linha de liners, que sofre paradas por jam no stacker.", correct: true },
        { text: "Somente a inspeção final, sem paradas no stacker.", correct: false },
        { text: "Somente a expedição, depois que os produtos deixam a linha.", correct: false },
        { text: "Apenas a alimentação de matéria-prima, antes da formação dos pads.", correct: false }
      ]
    },
    {
      type: "Quanto",
      prompt: 'Qual é a frequência e o impacto registrados?',
      explanation: "A tabela registra média de cinco paradas por dia, com variação entre dias, e impacto em scrap de start-up e shutdown. Não informa uma quantidade exata de scrap.",
      options: [
        { text: "A média é de cerca de 5 paradas por dia, embora haja dias com mais ocorrências e dias com menos de uma parada; há impacto em scrap de start-up e shutdown.", correct: true },
        { text: "São exatamente 5 paradas todos os dias, sem variação e sem impacto em scrap.", correct: false },
        { text: "Ocorre aproximadamente uma parada por mês, sem efeito sobre a produção.", correct: false },
        { text: "A análise quantificou o scrap, mas não registrou nenhuma parada.", correct: false }
      ]
    },
    {
      type: "Definição focada",
      prompt: 'Qual alternativa reúne melhor o problema, sua condição de ocorrência e o impacto?',
      explanation: "Uma definição focada resume o fenômeno observado, quando e onde ocorre, sua abrangência e a perda gerada. Ela não deve apresentar um plano de ação como se fosse uma causa raiz comprovada.",
      options: [
        { text: "Durante a produção normal de liners, ocorrem jams no stacker com variação observada na posição dos pads na entrada dos slots. As paradas acontecem após rejeitos e também em rodadas normais, em diferentes produtos e counts, com média de cerca de 5 ocorrências por dia e impacto em scrap.", correct: true },
        { text: "Os jams ocorrem apenas no start-up de um SKU específico e não geram paradas durante a produção normal.", correct: false },
        { text: "A troca da correia eliminou definitivamente todos os jams; por isso, não há mais perdas a investigar.", correct: false },
        { text: "O problema é somente uma variação visual do pad, sem interferência na entrada dos slots ou na operação do stacker.", correct: false }
          ]
            }
          ]
        }
      ]
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
      description: "Exemplos específicos de Qualidade.",
      groups: []
    }
  ]
};
