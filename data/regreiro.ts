//#region Tormenta20 - Jogo do Ano
//#endregion
import { RegreiroQA } from "@/types/regreiro";
// Formatação suportada em "question" e "answer":
//   \n\n        -> parágrafo em branco
//   **texto**   -> negrito
//   *texto*     -> itálico
//   > texto     -> bloco de citação (bom pra saudação de abertura)

export const regreiroQAs: RegreiroQA[] = [

  //#region DB - 227
  {
    id: "DB227-01",
    question: "1) Como funciona para usurpadores (*Heróis de Arton*) ascenderem à divindade, já que eles não podem ser devotos de si mesmos?",
    answer: "> Saudações variantes, conselheiro! Vamos às suas respostas:\n\n1) A verdade é que não funciona! Um usurpador não consegue completar o processo de ascensão para deus menor, pois não pode ser devoto de si mesmo.",
    magazineNumber: 227,
  },
  {
    id: "DB227-02",
    question: "2) Um magimarcialista (*Heróis de Arton*) pode usar poderes como *Inspiração Resoluta*? Ele usa o bônus de magificação para o cálculo?",
    answer: "2) Não pode. O magimarcialista não usa *Inspiração*, apenas é considerado sob efeito de *Inspiração*. Ele pode se beneficiar de poderes como *Esgrima Mágica*, mas não de *Inspiração Resoluta*.",
    magazineNumber: 227,
  },
  {
    id: "DB227-03",
    question: "> Boa tarde, meus caros regreiros. Elucidem algumas dúvidas minhas e da minha mesa, por favor!\n\n1) Qual a interação entre o poder concedido *Kiai Divino* com o poder de raça *Força dos Titãs*? Causaria automaticamente dano máximo com o número máximo de dados?",
    answer: "> Saudações fantásticas, conselheiro! Vamos às suas respostas:\n\n1) Os poderes não interagem. O dado não é rolado com *Kiai Divino*, logo, não ativa *Força dos Titãs*.",
    magazineNumber: 227,
  },
  {
    id: "DB227-04",
    question: "2) Um eiradaan feiticeiro dracônico somaria seu atributo-chave (Sabedoria) em seus pontos de vida com a linhagem básica ou continuaria somando seu Carisma?",
    answer: "2) Somaria Carisma.",
    magazineNumber: 227,
  },
  {
    id: "DB227-05",
    question: "3) Quando um personagem com proficiência em armas marciais escolhe o poder *Proficiência* para arma exótica, ele recebe proficiência em todas as armas exóticas ou deve escolher somente uma?",
    answer: "3) Todas as armas exóticas.",
    magazineNumber: 227,
  },
  {
    id: "DB227-06",
    question: "4) O que seriam os três desafios arcanos avançados que devem ser superados para a admissão na distinção da *Ordem do Vazio*?",
    answer: "4) Estes desafios não são definidos com antecedência. Precisam ser grandes feitos arcanos realizados em consonância com o uso do componente especial.",
    magazineNumber: 227,
  },
  {
    id: "DB227-07",
    question: "> Ó Supremo Tribunal Regreiro, elucide-nos com seu infinito conhecimento e saber.\n\n1) A magia *Engenho de Mana* faz uma contramágica contra cada magia feita na área. Se dois arcanistas estiverem presentes na área e cada um deles lançar duas magias, o usuário do *Engenho de Mana* faz um total de quatro contramágicas?",
    answer: "> Saudações arcanísticas, conselheiros!\nVamos às suas respostas:\n\n1) Um *Engenho de Mana* faz uma contramágica contra cada magia lançada em seu alcance médio. No seu exemplo, seriam de fato quatro contramágicas. Porém, é o engenho quem faz estes testes: ele apenas se utiliza do valor de Misticismo do conjurador.",
    magazineNumber: 227,
  },
  {
    id: "DB227-08",
    question: "2) Algumas magias possuem aprimoramentos que têm como pré-requisito círculos maiores de magia, como *Alterar Tamanho*. Usar estes aprimoramentos eleva o círculo da magia?",
    answer: "2) Não. *Alterar Tamanho* é uma magia de 2º círculo e continua sendo uma magia de 2º círculo quando seus aprimoramentos de +3 PM e +7 PM são usados.",
    magazineNumber: 227,
  },
  {
    id: "DB227-09",
    question: "3) Um *Campo Antimagia* não pode ser dissipado por magias que dissipam outras magias. Porém, as magias *Desejo* e *Intervenção Divina* poderiam dissipar um *Campo Antimagia*? Talvez com o sacrificio de 2 PMs? *Intervenção Divina*, em especial, advém de uma divindade, sendo que deuses maiores não são afetados pelo *Campo Antimagia*.",
    answer: "3) *Campo Antimagia* não pode ser dissipado, mas existem outras formas de remover o efeito de uma magia, especialmente com *Desejo* e *Intervenção Divina*. Talvez as magias até voltem no tempo para fazer com que a conjuração falhe! Como em todo caso de uso criativo destas magias, a resposta final depende do mestre.",
    magazineNumber: 227,
  },
  {
    id: "DB227-10",
    question: "> Bom dia, meus caros juízes! Gostaria de uma ajuda sua sobre a interpretação de um ataque e um teste de ataque.\n\nUm teste de ataque é a mesma coisa que um ataque? Por exemplo, se um cavaleiro tem *Duelo* ativo contra um inimigo, mas é alvo de uma manobra realizada por um segundo inimigo, este cavaleiro precisa fazer um teste de ataque para resistir contra a manobra. Isso configura atacar outro oponente e, assim, encerra a duração do *Duelo*? Se um cavaleiro resistir contra uma manobra realizada por um inimigo caído, isso é uma violação do seu código de honra?",
    answer: "> Saudações honradas, conselheiro! \n\nConforme visto na página 220 de *Tormenta20*, um teste é “uma rolagem de 1d20 + modificador”. Já o ataque, propriamente dito, é a espadada, chute, desarme, etc., resolvido com este teste. Mas outras coisas, como evitar uma manobra de combate, podem requerer tal teste. De qualquer forma, *Duelo* não termina pelo cavaleiro fazer “qualquer teste de ataque”, então ele pode tentar evitar manobras normalmente. *Duelo* só termina se ele realmente atacar outro inimigo (ou seja, fizer algo como dar uma espadada para feri-lo ou usar a manobra derrubar para levá-lo ao chão).",
    magazineNumber: 227,
  },
  {
    id: "DB227-11",
    question: "> Excelentíssimo Supremo Tribunal Regreiro venho, respeitosamente, à presença desta augusta corte submeter à apreciação questão de relevante interesse hermenêutico-regreiro, concernente à interpretação do material especial madeira tollon, especialmente no que tange à incidência de redutores de custo em Pontos de Mana (PM). Dos Fatos e da Controvérsia:\n\n• O texto do referido material especial faz menção à redução de custo de “Habilidades”, no plural. Diante disso, questiona-se se tal redação deve ser interpretada de forma ampla, abrangendo todas as habilidades ativadas no contexto de um único ataque ou da ação agredir, de modo que cada uma delas teria seu custo reduzido em –1 PM.",
    answer: "> Saudações jurídicas, conselheiro! \n\nAntes de mais nada, este tribunal aplaude sua disposição combeira e a apresentação de sua súplica. Quanto às respostas, vamos às boas notícias primeiro. De fato, mais de uma habilidade ativada ao fazer um ataque ou a ação agredir é afetada pela madeira tollon.",
    magazineNumber: 227,
  },
  {
    id: "DB227-12",
    question: "• Em caráter exemplificar, indaga-se caso um personagem da classe lutador utilize, em um mesmo ataque, os poderes *Trocação* (custo 3 PM) e *Cabeçada* (custo 2 PM), seria juridicamente correto concluir que o custo total seria reduzido para 3 PM, aplicando-se a redução de –1 PM em cada poder (resultando em 2 PM + 1 PM)?",
    answer: "O lutador do seu exemplo, porém, não está com sorte. A madeira tollon somente pode ser aplicada a armas de madeira: ou seja, manoplas não se aplicam. Se ele for um campeão do dojo com o poder *Caminho da Mão Armada* e armas de madeira, porém, ainda há uma discrepância. *Trocação* não é elegível para o uso com harmonizada e madeira tollon, pois esta habilidade não é usada “ao fazer um ataque” ou “usar a ação agredir”, mas sim ao “acertar um ataque”. É uma diferença que pode ser desconsiderada por mestres bonzinhos, mas pela fria letra da regra se aplica!",
    magazineNumber: 227,
  },
  {
    id: "DB227-13",
    question: "• Subsidiariamente, caso a interpretação acima não seja acolhida por este Egrégio Tribunal, suscita-se a seguinte questão: é admissível a cumulação de redutores distintos, como a melhoria Harmonizada aplicada a um poder específico e madeira tollon aplicada a uma outra habilidade, mesmo que ambas ocorram no contexto de um único ataque? Ou, alternativamente, entende-se que, por se tratar de um único evento de ataque, os redutores não se acumulam ou não se aplicam de forma independente?\n\nDo Pedido:\nDiante do exposto, requer-se a esse colendo Tribunal o devido esclarecimento quanto:\n• à abrangência do termo “Habilidades” no texto da melhoria Madeira de Tollon;\n• à possibilidade de aplicação cumulativa de redutores de PM em múltiplas habilidades no mesmo ataque;\n• e à eventual compatibilidade entre diferentes fontes de redução de custo no mesmo contexto de ação.\n\nNestes termos, pede-se deferimento regreiro.",
    answer: "Por fim, num vácuo, o benefício de harmonizado se acumularia com madeira tollon, já que benefícios de outras melhorias se acumulam com materiais especiais. Porém, redutores de custo não acumulam. Desta forma, não há acúmulo.\n\nÉ o relatório.",
    magazineNumber: 227,
  },
  {
    id: "DB227-14",
    question: "> Saudações, magistrados marciais. Eu, como devoto fundamentalista, não tenho dúvidas sobre os dogmas. Porém, um amigo meu ainda cria esperanças. Devotos fundamentalistas são proibidos de utilizar armas que não sejam a favorita do deus do qual são devotos. Isso se estende a armas naturais e ataques desarmados? Um minotauro fundamentalista de Azgher poderia atacar com seus chifres?",
    answer: "> Saudações eclesiásticas, conselheiro!\n\n Sim, a restrição do fundamentalista se estende a armas naturais e ataques desarmados. Um minotauro fundamentalista de Azgher não tem permissão de desonrar a nobre fé de sua divindade usando seus chifres! De forma geral, as restrições de fundamentalistas devem ser as mais severas possíveis.",
    magazineNumber: 227,
  },
  {
    id: "DB227-15",
    question: "> Boa tarde, caríssimos juízes! Tenho algumas dúvidas sobre a classe treinador, de *Heróis de Arton*.\n\n1) O melhor amigo pode receber beneficios de parceiros?",
    answer: "> Saudações fraternas, conselheiro!\n\n Vamos às suas respostas:\n\n1) Sim, o melhor amigo tem uma ficha, então pode receber bônus de parceiros.",
    magazineNumber: 227,
  },
  {
    id: "DB227-16",
    question: "2) O melhor amigo pode se beneficiar de itens de alimentação?",
    answer: "2) Sim, normalmente.",
    magazineNumber: 227,
  },
  {
    id: "DB227-17",
    question: "3) Em testes estendidos e perigos complexos, quem faz o teste, o treinador ou o melhor amigo?",
    answer: "3) Depende do caso. Se o grupo está fazendo um teste estendido de Fortitude para resistir a um “veneno natural no ar” enquanto atravessa um pântano putrefato, ambos devem fazer o teste, pois ambos são afetados. Mas em situações com mais liberdade de escolha, como num teste estendido de Atletismo para puxar a carroça quebrada do grupo, o jogador pode decidir quem fará o teste (e poderia até fazê-lo com ambos os personagens, contando o número de sucessos e falhas normalmente – duas falhas para o fim do teste estendido se nenhum tiver sucesso). Em caso de dúvidas se uma situação permite escolha, o mestre decide.",
    magazineNumber: 227,
  },
  {
    id: "DB227-18",
    question: "> Meritíssimos, trago uma dúvida de caráter possivelmente combeirístico.\n\nUm usurpador (*Heróis de Arton*) com um bônus de enganação superior à CD da magia que deseje usurpar pode escolher 0 em combate no teste de *Usurpar*?",
    answer: "> Saudações usurpadas, conselheiro!\n\n Como mencionado anteriormente neste tribunal, a resposta final cabe ao mestre. Pela regra nua e crua, isso seria possível. Mas lidar com os deuses envolve muito mais que meras regras. Nunca é trivial enganar os deuses…",
    magazineNumber: 227,
  },
  {
    id: "DB227-19",
    question: "> Saudações, excelentíssimos ministros deste tribunal.\n\n O poder *Tornado da Dor* permite que o guerreiro faça um ataque contra vários inimigos, fazendo um único teste e rolagem de dano para todos. Digamos, porém, que o efeito de uma habilidade como *Touché* ou *Truque da Mão Lesta* aumente o dano do ataque contra apenas parte desses inimigos. Como é feita a rolagem de dano?",
    answer: "> Saudações rodopiantes, conselheira!\n\n Neste caso em específico, como os dados de dano são diferentes para alvos diferentes, são necessárias rolagens de dano separadas. Uma para o alvo afetado por *Touché* ou habilidades similares e outra para todos os demais. Porém, no caso de *Truque da Mão Lesta*, o personagem poderia usá-lo contra todos os envolvidos, com uma ação livre para cada um. Seria algo muito lesto mesmo!",
    magazineNumber: 227,
  },
  {
    id: "DB227-20",
    question: "> Olá, meritíssimos senhores deste tribunal divino! Venho para sanar duas dúvidas que assolam minha mente:\n\n1) Uma criatura com um ataque desarmado e uma arma natural, ou duas armas naturais, poderia agarrar um inimigo mais de uma vez e desta forma em uma rodada subsequente substituir seus dois ataques por manobras de agarrar que causariam dano?",
    answer: "> Saudações greco-romanas, conselheiro! Vamos às suas respostas:\n\n1) Um mesmo personagem agarrar mais de uma vez um alvo seria irrelevante, pois a condição agarrado já foi aplicada e não será agravada por isso (não há acúmulo nem nenhuma outra consequência). No entanto, um personagem capaz de fazer vários ataques desarmados ou de arma natural pode usar todos eles para esmagar o alvo mesmo assim.",
    magazineNumber: 227,
  },
  {
    id: "DB227-21",
    question: "2) Digamos que uma criatura tenha sido agarrada duas vezes, seja pela mesma criatura ou por duas criaturas diferentes. Quando faz um teste oposto de manobra para se livrar da manobra agarrar, a criatura se liberta completamente ou apenas se livra de um ataque de agarrar que a prendia?",
    answer: "2) Se duas criaturas diferentes agarram o mesmo alvo, este alvo mantém a condição agarrado enquanto permanecer agarrado por qualquer uma das criaturas. O alvo deve se livrar de cada manobra agarrar separadamente.",
    magazineNumber: 227,
  },
  {
    id: "DB227-22",
    question: "> Olá, nobres reguladores dos ofícios de Arton!\n\n Venho por meio desta tentar sanar uma dúvida sobre o custo de fabricação de poções. Pela regra de fabricação, a matéria-prima custa um terço do preço do item. Se uma poção de 1 PM custa T$ 30, então o custo para fabricá-la deveria ser T$ 10. Porém, a regra de descrição de poções lista um preço de T$ 30! Qual é o valor correto?",
    answer: "> Saudações alquímicas, conselheiro.\n\n Não há contradição. O preço de uma poção é definido pela regra apresentada na seção Itens de Uso Único: T$ 30 x o custo em PM da magia ao quadrado. Porém, isso não é custo da matéria-prima! Isso deve ser determinado pela regra normal de fabricação. Ou seja, sim, para fazer uma poção de uma magia de 1 PM, você gasta T$ 10 em matéria-prima.",
    magazineNumber: 227,
  },
  //#endregion
  //#region DB - 228
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
  //#endregion
  //#region DB - 229
  {
    id: "DB229-01",
    question: "> Olá, juízes do Supremo! Gostaria de sanar algumas dúvidas a respeito do STR de maio.\n\nSe compreendi bem a última resposta do STR a outro colega conselheiro, resistir a uma manobra não é considerado exatamente atacar um inimigo. Então se um inimigo, com camuflagem ou com armadura de matéria vermelha ou com o efeito da magia *Piscar*, faz uma manobra contra mim, eu não terei chance de falha quando for resistir à manobra?",
    answer: "> Saudações elucidadas, conselheiro! Um teste de manobra continua sendo um teste de ataque, sujeito a todos os redutores relacionados a ele. A resposta no STR anterior explicita que resistir a um teste de manobra não conta como um ataque para os propósitos de interromper a habilidade *Duelo* de um cavaleiro, não para outros critérios.",
    magazineNumber: 229,
  },
  {
    id: "DB229-02",
    question: "Outra questão, ainda sobre o STR de maio. Por que é irrelevante que uma criatura agarre um alvo mais de uma vez? Não existe a possibilidade de um mesmo atacante agarrar uma criatura com 2 ou mais membros, forçando a criatura a se soltar de um membro por vez?",
    answer: "Sobre manobras agarrar, não há nenhuma vantagem para um atacante tentar agarrar uma criatura mais de uma vez. Ou a criatura está agarrada por um alvo ou não está. Quando passa em seu teste para se soltar, deixa de estar agarrada pela criatura da qual tentou se soltar. Por isso, é irrelevante.",
    magazineNumber: 229,
  },
  {
    id: "DB229-03",
    question: "> Prezados juízes!\n\nTrago-lhes algumas dúvidas de exímia importância sobre as regras de iluminação e a linha de visão de um conjurador em *Tormenta20*.\n\nImaginemos o seguinte cenário: um mago humano, sem nenhum tipo de visão especial, está em um ambiente de escuridão leve (penumbra). Dado tal fato, pergunto: ele consegue enxergar e estabelecer linha de visão com os alvos nesse ambiente? Existe alguma distância máxima limitando essa percepção em metros, ou enxerga até onde o alcance da magia permitir? Existe alguma penalidade geral para lançar magias na penumbra? Camuflagem leve se aplica apenas a efeitos que exigem testes de ataque? Magias que exigem apenas testes de resistência do alvo sofrem alguma penalidade? E quanto a magias de área?",
    answer: "> Saudações obscuras, conselheiro! Essa é uma questão mais fácil do que parece. Escuridão leve não bloqueia linha de visão, mesmo sem nenhuma forma de visão especial. Não há diferença no alcance do que o personagem vê, portanto nenhuma mudança no alcance normal de suas magias. Também não há penalidade por lançar magias na penumbra. E sim, camuflagem afeta apenas efeitos que tenham testes de ataque. Magias que usem testes de resistência, sejam de área ou não, passam incólumes pela penumbra.",
    magazineNumber: 229,
  },
  {
    id: "DB229-04",
    question: "> Saudações, lustrosos ministros das regras, guardiões dos sagrados textos regrísticos!\n\nEstou com uma dúvida sobre investida. Como bem sabemos, para realizar uma ação de investida, você deve se locomover uma distância até o dobro de seu deslocamento e realizar um ataque contra uma criatura em seu alcance. Porém, caso você seja um centauro, seu alcance natural é de 3m e, caso utilize uma arma alongada, esse alcance aumenta para 6m. Dito isso, um centauro poderia fazer uma investida para trás (se afastando de um inimigo) e mesmo assim acertá-lo?",
    answer: "> Saudações agressivas, conselheira! Não. A descrição de investida é bem clara: você avança até o dobro do seu deslocamento em linha reta antes de qualquer outra coisa. Se afastar de um inimigo não é avançar.",
    magazineNumber: 229,
  },
  {
    id: "DB229-05",
    question: "> Saudações, meus queridos! Encantos fornecidos pelas emulsões do alquimista e pelo poder *Implante Exclusivo* da distinção *Cobaia dos Médicos Monstruosos* são considerados mágicos para efeitos que anulem efeitos mágicos, tenham resistência mágica ou para o poder *Ao Sabor do Destino*?",
    answer: "> Saudações anuladas, conselheiro! Uma emulsão em si não é um item mágico, mas concede explicitamente propriedades mágicas. Um encanto advindo de uma emulsão pode ser anulado por 1d6 rodadas com *Dissipar Magia*, por exemplo. O mesmo vale para *Implante Exclusivo*; o poder em si não é mágico, mas os encantos gerados continuam usando as regras gerais para encantos, sendo inerentemente mágicos.",
    magazineNumber: 229,
  },
  {
    id: "DB229-06",
    question: "> Saudações, grande tribunal! Por conta das seguintes perguntas, um certo grupo de aventureiros começou um conflito em escala regional em Valkaria, destruindo 10% da cidade. Desta forma, trago-as ao conhecimento de vossas excelências no intuito de obter respostas antes que as coisas piorem!\n\nI. Algumas armas naturais de garra, como as obtidas por moreau da Herança do Gato, funcionam com habilidades que exigem uma arma secundária. Essas garras podem ser usadas com *Estilo de Duas Armas* para fazer dois ataques com garra ou precisa haver uma arma empunhada?",
    answer: "> Saudações vorazes, conselheiro! Que os Escamas Vivas não nos ouçam, pois temos as suas respostas:\n\nI. Como o moreau do gato e similares têm duas armas naturais e cada uma delas pode servir como uma arma secundária, ele pode usar *Estilo de Duas Armas* com as garras.",
    magazineNumber: 229,
  },
  {
    id: "DB229-07",
    question: "II. Ainda sobre as garras, elas podem ser usadas com habilidades de caçador que exigem duas armas empunhadas, como *Bote*?",
    answer: "II. Sim, pelos mesmos motivos.",
    magazineNumber: 229,
  },
  {
    id: "DB229-08",
    question: "III. Se um místico (DB 199) tiver *Herança Dracônica Aprimorada* (fogo), lançar *Toque Chocante* e utilizar afinidade para mudar o dano para fogo, poderia aplicar os efeitos da *Herança Dracônica* à magia?",
    answer: "III. Sim. A versão final da classe místico, porém, não terá essa habilidade de conversão.",
    magazineNumber: 229,
  },
  {
    id: "DB229-09",
    question: "IV. A habilidade *Sopro de Dragão* dos kallyanach é afetada por poderes como *Poder Sem Limites* ou *Magia Ilimitada*? E se o kallyanach for um feiticeiro dracônico?",
    answer: "IV. *Poder Sem Limites* afeta o *Sopro de Dragão* de qualquer kallyanach e sua CD será determinada por Constituição ou Carisma, à sua escolha, com +2 por *Poder Ilimitado*.",
    magazineNumber: 229,
  },
  {
    id: "DB229-10",
    question: "V. *Poder Sem Limites* funcionaria com o *Ataque Elemental* do místico?",
    answer: "V. Sim. Essa habilidade será renomeada para *Combate Elemental* em uma versão futura.",
    magazineNumber: 229,
  },
  {
    id: "DB229-11",
    question: "VI. Se um guerreiro mágico lançar uma magia de 2º círculo como ação livre (seja com *Preparação Veloz* ou *Magia Acelerada*) e logo em seguida lançar outra magia de 1º círculo, seja com ação padrão ou de movimento, qual seria o bônus concedido pelo poder *Fogo e Aço*?",
    answer: "VI. *Fogo e Aço* dura até o final do turno. Se várias magias são lançadas ao longo desse turno, o bônus mais alto é aplicado. No exemplo, o bônus seria +2. Visualize dessa forma: um guerreiro mágico lança *Erupção Glacial* como ação livre, com *Acelerar Magia*, para eliminar um grupo de inimigos. Um destes inimigos prepara uma ação e dispara uma flecha contra o guerreiro mágico, que lança *Salto Dimensional* como reação para desviar dela. O inimigo sobrevive. Com sua ação de movimento, nosso conjurador do exemplo lança *Primor Atlético* para se aproximar e obter os bônus de investida em seu próximo ataque. Ele lança, então, *Toque Chocante* com um aprimoramento para fazer um ataque. Este ataque receberá o bônus de investida de *Primor Atlético*, com o aprimoramento para fazer o ataque. Este ataque receberá +2 no teste no ataque e causará um dado adicional de dano por *Primor Atlético*, além de receber +3 no dano por *Fogo e Aço*. O guerreiro mágico lançou quatro magias, sendo uma de 3º círculo, uma de 2º círculo e duas de 1o círculo. Prevalece o maior bônus, de *Erupção Glacial*.",
    magazineNumber: 229,
  },
  {
    id: "DB229-12",
    question: "> Saudações, tribunal! Se eu estiver usando as regras opcionais de ataques localizados e tentar cortar o rabo de um humano transformado em trog com *Disfarce Ilusório*, o que acontece? Um devoto de Tenebra pode se proteger da luz de Azgher com essa mesma magia ou o pai severo vê tudo?",
    answer: "> Saudações esquivas, conselheiro! Perceba que *Disfarce Ilusório* não é uma transformação, apenas uma ilusão! Você não pode cortar o que não está lá. Dessa forma, o ataque não teria efeito, o que pode ser uma dica de que a criatura não é o que parece. Quanto ao devoto de Tenebra, o disfarce não o protegeria da luz de Azgher… mas ele devia estar mais preocupado com Tenebra vendo isso e punindo-o com a perda de todos os PM!",
    magazineNumber: 229,
  },
  {
    id: "DB229-13",
    question: "> Prezados senhores da corte RPGística. Tenho uma dúvida simples em essência, mas que levanta questionamentos. Se a arma empunhada por uma ameaça for quebrada, como ficam seus ataques? Há alguma redução?",
    answer: "> Saudações partidas, conselheiro! Uma ameaça desarmada pode tentar atacar com ataques desarmados, usando as regras normais, caso não tenha outra arma disponível. Também pode usar manobras de desarmar para tomar a arma de um inimigo. Os ataques usam o mesmo valor do ataque com a arma padrão, mas o dano deve ser recalculado, usando os dados de dano adequados à arma em questão. Um ataque desarmado causa 1d3 pontos de dano, ajustados pelo tamanho, mais o mesmo bônus estático de dano usado pelo ataque principal, sem contar bônus e dados extras de dano específicos da arma.\n\nLembre-se de que quebrar uma arma é difícil: ameaças costumam ter bônus de ataque mais altos que os aventureiros, além de que uma arma quebrada é uma arma a menos recebida como tesouro. Portanto, quebrar armas precisa conceder vantagens significativas! Você pode ler mais sobre a remoção de equipamentos de ameaças em *Ameaças de Arton*, página 374.",
    magazineNumber: 229,
  },
  {
    id: "DB229-14",
    question: "> Prezadíssimos membros desse tribunal, peço-lhes ajuda para mediar as disputas de interpretação entre os devotos do Culto à *Bola de Fogo* e os membros da Guilda da Espadinha.\n\nI. Efeitos que aumentam o dano em um dado, como o *cetro elemental*, se acumulam com efeitos que adicionam um dado de dano, como do catalisador baga-de-fogo e da melhoria energético?",
    answer: "> Saudações dualísticas, conselheiro!\n\nI. Não; neste caso, todos os efeitos fornecem “dados extras de fogo” de fonte “item”, o que não é cumulativo (*Tormenta20*, página 226). Mas note que é possível melhorar sua *Bola de Fogo* usando um *cetro elemental* em conjunto com o catalisador terra de cemitério, pois nesse caso os efeitos seriam diferentes (um dado extra de fogo e outro de trevas).",
    magazineNumber: 229,
  },
  {
    id: "DB229-15",
    question: "II. Por extensão, efeitos que adicionam especificações ou condicionantes, como o do *casaco longo*, são distintos o suficiente para serem considerados efeitos diferentes para fins de acúmulo?",
    answer: "II. Não, pois o bônus do *casaco longo* ainda é um bônus em um teste de Fortitude (ele é adicionado somente em um caso específico).",
    magazineNumber: 229,
  },
  {
    id: "DB229-16",
    question: "> Saudações, ministros! Vamos fazer algumas perguntas interessantes:\n\nI. O que acontece quando um personagem multiclasse obtém um nível de machado de pedra, a variante de bárbaro presente em *Heróis de Arton*? E quando o machado de pedra se torna, ele mesmo, multiclasse? O personagem aprende e/ou desaprende a falar?",
    answer: "I. Dado o que um machado de pedra é, cabe relembrar o que o FAQ diz na página 8: um personagem pode escolher qualquer classe ao subir de nível, mas sugerimos conversar com o mestre antecipadamente no caso de combinações que tenham reflexos diretos na campanha (dessa forma, vocês podem fazer a transição narrativa mais facilmente, talvez inserindo um período em que o personagem viva em uma tribo ou um ritual mágico que o transforme). Isto posto, um machado de pedra multiclasse ainda usa a habilidade *Grunhidos* exatamente como um de classe única. Isso quer dizer que um personagem que se torna um bárbaro machado de pedra depois do 1o nível perde sua habilidade de falar normalmente e um machado de pedra que faça multiclasse não só continua incapaz de falar como não amplia seu vocabulário, uma vez que ele só é expandido com níveis de machado de pedra!",
    magazineNumber: 229,
  },
  {
    id: "DB229-17",
    question: "II. *Redirecionar Destino*, um poder concedido de Thyatis apresentado em *Deuses de Arton*, permite alterar o valor do dado rolado. Se um 20 natural for redirecionado, o que acontece?",
    answer: "II. Para todos os efeitos, o resultado do d20 é substituído pelo último resultado anotado com este poder. Digamos que começa o dia, o devoto de Thyatis rola 1 e anota esse resultado. Ao longo do dia, o devoto é atacado por um ogro. Quando o ogro faz o teste, o devoto usa *Redirecionar Destino*. O ogro ainda faz seu teste, mas usa o resultado 1 rolado pelo devoto no começo do dia. O resultado do ogro (incluindo um 20 natural) é anotado e pode ser usado pelo devoto para substituir outro teste de uma criatura em alcance curto.",
    magazineNumber: 229,
  },
  {
    id: "DB229-18",
    question: "III. A melhoria devotado (*Deuses de Arton*) pode ser aplicada a um símbolo sagrado, já que seu pré-requisito é a melhoria inscrito, que transforma o objeto em um símbolo sagrado?",
    answer: "III. Pela fria letra da regra, não. Um símbolo sagrado não é um item superior com a melhoria inscrito. Você pode conversar com seu mestre para obter uma exceção mas, como redutores de custo são poderosos, é bem capaz que ele não a conceda!",
    magazineNumber: 229,
  },
  {
    id: "DB229-19",
    question: "IV. Os itens bainha mágica e fragmento de filactério são itens vestidos?",
    answer: "IV. A bainha mágica é um item vestido. O fragmento de filactério deve ser empunhado, como qualquer esotérico, para conceder seus benefícios.",
    magazineNumber: 229,
  },
  {
    id: "DB229-20",
    question: "V. É possível escolher 0 em testes de perícia durante um combate? Para se esconder, por exemplo.",
    answer: "V. De forma geral, você sempre pode escolher 0, mesmo que isso resulte em uma falha no teste devido ao resultado (0 + seu modificador no teste) não ser suficiente.",
    magazineNumber: 229,
  },
  {
    id: "DB229-21",
    question: "VI. Como funcionam as magias de um usurpador com a origem Duplo Feérico, escolhendo a linhagem abençoada do feiticeiro como seu poder da origem? Ele recebe magia divina e arcana, simplesmente aprende magias arcanas e sabe todas as divinas?",
    answer: "VI. Não. Mas há três questões diferentes para abordar sobre isso. Primeiramente, é a habilidade *Magias* do arcanista que faz com que ele aprenda (inicialmente e ao longo dos níveis) e possa lançar magias arcanas, não a habilidade *Caminho do Arcanista - Feiticeiro*; esta apenas modifica o aprendizado e outros detalhes do personagem, além de fornecer acesso a uma linhagem. Desta forma, ao usar Duplo Feérico para obter uma dessas habilidades, você receberá apenas os benefícios dela, não de ambas (em suma, terá só *Magias* ou só a linhagem). Em segundo lugar, suas magias de usurpador não têm nenhuma ligação com suas magias de arcanista (independente de você ter níveis nas duas classes ou a habilidade *Magias* de arcanista via Duplo Feérico). Portanto, ao usar a habilidade *Usurpar* para lançar magias, você lança apenas as magias às quais ela dá acesso, não magias de outras classes (mesmo que uma dessas outras magias seja obtida via Duplo Feérico). E, em último lugar, se um usurpador usar Duplo Feérico para obter a linhagem abençoada, desperdiçará sua origem, pois isso não lhe trará nenhum benefício. Isto ocorre porque a magia divina aprendida através da linhagem não poderá ser lançada (pois a linhagem em si não torna o personagem capaz de lançá-la; ela é apenas uma magia adicional que um arcanista normal lança através da habilidade *Magias*, coisa que o usurpador feérico não tem) e o poder concedido nunca será obtido, pois Duplo Feérico só permite usar *Caminho do Arcanista* como se tivesse 1 nível naquela classe, e o poder é obtido no 2º nível.",
    magazineNumber: 229,
  },
  {
    id: "DB229-22",
    question: "VII. Como a magia *Sigilo de Sszzaas* interage com fintas em combate e com o poder *Sombra Espreitadora*, da distinção sombra de Tenebra?",
    answer: "VII. Em ambos os casos, embora possa não parecer evidente à primeira vista, o oponente está procurando obter uma informação: a intenção ou posição do atacante. Independente da perícia usada, esses testes sofrem –5 se o atacante estiver sob efeito de *Sigilo de Sszzaas*.",
    magazineNumber: 229,
  },
  {
    id: "DB229-23",
    question: "VIII. Se tenho efeitos iguais da mesma fonte para um mesmo propósito, mas de forma diferente, eles se acumulam? Por exemplo, um parceiro que conceda +2 em testes de perícia e outro que conceda +2 em testes de ataque.",
    answer: "VIII. São bônus diferentes. Digamos que um bardo com o poder *Esgrima Mágica* tenha dois parceiros: um ajudante (que concede +2 em Atuação) e um combatente (que concede +2 em testes de ataque). Quando tenta impressionar a corte com seu bandolim, ele recebe +2 no teste de perícia devido ao ajudante. Quando tenta atingir um inimigo com seu florete, recebe +2 no teste de ataque devido ao combatente. Sob efeito de inspiração, porém, ele faz testes de ataque usando Atuação, então seu bônus aumenta para +4.",
    magazineNumber: 229,
  },
  {
    id: "DB229-24",
    question: "IX. Um devoto de Tenebra com o poder *Visão nas Trevas* consegue enxergar através de escuridão de espaços de masmorra?",
    answer: "IX. Sim. Espaços de masmorra têm escuridão sobrenatural, ou seja, mágica. *Visão nas Trevas* permite enxergar nesses espaços. Hynnin não ia querer pisar no calo de Tenebra por tão pouco…",
    magazineNumber: 229,
  },
  //#endregion
];