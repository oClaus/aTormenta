import { SpecificAccessory, Enchantment } from "@/types/acessorio";

export const enchantments: Enchantment[] = [
  {
    id: "aconchegante",
    name: "Aconchegante",
    description: "O vestuário torna o sono mais confortável, melhorando seu descanso em uma categoria.",
    origin: "Herois de Arton"
  },
  {
    id: "ajudante",
    name: "Ajudante",
    description: "A ferramenta realiza movimentos por vontade própria, auxiliando-o. O bônus em uma perícia fornecido pela ferramenta aumenta em +2.",
    origin: "Herois de Arton"
  },
  {
    id: "autoritario",
    name: "Autoritário",
    description: "O vestuário tem ornamentos volumosos no peitoral e nas ombreiras, tornando sua figura mais imponente. Fornece +2 em Intimidação (cumulativo com outros bônus do item) e aumenta a CD de seus efeitos de medo em +2.",
    origin: "Herois de Arton"
  },
  {
    id: "compacto",
    name: "Compacto",
    description: "Por meio de articulações engenhosas e bolsões planares, o equipamento não ocupa espaços.",
    origin: "Herois de Arton"
  },
  {
    id: "imaculado",
    name: "Imaculado",
    description: "O vestuário está sempre limpo e perfumado. Mesmo após emergir de um pântano ou esgoto, toda a imundície desaparece em 1 rodada. Fornece +2 em Diplomacia (cumulativo com outros bônus do item) e aumenta a CD de Aparência Inofensiva, Presença Aristocrática e efeitos similares em +2.",
    origin: "Herois de Arton"
  },
  {
    id: "insinuante",
    name: "Insinuante",
    description: "O vestuário realça suas curvas e músculos. Fornece +2 em Enganação (cumulativo com outros bônus do item) e aumenta a CD de seus efeitos mentais em +2.",
    origin: "Herois de Arton"
  },
  {
    id: "ligeiro",
    name: "Ligeiro",
    description: "O item pode ser vestido ou removido com uma ação livre (acompanhada ou não de pose e olhar fatal).",
    origin: "Herois de Arton"
  },
  {
    id: "prontidao",
    name: "Prontidão",
    description: "O item surge em suas mãos no instante em que precisa ser utilizado. Desde que ele esteja em alcance curto, você pode empunhá-lo ou guardá-lo como uma ação livre. Além disso, se executar uma reação em que poderia usar o item, você pode empunhá-lo como parte dessa ação.",
    origin: "Herois de Arton"
  }
];

