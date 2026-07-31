// data/regreiro.ts
import { RegreiroQA } from "@/types/regreiro";

// Adicione aqui as perguntas e respostas do Supremo Tribunal Regreiro.
// Só precisa preencher: id, question, answer e magazineNumber (o número da edição).
// A página monta "Dragão Brasil - XXX" e o filtro de edições sozinha.
//
// Formatação suportada em "question" e "answer":
//   \n\n        -> parágrafo em branco
//   **texto**   -> negrito
//   *texto*     -> itálico
//   > texto     -> bloco de citação (bom pra saudação de abertura)

export const regreiroQAs: RegreiroQA[] = [
  { id: "DB228-01",
    question:
      "Boa noite, conselheiros! Acabei de ter uma situação inusitada na minha mesa. Se eu lançar a magia Tentáculos de Trevas para enfrentar mortos-vivos, os tentáculos conseguem agarrar os mortos-vivos?",
    answer:
      "Saudações necromânticas, conselheiro! Mortos-vivos são imunes a todas as magias de necromancia, incluindo Tentáculos de Trevas.",
    magazineNumber: 228,
  },
  {
    id: "DB228-02",
    question: "> Após algumas jogatinas, eis que surgem algumas dúvidas deste grupo humilde. Então não resta alternativa a não ser recorrer ao Supremo.\n\nI. O item compasso místico é um esotérico que permite excluir um alvo da área afetada por uma magia lançada. Se a magia não é instantânea, como *Controlar Plantas*, este alvo é afetado em turnos subsequentes? Isso incluiria magias que afetam o ambiente, como *Controlar o Clima*?",
    answer: "> Saudações heroicas, conselheiro! Vamos às suas respostas:\n\nI. Você escolhe qual alvo é excluído da área ao lançar a magia, mas isto o beneficiará enquanto a área for afetada pela magia (independentemente da magia ter duração instantânea ou de 1 ou mais rodadas).",
    magazineNumber: 228,
  },
  {
    id: "DB228-03",
    question: "II. Adoramos usar as falhas críticas de *Heróis de Arton*, mas algumas nos confundem. Por exemplo, o resultado 74 da tabela menciona um item alquímico arremessado que cai. Mas não usamos jogadas de ataque para itens alquímicos! Como fica?",
    answer: "II. Como mencionado na página 300 de *Heróis de Arton*, nem todos os efeitos estão diretamente ligados à jogada de ataque realizada.",
    magazineNumber: 228,
  },
  {
    id: "DB228-04",
    question: "III. O poder *Mão Amiga* pode ser usado para agilizar o tempo de treinamento para uma distinção?",
    answer: "III. Desde que a distinção em questão permita que o personagem receba ajuda, sim.",
    magazineNumber: 228,
  },
  {
    id: "DB228-05",
    question: "Em *Deuses de Arton*, a descrição dos dragonetes aponta que tais seres feéricos podem ser familiares, mas a ficha de tal criatura traz apenas opções para parceiro. Quais seriam os benefícios concedidos para um arcanista (bem paciente) que tenha um dragonete como familiar?",
    answer: "> Saudações feéricas, conselheiro!\n\nParece que as artimanhas dos dragonetes se acometeram sobre todos nós. Até desvendarmos o que exatamente aconteceu, desconsidere menções a dragonetes familiares e use-os apenas como parceiros, como apontado na ficha em *Deuses de Arton*.",
    magazineNumber: 228,
  },
  {
    id: "DB228-06",
    question: "> Saudações, caros membros da STR!\n\nMinha dúvida é mais conceitual do que mecânica. Por que apenas Thwor concede o poder *Fúria Divina*? Megalokk é o deus dos monstros e da ferocidade, cujos druidas são responsáveis por criarem gigantes furiosos. Não faria sentido que concedesse o mesmo poder? Desde já agradeço.",
    answer: "> Saudações ferozes, conselheiro!\n\nEmbora os devotos de Megalokk sejam brutais, lhes falta a clareza de propósito daqueles que almejam pelo Mundo Como Deve Ser. Dessa forma, não são capazes de direcionar sua fúria de forma tão eficiente. Além disso, note que esse poder também é concedido por Keenn, caso você jogue uma aventura no passado de Arton (como *Guerra Artoniana*), antes da ascensão de Arsenal.",
    magazineNumber: 228,
  },
  {
    id: "DB228-07",
    question: "> Prezados membros do Supremo Tribunal Regreiro (STR), venho, respeitosamente, submeter à apreciação deste tribunal novas dúvidas relacionadas à classe variante alquimista, principalmente, conforme descrita em *Tormenta20* e materiais complementares, visando assegurar a correta interpretação das regras em mesa.\n\nI. *Dissipar Magia* tem como função encerrar efeitos ativos de magias. Considerando que poções produzem efeitos equivalentes a magias quando consumidas, questiona-se: os efeitos provenientes de poções podem ser dissipados normalmente por *Dissipar Magia*, ou são tratados de forma distinta por sua natureza alquímica?",
    answer: "> Saudações metálicas, conselheira! Vamos às suas respostas:\n\nI. Sim, podem ser dissipados normalmente, pois poções geram o efeito de magias ao serem usadas (*Tormenta20*, p. 341).",
    magazineNumber: 228,
  },
  {
    id: "DB228-08",
    question: "II. Indo na mesma linha de pensamento, efeitos mágicos no geral, como a *Forma Selvagem* do druida e a *Égide* do paladino, seriam dissipados por *Dissipar Magia* ou não seriam dissipados por não serem magias propriamente ditas?",
    answer: "II. Não, apenas magias.",
    magazineNumber: 228,
  },
  {
    id: "DB228-09",
    question: "III. Em discussões anteriores do STR, foi mencionado que emulsões não são itens alquímicos. Contudo, conforme descrito em *Heróis de Arton*, as emulsões utilizam as regras de fabricação de alquímicos, embora com custos e CDs próprios. Diante disso, questiona-se: é possível utilizar o poder *Catalizador Instável* para fabricar uma emulsão como ação completa, mediante o pagamento dos custos em PM e tibares correspondentes?\n\nAgradeço pela atenção e pela contínua dedicação deste tribunal em manter a harmonia e clareza das regras do sistema.\nAtenciosamente.",
    answer: "III. Emulsões são itens alquímicos, elas só não são preparados alquímicos (como esclarecemos anteriormente). Como *Catalizador Instável* permite fabricar preparados alquímicos ou poções, não funciona com emulsões.",
    magazineNumber: 228,
  },
  {
    id: "DB228-10",
    question: "> Olá, digníssimo tribunal! Tenho uma dúvida.\n\nEstou querendo jogar como um duende, de *Heróis de Arton*. A habilidade *Metamorfose Animal* me permite virar um bicho e ganhar armas naturais. Elas contam para os poderes *Arma Natural Aprimorada*/*Hábil*? O texto dos poderes de armas naturais diz que o pré-requisito é “arma natural fornecida por raça”. Como a *Metamorfose* é uma habilidade racial do duende, queria saber se é possível essa interação, mesmo recebendo as armas naturais de forma indireta.",
    answer: "> Saudações novamente feéricas, conselheiro!\n\nPela leitura mais rígida da regra, a raça não concede uma arma natural, dá uma habilidade que por sua vez concede uma arma natural. Então, não. Porém, como sempre aconselhamos, converse com o seu mestre! Talvez ele ache a ideia interessante.",
    magazineNumber: 228,
  },
  {
    id: "DB228-11",
    question: "> Saudações, nobres juízes!\n\nEstamos usando a regra adicional de efeitos críticos, de *Heróis de Arton*. Porém, temos dúvidas sobre margens de crítico ampliadas. Os efeitos críticos se aplicam sempre que consigo um acerto crítico (no caso do meu personagem, com um resultado de 12 ou mais) ou apenas com um 20 natural?",
    answer: "> Saudações decisivas, conselheiro!\n\nOs efeitos se aplicam com qualquer acerto crítico, não é necessário um 20 natural.",
    magazineNumber: 228,
  },
  {
    id: "DB228-12",
    question: "> Saudações, nobres juízes!\n\nUma dúvida há muito vem consumindo a minha mente. Como funciona a *Aura de Invencibilidade* do paladino, quando ele é um dos últimos na iniciativa e recebe dano? Se ele ativa o poder depois de sofrer dano, cancelaria o dano que já sofreu nessa mesma rodada? Caso contrário o poder me parece inútil, especialmente por ser acessível apenas no nível 18!",
    answer: "> Saudações sagradas, conselheiro! Depois de ativada, a *Aura de Invencibilidade* ignora o próximo dano sofrido na cena (não na rodada, nem antes dele ser ativado) para o paladino e seus aliados. Exceto caso o combate termine na primeira rodada, ainda há muito valor a ser obtido deste poder: lembrando que ativar a aura de paladino consome apenas 1 PM.",
    magazineNumber: 228,
  },
  {
    id: "DB228-13",
    question: "> Caros juízes, venho com uma dúvida sobre o que fazer numa situação específica como mestre.\n\nFaz algum tempo, mestrei uma campanha em que um dos meus jogadores fez um treinador que tinha um lobo gigante como melhor amigo e utilizava como montaria. Quando meus monstros e NPCs atacavam, porém, eu ficava em dúvida: deveria atacar o treinador ou sua montaria? Se vocês estivessem nessa mesma situação, o que me recomendariam fazer?",
    answer: "> Saudações fraternas, conselheiro! \n\nEssa é uma questão que deve levar em conta quais inimigos estão enfrentando o treinador, além das estatísticas dos dois personagens. Se o lobo tiver Defesa alta, faz sentido que qualquer atacante tente mirar no treinador em vez dele. Um conjurador pode decidir concentrar seus ataques no treinador desde o começo, para impedir que alguém direcione a ferocidade do animal. Se por um acaso for um caçador que odeie lobos, com certeza os ataques no melhor amigo terão prioridade! É preciso definir caso a caso.",
    magazineNumber: 228,
  },
  {
    id: "DB228-14",
    question: "> Juízes! Poderiam esclarecer algumas dúvidas desse aventureiro?\n\nI. O poder de bárbaro *Rigidez Selvagem*, de *Heróis de Arton*, permite aplicar o bônus de *Fúria* à Defesa. Ao alcançar o nível 20, o poder *Fúria Titânica* dobra os bônus de *Fúria* nos testes de ataque e dano. Nesse caso, o bônus concedido por *Rigidez Selvagem* à Defesa também é dobrado?",
    answer: "> Saudações marciais, conselheiro! Vamos às suas respostas:\n\nI. Sim. “Bônus de fúria” é uma forma resumida de se referir ao bônus concedido pela habilidade *Fúria* nos testes de ataque e rolagens de dano corpo a corpo. *Fúria Titânica* dobra esse bônus, que por sua vez é aplicado em Defesa, em Fortitude e em RD por conta de *Rigidez Selvagem*.",
    magazineNumber: 228,
  },
  {
    id: "DB228-15",
    question: "II. Um guerreiro com os poderes *Ambidestria* e *Operações Combinadas* pode realizar dois ataques ao utilizar *Operações Combinadas*?",
    answer: "II. Não. *Operações Combinadas* oferece apenas um ataque. Por exemplo, em seu turno, um guerreiro com *Ambidestria* pode gastar sua ação padrão para realizar a ação agredir e fazer dois ataques. Se ao menos um deles acertar um alvo sob efeito de seu *Xadrez de Batalha*, pode usar *Ordens de Engajamento* para fornecer um ataque extra para um aliado em alcance curto e *Operações Combinadas* para ganhar um ataque extra (não uma ação padrão) a ele mesmo, no mesmo momento.",
    magazineNumber: 228,
  },
  {
    id: "DB228-16",
    question: "III. O poder *Escola de Duelo: Escola Ambidestra*, do duelista, já permite o ataque com duas armas ou precisa do poder *Estilo de Duas Armas*?",
    answer: "III. Não. O benefício é apenas aquele listado na descrição. Para fazer um ataque adicional com duas armas é necessário ter *Ambidestria* ou *Estilo de Duas Armas*.",
    magazineNumber: 228,
  },
  {
    id: "DB228-18",
    question: "> Bom dia, caros juízes, trago algumas perguntas sobre regras de culinária e alimentação.\n\nI. O poder *Cozinheiro da Abadia* permite combinar os efeitos de dois pratos em um. Nesse caso, dois *banquetes dos heróis* concederiam +1 em dois atributos diferentes?",
    answer: "> Saudações gastronômicas, conselheiro! Vamos às suas respostas:\n\nI. Não. O poder permite combinar os efeitos de dois pratos, mas *banquete de heróis* é apenas um prato.",
    magazineNumber: 228,
  },
  {
    id: "DB228-19",
    question: "II. E quanto a *Ás da Cozinha*?",
    answer: "II. Não, da mesma forma.",
    magazineNumber: 228,
  },
  {
    id: "DB228-20",
    question: "III. Se o personagem tiver *Cozinheiro da Abadia* e *Ás da Cozinha*, poderia combinar três pratos em um só, chegando a três *banquetes dos heróis*?",
    answer: "III. O personagem poderia combinar três pratos em um só, mas não fazer com o que o mesmo prato conceda o seu benefício três vezes.",
    magazineNumber: 228,
  },
  {
    id: "DB228-21",
    question: "IV. Um personagem com *Bom de Garfo* poderia se beneficiar de dois *banquetes dos heróis* no mesmo dia, desde que cada banquete concedesse bônus a atributos diferentes?",
    answer: "IV. Sim.",
    magazineNumber: 228,
  },
  {
    id: "DB228-22",
    question: "> Saudações, digníssimos!\n\nUm golem de ferro é imune a magia. Isso o torna imune aos efeitos da magia *Concentração de Combate* que forçam o oponente a rolar dois dados e escolher o pior? Este uso da magia *Concentração de Combate* seria um efeito direto ou indireto para o golem? Afinal, a modificação de um teste de ataque é uma imposição mecânica direta sobre a ação da criatura realizada por um efeito mágico.",
    answer: "> Saudações concentradíssimas, conselheiro!\n\nO golem é forçado a rolar dois dados por conta da magia *Concentração de Combate*, da mesma forma que teria o dano de seu ataque reduzido por um *Campo de Força*. O efeito dessas magias se aplica ao conjurador, não ao golem. Não existe uma força mágica fazendo com que o golem ataque pior, existe uma força mágica atuando sobre o conjurador fazendo com que ele se defenda melhor. Dessa forma, é um efeito indireto e ignora a imunidade do golem.",
    magazineNumber: 228,
  },
  {
    id: "DB228-23",
    question: "> Olá, meritíssimos. Seguindo os conselhos de Bilu, um famoso clérigo de Tanna-Toh, venho aqui mais uma vez em busca de conhecimento:\n\nI. Caso eu tenha um *Golpe Pessoal Conjurador* com as magias *Toque Vampírico* ou *Toque Chocante*, eu poderia pagar os PMs da melhoria que permite realizar um ataque como parte da execução da magia? Ou seja, usar o *Golpe Pessoal*, ativar a magia e depois realizar o ataque da execução da magia, resultando em dois ataques em um único movimento? Se sim, os custos desses PMs das melhorias da magia entram no limite de PMs do *Golpe Pessoal*?",
    answer: "> Saudações alienígenas, conselheiro! Vamos às suas respostas:\n\nI. Sim, você pode usar um *Golpe Especial Conjurador* para usar *Toque Chocante* ou magias similares e fazer um ataque adicional com a magia. Isso resulta em dois ataques, sendo que um deles aplica o efeito da magia. O custo em PM da magia faz parte do limite de PM de *Golpe Pessoal*.",
    magazineNumber: 228,
  },
  {
    id: "DB228-24",
    question: "II. Personagens sem as devidas proficiências em armaduras e escudos aplicam a penalidade de armadura nas perícias baseadas em Força e Destreza. Isso quer dizer que um personagem não proficiente poderia utilizar uma brigantina (*Heróis de Arton*) sem sofrer nenhuma penalidade adicional?",
    answer: "II. Sim, assim como qualquer personagem usando uma armadura com penalidade de armadura zero. Lembre-se, porém, de que existem outras questões envolvendo uso de armaduras pesadas como a brigantina: não se soma Destreza na Defesa, o deslocamento é reduzido em 3m, é necessário um teste para poder lançar magias arcanas.",
    magazineNumber: 228,
  },
  {
    id: "DB228-25",
    question: "III. *Heróis de Arton* trouxe encantos para acessórios, dando a eles categorias como instrumentos musicais, vestuário e afins. Surgiram duas dúvidas: esses acessórios, ao entrarem nessas categorias, poderiam receber melhorias de itens superiores? Por exemplo, o *manto do fascínio* poderia receber melhorias como inscrito ou cravejado de gemas? Ou ainda: a própria *flauta fantasma*, que agora consta como instrumento musical, poderia, na mão de um bardo, receber melhorias de esotéricos?",
    answer: "III. Sim. Para todos os propósitos, os acessórios são itens das categorias adequadas.",
    magazineNumber: 228,
  },
  {
    id: "DB228-26",
    question: "IV. Infelizmente, no *Guia dos Deuses Menores* não tivemos a presença da *Sagrada Bola de Fogo*. Existe alguma chance dessa calorosa divindade aparecer em algum suplemento futuro?",
    answer: "IV. Não há notícias recentes sobre a *Sagrada Bola de Fogo*. Mas uma coisa é certa: seus fiéis continuam tão explosivos quanto nunca!",
    magazineNumber: 228,
  },
  {
    id: "DB228-27",
    question: "V. Agora uma pergunta trivial: klirens têm seis dedos?",
    answer: "V. Existem klirens com seis dedos, mas nem todo kliren tem seis dedos.",
    magazineNumber: 228,
  },

];