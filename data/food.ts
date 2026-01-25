// data/food.ts
import { Gear } from "@/types/comidas";

export const food: Gear[] = [
  {
    id: "Assado de carnes",
    name: "Assado de carnes",
    description: "Um prato muito apreciado no Reinado, mas mal visto no Império de Tauron. Pura proteína, deixa qualquer um mais forte. Você recebe +2 em rolagens de dano corpo a corpo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 60",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Carne, carne de caça, porco",
    cookingCost: "T$ 56",
    cookingDC: "25"
  },
  {
    id: "Balinhas",
    name: "Balinhas",
    description: "Balas coloridas e doces. Arcanistas gostam delas — dizem que o açúcar feérico usado nas balinhas potencializa suas magias. Claro… Apesar do ceticismo dos outros, você recebe +2 em rolagens de dano de magias.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 60",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Açúcar das fadas, fruta",
    cookingCost: "T$ 53",
    cookingDC: "25"
  },
  {
    id: "Banquete dos heróis",
    name: "Banquete dos heróis",
    description: "Uma mesa repleta das melhores comidas que o dinheiro pode pagar. Você recebe +1 em um atributo a sua escolha. Esse aumento não oferece PV, PM e perícias adicionais.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 150",
    spaces: "—",
    category: "Alimentação",
    ingredients: "Carne de caça, ovo de monstro, avelã de Norba",
    cookingCost: "T$ 82",
    cookingDC: "30"
  },
  {
    id: "Batata Valkariana",
    name: "Batata Valkariana",
    description: "Batatas cortadas em tiras e mergulhadas em óleo fervente. Gordurentas e pouco nutritivas, são o tipo de prato que só é servido numa metrópole como Valkaria. Apesar disso, são saborosas e deixam qualquer um empolgado. Você recebe +1d6 em um teste a sua escolha realizado até o fim do dia. Para não esquecer, deixe 1d6 em cima da sua ficha. De preferência, amarelo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 2",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Óleo, legume",
    cookingCost: "T$ 4",
    cookingDC: "15"
  },
  {
    id: "Bolo de cenoura",
    name: "Bolo de cenoura",
    description: "Uma sobremesa simples, que “faz bem para a vista”, segundo anciões de todo o Reinado. Aparentemente, os anciões estão certos, pois o bolo de cenoura fornece +2 em testes de Percepção.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 4",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Farinha, fruta, óleo",
    cookingCost: "T$ 7",
    cookingDC: "20"
  },
  {
    id: "Bolo do Panteão",
    name: "Bolo do Panteão",
    description: "Uma sobremesa divina! Este bolo de gorad é preparado com os melhores ingredientes, por isso é caríssimo, servido apenas em banquetes reais — ou em tavernas que atendem aventureiros famosos. Comer uma fatia de um bolo do Panteão torna mais fácil dar o melhor de si, seja desferindo um golpe especial, seja lançando uma magia. Quando você come este prato, escolha uma habilidade. Seu custo para usar a habilidade escolhida diminui em –1 PM (mínimo 1).",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 200",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Açúcar das fadas, avelã de Norba, farinha, gorad",
    cookingCost: "T$ 121",
    cookingDC: "30"
  },
  {
    id: "Ensopado reforçado",
    name: "Ensopado reforçado",
    description: "Um prato nutritivo e pesado. Você recebe +20 PV temporários. Contudo, seu deslocamento diminui em –1,5m.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 12",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Fruta, porco, verdura",
    cookingCost: "T$ 12",
    cookingDC: "20"
  },
  {
    id: "Estrogonofe",
    name: "Estrogonofe",
    description: "Essa iguaria deliciosa foi inventada nas cortes do antigo Reino de Yudennach — dizem que é uma das poucas coisas boas a sair daquele lugar. Comer estrogonofe deixa você firme em suas convicções. Você recebe +2 em testes de Vontade.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 18",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Carne, cogumelo, leite",
    cookingCost: "T$ 22",
    cookingDC: "20"
  },
  {
    id: "Futomaki",
    name: "Futomaki",
    description: "Criado no Império de Jade, este prato consiste em um rolo de arroz recheado com peixes, folhas e raízes. Uma refeição elegante, que deixa todos dispostos a dialogar. Você recebe +2 em testes de Diplomacia.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 12",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Cereal, peixe",
    cookingCost: "T$ 8",
    cookingDC: "20"
  },
  {
    id: "Gorad Quente",
    name: "Gorad Quente",
    description: "Gorad e leite, servidos fumegando. Não tem erro. O gorad ativa o cérebro, fornecendo +2 PM temporários.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 18",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Gorad, leite",
    cookingCost: "T$ 31",
    cookingDC: "25"
  },
  {
    id: "Gorvelã",
    name: "Gorvelã",
    description: "Gorad com avelã de Norba. É uma sobremesa cara, mas deliciosa. Fornece +5 PM temporários.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 90",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Gorad, avelã de Norba",
    cookingCost: "T$ 70",
    cookingDC: "30"
  },
  {
    id: "Javali do Bosque Enevoado",
    name: "Javali do Bosque Enevoado",
    description: "Um ensopado de javali cozido em caldo de cerveja escura e mel, servido com pão rústico recheado de cogumelos. Quem experimenta este prato de sabor forte fica mais confiante para encarar qualquer luta. Você recebe +2 na Defesa.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 60",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Carne de caça, cogumelo, farinha",
    cookingCost: "T$ 38",
    cookingDC: "20"
  },
  {
    id: "Macarrão de Yuvalin",
    name: "Macarrão de Yuvalin",
    description: "Yuvalin é uma cidade mineradora em Zakharov, na fronteira com as Montanhas Uivantes. Seus habitantes criaram este prato reforçado (macarrão, bacon e creme de leite) para encarar suas árduas jornadas de trabalho nas minas. Deliciosa, a receita se espalhou por outras cidades e reinos. Você recebe +5 PV temporários.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 6",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Farinha, leite, porco",
    cookingCost: "T$ 10",
    cookingDC: "20"
  },
  {
    id: "Manjar dos titãs",
    name: "Manjar dos titãs",
    description: "Pão de trigo fermentado com leveduras alquimicamente tratadas, recheado com pasta de nozes e queijo de leite de urso-coruja. Este prato robusto deixa qualquer um ousado e disposto. Você recebe +1d4 de bônus em testes de perícias baseadas em Força, Destreza ou Constituição.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 150",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Avelã de Norba, farinha, ovo de monstro",
    cookingCost: "T$ 91",
    cookingDC: "30"
  },
  {
    id: "Ovo de monstro frito",
    name: "Ovo de monstro frito",
    description: "A receita é simples — o segredo está nos ingredientes. Feito com ovos de monstros, este ovo frito é extremamente nutritivo. Você recebe +10 PV temporários.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 30",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Ovo de monstro, óleo",
    cookingCost: "T$ 53",
    cookingDC: "25"
  },
  {
    id: "Pão de queijo",
    name: "Pão de queijo",
    description: "Um bom pão de queijo deixa qualquer aventureiro bem nutrido e saudável. Você recebe +2 em testes de Fortitude.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 10",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Farinha, queijo",
    cookingCost: "T$ 7",
    cookingDC: "20"
  },
  {
    id: "Pavão celestial",
    name: "Pavão celestial",
    description: "Feito de ave de caça marinada em vinho e acompanhada de um molho espesso de pêssegos e figos, este prato é extremamente elegante. Você recebe +1d4 de bônus em testes de perícias baseadas em Inteligência, Sabedoria e Carisma.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 150",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Açúcar das fadas, carne de caça, fruta",
    cookingCost: "T$ 85",
    cookingDC: "30"
  },
  {
    id: "Pizza",
    name: "Pizza",
    description: "Um disco de massa coberto com molho de tomate e queijo, este prato foi criado por Guido Venusto, um nobre de Ahlen que queria ascender socialmente. Inepto nas artes da intriga, Venusto resolveu manipular a corte pela barriga. Funcionou — o prato foi um sucesso e o nobre teve muita influência por anos. Certa noite, um espião conseguiu roubar a receita. O segredo da pizza se espalhou e, sem seu trunfo, Venusto foi assassinado logo depois. Comer uma pizza deixa-o pronto para encarar qualquer perigo: você recebe +1 em todos os testes de resistência.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 6",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Farinha, fruta, queijo",
    cookingCost: "T$ 10",
    cookingDC: "20"
  },
  {
    id: "Porco deheoni",
    name: "Porco deheoni",
    description: "Um prato típico e popular em Deheon, que já se alastrou pelo Reinado. Comer um porco assado deixa-o valente e brigão. Você recebe +1 em testes de ataque corpo a corpo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 36",
    spaces: "1",
    category: "Alimentação",
    ingredients: "Porco, fruta, legume",
    cookingCost: "T$ 12",
    cookingDC: "20"
  },
  {
    id: "Prato do Aventureiro",
    name: "Prato do Aventureiro",
    description: "Um cozido de frango com legumes, esta é uma refeição simples, mas mantém qualquer um bem alimentado. Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de vida em +1 por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 2",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Ave, legume",
    cookingCost: "T$ 5",
    cookingDC: "15"
  },
  {
    id: "Salada de Salistick",
    name: "Salada de Salistick",
    description: "Com folhas e carne de frango, esta salada foi criada no Reino sem Deuses, onde a saúde é uma grande preocupação. Uma alimentação leve, mas nutritiva, aumenta seu deslocamento em +1,5m.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 4",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Ave, fruta, legume",
    cookingCost: "T$ 8",
    cookingDC: "20"
  },
  {
    id: "Salada élfica",
    name: "Salada élfica",
    description: "Esta salada vegetariana leva uma mistura de folhas, frutas e legumes. Segundo os relatos, a receita foi inventada em Lenórienn e passada aos reinos humanos de Lamnor, antes do isolamento dos povos. Felizmente, a salada se espalhou por Arton antes da queda do continente. Um prato leve e equilibrado, inspira disparos precisos. Fornece +1 em testes de ataque à distância.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 4",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Fruta, legume, verdura",
    cookingCost: "T$ 5",
    cookingDC: "20"
  },
  {
    id: "Salada imperial",
    name: "Salada imperial",
    description: "Uma mistura de folhas com bacon e queijo, esta salada é leve, mas empolgante. Fornece +2 em testes de Iniciativa.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 6",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Porco, queijo, verdura",
    cookingCost: "T$ 15",
    cookingDC: "20"
  },
  {
    id: "Sashimi",
    name: "Sashimi",
    description: "Uma iguaria da culinária tamuraniana, este prato consiste de peixes e frutos do mar fatiados em pequenos pedaços e servidos com um molho do Império de Jade. Uma refeição refinada, leve e equilibrada, fornece +2 em rolagens de dano à distância.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 60",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Peixe, molho tamuraniano",
    cookingCost: "T$ 37",
    cookingDC: "25"
  },
  {
    id: "Sopa de cogumelos",
    name: "Sopa de cogumelos",
    description: "Esta sopa expande sua percepção mística. Você recebe +2 em testes de Misticismo.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 6",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Cogumelo, legume, verdura",
    cookingCost: "T$ 7",
    cookingDC: "20"
  },
  {
    id: "Sopa de Peixe",
    name: "Sopa de Peixe",
    description: "Um cozido de peixe com verduras, este é um prato humilde, mas garante descanso relaxante. Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de mana em +1 por nível.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 3",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Verdura, peixe",
    cookingCost: "T$ 8",
    cookingDC: "15"
  },
  {
    id: "Torta de maçã",
    name: "Torta de maçã",
    description: "Dizem que, após uma bruxa usar uma maçã envenenada para matar uma princesa, Thantalla-Dhaedelin, a Rainha das Fadas, decretou que maçãs nunca mais fariam mal a ninguém. Se a lenda é verdade ou se maçãs são simplesmente saudáveis, ninguém sabe dizer, mas comer este prato fornece resistência a veneno +5.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 2",
    spaces: "0,5",
    category: "Alimentação",
    ingredients: "Farinha, fruta",
    cookingCost: "T$ 4",
    cookingDC: "20"
  },
  {
    id: "Ração de Viagem",
    name: "Ração de Viagem",
    description: "Própria para viagens, uma porção desta ração alimenta uma pessoa por um dia. É feita de alimentos conservados, como carne defumada, frutas secas, pão, queijo e biscoitos. Se mantida seca dura bastante, mas quando molhada se estraga em 24 horas.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,5",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Refeição Comum",
    name: "Refeição Comum",
    description: "Uma refeição típica inclui pão, queijo, cozido de carne ou galinha com legumes e uma caneca de bebida, geralmente cidra, vinho ou cerveja.",
    origin: "Tormenta20 - Jogo do Ano",
    price: "T$ 0,3",
    spaces: "0,5",
    category: "Alimentação"
  },

  // --- PRATOS DE SUPLEMENTOS (Dragão Brasil, etc.) ---
  {
    id: "Paella Negra",
    name: "Paella Negra",
    description: "Um cozido de olhos de ônix, de caldo grosso e escuro, acompanhado de arroz e legumes. Seu caldo é nutrido pelo Mana absorvido pelas criaturas, fazendo dele uma ótima refeição antes de um bom descanso. Em sua próxima noite de sono, você aumenta a sua recuperação de pontos de mana em +2 por nível. CD 20.",
    origin: "Dragão Brasil",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "20"
  },
  {
    id: "Batatas Grelhadas",
    name: "Batatas Grelhadas",
    description: "Embora as batatas russet maravilhosamente saborosas sejam a atração principal, sem dúvida o creme de queijo rouba a cena com seu sabor distinto. Ofício +4; CD 15.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "15"
  },
  {
    id: "Laghman",
    name: "Laghman",
    description: "Prato popular na região de Othard, que consiste de macarrão grosso e carne picada de dzo (um tipo de iaque) em um caldo saudável. Fortitude +2, Vontade +1, PV +4; CD 15.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "15"
  },
  {
    id: "Peixe Empanado",
    name: "Peixe Empanado",
    description: "Frito e acompanhado por uma porção generosa de batatas de corte espesso. Ainda mais delicioso com uma pitada de vinagre de malte. Luta +1, Pontaria +1, Vontade +1; CD 15.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "15"
  },
  {
    id: "Tako-Yaki",
    name: "Tako-Yaki",
    description: "Bolinhos de massa frita, do tamanho de uma mordida, cada um contendo um único pedaço de polvo macio no miolo derretido. Vontade +2, PV temporário +5, dano +2 em acertos críticos; CD 20.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "20"
  },
  {
    id: "Sopa de Cebola Assada",
    name: "Sopa de Cebola Assada",
    description: "Uma sopa de caldo saudável cheia de cebola doce, coberta com queijo ralado e assada no forno até dourar. Ofício +3; CD 10.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "10"
  },
  {
    id: "Pão de Bacon",
    name: "Pão de Bacon",
    description: "Massa macia misturada com bacon em fatias grossas, torcida em um padrão semelhante a um maço de trigo. PV temporário +10, dano +2 em acertos críticos; CD 10.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "10"
  },
  {
    id: "Café da Manhã do Fazendeiro",
    name: "Café da Manhã do Fazendeiro",
    description: "Este prato simples, mas delicioso, feito de batatas e ovos mexidos, vai sustentar você durante a colheita. Fortitude +1, Vontade +1, PV temporário +5; CD 10.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "10"
  },
  {
    id: "Torta de Nozes",
    name: "Torta de Nozes",
    description: "Um monte de nozes e sementes deliciosas entrou neste pastel doce e saboroso. Misticismo +4, PM temporário +5; CD 20.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "20"
  },
  {
    id: "Salada de Gengibre",
    name: "Salada de Gengibre",
    description: "Uma salada picante que atrai com o aroma de gengibre fresco. Misticismo +2, Vontade +1, PM temporário +2; CD 15.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "15"
  },
  {
    id: "Biscoito de Café",
    name: "Biscoito de Café",
    description: "Biscoito amanteigado com um sabor sutil de café. Ofício +2, Percepção +2; CD 20.",
    origin: "Dragão Brasil - Final Fantasy",
    price: "—",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "20"
  },
  {
    id: "Panelada de Escorpião Enorme",
    name: "Panelada de Escorpião Enorme",
    description: "Feita em uma panela só, contém cogumelos cozidos, raízes e algas e a carne de um escorpião enorme – que se torna avermelhada e encolhe, como uma lagosta. O prato ideal para restaurar aventureiros e começar uma nova aventura! Em sua próxima noite de sono, você aumenta a sua recuperação de PV e PM em +1 por nível. Exige carne de monstro e 3 porções de cogumelos.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Tempura de Mandrágora",
    name: "Tempura de Mandrágora",
    description: "Fritos por imersão em óleo quente (normalmente retirado de uma armadilha!), os pedaços de carne e vegetal são envoltos numa fina massa, resultando em uma refeição crocante e cheia de sabor. Você recebe +2 em Fortitude e Vontade. Exige carne de monstro e 2 ovos de basilisco.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Refeição de Armadura Animada",
    name: "Refeição de Armadura Animada",
    description: "Esse verdadeiro banquete em forma de refeição cozinha os moluscos de uma armadura animada de todas as formas possíveis. Inclui um refogado, a carne cozida no vapor, uma sopa e carne grelhada. Ainda que nem todos sejam saborosos, a experimentação é o que vale! Escolha dois entre: +1 em Defesa, +1 em Atletismo e Reflexos, 5 PV temporário ou 2 PM temporário. Exige 4 moluscos de armadura animada.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Torta de Planta Devoradora",
    name: "Torta de Planta Devoradora",
    description: "Composta por frutos e vegetais recolhidos de plantas carnívoras, é riquíssima em vitaminas e idêntica a uma torta comum, mesmo sem usar farinha ou ovos. Você recebe +2 em testes de perícias baseadas em Sabedoria. Exige 6 frutos de planta devoradora de homens.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Basilisco Assado",
    name: "Basilisco Assado",
    description: "Recheada e assada com maestria, a carne do Basilisco tem fortes efeitos restaurativos para aqueles aflitos pelo veneno das esporas do monstro, além de completar com proteínas e gorduras qualquer dieta. Você recupera 2d8+2 PV. PVs excedentes recuperados dessa forma se tornam PVs temporários. Exige carne de basilisco.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Omelete de Basilisco",
    name: "Omelete de Basilisco",
    description: "Um pouco mais avermelhada que uma omelete padrão, e recheada com raízes de mandrágora, é a forma ideal de começar um novo dia. Você recebe +2 em rolagens de dano, e resistência a veneno +2. Exige 4 ovos de basilisco.",
    origin: "Dragão Brasil - Dungeon Meshi",
    price: "—",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Cozido de Serpe",
    name: "Cozido de Serpe",
    description: "Quando cozida por várias horas em uma sopa específica, a carne da serpe fica livre de seu veneno natural. Diferente de outros alimentos, preparar este cozido é um teste estendido de Ofício (cozinheiro) com CD 20, que requer 3 sucessos antes de 3 falhas. Se preparado com sucesso, fornece +1 em todos os testes de perícia, cumulativo com outros itens. Se falhar, os ingredientes são consumidos e você é envenenado (perde 1d12 pontos de vida por rodada durante 3 rodadas; Fort CD 20 reduz para 1 rodada).",
    origin: "Dragão Brasil - Culinária Sckharjagar",
    price: "T$ 12",
    spaces: "0,5",
    category: "Alimentação",
    cookingDC: "20"
  },
  {
    id: "Treckodimm",
    name: "Treckodimm",
    description: "Esse doce tradicional é feito com uma mistura de mel, farinha de grão-de-bico e polpa de treckod. É servido usando a casca da fruta como prato. Revigorante, fornece resistência a cansaço +2.",
    origin: "Dragão Brasil - Culinária Sckharjagar",
    price: "T$ 10",
    spaces: "0,5",
    category: "Alimentação"
  },
  {
    id: "Baga Celeste Cozida",
    name: "Baga Celeste Cozida",
    description: "Encontradas originalmente nas encostas invertidas de Vectora, estas bagas se espalharam por toda Arton. Preparadas adequadamente, fornecem qualidades místicas de flutuação. Todo dano de queda que você sofre é reduzido em −1d6.",
    origin: "Herois de Arton",
    price: "T$ 15",
    spaces: "—",
    category: "Alimentação"
  },
  {
    id: "Cozido de Pimenta",
    name: "Cozido de Pimenta",
    description: "Um prato forte, capaz de trazer lágrimas aos olhos do mais resistente dos comensais. Fornece +1 em Fortitude (cumulativo com bônus de outros itens).",
    origin: "Herois de Arton",
    price: "T$ 10",
    spaces: "—",
    category: "Alimentação"
  },
  {
    id: "Manjar de Sombras",
    name: "Manjar de Sombras",
    description: "A origem da receita original deste prato se perdeu, mas sua essência se manteve inalterada. Consiste em um manjar com ingredientes cultivados em terras próximas de cemitérios, que protege o corpo contra energias sombrias. Você ignora os próximos 10 pontos de dano de trevas que sofrer.",
    origin: "Herois de Arton",
    price: "T$ 20",
    spaces: "—",
    category: "Alimentação"
  },

  // --- BEBIDAS ---
  {
    id: "Licor de Lágrimas",
    name: "Licor de Lágrimas",
    description: "Essa bebida alcóolica de gosto forte é feita a partir de suco de treckod fermentado. Principalmente em Thenarallan, é vista como uma forma eficiente, mas perigosa, de afogar as lágrimas. Não é raro derramar meio copo no chão durante um enterro, bebendo o resto em homenagem ao falecido. Fornece +5 em Vontade, mas se falhar em algum teste de Vontade pela duração do prato, fica esmorecido até o efeito do prato acabar.",
    origin: "Dragão Brasil - Culinária Sckharjagar",
    price: "T$ 8",
    spaces: "0,5",
    category: "Bebida"
  },
  {
    id: "baba-de-troll",
    name: "Baba de Troll",
    description: "Uma bebida sem álcool, à base de leite, castanhas, nozes e mel. Fornece +1d4 em um teste a sua escolha até o fim do dia. Não é alcoólica e não exige teste de Fortitude.",
    origin: "Herois de Arton",
    price: "T$ 30",
    spaces: "0,5",
    category: "Bebida"
  },
  {
    id: "barba-queimada",
    name: "Barba Queimada",
    description: "Forte e amarga, esta cerveja anã fortalece o corpo e o espírito. Fornece redução de dano 2. CD 20.",
    origin: "Herois de Arton",
    price: "T$ 45",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "20"
  },
  {
    id: "cerveja-deheoni",
    name: "Cerveja Deheoni",
    description: "A bebida mais comum nas tavernas do Reinado. Fornece +1 em testes de resistência. CD 15.",
    origin: "Herois de Arton",
    price: "T$ 15",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "15"
  },
  {
    id: "dilinio",
    name: "Dilínio",
    description: "Destilado de Mortenstenn, antigo reino de Lamnor, feito com um cereal que só cresce no continente sul. A receita se perdeu após as invasões duyshidakk e poucos barris chegaram ao Reinado, o que explica seu altíssimo preço. Seu limite de gasto de PM aumenta em +1. CD 20. Não é possível fabricar este item.",
    origin: "Herois de Arton",
    price: "T$ 600",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "20"
  },
  {
    id: "grogue-negro",
    name: "Grogue Negro",
    description: "Rum misturado com especiarias. Seu nome não vem de sua coloração (a bebida tem um tom dourado claro), mas de sua origem — a receita foi criada por piratas do Conclave, que atuam no Mar Negro. Quando você usa Audácia, o bônus fornecido pelo poder aumenta em +1. CD 15.",
    origin: "Herois de Arton",
    price: "T$ 15",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "15"
  },
  {
    id: "grogue-rubro",
    name: "Grogue Rubro",
    description: "Uma variação do grogue negro, com especiarias picantes que fazem a bebida adquirir uma coloração avermelhada — e quem a bebe, certa inclinação para a violência. Você pode usar Audácia para testes de ataque. CD 20.",
    origin: "Herois de Arton",
    price: "T$ 45",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "20"
  },
  {
    id: "hidromel-uivante",
    name: "Hidromel Uivante",
    description: "Fabricada nas montanhas geladas, esta bebida aquece e incita. Fornece +2 em rolagens de dano corpo a corpo. CD 20.",
    origin: "Herois de Arton",
    price: "T$ 21",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "20"
  },
  {
    id: "licor-feerico",
    name: "Licor Feérico",
    description: "De aparência enevoada, esta bebida tem gosto adocicado, difícil de descrever. Dizem que é feito na Pondsmânia e trazido para o resto do Reinado com muita dificuldade. Alguns duvidam; dizem que isso é invenção dos taverneiros para cobrar mais caro! Mas, depois de experimentar uma dose, não duvidam mais. Escolha uma habilidade. O custo para ativar essa habilidade diminui em –1 PM. CD 25.",
    origin: "Herois de Arton",
    price: "T$ 450",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "25"
  },
  {
    id: "sidra-ahleniense",
    name: "Sidra Ahleniense",
    description: "Esta bebida doce deixa qualquer um mais falante, fornecendo +2 em testes de perícias originalmente baseadas em Carisma. CD 15.",
    origin: "Herois de Arton",
    price: "T$ 45",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "15"
  },
  {
    id: "vinho-pruss",
    name: "Vinho Pruss",
    description: "Batizado em homenagem ao antigo Rei-Imperador Thormy — dizem que era o favorito do monarca. Fornece 3 PM temporários. CD 15.",
    origin: "Herois de Arton",
    price: "T$ 60",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "15"
  },
  {
    id: "vinho-elfico",
    name: "Vinho Élfico",
    description: "De sabor complexo, aguça a mente, fornecendo +1 na CD para resistir a suas habilidades. CD 20.",
    origin: "Herois de Arton",
    price: "T$ 90",
    spaces: "0,5",
    category: "Bebida",
    cookingDC: "20"
  },

  // --- INGREDIENTES (Tormenta 20 - Culinária Avançada) ---
  { 
    id: "Açúcar das fadas", 
    name: "Açúcar das fadas", 
    description: "Um pó prateado, brilhante e doce. Alguns dizem que é tirado de frutas que nascem apenas na Pondsmânia; outros, que cai das asas de certas criaturas feéricas. Seja como for, é raro e caro.", 
    origin: "Tormenta20", 
    price: "T$ 50", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Ave", 
    name: "Ave", 
    description: "Carne de aves comuns, como frango e ganso.", 
    origin: "Tormenta20", 
    price: "T$ 4", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Avelã de Norba", 
    name: "Avelã de Norba", 
    description: "Um tipo específico de avelã, que apenas os esquilos de Norba (nas Repúblicas Livres de Sambúrdia) conseguem encontrar.", 
    origin: "Tormenta20", 
    price: "T$ 40", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Carne", 
    name: "Carne", 
    description: "De ovelha, gado ou trobo. Um alimento caro, pois esses animais são criados primariamente para outros usos — respectivamente, lã, leite e tração.", 
    origin: "Tormenta20", 
    price: "T$ 16", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Carne de caça", 
    name: "Carne de caça", 
    description: "De animais como cervo, javali e faisão, ou mesmo de monstros como urso-coruja, serpe e lobo-das-cavernas. É ainda mais cara que a carne de animais de criação, mas também é mais nutritiva e possui sabor mais pronunciado.", 
    origin: "Tormenta20", 
    price: "T$ 32", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Cereal", 
    name: "Cereal", 
    description: "A base da alimentação artoniana. Os mais comuns são o trigo, o centeio e a cevada, embora outros, como o arroz, o milho e a aveia, sejam consumidos em reinos e regiões específicos.", 
    origin: "Tormenta20", 
    price: "T$ 1", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Cogumelo", 
    name: "Cogumelo", 
    description: "Um alimento comum e acessível. Contudo, por sua ligação com a natureza e a magia, é visto com maus olhos em certos ambientes.", 
    origin: "Tormenta20", 
    price: "T$ 5", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Especiarias", 
    name: "Especiarias", 
    description: "Pimentas, ervas, flores e outros tipos de temperos trazidos de terras distantes, ou até mesmo com origem mágica. São valorizadas por casas nobres, tanto por seu sabor quanto por serem um símbolo de poder e riqueza.", 
    origin: "Tormenta20", 
    price: "T$ 100", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Farinha", 
    name: "Farinha", 
    description: "Pó obtido da moagem de certos cereais. Crucial para pães, mingaus e bolos, alimentos comuns entre camponeses artonianos.", 
    origin: "Tormenta20", 
    price: "T$ 1", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Fruta", 
    name: "Fruta", 
    description: "Das mais comuns, como maçãs, peras e pêssegos, às mais raras (do ponto de vista de um habitante do Reinado), como melões, tâmaras e figos, podem ser servidas cozidas, como acompanhamento, ou cruas, como sobremesa.", 
    origin: "Tormenta20", 
    price: "T$ 3", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Gorad", 
    name: "Gorad", 
    description: "Uma iguaria doce originária da pequena província de Tragematum, no Império de Tauron.", 
    origin: "Tormenta20", 
    price: "T$ 30", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Legume", 
    name: "Legume", 
    description: "Inclui cebola, alho, nabo, cenoura, ervilha, feijão e outros.", 
    origin: "Tormenta20", 
    price: "T$ 1", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Leite", 
    name: "Leite", 
    description: "Um alimento importante por si só, além de ser a base de manteigas e queijos.", 
    origin: "Tormenta20", 
    price: "T$ 1", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Molho tamuraniano", 
    name: "Molho tamuraniano", 
    description: "Um molho escuro, salgado e forte, fabricado apenas no Império de Jade (e no bairro de Nitamu-ra, em Valkaria). O segredo do molho nunca foi revelado a estrangeiros, motivo pelo qual é raro e caro.", 
    origin: "Tormenta20", 
    price: "T$ 30", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Óleo", 
    name: "Óleo", 
    description: "De origem vegetal, o óleo é usado para cozinhar, temperar e conservar alimentos.", 
    origin: "Tormenta20", 
    price: "T$ 3", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Ovo de monstro", 
    name: "Ovo de monstro", 
    description: "Ovos de criaturas monstruosas, como grifos, serpes e ursos-corujas.", 
    origin: "Tormenta20", 
    price: "T$ 50", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Peixe", 
    name: "Peixe", 
    description: "Consumidos frescos, salgados ou defumados. Os mais apreciados são o salmão, a enguia e a lampreia.", 
    origin: "Tormenta20", 
    price: "T$ 7", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Porco", 
    name: "Porco", 
    description: "A carne de açougue mais comum no Reinado — ao contrário de outros animais, o porco é criado primariamente para o abate.", 
    origin: "Tormenta20", 
    price: "T$ 8", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Queijo", 
    name: "Queijo", 
    description: "Fortes ou suaves, com ou sem aromatizantes, são comuns tanto em tavernas quanto em banquetes nobres.", 
    origin: "Tormenta20", 
    price: "T$ 6", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
  { 
    id: "Verdura", 
    name: "Verdura", 
    description: "Inclui repolho, couve, urtiga, acelga, espinafre, alface e outras.", 
    origin: "Tormenta20", 
    price: "T$ 1", 
    spaces: "0,5", 
    category: "Ingrediente" 
  },
];