import { Gear } from "@/types/gear";

export const services: Gear[] = [
  {
    id: "Hospedagem (Comum)",
    name: "Hospedagem (Comum)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM. Um espaço no salão comunal. Se tiver sorte, o taverneiro deixará a lareira acesa para que você não passe frio. Pelo menos não ficará sozinho — pulgas e ratos lhe farão companhia. A refeição consiste de pão, sopa e água. Recupera 1 PV e 1 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5",
    spaces: "—",
  },
  {
    id: "Hospedagem (Confortável)",
    name: "Hospedagem (Confortável)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM. Um quarto pequeno, mas privativo, com uma cama com colchão de palha e um baú para guardar seus pertences. A refeição inclui pão, queijo, cozido de galinha com legumes e cerveja ou vinho (aguado). Recupera 2 PV e 2 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 4",
    spaces: "—",
  },
  {
    id: "Hospedagem (Luxuosa)",
    name: "Hospedagem (Luxuosa)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM.  Um quarto grande, com colchão de algodão ou penas, cortinas nas janelas, uma bacia de água quente para banho e outros luxos. A refeição inclui carne, frutas, doces e uma taça de vinho de boa safra. Acomodações desta categoria estão disponíveis apenas nas melhores estalagens, normalmente apenas em cidades e metrópoles. Recupera 3 PV e 3 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 20",
    spaces: "—",
  },
  {
    id: "Condução (Terrestre)",
    name: "Condução (Terrestre)",
    description: "Inclui viagens terrestres (em carroças)",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5 por km",
    spaces: "—",
  },
  {
    id: "Condução (Marítima)",
    name: "Condução (Marítima)",
    description: "Inclui viagens marítimas (em navios)",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,1 por km",
    spaces: "—",
  },
  {
    id: "Condução (Aérea)",
    name: "Condução (Aérea)",
    description: " Inclui viagens aéreas (balões goblins). Viajar em balões goblins é arriscado: a cada 100 km há 1 chance em 20 de queda (não fatal).",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10 por km",
    spaces: "—",
  },
  {
    id: "Curandeiro",
    name: "Curandeiro",
    description: "O preço para você receber cuidados prolongados ou tratamento contra uma doença ou veneno (veja a página 117). Isso considera que você vai até a casa do curandeiro ou onde quer que ele receba seus pacientes — curandeiros não aceitam acompanhar aventureiros em suas jornadas.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 5",
    spaces: "—",
  },
  {
    id: "Mensageiro",
    name: "Mensageiro",
    description: "Inclui mensagens entregues a pé, por cavaleiros ou navios.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5 por km",
    spaces: "—",
  },
  {
    id: "Magias (1° Círculo)",
    name: "Magias (1° Círculo)",
    description: "Este é o preço para lançar uma magia em uma situação comum. Ou seja, você vai até o conjurador e lançar a magia não oferece risco para ele. Se você pedir ao conjurador para acompanhá-lo numa aventura, a resposta padrão será “não, obrigado”.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10",
    spaces: "—",
  },
  {
    id: "Magias (2° Círculo)",
    name: "Magias (2° Círculo)",
    description: "Este é o preço para lançar uma magia em uma situação comum. Ou seja, você vai até o conjurador e lançar a magia não oferece risco para ele. Se você pedir ao conjurador para acompanhá-lo numa aventura, a resposta padrão será “não, obrigado”.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 90",
    spaces: "—",
  },
  {
    id: "Magias (3° Círculo)",
    name: "Magias (3° Círculo)",
    description: "Este é o preço para lançar uma magia em uma situação comum. Ou seja, você vai até o conjurador e lançar a magia não oferece risco para ele. Se você pedir ao conjurador para acompanhá-lo numa aventura, a resposta padrão será “não, obrigado”.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 360",
    spaces: "—",
  },
  {
    id: "aprendiz-de-guilda",
    name: "Aprendiz de Guilda",
    description: "Um auxiliar treinado, capaz de ajudá-lo em seu ofício. Ajudante (Conhecimento e Ofício) iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "aprendiz-de-mago",
    name: "Aprendiz de Mago",
    description: "Um estudioso das artes arcanas, o aprendiz pode ajudá-lo com as suas magias (embora ainda não consiga lançar feitiços por si só). Magivocador iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "besteiro",
    name: "Besteiro",
    description: "Um combatente especializado em armas de disparo. Atirador iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "guarda-costas",
    name: "Guarda-Costas",
    description: "Um mercenário especializado em proteger seu contratante e enfrentar seus inimigos. Guardião iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "herbalista",
    name: "Herbalista",
    description: "Um conhecedor de ervas e unguentos medicinais. Médico iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "homem-de-armas",
    name: "Homem de Armas",
    description: "Um soldado treinado em armas corpo a corpo, como espadas e machados. Fortão iniciante.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },

  // Mercenários - Parceiros Veteranos (T$ 150)
  {
    id: "alquimista-de-batalha",
    name: "Alquimista de Batalha",
    description: "Um artesão especializado em preparados alquímicos e no seu uso em combate. Destruidor veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "arauto",
    name: "Arauto",
    description: "Um servo treinado para anunciá-lo de forma solene. Ajudante (Diplomacia, Intuição e Nobreza) veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "batedor",
    name: "Batedor",
    description: "Um guia atento e acostumado com os ermos. Vigilante veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "bibliotecario-mistico",
    name: "Bibliotecário Místico",
    description: "Um entusiasta de magia, repleto de tomos e pergaminhos. Adepto veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "conselheiro",
    name: "Conselheiro",
    description: "Um estudioso de diversos assuntos. Ajudante (Conhecimento, Misticismo e Nobreza) veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "matador",
    name: "Matador",
    description: "Um assassino de aluguel, discreto e letal. Assassino veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "sombra",
    name: "Sombra",
    description: "Um mercenário acostumado a agir discretamente e desvendar segredos bem guardados. Ajudante (Enganação, Furtividade e Investigação) veterano.",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },

  // Mercenários - Capangas Iniciantes (T$ 90)
  {
    id: "bando-de-aldeoes",
    name: "Bando de Aldeões",
    description: "Um grupo de esfarrapados descalços portando ancinhos, porretes e outras armas improvisadas. Você precisa ser treinado em Guerra para contratar e comandar um bando de aldeões. Turba de camponeses iniciante (veja Capangas).",
    origin: "Herois de Arton",
    price: "T$ 90", //
    spaces: "—" //
  },

  // Mercenários - Capangas Veteranos (T$ 300)
  {
    id: "arqueiros",
    name: "Arqueiros",
    description: "Um grupamento de arqueiros, soldados irregulares ou caçadores em busca de algum soldo. Você precisa ser treinado em Guerra para contratar e comandar os arqueiros. Unidade de arqueiros veterana (veja Capangas).",
    origin: "Herois de Arton",
    price: "T$ 300", //
    spaces: "—" //
  },
  {
    id: "irregulares",
    name: "Irregulares",
    description: "Soldados que não fazem parte de nenhum exército ou companhia mercenária regular, com pouco treinamento e equipamento díspar. Você precisa ser treinado em Guerra para contratar e comandar os irregulares. Pelotão de infantaria veterano (veja Capangas).",
    origin: "Herois de Arton",
    price: "T$ 300", //
    spaces: "—" //
  },

  // Outros Serviços
  {
    id: "banho-quente",
    name: "Banho Quente",
    description: "Disponível em casas de banho e algumas estalagens, um bom banho é relaxante, limpa o corpo e fortalece a imunidade. Você recebe +1d6 em seu próximo teste de resistência feito até o fim do próximo dia (cumulativo com bônus de outros itens).",
    origin: "Herois de Arton",
    price: "T$ 10", //
    spaces: "—" //
  },
  {
    id: "bigode-encerado",
    name: "Bigode Encerado",
    description: "Um barbeiro especializado, além de extrair dentes e realizar pequenas cirurgias, pode aparar e moldar com cera a barba e (principalmente) o bigode de um cliente. Um bigode de respeito impõe esse respeito a todos. A primeira criatura inteligente (Int –3 ou maior) que usar um efeito que exija um teste de Vontade contra você em uma cena deve fazer ela própria um teste de Vontade (CD Car). Se falhar, perde sua ação. O efeito do bigode só funciona uma vez por cena. Um bigode encerado dura 1 dia. Um personagem treinado em Ofício (barbeiro) pode gastar 1 hora de trabalho e T$ 2 para encerar o bigode de alguém (incluindo o seu).",
    origin: "Herois de Arton",
    price: "T$ 20", //
    spaces: "—" //
  },
  {
    id: "instrucao-marcial",
    name: "Instrução Marcial",
    description: "Algumas horas de treino com um mestre de armas custam caro, mas afiam as habilidades de qualquer um. Role 1d4; você recebe o resultado dessa rolagem em d4 de auxílio. Até o fim da aventura, quando faz um teste de ataque, você pode gastar 1d4 e adicionar o resultado como bônus no teste (cumulativo com bônus de outros itens).",
    origin: "Herois de Arton",
    price: "T$ 300", //
    spaces: "—" //
  },
  {
    id: "maquiagem-profissional",
    name: "Maquiagem Profissional",
    description: "Um maquiador especializado, além de criar disfarces e ouvir os últimos boatos da corte, pode realizar uma verdadeira transformação no rosto de um cliente, ressaltando seus olhos, afinando seu nariz, escondendo cicatrizes etc. Com uma maquiagem profissional, você causa uma primeira impressão mais impactante. Quando faz seu primeiro teste de Diplomacia para mudar atitude em cada cena, você rola dois dados e usa o melhor resultado. Uma maquiagem profissional dura 1 dia.",
    origin: "Herois de Arton",
    price: "T$ 30", //
    spaces: "—" //
  },
  {
    id: "opera",
    name: "Ópera",
    description: "Disponíveis em grandes cidades onde a cultura seja valorizada e apreciada, as óperas têm um impacto profundo naqueles que possuem uma compreensão artística apurada. Se você for treinado em Atuação ou Conhecimento e assistir a uma ópera, seu total de PM aumenta em +1d4 até o fim da aventura.",
    origin: "Herois de Arton",
    price: "T$ 200", //
    spaces: "—" //
  },
  {
    id: "sarau-informativo",
    name: "Sarau Informativo",
    description: "Em alguns lugares, é comum viajantes ou eruditos se reunirem para compartilhar as notícias da região. Passar algumas horas em um destes encontros permite se manter informado a respeito dos últimos acontecimentos. Role 1d4; você recebe o resultado dessa rolagem em d4 de auxílio. Até o fim da aventura, quando faz um teste de Conhecimento ou Nobreza, você pode gastar 1d4 e adicionar o resultado como bônus no teste (cumulativo com bônus de outros itens).",
    origin: "Herois de Arton",
    price: "T$ 150", //
    spaces: "—" //
  },
  {
    id: "casamento",
    name: "Casamento (por pessoa)",
    description: "Você se casa com uma pessoa amada. Em geral, casamentos são entre duas pessoas, mas algumas religiões (notavelmente Marah) permitem a poligamia. O poder do amor fornece aos pombinhos uma reserva conjunta de 3 PM, que eles só podem usar se estiverem em alcance curto um do outro. Qualquer um deles pode recuperar esses PM (inclusive com descanso). O suplemento Só Aventuras descreve casamentos específicos de cada religião.",
    origin: "Deuses de Arton",
    price: "T$ 150",
    spaces: "—"
  },
  {
    id: "cerimonia-religiosa",
    name: "Cerimônia religiosa",
    description: "Frades e clérigos podem celebrar ritos em campo, mas para um fiel, nada se compara a ouvir as palavras sagradas na casa de seu deus. Assistir a uma cerimônia em um templo da divindade da qual você é devoto fornece +1 em Religião e Vontade e +2 PM até o fim da aventura.",
    origin: "Deuses de Arton",
    price: "T$ 20",
    spaces: "—"
  },
  {
    id: "sacramento",
    name: "Sacramento",
    description: "Este rito religioso transfere uma fração de poder divino para um fiel. Por sua importância e dificuldade, é reservado para aqueles mais propensos a fazer bom uso desta dádiva; em geral, aventureiros envolvidos em uma missão de cunho divino. Escolha uma magia divina de 1º círculo; até o fim da aventura, você pode lançar essa magia uma única vez, sem aprimoramentos, gastando 2 PM (atributo-chave Sabedoria). Apenas devotos podem receber um sacramento e, obviamente, somente em templos de sua divindade.",
    origin: "Deuses de Arton",
    price: "T$ 50",
    spaces: "—"
  }
  
];