export const accessories: SpecificAccessory[] = [
  // --- Acessórios Menores (Tabela 8-13) ---
  {
    id: "anel-da-protecao",
    name: "Anel da Proteção",
    description: "Este anel desvia ataques contra seu usuário. Você recebe +2 de Defesa.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-do-escudo-mental",
    name: "Anel do Escudo Mental",
    description: "Você recebe imunidade a magias de adivinhação.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-do-sustento",
    name: "Anel do Sustento",
    description: "Você não precisa comer ou beber e precisa dormir apenas duas horas por noite para descansar. Os efeitos do anel só se ativam após uma semana de uso.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "bainha-magica",
    name: "Bainha Mágica",
    description: "Esta bainha de couro curtido e prata muda de tamanho para acomodar qualquer arma corpo a corpo. Você pode lançar Arma Mágica em qualquer arma na bainha sem pagar seu custo em PM.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "brincos-da-sagacidade",
    name: "Brincos da Sagacidade",
    description: "Este par de brincos de safira aguça o raciocínio. Você recebe +1 em Inteligência (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "chapeu-do-disfarce",
    name: "Chapéu do Disfarce",
    description: "Você pode lançar Disfarce Ilusório (CD Car), com o aprimoramento que inclui odores e sensações e muda o bônus em Enganação para disfarces para +20, sem pagar seu custo em PM. Você não pode usar outros aprimoramentos. Como parte do disfarce, o chapéu pode mudar para um elmo, faixa, tiara, gorro, touca e assim por diante.",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "corda-da-escalada",
    name: "Corda da Escalada",
    description: "Esta corda de 15m é bastante fina, mas forte o suficiente para suportar até seis criaturas Médias (ou 120 espaços). Com um comando (uma ação de movimento), a corda se move em qualquer direção (incluindo para cima) a 3m por rodada, fixando-se firmemente onde você quiser. Ela pode se desamarrar e voltar da mesma forma.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "ferraduras-da-velocidade",
    name: "Ferraduras da Velocidade",
    description: "Este conjunto de ferraduras pode ser fixado nos cascos de um cavalo (ou outro parceiro montaria, a critério do mestre) para aumentar seu deslocamento em +3m.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "flauta-fantasma",
    name: "Flauta Fantasma",
    description: "Se for treinado em Atuação, você pode lançar Esculpir Sons (CD Car) sem pagar seu custo em PM.",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "garrafa-da-fumaca-eterna",
    name: "Garrafa da Fumaça Eterna",
    description: "Você pode abrir a tampa desta ânfora de metal para lançar a magia Névoa sem pagar seu custo em PM. A fumaça persiste até a garrafa ser tampada. Após isso, dissipa-se no fim da cena (ou após 4 rodadas, sob vento forte, ou 1 rodada, sob um vendaval).",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "gema-da-luminosidade",
    name: "Gema da Luminosidade",
    description: "Este cristal tem a aparência de um longo prisma. Com um comando, emite luz equivalente a uma tocha ou então um raio brilhante, que deixa uma criatura em alcance curto cega por 1d4 rodadas (Fort CD Car evita).",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "lanterna-da-revelacao",
    name: "Lanterna da Revelação",
    description: "Este item funciona como um lampião normal, mas sua luz revela todas as criaturas e objetos invisíveis no alcance.",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "luvas-da-delicadeza",
    name: "Luvas da Delicadeza",
    description: "Estas luvas de tecido fino permitem manipulação delicada. Você recebe +1 em Destreza (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manoplas-da-forca-do-ogro",
    name: "Manoplas da Força do Ogro",
    description: "Este par de luvas é feito de couro grosso com rebites de ferro. Você recebe +1 em Força (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manto-da-resistencia",
    name: "Manto da Resistência",
    description: "Este manto de tecido grosso e pesado protege seu usuário. Você recebe +2 em testes de resistência.",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manto-do-fascinio",
    name: "Manto do Fascínio",
    description: "Este manto de veludo possui bordados de ouro. Você recebe +1 em Carisma (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manto-elfico",
    name: "Manto Élfico",
    description: "Indistinguível de um manto cinza comum. Entretanto, quando usado com o capuz cobrindo o rosto, fornece +5 em Furtividade.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "mochila-de-carga",
    name: "Mochila de Carga",
    description: "Este item, que parece uma simples mochila de pano, está na verdade ligado a um espaço interdimensional — fazendo com que seja maior por dentro do que por fora. A mochila de carga aumenta sua capacidade de carga em 10 espaços (ela própria não gasta um espaço). Se a mochila for rasgada, os objetos em seu interior são destruídos. Criaturas vivas colocadas no interior da mochila podem sobreviver até 10 minutos, mas depois disso ficarão sem ar.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "pingente-da-saude",
    name: "Pingente da Saúde",
    description: "O usuário desta joia verde em um cordão de prata recebe imunidade a doenças e venenos. Os efeitos só se ativam após uma semana de uso.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "pingente-da-sensatez",
    name: "Pingente da Sensatez",
    description: "Esta pequena pérola com uma corrente leve é usada como um colar. Você recebe +1 em Sabedoria (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "torque-do-vigor",
    name: "Torque do Vigor",
    description: "O acabamento deste colar ou bracelete remete a um animal poderoso, como um urso ou lobo. Você recebe +1 em Constituição (somente após um dia de uso).",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Tormenta20 - Jogo do Ano"
  },

  // --- Acessórios Médios (Tabela 8-14) ---
  {
    id: "amuleto-da-robustez",
    name: "Amuleto da Robustez",
    description: "Este disco com corrente de ouro é usado como um colar. Você recebe +2 em Constituição (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-da-energia",
    name: "Anel da Energia",
    description: "Você recebe +5 PM (somente após um dia de uso).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-da-vitalidade",
    name: "Anel da Vitalidade",
    description: "Você recebe +10 PV (somente após um dia de uso).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-de-invisibilidade",
    name: "Anel de Invisibilidade",
    description: "Ao colocar este anel de prata, você fica sob efeito de Invisibilidade. O efeito termina se você fizer um ataque ou lançar uma magia ofensiva, mas você pode tirar e recolocar o anel (uma ação padrão) para que ele volte a funcionar.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-de-telecinesia",
    name: "Anel de Telecinesia",
    description: "Você pode lançar Telecinesia (CD Int). Caso já conheça a magia, o custo para lançá-la diminui em –1 PM.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "bola-de-cristal",
    name: "Bola de Cristal",
    description: "Esta pequena esfera revela pessoas e lugares distantes. Olhar através dela é uma ação completa e gera a magia Vidência (CD Sab).",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "botas-aladas",
    name: "Botas Aladas",
    description: "Você pode gastar 2 PM para fazer asas brotarem dos calcanhares destas botas e receber deslocamento de voo 12m por uma rodada. Você pode gastar 1 PM no início de cada um de seus turnos para manter esse efeito.",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "botas-velozes",
    name: "Botas Velozes",
    description: "Você recebe +3m em seu deslocamento e pode lançar Velocidade (apenas sobre você mesmo).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "bracadeiras-do-arqueiro",
    name: "Braçadeiras do Arqueiro",
    description: "Você recebe +2 em rolagens de dano com armas de ataque à distância (cumulativo com outros itens).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "braceletes-de-bronze",
    name: "Braceletes de Bronze",
    description: "Estes braceletes geram um campo de força invisível, porém tangível. Você recebe +4 na Defesa, cumulativo com outros itens mágicos, mas não com armaduras.",
    price: "T$ 16.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "brincos-de-marah",
    name: "Brincos de Marah",
    description: "Este par de brincos brancos é abençoado pela Deusa da Paz. A primeira criatura que o atacar em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá a ação. Se você atacar uma criatura, o efeito dos brincos é cancelado por um dia. Se você possuir Aparência Inofensiva (ou um poder similar) os efeitos acumulam, afetando as duas primeiras criaturas que o atacarem em uma cena.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "caveira-maldita",
    name: "Caveira Maldita",
    description: "Esta pedra esculpida em formato de crânio gera o efeito da magia Profanar, com o crânio como ponto de origem. Mortos-vivos e devotos de deuses que canalizam apenas energia negativa na área de efeito recebem +2 em testes e Defesa.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "cinto-da-forca-do-gigante",
    name: "Cinto da Força do Gigante",
    description: "Este cinto largo é feito de couro com rebites de ferro. Você recebe +2 em Força (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "coroa-majestosa",
    name: "Coroa Majestosa",
    description: "Esta coroa de ouro possui dezenas de pedras preciosas. Você recebe +2 em Carisma (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "estola-da-serenidade",
    name: "Estola da Serenidade",
    description: "Esta faixa de pano com inscrições mágicas é usada sobre a nuca, com as duas extremidades caindo na frente do corpo. Você recebe +2 em Sabedoria (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "faixas-do-pugilista",
    name: "Faixas do Pugilista",
    description: "Estas faixas surradas são amarradas nos punhos, nos braços ou na testa. Você recebe +2 em testes de ataque e rolagens de dano com ataques desarmados (cumulativo com outros itens).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manto-da-aranha",
    name: "Manto da Aranha",
    description: "Este manto é feito de seda negra com fios de prata bordados. Você recebe deslocamento de escalada igual ao seu deslocamento terrestre, +5 em testes de resistência contra venenos e imunidade a teias mundanas ou mágicas. Além disso, pode lançar Teia (CD Des). Caso já conheça a magia, o custo para lançá-la diminui em –1 PM.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manto-do-morcego",
    name: "Manto do Morcego",
    description: "Este manto marrom escuro ou negro fornece +5 em Furtividade e permite que você fique pendurado de ponta-cabeça no teto, como um morcego. Além disso, você pode gastar uma ação padrão para segurar as pontas do manto e se transformar em um morcego. Seu tamanho muda para Minúsculo e você recebe deslocamento de voo 12m e uma arma natural de mordida (dano 1d4, perfuração). Em outros aspectos, isso funciona como a Forma Selvagem do druida. Você só pode se transformar em morcego à noite ou em ambientes escuros.",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "pulseiras-da-celeridade",
    name: "Pulseiras da Celeridade",
    description: "Esta pulseira de platina aguça todos os seus movimentos. Você recebe +2 em Destreza (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "simbolo-abencoado",
    name: "Símbolo Abençoado",
    description: "Conta como um símbolo sagrado. Se você for devoto do deus, o custo de suas magias divinas diminui em –1 PM (cumulativo com o poder Símbolo Sagrado Energizado). Apenas devotos desse deus podem fabricar um símbolo abençoado.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "tiara-da-sapiencia",
    name: "Tiara da Sapiência",
    description: "Esta tiara delicada possui uma gema que descansa sobre a testa. Você recebe +2 em Inteligência (somente após um dia de uso).",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "vassoura-voadora",
    name: "Vassoura Voadora",
    description: "Como um tapete voador, mas pode carregar duas pessoas (ou 40 espaços).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Tormenta20 - Jogo do Ano"
  },

  // --- Acessórios Maiores (Tabela 8-15) ---
  {
    id: "anel-da-liberdade",
    name: "Anel da Liberdade",
    description: "Forjado em ouro, este anel é uma relíquia da Igreja de Valkaria. Você fica permanentemente sob efeito de Libertação.",
    price: "T$ 60.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-da-regeneracao",
    name: "Anel da Regeneração",
    description: "Você recebe Cura Acelerada 5 (somente após um dia de uso).",
    price: "T$ 150.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "anel-refletor",
    name: "Anel Refletor",
    description: "Este aro de platina é poderoso contra conjuradores. Uma vez por rodada, quando você é alvo de uma magia, pode gastar PM igual ao custo dela para refleti-la de volta ao seu conjurador. As características da magia (efeitos, CD...) se mantêm, mas você toma qualquer decisão exigida por ela.",
    price: "T$ 51.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "braceletes-de-ouro",
    name: "Braceletes de Ouro",
    description: "Como braceletes de bronze, mas fornece +8 na Defesa.",
    price: "T$ 64.500",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "cinto-do-campeao",
    name: "Cinto do Campeão",
    description: "Este cinturão de ouro é cravejado de joias e possui gravuras de gladiadores e pugilistas minotauros. Você recebe +1 em Força e a habilidade Briga (veja a página 76; somente após um dia de uso). Caso já a possua, seu dano desarmado será calculado como se você possuísse quatro níveis de lutador a mais (máximo 2d12). Por fim, caso possua o poder Torcida, o bônus que você recebe por ele aumenta para +3. Estes cintos eram dados aos vencedores dos jogos gladiatoriais do Império de Tauron. A cada ano, diversos combatentes de Arton viajavam a Tiberus para competir e ter uma chance de ganhar um destes itens.",
    price: "T$ 51.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "colar-guardiao",
    name: "Colar Guardião",
    description: "Este diamante lapidado preso em uma corrente de platina deflete ataques contra seu usuário. Você recebe +5 na Defesa.",
    price: "T$ 51.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "elmo-do-teletransporte",
    name: "Elmo do Teletransporte",
    description: "Você pode lançar Salto Dimensional e Teletransporte, mas apenas em você mesmo. Caso já conheça as magias, o custo para lançá-las diminui em –1 PM.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "espelho-da-oposicao",
    name: "Espelho da Oposição",
    description: "Este item lembra um espelho normal com cerca de 1m de comprimento e 1,5m de altura. Pode ser fixado em qualquer superfície e ativado (ou desativado) com um comando. Quando uma criatura observa seu reflexo, o espelho cria uma cópia sua, com as mesmas habilidades e equipamento. A duplicata ataca a criatura original; quando um dos dois é derrotado, a duplicata e seus itens desaparecem.",
    price: "T$ 75.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "espelho-do-aprisionamento",
    name: "Espelho do Aprisionamento",
    description: "Este item de cristal, com 1,5m de altura e moldura de metal, pode ser fixado em qualquer superfície e ativado (ou desativado) com um comando. Qualquer criatura que se aproxime a alcance curto do espelho do aprisionamento e enxergue seu próprio reflexo deve passar em um teste de Reflexos (CD Int) ou será transportada magicamente para um espaço extradimensional dentro do espelho, ficando presa ali. O tamanho da criatura não importa — mas construtos, mortos-vivos e objetos não podem ser transportados. Com um comando, é possível conversar com uma criatura presa no espelho ou libertá-la. Se o espelho for quebrado, todas as criaturas dentro dele são libertadas.",
    price: "T$ 150.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "estatueta-animista",
    name: "Estatueta Animista",
    description: "Esta estatueta de pedra é esculpida na forma de um animal. Quando é atirada no chão e a palavra de comando é proferida, transforma-se no animal correspondente. O animal fornece os benefícios de um parceiro veterano até o fim da cena, quando então volta à sua forma de estatueta. O tipo de parceiro é definido pelo animal: raposa (ajudante; perícias definidas na fabricação do item), onça (assassino), águia (atirador), lobo (combatente), leão (fortão) ou urso (guardião).",
    price: "T$ 51.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "gema-da-telepatia",
    name: "Gema da Telepatia",
    description: "Você pode lançar Compreensão e Enfeitiçar (CD Car) sem pagar seu custo em PM.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "gema-elemental",
    name: "Gema Elemental",
    description: "Você pode lançar Conjurar Elemental sem pagar seu custo em PM.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manual-do-bom-exercicio",
    name: "Manual do Bom Exercício",
    description: "Este tomo volumoso contém exercícios de musculação, mas escondido entre as palavras há um poderoso efeito mágico. Ler o livro leva uma semana e aumenta seu valor de Força em +1 permanentemente (o atributo só pode ser aumentado uma vez com o Manual). Assim que o livro é lido, a magia desaparece de suas páginas e ele se torna um item mundano.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manual-dos-movimentos-precisos",
    name: "Manual dos Movimentos Precisos",
    description: "Este tomo volumoso descreve exercícios de coordenação e equilíbrio, mas mesclado às palavras há um poderoso efeito mágico. Funciona como um Manual do Bom Exercício, mas fornece +1 de Destreza.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "manual-da-saude-corporal",
    name: "Manual da Saúde Corporal",
    description: "Este tomo volumoso contém exercícios de resistência e dietas saudáveis, mas suas palavras trazem um poderoso efeito mágico. Funciona como um Manual do Bom Exercício, mas fornece +1 de Constituição.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "medalhao-de-lena",
    name: "Medalhão de Lena",
    description: "Quando você é reduzido a 0 ou menos PV, esta joia emite uma explosão de energia positiva que cura 100 PV (antes que você caia). Este poder só se ativa uma vez por dia.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "orbe-das-tempestades",
    name: "Orbe das Tempestades",
    description: "Esta esfera de vidro com 20cm de diâmetro contém fumaça e raios em seu interior. Você pode lançar Controlar o Clima e Fúria do Panteão (CD Sab). Caso já conheça as magias, o custo para lançá-las diminui em –1 PM. Além disso, você e todos os seus aliados adjacentes ficam sob efeito de Suporte Ambiental.",
    price: "T$ 97.500",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "robe-do-arquimago",
    name: "Robe do Arquimago",
    description: "Este traje pesado alinha-se com as energias arcanas emitidas por seu usuário para gerar um campo protetor. Se você for um conjurador arcano, recebe um bônus na Defesa igual a 5 + o círculo de magia mais alto que puder lançar e um bônus em testes de resistência igual à metade do bônus na Defesa. Assim, um arcanista de 9º nível (capaz de lançar magias de 3º círculo) recebe +8 na Defesa e +4 em testes de resistência.",
    price: "T$ 90.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "tapete-voador",
    name: "Tapete Voador",
    description: "Com um comando, este tapete flutua, fornecendo deslocamento de voo 12m. O tapete tem 3m x 3m e pode carregar seis criaturas Médias (ou 120 espaços). Se você estiver em alcance longo do tapete, pode comandar o voo dele.",
    price: "T$ 60.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "tomo-da-compreensao",
    name: "Tomo da Compreensão",
    description: "Este livro volumoso contém ensinamentos para tornar o leitor mais centrado e aguçar sua percepção, mas também possui um poderoso efeito mágico. Funciona como um Manual do Bom Exercício, mas fornece +1 de Sabedoria.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "tomo-da-lideranca-e-influencia",
    name: "Tomo da Liderança e Influência",
    description: "Este livro de encadernação luxuosa contém instruções detalhadas para convencer e inspirar os demais, mas as páginas escondem um poderoso efeito mágico. Funciona como um Manual do Bom Exercício, mas fornece +1 de Carisma.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "tomo-dos-grandes-pensamentos",
    name: "Tomo dos Grandes Pensamentos",
    description: "Este livro pesado contém exercícios para aprimorar o raciocínio e a memória, mas mesclado às palavras há um poderoso efeito mágico. Funciona como um Manual do Bom Exercício, mas fornece +1 de Inteligência.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Tormenta20 - Jogo do Ano"
  },
  {
    id: "Coroa da Encoratriz",
    name: "Coroa da Encoratriz",
    description: "Essa bela coroa ornamentada tem dimensões exageradas, fazendo seu usuário parecer muito mais alto. Parece ser feita de madeira, mas o tipo de madeira muda a partir dos ângulos — pode ser mogno claro, a madeira tollon mais escura ou alguma árvore multicolorida nativa apenas de Al-Gazara. Se há qualquer música ambiente, a coroa parece tremer com vontade de ser usada, “dançando” sozinha se deixada em uma superfície. Dizem que a alma do humanoide transformado em encoratriz reside na coroa. A Coroa da Encoratriz concede Carisma +1 e treinamento em Atuação, mas seu usuário passa a sofrer os efeitos das obrigações e restrições de Nimb. Caso já seja um devoto de Nimb, fica confuso com um resultado de 1 ou 2 no d6 (em vez de apenas 1).",
    origin: "Dragão Brasil",
    price: "T$ 9.000",
    size: "Menor",
  },
  {
    id: "algibeira-mordedora",
    name: "Algibeira Mordedora",
    description: "Possivelmente concebida por algum arcanista cansado de ser furtado por punguistas, esta bolsa transforma sua abertura em uma bocarra de dentes atrozes, travando mandíbulas poderosas na mão do infeliz que tenta acessar seu conteúdo sem permissão. Quando uma criatura faz um teste de Ladinagem para punga contra você, sofre 6d6 pontos de dano de corte e fica agarrada pela algibeira. Para se soltar, a criatura precisa gastar uma ação padrão e passar em um teste de Acrobacia (CD do item) — você pode liberar a criatura proferindo uma palavra de comando (uma ação livre).",
    price: "T$ 1.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "algibeira-provedora",
    name: "Algibeira Provedora",
    description: "Esta bolsa de couro parece normal à primeira vista, mas tem uma conexão planar com o Reino de Nimb. Você pode gastar uma ação completa para enfiar sua mão na algibeira e procurar por um item mundano não superior que ocupe até 1 espaço. Role 1d20. Se rolar 6 ou mais, você encontra o item. Ele dura até se afastar a mais de 9m de você ou até você procurar outro item. Se rolar 5 ou menos, você sai de mãos vazias e a algibeira perde seus poderes por 1 dia. Se rolar 1 natural, a algibeira cria dentes, lhe dá uma mordida (causando 4d6 pontos de dano de corte) e desaparece em uma nuvem de purpurina!",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "ampulheta-da-harmonia-temporal",
    name: "Ampulheta da Harmonia Temporal",
    description: "Uma ampulheta dourada com areia prateada que parece flutuar em ciclos irregulares. Quando invertida, permite que você manipule levemente o fluxo do tempo ao redor, desacelerando ou acelerando pequenos eventos. Uma vez por dia, você pode realizar uma tarefa que normalmente consome de 1 minuto a 1 hora como uma ação completa.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "amuleto-da-visao-eterea",
    name: "Amuleto da Visão Etérea",
    description: "Este amuleto de cristal translúcido é preso a uma corrente de prata e brilha quando exposto à luz. Você recebe resistência a ilusões +5 e pode lançar Visão Mística. Caso já conheça essa magia, pode lançá-la como uma ação livre.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "amuleto-do-amparo",
    name: "Amuleto do Amparo",
    description: "Este medalhão forjado em prata traz a figura de uma mão aberta. Quando você faz um teste para ajudar, o bônus que fornece aumenta em +2.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "anel-da-beleza-ilusoria",
    name: "Anel da Beleza Ilusória",
    description: "Este anel de ouro contém uma gema que reflete a luz de maneira incomum. Enquanto estiver vestindo este anel, você aparenta ser mais belo — não apenas conforme os padrões estéticos de seu povo ou raça, mas também de acordo com as preferências de cada observador. Você recebe +5 em testes de perícias baseadas em Carisma, exceto Intimidação, e pode lançar Enfeitiçar. Se já puder lançar essa magia, seu custo diminui em –1 PM.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "anel-da-chama-dancante",
    name: "Anel da Chama Dançante",
    description: "Um anel de ouro com uma pequena chama mágica viva que nunca se apaga. A chama mágica — na verdade um pequeno elemental — atua como um parceiro vigilante veterano e permite que você lance Controlar Fogo (se já puder lançar essa magia, seu custo diminui em –1 PM).",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "anel-da-protecao-mental",
    name: "Anel da Proteção Mental",
    description: "Este anel de platina contém uma pequena pedra lunar que brilha suavemente. Você recebe resistência a efeitos mentais +5.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "anel-do-pacto-oneroso",
    name: "Anel do Pacto Oneroso",
    description: "Este anel de platina contém inscrições sobre um acordo com uma entidade poderosa — talvez um espírito ancestral, um Dragão-Real ou mesmo um deus do Panteão. O anel permite lançar uma magia divina de até 4º círculo a sua escolha, sem custo em PM. Contudo, para cada utilização, você deve realizar uma penitência ou busca determinada pelo mestre. Você não pode lançar uma nova magia até que a penitência pela magia anterior tenha sido cumprida.",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "bastao-da-grande-harmonia",
    name: "Bastão da Grande Harmonia",
    description: "Este bastão de madeira de carvalho é gravado com símbolos antigos e irregulares que irradiam uma energia suave. Você pode gastar uma ação padrão e 3 PM para gerar um pulso de energia tranquilizante em um raio de 9m. Outras criaturas nessa área devem fazer um teste de Vontade (CD Sab); aquelas que falharem largam quaisquer armas que estejam empunhando e ficam pasmas por 1 rodada (apenas uma vez por cena). Além disso, você pode lançar Guardião Divino. Se já puder lançar essa magia, seu custo diminui em –1 PM.",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "bastao-do-sonhador",
    name: "Bastão do Sonhador",
    description: "Este bastão longo e esquelético possui uma gema cintilante na ponta e permite que você entre nos sonhos de uma pessoa adormecida. Em termos de jogo, você pode lançar Sonho. Se já puder lançar essa magia, uma vez por mês pode entregar um item para a pessoa ou roubar um item de posse dela. No primeiro caso, quando a pessoa acordar, estará com o item na vida real. No segundo, você precisa fazer um teste de Vontade oposto contra a pessoa. Se você vencer, quando sair do sonho estará com o item dela.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "berco-das-fadas",
    name: "Berço das Fadas",
    description: "Este saco de dormir mágico é feito de tecido macio e aveludado, em um tom de azul profundo que lembra o céu noturno. Mesmo ao relento e sem um acampamento, oferece condição de descanso confortável. Além disso, enquanto está no saco de dormir, você é considerado sob efeito da magia Suporte Ambiental.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "botas-do-andarilho-das-sombras",
    name: "Botas do Andarilho das Sombras",
    description: "Estas botas de couro escuro são incrivelmente silenciosas, permitindo ao usuário se mover sem emitir sons. Você recebe +5 em testes de Furtividade realizados em ambientes urbanos ou escuros. Além disso, uma vez por dia, você pode lançar Salto Dimensional — mas apenas se existir no destino uma sombra de tamanho suficiente para sua passagem.",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "bracadeiras-da-forca-do-colosso",
    name: "Braçadeiras da Força do Colosso",
    description: "Estas braçadeiras de ferro negro são incrivelmente pesadas, mas fornecem um aumento massivo na força física do portador. Você recebe +4 em Força (somente após um dia de uso). Além disso, uma vez por cena, pode gastar 5 PM para aumentar esse bônus para +8 por 1 rodada.",
    price: "T$ 120.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "bracelete-do-coracao-vivaz",
    name: "Bracelete do Coração Vivaz",
    description: "Este bracelete de ouro adornado com um coração fornece +10 PV (somente após um dia de uso). Além disso, quando você é reduzido a 0 PV ou menos, pode gastar 2 PM para curar 2d8+2 PV por luz.",
    price: "T$ 27.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "braceletes-da-amizade-intensa",
    name: "Braceletes da Amizade Intensa",
    description: "Estes dois braceletes de prata são gravados com símbolos antigos de união e lealdade. Quando colocados (cada um numa pessoa diferente), estabelecem uma ligação poderosa entre seus usuários. Em alcance médio, ambos podem se comunicar por telepatia — podendo ver, ouvir e sentir tudo que o outro vê, ouve e sente. Também podem sempre sentir em que direção e distância o outro está. Por fim, quando um usuário recebe cura mágica ou outro efeito mágico benéfico, o outro também é afetado se estiver em alcance curto. O preço do item é pelo par!",
    price: "T$ 36.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "caixa-dos-ecos-perdidos",
    name: "Caixa dos Ecos Perdidos",
    description: "Esta caixa de madeira pequena e simples não aparenta nada especial, sem adereços ou ornamentos. No entanto, quando é aberta, liberta ecos do passado: seus muitos compartimentos contêm partes de memórias antigas, diálogos e fatos históricos. Você pode gastar 3 PM para receber um bônus de +10 em um teste de perícia baseada em Inteligência que, a critério do mestre, se relacione a um evento passado.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "calice-das-mares",
    name: "Cálice das Marés",
    description: "Este cálice de prata oferece ao portador o poder de comandar as águas. Você pode lançar Controlar Água (se já puder lançar essa magia, seu custo diminui em –1 PM).",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "capa-nebulosa",
    name: "Capa Nebulosa",
    description: "Feita com finos fios de névoa mágica, esta capa permite ao usuário desaparecer em nevoeiros ou escuridão, como se fizesse parte da névoa ou das trevas. Sempre que você estiver sob camuflagem leve por escuridão ou neblina, essa camuflagem se torna total.",
    price: "T$ 16.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "chapeu-dos-truques-infinitos",
    name: "Chapéu dos Truques Infinitos",
    description: "Esta cartola ornamentada com estrelas e luas permite conjurar uma variedade de efeitos mágicos menores. Você pode lançar livremente qualquer versão truque de qualquer magia de 1º círculo que ofereça esse aprimoramento, mesmo que não a conheça.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "chapeu-pensador",
    name: "Chapéu Pensador",
    description: "Este estranhíssimo “chapéu” na verdade tem o formato triangular de um telhado, com uma chaminé no topo, onde está alojado um ninho de pássaros ruidosos — que dizem ser raros animais planares sagrados de Tanna-Toh. Você recebe a habilidade Engenhosidade (Tormenta20, p. 68); caso já possua essa habilidade, o bônus fornecido por ela aumenta em +2.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "chave-dos-planos",
    name: "Chave dos Planos",
    description: "Esta pequena chave de metal parece comum à primeira vista, mas é capaz de abrir portas para lugares distantes. Inserida na fechadura de uma porta comum, permite que você lance Teletransporte ou Viagem Planar, sem necessidade de componente material, desde que também exista uma porta de qualquer tipo no local de chegada.",
    price: "T$ 60.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "cinto-da-desmaterializacao",
    name: "Cinto da Desmaterialização",
    description: "Este cinto feito de couro e metal possui um fecho especial que permite ao usuário desmaterializar seu corpo por um curto período. Você pode lançar Forma Etérea, mas apenas em você mesmo.",
    price: "T$ 60.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "cinto-da-flecha-veloz",
    name: "Cinto da Flecha Veloz",
    description: "Este cinto de couro ajustável permite ao usuário acelerar seus movimentos com arcos e bestas. Você recebe a habilidade Ataque Extra (Tormenta20, p. 66), mas só pode usá-la com armas de disparo. Se já a possui, em vez disso o custo para usá-la com armas de disparo diminui em –1 PM.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "cinto-da-leveza-graciosa",
    name: "Cinto da Leveza Graciosa",
    description: "Este cinto mágico reduz o peso do usuário, tornando-o mais ágil e permitindo saltos mais altos e movimentos mais suaves. Você recebe +5 em Acrobacia e está sempre sob o efeito básico de Queda Suave.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "cinto-dos-caminhos-cruzados",
    name: "Cinto dos Caminhos Cruzados",
    description: "Este cinto de couro possui fivelas de metal intrincadas que brilham com energia mágica. Uma vez por cena, você pode gastar uma ação de movimento e 3 PM para trocar de lugar com um aliado em alcance curto — vocês dois se teletransportam para onde o outro está.",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "cinturao-do-trobo",
    name: "Cinturão do Trobo",
    description: "Este cinto de couro resistente aumenta a força do usuário para erguer peso. Você recebe +5 em testes de Atletismo para erguer peso e sua capacidade de carga aumenta em 5 espaços.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "colar-da-furia-monstruosa",
    name: "Colar da Fúria Monstruosa",
    description: "Este colar rústico, feito com ossos e presas de monstros variados, invoca a fúria primeva de Megalokk. Você adquire a habilidade Fúria do bárbaro; caso já possua essa habilidade, seus bônus em testes de ataque e rolagens de dano aumentam em +1.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "colar-da-perseveranca",
    name: "Colar da Perseverança",
    description: "Este colar de âmbar proporciona ao usuário um aumento considerável em sua determinação. Você recebe +5 em Vontade e +2 em todos os testes estendidos.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "colar-do-tirano",
    name: "Colar do Tirano",
    description: "Este item cruel é fabricado por abissais e usado por escravagistas. Cada colar tem conexão planar com uma ou mais coleiras (tipicamente 1d8) destinadas a prisioneiros escravizados. Uma vez por rodada, o usuário do colar do tirano pode causar 2d8+2 pontos de dano de eletricidade a um escravo encoleirado. Tentativas mundanas de remover a coleira causam o mesmo dano — apenas efeitos como Dissipar Magia permitem destrancá-las. Além disso, qualquer dano ou efeito nocivo causado ao usuário do colar também afeta todos os escravos encoleirados.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "colar-das-bolas-de-fogo",
    name: "Colar das Bolas de Fogo",
    description: "Este colar de ouro possui cinco pequenos rubis incrustados (ou 1d4+1 rubis, se for encontrado num tesouro). Você recebe redução de fogo 10 e pode lançar Bola de Fogo (CD Int ou Car; se já puder lançar essa magia, você recebe 2 PM para gastar em aprimoramentos dela). Quando lança Bola de Fogo, você pode gastar uma ação de movimento para arrancar e quebrar um dos rubis. Se fizer isso, aumenta a CD para resistir a magia em +2 e todos os dados de dano dela em um passo (ambos os efeitos são cumulativos com bônus de outros itens). Se quebrar todos os rubis, o colar perde seus poderes.",
    price: "T$ 12.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "coracao-do-inverno",
    name: "Coração do Inverno",
    description: "Este cristal azul claro é muito frio ao toque, parecendo emitir uma aura gélida. Se estiver empunhando o cristal, você pode lançar Raio Polar (CD Int ou Car; se já puder lançar essa magia, seus dados de dano aumentam em um passo). Deixado em um aposento fechado e pequeno (equivalente a no máximo uma área de 9m de raio), faz com que seu interior se torne muito frio (abaixo de –10ºC).",
    price: "T$ 45.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "corda-da-resignacao",
    name: "Corda da Resignação",
    description: "Esta corda feita de fibras mágicas possui um feitiço de aprisionamento. Quando é usada para amarrar alguém, a CD do teste de Acrobacia para escapar aumenta em +20. Além disso, uma vítima amarrada tem sua força de vontade drenada, e fica alquebrada e esmorecida.",
    price: "T$ 7.500",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "coroa-da-floresta-sussurrante",
    name: "Coroa da Floresta Sussurrante",
    description: "Esta tiara feita de galhos e folhas sempre verdes tem pequenas flores que se abrem ao toque. Ao vesti-la, você é considerado sob efeito da magia Voz Divina e pode lançar Acalmar Animal e Controlar Plantas (CD Sab; se já puder lançar uma dessas magias, pode lançá-la como uma ação de movimento).",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "coroa-da-majestade-distorcida",
    name: "Coroa da Majestade Distorcida",
    description: "Esta coroa de prata escura é adornada com pedras de obsidiana. Usada por alguns monarcas, permite exercer uma aura de autoridade inquestionável. Você recebe +1 de Carisma (somente após um dia de uso) e pode lançar Comando (CD Car) como uma ação de movimento e com um bônus de +2 na CD. Contudo, aqueles que passam em seu teste de resistência uma única vez não podem mais ser afetados — talvez explicando algumas prisões ou banimentos sem motivo aparente...",
    price: "T$ 25.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "cristal-da-voz-silenciosa",
    name: "Cristal da Voz Silenciosa",
    description: "Usado como pingente junto à garganta, este cristal permite ao usuário falar com uma voz mágica, audível apenas para as pessoas que ele selecionar, em alcance curto. Além de muito útil para comunicações secretas, o cristal também permite lançar magias sem necessidade de falar.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "cristal-do-tempo-celere",
    name: "Cristal do Tempo Célere",
    description: "Este cristal azulado contém em seu interior uma pequena porção de gás mágico que afeta a passagem do tempo. Quando o cristal é quebrado, pode acelerar o tempo dentro de um aposento. Em termos de jogo, gastar o cristal permite um intervalo entre aventuras no tempo de 1 dia.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "elixir-da-eternidade",
    name: "Elixir da Eternidade",
    description: "Este elixir dourado, guardado em uma ampola de vidro de alta qualidade, é capaz de preservar a vitalidade de uma criatura viva por um longo período. Quando ingerido, evita que o usuário envelheça. Até o fim da aventura, você recebe resistencia a trevas +5, torna-se imune a efeitos mágicos de envelhecimento e, se estiver usando a regra opcional de idades variadas (p. 288), ignora todas as suas complicações de idade.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "elixir-da-mente-dividida",
    name: "Elixir da Mente Dividida",
    description: "Este elixir de cor verde esmeralda permite ao usuário dividir sua consciência em duas partes. Quando ingerido, permite executar uma ação de movimento e uma ação padrão adicionais por rodada (esse efeito não se acumula com outros efeitos mágicos que concedem ações adicionais) até o fim da cena. Contudo, enquanto sua mente está dividida, você perde a capacidade de se focar plenamente em qualquer tarefa: sofre uma penalidade de –5 em testes de perícia (exceto testes feitos como reação) e é considerado em condição ruim para lançar magias (Tormenta20, p. 170). Além disso, quando o efeito acaba, você fica fatigado por 1 dia.",
    price: "T$ 1.500",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "espelho-da-verdade",
    name: "Espelho da Verdade",
    description: "Este grande espelho é emoldurado em ferro e adornado com figuras de celestiais combatendo abissais. A imagem de qualquer criatura ou objeto refletida no espelho revela sua forma verdadeira, como a magia Visão da Verdade — sendo assim um item muitas vezes encontrado em locais de alta segurança. O espelho também pode ser utilizado por um conjurador como a superfície reflexiva para lançar Vidência, aumentando a CD dessa magia em +5 e estendendo seu efeito de Visão da Verdade ao alvo observado.",
    price: "T$ 21.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "espelho-do-outro-lado",
    name: "Espelho do Outro Lado",
    description: "Este pequeno espelho de bronze polido reflete não apenas a imagem física, mas a alma do indivíduo que o encara. Uma vez por aventura, você pode encarar o espelho para conversar por alguns minutos com sua contraparte espiritual. O resultado da interação é imprevisível, pois o reflexo pode se manifestar como um aliado solícito que oferece conselhos ou como um crítico severo que diminui sua autoconfiança. Em termos de regras, role 1d10–3. Se você rolar um número positivo, recebe esse número em d6 de auxílio — até o fim da aventura, quando faz um teste de perícia, pode gastar até 2d6 e adicionar o resultado como bônus no teste (cumulativo com bônus de outros itens). Se você rolar um número negativo, o mestre recebe esse número em d6. Até o fim da aventura, quando você faz um teste de perícia, o mestre pode gastar qualquer quantidade desses dados e impor o resultado como uma penalidade no teste, representando inseguranças incutidas em você por sua própria alma!",
    price: "T$ 18.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "frigideira-do-chef-anao",
    name: "Frigideira do Chef Anão",
    description: "Esta enorme frigideira de adamante, gravada com runas dos anões, é amplamente utilizada pelos maiores chefs de Doherimm. É um instrumento de Ofício (cozinheiro) que fornece +5 nessa perícia. Também pode ser usada como uma maça maciça formidável de adamante ou, em situações de emergência, como um escudo pesado defensor de adamante que, por não ter suportes próprios, exige as duas mãos.",
    price: "T$ 24.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "gaiola-dos-arcanos",
    name: "Gaiola dos Arcanos",
    description: "Este item é uma gaiola de prata pequena e robusta, com um pequeno cristal pulsante em seu interior. Quando uma criatura usa uma habilidade mágica em um raio de 9m da gaiola, o cristal suga 1 PM por círculo da magia lançada, ou 2 PM no caso de outras habilidades mágicas, dessa criatura. Os efeitos de várias gaiolas no mesmo aposento são cumulativos.",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "gema-da-profanacao",
    name: "Gema da Profanação",
    description: "Esta gema preciosa foi abençoada por uma ou mais divindades malignas do Panteão, tipicamente Aharadak, Arsenal, Kallyadranoch e outras que canalizam energia negativa. O custo de suas habilidades mágicas que causam dano de trevas diminui em –2 PM.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "gema-da-purificacao",
    name: "Gema da Purificação",
    description: "Esta gema preciosa foi abençoada por Lena, Marah, Thyatis ou outra divindade piedosa. Você pode lançar a magia Purificação. Caso seja devoto de uma divindade que canaliza energia positiva e/ou já conheça essa magia, seu custo diminui em –1 PM (essas reduções são cumulativas entre si).",
    price: "T$ 18.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "gema-da-santificacao",
    name: "Gema da Santificação",
    description: "Esta gema preciosa foi abençoada por uma ou mais divindades benignas do Panteão, tipicamente Azgher, Khalmyr, Lena e outras que canalizam energia positiva. Toda a área em alcance curto da gema é considerada sob efeito da magia Consagrar. Se for devoto de uma dessas divindades, você pode também pagar PM para ativar seus aprimoramentos por uma cena.",
    price: "T$ 24.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "instrumentos-da-celeridade",
    name: "Instrumentos da Celeridade",
    description: "Existe uma versão destas ferramentas mágicas para cada perícia de Ofício. Conta como instrumentos do Ofício em questão aprimorado e permite fabricar um item adicional da mesma categoria e que tenha o mesmo tempo de fabricação ao mesmo tempo. Você precisa pagar o custo e fazer o teste de cada item.",
    price: "T$ 22.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "lampada-da-ilusao-impecavel",
    name: "Lâmpada da Ilusão Impecável",
    description: "Esta lâmpada de cristal contém uma chama dourada que nunca apaga. Quando sua cobertura é removida, ela projeta ilusões perfeitamente detalhadas de qualquer coisa que o usuário deseje — você pode lançar a magia Criar Ilusão, mas apenas para efeitos visuais (CD Int; se já puder lançar essa magia, recebe 2 PM para gastar em aprimoramentos dela). Contudo, a perfeição absoluta das imagens aumenta a CD para resistir à magia em +5.",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "mascara-da-raposa",
    name: "Máscara da Raposa",
    description: "Esta máscara de marfim ornada com linhas em vermelho vivo é muitas vezes vista em representações recentes de Hyninn. Usando-a, você parece estar em vários lugares, e em nenhum. Você pode lançar Imagem Espelhada (se já puder lançar essa magia, pode lançá-la como uma ação de movimento e seu custo diminui em –1 PM).",
    price: "T$ 18.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "mascara-do-predador",
    name: "Máscara do Predador",
    description: "Esta máscara metálica rústica amplifica os sentidos do caçador, facilitando o rastreio de sua presa. Você recebe +5 em testes de Investigação para procurar e em testes de Sobrevivência para rastrear. Você também recebe a habilidade Marca da Presa do caçador. Se já a possui, o custo para usá-la diminui em –1 PM (essa redução não conta para suas habilidades baseadas no total de PM gastos em Marca da Presa).",
    price: "T$ 22.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "monoculo-da-franqueza",
    name: "Monóculo da Franqueza",
    description: "Esta lente emoldurada em prata revela intenções e pensamentos ocultos. Observando alguém em alcance curto através do monóculo, o usuário recebe uma leitura superficial de sua mente, discernindo mentiras ou intenções escusas. Você recebe +10 em testes de Intuição para perceber mentiras.",
    price: "T$ 4.500",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "ocarina-da-melodia-distante",
    name: "Ocarina da Melodia Distante",
    description: "Este instrumento musical feito de porcelana fornece +2 em Atuação. Contudo, seu verdadeiro potencial só é revelado quando é tocado por um bardo — o bônus em Atuação aumenta para +5 e o alcance de suas Músicas de bardo aumenta em um passo (de curto para médio e de médio para longo).",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "oculos-da-revelacao",
    name: "Óculos da Revelação",
    description: "Quando invoca o poder destas lentes, você pode lançar a magia Lendas e Histórias.",
    price: "T$ 10.500",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "olhos-do-corvo",
    name: "Olhos do Corvo",
    description: "Esta tira de tecido deve ser amarrada sobre os olhos como uma venda, cobrindo-os com desenhos que imitam olhos de ave. Enquanto usa o item, você fica cego em ambientes iluminados, mas em ambientes escuros (escuridão leve ou total, mundana ou mágica) enxerga normalmente e fica imune às condições cego e ofuscado.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "papiro-das-estrelas",
    name: "Papiro das Estrelas",
    description: "Um pergaminho preto que parece conter constelações em sua superfície. Desenrolado, projeta um mapa celeste mágico que revela localizações ocultas, caminhos seguros ou perigos iminentes. Fornece +5 em testes de Sobrevivência para orientar-se e rastrear, e em testes de Percepção para evitar ser surpreendido por inimigos nos ermos.",
    price: "T$ 1.500",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "pedra-da-passagem",
    name: "Pedra da Passagem",
    description: "Uma pequena pedra dourada que emite uma leve pulsação de luz. Você pode gastar uma ação padrão e 3 PM para segurá-la contra uma superfície sólida e produzir uma abertura de tamanho Médio. Afeta apenas superfícies não mágicas com RD 8 ou menos. Não abre buracos em seres vivos. Não abre buracos em golens ou osteon. Não abre buracos em armadilhas ou evita perigos complexos, mesmo que você ache as palavras “porta” ou “parede” em algum lugar da descrição. Não abre buracos em nada exceto portas e paredes. Francamente...!",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "pena-da-criacao",
    name: "Pena da Criação",
    description: "Esta pena, que brilha em tom roxo escuro, pertencia a um malafex — tipo de corvo mágico sagrado de Nimb. Conta como instrumentos de Ofício (escriba) aprimorado. Uma vez por cena, você pode gastar uma ação completa para desenhar um monstro em um pergaminho ou outra superfície que aceite tinta. Faça um teste de Ofício (escriba) com CD 10. Se passar, você lança o efeito básico de Conjurar Monstro sem gastar PM. Para cada 5 pontos pelos quais o resultado do teste exceder a CD, você recebe +1 PM para gastar em aprimoramentos. Você pode usar esse efeito mesmo sem ser treinado no Ofício apropriado (mas talvez o monstro invocado seja um pouco… esquisito).",
    price: "T$ 6.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "pergaminho-da-verdade-cosmica",
    name: "Pergaminho da Verdade Cósmica",
    description: "Este perigoso pergaminho contém uma revelação divina tão poderosa e terrível que pode destruir a mente do leitor (avisos a esse respeito estão gravados no estojo externo). Abrir e olhar o pergaminho exige fazer um teste de Vontade (CD 40). Nenhum tipo de habilidade ou efeito que conceda sucessos automáticos ou permita escolher 10 funciona para esse teste. Em caso de falha, sua mente se despedaça — você sofre o efeito debilidade de Rogar Maldição, em sua versão permanente. Contudo, em caso de sucesso, você pode imediatamente lançar Intervenção Divina, para qualquer divindade que deseje, sem precisar gastar ou sacrificar PM, independente do efeito que peça. Uma vez utilizado, o pergaminho se desfaz em cinzas; o mesmo acontece com a verdade revelada, sendo impossível uma mente mortal contê-la.",
    price: "T$ 9.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "perola-da-nulificacao",
    name: "Pérola da Nulificação",
    description: "Quando é ativada (uma ação de movimento), esta pequena pérola multicolorida produz o efeito básico da magia Campo Antimagia ao redor de seu portador, com duração de cena (em vez de sustentada). Contudo, o item tem apenas uma utilização; quando o efeito termina, a pérola adquire tom acinzentado, perdendo seu poder.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "pingente-da-dor-partilhada",
    name: "Pingente da Dor Partilhada",
    description: "Esta joia delicada, feita de prata escurecida, é ornamentada com um pequeno rubi em formato de lágrima, pulsando suavemente no ritmo do coração de seu portador. Quando um aliado em alcance curto se fere, você pode gastar 2 PM. Se fizer isso, o aliado não sofre o dano, mas você perde PV em quantidade igual ao dano que ele teria sofrido (após quaisquer efeitos que reduzam dano que seu aliado possua ou use, como RD ou Durão).",
    price: "T$ 15.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "saco-dos-ventos-silenciosos",
    name: "Saco dos Ventos Silenciosos",
    description: "Este saco de algodão cru parece conter uma brisa constante. Quando aberto, libera um vento silencioso que pode ser usado para purificar ambientes, suavizar quedas ou aliviar calor extremo. Você pode lançar Criar Elementos (apenas ar), Queda Suave e Suporte Ambiental (apenas contra calor). Se já puder lançar qualquer dessas magias, seu custo diminui em –1 PM.",
    price: "T$ 3.000",
    size: "Menor",
    origin: "Herois de Arton"
  },
  {
    id: "sandalias-de-valkaria",
    name: "Sandálias de Valkaria",
    description: "Estas sandálias leves permitem andar sobre qualquer superfície, incluindo água e neve. Você ignora terrenos difíceis, pode caminhar sobre líquidos (como o aprimoramento da magia Libertação) e recebe +5 em testes de Acrobacia para atrevessar terreno escorregadio e em testes Atletismo para escalar.",
    price: "T$ 12.000",
    size: "Médio",
    origin: "Herois de Arton"
  },
  {
    id: "tomo-da-tecnica-definitiva",
    name: "Tomo da Técnica Definitiva",
    description: "Destinado a guerreiros que desenvolveram seu próprio Golpe Pessoal, este manual permite aprimorar ainda mais sua técnica. Estudar o tomo exige uma ação entre aventuras. Uma vez que você tenha feito isso, seu Golpe Pessoal recebe novos efeitos num total de até 2 PM, que não contam no limite para construí-lo e que não aumentam seu custo em PM. Quando sobede nível e reconstrói seu golpe, você pode alterá-los. Se você possuir mais de um Golpe Pessoal, esse efeito se aplica apenas a um deles.",
    price: "T$ 30.000",
    size: "Maior",
    origin: "Herois de Arton"
  },
  {
    id: "tomo-dos-companheiros",
    name: "Tomo dos Companheiros",
    description: "Diz-se que este livro volumoso veio da própria Biblioteca de Tanna-Toh, em seu reino divino. De tão poderosas suas histórias, os personagens às vezes escapam para a vida real. Você pode gastar uma ação completa e 3 PM para ler um trecho do livro e convocar um parceiro veterano de um tipo a sua escolha, que surge em um espaço desocupado adjacente. O parceiro dura até o fim do dia ou até você conjurar outro parceiro com o tomo.",
    price: "T$ 45.000",
    size: "Maior",
    origin: "Herois de Arton"
  }
];
  