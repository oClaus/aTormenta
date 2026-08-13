import { Gear } from "@/types/gear";

export const services: Gear[] = [

  //#region Uma visita a Vectora
  { id: "Hospedagem Divina",
    name: "Hospedagem Divina",
    description: "Você se hospeda na Reinos dos Deuses. As acomodações incluem quartos imensos, mobília suntuosa, banquetes exuberantes e um batalhão de servos pertencentes a raças variadas. A noite divina conta como descanso luxuoso e, mais do que isso, lhe dá motivação para grandes façanhas — você recebe +10% de XP por uma aventura ou por um mês (se a campanha não utilizar XP, em vez disso você recebe um benefício do próximo nível por uma aventura ou por um mês).",
    origin: "Uma visita a Vectora",
    price: "T$ 2.000",
    spaces: "—"
  },
  { id: "Festival de Música",
    name: "Festival de Música",
    description: "Até o fim desta aventura (ou por um mês), você recebe um poder de Música para o qual cumpra os pré-requisitos ou aumenta em +2 a CD para resistir a todos os seus poderes de Música, à sua escolha.",
    origin: "Uma visita a Vectora",
    price: "T$ 200",
    spaces: "—"
  },
  { id: "Consulta na Biblioteca das Respostas",
    name: "Consulta na Biblioteca das Respostas",
    description: "Você pode fazer um teste de Investigação com bônus de +5 para receber uma informação sobre um assunto qualquer à sua escolha. A CD varia conforme a complexidade do assunto (veja a perícia Conhecimento). A informação recebida é escolhida pelo mestre.",
    origin: "Uma visita a Vectora",
    price: "T$ 250",
    spaces: "—"
  },
  { id: "Festa na Dança de Marah",
    name: "Festa na Dança de Marah",
    description: "Festejar nessa taverna deixa você extremamente amável. Uma vez até o fim desta aventura (ou por um mês), você pode gastar uma ação padrão para melhorar em um passo a categoria de atitude de um NPC com o qual esteja interagindo.",
    origin: "Uma visita a Vectora",
    price: "T$ 600",
    spaces: "—"
  },
  { id: "Noite no Teatro",
    name: "Noite no Teatro",
    description: "Além de um ótimo entretenimento, assistir a uma peça é uma aula de como modelar expressões, falas e trejeitos. Role 1d4; você recebe o resultado dessa rolagem em d4 de auxílio. Até o fim da aventura, quando faz um teste de perícia baseada em Carisma, você pode gastar 1d4 e adicionar o resultado como bônus no teste (cumulativo com bônus de outros itens).",
    origin: "Uma visita a Vectora",
    price: "T$ 300",
    spaces: "—"
  },
  { id: "Rito da Troca Vital",
    name: "Rito da Troca Vital",
    description: "A dahllan oferece um ritual no qual o praticante oferece parte de seu vigor ao solo e este lhe devolve energia espiritual. Há duas modalidades: T$ 600 menor e T$ 1.500 maior. Na primeira, o personagem perde 2d4 PV e ganha 1d4+2 PM permanentemente. Na segunda, perde 2d8 PV e ganha 2d4+4 PM.",
    origin: "Uma visita a Vectora",
    price: "T$ 600 ou T$ 1.500",
    spaces: "—"
  },
  { id: "Treinar Criatura",
    name: "Treinar Criatura",
    description: "Tibbo treina um parceiro animal ou monstro que o personagem possua e ensina um truque novo a ele. A criatura passa a fornecer o bônus de um tipo de parceiro iniciante, escolhido entre ajudante, combatente, fortão, guardião ou perseguidor, além de seus bônus normais. Uma mesma criatura só pode ser treinada uma vez por Tibbo.",
    origin: "Uma visita a Vectora",
    price: "T$ 3.000",
    spaces: "—"
  },
  { id: "Leitura na Ampulheta",
    name: "Leitura na Ampulheta",
    description: "Você procura um livro de um assunto que lhe interesse entre Conhecimento, Guerra, Misticismo, Nobreza ou Religião. Role 1d4. Em um resultado 1, o tempo passa mais rápido para você; você não consegue terminar o livro e ainda perde sua próxima ação de exploração. Em um resultado 2, o tempo passa em sua velocidade normal; você lê um pouco do livro, quando então se cansa e vai fazer outra coisa (não recebe nenhum benefício, mas também não perde nada). Por fim, em um resultado 3 ou 4, o tempo passa mais devagar para você, permitindo que você termine o livro e receba um bônus permanente de +1 na perícia escolhida (não cumulativo).",
    origin: "Uma visita a Vectora",
    price: "T$ 300",
    spaces: "—"
  },
  { id: "Clarividência",
    name: "Clarividência",
    description: "Por alguns tibares, Vessara pode ver seu futuro. Role 1d10–3. Se o resultado for positivo, seu futuro é otimista. Escolha uma cena até o fim da aventura (ou do mês). Nessa cena, você recebe o número rolado em d6 de auxílio e, sempre que fizer um teste de perícia, pode gastar até 2d6 desses dados e adicionar o resultado deles como bônus no teste. Quando definir a cena, você deve descrever a previsão que Vessara fez e usar os dados de auxílio para tentar torná-la realidade. Se o resultado for negativo, seu futuro é pessimista; o mestre define qual cena será e poderá usar os dados como penalidade em seus testes. Por fim, se o resultado for 0, Vessara não conseguiu ver seu futuro — a adivinhação é uma arte misteriosa, que nem sempre funciona.",
    origin: "Uma visita a Vectora",
    price: "T$ 150",
    spaces: "—"
  },
  { id: "Viagem Rápida",
    name: "Viagem Rápida",
    description: "Por uma taxa, Harrun Vol prepara uma das portas de sua loja para levar os personagens a qualquer lugar em Arton ou em um reino divino que não esteja protegido por magia.",
    origin: "Uma visita a Vectora",
    price: "T$ 800",
    spaces: "—"
  },
  { id: "Cirurgia de Aprimoramento",
    name: "Cirurgia de Aprimoramento",
    description: "Golens (e outros construtos) podem ser aprimorados por Lyasis. Você recebe +2 em uma perícia à sua escolha, mas perde 2 PV permanentemente. Você pode fazer mais de uma cirurgia de aprimoramento, mas apenas para perícias diferentes.",
    origin: "Uma visita a Vectora",
    price: "T$ 1.000",
    spaces: "—"
  },
  { id: "Autoforja.",
    name: "Autoforja",
    description: "Você pode alugar a autoforja para reduzir o tempo de fabricação de um item para poucas horas (em termos de regras, a ação de exploração que você já gastou para visitar a Oficina). Você ainda deve passar no teste de perícia e gastar a matéria-prima - o único benefício da autoforja é reduzir o tempo de fabricação. A autoforja só pode ser usada uma vez por visita à Vectora — ela quebra após o uso e demora para ser consertada.",
    origin: "Uma visita a Vectora",
    price: "T$ 1/10 do preço do item",
    spaces: "—"
  },
  { id: "Noite no Vapor & Café",
    name: "Noite no Vapor & Café",
    description: "Você passa a noite conversando com outros inventores e tomando bebidas energéticas. No dia seguinte, acorda com uma ideia genial na cabeça, mas um pouco menos saudável do que era antes… Você pode fabricar uma engenhoca (e apenas uma) que, quando ativada, além de seu efeito normal, gera o efeito de uma magia de 1º círculo. Porém, perde permanentemente 1 PV e 1 PM.",
    origin: "Uma visita a Vectora",
    price: "T$ 200",
    spaces: "—"
  },
  { id: "Noite de Prazeres.",
    name: "Noite de Prazeres",
    description: "Na Véu Escarlate, o “amor” está à venda. Algumas horas de carícias lascivas fornecem 2d6 PM temporários.",
    origin: "Uma visita a Vectora",
    price: "T$ 150",
    spaces: "—"
  },
  //#endregion





  // Tormenta20 - Jogo do Ano
  { id: "Hospedagem (Comum)",
    name: "Hospedagem (Comum)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM. Um espaço no salão comunal. Se tiver sorte, o taverneiro deixará a lareira acesa para que você não passe frio. Pelo menos não ficará sozinho — pulgas e ratos lhe farão companhia. A refeição consiste de pão, sopa e água. Recupera 1 PV e 1 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5",
    spaces: "—",
  },
  { id: "Hospedagem (Confortável)",
    name: "Hospedagem (Confortável)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM. Um quarto pequeno, mas privativo, com uma cama com colchão de palha e um baú para guardar seus pertences. A refeição inclui pão, queijo, cozido de galinha com legumes e cerveja ou vinho (aguado). Recupera 2 PV e 2 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 4",
    spaces: "—",
  },
  { id: "Hospedagem (Luxuosa)",
    name: "Hospedagem (Luxuosa)",
    description: "Estalagens e tavernas são lugares onde aventureiros descansam ou se preparam para suas próximas missões. Estalagens são como hospedarias, onde se pode alugar quartos para dormir e fazer refeições. Tavernas são como bares, com refeições, bebidas e às vezes espetáculos, geralmente realizados por bardos, além de bons lugares para conseguir informações. As estadias a seguir têm preços por noite, incluem uma refeição comum e determinam sua recuperação de PV e PM.  Um quarto grande, com colchão de algodão ou penas, cortinas nas janelas, uma bacia de água quente para banho e outros luxos. A refeição inclui carne, frutas, doces e uma taça de vinho de boa safra. Acomodações desta categoria estão disponíveis apenas nas melhores estalagens, normalmente apenas em cidades e metrópoles. Recupera 3 PV e 3 PM por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 20",
    spaces: "—",
  },
  { id: "Condução (Terrestre)",
    name: "Condução (Terrestre)",
    description: "Inclui viagens terrestres (em carroças)",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5 por km",
    spaces: "—",
  },
  { id: "Condução (Marítima)",
    name: "Condução (Marítima)",
    description: "Inclui viagens marítimas (em navios)",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,1 por km",
    spaces: "—",
  },
  { id: "Condução (Aérea)",
    name: "Condução (Aérea)",
    description: " Inclui viagens aéreas (balões goblins). Viajar em balões goblins é arriscado: a cada 100 km há 1 chance em 20 de queda (não fatal).",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10 por km",
    spaces: "—",
  },
  { id: "Curandeiro",
    name: "Curandeiro",
    description: "O preço para você receber cuidados prolongados ou tratamento contra uma doença ou veneno (veja a página 117). Isso considera que você vai até a casa do curandeiro ou onde quer que ele receba seus pacientes — curandeiros não aceitam acompanhar aventureiros em suas jornadas.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 5",
    spaces: "—",
  },
  { id: "Mensageiro",
    name: "Mensageiro",
    description: "Inclui mensagens entregues a pé, por cavaleiros ou navios.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5 por km",
    spaces: "—",
  },
  { id: "Magias (1° Círculo)",
    name: "Magias (1° Círculo)",
    description: "Este é o preço para lançar uma magia em uma situação comum. Ou seja, você vai até o conjurador e lançar a magia não oferece risco para ele. Se você pedir ao conjurador para acompanhá-lo numa aventura, a resposta padrão será “não, obrigado”.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10",
    spaces: "—",
  },
  { id: "Magias (2° Círculo)",
    name: "Magias (2° Círculo)",
    description: "Este é o preço para lançar uma magia em uma situação comum. Ou seja, você vai até o conjurador e lançar a magia não oferece risco para ele. Se você pedir ao conjurador para acompanhá-lo numa aventura, a resposta padrão será “não, obrigado”.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 90",
    spaces: "—",
  },
  { id: "Magias (3° Círculo)",
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