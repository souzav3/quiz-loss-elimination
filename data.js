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
          scenario: "Caixas com produto acabado na LCC3 são rejeitadas após passar pelos sensores da Masipack, mesmo com os critérios de qualidade sendo atendidos.",
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
              explanation: "A melhor resposta identifica os pontos do processo onde o fenômeno se manifesta: após os sensores, com início do alarme após o sensor de fita e rejeição na saída da linha de selagem.",
              options: [
                { text: "Após a caixa passar pelos dobradores, selador inferior e superior, o alarme se inicia depois do sensor de fita e a rejeição ocorre na saída do Masipack para a cama de recolha.", correct: true },
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
                { text: "Posicionamento fora da linha de centro, somado ao fechamento fora do padrão das abas, causa erro de leitura dos sensores. Isso ocorre porque o feixe de luz não é refletido corretamente, levando à rejeição indevida.", correct: true },
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
 scenario: "Na produção de liners em Fem Care, ocorrem jams no stacker com variação da posição MD dos pads e, às vezes, dois pads no mesmo slot. O fenômeno é observado na infeed, twist e entrada do stacker, durante a operação normal, após rejeitos ou em rodadas normais. Os jams já existiam, mas se intensificaram em maio de 2026; afetam todos os SKUs analisados. A média é de cerca de cinco paradas por dia, com dias de crise e dias de baixa ocorrência, além de impacto em scrap de start-up e shutdown.",
  questions: [
    {
      type: "O quê",
      prompt: 'Para esse cenário, qual é o melhor "O quê"?',
      explanation: 'O campo "O quê" descreve o fenômeno observado no produto e no equipamento. A frequência, o local e uma possível causa devem ser tratados separadamente.',
      options: [
        { text: "O problema foi observado na infeed, na twist e na entrada do stacker.", correct: false },
        { text: "Ocorrem jams no stacker com variação da posição MD e menor distância entre pads consecutivos; em algumas ocorrências, há pads no mesmo slot.", correct: true },
        { text: "São registradas, em média, cerca de cinco paradas por dia.", correct: false },
        { text: "A troca da correia de transmissão foi definida como ação para tratar o problema.", correct: false }
      ]
    },
    {
      type: "Como",
      prompt: 'Para esse cenário, qual é o melhor "Como"?',
      explanation: 'O campo "Como" registra a maneira e as condições em que o fenômeno se manifesta. A resposta correta considera que o jam ocorre durante a produção normal, após rejeitos e também em rodadas normais.',
      options: [
        { text: "O jam acontece somente depois de uma sequência de rejeitos consecutivos.", correct: false },
        { text: "A falha ocorre apenas no start-up, antes de a linha entrar em operação normal.", correct: false },
        { text: "Durante a produção normal, observa-se variação no espaçamento entre pads; o jam ocorre tanto após rejeitos quanto em rodadas normais, sem depender de rejeitos consecutivos.", correct: true },
        { text: "As ocorrências se intensificaram em meados de maio de 2026.", correct: false }
      ]
    },
    {
      type: "Onde",
      prompt: 'Para esse cenário, qual é o melhor "Onde"?',
      explanation: 'O campo "Onde" aponta os locais ou etapas do processo relacionados ao fenômeno. Não deve ser preenchido com a frequência ou com os produtos afetados.',
      options: [
        { text: "Na infeed, na twist e na entrada do stacker, antes da entrada individual dos pads nos slots dos K7s.", correct: true },
        { text: "Em todos os SKUs analisados, independentemente do count.", correct: false },
        { text: "Durante a produção normal, após rejeitos e também em rodadas normais.", correct: false },
        { text: "Exclusivamente na embalagem final, depois da saída do stacker.", correct: false }
      ]
    },
    {
      type: "Quando",
      prompt: 'Para esse cenário, qual é o melhor "Quando"?',
      explanation: 'O campo "Quando" informa desde quando há registros e em que período o problema se intensificou. A média diária pertence ao campo "Quanto".',
      options: [
        { text: "O problema surgiu pela primeira vez em maio de 2026; antes disso não havia jams no stacker.", correct: false },
        { text: "A média registrada é de cerca de cinco paradas por dia.", correct: false },
        { text: "O problema ocorre na infeed, na twist e na entrada do stacker.", correct: false },
        { text: "Já havia jams no stacker historicamente, mas as ocorrências se intensificaram em meados de maio de 2026, durante a operação normal.", correct: true }
      ]
    },
    {
      type: "Qual",
      prompt: 'Para esse cenário, qual é o melhor "Qual"?',
      explanation: 'O campo "Qual" identifica os produtos, SKUs ou formatos afetados. As medidas de dobra e caliper ajudam a entender o caso, mas não respondem quais SKUs apresentam o problema.',
      options: [
        { text: "Somente os pads com dobra ou caliper fora dos padrões apresentam o problema.", correct: false },
        { text: "O problema foi observado em todos os SKUs analisados, independentemente do produto ou count produzido.", correct: true },
        { text: "A operação do stacker é afetada pelas paradas durante a produção de liners.", correct: false },
        { text: "O problema ocorre apenas no primeiro SKU produzido após um change-over.", correct: false }
      ]
    },
    {
      type: "Quem e para quem",
      prompt: 'Para esse cenário, qual é o melhor "Quem e para quem"?',
      explanation: 'Esse campo identifica a linha, a operação ou a área que sofre o impacto. A abrangência dos SKUs pertence ao campo "Qual".',
      options: [
        { text: "Todos os SKUs analisados, independentemente do produto ou count.", correct: false },
        { text: "Apenas o fornecedor da correia, sem impacto na produção.", correct: false },
        { text: "A operação da linha de liners em Fem Care é impactada pelas paradas no stacker e pelas perdas associadas.", correct: true },
        { text: "A média é de cerca de cinco paradas por dia, com variação entre os dias.", correct: false }
      ]
    },
    {
      type: "Quanto",
      prompt: 'Para esse cenário, qual é o melhor "Quanto"?',
      explanation: 'O campo "Quanto" quantifica a frequência ou a extensão da perda. O cenário informa uma média de paradas e impacto em scrap, mas não fornece uma quantidade exata de scrap.',
      options: [
        { text: "A média é de cerca de cinco paradas por dia, com variação entre dias de crise e de baixa ocorrência; há impacto em scrap de start-up e shutdown.", correct: true },
        { text: "Ocorrem exatamente cinco paradas todos os dias, sem variação.", correct: false },
        { text: "São perdidos exatamente cinco pads por parada, sem geração de scrap no start-up ou shutdown.", correct: false },
        { text: "As paradas ocorrem na infeed, na twist e na entrada do stacker.", correct: false }
      ]
    },
    {
      type: "Definição focada",
      prompt: 'Para esse cenário, qual é a melhor "Definição focada"?',
      explanation: "A definição focada combina fenômeno observado, condições de ocorrência, abrangência e impacto. Ela não transforma uma ação planejada em causa raiz comprovada.",
      options: [
        { text: "Os pads estão fora dos padrões de dobra e caliper, causando jams apenas durante o start-up de um SKU específico.", correct: false },
        { text: "A correia de transmissão é a causa raiz comprovada dos jams, e sua troca eliminou definitivamente as paradas.", correct: false },
        { text: "Há jams no stacker, mas eles não interrompem a produção nem geram perdas associadas.", correct: false },
        { text: "Durante a produção normal de liners, ocorrem jams no stacker com variação observada na posição MD e no espaçamento entre pads na entrada dos slots. As ocorrências acontecem após rejeitos e também em rodadas normais, abrangem os SKUs analisados e geram, em média, cerca de cinco paradas por dia, com impacto em scrap.", correct: true }
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
