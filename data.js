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
  scenario: "Durante a produção de liners, ocorrem paradas por jam no stacker. Observa-se variação na posição dos pads e, em alguns casos, mais de um pad no mesmo slot do stacker.",
  questions: [
    {
      type: "O quê",
      prompt: 'Qual é o melhor registro para o campo "O quê"?',
      explanation: 'O campo "O quê" descreve o fenômeno observado no produto e no equipamento, sem antecipar uma causa raiz.',
      options: [
        { text: "Ocorrem jams no stacker com variação da posição MD dos pads e menor distância entre pads consecutivos; também foram observados pads no mesmo slot.", correct: true },
        { text: "O fenômeno é observado na infeed, na twist e na entrada do stacker.", correct: false },
        { text: "São registradas, em média, cinco paradas por dia.", correct: false },
        { text: "A troca da correia de transmissão foi definida como ação imediata.", correct: false }
      ]
    },
    {
      type: "Como",
      prompt: 'Qual é o melhor registro para o campo "Como"?',
      explanation: 'O campo "Como" descreve como o fenômeno se manifesta nas condições observadas. Não deve ser preenchido apenas com o local, a frequência ou uma ação planejada.',
      options: [
        { text: "Durante a produção normal, observa-se variação no espaçamento entre pads; o jam ocorre tanto após rejeitos quanto em rodadas normais, sem depender de rejeitos consecutivos.", correct: true },
        { text: "O jam ocorre somente quando há rejeitos consecutivos; nas rodadas normais, não há ocorrência.", correct: false },
        { text: "O fenômeno aparece na infeed, na twist e na entrada do stacker.", correct: false },
        { text: "A média de ocorrências é de aproximadamente cinco paradas por dia.", correct: false }
      ]
    },
    {
      type: "Onde",
      prompt: 'Qual é o melhor registro para o campo "Onde"?',
      explanation: 'O campo "Onde" identifica os pontos do processo relacionados à manifestação do fenômeno.',
      options: [
        { text: "Na infeed, na twist e na entrada do stacker, onde os pads seguem para entrar individualmente nos slots dos K7s.", correct: true },
        { text: "Durante a operação normal, após rejeitos e também em rodadas normais.", correct: false },
        { text: "Em todos os SKUs e counts produzidos na linha analisada.", correct: false },
        { text: "Exclusivamente na saída do stacker, depois de os pads deixarem os slots.", correct: false }
      ]
    },
    {
      type: "Quando",
      prompt: 'Qual é o melhor registro para o campo "Quando"?',
      explanation: 'O campo "Quando" registra o histórico e o período em que o problema se intensificou.',
      options: [
        { text: "Jams no stacker já ocorriam historicamente, mas se intensificaram em meados de maio de 2026, durante a operação normal.", correct: true },
        { text: "Os jams começaram pela primeira vez em maio de 2026; não havia ocorrências anteriores.", correct: false },
        { text: "Ocorrem, em média, cinco paradas por dia.", correct: false },
        { text: "O problema é observado na infeed, na twist e na entrada do stacker.", correct: false }
      ]
    },
    {
      type: "Qual",
      prompt: 'Qual é o melhor registro para o campo "Qual"?',
      explanation: 'O campo "Qual" delimita os produtos, SKUs ou counts afetados. A análise não restringe o problema a um único formato.',
      options: [
        { text: "O problema foi observado em todos os SKUs da linha analisada, independentemente do produto ou count produzido.", correct: true },
        { text: "O problema foi observado somente em um SKU específico de liners.", correct: false },
        { text: "O problema ocorre apenas no primeiro count produzido após cada change-over.", correct: false },
        { text: "Ocorrem paradas no stacker com pads no mesmo slot.", correct: false }
      ]
    },
    {
      type: "Quem e para quem",
      prompt: 'Qual é o melhor registro para o campo "Quem e para quem"?',
      explanation: 'Esse campo identifica a operação e a área impactadas pela ocorrência, sem confundi-las com os produtos afetados ou a quantidade de paradas.',
      options: [
        { text: "A ocorrência afeta a operação do stacker na linha de produção de liners em Fem Care, provocando paradas durante a produção.", correct: true },
        { text: "A ocorrência afeta somente a expedição, sem interferir na operação do stacker.", correct: false },
        { text: "A ocorrência afeta exclusivamente o fornecedor da correia, sem impacto na linha.", correct: false },
        { text: "A ocorrência foi observada em todos os SKUs, independentemente do count.", correct: false }
      ]
    },
    {
      type: "Quanto",
      prompt: 'Qual é o melhor registro para o campo "Quanto"?',
      explanation: 'O campo "Quanto" quantifica a frequência e descreve a extensão da perda. A tabela informa uma média, não um número fixo de paradas todos os dias, e não quantifica o scrap.',
      options: [
        { text: "A média registrada é de cerca de cinco paradas por dia, com dias de crise e outros com menos de uma parada; há impacto em scrap de start-up e shutdown.", correct: true },
        { text: "Ocorrem exatamente cinco paradas todos os dias, sem variação e sem impacto em scrap.", correct: false },
        { text: "Há cinco pads fora de posição em cada jam, sem paradas de produção.", correct: false },
        { text: "O fenômeno ocorre na infeed, na twist e na entrada do stacker.", correct: false }
      ]
    },
    {
      type: "Definição focada",
      prompt: 'Qual é a melhor definição focada para esse problema?',
      explanation: "A definição focada reúne o fenômeno observado, as condições em que ocorre, sua abrangência e o impacto. Um plano de ação não deve ser apresentado como causa raiz comprovada.",
      options: [
        { text: "Durante a produção normal de liners, ocorrem jams no stacker com variação observada na posição MD e no espaçamento entre pads na entrada dos slots. As paradas acontecem após rejeitos e também em rodadas normais, em diferentes SKUs e counts, com média de cerca de cinco ocorrências por dia e impacto em scrap.", correct: true },
        { text: "Os jams acontecem somente após rejeitos consecutivos, em um único SKU, sem afetar a produção normal.", correct: false },
        { text: "A correia de transmissão é a causa raiz comprovada, e sua troca eliminou definitivamente os jams.", correct: false },
        { text: "Os pads estão fora da especificação de dobra e caliper, por isso não chegam à entrada do stacker.", correct: false }
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
