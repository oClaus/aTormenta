// data/dominio-construcoes.ts
import { DomainConstruction } from "@/types/dominio-construcoes";

// Lista completa de construções de domínio.
//
// ATENÇÃO — inconsistências encontradas entre a tabela de custo/benefício e o texto
// corrido ao transcrever o material original. O campo "benefit" segue a tabela e a
// "description" segue o texto corrido; quando os dois discordam, isso é indicado com
// [DIVERGÊNCIA] dentro do benefit. Vale conferir no livro antes de publicar:
//   - Castelo: tabela diz "+10" na fortificação, texto diz "+5"
//   - Quarto Luxuoso: tabela diz "+5 pontos de vida", texto diz "+3 pontos de vida"
//   - Sala de Mapas: tabela diz "troca de posição na iniciativa", texto fala em
//     "ação de movimento extra no primeiro turno de cada combate"
//   - Torre de Estudos: tabela diz "fornece um poder de mago", texto diz
//     "aprende uma magia arcana de sua lista"
//   - Docas: tabela diz "+1 no bônus de Audácia", texto diz "recebe um poder de bucaneiro"
//   - Arena Arcana: a tabela agrupa como upgrade de Torre de Estudos, mas o texto diz
//     "Pré-requisito: salão dos mistérios"
//   - "Guilda de Artesãos" (nome da tabela) aparece no texto como "Sede de Guilda"

export const dominioConstrucoes: DomainConstruction[] = [
  // --- Perícia: Nobreza ---
  {
    id: "adega",
    name: "Adega",
    cost: 4,
    pericia: "Nobreza",
    benefit: "+3 pontos de mana",
    description:
      "Um espaço no porão com barris e garrafas de vinhos selecionados. Usufruir de uma adega fornece +3 pontos de mana.",
  },
  {
    id: "aqueduto",
    name: "Aqueduto",
    cost: 15,
    pericia: "Nobreza",
    benefit: "Rola duas vezes para encontros aleatórios e escolhe o melhor",
    description:
      "Este canal construído sobre arcos de pedra com dezenas de metros de altura traz água para o coração do domínio. Quando você rola encontros aleatórios, rola duas vezes e escolhe uma delas.",
  },
  {
    id: "banhos-publicos",
    name: "Banhos Públicos",
    cost: 7,
    pericia: "Nobreza",
    benefit: "+5 em testes de governar",
    description:
      "Estas fontes termais trazem conforto e higiene aos habitantes do domínio. Você recebe +5 em testes da ação governar.",
  },
  {
    id: "biblioteca",
    name: "Biblioteca",
    cost: 10,
    pericia: "Nobreza",
    benefit: "Torna-se treinado em uma perícia",
    description:
      "Com uma coleção de pergaminhos, livros e tomos variados, este lugar tem muito a ensinar. Você se torna treinado em uma perícia.",
  },
  {
    id: "universidade",
    name: "Universidade",
    cost: 25,
    pericia: "Nobreza",
    benefit: "Ganha um poder geral",
    description:
      "Uma instituição de ensino e pesquisa, onde conhecimento é gerado e distribuído. Quando constrói uma universidade, você recebe um poder geral.",
    prerequisite: "Biblioteca",
  },
  {
    id: "botica",
    name: "Botica",
    cost: 3,
    pericia: "Nobreza",
    benefit: "+1 em Fortitude",
    description:
      "Esta cabana de madeira possui diversas ervas medicinais, que se consumidas com sabedoria fortalecem sua saúde. Fornece +1 em Fortitude.",
  },
  {
    id: "cabana-de-caca",
    name: "Cabana de Caça",
    cost: 2,
    pericia: "Nobreza",
    benefit: "Dano de Marca da Presa aumenta em um passo",
    description:
      "Esta choupana permite que você passe dias nos ermos, treinando suas habilidades de caça. O dano de sua Marca da Presa aumenta em um passo (por exemplo, de 1d12 para 3d6).",
  },
  {
    id: "cadafalso",
    name: "Cadafalso",
    cost: 1,
    pericia: "Nobreza",
    benefit: "+2 em Intimidação",
    description:
      "Um palanque de madeira para a execução de condenados. Fornece +2 em Intimidação — todos levam a sério um regente acostumado a executar pessoas em praça pública.",
  },
  {
    id: "campo-de-treinamento",
    name: "Campo de Treinamento",
    cost: 2,
    pericia: "Nobreza",
    benefit: "Recruta milícia",
    description:
      "Um descampado próximo, onde camponeses podem treinar manobras militares básicas. Permite recrutar milícias.",
  },
  {
    id: "corte-de-lei",
    name: "Corte de Lei",
    cost: 5,
    pericia: "Nobreza",
    benefit: "Rola dois dados em testes de resistência contra efeitos mentais",
    description:
      "Uma sala ou prédio onde o regente julga disputas entre seus súditos. Fazer isso o torna mais capaz de discernir o certo do errado. Quando faz um teste de resistência contra um efeito mental, você rola dois dados e usa o melhor.",
  },
  {
    id: "curtume",
    name: "Curtume",
    cost: 4,
    pericia: "Nobreza",
    benefit: "+2 na Defesa de capangas",
    description:
      "Este estabelecimento fornece couro curtido, útil para a produção de armaduras. Seus capangas recebem +2 na Defesa.",
  },
  {
    id: "estatua",
    name: "Estátua",
    cost: 2,
    pericia: "Nobreza",
    benefit: "Aumenta gasto máximo de PM em +1",
    description:
      "Este monumento de um herói do passado — ou do próprio regente, se ele não for modesto — o impulsiona a atos impressionantes. O máximo de pontos de mana que você pode gastar em uma habilidade passa a ser seu nível +1.",
  },
  {
    id: "estrada",
    name: "Estrada",
    cost: 10,
    pericia: "Nobreza",
    benefit: "+2 em Iniciativa",
    description:
      "Este caminho de terra possui valetas para evitar que se transforme num lamaçal durante chuvas e cruza todo o domínio. O costume de viajar o torna habituado a reagir rapidamente. Fornece +2 em Iniciativa.",
  },
  {
    id: "estalagem",
    name: "Estalagem",
    cost: 8,
    pericia: "Nobreza",
    benefit: "Uma ação padrão adicional, uma vez por aventura",
    description:
      "Uma hospedaria onde lendas e canções são compartilhadas, fazendo com que todos se sintam mais heroicos. Uma vez por aventura, você pode realizar uma ação padrão adicional.",
    prerequisite: "Estrada",
  },
  {
    id: "fazenda",
    name: "Fazenda",
    cost: 2,
    pericia: "Nobreza",
    benefit: "+1d6-2 LO por turno",
    description:
      "Este campo arado aumenta a produção agrícola do domínio e, consequentemente, a arrecadação de impostos. Fornece 1d6–2 LO por turno. Como secas, tempestades e pestes podem estragar a colheita, é possível que a fazenda dê prejuízo (mas veja a construção celeiro).",
  },
  {
    id: "celeiro",
    name: "Celeiro",
    cost: 3,
    pericia: "Nobreza",
    benefit: "Elimina penalidade no ganho da fazenda",
    description:
      "Este depósito garante que sua produção agrícola não se perca. Elimina a penalidade no ganho da fazenda (se torna 1d6 LO, ou 1d8 LO, se você possuir um moinho).",
    prerequisite: "Fazenda",
  },
  {
    id: "moinho",
    name: "Moinho",
    cost: 5,
    pericia: "Nobreza",
    benefit: "Muda dado de ganho da fazenda para d8",
    description:
      "Um engenho movido por vento ou água para moer grãos. Permite a produção de farinha e, consequentemente, melhor aproveitamento da colheita. O ganho da fazenda aumenta para 1d8–2 LO (ou 1d8 LO, se você também tiver um celeiro).",
    prerequisite: "Fazenda",
  },
  {
    id: "feira",
    name: "Feira",
    cost: 5,
    pericia: "Nobreza",
    benefit: "+1d4 LO por turno",
    description:
      "Um espaço no centro da comunidade onde, uma vez por semana, fazendeiros trazem suas verduras, artesãos trazem seus produtos e todos trazem seu dinheiro — uma parte do qual, graças aos impostos cobrados, fica com você. Fornece 1d4 LO por turno.",
  },
  {
    id: "mercado",
    name: "Mercado",
    cost: 10,
    pericia: "Nobreza",
    benefit: "Muda ganho da feira para 1d8 LO",
    description:
      "Como uma feira, mas com mais produtos e dinheiro circulando. Além disso, está sempre aberto, exceto em dias sagrados. Muda o ganho da feira para 1d8 LO.",
    prerequisite: "Feira",
  },
  {
    id: "forja",
    name: "Forja",
    cost: 6,
    pericia: "Nobreza",
    benefit: "+1 no dano de capangas",
    description:
      "Possuir uma forja garante que as armas de suas tropas estejam sempre afiadas. Seus capangas recebem +1 nas rolagens de dano.",
  },
  {
    id: "forte",
    name: "Forte",
    cost: 10,
    pericia: "Nobreza",
    benefit: "Fortificação +2",
    description:
      "Uma torre de madeira erguida em uma posição elevada. O forte é um símbolo de poder, a sede da corte, a residência do regente e, acima de tudo, o lugar para onde todos correm em caso de ataque. Fornece +2 em Fortificação.",
  },
  {
    id: "armorial",
    name: "Armorial",
    cost: 3,
    pericia: "Nobreza",
    benefit: "Diminui custo de Orgulho em –1 PM",
    description:
      "Esta sala repleta de brasões heráldicos e livros de genealogia ensina a importância de linhagens distintas. O custo de Orgulho diminui em –1 PM.",
    prerequisite: "Forte",
  },
  {
    id: "castelo",
    name: "Castelo",
    cost: 25,
    pericia: "Nobreza",
    benefit: "[DIVERGÊNCIA] Tabela: muda fortificação do forte para +10",
    description:
      "Esta construção imponente é protegida por fossos, muralhas e torres. Normalmente, seu pátio e térreo são abertos ao público, enquanto os andares superiores servem de residência para o regente, sua família e seus conselheiros. Muda o bônus de fortificação do forte para +5.",
    prerequisite: "Forte",
  },
  {
    id: "ordem-de-cavalaria",
    name: "Ordem de Cavalaria",
    cost: 20,
    pericia: "Nobreza",
    benefit: "Diminui custo de Baluarte em –1 PM",
    description:
      "A sede de uma irmandade devotada à honra e à justiça. Estar perto de pessoas tão exemplares o motiva a defender o bem. O custo de Baluarte diminui em –1 PM.",
    prerequisite: "Forte",
  },
  {
    id: "sala-do-trono",
    name: "Sala do Trono",
    cost: 5,
    pericia: "Nobreza",
    benefit: "+2 em Diplomacia",
    description:
      "Uma sala grandiosa, ostentando flâmulas com o brasão do regente e um assento elevado, de onde ele pode receber seus súditos, emissários e mesmo outros nobres... E olhá-los de cima. Fornece +2 em Diplomacia.",
    prerequisite: "Forte",
  },
  {
    id: "madeireira",
    name: "Madeireira",
    cost: 15,
    pericia: "Nobreza",
    benefit: "+1d8 LO, –10% em eventos, apenas florestas",
    description:
      "Um campo encravado na mata para extração de madeira. Fornece 1d8 LO por turno, mas pode enfurecer animais e espíritos da natureza — fornece –10% nas rolagens de eventos aleatórios.",
    prerequisite: "Terreno floresta",
  },
  {
    id: "masmorra",
    name: "Masmorra",
    cost: 20,
    pericia: "Nobreza",
    benefit: "+2 na CD de habilidades de classe (exceto magias)",
    description:
      "Um conjunto de túneis, salas e armadilhas, normalmente construído para proteger um tesouro. Planejar a masmorra faz com que você pense sobre como melhor derrotar invasores e fornece +2 na CD de suas habilidades (exceto magias).",
  },
  {
    id: "mina",
    name: "Mina",
    cost: 20,
    pericia: "Nobreza",
    benefit: "+1d12 LO, –20% em eventos, apenas montanhas e subterrâneos",
    description:
      'Esta construção pode ser de superfície (um grande buraco no chão) ou subterrânea (com túneis chamados de "galerias") e tem como objetivo extrair minérios valiosos da terra. Fornece espantosos 1d12 LO por turno, mas pode atrair monstros do subterrâneo — fornece –20% nas rolagens de eventos aleatórios.',
    prerequisite: "Terreno montanha",
  },
  {
    id: "obra-de-arte",
    name: "Obra de Arte",
    cost: 3,
    pericia: "Nobreza",
    benefit: "+1 em Vontade",
    description:
      "Um quadro, escultura ou outra criação inspiradora. Fornece +1 em Vontade.",
  },
  {
    id: "oficina",
    name: "Oficina",
    cost: 2,
    pericia: "Nobreza",
    benefit: "+2 em Ofício (qualquer)",
    description:
      "Um galpão repleto de bancadas de trabalho e ferramentas, onde pessoas — incluindo o próprio regente — podem trabalhar nas melhores condições. Fornece +2 em Ofício (qualquer).",
  },
  {
    id: "guilda-de-artesaos",
    name: "Guilda de Artesãos",
    cost: 15,
    pericia: "Nobreza",
    benefit: "Adiciona uma melhoria a um item, uma vez por aventura",
    description:
      "Esta associação reúne mestres de diversos ofícios, que podem fornecer o melhor equipamento possível ao regente. No início de cada aventura, um item a sua escolha recebe uma melhoria (exceto melhorias de mortífice), até um máximo de quatro.",
    prerequisite: "Oficina",
  },
  {
    id: "palacio",
    name: "Palácio",
    cost: 100,
    pericia: "Nobreza",
    benefit: "Aumenta limite de parceiros em +1",
    description:
      "Esta construção luxuosa é feita para ostentar o poder do regente, influenciando as pessoas a segui-lo. Aumenta seu limite de parceiros em +1.",
  },
  {
    id: "palicada",
    name: "Paliçada",
    cost: 4,
    pericia: "Nobreza",
    benefit: "Fortificação +2",
    description:
      "Uma cerca feita de estacas pontiagudas fincadas no chão. Fornece +2 em Fortificação.",
  },
  {
    id: "muralha",
    name: "Muralha",
    cost: 10,
    pericia: "Nobreza",
    benefit: "Muda bônus da paliçada para +5",
    description:
      "Um muro alto formado por grandes blocos de pedra. Possui um passadiço no topo protegido por merlões e ameias. Muda o bônus de Fortificação da paliçada para +5.",
    prerequisite: "Paliçada",
  },
  {
    id: "poco-de-piche",
    name: "Poço de Piche",
    cost: 6,
    pericia: "Nobreza",
    benefit: "Bônus em alquímicos, apenas pântanos",
    description:
      "Um buraco no chão de onde piche e outras substâncias escorrem da terra. As matérias-primas extraídas do poço fornecem +2 na CD de seus preparados e venenos.",
    prerequisite: "Terreno pântano",
  },
  {
    id: "porto",
    name: "Porto",
    cost: 10,
    pericia: "Nobreza",
    benefit: "Ganha 1d6 LO por turno",
    description:
      "Um porto marítimo, se o domínio ficar na costa, ou fluvial, se ficar no interior do continente, permite que barcos e navios atraquem, trazendo pesca e comércio — e aumentando a arrecadação de impostos. Fornece 1d6 LO por turno.",
  },
  {
    id: "docas",
    name: "Docas",
    cost: 4,
    pericia: "Nobreza",
    benefit: "[DIVERGÊNCIA] Tabela: Bônus de Audácia aumenta em +1 e pode ser usado em ataques",
    description:
      "Aqui marujos se reúnem, contando histórias de aventuras. Sejam verdadeiras, exageradas ou mentirosas, alimentam a sede de façanhas de quem as escuta. Você recebe um poder de bucaneiro.",
    prerequisite: "Porto",
  },
  {
    id: "povoado-afastado",
    name: "Povoado Afastado",
    cost: 4,
    pericia: "Nobreza",
    benefit: "Permite uma construção de outro terreno",
    description:
      "Esta pequena comunidade fica afastada do centro do domínio — longe o bastante para estar perto de outro tipo de terreno. Permite que você erga uma construção com pré-requisito de terreno diferente do seu.",
  },
  {
    id: "quarto-luxuoso",
    name: "Quarto Luxuoso",
    cost: 2,
    pericia: "Nobreza",
    benefit: "[DIVERGÊNCIA] Tabela: +5 pontos de vida",
    description:
      "Você é um rei (ou algo parecido), então faz sentido que durma como um! Seu quarto tem uma cama enorme, com colchão de plumas de ganso, dossel, penteadeira e espelho. Por estar sempre descansado e bem-disposto, você recebe +3 pontos de vida.",
  },
  {
    id: "torre-de-vigia",
    name: "Torre de Vigia",
    cost: 2,
    pericia: "Nobreza",
    benefit: "+2 em Percepção",
    description:
      "Uma torre nas fronteiras do domínio, perfeita para avistar bandidos, monstros e outros invasores. Trabalhar como sentinela faz você ficar alerta e preparado para a ação. Fornece +2 em Percepção.",
  },

  // --- Perícia: Guerra ---
  {
    id: "canil",
    name: "Canil",
    cost: 4,
    pericia: "Guerra",
    benefit: "Recruta cães de guerra",
    description:
      "Em troca de pulgas e cheiro forte, esta construção fornece companheiros tão ferozes quanto leais. Permite recrutar cães de guerra.",
  },
  {
    id: "estrebaria",
    name: "Estrebaria",
    cost: 10,
    pericia: "Guerra",
    benefit: "Recebe montaria",
    description:
      "Aqui os melhores animais são selecionados e treinados, garantindo que você sempre tenha uma montaria à altura. Você recebe um cavalo de guerra veterano. Caso já possua, ele muda para mestre ou, se já o for, recebe os benefícios de outro tipo de parceiro iniciante (aprovado pelo mestre).",
  },
  {
    id: "pista-de-justas",
    name: "Pista de Justas",
    cost: 10,
    pericia: "Guerra",
    benefit: "Recruta cavaleiros",
    description:
      "Uma faixa de terra onde torneios de cavalaria são disputados. Permite recrutar cavaleiros.",
    prerequisite: "Estrebaria",
  },
  {
    id: "patio-de-treinamento",
    name: "Pátio de Treinamento",
    cost: 6,
    pericia: "Guerra",
    benefit: "+1 em testes de ataque (ou uma proficiência)",
    description:
      "Um espaço para guardas praticarem seus golpes. Um regente que possua um pátio de treinamento acaba observando os exercícios, ficando mais apto. Você recebe uma proficiência a sua escolha ou +1 em testes de ataque.",
  },
  {
    id: "licas",
    name: "Liças",
    cost: 2,
    pericia: "Guerra",
    benefit: "Aumenta bônus de Fúria em +1",
    description:
      "Um campo de areia onde combates brutais são travados. Seja por diversão, seja por treinamento, participar das liças torna qualquer um mais feroz. O bônus que você recebe nos testes de ataque e rolagens de dano quando usa Fúria aumenta em +1.",
    prerequisite: "Pátio de Treinamento",
  },
  {
    id: "salao-de-guerreiros",
    name: "Salão de Guerreiros",
    cost: 4,
    pericia: "Guerra",
    benefit: "+1 ponto de dano por dado de Ataque Disciplinado",
    description:
      "Um salão de madeira, comprido, com mesas longas e braseiros no fundo, onde soldados podem se reunir e trocar histórias de batalha. Você recebe +1 no dano de cada dado de seu Ataque Disciplinado.",
    prerequisite: "Pátio de Treinamento",
  },
  {
    id: "pista-de-arquearia",
    name: "Pista de Arquearia",
    cost: 2,
    pericia: "Guerra",
    benefit: "Recruta arqueiros",
    description:
      "Um campo para a prática de tiro ao alvo, onde camponeses acostumados a caçar pequenos animais podem treinar para caçar presas maiores. Permite recrutar arqueiros.",
  },
  {
    id: "posto-de-pedagio",
    name: "Posto de Pedágio",
    cost: 2,
    pericia: "Guerra",
    benefit: "Aumenta ganho de impostos altos (requisito adicional: estradas)",
    description:
      "Se o regente mantém as estradas em boas condições e espanta monstros, nada mais justo que cobre um pouco de cada viajante. Os impostos que ele já cobra do povo? Ah, esses são para outros gastos! Quando você cobra impostos altos, recebe +1 LO por nível do domínio — postos de pedágio não são nem um pouco populares, e não são usados em impostos baixos ou médios.",
    prerequisite: "Estrada",
  },
  {
    id: "sala-de-mapas",
    name: "Sala de Mapas",
    cost: 8,
    pericia: "Guerra",
    benefit: "[DIVERGÊNCIA] Tabela: Troca de posição na iniciativa com um aliado",
    description:
      "Além de mapas dos reinos, esta sala traz reconstituições de batalhas e relatos de estrategistas. Um regente que estude na sala de mapas aprende a se posicionar no campo de batalha. Você pode realizar uma ação de movimento extra no seu primeiro turno de cada combate.",
  },
  {
    id: "torre-de-guarnicao",
    name: "Torre de Guarnição",
    cost: 5,
    pericia: "Guerra",
    benefit: "Recruta guardas",
    description:
      "Esta torre serve de dormitório, área de convivência e depósito de equipamento para os homens e mulheres que defendem o domínio. Permite recrutar guardas.",
  },

  // --- Perícia: Enganação ---
  {
    id: "bazar",
    name: "Bazar",
    cost: 5,
    pericia: "Enganação",
    benefit: "+10% ao negociar itens comuns",
    description:
      "Uma loja de artigos variados, como peles, sacas de grão e ferramentas. Quando compra ou vende itens mundanos (não especiais e não mágicos), você muda o preço em 10% a seu favor.",
  },
  {
    id: "caravancara",
    name: "Caravançará",
    cost: 10,
    pericia: "Enganação",
    benefit: "Cria caravanas (requisito adicional: estradas)",
    description:
      "Um pátio cercado de hospedarias e armazéns, onde caravanas se formam. Você pode gastar uma ação de domínio e até 1d4 LO por nível de domínio para criar uma caravana. Na sua próxima etapa de impostos, faça um teste de Nobreza contra CD 20 + a quantidade de dados gastos (por exemplo, se você gastou 3d4 LO na caravana, a CD será 23). Se você passar, a caravana volta e você recebe 1d4+1 LO por dado gasto. Se passar por 5 ou mais, recebe 1d6+1 LO por dado. Se passar por 10 ou mais, recebe 2d4+1 LO por dado. Se você falhar, a caravana se perdeu e você não recebe nada.",
    prerequisite: "Bazar, Estrada",
  },
  {
    id: "emporio",
    name: "Empório",
    cost: 10,
    pericia: "Enganação",
    benefit: "+10% ao negociar um item especial, uma vez por aventura",
    description:
      "Uma grande loja onde tudo pode ser encontrado — com exceção, talvez, de negócios justos. Uma vez por aventura, você pode comprar ou vender um item especial e mudar o preço em 10% a seu favor.",
    prerequisite: "Bazar",
  },
  {
    id: "esconderijo",
    name: "Esconderijo",
    cost: 8,
    pericia: "Enganação",
    benefit: "Recruta bandidos",
    description: "Um covil de bandoleiros. Permite que você recrute bandidos.",
  },
  {
    id: "taverna",
    name: "Taverna",
    cost: 10,
    pericia: "Enganação",
    benefit: "Interrogar como ação livre, uma vez por aventura",
    description:
      "Este lugar de confraternização, música e bebida é o ambiente perfeito para que as pessoas soltem a língua. O dono de uma taverna está sempre a par das últimas fofocas. Uma vez por aventura, você pode interrogar (veja a página 81) como uma ação livre e sem gastar dinheiro, representando algo que ouviu numa noite na taverna.",
  },
  {
    id: "antro-de-jogatina",
    name: "Antro de Jogatina",
    cost: 10,
    pericia: "Enganação",
    benefit: "+2 em Enganação",
    description:
      "Uma sala discreta, onde muito ouro pode ser ganho e muito mais que ouro pode ser perdido. Frequentá-la melhora seus blefes, fornecendo +2 em Enganação.",
    prerequisite: "Taverna",
  },
  {
    id: "arena-clandestina",
    name: "Arena Clandestina",
    cost: 15,
    pericia: "Enganação",
    benefit: "Ganha Ataque Furtivo +1d6 (cumulativo)",
    description:
      "Localizada no porão de uma taverna, num celeiro abandonado ou em outro lugar discreto, esta arena abriga lutas ilegais, nas quais a única regra é que não há regras. Frequentá-la ensina muito sobre golpes baixos, fornecendo Ataque Furtivo +1d6 (cumulativo).",
    prerequisite: "Taverna",
  },
  {
    id: "casa-de-prazeres",
    name: "Casa de Prazeres",
    cost: 10,
    pericia: "Enganação",
    benefit: "Recebe um favor, uma vez por aventura",
    description:
      "Uma casa luxuosa, onde os sonhos de uma vida podem ser comprados, pelo menos por algumas horas. Uma vez por aventura, você pode usar a habilidade Favor. Se já possuí-la, recebe +5 no teste de Diplomacia para usá-la.",
    prerequisite: "Taverna",
  },
  {
    id: "palco",
    name: "Palco",
    cost: 4,
    pericia: "Enganação",
    benefit: "+2 em Atuação",
    description:
      "Um tablado elevado para espetáculos artísticos. Apresentar-se com frequência mantém suas habilidades afiadas, fornecendo +2 em Atuação.",
    prerequisite: "Taverna",
  },
  {
    id: "trupe-de-malabaristas",
    name: "Trupe de Malabaristas",
    cost: 4,
    pericia: "Enganação",
    benefit: "+1 em Reflexos",
    description:
      "Estes acrobatas, mágicos e outros artistas podem divertir o regente e toda a sua corte, além de ensinar alguns truques úteis. Fornece +1 em Reflexos.",
    prerequisite: "Taverna",
  },

  // --- Perícia: Religião ---
  {
    id: "abadia",
    name: "Abadia",
    cost: 12,
    pericia: "Religião",
    benefit: "Aprende uma magia divina de sua lista",
    description:
      "Um centro de estudos repleto de livros sagrados que podem ensinar-lhe os mistérios da fé. Você aprende uma magia divina de sua lista.",
  },
  {
    id: "capela",
    name: "Capela",
    cost: 5,
    pericia: "Religião",
    benefit: "+2 em Religião",
    description: "Uma pequena construção voltada para preces. Fornece +2 em Religião.",
  },
  {
    id: "relicario",
    name: "Relicário",
    cost: 8,
    pericia: "Religião",
    benefit: "+5 num teste de resistência, uma vez por aventura",
    description:
      "Uma caixa, cofre ou armário onde um objeto sagrado é guardado. A relíquia protege o regente — ou talvez o que o proteja seja a fé das pessoas que visitam o relicário para rezar. Uma vez por aventura, você recebe +5 num teste de resistência.",
    prerequisite: "Capela",
  },
  {
    id: "mosteiro",
    name: "Mosteiro",
    cost: 15,
    pericia: "Religião",
    benefit: "+3 pontos de mana (apenas para conjuradores divinos)",
    description:
      "Uma habitação onde monges vivem em isolamento. Passar um tempo vivendo com os monges, de forma humilde e abnegada, fortalece sua fé. Você recebe +3 pontos de mana, mas apenas se for um conjurador divino (clérigo ou druida).",
  },
  {
    id: "santuario",
    name: "Santuário",
    cost: 4,
    pericia: "Religião",
    benefit: "Fornece um poder de druida",
    description:
      "Um lugar isolado, como uma gruta ou clareira escondida, ideal para venerar espíritos da natureza. Você recebe um poder de druida.",
  },
  {
    id: "bosque-sagrado",
    name: "Bosque Sagrado",
    cost: 5,
    pericia: "Religião",
    benefit: "Um companheiro animal não conta no limite de parceiros",
    description:
      "Esta mata isolada possui árvores entalhadas com runas. Se você possuir um ou mais companheiros animais, um deles não conta em seu limite de parceiros.",
    prerequisite: "Santuário",
  },
  {
    id: "circulo-de-pedras",
    name: "Círculo de Pedras",
    cost: 10,
    pericia: "Religião",
    benefit: "Aumenta bônus de atributo de Forma Selvagem em +2",
    description:
      "Um círculo de pedras dispostas de forma a canalizar os poderes da natureza. Quando você usa Forma Selvagem, aumenta um dos bônus de atributos em +2.",
    prerequisite: "Santuário",
  },
  {
    id: "templo",
    name: "Templo",
    cost: 15,
    pericia: "Religião",
    benefit: "Fornece um poder de clérigo",
    description:
      "Um centro de devoção. Quando constrói um templo, você recebe um poder de clérigo.",
  },
  {
    id: "altar",
    name: "Altar",
    cost: 3,
    pericia: "Religião",
    benefit: "Canalizar energia aumenta para d8",
    description:
      "Esta mesa de pedra esculpida com um símbolo sagrado é o centro do culto em um templo, o lugar por onde a energia divina é focalizada. Quando usa a habilidade canalizar energia, o tipo de dado que você rola muda para d8.",
    prerequisite: "Templo",
  },
  {
    id: "catedral",
    name: "Catedral",
    cost: 20,
    pericia: "Religião",
    benefit: "Dobra os efeitos de uma missa",
    description:
      "Esta igreja grandiosa sedia grandes ritos. Uma vez por dia, os efeitos de uma de suas missas são dobrados.",
    prerequisite: "Templo",
  },

  // --- Perícia: Misticismo ---
  {
    id: "estante-de-pergaminhos",
    name: "Estante de Pergaminhos",
    cost: 12,
    pericia: "Misticismo",
    benefit: "Aprende uma magia arcana de sua lista",
    description:
      "Esta coleção de textos místicos permite que você descubra novos mistérios. Você aprende uma magia arcana de sua lista.",
  },
  {
    id: "poco-de-adivinhacao",
    name: "Poço de Adivinhação",
    cost: 10,
    pericia: "Misticismo",
    benefit: "Rola 2d20 num teste e usa o melhor, uma vez por aventura",
    description:
      "Permite que o regente observe lugares — ou mesmo épocas — distantes, garantindo que fique preparado para qualquer tipo de situação. Uma vez por aventura, quando faz um teste, você pode rolar dois d20 e usar o melhor.",
  },
  {
    id: "salao-dos-misterios",
    name: "Salão dos Mistérios",
    cost: 15,
    pericia: "Misticismo",
    benefit: "+2 em Misticismo",
    description:
      "Um ambiente repleto de objetos do oculto, como livros, pergaminhos, cristais, ervas, runas, ossos... além de ser o lar de corvos, gatos pretos, diabretes e outros bichinhos conectados com o lado arcano do mundo. Fornece +2 em Misticismo.",
  },
  {
    id: "pedra-de-maldicoes",
    name: "Pedra de Maldições",
    cost: 6,
    pericia: "Misticismo",
    benefit: "Alvo sofre –5 em sua próxima resistência, uma vez por aventura",
    description:
      "Uma pedra com símbolos pintados em sangue — ou um altar de ossos, um livro feito de pele humana... Uma vez por aventura, uma criatura em alcance curto sofre –5 em seu próximo teste de resistência, se realizado até o fim de seu próximo turno.",
    prerequisite: "Salão dos Mistérios",
  },
  {
    id: "sala-de-meditacao",
    name: "Sala de Meditação",
    cost: 5,
    pericia: "Misticismo",
    benefit: "+3 pontos de mana (apenas para conjuradores arcanos)",
    description:
      "Uma sala silenciosa, onde você pode se conectar com suas energias místicas. Você recebe +3 pontos de mana, mas apenas se for um conjurador arcano (bardo ou mago).",
  },
  {
    id: "torre-de-estudos",
    name: "Torre de Estudos",
    cost: 10,
    pericia: "Misticismo",
    benefit: "[DIVERGÊNCIA] Tabela: Fornece um poder de mago",
    description:
      "Esta torre isolada permite que você se dedique ao aprendizado místico. Quando você constrói uma torre de estudos, aprende uma magia arcana de sua lista.",
  },
  {
    id: "arena-arcana",
    name: "Arena Arcana",
    cost: 6,
    pericia: "Misticismo",
    benefit: "+1 ponto de dano por dado de Raio Arcano",
    description:
      "Com espelhos capazes de conter efeitos destrutivos, esta sala é feita para treinar ataques mágicos. Você recebe +1 no dano de cada dado de seu Raio Arcano.",
    prerequisite: "Salão dos Mistérios",
  },
  {
    id: "camara-mistica",
    name: "Câmara Mística",
    cost: 15,
    pericia: "Misticismo",
    benefit: "Pode usar um poder de aprimoramento sem gastar PM, uma vez por aventura",
    description:
      "Uma sala onde espirais de puro poder flutuam, esperando para serem invocadas. Uma vez por aventura, você pode usar um poder de aprimoramento, quer o possua ou não, sem pagar PM por isso.",
    prerequisite: "Torre de Estudos",
  },
  {
    id: "circulo-de-poder",
    name: "Círculo de Poder",
    cost: 10,
    pericia: "Misticismo",
    benefit: "+1 na CD de magias arcanas",
    description:
      "Um círculo de runas esculpidas no chão. A CD para resistir a suas magias arcanas aumenta em +1.",
    prerequisite: "Torre de Estudos",
  },
  {
    id: "linhas-misticas",
    name: "Linhas Místicas",
    cost: 25,
    pericia: "Misticismo",
    benefit: "Recuperação de PM aumenta em +1/nível",
    description:
      "Você acessa linhas de energia que cruzam a terra e as canaliza para seu domínio, mantendo um fluxo constante de poder mágico. Sempre que descansa, sua recuperação de pontos de mana aumenta em +1 por nível.",
    prerequisite: "Torre de Estudos",
  },
];
