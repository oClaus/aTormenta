// data/regioes.ts
import { Region, RegionTagInfo } from "@/types/regiao";

// Imagens ficam em /public/regioes/ (ex: public/regioes/deheon.jpg -> "/regioes/deheon.jpg").
// Se a imagem não existir, o card mostra um ícone no lugar, sem quebrar.
//
// Só "id", "name", "tag" e "image" são obrigatórios. Todo o resto é opcional:
// uma região grande usa facts + coatOfArms + map + várias seções; uma pequena
// pode ter só "intro" e uma ou duas seções.
//
// Formatação suportada em qualquer texto:
//   \n\n          -> parágrafo em branco
//   **texto**     -> negrito        *texto* -> itálico
//   > texto       -> citação        - texto -> item de lista
//  ### texto     -> subtítulo

// --- Cards de categoria ---

export const regiaoTags: RegionTagInfo[] = [
  { tag: "Reinado",
    description: `O Reinado de Arton já reuniu quase todas as nações do norte e parecia ser uma potência incontestável no continente. Hoje em dia, após guerras, ataques de vilões, manifestações da Tormenta, cataclismas naturais e conquistas de reinos inteiros, o Reinado é apenas uma fração do que já foi. Mesmo assim, permanece como a principal força de lei, igualdade e civilização no continente. Sob o comando da Rainha-Imperatriz Shivara I, o Reinado continua orgulhoso, determinado a defender os povos de Arton — e, mesmo com perdas pesadas, ergue-se vitorioso de novo e de novo.`,
    image: "/regioes/reinado-tag.png",
    sections: [
      {
        title: "O que é o Reinado?",
        content: `O Reinado é uma coalizão de diferentes reinos com governos autônomos, para proteção mútua e defesa de ideais em comum. Antes da chegada dos refugiados de Lamnor ao continente norte, cada povo, reino ou nação era totalmente independente. Havia grandes civilizações, como Khubar, as Amazonas de Hippion, as nações dos Ermos Púrpuras e a República de Tapista, mas as relações diplomáticas entre elas eram tênues, sem grandes alianças ou costumes em comum. Qualquer ameaça deveria ser enfrentada isoladamente, qualquer infestação de monstros era problema exclusivo do povo local.

  É impossível dizer como essas civilizações se desenvolveriam sem o influxo de refugiados. Talvez uma coalizão fosse criada sem influência de Lamnor, talvez algum reino se erguesse como um grande conquistador, talvez o isolacionismo só aumentasse com o passar dos séculos.

  Mas a chegada da caravana de Lamnor mudou tudo.

  Os refugiados traziam algumas ideias fundamentais: estavam à procura de um lar, não de um simples território que pudessem ocupar, já que nunca mais poderiam voltar à terra que conheciam. Tinham perdido quase toda noção de suas antigas nacionalidades, pois passaram anos convivendo e se misturando, sem divisões estritas e sem fronteiras às quais se apegar. Estavam convictos de que sua jornada tinha inspiração divina, pois seguiam as visões de Roramar Pruss. Por fim, tinham a determinação e a humildade de quem passou por uma provação e alcançou a redenção. É claro que havia vilões entre os refugiados, desde nobres ainda se agarrando a suas intrigas até senhores da guerra que aproveitavam a falta de estrutura para tiranizar pequenos grupos. Contudo, no geral a caravana estava disposta a trabalhar duro e abraçar tudo que era novo.

  Foi essa mentalidade que se difundiu por Arton quando os refugiados encontraram a estátua de Valkaria, estabeleceram-se ali e se espalharam pelo continente. Encontros pacíficos com as nações já existentes traziam uma mensagem de união: apenas juntos os diferentes povos poderiam defender seus lares; apenas laços firmes evitariam que mais uma vez populações inteiras fossem banidas. Embates violentos com os habitantes do continente traziam essa mesma união, mas na forma de conquista: era preciso angariar cada vez mais poder, para que nunca mais houvesse um oponente capaz de roubar tudo de um povo. Por altruísmo, por terror ou por ambição, os refugiados propagavam o mesmo ideal: um continente unido.

  Por isso o Reinado é mais do que uma aliança — é um conjunto de princípios. Ainda que esse ideal nunca tenha sido atingido totalmente, em sua essência o Reinado representa a crença de que todos os povos, independente de raça ou procedência, têm direito a um lar e devem prestar auxílio mútuo contra aqueles que venham a ameaçar esse direito.

  Originalmente, o Reinado estendeu a aliança ao Dragão-Rei Sckhar, às misteriosas fadas da Pondsmânia, aos minotauros de Tapista e a todos os demais povos, por mais diferentes dos lamnorianos que fossem. Talvez esse pensamento tenha sido ingênuo — por exemplo, como confiar em um maligno e poderosíssimo dragão ancestral? Mesmo assim, após o pedido (ou exigência) de Sckhar, Sckharshantallas foi tratado como um membro igualitário da coalizão.

  O Reinado nunca baniu raças ou mesmo modos de governo. Firme na crença de que todos eram bem-vindos e nenhuma maneira de existir seria proibida, o Reinado acolheu monarquias, repúblicas, magocracias, até mesmo tiranias mal disfarçadas. Talvez isso tenha enfraquecido a coalizão, mas o ideal permanecia o mesmo: ainda que o governante fosse maligno, o povo merecia proteção. O Reinado representava a tentativa de influenciar e mudar esses sistemas injustos. Não através da guerra, mas da diplomacia.

  Os minotauros se aproveitaram disso durante as Guerras Táuricas, quando um incidente diplomático se avolumou, resultando na conquista de grandes partes do território do oeste. Possivelmente, a agressão dos minotauros abriu as portas para os demais desligamentos e até mesmo a trágica Guerra Artoniana. Pois a antiga nação de Tapista não apenas se ergueu contra seus vizinhos — ela abandonou os princípios de ajuda mútua. Antigamente, era raro que alguma nação expressasse o desejo de se separar do Reinado. Talvez de dominá-lo ou de usurpar o posto de Rei-Imperador, mas a noção da coalizão continuava forte. Foi a partir das Guerras Táuricas que a ideia de dissolução se espalhou. Subitamente, os ressentimentos e diferenças que existiam dentro do continente ganharam uma nova solução: o rompimento total, na crença de que independência e individualismo eram melhores do que cooperação.

  Com apenas sete reinos restantes, o Reinado permanece forte — sinal de que seu poder não estava apenas em armas e números, mas em princípios. E, enquanto existir um Reinado, esses princípios serão sempre os mesmos.`
      },
      {
        title: "O Reinado É Livre",
        content: `O Reinado é governado pela Rainha-Imperatriz (ou Rei-Imperador, quando um homem senta no trono). No entanto, cada reino da coalizão mantém autonomia e o posto de monarca supremo não é puramente hereditário.

  Desde Wortar II, descendente do Rei-Imperador original, o sistema de governo e sucessão permanece o mesmo. Primeiro há a questão do rei de Deheon, o Reino Capital. Antes de morrer, o monarca atual indica um sucessor. Normalmente esse sucessor é seu descendente direto (filha ou filho), mas pode ser um parente mais distante. Contudo, quanto mais distante o parentesco, menos direito o candidato possuirá, o que pode gerar insatisfação entre a nobreza. O rei também pode indicar algum nobre fora de sua família, como foi o caso de Thormy. Antes da ascensão de Shivara, todos os governantes eram da dinastia Pruss e nativos de Deheon, mas a Rainha-Imperatriz provou que nada disso é uma exigência. Além do indicado, há outros candidatos: altos aristocratas, pessoas com ligação tênue com o Rei Profeta, heróis aclamados. Então um conselho de nobres (chamados apropriadamente de “eleitores”) vota para decidir quem será o rei. O “voto” do rei atual (ou seja, sua indicação em vida) tem peso maior do que o de qualquer outro eleitor, mas uma aristocracia unida contra o sucessor indicado poderia eleger outro candidato.

  Contudo, isso diz respeito apenas a Deheon, não sendo garantia do posto de Rei-Imperador. Uma vez que um novo rei de Deheon tenha ascendido, os demais reis e governantes do Reinado votam para aceitá-lo ou rejeitá-lo como Rei-Imperador, responsável por toda a coalizão. Até hoje, o governante de Deheon sempre foi aprovado no trono do Reinado, mas já houve ameaças a essa estabilidade.

  Existe pelo menos uma forma de destronar um Rei-Imperador já coroado: o conselho do Reinado. O conselho do Reinado é convocado pelo Rei-Imperador apenas em casos graves, para tomar alguma decisão muito importante. Todos os reis comparecem (ou ao menos mandam representantes com poder de decisão) e atuam como conselheiros para o monarca superior. Normalmente o conselho do Reinado acontece em Deheon e segue as leis dessa nação. Dessa forma, não é possível destronar o Rei-Imperador — ele está em território onde é soberano.

  Mas, em raras ocasiões, o território onde o conselho do Reinado se reúne é considerado neutro, independente de onde esteja fisicamente. Nesse caso, é possível votar para derrubar um Rei-Imperador. Mesmo assim, presume-se que as leis de Deheon estejam valendo. Contudo, o Rei-Imperador (e apenas ele) pode decretar que as leis de outro reino governem o território neutro. Essa manobra inusitada dá margem para truques legais e políticos. Thormy, por exemplo, usou esse estratagema para fazer com que as leis do Reino de Yudennach governassem o conselho e permitir que ele desafiasse seu rival, Mitkov Yudennach, em combate individual. Isso fez desmoronar toda uma teia de intrigas que ocorria há anos e ameaçava derrubar o Rei-Imperador.

  Caso o rei de outra nação assuma o posto, essa nação se torna o Reino Capital. Na prática, é muito mais fácil e vantajoso para os demais reinos manter o rei de Deheon no trono do Reinado. Caso o Rei-Imperador viesse a se tornar o rei de outra nação, seria preciso transferir toda a corte de Valkaria para uma nova cidade, que não contaria com a mesma estrutura e segurança do Palácio Imperial. Além disso, estrategicamente é interessante que Deheon continue sendo o Reino Capital. É uma nação rica e militarmente poderosa — sem a obrigação moral de se manter justa e neutra em disputas, poderia usar esse poder para oprimir outros reinos. Paradoxalmente, Deheon fica sob controle enquanto sua rainha é também Rainha-Imperatriz.`
      },
      {
        title: "O Reinado É Igualitário",
        content: `Os reinos participantes da coalizão mantêm suas próprias leis, seus próprios costumes e seu próprio sistema de governo, o que inclui sucessão. Embora o conjunto de regras que governa a relação entre o Reinado e cada um de seus membros seja extenso, há um princípio básico que guia tudo: o que acontece dentro das fronteiras é jurisdição do próprio reino. O que cruza fronteiras, ou que afeta outros reinos, fica sob controle do Reinado.

  Esse não é um sistema perfeito e sofreu modificações recentes. Antigamente, quando Tapista era membro do Reinado, isso significava que a escravidão era tolerada pelos Reis-Imperadores, desde que ficasse dentro das fronteiras. Essa atrocidade gerava incômodo e revolta em muitos cidadãos do Reinado, mas seria impossível bani-la sem uma guerra. Inevitavelmente, foi um conflito gerado pela prática da escravidão que levou às Guerras Táuricas e à saída do reino dos minotauros da coalizão.

  Outro exemplo eram as leis odiosas do antigo Reino de Yudennach. Dentro de suas fronteiras, pessoas não humanas eram perseguidas e podiam até mesmo ser caçadas e assassadas sem razão alguma. O reino era a principal ameaça ao poder de Deheon e havia grande medo de que, no caso de uma intervenção do Reinado, Deheon perdesse o posto de Reino Capital e a intolerância se alastrasse pelo continente. Mais uma vez, um confronto era inevitável. A Guerra Artoniana começou com a transformação de Yudennach na Supremacia Purista e o desligamento de seu território do Reinado.

  Hoje em dia, intolerância, escravidão e outras práticas similares são consideradas crimes em todo o Reinado, independente de acontecerem dentro ou fora das fronteiras de um reino. A história já provou que passividade frente a isso não é garantia de paz, muito menos de mudança. Assim, a coroa do Reinado exerce maior poder sobre cada nação.

  Embora cada reino mantenha sua forma de governar seu próprio povo, existem algumas diretrizes universais. Cada reino possui um rei ou governante, que está subordinado por um juramento de lealdade à Rainha-Imperatriz. Todo o poder dentro do reino emana do rei — embora na prática isso seja questionável. Por sua vez, o rei conta com juramentos de lealdade de seus nobres, que são senhores de nobres menores e assim por diante. Todas as pessoas do Reinado estão ligadas a alguma outra pessoa por um juramento de lealdade, que pode ou não ser formal.

  Apenas por nascer em um determinado local um plebeu automaticamente está jurado a obedecer ao senhor da terra, enquanto o senhor automaticamente faz um juramento de proteger seu novo súdito. Os plebeus mais humildes simplesmente juram lealdade a um baronete local, ao burgomestre de sua aldeia ou às autoridades de sua cidade. Nobres contam com uma cadeia complexa de lealdades (prestando juramentos a altos nobres, sendo servidos por cavaleiros e plebeus etc.). A Rainha-Imperatriz não se submete a ninguém, mas tem um juramento de lealdade para com todo o povo do Reinado. Em troca de seu posto, ela jura defender cada cidadão e liderá-los frente a grandes ameaças e desafios.

  Todos os juramentos são voluntários, ao menos em teoria. Isso significa que ninguém pertence a ninguém no Reinado. Da mesma forma, os plebeus não estão presos às terras de seus senhores e os habitantes de uma cidade podem deixá-la quando quiserem. Na prática, esse tipo de mudança radical é muito difícil para a maior parte das pessoas, sejam plebeus ou nobres. Nem mesmo cavaleiros ou comerciantes ricos têm facilidade para abandonar tudo e começar de novo em outro lugar, com novos juramentos. Apenas aventureiros costumam fazer isso. Assim, é comum que pessoas que desejam conhecer o mundo escolham uma vida de aventuras.

  Aventureiros em grande parte estão fora do sistema de lealdades e juramentos do Reinado. Tecnicamente estão jurados aos senhores e autoridades dos locais de onde vieram, mas logo se envolvem em novos juramentos (escolhendo morar em outro lugar, aceitando missões de nobres etc.) e podem ascender para governar plebeus, recebendo seus próprios juramentos. Em geral, isso é um processo informal — um aventureiro que está há meses morando numa aldeia e resolvendo os problemas locais é considerado “parte da aldeia” sem que precise se ajoelhar para alguém. Dentro de um Reinado onde todos são livres, os aventureiros são os mais livres de todos.`,
        sidebars: [
          {
            title: "A Hospitalidade",
            content: `Um costume amplamente praticado, mas não codificado em leis, é a hospitalidade. Ao encontrar uma fazenda ou taverna de beira de estrada perdida no meio das extensões desabitadas do Reinado, um viajante pode pedir abrigo ou pagar por uma noite sob um teto. Fazendeiros ou taverneiros podem se negar — mas, uma vez que aceitem, entram num acordo tácito de não fazer qualquer mal a seu hóspede. O hóspede, por sua vez, deve respeitar e proteger o anfitrião e todos que estão sob o mesmo teto. Existem histórias de grandes inimigos que se encontraram por acaso na mesa humilde de um anfitrião e foram forçados a conviver pacificamente. Afinal, nenhum deles seria tão desonrado a ponto de quebrar a tradição da hospitalidade e erguer armas contra outro hóspede.`
          }
        ]
      },
      {
        title: "O Reinado É Justo",
        content: `Todo esse sistema de lealdades pode parecer um pesadelo opressor para pessoas que vêm de lugares mais anárquicos, como Galrasia ou as Sanguinárias. No entanto, a lealdade mútua garante algo fundamental para o Reinado: ninguém está acima da lei.

  Embora tenham privilégios e a força das armas, nobres não podem fazer o que quiserem com seus súditos. As vidas dos plebeus não pertencem a eles e abusos tirânicos podem ser denunciados a nobres mais altos ou a heróis. Não é incomum que aventureiros sejam contratados por plebeus para derrubar condes ou barões que oprimem seu povo. Mesmo agindo contra o sistema de nobreza, esses aventureiros são aclamados, pois corrigem falhas no sistema de juramentos, já que tiranos não estão sendo leais a seus senhores (por descumprir os acordos ancestrais) ou a seus súditos (por não os proteger).

  Dentro de um reino, as mesmas leis valem para todos, ou deveriam valer. Um nobre não pode assassinar um plebeu, da mesma maneira que um plebeu não pode assassinar um nobre. Um aristocrata que simplesmente tome a propriedade de um camponês será tão criminoso quanto um gatuno apanhado na sala do tesouro. A desigualdade que impera em muitas regiões faz com que esses crimes nem sempre sejam punidos, mas a lei existe. Na verdade, caso todas as leis do Reinado fossem cumpridas o tempo todo, a coalizão seria quase uma utopia. É irônico que muitos aventureiros que se consideram “fora da lei” (pistoleiros, bárbaros, ladinos…) em geral estão fazendo cumprir a lei, apenas porque corrigem injustiças!

  Habitantes do Reinado têm diferentes razões para cumprir a lei e obedecer às autoridades. Nos lugares mais ermos e afastados, isso depende de ligações pessoais entre povo e senhor de terras. Um nobre deve sair de seu castelo e ser conhecido por seus súditos, pois seu poder é baseado na confiança que emana de sua pessoa ou de sua família. Quanto mais perto de grandes centros se chega, mais o povo respeita as instituições em si. O camponês que vive numa aldeia isolada se considera súdito de um barão, mas um valkariano fala orgulhosamente de sua ligação com a cidade, com o reino e com o Reinado como um todo. Alguns podem não gostar da Rainha-Imperatriz, mas respeitam seu posto e sua autoridade.

  O reconhecimento das instituições é especialmente importante em reinos e regiões que recebem muitos não humanos ou estrangeiros. A força dos brasões, das leis e da coalizão em si deve ser suficiente para garantir que nenhum estranhamento superficial ameace os direitos de qualquer cidadão. Uma vez que seja aceito como cidadão do Reinado, um recém-chegado tem todos os direitos daqueles que nasceram e cresceram aqui, mesmo que seja um dragão, demônio ou alguém ainda mais esquisito. Obviamente, sendo uma coalizão fundada por refugiados, o Reinado tem a política de aceitar todos os refugiados que pedem asilo. Em áreas ermas, não há nenhum controle — as fronteiras não são fortemente vigiadas e ninguém faz um censo. Nas capitais existe uma burocracia para conceder a estrangeiros documentos de cidadania e acolhê-los como parte da rede de lealdades que une todos.

  O posto de Rainha-Imperatriz não é ordenado pelos deuses. Assim, a autoridade moral vem da crença da população no próprio Reinado. Para que essa crença continue existindo, o Reinado precisa continuar valendo a pena. Proteger todos e fazer valer as leis não é apenas idealismo — é algo fundamental para a sobrevivência da coalizão.`
      },
      {
        title: "O Reinado é perigoso",
        content: `Todos os princípios de justiça, igualdade e tolerância que existem no Reinado significam apenas uma coisa: vale a pena lutar por ele. E é preciso lutar muito, pois o Reinado está sempre sob algum tipo de ameaça. Na verdade, sob vários tipos!

  Com toda sua vastidão, o Reinado não é plenamente civilizado. Muitas vezes a viagem até a aldeia mais próxima é uma jornada de dias ou semanas. Existem estradas com marcadores de distâncias e até mesmo postos de guarda, mas a maioria do território é composta de planícies intocadas, florestas densas e montanhas inclementes. Nesses lugares, qualquer colina pode esconder monstros, criminosos ou vilões. Viajar é arriscado. Plebeus solitários só empreendem grandes jornadas em último caso. Mais comum é que as pessoas se juntem a caravanas e/ou contratem grupos de heróis para escoltá-las. A primeira missão de muitos aventureiros iniciantes é acompanhar um comerciante até o mercado mais próximo… E eles quase sempre descobrem que não há nada de simples nessa tarefa.

  Viajantes se deparam com locais e fenômenos estranhos o tempo todo. A torre de um necromante, uma área de magia selvagem descontrolada, um templo sszzaazita, um lago ácido ou uma floresta tomada por fungos hipnóticos podem existir em qualquer lugar. Há muito espaço para que o mal e a selvageria se escondam.

  A maior parte dos habitantes não vive em grandes cidades, mas em fazendas e aldeias que se formam ao redor de castelos. Com raras exceções, os castelos dos nobres são abertos à população. Em seu pátio se realizam feiras e o povo é incentivado a vir prestar homenagem a seu senhor, além de fazer solicitações a ele. Apenas a parte mais interna dos castelos, onde vivem o senhor e sua família, é fechada ao povo. Em caso de grandes ameaças, o povo abandona as fazendas e aldeias, reunindo-se sob a proteção das muralhas do castelo. Isso não é garantia de sobrevivência — muitas vezes essa fortificação está distante demais ou inacessível por outra razão. Também há nobres covardes e mesquinhos que fecham suas portas e renegam suas responsabilidades. Além disso, muitas aldeias se formam tão longe dos domínios de seu senhor que seus habitantes nem mesmo pensam em recorrer a ele, preferindo contratar grupos de aventureiros errantes. Mas, no ambiente ermo e rural da maior parte do Reinado, um castelo é um bastião de civilização e um farol de liderança.

  A primeira linha de defesa da coalizão é o Exército do Reinado, a força reunida por Shivara para enfrentar a Tormenta. No entanto, o exército é apenas isso — um exército. Suas batalhas gloriosas e seus triunfos épicos são apenas parte das histórias contadas por bardos. As outras são sobre heróis aventureiros. Sem a interferência de heróis, o Reinado desmoronaria… e, com ele, a ideia de que diferentes reinos podem se unir na defesa do que é correto. Ironicamente, a diminuição do Reinado significou que quase todas as nações contrárias a esses valores se desligaram, tornando a parte ideológica da aliança ainda mais sólida.

  Seja um nativo da coalizão, um imigrante ou apenas alguém de passagem, todo aventureiro dentro do Reinado sente sobre si um peso, uma responsabilidade e uma honra. A Rainha-Imperatriz Shivara está, direta ou indiretamente, contando com heróis que acreditem no Reinado. E, em troca, o Reinado acredita neles.`
      },
      {
        title: "A Genealogia dos Reis-Imperadores",
        places: [
          {
            name: "Roramar Pruss, o Rei Profeta (953-1031)",
            content: "Clérigo de Valkaria, guiou os exilados. Casou-se com a Rainha Amazona Yvanna, a Matadora de Gigantes. Regência: 1020 a 1031."
          },
          {
            name: "Wortar I, o Caravaneiro (1021-1075)",
            content: "Primeiro a ter o título de Rei-Imperador. Enviou caravanas por Arton para explorar o novo lar. Regência: 1031 a 1075."
          },
          {
            name: "Roramyd, o Ligeiro (1042-1075)",
            content: "Morto de causas misteriosas logo após assumir o trono. Sua morte causou guerra civil e instabilidade no Reinado. Regência: menos de 1 ano."
          },
          {
            name: "Wortar II, o Sagaz (1063-1148)",
            content: "Criança quando da morte de seu pai, foi coroado apenas quatro anos depois. Político hábil, integrou diversos reinos à coalizão. Regência: 1079 a 1148."
          },
          {
            name: "Príncipe Druthar (1088-1113)",
            content: "Partiu em uma busca para matar Mzzileyn, o Dragão-Rei das Trevas, mas foi devorado pelo monstro. Regência: —."
          },
          {
            name: "Roramira I, a Sentinela (1111-1180)",
            content: "Conhecida por suas superstições e temores, foi uma grande mecenas das artes mágicas, vivendo rodeada de magas da corte. Regência: 1148 a 1180."
          },
          {
            name: "Roramar II, o Escudo Arcano (1139-1222)",
            content: "Mestre abjurador e lutador conhecido tanto por seus formidáveis feitiços defensivos quanto por seu físico de ferro. Regência: 1180 a 1222."
          },
          {
            name: "Vallanna I, a Víbora que Ri (1173-1256)",
            content: "Uma mestra da intriga e das conspirações palacianas, que seus detratores acusavam de ser uma sszzaazita. Regência: 1222 a 1256."
          },
          {
            name: "Phévio I, o Portador da Praga (1198-1259)",
            content: "Um rei indolente e pouco lembrado, exceto por sua estranha morte, após uma crise interminável de soluços. Iniciou o período agourento conhecido como a Praga dos Reis. Regência: 1256 a 1259."
          },
          {
            name: "Thoran I, o Afogado (1225-1264)",
            content: "Um beberrão e apostador compulsivo. Boa parte de seu governo foi executada por conselheiros. Morreu em uma taverna. Regência: 1259 a 1264."
          },
          {
            name: "Roramar III, o Rei de Alabastro (1229-1266)",
            content: "Muito pálido e sempre enfermo, passou a vida entrevado em seu quarto e mal durou dois anos após assumir o trono. Regência: 1264 a 1266."
          },
          {
            name: "Vallanna II, a Rainha que Ouvia (1251-1325)",
            content: "Nascida cega, governava de uma biblioteca, ouvindo livros narrados por servos e notícias fornecidas por seus fiéis bardos. Regência: 1266 a 1325."
          },
          {
            name: "Príncipe Phévio II (1276-?)",
            content: "Herdeiro do trono, abandonou suas obrigações para viver nos ermos, como um druida de Allihanna. Seu destino é incerto. Regência: —."
          },
          {
            name: "Philydio I, o Tranquilo (1298-1364)",
            content: "Regente justo e ponderado, governou durante um período de relativa tranquilidade. Teve apenas um filho, Thormy. Regência: 1325 a 1364."
          },
          {
            name: "Thormy I, o Último Pruss (1343-?)",
            content: "Enfrentou todo tipo de problema, da queda do Paladino de Arton à chegada da Tormenta. Entregou-se como refém para encerrar as Guerras Táuricas. Regência: 1364 a 1406."
          },
          {
            name: "Shivara I (1375-)",
            content: "Princesa guerreira de Trebuck, liderou o Exército do Reinado na primeira batalha contra a Tormenta e derrotou os puristas no Cerco a Valkaria. Regência: 1406 até o momento."
          }
        ]
      }
    ]
  },
  { tag: "Além do Reinado",
    description: `O Reinado é o coração de Arton, o sonho da Caravana dos Exilados de Lamnor e palco de eventos históricos nos últimos séculos. Contudo, Arton é muito mais que o Reinado. Nas terras sem lei do decadente Império de Tauron, nos domínios macabros de Aslothia, nos picos gelados das Uivantes, nos quartéis odiosos da Supremacia Purista, um aventureiro que só conhece o Reinado é visto como um mero aprendiz.
  Após dar os primeiros passos nos reinos onde sempre se pode voltar a uma aldeia amigável, onde as autoridades estão do lado certo, onde inimigos são a exceção e não a regra, um herói está pronto para os verdadeiros desafios… Para desbravar as terras além do Reinado.`,
    image: "/regioes/alem-do-reinado-tag.png",
    sections: [
      {
        title: "Ainda Mais diversos",
        content: `A civilização não existe apenas no Reinado, é claro. Na verdade, quando os refugiados de Lamnor chegaram a Arton Norte, encontraram diversas civilizações já bastante sólidas — da República de Tapista à tirania de Sckharshantallas ou às nações orgulhosas dos Ermos Púrpuras. Contudo, para a maioria dos lamnorianos essas civilizações eram estranhas, coloridas, cheias de costumes inusitados e tradições únicas.
  Em Lamnor, o povo vivia em aldeias e castelos. Senhores de terras lideravam seus súditos e reis batalhavam por orgulho e poder. Esses costumes foram incorporados ao Reinado, embora tenham sido mesclados às práticas dos povos nativos de Ramnor. Contudo, a maior parte das terras que hoje fica além do Reinado manteve sua identidade mais próxima do que era antes, sem interferência dos refugiados. Em muitos casos, sem interferência de humanos!
  O Império de Tauron, um dos grandes poderes políticos do continente, tem costumes e história à parte dos reinos humanos. Seus habitantes, os minotauros, vivem segundo os dogmas do antigo Deus da Força, numa sociedade guiada pelo lema de que “o forte deve proteger o fraco”. Essa crença se traduziu numa república (algo impensável para os lamnorianos!), então num império conquistador. Os minotauros tinham práticas escravistas e mesmo hoje, quando essa atrocidade foi abolida, em grande parte se acham superiores ao resto dos povos. A morte de Tauron foi um dos fatores que levou à quase dissolução do Império e o caos resultante fez com que muitos pequenos tiranos surgissem nas províncias.
  Sckharshantallas é outra terra que manteve sua identidade ancestral — porque toda ela vem de apenas uma figura. Sckhar, o Dragão-Rei do Fogo, considera que o reino é seu covil pessoal. Assim, tudo que está lá, incluindo o povo, é sua propriedade. Sckharshantallas é povoado por humanos, mas a mentalidade dracônica é dominante. Além do próprio rei, existem seus incontáveis filhos, meios-dragões que ocupam posições de poder em cada cidade e castelo.
  A influência dracônica também é sentida nas Uivantes, que já foi lar e tumba de Beluhga, a Dragoa-Rainha do Gelo. Uma terra fria e inclemente com sua própria cultura e sua própria fauna, esta cordilheira se mostra mais letal que qualquer masmorra para aqueles que chegam despreparados. Quando uma nevasca pode cegar instantaneamente e o chão fofo de neve impede movimentos rápidos, um aventureiro experiente pode se ver mais indefeso que um plebeu.
  Humanos também não dominam as Sanguinárias, outra cadeia de montanhas que desafia os maiores heróis. Este é o território dos monstros, incluindo versões gigantescas de criaturas que normalmente já seriam perigosas. As pequenas comunidades humanas se preocupam em sobreviver ante a contínua devastação das feras.`
      },
      {
        title: "Ainda Mais Perigosos",
        content: `E mesmo as terras humanas além do Reinado são ameaçadoras.
  Aslothia é o antigo reino de Portsmouth, uma terra onde a magia era proibida e as companhias mercenárias patrulhavam cada aldeia. Já tendo sido parte de Bielefeld e se separado do reino numa sangrenta guerra civil, esta nação foi manipulada num estratagema secular da família nobre Asloth. Quando chegou o momento certo, o Conde Ferren Asloth realizou um ritual que sugou a vida da terra, ergueu os mortos e afundou o reino numa escuridão lúgubre. Tornou-se um poderoso Arquilich. Seu domínio foi rebatizado como Aslothia, o Reino dos Mortos.
  Já as Ruínas de Tyrondir não têm mais governo, pois foram devastadas com a queda dos fragmentos de um cometa. O que já foi um reino humano, parte integral do Reinado, hoje é uma desolação selvagem onde bandos disputam recursos escassos, onde aldeias feitas de lixo resistem a saqueadores, onde heróis fazem de tudo para sobreviver.
  Aqueles que talvez sejam os maiores vilões de Arton também estão numa terra humana. Mais do que isso: são apenas humanos. São a Supremacia Purista. Uma ditadura guiada pelo ódio, extremamente militarizada e pregando o extermínio de todos os povos não humanos, a Supremacia quase venceu a Guerra Artoniana e hoje é um dos maiores desafios para heróis aventureiros. Cruzar suas fronteiras significa tornar-se um vilão tão horrendo quanto eles, lutar constantemente… ou morrer.`
      },
      {
        title: "Ainda Mais Aventurescos",
        content: `Mas não existe só maldade além do Reinado. Fora das fronteiras da coalizão também se encontram algumas das maiores concentrações de aventureiros do mundo conhecido.
  Salistick, o Reino sem Deuses, é uma nação de céticos racionais e cientistas obstinados, que avançou a medicina a ponto de rivalizar com os milagres dos clérigos. O que é necessário, já que os salistienses não acreditam em divindades e neste lugar a magia divina não funciona!
  Smokestone é uma cidade fora da lei, onde pistoleiros duelam e pode-se comprar as melhores armas de fogo do mundo. Svalas é um pequeno reino cheio de tipos exóticos, muitos refugiados da Supremacia Purista, onde a rainha recebe até mesmo aventureiros iniciantes — pois eles podem salvar a nação inteira. As Repúblicas Livres de Sambúrdia são um vasto país de príncipes mercadores, onde o comércio impera e qualquer um pode enriquecer.
  E Nova Malpetrim é a capital dos aventureiros de Arton — fora do Reinado, uma cidade por onde passaram quase todas as grandes sagas, lar de figuras lendárias e ponto de partida de grandes expedições. São poucos os heróis artonianos que não beberam em suas tavernas… e que não saíram da cidade com alguma história extraordinária.
  Além do Reinado há desafios com que alguns podem apenas sonhar. Muitas aventuras começam nestas terras… E muitas também terminam, com triunfo ou com tragédia.`,
        sidebars: [
          {
            title: "Ex-Membros do Reinado",
            content: `Até pouco tempo atrás, o Reinado ocupava quase todo o continente norte. Assim, as terras “além do Reinado” já foram parte da coalizão. Algumas guardam simpatia pela antiga aliança. Outras buscam vingança por ofensas reais ou imaginárias.
  Tapista foi a primeira nação a se desligar do Reinado. Isso não chegou a ser surpreendente, já que os minotauros tinham costumes muito diferentes dos povos humanos. Quando uma série de incidentes diplomáticos levou às Guerras Táuricas, Tapista anexou os reinos de Hershire, Petrynia, Fortuna, Lomatubar e Tollon, formando o Império de Tauron.
  Durante as Guerras Táuricas, as insatisfações de três reinos levaram ao seu desligamento do Reinado. Nova Ghondriann (quase ignorado pelo resto de Arton e relegado a um papel secundário na política), Salistick (guiado por um credo de que a medicina devia estar disponível a aliados e inimigos) e Callistia (provavelmente apenas para se opor a seu rival Namalkah) se uniram na Liga Independente.
  Mas a Liga não duraria — Sambúrdia deixou a coalizão anos mais tarde, guiado por interesses econômicos, e acabou por engolir Nova Ghondriann e Callistia, formando as atuais Repúblicas Livres. Salistick se manteve verdadeiramente independente.
  A tomada do Reino de Yudennach e formação da Supremacia Purista provocou as próximas saídas do Reinado. O Reino de Yudennach era rival de Deheon e a família real historicamente buscava o posto de Reis-Imperadores. Contudo, depois que seu rei foi banido e Shivara assumiu o trono, os puristas tomaram o poder. A instabilidade da guerra fez com que nações mais antigas que o Reinado, como Khubar, se desligassem. O desaparecimento de Shivara provocou o afastamento e a dissolução de seu antigo reino, Trebuck. E, em meio a isso, Portsmouth se aliou à Supremacia e se tornou o reino morto-vivo de Aslothia.
  Por fim, a presença de Sckharshantallas no Reinado sempre foi ainda mais incômoda e duvidosa até mesmo que a de Tapista. Ninguém sabe por que o Dragão-Rei um dia quis fazer parte da coalizão, mas muitos suspeitam que fosse apenas mais uma maneira de brincar com as vidas dos bípedes. Vários nobres consideram que o dragão oferece menos perigo estando afastado da política dos mortais.
  Muitos veem a união de todo o continente sob o estandarte do Reinado como uma época dourada, uma utopia que deve ser reconquistada a qualquer custo. No entanto, nenhum dos ex-membros parece desejar voltar à coalizão. Talvez permaneçam, para sempre, terras além do Reinado.`
          }
        ]
      }
    ]
  },
  { tag: "Além de Arton",
    description: `Arton é um mundo, mas a palavra também serve para designar o continente norte, lar de algumas das mais importantes nações de que se tem notícia. Contudo, além do continente existem terras intocadas pela influência dos reinos do norte. Impérios inteiros, com histórias milenares e culturas totalmente distintas. Enquanto quem estuda o Reinado e a Caravana dos Exilados pode se concentrar no que existe no continente norte, o verdadeiro estudioso de Arton precisa ir além.
  Além de Arton.
  As terras normalmente designadas “além de Arton” se desenvolveram em paralelo com o continente. Seus caminhos eventualmente se cruzam, mas cada uma é independente e única. A maioria de seus habitantes jamais pisou no continente norte — e nem precisa. Para esses povos, o Reinado, o Império de Tauron e outros são vizinhos curiosos, esquisitos, que têm seus próprios problemas.`,
    image: "/regioes/alem-de-arton-tag.png",
    sections: [
      {
        title: "Raízes Profundas",
        content: `A maior parte das nações do continente norte é composta de “recém-chegados”. Em comparação com as terras além de Arton, representam uma cultura jovem, com tradições ainda em formação e um passado em grande parte apagado. Instituições importantes como a Ordem da Luz ou o próprio Reinado existem há relativamente poucas gerações. Entre as raças mais longevas, ainda há quem lembre de sua fundação.

  Em comparação, as terras além de Arton parecem sempre ter estado aqui. Ninguém vivo tem qualquer memória dos primeiros povos humanos do Deserto da Perdição, e mesmo estes são recentes em comparação ao império que existiu lá no passado. Doherimm remonta sua história literalmente até a criação dos anões — povo e terra como um só, desde o início. Os relatos sobre a formação de Ubani são tão antigos e extraordinários que soam como lendas. Mesmo Tamu-ra, terra que foi unificada há alguns séculos, desenvolve sua cultura de forma contínua há milênios. Khubar, talvez o caso mais extremo, chega a possuir um livro com milhares de anos de idade com sua história.

  Os povos além de Arton sentem-se ligados a suas terras de uma forma que muitos habitantes do Reinado sequer podem compreender. Em geral não são imigrantes ou refugiados: sabem que os ancestrais de seus ancestrais viveram exatamente no mesmo lugar. A sensação de pertencimento é tamanha que a maioria nem cogita que um dia possam deixar seus lares. Quando os habitantes de Tamu-ra foram obrigados a deixar sua ilha durante o primeiro ataque da Tormenta, salvos por seu imperador, a mudança foi um evento tão traumático quanto a própria tempestade. Quando houve chance de reconstruir o Império de Jade, quase todos imediatamente desejaram voltar.

  Isso significa que cada família, mesmo as mais humildes, conhece suas origens. Geração após geração cresce com as histórias de antepassados que existiram eras atrás. Plebeus vivem em casas construídas antes da formação do Reinado e reis muitas vezes têm em sua linhagem uma centelha divina, ou ao menos interações importantes com algum deus. Enquanto a autoridade da Rainha-Imperatriz é mundana e baseada em ideologia, a autoridade dos kipanes ou dos tamalus é mística e baseada em feitos espantosos. Tamu-ra é especialmente protegida por um deus maior, cuja identidade está intimamente ligada à terra. Até mesmo Lamnor, que emergiu como grande civilização há poucas décadas, abriga povos que vivem aqui desde antes da história registrada.

  Muitas dessas nações demonstram enorme resiliência — além de bastante resistência a mudanças. Enquanto a descoberta da estátua de Valkaria foi uma virada colossal na história do continente norte, o próprio aprisionamento da deusa é um evento recente e talvez uma mera nota de rodapé na história das civilizações além de Arton. Estas terras veem a constante mudança de regentes e formas de governo no Reinado como caos absoluto, um período transitório enquanto as “crianças” aprendem o que eles mesmos já sabem há milênios. Para um sar-allan, toda a história do continente até agora pode ser resumida como “algumas populações aprendendo a lidar com as consequências da Revolta dos Três”.`
      },
      {
        title: "Costumes Arraigados",
        content: `Não existe nada “exótico” ou “pitoresco” no mundo de Arton — aquilo que é inusitado para um povo é totalmente corriqueiro para outro. Quando um artoniano fala em “aventureiros esquisitos”, está se referindo a alguém que mescla elementos de vários povos ou lugares, ou ainda alguém que vá contra as tradições. Qualquer costume é “normal”, porque faz parte da vivência de alguma população.

  Isso é especialmente verdadeiro nas terras além de Arton. Costumes, tradições, vestimentas, ditados e outros elementos culturais não são detalhes, não são preferências: fazem parte da existência destes povos tanto quanto seu idioma ou suas habitações.

  A tendência dos doheritas à mineração não é uma questão de ganância, nem um estereótipo. Os anões de Doherimm precisaram escavar túneis desde sua criação, para ter onde viver. Para eles, escavar túneis significava literalmente expandir o mundo! Não havia opção a não ser minerar. Da mesma forma, o militarismo de boa parte dos duyshidakk não é sanha conquistadora ou agressividade inata. Sua história, muito antes da chegada dos elfos, foi moldada por conflitos e sua civilização foi construída com base na certeza de que era necessário lutar para sobreviver.

  No continente norte, mesmo as nações mais apegadas a seu modo de vida poderiam fazer as coisas de maneira diferente. Toda a cultura de Sckharshantallas é baseada na figura do dragão… Mas, caso Sckhar um dia desaparecesse, seria possível viver no reino sem ele. Contudo, é impossível viver no Deserto da Perdição sem usar as roupas que protegem contra o sol de dia e contra o frio à noite, ou sem a matemática que possibilita compreender os portais nas tempestades de areia. Da mesma forma, um habitante de Khubar não tem opção a não ser conhecer o mar. Na verdade, a comparação de Khubar com Sckharshantallas é curiosa: caso Benthos desaparecesse, talvez fosse impossível viver no arquipélago! Afinal, a presença do Dragão-Rei impediu pelo menos duas ameaças à própria existência dessa terra.

  Isso não significa que essas populações sejam moldadas unicamente pelo lugar onde vivem — significa, isso sim, que muitas vezes têm uma verdadeira simbiose com seu lar. A Grande Savana existe da forma que existe por influência dos ubaneri, que por sua vez baseiam seus costumes no respeito pelos elementais que habitam a região. O respeito aos druidas em Galrasia se origina em grande parte da interação com a flora que existe na ilha — e a ilha foi moldada pela influência divina. Para os povos além de Arton, cultura, costumes e terra se mesclam numa forte identidade. Não é surpresa que os goblinoides não vejam grandes diferenças raciais entre si: vivem em Lamnor, têm tradições coletivas e se consideram todos duyshidakk.`
      },
      {
        title: "Deuses Padroeiros",
        content: `Muitas terras além de Arton têm uma relação mais íntima com as divindades do que seus vizinhos do continente norte. Além disso, muitos desses povos concentram sua religiosidade em um ou dois deuses — não apenas devotando-se a eles, mas praticamente ignorando o resto do Panteão!

  Talvez o caso mais simbólico seja a relação entre Tamu-ra e Lin-Wu. Enquanto um tamuraniano típico simplesmente vê seu deus patrono como a forma divina de suas tradições e modo de pensar, um estrangeiro típico tem dificuldade em caracterizar Lin-Wu de qualquer forma além de “o deus de Tamu-ra”. Religião, costume, terra e população existem de forma unificada.

  Isso não significa que os povos além de Arton tenham menos diversidade de pensamento, ou mesmo que não possam cultuar outros deuses. Mas a presença de algumas divindades não pode ser ignorada. Um habitante do Deserto da Perdição necessariamente lida com a influência de Azgher: sendo ou não um devoto, deve se preocupar com o calor de dia e o frio à noite, deve respeitar o deus e adaptar-se a suas exigências. Um valkariano pode passar a vida toda sem nenhuma relação com a Deusa da Humanidade, mas todo sar-allan tem uma relação íntima com o Deus-Sol. Da mesma forma, os moreau pediram ativamente a seus deuses para serem moldados da forma que são. Mesmo o maior devoto de Valkaria não pode dizer que sua existência é literalmente a realização de um desejo por sua deusa.

  No caso de Doherimm, Tenebra existe em todos os lugares: a escuridão é parte intrínseca de seu mundo. Da mesma forma, Khalmyr deixou ali sua chama como uma prova e um lembrete físicos da presença do Deus da Justiça — e mais tarde confiou aos anões a proteção de sua espada. O maior ladrão e vigarista de Doher pode até odiar Khalmyr, mas não pode ignorá-lo.

  Os Três Mares são um caso peculiar. Os piratas que povoam (ou infestam…) essas águas nunca demonstraram grande devoção, mas sempre viveram em contato com um deus — segundo alguns, sempre viveram na manifestação material do próprio deus! Assim, quando Oceano desapareceu, imediatamente surgiu uma facção pirata devotada a ele, que existe para procurá-lo. O Deus dos Mares sempre foi parte intrínseca desse lugar e sua ausência abalou o modo de vida dos piratas.

  O epítome da relação íntima com um deus patrono são os duyshidakk. Muitos que estão vivos hoje conheceram pessoalmente Thwor, antes de sua ascensão. Mesmo aqueles que nunca interagiram com ele podem ter ouvido algum discurso, lutado sob sua liderança ou, no mínimo, avistado o Ayrrak de longe. Quase nenhum outro artoniano já experimentou tamanha proximidade com um deus maior, pelo menos entre o povo comum. Para um plebeu do Reinado, Lena é uma presença etérea e distante. Para um simples goblin de Lamnor, Thwor é uma realidade física e próxima.`
      },
      {
        title: "Outros Mundos",
        content: `Embora façam parte do mesmo mundo num sentido estrito, as terras além de Arton representam existências diferentes, independentes, paralelas e muitas vezes isoladas. Ao se deparar com estas civilizações, um sábio muitas vezes percebe que não conhece na verdade a história de Arton.

  Conhece uma história de uma Arton.`
      }
    ]
  }
];

// --- Regiões ---

export const regioes: Region[] = [
  // Exemplo COMPLETO (região grande, com mapa, brasão e caixa de informações)
  { id: "deheon",
  name: "Deheon",
  subtitle: "O Reino Capital",
  tag: "Reinado",
  image: "/regioes/deheon.png", // Caminho ilustrativo, ajuste conforme necessário
  coatOfArms: "/regioes/deheon-brasao.png", // Caminho ilustrativo
  map: "/regioes/deheon-mapa.png", // Caminho ilustrativo
  intro: `A Terra da Bem-Aventurança. Mãe das Mil Caravanas. O Coração de Arton. Inúmeras são as alcunhas da nação fundadora do Reinado. Dentro da atípica fronteira circular que a delimita, seu território é cortado por estradas e aquedutos indo em direção à sagrada metrópole de Valkaria. Tanto feudos fortificados quanto aldeias independentes saltam aos olhos, entre bosques, colinas, campos de grãos e pastos verdejantes. Graças à importância políticoreligiosa da capital no meio do reino, além da forte economia baseada em agropecuária e na produção de todo tipo de manufatura arcana, Deheon é considerado o centro do mundo para as muitas culturas que o habitam. E um bom lugar para morar.

Aqui, mesmo o mais pobre camponês não passa por grandes privações, existindo em segurança. Ou pelo menos com a maior estabilidade possível em um mundo onde exércitos marcham sobre a terra, vilões criam planos malignos e mesmo os deuses não têm suas vidas garantidas. Essa opulência mudou durante a Guerra Artoniana, quando a capital foi sitiada e o interior, saqueado. Ainda assim, o padrão de vida deheoni costuma ser superior ao da maioria dos reinos artonianos. Acima de tudo, este é um lugar de oportunidades e esperança — tendo sido por séculos a morada da própria Deusa da Aventura, algo na terra de Deheon parece impulsionar as pessoas a ser mais ousadas e valentes, a partir em busca de seus sonhos e desejos. A ir mais além.`,
  facts: [
    { label: "Nome Oficial", value: "Sacro Reino-Capitânia de Deheon." },
    { label: "Lema", value: "“Mais Além”." },
    { label: "Brasão", value: "de prata a estátua de Valkaria de sua cor." },
    { label: "Gentílico", value: "deheoni." },
    { label: "Capital", value: "Cidade de Valkaria." },
    { label: "Forma de Governo", value: "monarquia eletiva." },
    { label: "Regente", value: "Sua Majestade Real Imperial Shivara I do Reinado." },
    { label: "População", value: "6.450.000." },
    { label: "Raças Principais", value: "humanos, goblins, anões, elfos, hynne." },
    { label: "Divindades Principais", value: "Valkaria, Khalmyr, Tibar, Azgher, Hyninn, Lena, Lin-Wu, Marah, Thyatis, Tanna-Toh, Wynna." }
  ],
  sections: [
    {
      title: "História",
      content: `Deheon é um país acolhedor, mas repleto de contradições. Contém desde centros urbanos superpovoados até aldeias em ermos perigosos. Viver em seu território vibrante e colorido pode ser muitas coisas, menos monótono. E, como qualquer nação que enxerga a si mesma como centro de poder e riqueza, este é um lugar repleto de segredos.

O passado do reino se confunde com o do Reinado e de sua capital. No centro de um fértil vale entre dois rios, hoje chamados Fortitude e Nerull, foi erguida a cidade sagrada de Valkaria. O local escolhido pelos refugiados do continente sul para fundá-la teve uma motivação religiosa: ali ficava a colossal estátua da Deusa da Humanidade com os braços erguidos ao céu, abençoando todos que desejassem abrigar-se sob sua sombra.

Embora os peregrinos não soubessem disso, aquela era a forma pétrea da própria deusa que os criara. A estátua servia como âncora para uma masmorra interdimensional onde a essência de Valkaria fora aprisionada após a trágica Revolta dos Três. No futuro, caberia à humanidade encontrar uma forma de acessar esse labirinto e resgatar a própria criadora, provando ser capaz de vencer seu desafio.

A primeira noção de um reino no novo continente surgiu quando, aproximando-se de Valkaria, Roramar Pruss descobriu que era capaz de operar milagres. Como o primeiro clérigo lamnoriano da Deusa da Humanidade em séculos, ele foi exaltado e coroado. Ainda não se sabia qual seria o reino, mas todos gritavam o nome do Rei Roramar I.

Mas como Valkaria passou de uma estátua e um local de peregrinação a uma metrópole? Dizem que Deheon começou com “uma fonte e um templo”, as primeiras construções simbólicas de um povoado.

A fonte foi um dos muitos milagres realizados pelo lendário Rei Roramar. O líder dos exilados teria conjurado uma coluna de água gélida das entranhas da terra, que logo se converteu em uma nascente para saciar milhares de exilados lamnorianos assentados próximos à estátua. Nas décadas seguintes, os povoadores tomariam para si a missão de construir canais e aquedutos a partir dos rios vizinhos, regando com vida a cidade predestinada a superar todas as outras.

Já o tal templo — erigido de frente para a divindade e consagrado em seu nome — seria a semente do que viria, séculos mais tarde, a ser reestruturado por anões e convertido no Palácio Imperial. Foi ao redor desse templo que partiram com timidez os muros primordiais da vila: toscas e rudimentares paliçadas. Este início pode não ter sido uma visão tão impressionante. No entanto, foi assim que, sob a proteção de Valkaria, a Deusa dos Heróis, nascia Valkaria, a Capital do Mundo.

Um lugar tão importante merece ser apresentado em detalhes. Assim, a cidade de Valkaria é descrita em sua própria seção. O reino, no entanto, não se resume à capital.

### De acampamento de refugiados a reino-mor
Relatos de antigos cronistas podem fazer crer que Deheon era um lugar vazio, no meio do nada, apenas esperando para ser clamado pelos povos do sul. Embora a capital realmente tenha sido erguida do zero e boa parte do vale fosse despovoada, havia um motivo para estar assim.

Humanos nativos da região cultuavam a deusa petrificada Valkaria, mas seus costumes e crenças eram bastante diferentes entre si. Alguns, como os antigos palídoros, acreditavam que aquelas terras deveriam ser deixadas para sempre intocadas. Outros, tais quais os gormaor e os houhynn, enxergavam a estátua como o cárcere de uma força que poderia um dia despertar, pisoteando tudo em seu caminho. Melhor ficar longe! Os orgulhosos odassi usavam as colinas próximas à estátua para seus cemitérios destinados a combatentes de valor vencidos em batalha, enquanto clãs como os dohanni, os neruscos, os selenitas e os villeus não hesitavam em atravessar os rios da região para caçar, pescar, orar ou travar guerras com outros povos, acabando por estabelecer entrepostos temporários no terreno. Havia ainda tribos de humanoides como os tabrachi, um povo-sapo que vive no peçonhento Pântano dos Juncos, o culto matriarcal das medusas na Floresta dos Basiliscos e os míticos soldados mortos-vivos vagando pela sombria Desolação.

Sem ainda ter travado contato direto com todos os nativos dessas terras e desconhecendo sua cultura, os membros da Caravana dos Exilados foram considerados invasores por alguns destes povos e atacados. Sem ter como voltar atrás, precisaram se defender. Como já vinha acontecendo, tiveram relações pacíficas com outros. Houve também povos que preferiram evitá-los e ignorá-los.

Após os primeiros anos do assentamento, graças aos esforços diplomáticos dos clérigos de Marah, Tanna-Toh e Valkaria, as hostilidades de ambos os lados cessariam. Ao ver que o assentamento nas proximidades da estátua não despertava a ira divina, muitos clérigos nativos interpretaram isso como um bom sinal.

O fato de um povo vindo de um continente longínquo cultuar uma deusa local também serviu para fazer uma ponte entre as culturas. Comércio já tomava lugar entre nortistas e sulistas, e muitos ramnorianos, com o tempo, acabaram se mudando para junto da estátua e fundindo-se ao núcleo de povoadores. Com a expansão constante do povoado, aldeias mais distantes foram englobadas, tornando-se então bairros e distritos. Surgia a multifacetada identidade deheoni.

Não se sabe a origem da palavra “Deheon”. Alguns especulam que seria um termo num idioma local, outros garantem que era o nome de um antepassado de Roramar. Um dos boatos mais interessantes diz que é uma palavra sem significado, algo que apenas soa como pertencente a vários dialetos do norte e do sul — mais uma manobra genial do primeiro rei. Seja como for, o termo nunca parece ter sido contestado. Ainda durante a vida de Roramar, tanto refugiados quanto habitantes originais passaram a usar “Deheon” para descrever a terra onde agora viviam.

O Rei Roramar delimitou os limites de seu domínio segundo o poder divino da deusa que o guiara desde a infância. O novo reino teria uma fronteira circular, marcada pela distância onde o próprio rei e os demais sacerdotes de Valkaria perdiam o contato com sua padroeira. Assim, Deheon nascia como uma nação predestinada, uma terra desenhada pela vontade divina. O novo lar que os lamnorianos buscavam e uma grande transformação na vida dos povos originais de Ramnor.

Uma nova contribuição valiosa ao assentamento viria das Amazonas de Hippion, uma nação de humanas guerreiras das pradarias do norte. Perseguindo seu mito de origem, elas peregrinavam a cada cinco anos de volta a Deheon para rever sua terra mãe. A rainha das Amazonas, Yvanna I, casaria-se com Roramar, após ajudar o monarca clérigo a derrotar um ataque de Teldiskan, o Gigante Máximo. Selaria assim uma aliança com os deheoni. O gigante acabou banido para as montanhas que receberiam seu nome, onde até hoje existe um templo erguido por essas peregrinas.

### Mais além
Seguindo sua natureza insatisfeita, os humanos na cidade de Valkaria não permaneceram todos aos pés da estátua da deusa. Muitos partiram em busca de novas terras e aventuras.

De Deheon saíram diversas expedições que costuraram a tênue união entre as nações humanas do norte. Daqui partiram as caravanas de heróis como o desbravador Cyrandur Wallas, que atravessou as Montanhas Uivantes, e a do ávido cavaleiro Thomas Lendilkar, conquistador das terras do futuro reino de Bielefeld. Também foi o ponto de origem de facções descontentes, como aquelas lideradas pelo honrado paladino do sol Morkh Amhor, a pérfida família Yudennach ou a trágica e desafortunada Caravana sem Deuses. As políticas do filho e herdeiro político direto de Roramar, o Rei-Imperador Wortar I, tiveram papel decisivo nessa expansão, levando ao contato com outras sociedades do continente de Ramnor.

Sobre as mesmas antigas trilhas do norte que essas incursões seguiram, surgiriam depois as estradas que se tornaram o principal itinerário comercial do continente. Ainda hoje os caminhos centenários continuam vendo uma boa quantidade de trânsito, com comboios de carroças protegidos por heróis. Por esses trajetos são encontrados os múltiplos vilarejos e feudos que compõem aquele que hoje é um dos reinos mais prósperos de Arton.

Longe delas, Deheon continua abrigando montanhas e bosques profundos, ocultando monstros e ruínas misteriosas da era pré-povoamento. Vale notar: mesmo aquele que é chamado de centro da civilização por muitos habitantes do Reinado tem até hoje territórios onde existem ermos indomados e famintos. Mas esses lugares passariam a coexistir com a ruidosa metrópole pulsando como um coração no centro do reino. Com o explosivo crescimento do centro populacional de Valkaria, no decurso do tempo, novos muros eram erguidos, cada vez mais grandiosos, impenetráveis e distantes da estátua da deusa.

Deheon cresceria junto. Mas tampouco seria o único a se expandir.

O Reino de Yudennach, liderado pela família de mesmo nome, começou uma campanha de conquistas militares em 1075, culminando na imersão dos deheoni em uma guerra civil — o triste prenúncio daquilo que viria, séculos mais tarde, a ser o maior conflito já visto pelos artonianos. Este primeiro confronto foi estancado, mas não seria nem a primeira nem a última atribulação tumultuando o Coração de Arton. Em 1381 aconteceu o infame Dia dos Gigantes, a batalha de dois colossos vindos de outra dimensão, que se digladiaram por Valkaria, destruindo edifícios e pisoteando transeuntes! Este evento não só marcaria a primeira aparição do vilão Mestre Arsenal, como deixaria uma marca funda no caráter deheoni: por fora, a imagem de gente aguerrida, acostumada a lidar com catástrofes e dar de ombros diante de situações absurdas. Por dentro, as feridas emocionais de quem sofreu inúmeras perdas e tem a certeza de ser uma mosca em meio a toda sorte de entidades poderosíssimas que povoam a Criação.

Quando, em 1401, a Deusa da Humanidade foi finalmente solta de seu cativeiro, houve euforia. Um grupo de heróis conhecidos como os Libertadores recebera uma pista encontrada pelo sumo-sacerdote de Valkaria, Hennd Kalamar, após salvá-lo de cultistas sszzaazitas. O devoto descobriu como adentrar a estátua da deusa e o grupo prosseguiu para lá, vencendo os desafios de vinte labirintos arquitetados pelas divindades do Panteão. O que encontraram no último deles até hoje é objeto de histórias e especulação, mas a verdade é só uma: Valkaria estava de volta.

Com o retorno da Deusa da Humanidade, seus clérigos estavam livres para viajar aonde quisessem, sem perder seus poderes. Naquele momento, o otimismo do povo deheoni era ilimitado, as pessoas acreditavam em um amanhã no qual tudo era possível. Só com a futura ascensão de Valkaria à liderança do Panteão, 16 anos depois, voltariam a experimentar tal sentimento.

A verdade é que a mudança de dogmas com a libertação significava que agora uma boa parte do clero, antes dedicada a vigiar dentro de Deheon e ajudar a população comum com suas curas mágicas, agora precisava se deslocar continuamente, pregando a palavra em lugares distantes. Um alento para os fiéis, mas uma perda sentida pela população comum. E mais tragédias estariam por vir.

### Dois cercos
Tempos sombrios trouxeram um obstáculo à prosperidade de Deheon. Embora desde sua fundação a capital tivesse testemunhado eventos grandiosos, até aquele momento nunca havia de fato experimentado os horrores de um conflito prolongado.

Em 1406, uma série de incidentes diplomáticos com a República de Tapista, que então era membro do Reinado, levaria as legiões dos minotauros aos portões de Valkaria sob a liderança do princeps Aurakas e, após um curto período de cerco, essas tropas venceriam os muros. O Rei-Imperador Thormy, último descendente da orgulhosa dinastia roramariana, se entregou como refém para impedir uma guerra total e um banho de sangue. Abdicou em favor de Shivara Sharpblade, então rainha de Trebuck, que foi apontada como sua sucessora e eleita.

Seguiria-se a desintegração parcial do Reinado, com os reinos do oeste anexados pelo Império de Tauron — ou, como dizia a infame profecia da Flecha de Fogo: “Um rei partirá sua coroa em duas”. Mas isso era apenas o prenúncio de um conflito maior. Pois, de acordo com essa mesma premonição, um dia, a guerra tomaria a tudo e a todos.

Foi o que aconteceu com o advento da Guerra Artoniana.

Estes foram os Anos do Maremoto, quando o trono deheoni permaneceu vazio. Com o desaparecimento da Rainha-Imperatriz, Deheon foi governado pelo Pequeno Conselho de Valkaria, um grupo de nobres e cortesãos. Eram regentes, mas não governantes imbuídos de legitimidade.

A nação inicialmente hesitou em avançar contra a ameaça do Exército Purista. Quando o fez, foi tarde demais. Atraída para uma armadilha junto aos cavaleiros de Bielefeld, teve um imenso número de tropas massacradas na Batalha do Baixo Iörvaen. Após esse revés, os puristas ganharam território. O que outrora parecia impensável aconteceu uma segunda vez: a capital foi sitiada.

Esse cerco não durou dias nem mesmo meses: arrastou-se por anos. A capital só sobreviveu devido à presença de heróis épicos que conjuravam milagres para sustentar a população, enquanto mantinham as armas de guerra inimigas sob a mira de poderosas magias e golpes avassaladores. Ainda assim, muitos setores da cidade foram danificados.

O interior sofreu ainda mais. Habitantes de vilas e feudos que não conseguiram recuar até a segurança dos muros de Valkaria foram presos e torturados. Anões, elfos, goblins e membros de qualquer povo não considerado “puro” pelos supremacistas foram executados ou entregues a seus aliados finntroll para serem escravizados. A mesma pena valia para quem ajudasse esses prisioneiros.

Uma verdade incômoda é que alguns nobres e burgomestres deheoni se aliaram ao invasor purista, seja por conveniência, seja por partilharem de sua crença herética. Os campos foram queimados e salgados quando a Supremacia foi vencida e recuou. As terras só voltaram a florescer graças à interferência direta de Lisandra, a sumo-sacerdotisa de Allihanna, e outros druidas poderosos.

Hoje, com o retorno da Rainha-Imperatriz Shivara I ao trono, políticas de reocupação e reconstrução dessas terras têm sido colocadas em andamento. Aos poucos, o reino está voltando a ser verde e próspero, embora as cicatrizes dos últimos conflitos ainda marquem os campos de Deheon.`,
      sidebars: [
        {
          title: "As Amazonas de Hippion",
          content: `Separados do resto da sociedade, grupos de mulheres guerreiras treinam e vivem sob suas próprias regras. São as Amazonas de Hippion, um dos povos originários de Ramnor, hoje conhecida como Arton Norte. Foram uma das primeiras civilizações a receber a Caravana dos Exilados que veio de Lamnor, estabelecendo um contato pacífico com os recém-chegados.

Não se sabe quando este povo se originou, mas sua história remonta a tempos míticos. Os registros mais antigos já falam de uma sociedade reclusa, composta unicamente de mulheres que caçavam e guerreavam sobre cavalos. As amazonas sempre tiveram um grande vínculo com esses animais e sempre prestaram respeito a Hippion, o Deus Menor dos Cavalos, em conjunto com sua mãe e padroeira Valkaria. Embora o povo original conhecido como “amazonas” seja humano, estas guerreiras sempre aceitaram mulheres de todas as raças que buscassem segurança e liberdade, especialmente as que fogem de sociedades opressoras. Ultimamente, dahllan órfãs têm sido comuns entre aquelas que buscam abrigo neste povo.

As amazonas não fazem distinção entre tipos de mulheres — todas podem ser aceitas em seu meio, mesmo as que demoraram para perceber que o são. Quando uma delas tem um filho homem, entrega-o para ser criado pelo pai ou deixa-o em templos de Valkaria. Não obrigam meninas nascidas entre elas a ficar, mas cobram excelência e coragem daquelas que escolhem fazer parte. Ser uma amazona é uma honra a ser conquistada, não apenas um acaso de nascença.

Hoje, as amazonas vivem em povoados temporários ao redor de Arton, onde sobrevivem da agricultura e da caça. São nômades, existindo em um lugar por algum tempo, então partindo em seus cavalos para outro povoamento vazio e permitindo que outro grupo de amazonas ocupe o território que acabaram de deixar.

Isso é tradicionalmente uma tática de sobrevivência, já que várias amazonas eram fugitivas de suas terras de origem — fixar raízes em um lugar soa como vulnerabilidade para elas. Isso também as torna perfeitas devotas de Valkaria, a ponto de algumas sacerdotisas afirmarem que o nomadismo foi incutido profeticamente neste povo, em preparação à libertação da deusa. Todas as amazonas são treinadas em combate, pois sua sociedade ensina que devem estar prontas a lutar por sua liberdade e seus costumes a qualquer momento. Podem combater com qualquer tipo de arma, mas são particularmente boas com arcos, azagaias e lanças, defendendo seu território à distância quando atacadas.

A tradição de casamento entre a rainha amazona e o rei de Deheon faz com que tenham status especial neste reino, sendo consideradas cavaleiras (ou seja, parte do nível mais baixo da nobreza) automaticamente. Isso provoca asco nos nobres mais arrogantes de Deheon, mas quase nenhum tem coragem de contradizer uma doutrina tão arraigada — ou de expor suas opiniões frente a uma amazona.`
        }
      ]
    },
    {
      title: "Geografia",
      content: `A maior parte do reino possui clima subtropical, bastante propício a lavouras e pecuária — o motor econômico do interior de Deheon. No oeste, porém, a proximidade com as Uivantes torna a região sujeita ao frio mágico que emana dessas montanhas. Nessa região, há florestas temperadas e os invernos costumam ser rigorosos, com a presença de nevascas que mantêm os habitantes trancados em casa por longos períodos. A atividade rural cessa, mas, quando precedido por colheitas fartas, isso não costuma ser um incômodo aos camponeses, que têm nessa época do ano mais tempo para dedicar à família.

A fronteira do reino é algo único. Demarcada por monólitos patrulhados por cavaleiros, ela possui o formato de um círculo (exceto por uma pequena região irregular). Esse era o ponto onde, antes da libertação da deusa, o Rei Roramar perdia seus poderes de clérigo, por se afastar demais da estátua de Valkaria.

Ao nordeste, em tempos atuais essa fronteira também é abruptamente cortada pela Garganta do Troll, surgida durante a última grande guerra e um dos marcos históricos desse conflito. Além dela ficam as terras da Supremacia Purista, uma potência militar hostil. Ao norte, Deheon faz fronteira com Zakharov, o Reino das Armas. Ao sudeste, com Wynlla, o Reino da Magia. Ao sudoeste, com Ahlen, o Reino da Intriga. Ao oeste, com as Uivantes. E, ao sul, com as Ruínas de Tyrondir. Em teoria, apenas essa última fronteira é perigosa — das Ruínas, eventualmente surgem batalhões duyshidakk ou bandos de saqueadores humanos. Contudo, nenhum deheoni sensato confia muito em seus vizinhos de Ahlen e mesmo de Wynlla pode surgir alguma ameaça mágica.

> “O casamento do Rei Roramar I com a Rainha Yvanna das Amazonas marcou uma amizade eterna entre as duas nações, que ainda assim sempre mantiveram sua independência. Vários descendentes da linhagem roramariana desde então casam-se com chefes amazonas. Isso, além de reencenar a batalha contra o Gigante Máximo, cumpre um objetivo mais pragmático: demonstrar que Reis-Imperadores e Rainhas-Imperatrizes, ao desposar governantes de um povo nômade, não estão ligados formalmente a nenhum outro reino. Evitam assim demonstrar favoritismo a uma das outras nações que fazem parte da coalizão, adotando uma posição conciliatória que os manteve no poder durante muitos anos, mesmo dentro do sistema monárquico eletivo proposto por Wortar II. De fato, embora não arbitrem sobre a soberania de outros membros do Reinado, monarcas-imperiais desempenham o papel de mediação dos diversos membros da aliança, e em tempos de guerra lideram os reinos signatários do pacto…”
> — Aelia de Ridembarr, cronista e autora de A Linhagem Roramariana`
    },
    {
      title: "Povo & Costumes",
      content: `Deheon tem enorme diversidade: gente pertencente a qualquer raça, povo e cultura pode ser encontrada aqui. O reino conta tanto com centros urbanos agitados quanto com povoados em ermos remotos.

Há monstros errantes que se reproduzem como praga em fazendas e bestas atrozes longe das rotas principais. Mas, ao viajar por estradas, em vez de se deparar com seres como goblins ou trogs bandoleiros, não é raro avistá-los vivendo em meio a aldeias bucólicas construídas em volta de rodas d’água. Com a devastação causada pela ocupação purista, muitos têm optado por se mudar para o campo, aceitando incentivos em terras e ouro, oferecidos pela coroa para o repovoamento do interior.

Mesmo em pequenas aldeias os habitantes de Deheon são pouco provincianos ou supersticiosos. Magia ou seres exóticos podem ser tratados com certa curiosidade, mas dificilmente enfrentarão qualquer tipo de comportamento hostil. Mesmo criaturas como golens e osteon são hoje cidadãos protegidos pela lei da Rainha-Imperatriz Shivara I. Apesar dessa tolerância, existem setores mais sectários em algumas camadas da população, especialmente entre nobres com alguma ligação com a Supremacia ou Zakharov. E os lefou — os filhos da Tormenta — ainda lutam para encontrar lugar e aceitação, mesmo dentro dessa sociedade cosmopolita.

Os deheoni valorizam a independência e priorizam o trabalho. Casamentos, além de afeto, têm motivações econômicas e práticas, como dividir despesas ou fazer alianças entre as famílias dos cônjuges. As cerimônias costumam ser celebradas pelas igrejas de Khalmyr, Lena ou Marah, ou de acordo com as devoções dos noivos. Curiosamente, como devotos de Valkaria não podem se casar, a igreja da Deusa da Ambição não costuma se envolver nessas cerimônias. Os casamentos ocorrem normalmente entre pessoas de qualquer sexo ou gênero, podendo englobar dois, três ou mais noivos, embora os tradicionalistas clérigos de Khalmyr ainda torçam o nariz para casamentos entre mais de dois participantes.

O povo demonstra comportamento reservado e apressado no dia a dia. Um deheoni dificilmente interrompe seus afazeres para oferecer ajuda a alguém, a menos que lhe peçam. Permitem-se relaxar apenas durante o frio, em casa ou bebendo em tavernas, o centro da vida social e comunitária. Em tais estabelecimentos, cartazes com ofertas de trabalho (incluindo missões para aventureiros) são comuns nas paredes e murais.

Devido à enorme quantidade de eventos históricos envolvendo Deheon e à presença de incontáveis heróis na capital, quase todo deheoni tem alguma história épica envolvendo a si mesmo ou sua família. Talvez sua mãe tenha vendido uma carroça cheia de presuntos a Klunc, talvez seu avô tenha morrido na vila de Kham. Os deheoni adoram impressionar estrangeiros com esses relatos, agindo como se tais acontecimentos fossem “normais” no reino.

Os jovens costumam deixar seus lares aos 15 anos para “se aventurar”. Seja isso entendido como perseguir a carreira de um herói andarilho, seja conseguir trabalho como aprendiz nas guildas das grandes cidades.

Sem grandes surpresas, Valkaria é a principal divindade venerada no reino. Em segundo lugar vem Khalmyr, o Deus da Justiça, seguido por Lena, a Deusa da Vida, e Tibar, o Deus Menor do Comércio. São comuns ainda devotos de Azgher, Hyninn, Lin-Wu, Marah, Thyatis, Tanna-Toh e Wynna. Seguidores de Allihanna, Arsenal, Thwor, Megalokk, Kallyadranoch e Tenebra são incomuns, mas podem ser encontrados em pontos isolados. Cultistas de Sszzaas e Aharadak são muito raros, mencionados apenas em boatos e temidos pela população geral.`
    },
    {
      title: "Governo",
      content: `Quem governa Deheon por tradição também governa a capital Valkaria e o próprio Reinado, embora o monarca quase nunca exerça seu poder sobre a cidade e não necessariamente seja aceito como Rei-Imperador. A autoridade emana da coroa da Rainha-Imperatriz cercada de vassalos, que por sua vez têm seus próprios vassalos e assim por diante. Em tese, quem senta no trono detém todo o poder. A verdade é um pouco mais complexa.

A Rainha-Imperatriz atual é Shivara I, natural do antigo reino de Trebuck, nascida na família Sharpblade. Considerada uma das maiores heroínas do mundo, Shivara foi aventureira e assumiu o trono de seu reino natal ainda jovem. Quando Trebuck foi atacado pela Tormenta, Shivara intercedeu com o então Rei-Imperador para criar o Exército do Reinado, uma das maiores forças de união e estabilidade do continente. É impossível imaginar o que teria acontecido ao Reinado sem a iniciativa de Shivara. A rainha se casou com o Príncipe Mitkov Yudennach, travando uma aliança crucial, apesar de odiá-lo. Quando este foi banido, Shivara passou a governar também o Exército com uma Nação, embora por um curto período. Quando o Rei-Imperador Thormy abdicou em seu nome, nenhum nobre ousou contestar a decisão. Arton como um todo gritava o nome de Shivara.

Mas Shivara não é onipresente e decisões envolvendo Deheon muitas vezes acabam tendo baixa prioridade, enquanto ela lida com ameaças ao continente, ao mundo ou aos reinos dos deuses… A Rainha-Imperatriz se ocupa, na maior parte do tempo, de missões diplomáticas entre as nações e assuntos envolvendo a aliança como um todo. Sendo assim, o interior do reino é administrado pelos Cinco Grandes Duques, altos nobres e vassalos diretos da rainha. Há um Grande Duque para cada ponto cardeal, mais o Grande Duque do Vale, responsável pela região central de Deheon, entre os rios Nerull e Fortitude (mas sem autoridade sobre a capital). Abaixo dos Cinco Grandes Duques há pequenos nobres (barões ou condes de pouco poder) que lideram terras habitadas por plebeus, ou burgomestres de vilas e pequenas cidades.`
    },
    {
      title: "Locais Importantes",
      places: [
        {
          name: "Valkaria (Capital)",
          content: `A metrópole no coração de Deheon é a maior cidade do mundo conhecido, onde tudo pode existir. Veja sua descrição completa na página 68.`
        },
        {
          name: "Villent, a Cidade-Muralha",
          content: `Villent situa-se na fronteira com a Supremacia Purista e é a primeira e principal linha de defesa contra os batalhões puristas.

Construída por engenheiros anões, Villent nasceu como uma cidadela mineradora. Mas, por conta de sua localização estratégica, ao longo dos anos recebeu muralhas cada vez mais altas e espessas. Durante a Guerra Artoniana, foi sitiada, mas jamais caiu. Após o conflito, grandes esforços foram dedicados à expansão dos muros, que cresceram mais e mais, até engolir a cidadela! Villent se tornou uma cidademuralha — todas as casas, tavernas, oficinas, templos e outros prédios existindo dentro das paredes, em túneis claustrofóbicos.

Apesar de sua geografia peculiar, Villent é a segunda maior cidade do reino, atrás apenas da capital. Abriga uma grande guarnição do exército, o que atrai muitos mercadores e outras pessoas interessadas em oferecer serviços aos soldados. Além disso, as minas originais continuam funcionando e extraem boa parte dos metais utilizados no reino.

Villent fica próxima à Garganta do Troll. Assim, além de defender a superfície contra a Supremacia, as tropas da cidade vigiam passagens subterrâneas do gigantesco desfiladeiro. Por isso, têm procurado grupos de heróis para lidar com essas ameaças. O pagamento é bom, mas envolve acomodações rústicas junto a mineradores que jamais veem a luz do sol e cultuam Tenebra, a Deusa das Trevas. Além disso, muitas seções da cidadela danificadas durante a guerra ainda não foram consertadas e há trechos inteiros em ruínas, assombrados por espíritos de soldados mortos e ocupados por todo tipo de monstro.

Por sua importância histórica e sua segurança, Villent muitas vezes é palco de reuniões entre nobres de diferentes reinos, acordos diplomáticos e outros encontros de figurões. Como o espaço dentro das muralhas é reduzido, não é raro encontrar um herói épico nos corredores ou dividindo a mesma mesa num refeitório qualquer. O ambiente de militares e mineradores acaba com as formalidades e deixa todos mais próximos uns dos outros.

A cidadela é governada pelo Arquiduque Marechal Sir Bradwen Lança Dourada, comandante do Exército do Reinado. Porém, devido às inúmeras obrigações do Arquiduque, ele muitas vezes não está no local e deixa a administração a cargo do castelão Lovhar Vorillo Ghastis, seu homem de confiança. A Condestável Liamenor também pode ser encontrada aqui em certas ocasiões, quando não está patrulhando o restante da fronteira.`
        },
        {
          name: "Pequena Colina",
          content: `Uma das maiores comunidades hynne fora das Repúblicas Livres de Sambúrdia, abriga cerca de 2.000 desses seres e fica a poucos dias da capital. Pequena Colina fica no trajeto de quaisquer viajantes que venham de Valkaria pelo sul e, antigamente, poucos deixavam de aproveitar a hospitalidade hynne, relaxando em suas confortáveis estalagens, deliciando-se com sua comida farta e divertindo-se em suas festas. O topo da colina abriga o Templo da Alegria, onde louvam-se as deusas Lena e Marah.

Porém, desde a guerra há poucas notícias do lugar. A verdade é que Pequena Colina está presa em um feitiço planar poderoso, removida do fluxo do tempo. O responsável teria sido Hyninn, o Deus da Trapaça: ele protegeu os hynne durante uma incursão de soldados puristas, mas então vingou-se por nunca ter sido a divindade principal do lugar! Como resultado, todos os habitantes estariam agora presos para sempre na mesma data: o chatíssimo aniversário do prefeito. O dia sempre termina com o ataque dos puristas e, na manhã seguinte, não importa o que aconteça, tudo volta à estaca zero e os eventos se repetem.

Um avatar do próprio Deus Trapaceiro perambula pelo lugar na forma de um hynne mascarado e só terminará com tudo quando alguém ajudá-lo a pregar a maior das peças: converter todos os moradores locais a seu culto…`
        },
        {
          name: "Ridembarr",
          content: `Uma profusão de aldeias e cidades menores cerca a capital, tão minúsculas que nem constam nos mapas. Ridembarr está entre as mais típicas.

Fica a alguns dias de Valkaria, viajando a pé pela estrada. É composta por uma hospedaria e vinte ou trinta casas. O estabelecimento para descanso de viajantes pertence a Éster Heremill, atual regente e filha do antigo prefeito, morto na guerra. A cidade vive do comércio e da hospitalidade, abrigando viajantes que rumam para a capital. Por sua posição elevada, dali pode-se ver a gigantesca estátua da deusa ao longe.

Um pintor recluso de nome Grigori, que os ridembarianos dizem ter sofrido uma maldição, costumava ter um ateliê onde guardava retratos de criaturas estranhas, jamais reconhecidas por ninguém. Um dia, aos gritos, simplesmente ateou fogo em tudo e passou a morar na hospedaria. Sobre o que acontece ele nada diz, mas por alguns tibares ele pode pintar seu retrato!`
        },
        {
          name: "Selentine",
          content: `A vila de Selentine fica a cinco dias de viagem de Valkaria, nas margens do Rio Nerull. É conhecida por seus trabalhos em vidro e cristal. Os vidreiros locais descendem de antigos colonos do reino de Cobar e conseguem esculpir esses materiais de forma quase mística, produzindo as mais belas e resistentes peças de Arton atualmente. Copos, frascos, jarros, vitrais… Até espadas de vidro que nunca se quebram e nunca perdem o fio!

Há alguns anos, um inventor local, já falecido, criou aquele que foi supostamente o primeiro golem vítreo do mundo. Apelidado pelos jovens de Vitrúvio, hoje esse construto é mestre da guilda que comanda o local e tem uma série de “filhos” construídos por ele mesmo! A guilda, além de ser uma corporação de ofício de vidreiros, também funciona como conselho local e regulamenta o trabalho de heróis.

Uma recente adição à vila é o Empório de Elagor, um honesto paladino aposentado que abriu um armazém em busca de sossego. Tem sido visitado recentemente por Logan, guarda da capital também alçado à condição de guerreiro sagrado, tentando convencer o veterano a deixar sua aposentadoria para cumprir uma missão santa em um reino distante. Ninguém em Selentine conhece os detalhes dessa tarefa.`
        },
        {
          name: "Gorendill",
          content: `Situada na fronteira oeste de Deheon, essa cidade fica à margem do Rio Panteão e próxima às Uivantes, tendo um clima temperado. Outrora um vilarejo pacato, Gorendill cresceu muito nas últimas décadas, graças a Guss Nossin, seu já lendário — e controverso — prefeito. Logo que se elegeu, Guss estabeleceu uma série de empreendimentos comerciais, fortalecendo a economia local… E dissolveu o conselho, tendo governado sozinho desde então.

Ao longo de seu mandato, o prefeito ignorou decretos vindos da capital, sob pretexto de “garantir Artoniana, não enviou tropas para as batalhas, concentrando-se em defender sua própria cidade e fazendas, especialmente aquelas responsáveis pelas frutas locais que são a base das exportações da cidade. Gorendill acabou não sendo atacada pelos batalhões puristas — talvez por estar longe da capital, talvez justamente por ter mantido sua guarnição.

Para alguns, Guss Nossin é um déspota ganancioso. Para outros, um visionário que melhorou a vida de seus conterrâneos. Um covarde que não participou da guerra ou um herói que colocou a segurança de seu povo acima da glória pessoal, Guss é muitas coisas, dependendo de para quem você pergunta. Em apenas uma coisa todos concordam: sendo prefeito há mais de 20 anos, Guss está ficando velho. Alguns dizem que está procurando um sucessor em segredo e que observa grupos de aventureiros em busca de alguém digno do cargo. Já outros dizem que Guss está na verdade atrás de rituais necromânticos — para seus detratores, o prefeito estaria disposto a renunciar à vida, mas não ao cargo.`
        },
        {
          name: "Begrond",
          content: `Este povoado modesto fica a uma semana de caminhada a nordeste da capital. Pouco mais que uma rua cercada de propriedades rurais, é uma típica cidadezinha artoniana, visitada por quem ruma para Valkaria e pelos fazendeiros das redondezas.

O lugar foi fundado por Kyle Bek, um clérigo de Khalmyr, há quase dois séculos. Hoje possui uma estalagem, uma forja, um pequeno templo a Valkaria e Khalmyr… e uma singela ponte de pedra, onde, nas palavras dos moradores locais, “tudo que não tem chance de dar errado, dá, e tudo que não tem como dar certo funciona!”.

A origem dessa anomalia está em Hit, uma clériga de Nimb residente. A jovem claramente insana bate na cabeça de qualquer infeliz transeunte com sua maça em forma de punho fechado — por motivos variados, como querer passar pela ponte ou não querer passar pela ponte. Certa vez, porém, a clériga teve a honra de enfrentar aventureiros épicos durante a Libertação de Valkaria. Então retornou à sua ponte, tão imprevisível quanto antes, senão mais.`
        },
        {
          name: "Montanhas Teldiskan",
          content: `Embora sejam parte da mesma cordilheira que forma as Uivantes, estas montanhas ficam dentro de Deheon, ocupando boa parte da região noroeste. O clima não chega a ser tão rigoroso e muitas aldeiazinhas podem ser encontradas ao longo de suas encostas. Devido ao terreno ruim para plantio, a economia costuma ser baseada na criação de cabras, carneiros e outros animais montanheses.

As montanhas têm esse nome porque, conforme antigas histórias, abrigam o deus menor Teldiskan, o Gigante Máximo. Dizem ter sido banido por ousar atacar Valkaria, quando a cidade ainda era um assentamento. Acabou derrotado, poupado e expulso definitivamente pelo Rei Roramar e a Rainha Yvanna. Alguns dizem que ele se arrependeu e cumpre sua pena, ajudando os pastores locais como uma divindade menor benevolente, trazendo bom tempo. Os menos otimistas suspeitam que seu aprisionamento foi realizado por magia: ele agora estaria angariando fiéis para reunir poder divino suficiente e romper seu confinamento.

Nas montanhas também existe um templo a Hippion, o Deus Menor dos Cavalos. Há um labirinto subterrâneo no interior do templo, mas ninguém sabe o que ele esconde.`
        },
        {
          name: "A Desolação",
          content: `Uma área vasta e completamente erma no nordeste de Deheon. O terreno é plano, mas rochoso, contendo pedras de todos os tamanhos. O plantio e a criação de gado são impossíveis, de modo que o lugar logo foi esquecido pelos fazendeiros. A lenda diz que, no passado distante, o Panteão se irritou com um exército que passava pela região e fez chover pedras sobre os infelizes. Devido à alta incidência de mortos-vivos que vagam por aqui, é bem possível que seja verdade…

Notícias mais recentes falam sobre como viagens constantes de arcanistas a outros mundos teriam deixado escapar espectros sombrios, que por algum motivo misterioso foram atraídos para o lugar.`
        },
        {
          name: "Colinas de Marah",
          content: `Localizadas a algumas semanas de marcha da capital, estas colinas são assim chamadas porque, de acordo com seus habitantes, a própria Deusa da Paz teria sido vista aqui. Na forma de uma dama vestindo um manto de pura luz branca, ela surgiu durante um duelo entre dois inimigos mortais. Comovidos com a presença da deusa, ambos jogaram fora as armas, fizeram as pazes e fundaram uma aldeia que existe até hoje.

Seus descendentes veem hoje essa história de forma nostálgica e não sem certa ironia. Atualmente, o lugar é um antro de criminosos fugitivos da capital. Rixas sangrentas entre duas grandes gangues rivais são comuns, com execuções acontecendo a céu aberto e em plena luz do dia.

O famigerado bandido Peter Korda procurou abrigo temporário em dois templos locais, depois de um trabalho fracassado. Bastante versado nos assuntos do submundo, pode prover informações sobre ambas as facções, pois observa ambas de longe com curiosidade profissional.`
        },
        {
          name: "Floresta dos Basiliscos",
          content: `Essa floresta pantanosa ficou conhecida por ser habitada por basiliscos — tipo perigoso de lagarto mágico que pode transformar pessoas em pedra com seu olhar. Não obstante, estudiosos da Academia Arcana dizem tratar-se apenas de uma espécie assemelhada, sem poderes mágicos. As verdadeiras responsáveis pelas petrificações seriam aquelas que domesticam esses animais: medusas clérigas de Escamandra, a Deusa Menor da Permanência.

Talvez essas medusas sejam vilãs, talvez queiram apenas ser deixadas em paz pelos humanos, vivendo em seu santuário de árvores fossilizadas e jardins de estátuas…

A floresta também esconde uma torre imensa que teria pertencido a Tolian, um dos maiores magos de Arton. Aqui ele teria desenvolvido grande parte das magias e dos rituais hoje bem conhecidos. Ainda hoje, as ruínas da torre atraem aventureiros que tentam descobrir os preciosos segredos do mago. A torre é protegida por gárgulas, que patrulham o interior e arredores. Até agora nenhum grupo relatou encontros com Tolian — ou seu fantasma.`
        },
        {
          name: "Bosque dos Trolls",
          content: `Todo tipo de troll parece habitar essa mata e, apesar dos maiores esforços de caçadores para controlar sua população, estes se mostraram impossíveis de exterminar, sempre voltando em grandes números. Isso se deve a um segredo tão terrível quanto impossível: o bosque inteiro é o corpo adormecido de um troll gigantesco. A única maneira de impedir novos monstros de nascer é cortar o suprimento de água fornecido pelo Rio da Fortitude, despertar a colossal criatura e derrotála.

Esse mistério foi descoberto por um grupo de aventureiros — mas, gananciosos, esses mercenários preferiram guardá-lo para manter seus contratos de caça no local.`
        },
        {
          name: "Monte Palidor",
          content: `O ponto mais elevado de Deheon, com 4.600 metros de altitude. Não faz parte de nenhuma das formações rochosas do reino e não se sabe como ocorreu sua formação. Sabe-se apenas que aqui teria sido o covil de um dragão, que em eras longínquas assolava todos os assentamentos da região, até ter sido derrotado por aventureiros. Boatos falam sobre um clérigo de Kallyadranoch que estaria tentando trazer de volta à vida esse monstro… na forma de um dragão morto-vivo! O antigo covil da fera estaria sendo usado como um templo profano pelo vilão. As cavernas do lugar são habitadas por outras criaturas, como orcs, ogros e revoadas de grifos selvagens.`
        },
        {
          name: "Quedas de Hynn",
          content: `Clérigos de Hyninn contam que um dia o Deus da Trapaça tentou pregar uma peça em Nimb — que, de acordo com alguns estudiosos, seria seu pai. Nimb não apenas evitou o truque como ainda fez o próprio Hyninn tropeçar e cair. Na queda, Hyninn deixou cair parte de seu nome, que foi prontamente escondido por Nimb. Frustrado, o Deus da Trapaça passou meses tentando encontrá-lo, enquanto chorava copiosamente. De suas lágrimas teria surgido a queda d’água e, da peça pregada por Nimb, o nome do lugar. Como Hyninn teria achado o resto de seu nome não parece fazer parte da história.

As Quedas de Hynn — também chamadas Cataratas de Hynn por aqueles mais eruditos — têm quase duzentos metros de altura. Em suas proximidades existe uma grande caverna, que dizem ser o covil de um dragão. Outras histórias afirmam que ali seria uma das entradas secretas para o reino de Doherimm; mesmo sendo verdade, apenas um guia anão poderia conduzir o grupo com segurança a partir deste ponto.

Dois arcanistas humanos chamados Goordir Cohticenom e Tore-Van passam seus dias supostamente estudando a cachoeira, por requisição da Grande Academia Arcana. Mas andam procrastinando demais! O primeiro tem se dedicado apenas a seu livro, uma biografia de Talude, o Mestre Máximo da Magia, enquanto o outro vive escapando da tenda mágica onde dormem para passar a noite em estalagens confortáveis.`
        },
        {
          name: "Mata dos Galhos Partidos",
          content: `Esta pequena mata fica ao sul do reino, no ponto onde se encontram as fronteiras de Deheon, Ahlen e as Ruínas de Tyrondir. É difícil viajar entre Valkaria e qualquer região ao sul sem passar por aqui.

A Mata não é habitada por monstros ou animais particularmente perigosos, mas oferece riscos para viajantes desacostumados à vida silvestre. É infestada de plantas tóxicas, cobras, linces, insetos venenosos, javalis furiosos e alcateias de lobos.

Os únicos moradores da região são também seus vigias: o druida Neldor e seu amigo, o caçador elfo Thandour. Costumavam contar com a ajuda de um urso marrom chamado Teodoro, animal falecido há alguns anos. Não obstante esse fato, dizem que “Teddy” continua a existir como fantasma, assombrando viajantes que desrespeitem o território. O que seria “desrespeitar” na opinião de um urso espectral, porém, é bastante subjetivo.`
        },
        {
          name: "Pântano dos Juncos",
          content: `Lugar ermo, malcheiroso e cheio de detritos, o Pântano dos Juncos é úmido e quente. Situado próximo à fronteira de Deheon e Wynlla, sua característica mais marcante é ser habitado por todo tipo de anfíbios monstruosos: batráquios gigantes, pererecas peçonhentas, rãs carnívoras, salamandras camaleônicas — e tabrachi, um povo sapo inteligente.

No centro do pântano há um templo dedicado a Inghlblhpholtsgt, a Grande Divindade Anfíbia. O templo é vigiado por uma espécie única de catoblepas, um descomunal monstro quadrúpede semelhante a um bovídeo chifrudo, com uma cabeça pesada que sempre olha para baixo. Porém, quando a criatura consegue erguê-la, qualquer um contemplando seus olhos é imediatamente transformado em sapoide!`
        },
        {
          name: "Estalagem do Velho Malcolm",
          content: `O velho que dá nome à estalagem é uma figura estranha. Gastou todas as economias de uma vida e construiu seu estabelecimento — um prédio de madeira e alvenaria de três andares — a muitos e muitos dias de viagem de qualquer cidade, no meio de parte alguma, perto da fronteira norte com Zakharov. Nenhuma estrada ou rota comercial passa por perto. Diz a lenda que Malcolm morreu ali mesmo, esperando durante anos que um cliente aparecesse.

A estalagem está em ruínas, mas se você entrar, será recebido pelo Velho Malcolm — um pouco mais velho e um pouco mais morto, mas ainda um bom estalajadeiro!`
        }
      ]
    },
    {
      title: "Guildas & Organizações",
      places: [
        {
          name: "A Sociedade da Noite Eterna",
          content: `Nem todos os devotos de Tenebra, a Deusa das Trevas, são malignos ou sinistros. Muitos cultuam a deusa como sinônimo de liberdade, ou apenas apreciam o alívio que a escuridão proporciona. Mas existem devotos da deusa que são perigosos… A Sociedade da Noite Eterna é uma organização secreta de cultistas de Tenebra que trabalha para impedir o sol de nascer!

A Sociedade se espalha por várias cidades e aldeias de Deheon e abriga uma espantosa variedade de pessoas: nobres e cavaleiros, mercadores e artesãos, criminosos e mendigos, além de diversos mortos-vivos, incluindo fantasmas e vampiros. Todos os membros da Sociedade trazem uma estrela negra tatuada em alguma parte do corpo. A própria líder da ordem, Jasmira, é uma vampira, além de sacerdotisa de Tenebra. Esta poderosa clériga descobriu um ritual capaz de concretizar o objetivo da Sociedade e, desde então, envia seus lacaios em missões por todo o Reinado para que encontrem os raríssimos ingredientes para o ritual. O dia em que conseguirem todos os itens necessários… Será o último dia de Arton.`
        },
        {
          name: "Patrulheiros da Deusa",
          content: `Uma das maiores ordens de cavalaria em Deheon reúne centenas de cavaleiros, clérigos e paladinos de Valkaria. Liderados pelo paladino Jeremias Hallegor II, são encarregados pela coroa de proteger as fronteiras do reino contra qualquer ameaça.

Os Patrulheiros se revezam na tarefa de ocupar postos na fronteira e cavalgar por toda sua extensão, circulando o reino muitas vezes e cuidando dos marcos que assinalam o fim de seu território. Esses marcos são grandes pilares de mármore, cada um trazendo uma estátua da deusa no topo. Além de ajudar na vigilância contra movimentações de monstros e inimigos, os cavaleiros também ajudam a exercer a lei na fronteira. Porém, sua jurisdição vai exatamente até esse limite — eles nunca perseguem fugitivos além desse ponto, muitas vezes contando com aventureiros para fazer cumprir a lei além da fronteira.`
        },
        {
          name: "O Pequeno Conselho",
          content: `Este aglomerado de nobres sempre foi um conselho, mas nem sempre foi pequeno, em nome ou tamanho. Até o ano de 1111 CE o reino de Deheon possuía um vasto conselho de nobres, em sua maioria vassalos de poderosos senhores feudais, incumbidos de representar os interesses de seus respectivos suseranos na corte imperial. Dizem que este costume derivava em parte de antigos conselhos tribais dos povos nativos, mas com o tempo a instituição foi se tornando cada vez mais corrupta e menos eficiente.

Na regência da Rainha-Imperatriz Roramira I, obrigou-se os líderes das casas mais ricas e prósperas a habitar a capital e compor um conselho menor para “auxiliar o poder regencial”. Um pretexto que, na prática, se traduzia a ficar sob supervisão direta da coroa, ter seus destinos pessoais conectados com o da metrópole e pagar seus impostos.

Esses poucos líderes formaram o “pequeno” conselho, em comparação ao “grande”, formado pelos enviados dos senhores feudais. Com o tempo, o grande conselho foi desfeito, restando apenas o “pequeno” — que, claro, hoje poderia ser chamado apenas de “Conselho”, mas o nome já havia pegado.

O Pequeno Conselho é de fato pequeno, formado por uma minoria absoluta: a alta aristocracia do reino. Nobres que, passada a época da guerra, preferiram voltar a disputar intrigas palacianas entre si — o Grande Jogo, como o chamam — em vez de governar. Deixam isto a cargo de quem quer que esteja sentado no trono, pois enxergam na figura monárquica o papel de um criado pessoal, alguém que contrataram para fazer as tarefas chatas.

Atualmente, o conselho possui cinco membros.

O Marquês Thibault é um humano pálido, de rosto fino e comprido, adornado por um bigode lustroso e muito torcido. Veste um manto cravejado de diamantes e quase sempre anda acompanhado por um gato grande como um lobo. Apreciador de partidas, torneios, enigmas, orquestras e caçadas, em geral vive alheio ao resto do mundo e considera seu lazer uma espécie de religião.

A Duquesa de Blangis é uma mulher com o rosto todo pintado, sendo difícil discernir suas feições. Seu vestido tem múltiplas camadas e joias (em quantidade generosa o bastante para acabar com a miséria de um pequeno reino). Sua imensa riqueza e propriedades lhe concedem prestígio entre seus pares. É uma competidora agressiva nos jogos da alta nobreza, sempre pronta para arriscar tudo para alcançar sucesso e reconhecimento.

O Duque Verbam Maliq é um humano impregnado de tédio e cinismo, que irradia desprezo pelos demais nobres e através de seu semblante sombrio está sempre tecendo comentários mordazes. É conhecido por patrocinar festas suntuosas, banquetes e torneios repletos de violência.

Callista Il-Sharat é uma qareen alegre e altruísta, vinda de terras longínquas. Destaca-se entre a nobreza emperiquitada ao redor por seus trajes despojados e minimalistas. Curiosa e cativada pela sociedade valkariana, Callista tem a sincera intenção de auxiliar grupos de heróis novatos. Sua natureza benevolente e ausência de malícia a tornam imprevisível, evocando apreensão nos demais aristocratas.

Por fim, o Arquiduque Marechal Sir Bradwen Lança Dourada, o atual comandante do Exército do Reinado, ocupa o quinto assento — pelo menos em teoria. Na prática, ele raramente participa das reuniões, estando mais preocupado em treinar e revistar as tropas do que em participar dos jogos da alta aristocracia.`
        },
        {
          name: "Os Pastores de Teldiskan",
          content: `Este clã de habitantes das montanhas pode ser visto vagando por todo o interior do reino. Os montanheses sempre terão uma explicação perfeitamente plausível para suas andanças, como estarem levando suas cabras para pastagens mais verdes ou indo a um leilão de animais. Para outros clãs, isso poderia ser verdade. Porém, este grupo específico apenas adota o disfarce de viajantes nômades… Seu objetivo real envolve arregimentar outro tipo de rebanho.

Os Pastores de Teldiskan podem ser encontrados pregando em fazendas e aldeias. No início, com uma mensagem de esperança, sobre como a divindade que cultuam, Teldiskan, é um deus menor do clima que trará chuvas e colheitas abundantes. Quando já estão familiarizados com os locais que visitam, esses pastores começam sermões mais ousados, falando sobre culpa, morte e uma inevitável destruição, quando seu deus deixar as montanhas para devorar Deheon. Entre os mais receptivos às suas pregações, recrutam novos membros para a seita. E, entre os mais fanáticos, pessoas dispostas a servir de sacrifício em rituais que têm como objetivo despertar o Gigante Máximo que cultuam.

Para piorar, o líder dos Pastores — um homem alto, calvo, com barba branca longa e sobrancelhas muito espessas chamado Gunnar — tem como costume abordar grupos de aventureiros com mentiras sobre deuses menores. Falará enigmaticamente sobre como a divindade Inghlblhpholtsgt transformou seus companheiros em sapoides, sobre como Escamandra petrificou uma aldeia inteira, sobre como Hippion destruiu o solo de fazendas com seus cascos… Sempre aproximando-se de grupos poderosos o bastante para abater essas entidades. O objetivo final de Gunnar é destruir os pequenos deuses de Deheon, para que seu próprio deus possa devorar a energia divina deles.

Os verdadeiros povos das montanhas não veem com bons olhos as ações desse grupo. Uma druida chamada Ahlinna tem vagado por Deheon tentando desmascarar os supostos pastores, mas tem enfrentado problemas para ser ouvida pelo exército deheoni.`
        }
      ]
    },
    {
      title: "Aventuras",
      content: `A incidência de feras e monstros em Deheon ao longo das principais rotas é pequena, tornando o reino uma das regiões mais seguras de Arton. Ainda assim, as estradas que ligam as cidades podem reservar surpresas ao viajante incauto, na forma de bandoleiros e salteadores. Os alvos mais visados são viajantes solitários ou comerciantes sem escolta. Grupos de aventureiros só costumam ser atacados quando estão enfraquecidos ou se encontram em desvantagem.

Os ermos de Deheon abrigam feras territoriais, como lobos e ursos, que podem atacar aqueles invadindo seu território. Em geral, basta a presença de um druida ou caçador experiente para evitar incidentes mais graves. Nos verdadeiros ermos, numerosas montanhas, florestas e pântanos podem abrigar esconderijos de serpes, mantícoras, dragões e outros monstros. Muitos vivem em ruínas e labirintos que datam desde a era pré-povoamento.

É comum que aventureiros testemunhem alguma missão ou ameaça já em andamento. Muitas sagas de Arton passaram por Deheon ao longo dos séculos. Cada canto do reino esconde algum plano maligno ou ato heroico. Por isso, muitas aldeias ou mesmo castelos não possuem uma guarda, ou contam apenas com um contingente mínimo. Aldeões e nobres simplesmente presumem que, se houver um problema, mais cedo ou mais tarde algum aventureiro irá aparecer! Esses lugares são apelidados de “poços de aventuras”: na boataria dos aventureiros, são fontes de onde sempre se pode tirar alguns tibares em troca de um serviço arriscado. Grupos residem num desses “poços” por alguns meses ou anos, até que sua experiência ou ambições ultrapassem o que o local tem a oferecer, então recomendam outros grupos iniciantes, numa rotatividade eterna de tipos aventurescos.

Um fenômeno tipicamente deheoni é a competição entre grupos de aventureiros. Mesmo com uma infinidade de missões e ofertas de trabalho, Deheon conta com tantos heróis que muitas vezes dois ou mais bandos se veem atrás do mesmo prêmio ou caçando o mesmo vilão. Isso pode gerar tanto rivalidade amistosa quanto rixas amargas. E tudo fica mais difícil quando ambos os lados são heroicos. Afinal, será que um paladino de Khalmyr teria coragem de sabotar os esforços de uma clériga de Thyatis? Em aldeias com históricos longas de aventuras ou antigos boatos sobre tesouros, os plebeus chegam a apostar sobre o sucesso de grupos rivais.

Na capital Valkaria há oportunidades infinitas, desde ofertas para aventureiros iniciantes dispostos a controlar pragas nos esgotos até heróis épicos que queiram adentrar uma área de Tormenta para ajudar os pesquisadores da Academia Arcana. Mas não é preciso ir até a cidade grande — o interior guarda oportunidades para todo tipo de peripécia! De tarefas mundanas, como ajudar uma viúva a conter uma infestação de glops em sua fazenda, a façanhas míticas, como participar de uma briga de taverna contra um deus menor, mil histórias diferentes são vivenciadas todos os dias dentro das fronteiras de Deheon.`
    }
  ]
  },
  { id: "nova-malpetrim",
  name: "Nova Malpetrim",
  tag: "Além do Reinado",
  image: "/regioes/nova-malpetrim.png", // Caminho ilustrativo, ajuste conforme necessário
  coatOfArms: "/regioes/nova-malpetrim-brasao.png", // Caminho ilustrativo
  intro: `Arton é um mundo de heróis. Eles existem em todos os lugares, habitam todas as cidades. Mas nenhuma tem maior reputação de hospedar aventureiros — e aventuras — que Malpetrim.
Embora situada no pequeno reino de Petrynia, hoje província do Império de Tauron, os eventos extraordinários ocorridos aqui sequer podem ser listados.
Cidade costeira assolada por todo tipo de ameaça mundana ou mágica, não apenas foi ponto de partida para as mais fabulosas expedições, como também sediou batalhas e intrigas em seu próprio território.
Uma tradição de bardos consiste em desafiar o oponente a narrar a história de um grande herói sem que Malpetrim esteja em algum ponto do itinerário. (“Oras, se não passou por Malpetrim, não é uma grande saga!”) Isso considerando apenas as histórias verdadeiras — pois, conforme a cultura do reino, para cada campeão lendário real que esteve aqui, outros dois foram inventados na imaginação popular. Ainda, existe o costume local de batizar filhos com nomes de grandes heróis, causando ainda mais confusão.
Despertar de deus maligno. Cerco de minotauros. Ataque de monstro gigante. Marcha de fantasmas da Tormenta. Embates entre arquimagos, sumo-sacerdotes e Dragões-Reais. A cidade esteve em perigo tantas vezes, foi quase destruída em tantas ocasiões, que foi um choque para todos quando isso finalmente aconteceu.
A chegada profetizada da Flecha de Fogo ao continente sul causaria um maremoto como nenhum outro; imprudentemente próxima ao nível do mar, Malpetrim acabou arrasada por completo. Heróis com poderes extremos se mobilizaram, cidadãos foram evacuados, vidas foram salvas. Até mesmo algumas construções, com seus ocupantes, foram magicamente transportadas a tempo. Mas nada restaria na área murada original, exceto ruínas inundadas.`,
  facts: [
    { label: "Lema", value: "“Tesouro do Mar, Berço da Aventura”." },
    { label: "Brasão", value: "de azul um castelo de prata assente sobre um monte de verde sainte de uma campanha ondada do segundo carregada de duas faixas ondadas do primeiro." },
    { label: "Gentílico", value: "malpetrino." },
    { label: "Regente", value: "George Ruud (prefeito)." },
    { label: "População", value: "26.000." },
    { label: "Raças Principais", value: "humanos, sereias, tritões, anões, elfos, hynne." },
    { label: "Divindades Principais", value: "Valkaria, Oceano, Marah." }
  ],
  sections: [
    {
      title: "A Cidade Renascida",
      content: `Nova Malpetrim (ou apenas Malpetrim, como ainda é chamada) é tudo, menos horizontal. Mais que decididos a evitar qualquer vagalhão catastrófico futuro, seus habitantes optaram por reconstruir a cidade no alto de uma grande formação rochosa próxima, muito acima do nível do mar.
Pode-se dizer que, hoje, a cidade exige nervos e pernas fortes para ser percorrida; seus vários patamares, conectados por longas escadarias e pontes de vários tipos, desafiam aqueles que temem altura. Desnecessário dizer, o lugar também se tornou muito menos aprazível para minotauros — um planejamento urbano provavelmente intencional, considerando a tentativa de invasão por parte deste povo durante as Guerras Táuricas. Ainda assim, apesar de sua fobia de altura, membros do povo de Tauron teimosamente insistem em frequentar Nova Malpetrim, demonstrando orgulho e bravura enquanto evitam as beiradas.`
    },
    {
      title: "O Porto",
      content: `Com a reconstrução, muito se pensou em formas de livrar Malpetrim dos piratas que sempre a assolaram. Descobrindo ser inviável (pois importantes figuras locais estão ligadas à pirataria), apenas trataram de manter a nova área de atracagem tão afastada quanto possível, formando praticamente uma cidade própria ao nível do mar — hoje também conhecida como Cidade Baixa. Nesse literal submundo as guildas criminosas agem impunes e tudo que é proibido ou ilegal pode ser obtido. Ou, como diria o pirata Jude Silverbloom, uma das mais notórias figuras da Cidade Baixa: “Na escolha entre o que é certo e o que é fácil, a escolha certa sempre será fácil…”. O isolamento também garante que feras capturadas em Galrasia causem menos estrago urbano à Cidade Alta quando escapam — o que acontece com alguma frequência.`
    },
    {
      title: "Mansão do Prefeito",
      content: `Administrar um desastre — ahem, uma cidade como Nova Malpetrim não é trabalho para qualquer um. Pouca gente em Arton sequer aceitaria tamanha dor de cabeça. Ainda assim, um improvável pretendente ao cargo insalubre acabou surgindo; o atual prefeito é ninguém menos que George Ruud, antigo proprietário da famosa Estalagem do Macaco Caolho. Depois de lidar com sua cota de druidas obcecadas, falsos ladinos, arquimagas élficas loucas e trogs rabugentos (e também após a perda de seu estabelecimento no maremoto), Ruud e a esposa Tadania optaram por uma carreira que consideram muito menos estressante. Além de governar, muitas vezes caberá ao próprio prefeito, à primeira-dama ou à secretária osteon Calirianne o papel de delegar missões a aventureiros.`
    },
    {
      title: "A Grande Feira de Marah",
      content: `Este tradicional evento comercial, que continuaria a ser celebrado anualmente na cidade nova, teve seu auge durante a dominação táurica. Como a cidade era considerada território neutro, figurava como uma oportunidade única para permutar itens do Reinado e do Império. Hoje em dia o festival retornou às suas dimensões originais, negociando principalmente iguarias, relíquias e criaturas trazidas de Galrasia — também existindo meios escusos de adquirir pólvora, artefatos da Tormenta e outros itens proibidos. Ainda, devido a um rumor persistente sobre a passagem de Thwor Khoshkothruk pela Feira, muito antes de sua ascensão à divindade, devotos de Thwor às vezes tentam imitar o antigo messias, infiltrando-se no evento sob disfarce. Outros, menos religiosos, fazem isso apenas para ludibriar os ingênuos. É o caso do bardo Amanph Leanm, que já convenceu muitos desinformados de que era Thwor em pessoa, apenas um pouco mais magro e abatido…`
    },
    {
      title: "A Arena de Gideon",
      content: `Rumores e boatos sem fim cercam o maior e mais misterioso patrono dos jogos de arena em Nova Malpetrim. Antes de conquistar sua riqueza e fixar moradia aqui como uma de suas figuras mais ilustres, Lorde Gideon teria sido um herói desmemoriado, que em outra vida foi um tirano — então rejeitando o mal para viver como aventureiro. Hoje, Gideon e seu companheiro hynne Flappo comandam torneios e combates de arena em seu coliseu, que vem se tornando famoso no oeste de Arton. Em cada grande torneio, um item mágico de seu tesouro pessoal é oferecido ao campeão. O atual campeão é o hynne Jojo, conhecido pelo curioso epíteto “Matador de Gigantes”.`
    },
    {
      title: "A Forja do Nanico",
      content: `Sempre que um forasteiro procura alguém para consertar suas armas ou armadura, é costume local recomendar este estabelecimento pelo nome. Não por sua qualidade, nem por ser barato; apenas para testemunhar uma nova explosão de raiva do proprietário, um velho troglodita anão que odeia ser chamado de “nanico”, expelindo seu óleo fedorento em todos que assim fazem! Este antigo guerreiro aposentado, cedendo à paixão racial dos trogs por itens de aço, acabaria abraçando o ofício como ferreiro. Dizem que o nome é também uma provocação (ou paródia) a uma rede de forjas existente em Valkaria, conhecida como Metais do Baixote.`
    },
    {
      title: "A Águia Dourada",
      content: `A estalagem mais extravagante da antiga Malpetrim foi reconstruída aqui, ainda mais chique e vistosa. Seu interior segue tão parecido com a original que mesmo frequentadores assíduos não notam diferença. De fato, arcanistas garantem que a reconstrução foi executada por poderosas magias. Talvez exista relação com uma antiga e ilustre hóspede, a falecida arquimaga élfica Nielendorane de Lenórienn; dizem que seu espírito está com Wynna, mas às vezes ainda assombra sua suíte favorita, quando alugada por hóspedes de espírito aventureiro. A gerência garante que nenhum deles sofreu danos permanentes. Quase nenhum.`
    },
    {
      title: "O Polvo Canhoto",
      content: `Taverna especializada em frutos do mar e pratos insanamente apimentados. O proprietário e cozinheiro é Mighel de Petrynia, homem grande como um ogro — e quase tão gentil, quando criticam a ardência de sua comida. Dizem que ele usa condimentos fortes por serem os favoritos da filha, uma paladina de Khalmyr em treinamento. Alguns suspeitam, no entanto, que Mighel exagera na pimenta para afastar os minotauros — mas o efeito acabou sendo contrário; estes, sentindo-se desafiados, fazem questão de ingerir os itens mais picantes no cardápio enquanto vertem lágrimas gordas. Seja como for, o lugar acabou famoso por sediar competições e brigas entre minotauros, humanos e quaisquer outros.`
    },
    {
      title: "Expedições e Piratas",
      content: `Embora Nova Malpetrim seja uma cidade costeira, sua economia não é especialmente baseada em comércio marítimo; devido às atribulações do Império de Tauron, a navegação comercial artoniana tem se concentrado no litoral sudeste do continente. Por ser situada a sudoeste, poucas rotas comerciais chegam aqui. Assim, seu abastecimento vem das terras cultivadas em volta, complementado com a pesca.
Não significa, contudo, que exista pouca atividade portuária. Como no passado, o lugar segue como o mais importante ponto de partida para expedições até Galrasia, movimentando um mercado pequeno, mas rico. Iguarias, feras exóticas e relíquias circulam todos os dias, negociadas por fortunas. Pela mesma razão, piratas fervilham no Mar Negro para atacar aventureiros retornando cheios de valores.
A recente fundação de Lysianassa, primeira cidade humana em Galrasia, intensificou as expedições. Agora contando com um porto seguro no próprio Mundo Perdido, navios cheios de aventureiros chegam e partem em números cada vez maiores. Aqueles que retornam (isto é, os que conseguem passar pelos piratas) deixam boa parte de seus tesouros em Nova Malpetrim, assegurando sua prosperidade. E, embora os piratas e bucaneiros tragam reputação ruim, também enriquecem a cidade com suas pilhagens, gastando fortunas em bebida e farra.
Por tudo isso, Nova Malpetrim faz bom dinheiro oferecendo acomodações e suporte a aventureiros. Todo tipo de artesão especializado em armas e equipamentos de aventura pode ser encontrado aqui, assim como serviços de alquimistas e conjuradores. Ajudantes, batedores e escudeiros também estão disponíveis — são profissões populares entre jovens locais que tentam fazer dinheiro rápido, apesar dos riscos. Mercadores aguardam no porto da Cidade Baixa para adquirir tesouros recém-conquistados. E, como não poderia deixar de ser, clérigos e curandeiros estão sempre a postos para remendar heróis combalidos em seu retorno.
Outra atividade importante é a construção e reparo de navios, sobretudo aqueles que chegam arruinados após ataques de piratas e monstros, sendo um milagre ainda flutuarem. Para os goblins locais, canibalizar partes de uma embarcação para consertar outra é praticamente uma tradição — qualquer navio no porto precisa ser mantido sob vigilância para continuar inteiro. O resultado é que muitos navios locais parecem feitos de partes desencontradas, marteladas juntas de qualquer jeito. Dizem que se você precisa de reparos urgentes em sua embarcação, mas sem ligar muito para a estética, Nova Malpetrim é o lugar.`
    },
    {
      title: "Arredores de Aventura",
      places: [
        {
          name: "Montanhas Kenora",
          content: `Esta área montanhosa no nordeste de Petrynia pertence à mesma formação que inclui as Uivantes, bloqueando boa parte de sua glaciação. Numerosas passagens e desfiladeiros permitem fazer a travessia até a cordilheira gelada; uma delas teria sido usada pelo célebre herói Cyrandur Wallas em suas andanças. Aqui também se situam as Cavernas Escuras, onde seria encontrada uma das partes do mítico Disco dos Três. Especula-se que as cavernas escondem uma passagem para Doherimm; a teoria pode estar correta, porque as montanhas abrigam vários athrid, como são conhecidas as antigas edificações abandonadas dos anões.`
        },
        {
          name: "Os Grandes Bosques",
          content: `A extensa mata ao norte de Nova Malpetrim é composta por duas áreas florestais: os Bosques de Farn a noroeste e os Bosques de Allihanna a sudeste, separados pelo Rio Kaerunir. O nome vem da rivalidade entre dois antigos exploradores, cada um alegando ter descoberto e mapeado o lugar primeiro. Para apaziguar ambos, o regente da época decidiu separar a floresta em duas; por não existir “meia-floresta”, cada metade foi declarada um grupo de bosques — um deles nomeado como um explorador, outro com a divindade padroeira do segundo. Ambos são habitados por animais selvagens, comunidades silvestres e monstros ocasionais.`
        },
        {
          name: "Planície dos Centauros",
          content: `A região descampada ao sul dos Bosques de Allihanna é território de um grande rebanho de centauros. Sua antiga líder, Odara de Allihanna, teve atuação importante durante a saga dos Rubis da Virtude. Após um incidente envolvendo a Tormenta, seu paradeiro é desconhecido; hoje o bando é liderado por sua aprendiz Hipólita. Diferente da antecessora, esta druida atrevida não se acanha em galopar até Nova Malpetrim e convocar aventureiros para matar monstros que eventualmente ameaçam a tribo.`
        },
        {
          name: "Planalto dos Kobolds",
          content: `Uma das maiores tribos de kobolds em Arton está em um planalto oculto nos Bosques de Allihanna, onde cavernas e túneis que atravessam o planalto escondem centenas, talvez milhares de criaturas. Como outros de seu tipo, estes também ficaram mais perigosos após o retorno de Kallyadranoch ao Panteão, mas ganharam ainda mais poder quando o dragão Xiuhdrake assumiu a liderança do bando. Sob comando do “enviado”, os kobolds atacam aldeias e fazendas vizinhas, capturando vítimas — especialmente crianças — para sacrifícios rituais ao Deus dos Dragões. Um dos habitantes menos perigosos e mais curiosos do Planalto é o kobold Leopôncio, um espadachim (?) que diz ser matador de serpes (??) e herói de seu povo (???).`
        },
        {
          name: "Mansão de Zolkan",
          content: `Situada à margem de um pântano próximo da Velha Malpetrim, pertenceu ao poderoso mago Zolkan, desaparecido há mais de 100 anos. Rumores dizem que a mansão é assombrada e maldita, algo atestado por heróis que a visitaram. Fantasmas e aparições infestam seus aposentos — que retornam magicamente ao normal logo após a passagem de aventureiros, não importando quanta coisa foi destruída ou quantas criaturas foram vencidas. Também dizem que Zolkan se tornou um monstro e devora todos que entram. Parte desse boato é verdade; o arcanista realmente se tornou “algo” graças a um experimento fracassado. Uma passagem mágica leva a um laboratório secreto longe dali, em uma caverna oculta, onde o monstro-Zolkan passa os dias tentando reverter seu atual estado.`
        },
        {
          name: "Torre de Azazel",
          content: `Situada em uma ilhota próxima à costa, esta grande torre pertence a Azazel, o Louco. Este velho de pele azulada — que muitos acreditam ser um tritão, embora não exista certeza sobre isso — mantém sua torre protegida por monstros marinhos, jamais tolerando a presença de invasores. Muitos navios foram afundados por suas criaturas porque se aproximaram demais. As histórias sobre a origem de Azazel seriam muitas; a mais conhecida diz que ele teria se apaixonado por uma sereia, mas foi rejeitado, e agora passa a vida pensando em formas de capturá-la e conquistar seu amor.`
        },
        {
          name: "Velha Malpetrim",
          content: `Hoje submersas, as ruínas da antiga Malpetrim foram rapidamente ocupadas por animais, monstros e até povos marinhos. Não apenas suas construções originais, mas também grandes navios empurrados pelo maremoto e encalhados ali — cada um escondendo seus próprios perigos e tesouros. Ainda, existem sob a cidade várias redes de túneis e câmaras, outrora esconderijos para guildas de ladrões, cultos profanos e movimentos de resistência contra os minotauros.
Por ser uma masmorra vasta e ainda recente, há poucos mapas confiáveis e ainda menos informações sobre seus habitantes. Sabe-se de pelo menos um bando de elfos-do-mar extremamente hostis, que consideram a cidade agora seu território — qualquer explorador deve lidar com eles antes de adentrar as ruínas mais importantes e as partes mais profundas. Negociar a passagem diplomaticamente é possível, mas desafiador, considerando seu ódio e desconfiança contra aqueles que vivem no mundo seco. Seu cruel líder, chamado Deenar, tem apenas um braço — e também a habilidade mágica de se transformar em um monstro crustáceo demoníaco.
Um fato importante é que, em toda a região inundada, estabeleceu-se uma área de “ar molhado” — o estranho fenômeno que ocorre em alguns pontos dos mares de Arton, permitindo a seres terrestres respirar livremente embaixo d’água. Dificuldades normais de movimentação subaquática ainda existem mas, ao menos, afogamento não é um problema com que lidar. Há, no entanto, trechos de masmorra onde a água é normal.
Menos de uma hora distante da cidade reconstruída, Velha Malpetrim se tornaria uma masmorra bastante procurada, sobretudo por heróis iniciantes locais ainda sem meios de visitar Galrasia. Antigos proprietários contratam grupos para resgatar riquezas ou relíquias de família. Outros investigam rumores sobre tesouros mágicos poderosos, pertencentes a campeões veteranos que residiam na cidade. Um local especialmente visado são as ruínas da antiga Estalagem do Macaco Caolho; conforme boatos, o símio empalhado que dava nome ao lugar teria sido abençoado por Nimb, tornando-se um artefato muito poderoso. Ou maldito. Ou não.`
        }
      ]
    }
  ]
  },
  { id: "galrasia",
    name: "Galrasia",
    subtitle: "O Inferno Verde",
    tag: "Além de Arton",
    image: "/regioes/galrasia.png",
    map: "/regioes/galrasia-mapa.png",
    intro: `Arton é bela, mas perigosa. Covis de monstros existem a um dia de caminhada das maiores cidades. As grandes rotas comerciais têm predadores à espreita. Ainda assim, existem lugares remotos que se assomam entre aqueles habitados pelas feras mais selvagens.
  E existe Galrasia. O Inferno Verde. O Mundo Perdido.
  Enquanto as Sanguinárias são domínio de seu irmão cruento, aqui é onde Allihanna reina absoluta. É onde os devotos da Mãe Natureza a procuram em peregrinação — pois, embora a deusa esteja em toda Arton, aqui é seu santuário, seu local de maior poder. Galrasia é onde a vida não pode ser contida, onde a vida sempre encontra um meio. Mas também onde a morte é sempre rápida e brutal.`,
    sections: [
      {
        title: "Paraíso Perdido",
        content: `Muitos acreditam que Galrasia está ali desde sempre, desde a criação do mundo pelos deuses. Lugar muito antigo, primevo, habitado por bestas que já rondavam e matavam antes dos humanoides. Alguns estudiosos vão mais longe, especulam que o lugar seria a verdadeira terra natal dos elfos; o povo de Glórienn teria mais tarde migrado para Lenórienn por mar, deixando para trás ruínas de antigas cidades.

  Poucos sabem que Galrasia é, em verdade, um lugar muito jovem. Uma criança. Nascido de uma deusa criança.

  Lena, a Deusa da Vida, provê Arton com cura e esperança. Tem seu próprio Reino planar, mas não o governa como outros fariam, de algum palácio ou trono. Passa a eterna infância acompanhada por uma população de seres mágicos, brincando, cantando, inventando jogos. Ela vive feliz, como deve ser. Pois seu riso inocente, suas lágrimas de alegria, são a fonte de toda a vida.

  Os outros deuses, mesmo aqueles malignos e violentos, reconhecem sua importância. Para proteger o sorriso de Lena, criaram um povo feérico guardião. Eram os elfos arcanos eiradaan. Mas os primeiros e mais poderosos deles, Galron e Obassa, acabaram ludibriados por uma serpente — levados a acreditar que seu encargo era uma maldição. Revoltaram-se contra a deusa, Galron gritou com ela. Lena se entristeceu, chorou. Como consequência, houve uma época terrível em que nenhum ser vivo nasceu em Arton.

  Como resultado, os eiradaan foram banidos do Reino de Lena — juntamente com sua cidade e toda a região em volta. Seria arrancada e lançada aos oceanos do mundo mortal, perto da costa sudoeste do lugar que, mais tarde, seria chamado Arton Norte. Galron e Obassa viveriam aprisionados ali pela eternidade. Além disso, como punição por se deixar enganar pelas palavras de Sszzaas (sim, havia sido ele a sussurrar intriga entre os eiradaan), Obassa teria sido transformada ela própria em uma serpente flamejante. Ela e Galron jamais poderiam gerar novas crias. Assim acabava a raça eiradaan. E nascia Galrasia, “Terra de Galron”.

  A vasta ilha manteria propriedades de seu mundo celestial nativo, uma conexão planar com a fonte das magias clericais de cura. Essa força primordial faz tudo que é vivo crescer forte, vigoroso e maior.

  Galrasia se tornaria selvagem e indomável como nenhum outro lugar, onde Allihanna se mostraria mais poderosa — a Deusa da Natureza logo se apossou desta terra farta. Suas florestas, de árvores largas como casas e galhos grossos como ruas, se retorcem em clareiras e vales descomunais. Folhagem exuberante esconde o céu com suas copas de cores vivas, brilhantes — o verde sendo apenas uma entre tantas. Flores e frutos de espécies jamais catalogadas abundam em cada recanto, seduzindo com beleza e perfume exóticos.

  Essa flora sustentaria uma fauna igualmente imensa. Lagartos-trovão descomunais e lagartos-terror que os caçam, megafauna de mamíferos e aves em versões atrozes, criaturas-planta tão perigosas quanto. Porque tudo que habita Galrasia é imenso e faminto.`
      },
      {
        title: "Inferno Verde",
        content: `Galrasia é enorme, a maior ilha de Arton, quase um continente próprio. Seu coração montanhoso é densamente cercado de selva tropical, que preenche quase todo o território. Existem, no entanto, outros tipos de terreno — sobretudo rios, pântanos e planícies costeiras.

  Selva é a paisagem dominante. Muito úmida e quente — nem tanto por ação direta do sol, mas pela própria emanação de energia positiva. Apesar do calor, é difícil sentir sede ou ficar desidratado, porque o ar é saturado de umidade. Em certas regiões ou épocas, chove pesado todos os dias. Muitos habitantes das copas das árvores sequer descem para beber, coletando nas alturas a água de que precisam. Exploradores, por outro lado, precisam acostumar-se com as roupas sempre encharcadas; nessas condições, poucos conseguem usar armaduras de qualquer tipo.

  A abundância de força vital favorece o crescimento de animais e plantas muito maiores, que demandam mais alimento. Como resultado, a luta pela sobrevivência é mais intensa e feroz que em qualquer outra parte do mundo. Árvores ciclópicas competem pela preciosa luz do sol, suas raízes formam muralhas à caça de água e nutrientes no solo.

  A farta vida vegetal alimenta lagartos-trovão que justificam o nome, suas passadas estremecendo o chão, os longos pescoços alcançando as folhagens distantes. Herbívoros, mas pesadamente armados com couraças, chifres e espinhos. Defesa contra predadores, lagartos-terror capazes de devorar toneladas de carne a cada poucos dias.

  Além de selva, Galrasia oferece boa variedade de terrenos. As montanhas centrais abrigam desfiladeiros, vales e planícies isoladas, jamais vistas por olhos humanos, onde vivem raças e monstros até hoje desconhecidos. Das montanhas descem rios caudalosos, violentos, rompendo a floresta em corredeiras e cachoeiras rumo ao litoral — este formado por grandes praias, patrulhadas por bestas anfíbias imensas, e mangues quase impossíveis de atravessar, território de serpentes e crocodilos gigantes.

  Abundam ainda lugares assombrosos. Os Sítios Arcanos existem à volta de antigos monólitos erigidos pelos eiradaan. Sua serventia é um mistério: talvez fossem responsáveis pelo funcionamento ou proteção da antiga cidade. A área de cada sítio está sob algum efeito mágico específico. Alguns potencializam magias arcanas conjuradas ali, enquanto outros as reduzem ou anulam. Outros aprisionam seres que ali entrem. Outros ressuscitam qualquer ser morto em seu interior. Outros até mesmo anulam o campo de energia positiva na ilha, até permitindo a presença de mortos-vivos. E pode haver outros mais, ainda por descobrir.

  A Floresta de Seda é morada de uma população de aranhas gigantes, cultivadas por um antigo eiradaan de nome Tarantur, que acabou morto pelas próprias criações. Em suas árvores pendem véus abundantes de tecido sedoso, leve e forte, muito cobiçado pelos povos-trovão para manufatura de cordas. No entanto, suas partes mais profundas escondem cativeiros macabros onde vítimas — sobretudo coletores thera — são mantidas aprisionadas na teia, em longa agonia, provendo sangue e fluidos para as aranhas. Mais cedo ou mais tarde acabam como cadáveres ressequidos, ainda suspensos como ornamentação macabra. Lendas locais também falam sobre um ser táurico de torso humanoide e corpo aracnídeo, que comanda as aranhas.

  O Covil da Serpente é um vulcão próximo à costa leste da ilha. Está extinto, mas não parece assim observado à distância, pois emana fumaça e chamas constantes. A explicação está em seu próprio nome: a cratera e seus túneis são agora habitados pela antiga princesa eiradaan Obassa, hoje transformada em uma criatura serpentiforme flamejante. Passaria a ser venerada como deusa pelos povos-trovão nativos, sendo estes até capazes de invocá-la em ritual. O covil também é habitado por uma população de outros elementais do fogo.

  Por fim, a pavorosa Torre da Morte configura a maior estrutura erguida na ilha. No passado era muito bela, a habitação pessoal de Galron, de onde vigiava todo o Reino de Lena; hoje ergue-se enegrecida e macabra, vários prolongamentos parecidos com pernas insetoides nascendo em sua base — como se a torre inteira fosse algum inseto gigantesco, semienterrado. Seus muitos pavimentos abrigam bibliotecas, laboratórios e relicários contendo tesouros fabulosos, dizem. No entanto, também se especula que o próprio Galron ainda estaria ali, poderoso e rancoroso como nunca. Explorar a torre pode ser o desafio mais perigoso em toda a ilha.`,
        sidebars: [
          {
            title: "O Campo de Energia Positiva",
            content: `Galrasia é formada por um fragmento de Vitalia, o Reino de Lena. Seu próprio território emana força vital. Essa aura alcança alguns quilômetros além da costa, afetando seres vivos e conjuração de magias:
  - A recuperação por descanso aqui aumenta em +1 PV e +1 PM por nível. Personagens descansando em condições normais, por exemplo, recuperam 2 PV e 2 PM por nível a cada noite de descanso.
  - Efeitos mágicos de cura recuperam o dobro de pontos de vida.
  - Testes de Fortitude contra doenças e venenos, normais ou mágicos, recebem um bônus de +5. Doenças contraídas fora da ilha cessam de atuar — mas voltam caso o doente abandone Galrasia antes do tempo normal de cura. Doenças associadas a maldições, como licantropia, ainda funcionam, mas podem ser curadas mais facilmente (devido ao bônus de +5 no teste de resistência contra doenças) e seus efeitos podem ser revertidos, mesmo quando isso não seria possível.
  - Magias que canalizam energia negativa são difíceis de lançar. Exigem um teste de Misticismo (CD 20 + custo em PM da magia). Em caso de falha, a magia não tem efeito, mas os PM são gastos mesmo assim. Em caso de sucesso, a magia funciona, mas todos os seus efeitos variáveis são reduzidos ao mínimo possível. Mortos-vivos perdem qualquer habilidade de cura acelerada que possuam e não recuperam pontos de vida por dano de trevas (mas continuam imunes a este tipo de dano).`
          }
        ]
      },
      {
        title: "Povos-Trovão",
        content: `Não existem humanos, anões ou elfos nativos de Galrasia, mas o Inferno Verde tem seus próprios demônios. Humanoides com traços das bestas reptilianas que assolam a ilha. Os povos-trovão.

  Não há consenso sobre a origem dos thera, como são conhecidos no meio acadêmico. Nenhuma divindade maior parece clamar sua criação. É certo apenas que, embora também existam em outros pontos de Arton — sobretudo na Grande Savana —, eles são mais numerosos e bem adaptados em Galrasia, onde parecem ter surgido. Pois aqui vivem os lagartos-trovão de quem provavelmente descendem.

  Talvez. Pois embora sejam análogos a várias espécies sauroides, alguns estudiosos contestam a teoria de que os thera descendem de dinossauros. Povos-trovão são muitas vezes confundidos com trogs e outros povos-lagarto, mas não existe parentesco próximo. Têm sangue quente, sem nenhuma vulnerabilidade especial ao frio. Seus dentes têm formatos diferentes, o que não acontece em répteis. Mais importante ainda, são mamíferos, amamentando as crias na infância.

  Existe ainda uma lenda sobre os povos-trovão serem frutos de cruza profana entre Galron e Obassa, agora transformada em serpente — em uma tentativa insana de restaurar a raça eiradaan.

  Thera existem em quatro raças principais, cada uma ocupando um tipo de terreno preferido. Ceratops são grandes e robustos como minotauros, com chifres e escudos de osso nas cabeçorras, vivendo em cavernas e clareiras. Velocis são corredores nômades e esquivos, lembrando antílopes nas pradarias. Pteros são alados e monogâmicos, formando casais que constroem ninhos em penhascos litorâneos. E voracis ou “caçadoras” são predadores alfa de comportamento semelhante a panteras, caçando nas selvas.

  Levando vidas rústicas e violentas, até recentemente os povos-trovão eram apenas outra ameaça, espreitando e abatendo exploradores que ousavam invadir seu território. Com o tempo, contudo, cada vez mais expedições têm sido bem-sucedidas em fazer diplomacia com os nativos — inicialmente com ofertas de itens metálicos, que os thera não sabiam forjar, em troca de passagem segura por suas terras. Mais tarde, cobiçando as valiosas armas e ferramentas metálicas dos estrangeiros, alguns thera aceitariam ser contratados como guias e batedores. Hoje, embora algumas tribos ainda se mantenham isoladas e hostis, muitos povos-trovão negociam pacificamente com visitantes. Alguns até mesmo deixam Galrasia, juntando-se a tripulações de navios, grupos de aventureiros, ou buscando novas vidas no continente.`
      },
      {
        title: "Lysianassa",
        content: `Por séculos, Galrasia tem sido um magneto para aventureiros — por ser relativamente próxima do Reinado, apesar da jornada perigosa. Partindo de Nova Malpetrim, na travessia do turbulento Mar Negro, são comuns as tempestades e ataques de elfos-do-mar ou monstros marinhos. Chegando à ilha em si, suas selvas são pululantes de lagartos-terror famintos e outros predadores, bem como tribos ainda reclusas e sanguinárias de povos-trovão. Nem mesmo a viagem de volta é livre de perigos, pois piratas atrevidos espreitam para saquear quaisquer tesouros encontrados.

  Os riscos são altos, mas as recompensas potenciais compensam. Desde materiais raros para armas e armaduras até fabulosos artefatos eiradaan, passando por flores e frutos exóticos, ingredientes de alquimia ou até safáris para nobres em busca de emoção. Também há muito mercado para criaturas nativas capturadas com vida, negociadas a preços altíssimos na Cidade Baixa de Nova Malpetrim: feras galrasianas são altamente cobiçadas como espécimes para estudos, montarias fantásticas, animais de guarda, bestas de guerra ou para combates de arena.

  Nem todos os heróis visitam Galrasia em busca de ouro; por vezes a ilha sediou eventos notáveis. Aqui, Mestre Arsenal viveu seus primeiros anos após chegar a Arton, cuidado e protegido por uma dríade — e juntos geraram Lisandra, a primeira dahllan na história do mundo e atual sumo-sacerdotisa de Allihanna. Em evento relacionado, mais tarde o Paladino de Arton também jazeria aqui, antes de recuperar os primeiros Rubis da Virtude. A ilha também seria palco da Expedição de Darvos, quando este ricaço de Deheon buscou uma cura para a maldição da filha. Ainda, aqui também estaria uma das peças do infame Disco dos Três, entre outras sagas heroicas.

  A ilha onde nenhum humano viveu, aos poucos, recebia mais e mais visitantes. O santuário de Allihanna estaria ameaçada? Talvez para proteger a tranquilidade da deusa — e também as vidas dos exploradores —, uma misteriosa ordem de druidas conhecida como Oqamm seria revelada. Formada apenas por dahllan, seu objetivo parecia o mais inacreditável: erguer uma cidade em Galrasia. Lysianassa, como seria nomeada.

  Erguer, mas não construir. Recorrendo a seus poderes druídicos — e também ao sangue dríade racial —, as Oqamm pediram à vegetação litorânea para crescer como nunca cresceu antes. Crescer na forma de torres, muralhas, passadiços, ancoradouros, oficinas, templos, habitações para os povos estrangeiros. Moldar a madeira em paredes fortes e elegantes, para trazer calma, abrigo e repouso. Demonstrar que a natureza é acolhedora, bondosa, amiga. Demonstrar que visitantes são bem-vindos, quando escolhem tratar Allihanna com respeito.

  Imagine-se a surpresa das expedições seguintes ao encontrar, na costa do Mundo Perdido, uma cidade portuária de beleza indescritível, quase élfica!

  Os primeiros visitantes, inicialmente desconfiados, acabaram logo convencidos pelas boas-vindas das Oqamm — sempre misteriosas sob suas máscaras de madeira, mas igualmente gentis, prestativas, cordiais. Convidaram a espalhar a boa nova, convidaram a viver aqui. Demorou pouco até a chegada de navios lotados trazendo a futura população local.

  Hoje, Lysianassa é muitas coisas. A única grande cidade em Galrasia, populosa e vibrante. Um posto avançado e base de operações para novas expedições. Um entreposto comercial valioso para negociar com o continente. O único lugar seguro para se viver no Mundo Perdido, protegido de suas feras (as Oqamm simplesmente pedem aos lagartos-terror para ficar longe). Por outro lado, as gentis e pacientes druidas orientam caçadores sobre como evitar ofensas à deusa, como desfrutar da generosidade da natureza sem ganância.

  Há rumores sobre o destino daqueles que ignoram o apelo das Oqamm, caçando e matando mais do que deveriam. Por via das dúvidas, todos evitam fazê-lo.`
      }
    ]
  },
  { id: "valkaria",
    name: "Valkaria",
    subtitle: "A Cidade sob a Deusa",
    tag: "Reinado",
    image: "/regioes/valkaria.png",
    coatOfArms: "/regioes/valkaria-brasao.png",
    intro: `Valkaria. Em Arton, o próprio nome evoca a ideia de aventuras, insatisfação, ambição e criatividade. Valkaria é a Deusa da Humanidade, da Ambição e dos Aventureiros. Punida após a Revolta dos Três, libertada por seus campeões, celebrada como a líder do Panteão. Também a capital do Reinado, onde os primeiros colonos começaram sua nova civilização, aos pés da gigantesca estátua de sua padroeira — na verdade, aos pés da própria divindade suplicante! Não existe nenhum artoniano que não tenha opinião sobre Valkaria.
  Muitos sonham em viver na maior cidade do mundo conhecido, desfrutar de seus luxos e maravilhas… Mas, ao tentar construir uma vida na cidade, deparam-se com uma realidade de pobreza, violência urbana e indiferença. Outros sabem que nunca suportariam morar em uma aglomeração tão grande e falam de Valkaria como de uma ferida na face de Arton.
  No entanto, os sonhos dos imigrantes também são verdadeiros. Valkaria possui beleza incomparável, festivais toda semana (ou todo dia!), prodígios mágicos, heróis e deuses menores transitando pelas ruas, arquitetura mirabolante, grifos e ornitópteros voando pelos céus… Além de oportunidades infinitas. Diz-se que, em Valkaria, qualquer um pode ser um aventureiro e todo valkariano já viveu alguma aventura. Não é incomum que exista uma masmorra cheia de tesouros sob o porão de uma casa razoavelmente antiga ou a torre de um necromante oculta no meio de uma vizinhança normal. Todas as histórias são verdadeiras, todas as representações são fidedignas — em Valkaria, tudo existe.
  A maioria dos habitantes de Valkaria nunca moraria em outro lugar. Acostumados à variedade, ao mundo se apresentando em sua própria vizinhança, os valkarianos amam sua cidade. Mesmo aqueles que a amaldiçoam não toleram que estrangeiros falem mal — apenas os verdadeiros filhos de Valkaria podem esbravejar contra seu lar.
  Embora possam ser esnobes, os valkarianos têm certa razão: não existe lugar mais cosmopolita no Reinado e talvez no mundo todo. As ruas de Valkaria são repletas de pessoas de todas as raças, cheiros pungentes de especiarias exóticas, idiomas estranhos misturando-se numa colcha de retalhos capaz de atordoar um recém-chegado. Imigrantes de reinos vizinhos, de terras distantes ou mesmo de outros mundos e dimensões convivem na capital, inserindo um pouco de sua cultura no grande caldeirão que abriga todos. O clima em Valkaria é sempre frenético: centenas de coisas acontecendo ao mesmo tempo, notícias chegando de todos os lados, nobres e aventureiros famosos transitando pelas ruas, ameaças de todos os tipos surgindo e sendo derrotadas, novos deuses sendo descobertos e angariando seguidores.
  Os habitantes de Valkaria estão acostumados ao extraordinário — na verdade, estranham quando algo importante para o Reinado acontece em outro lugar! Parece óbvio que o grande plano de Mestre Arsenal envolvesse marchar com seu construto gigante até Valkaria. É evidente que os minotauros atacaram Valkaria. Não havia dúvida de que o grande objetivo dos puristas fosse Valkaria. Da mesma forma, aparições do Paladino ou passagem de figuras famosas como Niele, Nargom, Crânio Negro e Vectorius são eventos esperados. Para o povo de Valkaria, o mundo gira em torno de seu quintal.
  Há um ditado que afirma que “se existe em Arton, existe em Valkaria”. Praticamente tudo que o mundo tem a oferecer, seja bom ou ruim, pode ser encontrado na capital. Tudo em Valkaria também é superlativo, exagerado. Um comerciante valkariano ganha dez vezes mais ouro que outro em um reino pequeno. Em contrapartida, também gasta dez vezes mais. Não existe uma ameaça a Valkaria que não tenha repercussões no resto do mundo. Se a capital é atacada, toda a civilização artoniana é atacada! A recíproca também é verdadeira: para que algo tenha repercussão no mundo todo, em geral deve passar por Valkaria. Um herói não pode afirmar ser realmente lendário a menos que tenha passado por Valkaria. Um bardo não é famoso no mundo todo enquanto não tiver se apresentado aos nobres da cidade. Um gladiador não será o maior campeão se não for campeão da Arena Imperial.
  A imensa deusa de pedra no centro de Valkaria inspira todos os habitantes. Esta é uma cidade em eterna evolução. Quando a Deusa da Humanidade foi libertada, muitos de seus devotos lamentaram ter de deixar a querida capital para pregar a palavra de sua padroeira mundo afora. Esta é Valkaria, centro da civilização. Valkaria, onde uma deusa é visão comum. Valkaria, que dita os costumes, desejos e ambições de todo o Reinado. Dizem que, se você não está em Valkaria, não está vivo… Mas em poucos lugares existem tantas chances de ser morto.`,
    facts: [
      { label: "Lema", value: "“Nossa Origem, Nosso Destino”." },
      { label: "Brasão", value: "de prata um frete de vermelho e bordadura de púrpura." },
      { label: "Gentílico", value: "valkariano." },
      { label: "Regente", value: "Lordes Urbanos." },
      { label: "População", value: "2.000.000." },
      { label: "Raças Principais", value: "humanos." },
      { label: "Divindades Principais", value: "Valkaria, Khalmyr, Tibar, Marah." }
    ],
    sections: [
      {
        title: "O Poder na Capital",
        content: `Toda essa aglomeração e variedade (sem falar no tamanho descomunal de tudo) são um pesadelo administrativo. Embora Shivara resida em Valkaria e teoricamente governe a cidade, é impossível acumular controle direto da capital com a soberania de todo o Reinado. Apenas administrar Valkaria já seria equivalente a governar um reino de médio porte!

  A Rainha-Imperatriz tem a palavra final sobre quaisquer decisões, mas raramente exerce esse direito, exceto nos tópicos mais importantes. A administração diária fica a cargo dos Lordes Urbanos, cada um encarregado de governar e supervisionar uma parte da cidade. Há muito tempo, os Lordes Urbanos eram apenas quatro: o Lorde do Norte, do Sul, do Leste e do Oeste, dividindo a cidade em partes iguais. No entanto, logo mais Lordes se fizeram necessários. Hoje em dia existem incontáveis Lordes Urbanos com funções específicas: o Lorde dos Esgotos do Bairro do Recomeço, o Lorde dos Templos de Deuses em Observação, o Lorde das Passagens Subterrâneas sem Monstros… Muitas vezes suas responsabilidades se sobrepõem e ninguém tem certeza sobre qual autoridade governa determinado local. Quando a torre de um mago é ocupada por aventureiros, está sob a jurisdição do Lorde das Construções Similares a Castelos ou do Lorde das Habitações Arcanas? Some-se a isso vários secretários e administradores públicos (o Supervisor das Escolas Não Aventurescas, o Guardião das Estradas Leste-Oeste, o Alcaide dos Becos Considerados Perigosos) e Valkaria se torna um labirinto de burocracia.

  Embora isso possa ser um pesadelo para os funcionários públicos e quem depende deles, aventureiros e tipos empreendedores acabam tendo grande liberdade na capital — porque muitas vezes ninguém tem certeza sobre quem deveria controlar suas atividades. Não é um sistema perfeito. Embora vários desses administradores sejam honestos e dedicados, outros querem apenas tirar vantagem de seu cargo. Mesmo que houvesse um grande esforço para reformar essa estrutura, ninguém saberia por onde começar… Ou como delegar toda essa responsabilidade para uma só pessoa.

  O processo de escolha dos Lordes Urbanos também não é unificado. Alguns são literalmente lordes: senhores de terras cujo cargo é hereditário. Outros Lordes Urbanos são eleitos por um grupo específico (cidadãos da região, nobres, funcionários da cidade, crianças de determinadas famílias, donos de animais numa área específica, membros de certas guildas…). Isso significa que quase sempre há algum tipo de eleição acontecendo em Valkaria. Ainda há Lordes que ascendem por meio de testes, torneios ou por escolha do Lorde anterior (ou de um nobre específico). Muitas vezes um Lorde Urbano muda sem que os cidadãos sequer fiquem sabendo. Enquanto alguns Lordes Urbanos gastam todo o tempo de que dispõem em suas funções públicas, outros têm cargos menos exigentes. Existem até mesmo aventureiros que ocupam cargos de Lordes Urbanos.`
      },
      {
        title: "Anatomia de uma Metrópole",
        content: `Talvez seja possível descrever com detalhes cada ruela e prédio da maior cidade do mundo — mas seriam necessários diversos volumes, que ficariam obsoletos em pouco tempo. De fato, nenhum mortal pode afirmar com absoluta certeza que conhece cada ponto de Valkaria. Existem tantos becos, praças, hospedarias, passagens subterrâneas e pontes que apenas um verdadeiro explorador poderia mapear todos, numa expedição tão longa e perigosa quanto uma jornada pelo Deserto da Perdição.

  Valkaria possui uma grande muralha, assim como quase todas as cidades de grande porte. A muralha já foi demolida várias vezes, para ser reconstruída mais à frente, expandindo os limites da cidade. Sempre houve uma preocupação dos governantes em não deixar que se formasse um ajuntamento grande demais de construções encostadas à muralha do lado de fora, mas nada foi capaz de deter o inchaço e o desenvolvimento de Valkaria, principalmente depois da Guerra Artoniana.

  O grande influxo de refugiados e o caráter cada vez mais permanente de acampamentos militares construídos logo fora da capital durante a guerra deram origem a pequenas comunidades que deveriam ser aldeias… Mas que logo se tornaram parte de Valkaria. Os prédios construídos nesses novos povoados não eram rurais ou típicos de vilas, mas influenciados pela arquitetura valkariana. Muitos dizem que isso é causado pela proximidade da deusa. Outros vão além, afirmando que a explosão de desenvolvimento em Valkaria é efeito da ascensão da Deusa da Humanidade à liderança do Panteão. De qualquer forma, a cidade explodiu em poucos anos, espalhando-se pelas planícies ao redor e engolindo aldeias próximas. Hoje em dia, Valkaria é a única megalópole conhecida em Arton, ocupando o espaço de um pequeno reino. Muitos garantem que, um dia, Valkaria ocupará todo o território de Deheon.

  Boa parte da cidade é dominada por prédios de apartamentos. Essas construções quase desconhecidas em Arton se erguem em torno de um pequeno pátio comunitário e possuem um negócio (como um açougue ou loja) em seu andar térreo. Nos andares superiores há habitações para famílias. Em caso de incêndio, revoada de dragonetes, chuva de meteoros ou outro desastre, os andares superiores são muito menos seguros e seus moradores demoram muito mais tempo para descer e fugir à segurança. Assim, os apartamentos superiores são muito mais baratos. De início, os edifícios tinham quatro andares ou menos. Mas a falta de espaço na capital fez com que passarelas e plataformas fossem construídas para ligar os andares mais altos de diferentes prédios. Então novos prédios foram erigidos sobre algumas plataformas, dando origem a torres muito altas e instáveis. Os pontos mais movimentados de Valkaria contam com vários “níveis” de calçadas, entre os quais transitam tanto veículos e animais terrestres quanto criaturas aladas, tapetes mágicos e engenhocas voadoras… Além de pedestres, é claro! Recentemente passaram a existir prédios altíssimos que são verdadeiras cidadelas por si só, projetados para este tamanho. Nesses casos, os andares superiores abrigam arquimagos, ricaços e nobres.

  Existe uma dicotomia estranha entre a área intramuros (dentro da muralha) e extramuros (fora da muralha). Vários bairros extramuros são ricos e bem desenvolvidos, mas mesmo os habitantes de partes humildes intramuros às vezes são um pouco esnobes com seus vizinhos. Tudo que é intramuros é considerado mais tradicional, sólido, “mais valkariano”. Muitas pessoas preferem morar intramuros, mesmo que sejam obrigadas a ocupar prédios precários.

  A maior parte das ruas é estreita, entre fileiras de prédios altos. Durante o dia, essas passagens estão repletas de transeuntes, mendigos, punguistas, vendedores de rua, pregadores e outros. Para adicionar ainda mais caos, é permitida a entrada de animais e carroças na cidade — muitas vezes, um cavaleiro atropela os pedestres nas ruelas ou uma carroça fica entalada entre duas construções. Existem avenidas largas, levando aos pontos principais e situadas nas zonas mais nobres. É impossível para a Guarda e os Lordes Urbanos vigiar cada ruela; assim, apenas as mais importantes têm aparência de ordem e limpeza, as demais são cheias de cartazes, bandeirolas, pequenos altares, pichações e lixo, controladas por seus próprios moradores. As ruas calçadas com paralelepípedos são maioria, mas ainda existem ruas de terra.

  Mesmo os moradores mais humildes podem transitar por (quase) todas as áreas da capital. Não há uma divisão entre pobres e ricos, plebeus e nobres, tão clara quanto em outras cidades. Um tratador de cavalos, lavadeira ou pedreiro visita a estátua de Valkaria, assim como um lorde ou banqueiro. Mendigos têm espaço na Catedral, assim como qualquer mercador de joias. Isso leva alguns valkarianos orgulhosos a dizer que mesmo os pedintes da capital são mais refinados e cultos que os nobres de outras partes.

  Contudo, existem enormes contrastes entre áreas ricas e humildes. Nos bairros nobres, lampiões (ou magia, em casos de maior opulência) iluminam as ruas à noite. Na maior parte da cidade, apenas algumas tochas deixadas por moradores ou taverneiros cumprem esse papel. Nas zonas baixas, não há qualquer tipo de iluminação. À noite, as ruas são tão escuras quanto uma masmorra.

  Não existem endereços com números e outros tipos de localização precisa — nem mesmo todas as ruas têm nome! Casas e estabelecimentos são identificados em relação a pontos de referência. Ninguém fala do “número 100 da Rua A”, mas da “casa vermelha após o Monumento do Anão Caolho”.

  Tudo isso faz com que atravessar Valkaria seja uma aventura. Um trajeto que demoraria minutos numa metrópole normal pode levar horas na capital do Reinado. Muitos grupos de aventureiros vivem em Valkaria, visitando seus bairros como quem empreende uma jornada pelos ermos, enquanto cidadãos comuns costumam ficar em sua vizinhança, tratando outros bairros quase como terras estrangeiras!`,
        sidebars: [
          {
            title: "Só Mesmo em Valkaria",
            content: `A capital do Reinado é uma cidade única. Sendo assim, alguns fenômenos acontecem apenas em Valkaria — pelo menos até onde se sabe.

  Valkaria não possui uma guilda de ladrões toda-poderosa. Em vez disso, existem irmandades, organizações criminosas cheias de história e tradição. Veja uma descriçao completa das irmandades, seus negócios, seus líderes e suas rivalidades no Capítulo 4: Organizações.

  A nobreza de Valkaria também é diferente. Embora existam nobres “comuns” na cidade, o termo “nobreza de Valkaria” denota famílias incrivelmente ricas, mesmo para os padrões nobres! Indivíduos que tiram férias nos reinos dos deuses, compram e vendem artefatos, financiam divindades menores e são bajulados por arquimagos. Alguns, como o paladino Alexandros, da família Karmel, notam a futilidade dessa existência e a abandonam. Outros, como o osteon Maneto Serpe Noel, dedicam sua riqueza, sua vida e até mesmo sua pós-vida a ajudar inocentes sem esperar nada em troca… Mas a maior parte da nobreza valkariana vive em um mundo à parte, sem conhecer as dificuldades das pessoas comuns.

  A Guarda de Valkaria é, até onde se sabe, a força policial mais avançada de Arton. Dividida em guaritas lideradas por xerifes e sob a supervisão do Lorde da Justiça, a Guarda possui detetives que empregam técnicas sofisticadas de investigação para solucionar crimes. Muitos grupos de aventureiros trabalham em parceria com a Guarda, recebendo o posto de detetives temporários. Esses aventureiros enfrentam um novo tipo de desafio: além de vencer os vilões, precisam coletar provas para que eles sejam julgados e condenados! A Guarda também abre possibilidades de aventuras para alguns que ingressam como patrulheiros e ascendem a detetives. É o caso do guerreiro Joba, um órfão criado nas ruas da capital, que conheceu seu grupo numa guarita e partiu com eles para se tornar um herói.

  Por fim, em Valkaria existem aventureiros esquisitos chamados “vigilantes mascarados”. Esses tipos escondem seus rostos com máscaras e uniformes, adotam codinomes e rondam as ruas e telhados da capital à noite, em busca de criminosos que precisem ser levados à justiça e inocentes que precisem ser protegidos. Ninguém sabe o que leva uma pessoa a viver dessa forma, mas os vigilantes mascarados são figuras polêmicas. Alguns, como Extinção, são inimigos da Guarda, pois acham que a lei é muito leniente com os criminosos. Outros, como o Vingador de Val, parecem respeitar o trabalho de patrulheiros e detetives. Outros ainda, como Vendetta, defendem os ideais da própria deusa Valkaria, sem tanta preocupação com o que a lei dos humanos diz.`
          }
        ]
      },
      {
        title: "Bairros",
        places: [
          {
            name: "Bairro do Recomeço",
            content: "O Bairro do Recomeço é o reduto de inúmeras famílias nobres, descendentes dos primeiros colonos. É dominado por mansões, pequenos castelos e palacetes. Aqui fica o “dinheiro antigo” da capital, os sobrenomes mais tradicionais. Várias regiões são barradas extraoficialmente pelos guardas e cavaleiros de algumas famílias. Isso teoricamente é proibido, então tudo acontece de maneira velada, com batalhões seguindo os visitantes ou perguntando se eles “precisam de ajuda”. Aqui podem ser encontrados parques, monumentos bem cuidados, fontes movidas por magia e todo tipo de luxo que só está disponível para a alta nobreza, mas também áreas públicas acessíveis a todos. O bairro é bem próximo à estátua de Valkaria — não é uma posição tão privilegiada geograficamente, mas conta com muito prestígio."
          },
          {
            name: "Baixa Vila de Lena",
            content: "O mais tradicional bairro boêmio de Valkaria, cheio de tavernas, teatros, ateliês, guildas de bardos, palcos improvisados e todo tipo de construção destinada a quem respira a vida noturna. Originalmente, seu nome fazia alusão à Alta Vila de Lena (um bairro logo ao norte), mas desde então a Alta Vila se desmembrou em inúmeras outras vizinhanças. Além dos estabelecimentos comerciais, a Baixa Vila abriga muitas casas antigas — em geral ocupadas por jovens ou artistas, que toleram a barulheira que existe nas ruas à noite. Diz-se que vampiros, mortos-vivos e servos de Tenebra espreitam na Baixa Vila de Lena, misturando-se com os boêmios e os caçando. Este bairro não fica muito longe da estátua de Valkaria, sendo um ponto bastante tradicional da capital."
          },
          {
            name: "Cidade da Praia",
            content: "O nome confunde os estrangeiros, mas os valkarianos já estão acostumados. Obviamente, este bairro não conta com uma praia — mas diz a história que um mago excêntrico desejava construir uma praia artificial em Valkaria e comprou uma enorme quantidade de terras. O projeto nunca passou de alguns canais cortando as vizinhanças, mas hoje a Cidade da Praia é um bairro famoso. Talvez pelo nome, ou por sua história, ou pela curiosidade das vias fluviais, existe um clima de separação do resto da capital, como se o bairro fosse uma cidade à parte. Seus habitantes são considerados menos sofisticados que os outros valkarianos, caipiras dentro do centro urbano. Também não é um bairro rico, e o preço das propriedades aqui é baixo. A Cidade da Praia abriga muitas oficinas, estábulos, curtumes e outros estabelecimentos pouco agradáveis, além de um bom número de gangues. Curiosamente, seus habitantes têm sotaque um pouco diferente dos outros valkarianos e existe entre eles um forte sentimento de união. Torcem pelos gladiadores naturais do bairro, resmungam sobre “os empolados que moram perto da estátua” e amaldiçoam negócios que se mudam para outros bairros. Quem vai morar em outras áreas de Valkaria é considerado “vendido” ou até mesmo traidor. Nos últimos anos, o famoso império comercial Metais do Baixote se tornou um dos maiores orgulhos da Cidade da Praia."
          },
          {
            name: "Favela dos Goblins",
            content: "Sem dúvida a maior concentração de pobreza e a parte da cidade que recebe maior descaso, esta é uma favela verdadeira. Não há prédios malcuidados ou armazéns abandonados, mas casas feitas de madeira descartada e outros pedaços de lixo. Originalmente, os casebres da Favela eram feitos de pedras empilhadas, semelhantes a iglus, mas mesmo esta técnica está sendo abandonada, pois os goblins não têm mais acesso ao material.\nHá uma rede de túneis subterrâneos na Favela dos Goblins, que leva a outras partes de Valkaria. Apenas os próprios goblins conhecem toda a extensão dessas rotas; as autoridades estão sempre fechando os túneis que descobrem e procurando outros. A rede subterrânea causa desabamentos com certa frequência, quando o próprio chão entra em colapso sob alguma casa, soterrando inúmeros moradores. A vida dos goblins é curta e brutal, mas há um forte sentimento de comunidade na Favela. Os goblins cuidam uns dos outros, mas este pode ser um lugar muito perigoso para pessoas de outras raças. O grande protetor da Favela dos Goblins é o vigilante mascarado conhecido como Goblin Herói, uma figura mítica que muitos dizem nem mesmo existir. A Favela também é palco de grandes experimentos e testes de invenções inusitadas. Um de seus maiores inventores é Albert, um goblin de intelecto genial que já recusou vários convites para integrar oficinas de prestígio na capital."
          },
          {
            name: "Mercado",
            content: "O imenso mercado de Valkaria é um verdadeiro bairro por si só, uma aglomeração de lojas permanentes e tendas que são montadas e desmontadas a cada dia. Os donos dessas tendas temporárias competem entre si pelos melhores lugares, chegando cada vez mais cedo para garantir suas vagas. Quase tudo pode ser comprado aqui. Lojas famosas e tradicionais são o Empório Bélico de Bellantor (loja de armas de posse de um anão), a Sassafrás Artigos Alquímicos (produtos de alquimia e componentes mágicos), Legrasse & Legrasse (irmãos meios-elfos alfaiates), Loja Boca Cheia (doces, principalmente gorad — agora muito caro devido às Guerras Táuricas) e a Ponte do Conhecimento (os copistas de livros mais rápidos do mundo conhecido). Obviamente, existe uma infinidade de lojas e tendas fora do mercado — mas o espaço tradicional ainda é muito valorizado."
          },
          {
            name: "Nitamu-ra",
            content: "O bairro tamuraniano, criado quando o imperador de Tamu-ra transportou os sobreviventes do ataque da Tormenta. É radicalmente diferente do resto de Valkaria: em vez de gritaria e ruas apertadas, serenidade e jardins bem tratados. Em vez de gente de todas as raças e etnias berrando para vender produtos, um povo quieto e trabalhador, que se esforça em silêncio para o bem-estar geral. No entanto, cada vez mais “estrangeiros” (ou seja, aqueles sem ascendência tamuraniana) visitam Nitamu-ra, por curiosidade ou para comprar as mercadorias exóticas que só podem ser encontradas neste local. Muitos tentam conseguir um mestre que os treine como samurais ou em alguma arte marcial. Alguns habitantes do bairro veem isso com desprezo, mas outros acolhem os visitantes, apreciando o interesse por sua cultura. Da mesma forma, muitos tamuranianos jovens rejeitam as tradições de seu povo, passando cada vez mais tempo em outras áreas da cidade e vestindo-se como os demais valkarianos. Desde a destruição da área de Tormenta de Tamu-ra, existe um levante para que os moradores do bairro voltem à ilha, para começar a reconstrução."
          },
          {
            name: "Refúgio da Felicidade",
            content: "Outro bairro nobre — mas dominado pelas famílias que ascenderam há pouco tempo. Fica próximo à muralha e é planejado por engenheiros, sendo uma verdadeira obra de arte, com jardins e estátuas por todos os cantos. Conta até mesmo com uma miniatura da estátua de Valkaria. Tudo a respeito do bairro (incluindo seu nome e decoração) é considerado brega pelos aristocratas tradicionais. O Refúgio da Felicidade também atrai aventureiros que enriquecem subitamente (e que muitas vezes perdem tudo com igual rapidez). O guerreiro conhecido apenas como Smarth é notório por abrigar em sua mansão inúmeros “colegas aventureiros” e “parentes desconhecidos” que costumam “pegar emprestados” seus itens mágicos, joias, baús cheios de tibares… Talvez a gigantesca fortuna do herói o impeça de notar isso — ou talvez seja seu diminuto intelecto."
          }
        ]
      },
      {
        title: "Pontos de Interesse",
        places: [
          {
            name: "Arena Imperial",
            content: "O maior centro de combates de gladiadores e eventos esportivos no mundo conhecido, rivalizando apenas com a Arena de Tiberus. Em geral, as lutas não são até a morte — inclusive porque treinar gladiadores é muito caro! A Arena Imperial é fonte de grandes celebridades, como a estrela meia-elfa Loriane. Recentemente, o golem conhecido pelo sugestivo nome de Triturador vem ganhando fama na Arena. Muitos afirmam que um construto fabricado para lutar possui vantagens injustas sobre outros competidores. Além disso, o Triturador parece não entender que seus adversários são criaturas vivas, ocasionalmente matando os derrotados em lutas que deveriam ser seguras.\nMuitos gladiadores contam com empresários, patronos e uma verdadeira equipe de apoio: ladinos para descobrir fraquezas dos adversários, clérigos para curar suas feridas, bardos para espalhar sua fama, arcanistas para anular qualquer trapaça mágica… Além de lutas tradicionais entre os gladiadores da casa, são comuns embates entre grupos de aventureiros, batalhas contra monstros e campeonatos amadores."
          },
          {
            name: "Banco Tibar",
            content: "Existem inúmeros agiotas e “emprestadores de dinheiro” na capital, mas este é um dos únicos bancos oficiais. De posse de clérigos de Tibar, o Deus Menor do Comércio, e considerado sagrado, este centro financeiro empresta dinheiro a altos juros, protege os recursos de ricaços e transfere fundos para os mais distantes locais (algo muito útil para aventureiros em jornadas). Os cofres contam com proteções mágicas e mundanas, mas isso não impede que haja tentativas de roubo de tempos em tempos. Uma das mais notórias (e de maior sucesso) foi realizada pelo espadachim e clérigo de Valkaria Haggen Maavis, que foi encontrado e capturado após deixar um bilhete dentro dos cofres — dizendo que nunca tivera o objetivo de roubar, apenas de desafiar a si mesmo. Alguns acusam o Banco Tibar de colaborar com vilões, aceitando ouro saqueado ou proveniente de atrocidades. Outros chegam mais longe, dizendo que a instituição, além de dinheiro e riquezas, também guarda em seus cofres almas e outras moedas de troca profanas de demônios e deuses malignos! Existem casos de aventureiros contratados para se infiltrar no banco e descobrir quem são seus clientes mais misteriosos."
          },
          {
            name: "Estátua de Valkaria",
            content: "O ponto de chegada da caravana de refugiados de Lamnor, que marcou o fim de sua jornada de redenção. Também o marco zero da fundação do Reinado e o grande símbolo do encontro entre as culturas dos dois continentes. A área ao redor, muitas vezes chamada apenas de “centro”, é repleta de vendedores, tavernas, guias, teatros e outras curiosidades. É uma das áreas mais caras do Reinado — um taverneiro aqui ganha muito dinheiro com turistas e peregrinos, mas precisa pagar taxas que fariam qualquer mercador comum desmaiar! Mesmo assim, este é um dos espaços mais democráticos de Arton, com altos nobres e artesãos humildes transitando pelas mesmas ruelas e bebendo nas mesmas tavernas. Atraindo tanta gente, a zona ao redor da estátua é um prato cheio para bandidos e vigaristas de todo tipo. De tempos em tempos, há um esforço para “limpar” a área, substituindo tavernas insalubres por ateliês, templos e lojas de lembranças, e expulsando os aproveitadores. No entanto, eles sempre voltam. Também é comum ver perto da estátua o mendigo louco Tilliann, além de uma grande variedade de tipos pitorescos, bardos e qualquer um em busca de atenção e fama. Recentemente a área próxima à estátua viu a chegada do Empório Purpúrea, um fabricante de cosméticos de posse de uma fada muito honesta e, até onde se sabe, o primeiro comércio no modelo “funil invertido” de Arton. Outro destaque é o escritório de advocacia Reston & Dubitatius, dedicado a defender acusados que não têm condições de contratar seus próprios advogados — e famoso pelo slogan “um escritório que existe”, típico de seus sócios, dois devotos de Tanna-Toh."
          },
          {
            name: "Palácio Imperial",
            content: "Uma construção monumental, considerada uma das maravilhas de Arton. O Palácio Imperial abriga a Rainha-Imperatriz e sua corte, além de incontáveis nobres e servos. O palácio é uma das estruturas mais seguras de todo o mundo. Conta com guerreiros, magos e clérigos poderosos, além de magias permanentes em suas paredes e cômodos. Existe uma sala de guerra sem portas ou janelas, que só pode ser acessada através de magias protegidas por senhas e palavras secretas. A área ao redor do palácio é a única em Valkaria oficialmente proibida para as pessoas comuns. Existe um perímetro patrulhado por guardas (que contam com magos e outros especialistas). Apenas convidados e servos do palácio têm permissão de andar por essas ruas. Em caso de invasão, os guardas convergem para o intruso, soldados são chamados e magias fecham as ruas com muralhas de ferro, portais e outros efeitos."
          },
          {
            name: "Praça de Diversões e Maravilhas Grimbo",
            content: "Há décadas, o ilusionista hynne Grimbo Tuluntum decidiu construir uma imensa área com brinquedos mecânicos, diversões movidas por magia ilusória e todo tipo de maravilhas para as crianças de Valkaria. Seria um “parque de diversões”. No entanto, depois da morte do fundador, a Praça Grimbo se tornou cada vez mais decadente — seus filhos nunca se interessaram pelo negócio. Alguns brinquedos estão interditados, enferrujados e imóveis. Outros, apesar do estado lamentável, ainda são usados (diz-se haver um grande número de acidentes, acobertados pela família Tuluntum). “Atores” meio bêbados desfilam em fantasias puídas, retratando heróis artonianos em forma caricatural, em meio a imensas estruturas periclitantes de metal e madeira. A “casa assombrada” ilusória hoje em dia, segundo boatos, é realmente assombrada pelos fantasmas das vítimas de acidentes. E a “Roda da Ambição” (engenhoso artefato mecânico, que deveria elevar os visitantes até a altura da cabeça da estátua de Valkaria) conta com apenas metade de suas gôndolas, todas rangendo e pendendo perigosamente. “Engenheiros” goblins são contratados para dar um jeito temporário nos brinquedos. Mesmo assim, existem famílias que visitam o lugar, atraídas pelo baixo preço."
          },
          {
            name: "A Rocha Cinzenta",
            content: "A prisão de Valkaria não fica no subterrâneo do Palácio Imperial, mas em um enorme prédio lúgubre e abrutalhado, na forma de um grande paralelepípedo, sem portas e entradas visíveis. Conhecida como “Rocha Cinzenta”, esta prisão abriga detentos permanentes (que cumprem penas de anos, décadas ou perpétuas) e prisioneiros temporários, que aguardam deportação, envio para a Arena ou até mesmo execução. Existem alas especiais para contenção de mortos-vivos e demônios, e toda a prisão conta com um poderoso efeito que bloqueia poderes de todos os tipos. Diz-se que, nos porões da Rocha, há um prisioneiro que está lá há mais de um século, na solitária. Ninguém conhece sua identidade, ou mesmo tem certeza de sua existência. O diretor da prisão é Bartolakk, um golem de ferro inteligente construído especificamente para esta função, que nunca dorme e está sempre trabalhando."
          },
          {
            name: "Gazeta do Reinado",
            content: "Existem pouquíssimos veículos de informação impressos em Arton e a Gazeta do Reinado é decididamente o maior e mais importante. Sua sede fica no segundo andar de um prédio humilde, acima de um açougue (as brigas entre os dois estabelecimentos são lendárias). A Gazeta é um trabalho de amor dos editores e redatores que escrevem as matérias e operam as prensas, conhecidos apenas como “Goblins de Valkaria”. Também há alguns repórteres e correspondentes voluntários espalhados por todo o Reinado, que enviam relatos de suas aventuras e de acontecimentos importantes em outros reinos. Os editores da Gazeta são caóticos, sensacionalistas e exaltados, mas não têm medo de falar a verdade. Isso rende vários inimigos aos Goblins, mas eles não parecem se importar — ou há sempre outros goblins para tomar seu lugar. A sede já foi alvo de vários ataques e já houve verdadeiras batalhas em que os Goblins de Valkaria defenderam a Gazeta com armas. A Gazeta por enquanto é apenas uma folha dobrada e impressa dos dois lados, mas já teve grande importância para a divulgação de informações, principalmente durante a Guerra Artoniana."
          },
          {
            name: "Biblioteca das Duas Deusas",
            content: "Este grande prédio é tanto um local de conhecimento e escritório de copistas quanto um templo a Tanna-Toh. Diz-se que, devido à bênção de Valkaria, pesquisas destinadas ao avanço da ciência e a aventuras têm especial sucesso quando conduzidas aqui. Embora monges copistas de Tanna-Toh trabalhem na biblioteca, reproduzindo tomos sensíveis ou perigosos, o lugar também conta com uma prensa e está começando a produzir seus primeiros materiais em grande escala. Diferente da maior parte das bibliotecas em Arton, a Biblioteca das Duas Deusas permite que os visitantes retirem livros, pegando-os emprestados e devolvendo depois de um prazo estipulado. Os bibliotecários tradicionais consideram essa prática uma heresia. Estranhamente, ninguém nunca conseguiu mapear a biblioteca por completo, mesmo tendo em mãos as plantas originais. Dizem que o arquiteto que projetou o prédio enlouqueceu pelo excesso de conhecimento que adquiriu durante a construção e que os projetos não são precisos. Mas isso não explica a complexidade da biblioteca e alguns visitantes garantem que parte do prédio está ligada ao reino de Tanna-Toh ou a reinos divinos mais sinistros, e que há bibliotecários misteriosos que surgem e desaparecem sem explicação.\nA bibliotecária-chefe é Venera Vettrano, uma clériga de Tanna-Toh que parece conhecer tudo sobre os livros armazenados aqui. Na verdade, sua fascinação com tomos perigosos, arcanos, malditos e profanos é tamanha que algumas pessoas temem que ela mesma esteja se corrompendo com conhecimento proibido. Na biblioteca também existe um Hellaron, um golem que é uma extensão do Helladarion, o artefato vivo e sumo-sacerdote de Tanna-Toh. O Hellaron da Biblioteca das Duas Deusas tem acesso a todas as informações que o Helladarion conhece, mas sua tarefa aqui é restrita a ajudar visitantes com informações presentes nos livros. Assim, muitos aventureiros se veem frustrados, sendo obrigados a procurar alguma pista do conhecimento que desejam nas infindáveis prateleiras da biblioteca antes de receber seu auxílio. Uma figura curiosa na biblioteca é o detetive-livreiro Vannarian, um paladino de Tanna-Toh que recupera tomos roubados ou nunca devolvidos, mas que reluta em preservar conhecimentos que ninguém deveria ter…"
          },
          {
            name: "Catedral de Valkaria",
            content: "O centro de adoração comunitária da Deusa da Humanidade não é realmente a sede de sua religião — os devotos de Valkaria precisam estar em constantes jornadas e não podem ficar presos a um só templo. Assim, em vez de abrigar os membros mais poderosos do clero, a Catedral de Valkaria é um local onde todos os habitantes da cidade podem se reunir e, mesmo que não sejam devotos, prestar homenagem à padroeira da capital. Na Catedral, nobres sentam ao lado de plebeus, aventureiros compartilham o mesmo espaço com artesãos e figuras célebres como heróis e arquimagos são deixadas em paz e tratadas como qualquer cidadão.\nA Catedral foi um dos primeiros prédios construídos em Valkaria, ainda sob a supervisão de Roramar Pruss, e já era impressionante na época, contando com a tradição dos grandes feitos arquitetônicos de Lamnor. Outros reis buscaram adicionar ainda mais pompa ao templo e, com os séculos, a Catedral de Valkaria se tornou uma das igrejas mais suntuosas de Arton. Toda nova técnica de engenharia era exibida aqui. Os maiores escultores do mundo contribuíam com suas obras. O espaço amplo abriga milhares de fiéis. Os vitrais trazidos diretamente de Cosamhir filtram a luz natural, criando um efeito magnífico e caleidoscópico.\nAlguns afirmam que, depois da Libertação de Valkaria, tudo isso se intensificou ao ponto do exagero. Os verdadeiros devotos não podiam ficar presos à Catedral. Arquitetos sagrados cuja maior ambição era contribuir com o prédio agora se viam impedidos de supervisionar seus projetos. O paradoxo de um local estável para adorar uma deusa sempre em movimento se tornou insolúvel. Durante mais de um ano, a Catedral de Valkaria ficou sem liderança eclesiástica. Então teólogos, através de contato com a deusa, meditação e estudo, conseguiram desenvolver um novo dogma. A Catedral admite que um Alto Clérigo a presida durante um ano — depois desse período o devoto mais uma vez seria obrigado a partir. Esse Alto Clérigo não é o sumo-sacerdote de Valkaria. Cada novo Alto Clérigo é escolhido por aclamação dos fiéis. Arquitetos e engenheiros devotos mantêm a bênção da deusa enquanto estiverem realmente contribuindo com elementos novos e ambiciosos ao templo. Assim, a Catedral já teve muitos Altos Clérigos e seu estilo está cada vez mais irreconhecível.\nUm enorme relógio na parede frontal é só a mais óbvia das maravilhas que foram incorporadas à Catedral de Valkaria nos últimos anos. Também há uma torre que parece delgada demais para se sustentar, uma nova ala feita de matéria vegetal viva, um saguão situado parcialmente no Reino de Valkaria e uma câmara capaz de amplificar qualquer som até o volume de uma tempestade, entre outras inovações.\nTalvez a adição mais notória seja a catacumba abençoada, onde se criou uma nova tradição de sepultar aventureiros caídos. Os restos mortais de grandes heróis já foram trazidos para cá, enquanto grupos menos gloriosos realizam peregrinações para conceder a seus companheiros mortos a honra do descanso eterno na Catedral. Apenas aventureiros que tenham morrido no decorrer de uma missão recebem o direito de estar aqui. Diz-se que a catacumba abençoa todos que seguirem o legado de um aventureiro sepultado nela — continuando seu nome, levando o grupo adiante ou completando uma missão deixada pela metade."
          },
          {
            name: "Casa de Repouso Millicent para espíritos atormentados",
            content: "Algo quase desconhecido em Arton, este é um manicômio, um lugar para tratamento daqueles considerados insanos. O lugar é administrado até hoje por sua fundadora, Ellanie Millicent, uma clériga de Marah. Embora Millicent tenha as melhores intenções, a Casa de Repouso é uma verdadeira prisão, pois precisa conter os pacientes mais violentos. A falta de recursos torna as condições de vida bastante precárias, quase como em uma masmorra. O local foi fundado pouco antes da chegada da Tormenta e recebeu uma enxurrada de pacientes quando quase todos os sobreviventes da Tempestade Rubra mostraram estar insanos — o que também deu ao nome da instituição o ar de um trocadilho de mau gosto. Ainda há muitos tamuranianos e veteranos do Exército do Reinado enlouquecidos pela Tormenta ocupando os quartos/celas. Vez por outra há uma fuga, principalmente de internos com propensão ao crime e à violência. Contudo, não são os únicos. Um dos pacientes mais extraordinários da Casa de Repouso é Jack Flowers, um bufão louco obcecado por matar Nimb."
          }
        ]
      }
    ]
  },
  { id: "bielefeld",
    name: "Bielefeld",
    subtitle: "O Reino dos Cavaleiros",
    tag: "Reinado",
    image: "/regioes/bielefeld.png",
    coatOfArms: "/regioes/bielefeld-brasao.png",
    map: "/regioes/bielefeld-mapa.png",
    intro: `Muitos lugares em Arton possuem grande população de aventureiros ou já foram palco de sagas épicas. Contudo, nenhuma nação é mais voltada ao ideal heroico que Bielefeld. Chamado de “Lar da Ordem da Luz” e “Reino da Cavalaria”, Bielefeld é uma terra de tradições arraigadas e história rica.

  Com grandes e orgulhosos castelos dominando terras povoadas por plebeus e fazendeiros, o reino depende da relação de confiança e lealdade entre vassalos e suseranos. Em Bielefeld, honra vale mais que dinheiro. E neste reino nada simboliza mais a honra do que as ordens de cavalaria — em especial a Ordem da Luz. O jovem rei de Bielefeld, Khilliar Janz, toma poucas decisões importantes sem consultar o líder da ordem, Alenn Toren Greenfeld. A ordem é ligada ao reino, o reino tem a ordem como seu maior símbolo. As tramoias, intrigas e jogos de poder dos aristocratas não apagam o espírito de Bielefeld: a crença de que a cavalaria sempre defenderá Arton.`,
    facts: [
      { label: "Nome Oficial", value: "Reino de Bielefeld." },
      { label: "Lema", value: "“Afiada É a Lâmina da Justiça”." },
      { label: "Brasão", value: "talhado de prata e azul, uma balança de ouro brocante." },
      { label: "Gentílico", value: "bielefeldense." },
      { label: "Capital", value: "Roschfallen." },
      { label: "Forma de Governo", value: "monarquia hereditária." },
      { label: "Regente", value: "Rei Khilliar Janz." },
      { label: "População", value: "1.600.000." },
      { label: "Raças Principais", value: "humanos, anões, goblins, hynne." },
      { label: "Divindades Principais", value: "Khalmyr, Lena, Aharadak." }
    ],
    sections: [
      {
        title: "História",
        content: `Apesar de sua tradição heroica, as raízes de Bielefeld são encharcadas de sangue.

  Thomas Lendilkar, o fundador do reino, era um cavaleiro e líder de um grupo de aventureiros na jovem cidade de Valkaria. Thomas acreditava que o destino dos refugiados de Lamnor não era permanecer sob a proteção da deusa para sempre. Assim como muitos outros, empreendeu uma jornada para desbravar novas terras. Alguns historiadores garantem que ele não queria nada além de um lar para seu povo. Outros dizem que não aceitava ser apenas mais um entre iguais. Queria governar. Queria conquistar.

  Thomas partiu rumo a leste com seu grupo de aventureiros e logo se envolveu em conflitos. Houve interações pacíficas, mas em geral a passagem dos aventureiros foi marcada por fogo e aço. Apesar disso, Thomas considerou aquele terreno ideal para a formação de uma nação independente. Havia relativamente poucos monstros e muitas riquezas naturais.

  Quando chegou à costa, deixando um rastro de destruição e estandartes fincados, Thomas Lendilkar ordenou a construção de um templo ao Deus da Justiça e fundou sua “capital”, que batizou de Lendilkar. O ano era 1021 da chegada dos elfos. Ele se declarou rei do novo reino de Bielefeld. Não há consenso sobre a origem do nome. Alguns afirmam que “Bielefeld” era o nome da casa nobre à qual a família Lendilkar servia no velho continente. O que Thomas queria ao batizar seu reino assim? Afirmar que era o verdadeiro representante da Casa Bielefeld? Conseguir o favor desses nobres? Provavelmente nunca se saberá a verdade, mas uma identidade nacional se formou rapidamente e, em poucos anos, os colonos já se consideravam pertencentes a Bielefeld, não a suas antigas nações.

  Talvez tenha sido esse entusiasmo pelo novo lar que tenha impulsionado o sucesso e a prosperidade de Bielefeld logo em seu início. Thomas Lendilkar concedeu títulos de nobreza a todos que se dispusessem a pacificar e proteger uma região. Dizse que, independente de seu caráter, o fundador era extremamente carismático, decidido e inteligente. Os nobres que concordavam com suas políticas sangrentas ficaram concentrados na capital litorânea, enquanto aqueles que procuravam distância do fundador se espalharam pelo território. Entre esses destacou-se a família Janz, opositores de Lendilkar, que ergueu um forte mais tarde conhecido como o Castelo Roschfallen. Outros fortes foram erguidos por todo o reino, demarcando feudos. Sem muita relação com o rei, as novas famílias nobres precisavam defender suas próprias terras. Independentes, criaram entre si laços de suserania e vassalagem que continuariam para sempre. O novo reino cresceu em velocidade espantosa e sua glória inicial foi impressionante. Lendilkar despontava como um dos mais ambiciosos conquistadores, enquanto os outros senhores feudais exemplificavam o dever protetor dos nobres para com o povo. Talvez até mesmo Deheon empalidecesse frente à vastidão que na época englobava o que hoje são os Ermos Púrpuras e Aslothia. Por um tempo, pareceu que Bielefeld seria o poder dominante em Arton e Thomas Lendilkar seria o maior dos reis.

### A Primeira Derrota
  Os olhos de Thomas Lendilkar se voltaram para mais longe. Se a capital era litorânea, fazia sentido que Bielefeld fosse uma potência naval. Em 1037, ele decidiu que o próximo alvo de expansão estava nos mares. Na ilha de Khubar.

  O que o rei queria com uma ilha, quando havia tanta terra para ser conquistada no continente? Talvez a riqueza de Khubar tenha atraído Thomas. Talvez isso fosse só o primeiro passo na formação de uma marinha capaz de invadir Lamnor. Fosse qual fosse sua intenção nos mares, Thomas Lendilkar só conheceu a ruína.

  Khubar é protegido por Benthos, o Dragão-Rei dos Mares. Quando as tropas de Bielefeld desembarcaram na ilha, os sábios e xamãs se reuniram e convocaram seu guardião.

  A fúria de Benthos foi terrível. Os exércitos de Bielefeld fugiram aterrorizados, suas naus foram destruídas como brinquedos. As ondas rugiram num maremoto incontrolável que engoliu a costa de Bielefeld e devastou a capital. Thomas Lendilkar, a família real, quase todos os aventureiros de seu grupo original e vários nobres morreram. Subitamente, Bielefeld era um reino com forte identidade nacional e relações sólidas de lealdade… Mas sem liderança.

  Talvez Benthos tenha feito um bem imensurável ao povo do Reinado.

  Deheon interveio, assumindo o papel de liderança que teria para sempre. Um corpo diplomático intermediou a paz entre os nobres restantes de Bielefeld e os regentes de Khubar. A duquesa Raissa Janz se destacou nesse acordo, colocando fim aos ímpetos guerreiros de alguns que desejavam reparações ou retaliação. Entre os grandes apoiadores de Raissa estava a família Donovan. A maior voz de dissidência estava na poderosa família Asloth.

### Uma Nova Dinastia
  Com a paz estabelecida, restava achar um rei. Arautos e aventureiros procuraram herdeiros de Thomas Lendilkar; sábios vasculharam tomos genealógicos em busca de ligações com outras famílias. Nada foi encontrado — os Lendilkar tinham sido extintos no novo continente. Existe o boato de que já nesta época um grupo de devotos de Hyninn ajudava o reino nas sombras, fazendo o trabalho sujo que os nobres e cavaleiros não podiam aceitar, mas os historiadores garantem que não passa de teoria de conspiração…

  Sem um herdeiro, uma assembleia de nobres elegeu Raissa Janz como nova rainha de Bielefeld. Tamanha era sua aclamação que a lei hereditária se manteve, frustrando manobras dos Asloth para que houvesse uma eleição periódica. A nova família real Janz foi coroada pelo sumo-sacerdote de Khalmyr, permanecendo no poder desde então.

  O reino nunca se recuperou da destruição de sua marinha. Até mesmo a defesa da costa do reino ficou a cargo da Patrulha Costeira, cujo dever nunca se estenderia até o alto-mar. A família Janz tem uma desconfiança quase supersticiosa da exploração naval — acreditam que, sobre um cavalo, vai-se longe. A bordo de um navio, vai-se longe demais. Este dogma não oficial recebe o apelido de “Doutrina da Ferradura”: um nobre de Bielefeld deve interferir apenas até onde seu cavalo puder levá-lo.

  A capital passou a ser o ducado de Roschfallen, lar dos Janz, que se expandiu para uma cidade completa. Mas Roschfallen nunca chegou a ser a cidade mais importante do reino — Norm seria seu símbolo mais verdadeiro. Era um arcebispado de Khalmyr, capaz de unir nobres e plebeus, tendo uma relevância que Roschfallen jamais conquistou. Até hoje Roschfallen é considerada “terra dos Janz”.

  A história de Bielefeld seguiu sem grandes reviravoltas durante séculos — a cavalaria e a tradição feudal mantiveram a lei e controlaram a sede de conquista. A fundação da Ordem da Luz por Arthur Donovan II em 1290 solidificou o reino como terra de heróis. A relação de amizade próxima da família Janz com os Donovan afastou qualquer medo de que a sanha expansionista voltasse.

  Mas, em 1300, as tensões aumentaram de novo.

### Irmão Contra Irmão
  A família Asloth, invejosa e sedenta de poder, nunca adotara os valores e tradições da cavalaria. O Condado de Portsmouth, governado pelos Asloth, se dizia uma “terra de liberdade”, onde os “pomposos cavaleiros” não dominavam a plebe. Os Asloth empregavam companhias mercenárias em vez de um exército estabelecido, afirmando que era a maneira mais justa de defender suas terras. Na realidade, estavam formando as bases do que seriam tropas sem lealdade nenhuma ao povo de Bielefeld.

  Os Asloth também recrutaram outro tipo de “tropas”. Ao longo de anos, cooptaram bardos, espiões e planejadores em todo o Reinado. Usaram-nos de forma insidiosa, como agentes infiltrados em castelos, tavernas, fazendas, cidades… Inúmeros pontos do continente, sempre se fazendo passar por gente comum. Esse verdadeiro exército da intriga foi mais tarde apelidado em Bielefeld de Ordem dos Covardes.

  Usando seus agentes, os Asloth começaram uma bem-sucedida campanha difamatória contra a coroa de Bielefeld e a cavalaria. Até hoje vários artonianos ouvem a palavra “cavaleiro” e pensam em um aristocrata brutal e autoritário. As próprias ordens foram prejudicadas por isso, com vários jovens honrados rejeitando a cavalaria e muitos ambiciosos mesquinhos se voltando a ela.

  Os mercenários de Portsmouth atacaram as nações dos Ermos Púrpuras, usando armaduras de cavaleiros e estandartes de famílias nobres de Bielefeld. A região dos Ermos era autônoma, apesar de nos mapas ser parte do reino. Com as famílias nobres e ordens de cavalaria incriminadas pela violência dos mercenários, não demorou para que as vítimas revidassem, iniciando uma série de ataques a cidades de Bielefeld. A intriga chegou a Deheon: segundo as mentiras de Portsmouth, mais uma vez Bielefeld se mostrava um conquistador sanguinário. Deheon decretou que os Ermos Púrpuras seriam independentes e, para todo o Reinado, pareceu que Bielefeld era expansionista e tinha sido derrotado mais uma vez. O trono estava desacreditado.

  Foi este poder abalado que enfrentou a sangrenta guerra civil de 1389.

  O Conde Ferren Asloth, conhecido como “o Velho Abutre”, era infame em Bielefeld. Portsmouth era uma terra vasta, mas Ferren se dizia um governante humilde e oprimido. Proibia a magia, afirmando que era uma forma de “defender os mais fracos”. Implorava para que os impostos fossem diminuídos — segundo Asloth, um condado que nem mesmo possuía fortes da Ordem da Luz estava sendo obrigado a pagar pela cavalaria que só existia para pisoteá-lo.

  A Revolta a Pé, apelido de uma série de ataques de plebeus e pequenos nobres contra cavaleiros em Portsmouth, pareceu um movimento espontâneo, mas não passou de uma maquinação de Ferren Asloth — o estopim da guerra civil. Na realidade, as companhias mercenárias já estavam de prontidão e, assim que houve a primeira retaliação por parte dos cavaleiros, atacaram em massa. A justificativa: independência. A realidade: mais um passo no plano sinistro do Velho Abutre.

  A Guerra Civil de Bielefeld foi triste e brutal. O reino não podia ceder, sabendo que uma rendição significaria o abandono de parte de seu povo à crueldade do Velho Abutre. Aldeias separadas por um mero riacho massacraram-se mutuamente. Familiares lutaram entre si, famílias foram dilaceradas. Os mercenários decaíram para hordas de carniceiros — quando não havia saque suficiente nas terras inimigas, saqueavam as próprias aldeias de Portsmouth. Muitos morreram, muitos perderam tudo. Apesar disso, Bielefeld lutou com honra. As mentiras dos Asloth não foram capazes de mascarar a realidade de que, mesmo nesse conflito horrendo, a Ordem da Luz tomou a frente e nunca recorreu às táticas baixas e assassinas do inimigo. Vários cavaleiros da Luz construíram suas reputações na guerra civil, fazendo defesas heroicas contra as traiçoeiras tropas de Portsmouth.

  Deheon interveio uma última vez, com uma neutralidade que afrontava Bielefeld. A indignação ameaçou fazer o reino inteiro se voltar contra o Reinado — o que talvez fizesse parte do plano de Ferren. Mas, no final, a paz no continente era mais valiosa. Seguindo orientação (ou comando) da Coroa do Reinado, Bielefeld reconheceu a independência de Portsmouth.

  E foi assim, reduzido a uma fração do que já tinha sido, que Bielefeld embarcou numa nova era de provações.

### O Século Heroico
  Talvez seja cedo para dizer, mas os bardos já chamam o período a partir de 1400 de “Século Heroico”. A presença do cavaleiro da Luz Orion Drake num forte isolado durante um ataque do caçador de recompensas e algoz da Tormenta Crânio Negro em 1405 deu início a uma série de eventos que colocou Bielefeld na linha de frente da luta contra a Tempestade Rubra. Impulsionado pelo herói, o reino mandou tropas para enfrentar um exército corrompido que marchava rumo a Trebuck. Com seu avanço detido na fronteira do reino que hoje é a Supremacia Purista, Bielefeld precisou pagar Wynlla por um imenso ritual de transporte de tropas. Os cofres de Roschfallen nunca se recuperaram, mas os soldados e cavaleiros chegaram a tempo para se unir ao Exército do Reinado e derrotar as hordas aberrantes na beira de uma área de Tormenta. Durante esta guerra, o jovem cavaleiro Vincent Gherald se revelou corrompido e espalhou a corrupção por toda uma geração de cavaleiros em Norm, resultando numa noite de massacres — veteranos contra novatos, pais contra filhos.

  As ações de Orion Drake, que incluíram a destruição da primeira área de Tormenta e a libertação da ilha de Tamu-ra, levaram a cavalaria mais uma vez ao ápice do ideal heroico. Bielefeld viu um enorme influxo de jovens desejando ser escudeiros, inclusive vindos de outros reinos. Mais tarde, a relação de Orion e do Alto Comandante da Ordem da Luz Alenn Toren Greenfeld com a Rainha-Imperatriz Shivara contribuiu para que o reino fosse o principal aliado de Deheon na Guerra Artoniana. Como terra de cavaleiros guiada por Khalmyr, Bielefeld não guarda rancor contra as intervenções históricas e, hoje em dia, está intimamente ligado ao Reino Capital. Diz-se que, se Deheon usa a coroa, Bielefeld empunha espada e escudo.

  Bielefeld foi fundamental para a derrota dos puristas — e sofreu por isso. Após a morte do então Rei Igor Janz, seu filho Khilliar Janz assumiu o trono. Inexperiente, no meio de uma guerra de proporções inéditas, o jovem rei triunfou com o apoio de heróis aventureiros. A Ordem da Luz assumiu a liderança em diversas batalhas. O ódio dos puristas contra Bielefeld foi tamanho que o reino chegou perto de se desfazer. A capital foi sitiada e recoberta de névoa escura e mágica. A cidade de Norm foi invadida, tropas inimigas chegaram aos portões do Castelo da Luz. Nobres ficaram ilhados, a cadeia de lealdade foi ameaçada. Por um tempo, parecia que Bielefeld iria desmoronar em uma série de pequenos feudos.

  Felizmente, isso foi evitado. A vitória do Reinado numa batalha crucial foi a força que impulsionou Bielefeld a resistir, mais unido do que nunca. A Espada e o Escudo do Reinado permanecem erguidos. Não importa que Bielefeld seja menor em extensão. Sua honra é maior do que nunca.

> “Neste dia de luto, juramos que a espada de Bielefeld jamais voltará a se erguer contra as ilhas. Não por temer a força do Dragão-Rei… Não para evitar um castigo… Mas por sabermos que esta é a verdadeira justiça. Não a justiça de um rei. A justiça de Khalmyr!
> A vitória de Khubar é a vitória de Khalmyr. A derrota de uma invasão injusta é o triunfo do Deus da Justiça e, assim, também o triunfo de Bielefeld.
> Sob o julgamento de Khalmyr e sobre a tumba de nosso rei morto, temos orgulho de oferecer ao povo de Khubar nossa rendição incondicional.”
> — Trecho do discurso de rendição de Raissa Janz a Khubar.`
      },
      {
        title: "Geografia",
        content: `Bielefeld é uma terra cercada de inimigos. A oeste, a Supremacia Purista se espalha, vasta e poderosa. Uma área que costumava pertencer ao Reino da Cavalaria agora é território disputado entre as duas nações — a Conflagração do Aço. A leste, Aslothia, terra de mortos-vivos e mercenários cruéis. A norte, os Ermos Púrpuras poderiam ser neutros ou até aliados, mas o histórico de Bielefeld cobra seu preço. O mar é a única saída do reino, mas a marinha de Bielefeld ainda não se recuperou de séculos de negligência.

  Assim, simplesmente chegar a Bielefeld é uma aventura. O reino não passa fome devido a seu terreno naturalmente favorável, mas qualquer transporte é caro e demorado. Nobres contratam grupos de aventureiros para escoltá-los através de Aslothia, enquanto cavaleiros buscam heróis para acompanhá-los nessa jornada. A coroa do reino também busca aventureiros para ir até Doherimm e negociar a construção de passagens subterrâneas com os anões.

  A fronteira com Aslothia é especialmente perigosa — uma divisão tanto política quanto mística. A Floresta de Jeyfar marca o limite entre os dois reinos. Enquanto a maior parte de Jeyfar é de um verde escuro e profundo, a orla leste apresenta árvores ressequidas, sem folhas, o sol surgindo esmaecido por entre os galhos.

  Exceto por Jeyfar, Bielefeld não tem grandes áreas florestais. Planícies férteis dominam a maior parte do reino. Não sendo especialmente urbanizado, Bielefeld possui horizonte amplo, onde se pode viajar por dias sem encontrar cidades, castelos ou outros marcos.

  O clima é ameno, com estações bem marcadas. No verão, a região se torna muito viva e vibrante, explodindo com colheitas fartas e árvores carregadas de frutos. No inverno há nevoeiro e chuva, além de uma neve fina que no chão se transforma em lama ou gelo. As estradas se tornam escorregadias e traiçoeiras, o gelo quebradiço esconde verdadeiros fossos de lodo.

  A impressão que quase todo viajante tem de Bielefeld é a de uma terra bela, cheia de cores. Muitos custam a acreditar que tenha sido palco de tantas tragédias.`
      },
      {
        title: "Povo & Costumes",
        content: `Humanos compõem quase toda a população de Bielefeld. A maior comunidade de não humanos é formada por anões, seguidos de goblins, hynne e um punhado de representantes de outras raças.

  A moda em Bielefeld é bastante tradicional. Barbas bem aparadas, como é usual na Ordem da Luz, vestidos longos e um pouco antiquados. É comum ver pessoas trajando armaduras ou portando armas embainhadas, principalmente entre a nobreza. Nobres em Bielefeld não vestem casacas refinadas e camisas bufantes — cobrem-se de aço, preparados para defender a plebe. Pelo menos em teoria.

  Alguém certa vez disse que “por causa de sir Orion Drake, está na moda ser chato em Bielefeld”. Certamente um estrangeiro poderia pensar isso: o povo parece sério, sisudo, formal. Contudo, aqui seriedade e formalidade não são sinal de frieza ou antipatia. Levar a sério o que alguém diz e ser sério em troca, tratar todos com deferência e esperar deferência em troca são sinais de respeito e estima. Apenas alguém que desprezasse outra pessoa poderia tratá-la com intimidade sem primeiro desenvolver uma relação próxima. Isso deixa os forasteiros enlouquecidos. Um aventureiro pode ser tratado com formalidade pelo cavaleiro cuja vida acabou de salvar… E ver o mesmo cavaleiro sendo natural e descontraído com o inimigo que tentou matá-los! Para o cavaleiro, faz todo sentido: por que se esforçar para tratar bem um crápula? Contudo, na guerra toda formalidade desmorona e relações íntimas se formam em questão de dias. Os habitantes de Bielefeld se abraçam, riem, tratam-se por apelidos e se apegam com extrema rapidez.

  “Honra” é uma palavra ouvida constantemente no reino. Mas o que é honra? Cada habitante tem uma definição própria. Para muitos, é honestidade e cumprimento das leis. Outros consideram que só é honrado aquele que não tolera nenhum desrespeito ou insulto — o que pode levar à violência. Heróis como Alenn Toren Greenfeld dizem que honra é ativamente fazer o bem e combater a maldade, enquanto Orion Drake considera que honra é ausência de soberba e cumprimento do dever a qualquer custo. O conceito é parte integral da vida de nobres e plebeus. Em Bielefeld, o mais reles fazendeiro prefere ficar sem comida a ficar sem honra.

  Khalmyr é o deus mais popular no reino, mesmo depois de ter perdido o posto de líder do Panteão. Na verdade, isso causou um aumento de fervor. Como um reino agrícola, Bielefeld cultua Lena, a Deusa da Vida, principalmente longe dos grandes castelos.

  Quase todos os deuses aliados de Khalmyr são bem vistos. Deuses menos ligados às tradições, como Tenebra, Allihanna e Wynna, são considerados “esquisitice de estrangeiros” — um jovem devoto de Tenebra ouvirá de seus pais que “é só uma fase”. Deuses ambíguos como Arsenal e Thwor são vistos como malignos. Nem sempre seu culto é proibido, mas será motivo de desconfiança. Infelizmente, o culto a Aharadak é presente, devido à influência dos cavaleiros corrompidos de anos atrás. Hyninn e Nimb são cultuados de forma sutil, nem sempre agindo contra os cavaleiros.`,
        sidebars: [
          {
            title: "Cavaleiros sem Ordem",
            content: `Bielefeld é um reino tão ligado à Ordem da Luz que é comum imaginar que todo o contingente de cavaleiros se resume a suas fileiras. Isso, porém, está muito longe da verdade.

  Além de contar com inúmeras ordens menores com suas próprias regras e condutas, algumas dissidentes de suas irmãs mais famosas, Bielefeld também ostenta a figura do cavaleiro sem ordem. Um herói independente, que viaja pelo reino realizando feitos de bravura sem precisar prestar contas a uma instituição. Acompanhados ou não de escudeiros, estes cavaleiros errantes costumam tomar um tema específico como inspiração para suas armaduras e armas. Sua variedade é imensa: alguns tentam replicar os feitos de um herói lendário, carregando assim seu legado, enquanto outros se baseiam em elementos, ou adotam as características de uma criatura que admiram.

  Assim, por exemplo, sir Deadalus Hanspear, o Cavaleiro Morto, veste armadura totalmente negra; traz em seu elmo as asas de um corvo; em suas ombreiras, mãos esqueléticas; em sua lança, trapos amarrados de sua própria mortalha, e em seu escudo, a imagem de um caixão. Nem mesmo seu rosto macabro de osteon é tão reconhecido quanto sua indumentária! Sem o estandarte de uma ordem e às vezes sem nem mesmo um brasão familiar reconhecível, esses cavaleiros se tornam famosos pela temática de sua armadura e equipamentos.`
          }
        ]
      },
      {
        title: "A Cavalaria",
        content: `Existem muitas ordens de cavalaria em Arton — algumas pouco mais que clubes de nobres, outras verdadeiros exércitos de guerreiros jurados a fazer o bem. O início das ordens de cavalaria remonta ao antigo continente, antes da Grande Batalha. Elas cumpriam um papel semelhante ao dos grupos de aventureiros hoje em dia: eram bandos de pessoas extraordinárias que ganhavam a vida corrigindo problemas grandes demais para o povo comum. Enquanto grupos de aventureiros sempre foram variados e seguiram suas próprias regras, ordens de cavalaria adotaram o método de luta mais tradicional e longos e detalhados códigos de conduta. Os cavaleiros do velho continente vieram parar aqui, dando início ao modo de pensar de Bielefeld.

  Essas várias ordens sempre compuseram a alma do reino. Nenhuma família nobre estava completa sem pelo menos um cavaleiro; os plebeus podiam ser sagrados cavaleiros e assim ascender à nobreza por bravura.

  Um tipo de relação fundamental em Bielefeld é entre cavaleiro e escudeiro. Escudeiros servem a cavaleiros para aprender a parte prática e moral da cavalaria. Mais que um mestre, o cavaleiro se torna quase um pai ou mãe. Para o escudeiro, trocar de senhor não é uma opção — ele pode ser obrigado a servir a um cavaleiro cruel por boa parte de sua infância e adolescência. O inverso também é verdadeiro: mesmo frente a um escudeiro preguiçoso ou incompetente, nenhum cavaleiro pode largá-lo sem enfrentar vergonha e desaprovação. Já houve casos de cavaleiros expulsos da Ordem da Luz por terem abandonado escudeiros em lugares perigosos ou sem outras opções de sustento. O caráter e a habilidade do escudeiro são responsabilidade do cavaleiro.

  Essa importância fundamental e o prestígio associado levaram a uma certa banalização do papel dos cavaleiros. Em Bielefeld, muitas vezes “cavaleiro” não é sinônimo de “herói” ou mesmo “combatente”… Alguns cavaleiros se surpreendem com a mera sugestão disso! Para eles, “sir” é só mais uma honraria na longa lista de títulos que esfregam na cara dos plebeus. Bielefeld enfrenta a praga da intriga e a cavalaria é onde ela se espalha com maior facilidade. Há uma luta constante entre cavaleiros honrados e conspiradores ambiciosos.`
      },
      {
        title: "Governo",
        content: `Bielefeld é governado pelo Rei Khilliar Janz, descendente direto de Raissa Janz. Khilliar se mostrou um guerreiro competente desde muito jovem e treinava para ser um cavaleiro da Luz — o primeiro rei pertencente à Ordem. Um torneio mudou tudo isso. Em meio aos eventos da guerra contra a Tormenta, o então Príncipe Khilliar enfrentou numa justa um combatente misterioso conhecido apenas como o Cavaleiro Risonho. Em um horrível acidente, a quebra de uma das lanças enviou estilhaços através da viseira do elmo de Khilliar, perfurando seus olhos e cegando-o para sempre. É consenso que esse foi mais um dos atos do Cavaleiro Risonho para desestabilizar a nobreza e a cavalaria em Bielefeld.

  Khilliar recusou-se a usar de magia para restaurar sua visão, na crença de que isso seria abusar de um privilégio que os cidadãos comuns não possuem. O jovem príncipe foi obrigado a se tornar rei quando seu pai foi assassinado pelo espião purista conhecido como Espinha.

  Embora a figura do rei tenha bastante poder em Bielefeld, esse poder só existe com o apoio dos duques, que efetivamente aprovam e executam as ordens reais, repassando as decisões da coroa aos demais nobres. A política no reino é intrincada — duques dependem da lealdade e apoio de condes, barões e outros, e muitas vezes a vontade da aristocracia menor acaba bloqueando as intenções do rei.

  A outra grande força política em Bielefeld é a Ordem da Luz. Embora o Alto Comandante teoricamente não tenha voz nas decisões do reino, na prática a influência da Ordem garante que haveria revolta entre os nobres se algum dia rei e Alto Comandante fossem adversários.`
      },
      {
        title: "Locais Importantes",
        places: [
          {
            name: "Roschfallen (capital)",
            content: `Roschfallen começou como um castelo, o centro de poder da família Janz. Quando os Janz assumiram o trono de Bielefeld, o Castelo Roschfallen foi expandido e as terras a seu redor foram muradas para que se convertesse em cidade.

  Mesmo assim, Roschfallen sempre permaneceu como “o lar dos Janz”. Dizem que não tem cidadãos, apenas hóspedes. O Castelo Roschfallen foi rebatizado — hoje em dia, oficialmente é o Palácio Real, mas ninguém na cidade o chama assim. Por incentivo da família real, muitos burgueses ricos vieram para cá estabelecer seus negócios. Isso criou a impressão de que Roschfallen é um lugar transitório, onde se compra e se vende, mas não se vive. A capital é grande e rica, mas artificial.

  Talvez por isso o número de estalagens e tavernas é enorme. A população tem o curioso hábito de se enfurnar em tavernas no primeiro dia frio do outono. Isso torna esses estabelecimentos superlotados e provoca inúmeras brigas. A mais cara e luxuosa estalagem de Roschfallen é a Espada de Khalmyr, de posse de uma família de anões. Alguns dizem que é lugar para turistas e ricaços sem bom gosto — a “cerveja anã especial” da taverna seria uma receita rejeitada em Doherimm, aguada para se adaptar ao gosto dos humanos.

  A milícia de Roschfallen está sempre em volta das brigas de taverna, pois não há muito mais a fazer. A ferramenta mais importante de um miliciano é seu apito, usado para chamar reforços — o que já levou jovens milicianos a imaginar se em algum momento a milícia efetivamente fará algo, ou se apenas ficarão chamando uns aos outros para sempre. Contudo, o crime sempre se esconde nas sombras. Um notório esquema que vitimiza recém-chegados é o “golpe do escudeiro”: criminosos localizam um visitante rico que esteja acompanhado de sua família. Então simulam uma “injustiça” na frente de um filho ou filha adolescentes. Se o jovem intervier, “salvando o dia”, surge um cavaleiro da Luz impressionado com seu heroísmo e o convida para se apresentar como escudeiro no Palácio Real. Tomado pela emoção do combate e impressionado pela armadura brilhante, o rapaz ou a moça insiste com seus pais. O “cavaleiro” então o leva… E no dia seguinte os pais recebem uma mensagem com a quantia que devem pagar como resgate.

  Roschfallen abriga estabelecimentos que quase não existem no Reinado, como bancos, casas de chá, empórios de vinhos e lojas de poções. Esses lugares só se sustentam por seus altíssimos preços, tendo visitantes como seus principais clientes. Isso separa ainda mais a capital do resto do reino.

  Também na capital há o Templo da Justiça, um dos mais impressionantes tribunais do mundo conhecido. Um lugar onde clérigos de Khalmyr resolvem disputas comerciais, condenam criminosos, conciliam famílias rivais, protegem misticamente documentos, intermediam acordos, celebram casamentos e determinam a veracidade de alegações. O enorme e simétrico prédio é uma cacofonia de orações, discursos e debates. O Templo não emprega clérigos-juízes, apenas abriga as sessões com clérigos escolhidos pelas partes. Assim, o prédio sempre está cercado de jovens clérigos de Khalmyr tentando convencer cidadãos a contratá-los como juízes e alavancar suas carreiras.`
          },
          {
            name: "Norm",
            content: `Se Roschfallen é a capital de Bielefeld, Norm é seu coração. Quando a Ordem da Luz foi estabelecida aqui, a cidade se tornou um símbolo das tradições, o lar do orgulho feudal e heroico.

  Norm era um arcebispado de Khalmyr, uma espécie de pequena teocracia leal à família nobre Donovan, que vivia num castelo a dias de distância. A cidade parecia destinada a ser uma nota de rodapé. Quando Arthur Donovan II voltou de uma peregrinação mística com o dever de fundar a Ordem da Luz, tudo mudou. O duque não quis que a sede da Ordem fosse seu próprio castelo, pois não desejava que ela pertencesse à família. Também relutou em erguer um castelo numa região erma — Donovan enxergava a Ordem da Luz como uma força presente no dia a dia do povo. Assim, a nova ordem de cavalaria fez sua sede numa cidade. Donovan usou boa parte das riquezas da família na contratação de engenheiros e trabalhadores anões, para que construíssem a fortaleza que abrigaria os novos cavaleiros. O Castelo da Luz se ergueu com velocidade estonteante. Em poucos anos, Norm se transformou.

  O Castelo da Luz é uma das construções mais impressionantes do continente. Suas torres de prata e mármore imitam a forma da espada de Khalmyr, visíveis de quase qualquer ponto da cidade. No pátio central, o próprio Deus da Justiça surge acima das muralhas, na forma de uma estátua com mais de 60 metros de altura. A mão divina de Khalmyr se ergue, como se estendesse sua justiça para todos. O castelo brilha à noite, espalhando uma luz prateada e suave que não deixa os cidadãos esquecerem que estão sob a proteção e vigilância de seu padroeiro.

  Como qualquer construção anã, o Castelo da Luz combina beleza e poder. Catapultas e balestras se espalham por muralhas e torres, misturando-se com a arquitetura. A entrada principal é uma ponte levadiça que conduz a uma antecâmara cheia de armadilhas e seteiras. Os corredores são amplos e os salões são vastos — o Castelo da Luz é uma das poucas fortalezas cujo interior foi pensado para cargas de cavalaria.

  A população inchou quando filhos de famílias nobres se mudaram para cá, na esperança de integrar a Ordem da Luz. Não demorou muito para que Norm se tornasse mais populosa que Roschfallen.

  Hoje em dia, quase tudo em Norm existe para apoiar a Ordem da Luz. Guildas de ferreiros e artesãos trabalham unicamente em armas, armaduras e ferramentas para os cavaleiros. Fazendas ao redor das muralhas alimentam a Ordem. A presença dos cavaleiros estimula a devoção religiosa, multiplicando os templos.

  Os habitantes de Norm vivem uma existência tradicional e guerreira, voltada à manutenção dos campeões e nobres locais. Não existe muita noção de enriquecimento, mobilidade social ou mudança de vida — exceto através da cavalaria. Há grandes áreas onde se organizam justas e torneios. Não se vê ruelas cheias de gente, mas espaços amplos onde transitam cavalos. As casas são baixas e espalhadas, dando destaque a prédios imponentes como os templos — e sempre deferentes ao Castelo da Luz.

  Quase 20 anos atrás, Norm sofreu um duro golpe. A Queda de Norm, quando jovens cavaleiros corrompidos pela Tormenta queimaram a cidade e enfrentaram as gerações mais velhas, é um trauma que a cidade talvez nunca supere. A Guerra Artoniana também chegou à cidade. Os cavaleiros foram paralisados por uma maldição, salvos apenas pela intervenção de um grupo de heróis. Ferida, Norm se tornou ainda mais aguerrida e tradicional — mais do que nunca, o lar da Ordem da Luz.`
          },
          {
            name: "Muncy",
            content: `A estrutura feudal de Bielefeld é exemplificada perfeitamente no condado de Muncy. Thomas Lendilkar deu a um guerreiro a missão de pacificar uma região assolada por monstros. Este guerreiro era Torant Branalon, um nobre de uma família deposta no velho continente. Como recompensa, Torant recuperaria o título de conde. Os registros da época sugerem que Lendilkar tenha ficado muito surpreso quando, um ano depois, o guerreiro apareceu na capital dizendo que a missão estava cumprida. Também disse que gostaria de ter seu título oficializado o mais rápido possível, pois estava prestes a ter um filho.

  Assim começou a tradição dos Branalon, leais e resilientes condes de Muncy. Ao longo dos séculos, o Castelo da Gruta Negra, lar da família, sempre foi o principal ponto de vigilância de onde os nobres e cavaleiros partiam quando as trombetas soavam. O castelo tem esse nome por causa das façanhas de Torant Branalon: o guerreiro descobriu que a profusão de monstros na região se originava de um único lugar, uma caverna que se abria para um labirinto de corredores subterrâneos. Torant venceu a masmorra e construiu seu castelo sobre a gruta. Ele desejava que, se os monstros um dia ressurgissem, os condes de Muncy fossem a primeira linha de defesa.

  Como todo castelo tradicional, Gruta Negra é um lugar público. Boa parte do povo do condado vive aqui, trabalhando para a família nobre. Outros vêm ao castelo para vender produtos nos dias de feira ou para ter com o conde, responsável por impor a lei e arbitrar disputas. O forte do castelo é a única parte privativa, o verdadeiro lar da família.

  O atual conde de Muncy é sir Bernard Branalon, “o Paquiderme Galante”. Com mais de 60 anos, Bernard tem uma longa história de batalhas e glórias, mas é lembrado por ser um dos melhores amigos de sir Orion Drake. Bernard é um homem imensamente alto, gordo e forte. Já foi casado inúmeras vezes e tem filhos suficientes para preencher um batalhão. Alguns desses filhos lutaram contra a Ordem da Luz durante a Queda de Norm, a noite mais trágica da vida de Bernard.

  Bernard é membro da Ordem da Luz, como é tradição na família. Os Branalon estiveram entre os primeiros iniciados por Arthur Donovan II, antes que existisse o Castelo da Luz. Desde então, espera-se que filhos e filhas dos Branalon pertençam à Ordem.`
          },
          {
            name: "Highter",
            content: `Num reino de tradições, Highter se destaca como algo extraordinário e inusitado: uma cidade flutuante ligada à terra por uma imensa corrente.

  Highter foi originalmente construída por um mago maligno que desejava uma fortaleza inacessível. Um grupo de aventureiros o derrotou e tomou o lugar para si. Com o tempo, os aventureiros e seus descendentes desenvolveram uma cidade completa a partir da fortaleza. O transporte até a cidade é extraordinário: a corrente está presa numa imensa estrutura de pedra, em volta da qual há inúmeros círculos entalhados. Esses círculos são encantados com magias de teletransporte, levando aos principais pontos da cidade.

  O prefeito de Highter há mais de um século é o anão Kevarimm, único sobrevivente do grupo de aventureiros original e o último que conhece um segredo: os círculos de teletransporte são parte de um ritual inacabado e, se forem usados da forma errada, podem levar o usuário a dimensões infernais… Ou trazer coisas de lá. Nem mesmo Kevarimm sabe o que seria essa “forma errada”, mas teme que qualquer outro prefeito se deixe levar pela curiosidade ou ganância. Também há túneis e passagens no interior da rocha que nunca foram explorados.

  Já houve uma comunidade sob Highter, mas ataques cada vez mais constantes de monstros fizeram com que ela fosse abandonada. Hoje em dia, Highter conta com pouquíssimos habitantes e parece em vias de se transformar num imenso covil de criaturas perigosas. Kevarimm se recusa a abandonar seu posto, mas cada vez mais precisa de heróis para manter os monstros sob controle, ou pelo menos atrasar seu avanço…`
          },
          {
            name: "Floresta de Jeyfar",
            content: `A maior área florestal de Bielefeld marca a fronteira com Aslothia e é um reduto de mistérios. Mesmo que não seja muito extensa para padrões de outros reinos, Jeyfar é fechada, escura e labiríntica. Vários aventureiros já se perderam em seu interior. Aqueles que conseguiram voltar juram que a floresta é muito maior do que os mapas mostram, estendendo-se para oeste sempre à frente do viajante.

  Talvez isso seja só conversa de guias incompetentes. Talvez seja efeito de algum dos monstros ou criaturas mágicas que vivem entre as árvores. Existe a lenda (considerada pouco confiável) de que, em algum lugar de Jeyfar, há uma imensa árvore que esconde um túnel para um local subterrâneo. Este covil teria sido habitado por orcs em tempos antigos, mas eles foram expulsos por “uma ameaça ainda pior”. Ninguém dá muita credibilidade a isso, porque orcs nunca foram comuns em Bielefeld e porque a tal árvore nunca foi localizada. Mas os mais supersticiosos sussurram que a floresta é habitada por um povo antigo — talvez de antes do que se pensa serem os habitantes originais de Arton. Talvez a árvore só se revele para aqueles que o “povo misterioso” deseja atrair, ou talvez em certas épocas do ano… De qualquer forma, Jeyfar parece ter vontade própria, torturando certos visitantes.

  Dizem os boatos que a floresta é habitada por um dragão. O Dragão de Jeyfar é assunto controverso. Desde a colonização de Bielefeld, cavaleiros entram na floresta jurando que iriam encontrar e matar o dragão para provar seu próprio valor. Não há nenhum relato de combates com a fera, mas muitos juram tê-la visto. Diz-se que o Dragão de Jeyfar é uma besta mística, que só se revela para cavaleiros dignos, e que enfrentá-la e derrotá-la não é uma simples batalha, mas uma provação espiritual e moral. Segundo boatos, os cavaleiros que nunca voltaram da floresta na verdade se juntaram à Corte do Dragão, sofrendo punição eterna por tê-lo desafiado sem a retidão moral adequada.`
          },
          {
            name: "A Cidade Perdida de Lendilkar",
            content: `Quando Thomas Lendilkar voltou sua sanha conquistadora para Khubar, a capital de Bielefeld pagou o preço. Contudo, a cidade não foi totalmente destruída… Parte dela ainda repousa sob as ondas.

  Lendilkar tinha tudo para ser uma metrópole capaz de rivalizar com Valkaria: ainda hoje um explorador submarino consegue encontrar imensas e complexas construções cheias de riquezas. Lendilkar era o centro econômico e estratégico de Bielefeld. Entre suas ruínas há itens mágicos, baús cheios de pedras preciosas, até mesmo restos de pergaminhos protegidos magicamente contendo segredos. Saque suficiente para ocupar um grupo de aventureiros durante anos.

  As ruínas submersas também escondem perigos: sereias e tritões selvagens, tubarões gigantes, monstros-caranguejo conhecidos como cancerontes… As histórias mais fantásticas afirmam que um dragão marinho habita as passagens aquáticas. Segundo certos relatos, o próprio Thomas Lendilkar ainda assombra o local. A fúria de Benthos teria permeado o espírito do rei, deixando-o preso para sempre numa morte em vida repleta de amargor e raiva. Lendilkar seria capaz de comandar as águas e hordas de espectros submarinos, mas estaria preso a sua cidade arruinada.

  Agora que Bielefeld tenta retomar sua marinha com a ascensão da Patrulha Costeira, é mais importante do que nunca garantir a segurança da Costa do Dragão-Rei. As ameaças que surgem da Cidade Perdida devem ser contidas… Ou o reino pagará de novo.`
          },
          {
            name: "Bosque de Fiz-grin",
            content: `Quando um viajante adentra um bosque em Bielefeld, normalmente encontra um lugar de sombras amenas e córregos frescos, ideal para um descanso da estrada. Porém, em raros casos, pode estar entrando nos domínios do dragão Fiz-grin, o Trapaceiro. E nesse caso, um descanso tranquilo é tudo que esse viajante infeliz não terá.

  Fiz-grin não é um dragão normal, mas um dragão-fada. Dizem que essas criaturas existem na Pondsmânia, mas ninguém sabe se são uma espécie ou apenas indivíduos agrupados arbitrariamente, cada um com características únicas. Fiz-grin é muito pequeno, menor que um humano. Tem asas multicoloridas de borboleta e escamas iridescentes. Seu focinho reptiliano sempre apresenta um sorriso matreiro e seus olhos reluzem de inteligência. O desenho de suas asas sempre forma um número de três dígitos que diminui com o tempo.

  Segundo uma cantiga infantil folclórica, há séculos o dragonete pediu para Hyninn que o transformasse num dragão gigantesco e poderoso. O Deus dos Ladrões propôs um jogo: se Fiz-grin enganasse mil aventureiros, o pedido seria concedido. Os números em suas asas seriam a contagem de quantos truques ainda faltam. Os últimos relatos dizem que ele já está bastante próximo de completar a tarefa…

  Antigamente, Fiz-grin habitava um único bosque, no sul de Bielefeld — região hoje tomada pela Conflagração do Aço. Desde a Guerra Artoniana, porém, ele saiu de lá. Alguns dizem que o dragão-fada não tem mais moradia fixa, e que qualquer mata, por menor ou mais singela que seja, pode estar servindo de morada para ele. Outros dizem que o Trapaceiro mora num único bosque, mas que o bosque em si muda de lugar graças aos seus poderes, para sempre surpreender viajantes incautos.

  Fiz-grin não é maligno, mas é imprevisível. Assim como todas as fadas, vê o mundo dos mortais como arbitrário, cinzento e fascinante. Algo a ser imitado, mas também ridicularizado e transformado. A mentalidade feérica de Fiz-grin faz com que ele seja brincalhão e trapaceiro, mas também perigoso. Nunca se sabe se uma peça será inocente ou perigosa; se ele se ofenderá com algo ou ajudará um mortal apenas porque é divertido. O bosque não é habitado por monstros, mas Fiz-grin povoa seu domínio com ilusões de feras e criaturas bestiais. Alguns dizem que essas ilusões são perigosas por si só.

  Durante a Guerra Artoniana, o cavaleiro Lothar Algherulff teria convencido Fiz-grin a atormentar apenas soldados puristas. No entanto, ninguém sabe se essa história é totalmente verdadeira ou, caso seja, se o dragão-fada não mudou de ideia desde então.`
          },
          {
            name: "Gruta da Morte Gotejante",
            content: `Cavernas são elementos comuns de histórias de heroísmo, mas algumas são apenas abatedouros de exploradores tolos. Uma dessas é a Gruta da Morte Gotejante.

  Este complexo de túneis até hoje não é mapeado, a despeito de inúmeras tentativas. Suas paredes e teto gotejam um tipo de ácido que derrete carne, ossos, couro, metais, cerâmica… Até mesmo objetos mágicos! Ninguém até hoje conseguiu coletar uma amostra do ácido, pelo simples fato de que ele corrói qualquer vasilhame. Já se tentou inúmeras vezes extrair pedaços da rocha, para entender como ela não é dissolvida. O problema é que o ácido parece estar impregnado na pedra, como se fosse uma esponja.

  A morte que aguarda os exploradores da Gruta é cruel: são dissolvidos vagarosamente e é difícil notar quando estão fracos demais para voltar à superfície. Então é apenas questão de tempo até que não sobre nada. Desnecessário dizer, não há formas de vida na Gruta, nem mesmo limo ou fungos. Alguns necromantes querem estudar a Gruta por ser o que chamam de “ponto de morte absoluta”: a ausência de vida teria significado místico e propriedades mágicas.

  Ninguém sabe se as profundezas escondem algum tesouro, mas a existência da Gruta é motivo suficiente para desafiá-la. Um estudioso da Academia Arcana certa vez especulou que a Gruta da Morte Gotejante na verdade é o tubo digestivo de uma bizarra forma de vida. Essa hipótese não encontra muito respaldo… Mas, caso se confirmasse, geraria outras perguntas. Que criatura é essa? Ela ainda está viva?`
          },
          {
            name: "O Abismo",
            content: `O Abismo é uma estranha formação subterrânea, um túnel praticamente vertical e parcialmente oculto pela vegetação em volta. A boca semicircular se abre para uma queda vertiginosa, então para um labirinto enterrado. Um viajante incauto pode cair no túnel por acidente e, se sobreviver, ficar perdido num complexo de passagens secretas, corredores traiçoeiros, câmaras… Segundo boatos, existe até mesmo um caminho oculto para Doherimm.

  O Abismo também é um viveiro de monstros: lagartos gigantes, insetos monstruosos, trolls, orcs, kobolds, ogros, mortos-vivos e coisas ainda mais exóticas. Ninguém sabe como ou por que criaturas tão diferentes vivem aqui. Ninguém sabe por que não fazem incursões à superfície.

  Curiosamente, existe outro labirinto subterrâneo repleto de monstros em Wynlla, também chamado de “o Abismo”. Claro, pode ser coincidência. Mas será que não há nenhuma relação entre os dois? Existem outros “Abismos” em outros lugares de Arton? Quem os projetou? Com qual propósito? Dizem que um aventureiro já entrou no Abismo em Bielefeld para, poucas horas depois, se ver no Abismo em Wynlla… Se isso for verdade, pode ser uma alternativa para contornar o difícil acesso a Bielefeld. Cada vez mais grupos de aventureiros estão desbravando o Abismo em busca dessa solução.`
          }
        ]
      },
      {
        title: "Guildas & Organizações",
        places: [
          {
            name: "A Ordem da Luz",
            content: `O espírito de Bielefeld encontrou forma e nome há pouco mais de um século, com a fundação da Ordem da Luz. Em pouco tempo, ela se tornou a maior ordem de cavalaria do mundo conhecido e passou a ser parte fundamental do reino. A Ordem da Luz é totalmente descrita no Capítulo 4: Organizações.`
          },
          {
            name: "Patrulha Costeira",
            content: `Nos primeiros anos após o ataque de Benthos, a nova rainha de Bielefeld decidiu que deveria haver uma tropa responsável por proteger a costa. Essa decisão não foi simples nem livre de controvérsias — segundo a assim chamada Doutrina da Ferradura, um nobre não deveria interferir além de onde pudesse chegar a cavalo. Por isso, Raissa Janz determinou que essa não seria uma força de simples soldados e que eles nunca deveriam expandir sua área de proteção para o alto-mar. Clérigos e paladinos de Khalmyr e Tanna-Toh foram convocados, juraram não repetir os erros de Thomas Lendilkar e se tornaram os primeiros membros da Patrulha Costeira.

  Apesar de contar com pouca glória em comparação aos cavaleiros tradicionais do reino, os patrulheiros são alguns dos combatentes mais extraordinários de Bielefeld. Na verdade, a Patrulha é bem mais antiga que a própria Ordem da Luz! Treinados em navegação e sobrevivência no mar, quase todos também são usuários de magia e muitos possuem itens mágicos que os tornam capazes de combater debaixo d’água. Suas armas e armaduras são tratadas para nunca enferrujar e eles possuem conchas encantadas, que podem soprar para chamar uns aos outros ou mesmo trazer reforços magicamente.

  Tudo isso leva à pergunta: como essa força tão estupenda é tão pouco conhecida? Alguns dizem que, na verdade, a Patrulha Costeira é eficiente demais para seu próprio bem. Bielefeld não se vê ameaçado por nada vindo do mar justamente porque os patrulheiros são bons no que fazem. Outros, contudo, afirmam que tantos recursos e tanto talento são desperdiçados em postos onde nunca há perigo. Contudo, a Patrulha Costeira mostrou seu valor durante a Guerra Artoniana, quando ajudou a rechaçar uma terrível armada pirata financiada pelos puristas.

  Essa batalha colocou a Patrulha Costeira pela primeira vez em evidência no imaginário dos jovens de Bielefeld. Os patrulheiros também tiveram contato com o herói e nobre dos povos submarinos chamado Fintan, pela primeira vez sendo parte importante da diplomacia bielefeldense e talvez possibilitando uma aliança com esses seres. A marinha de Bielefeld está começando a se desenvolver pela primeira vez a partir da Patrulha, apesar das desconfianças do Rei Khilliar Janz. Talvez esse seja o início de uma nova lenda no reino — ou, alguns especulam, de uma nova e exótica ordem de cavalaria.`
          },
          {
            name: "Os Cavaleiros Solitários",
            content: `Os cavaleiros da Luz prezam a honra, a honestidade e as tradições. Mas existe uma organização secreta que os ajuda sem se preocupar com nada disso: os Cavaleiros Solitários. Eles admiram a Ordem, mas sabem que, em certas missões, honra e honestidade devem ser ignoradas. Atuam nos bastidores, manipulando eventos, gerando ou roubando recursos, fornecendo ou escondendo informações… Fazendo todo o serviço de espionagem, trapaça e enganação de que a Ordem da Luz precisa. Ninguém na Ordem da Luz desconfia da existência deles e é vital que isso continue assim — se a Ordem os conhecesse, rejeitaria sua ajuda. E, se não rejeitasse, estaria abandonando a honra.

  Às vezes, eventos conspiram para que as galantes missões dos cavaleiros da Luz deem certo: uma masmorra “coincidentemente” contém um item mágico vital para derrotar um monstro. Um lorde corrupto fica doente logo antes de executar seu estratagema. O veneno que deveria matar uma cavaleira misteriosamente não surte efeito. Certas operações dos Cavaleiros Solitários parecem tramoias contra a Ordem da Luz: se a honra de um cavaleiro dita que ele deve embarcar numa missão suicida, ele pode sofrer incontáveis atrasos e emboscadas, impedindo que entregue sua vida.

  Os Cavaleiros Solitários muitas vezes reúnem, manipulam ou auxiliam aventureiros — até mesmo contra sua vontade. Vários grupos já narraram terem sido pagos para atrapalhar a vida de um cavaleiro e, meses depois, descobrir que o salvaram de um perigo mortal. Da mesma forma, grupos com pelo menos um cavaleiro às vezes passam por terríveis marés de azar, apenas para obter um triunfo gigantesco logo em seguida. Em Bielefeld, qualquer anão tagarela tentando contratar um grupo para uma missão pode ter propósitos ocultos.

  O quartel-general dos Cavaleiros Solitários é uma casa de vinhos em Roschfallen. É preciso falar um complexo conjunto de senhas para ser admitido no porão secreto onde ocorre o planejamento das operações. O dono da casa é Felix Jannon, um aristocrático e paranoico viajante, explorador planar e caçador de curiosidades. O líder é Thulbok Farandrimm, um anão que jura ser clérigo de Khalmyr, mas se comporta como sacerdote de Hyninn. Ou, às vezes, de Nimb. O terceiro Cavaleiro Solitário é Crawford, um “especialista em sobrevivência” que vive em uma verdadeira fortaleza. O último membro é Ambrose, um lunático e teórico de conspiração. Ambrose possui uma vasta rede de contatos e informantes que lhe fornecem dados de todos os tipos. Poderia ser somente um maluco — se não chegasse a previsões corretas.

  Ninguém (talvez nem mesmo os próprios Cavaleiros) sabe se eles são devotos de Hyninn, se servem a Nimb ou se trocam de aliança conforme as necessidades da Ordem da Luz. De qualquer forma, estão a postos para ajudar nas sombras.`
          },
          {
            name: "A Escola do Lorde Mago",
            content: `Quando Aslothia foi tomada por mortos-vivos, Bielefeld aceitou todos os refugiados do antigo reino que pediram asilo, inclusive muitos arcanos. A maioria desses foi acolhida pelo Conde Nathaniel, mais conhecido pelo apelido de “Lorde Mago”.

  O excêntrico Lorde Mago vive em um castelo conhecido como Torre de Prata e governa um condado tradicional — exceto pelo fato de que sua família não protege o povo com armas, e sim com magia. Toda a honra, tradição e dever dos cavaleiros de Bielefeld estão presentes entre a família, mas em versões arcanas. Eles cavalgam construtos conjurados, usam robes em vez de armaduras, têm varinhas em vez de espadas. Parece loucura para os cavaleiros, mas dá certo.

  Para arranjar o que fazer com os arcanistas refugiados, o conde decidiu uni-los em uma escola. Grandes áreas da Torre de Prata foram destinadas à prática e ensino de magia arcana. Os refugiados recuperam aos poucos seu orgulho e aprendem a viver num reino onde suas habilidades não são ilegais. Suas famílias conseguem levar adiante o conhecimento acumulado. E vários filhos de outros nobres já vieram ao castelo para aprender com os recém-chegados.

  Alguns cavaleiros, principalmente veteranos da guerra civil, desconfiam disso. E se houver um agente de Ferren infiltrado entre esses exilados? Alguns afirmam que, ao pisar em Bielefeld, os refugiados deveriam adotar os costumes de Bielefeld, abandonando a magia para se dedicar às armas. Não percebem o quanto isso chega perto do antigo discurso antimagia de Ferren Asloth. Outros acham que os refugiados poderiam continuar sua prática arcana, mas tantos deles reunidos num lugar só podem ser perigosos.

  Frente a tudo isso, o Lorde Mago se mantém firme. Ele usa sua fortuna para amealhar heróis que estejam dispostos a combater os cavaleiros desonrados que ameaçam seus protegidos, o que já colocou alguns grupos de aventureiros em conflito com nobres importantes e até mesmo com a Ordem da Luz. Mas os refugiados fazem parte de seu povo. E é dever de um nobre defender seu povo.`
          }
        ]
      },
      {
        title: "Aventuras",
        content: `Sem grandes pragas de monstros e com fortes relações de lealdade, Bielefeld pode parecer um reino seguro. Em geral é — mas a segurança existe principalmente dentro dos castelos.

  Como nação rural, Bielefeld apresenta vastas áreas sem sinais de civilização. Cada nobre cuida de suas terras, sem que um exército real forme perímetros ou estabeleça postos de vigilância. Nesses lugares desprotegidos, um único monstro pode ser um grande perigo. Há muitos casos de ogros e trolls que tomam o controle de uma ponte ou trecho de estrada, exigindo algum tipo de tributo. Cabe à família nobre local lutar contra essas ameaças — ou contratar aventureiros.

  Outro risco em Bielefeld são cavaleiros tentando amealhar ouro e glória. Alguns são honrados membros da Ordem da Luz, que desafiam para duelos e justas guerreiros capazes de se defender. Outros são aproveitadores que distorcem essa tradição para roubar os mais fracos sob uma fachada de legitimidade. O vencedor tem direito às armas, à armadura e talvez até ao cavalo do perdedor. Ignorar esses desafios traz vergonha e fama de covarde a um cavaleiro… E pode render um ataque unilateral a um não cavaleiro. Afinal, como um “mero guerreiro” ousa recusar o desafio de um nobre?

  Também há o que se chama de “cavaleiros bandidos”. Não são membros da Ordem da Luz, mas baixos nobres que portam o título de sir. Atacam grupos de aventureiros ou plebeus, roubando tudo que têm e sequestrando alguns. Eles se aproveitam de seu título para escapar das punições que recairiam sobre um bandoleiro comum. Mas, por trás das armaduras e brasões, é isso que são. Muitas vezes, quando um aristocrata é raptado por um cavaleiro bandido, a lei de Bielefeld não pode fazer nada, pois costumes antigos ditam que nobres rivais podem ser feitos prisioneiros, desde que sejam “tratados adequadamente”. Resta à família pagar o resgate ou recorrer a heróis.

  Muitas aventuras em Bielefeld envolvem intriga palaciana ou o modo de vida da Ordem da Luz. Aventureiros podem encontrar torneios abertos com grandes somas em dinheiro ou até itens mágicos como prêmio principal. Esses torneios são centrados ao redor da justa (competição com lanças entre cavaleiros), mas também há a liça (uma batalha a pé entre múltiplos oponentes), campeonatos de arquearia e até duelos mágicos. Embora a justa seja teoricamente reservada a portadores do título sir, qualquer um pode se inscrever como um “cavaleiro misterioso”, escondendo o rosto e o brasão, desde que tenha cavalo, lança e armadura. A vitória de um cavaleiro misterioso muitas vezes é causa de interesse quase frenético nas cortes. Um dos mais notórios cavaleiros misteriosos dos últimos anos é sir Hielroy Générique Forget, cujo próprio nome parece uma troça com os costumes da cavalaria. Contudo, o cavaleiro já venceu diversos torneios, sempre se portando de forma galante e honrada — amealhando uma grande quantidade de admiradores e de rivais.

  Outro fenômeno comum em Bielefeld são cavaleiros errantes que ativamente procuram injustiças para corrigir e maldades para punir. Mesmo que um monstro ou vilão não esteja ameaçando seu feudo, talvez um nobre queira partir para caçá-lo, apenas porque é a coisa certa a fazer. E para isso precisa de valorosos companheiros. Aventureiros podem cumprir uma dessas missões como teste de suas capacidades e espírito galante. Dentre esses curiosos benfeitores, destaca-se atualmente sir Karl-Eisen Poundmax, que tomou para si a inglória tarefa de defender o povo élfico e uni-lo sob uma nova divindade.

  Quase todos os aventureiros saídos de Bielefeld são combatentes. A cavalaria é uma inspiração perene: guerreiros trajam armadura pesada e armas tradicionais, caçadores escolhem montarias como companheiros. Clérigos de Khalmyr e Lena também são comuns e o reino é um dos únicos que possui grande número de paladinos. Outros tipos de aventureiros muitas vezes começam como “auxiliares” de cavaleiros experientes, formando uma comitiva. Na verdade, um dos mais tradicionais tipos de grupos de aventureiros em Bielefeld é um jovem nobre acompanhado por servos e vassalos de sua casa: o aprendiz do mago da corte, a cavaleira jurada, a filha da mestra de caça, o espião em treinamento, a noviça da capela…`
      }
    ]
  },
  { id: "namalkah",
  name: "Namalkah",
  subtitle: "O Reino Indomado",
  tag: "Reinado",
  image: "/regioes/namalkah.png", // Substitua pelo caminho da imagem de Namalkah
  coatOfArms: "/regioes/namalkah-brasao.png",
  map: "/regioes/namalkah-mapa.png",
  intro: `Nem tudo é vazio, vento e chão neste domínio de planícies infindáveis, mas a pátria dos namalkahnianos não perdoa. Mais que um lugar, Namalkah é uma ideia na mente de seus habitantes. Uma lembrança da qual não conseguem se livrar, mesmo que cavalguem até o fim do mundo.
Em um passado ancestral, foi o ponto de peregrinação de povos nômades. A cancha sagrada onde galopa Hippion, o Deus Menor dos Cavalos. O nascedouro de todos os furacões e tempestades, segundo lendas de uma cultura nativa tão sofisticada quanto rústica, incapaz de se curvar aos outros. Aqui os colonos vindos de Lamnor jamais conseguiram impor seu modo de vida: eles é que foram assimilados pelo norte indômito. E mesmo a aristocracia não controla a vastidão dos ermos, povoados em sua maioria por gente livre.
Em Namalkah cavalos não são meros animais dominados pelos humanos, e sim seus irmãos. Ginetes recebem a custódia de um potro ainda na infância e formam com ele um laço de lealdade que carregam até as portas da morte. Falam com suas montarias em uma língua de sussurros e gestos, incompreensível a forasteiros.
Ainda assim, é uma terra capaz de acolher qualquer pessoa. Desde que não use esporas.`,
   // Substitua pelo caminho do brasão de Namalkah
  facts: [
    { label: "Nome Oficial", value: "Veneráveis Hostes de Namalkah." },
    { label: "Lema", value: "“Livre como o Vento, Forte como o Chão”." },
    { label: "Brasão", value: "de verde um cavalo passante de prata coroado de ouro." },
    { label: "Gentílico", value: "namalkahniano." },
    { label: "Capital", value: "A Corte Errante." },
    { label: "Forma de Governo", value: "monarquia eletiva." },
    { label: "Regente", value: "Rainha Zallia Silloherom." },
    { label: "População", value: "1.450.000." },
    { label: "Raças Principais", value: "humanos, centauros." },
    { label: "Divindades Principais", value: "Hippion, Allihanna, Khalmyr, Nimb." }
  ],
  sections: [
    {
      title: "História",
      content: `Muito, muito antes de qualquer um vindo de Lamnor pisar nestas pradarias, elas já eram habitadas. Antes mesmo da humanidade. Aqui viveu, e ainda vive, um dos primeiros povos a venerar Hippion, o Divino Corcel: os centauros, seres quadrúpedes de corpo equino e torso humanoide. Detentores de grandes rebanhos de bois, búfalos e cabras, não travavam guerra por pastos ou recursos naturais, mas batalhas ritualísticas para provar sua bravura.
Outros povos, como migrantes humanos da Grande Savana, foram sempre aceitos como iguais, desde que adotassem a religião hippionte. Com o tempo, a população humana superou a de centauros. Mas, emulando seus conterrâneos e em eterna adoração ao Deus Menor dos Cavalos, esses humanos formaram uma cultura centrada na equitação, na exploração e na união de cavalo e ginete. Os centauros seriam para sempre um exemplo. E, se humano e cavalo estavam separados em corpo, o mais alto ideal a ser atingido é que estivessem unidos em alma. Antes de ver a si mesmos como pertencendo a um reino, a cidades ou mesmo a aldeias e povoados, ginetes e montarias se consideravam parte de grupos viajantes, como os centauros: os assim chamados tropéis.
Até onde se sabe, Hippion foi o maior fator de povoamento da área. Um cavalo cultuado como um deus por animais e seres inteligentes, um dos deuses menores mais presentes e atuantes até hoje, ele ocasionalmente podia ser visto pela população que percebia nisso uma inerente proteção divina. Já nessa época ancestral Namalkah não dependia da fé em seres longínquos ou arrogantes. Tinha, afinal, sua própria deidade de carne e osso, o trotar de cujos cascos ecoava no mundo material e no espírito de seus fiéis.
Não que esses primórdios tenham sido uma época tranquila. Alguns tropéis de centauros renegados seguiam Megalokk, o Deus dos Monstros, não vendo problema em capturar bípedes e usá-los em sacrifícios. Havia também grupos de humanos cavaleiros de grifos, proscritos de clãs bárbaros das Sanguinárias, que se assentaram no topo dos Montes Nublados, passando a viver como saqueadores e ladrões de gado.
Esses conflitos internos levaram muitos clãs a se deslocar para outros pontos de Arton Norte. Aqueles que ficaram para trás continuaram a desenvolver uma cultura própria, centrada na pecuária e na equitação. Aprenderam a se defender de seus inimigos e muitos adotaram um modo de vida seminômade, migrando dentro das planícies conforme necessário.

### Sempre em Movimento
Após a fundação de Valkaria em 1020, refugiados sulistas descontentes partiram em caravanas para explorar o norte. Muitos se sentiram abandonados pelos deuses em Lamnor, e as agruras da nova jornada reforçaram o pessimismo geral. Esses exploradores obstinados, orgulhosos e amargurados ignoraram os avisos dos nativos, usaram atalhos perigosos e por fim estabeleceram-se onde hoje é Salistick, o Reino sem Deuses.
Um braço dessa caravana, após divergências internas, separou-se e escolheu continuar ao norte, seguindo uma antiga rota nômade. Enquanto os lamnorianos que se assentaram em Salistick renegavam totalmente os deuses, essa dissidência estava apenas decepcionada com a distância e o aparente descaso de suas divindades tradicionais. Relatos afirmam que a expedição só parou frente ao intransponível Rio dos Deuses. Muitos lamnorianos teriam se convertido a Hippion naquelas margens, após testemunhar o deus majestoso galopando pelas planícies. Como ocorrera séculos atrás, a presença física do deus foi vista como um sinal pelos recém-chegados. Considerando o sítio abençoado, escolheram ali permanecer.
Esse núcleo original de povoamento se espalhou e deu origem à vila de Palthar em 1022 — logo se tornando um entreposto movimentado. Seria a capital do reino por anos a fio, com seu estilo arquitetônico horizontal e construções em estilo nativo. Os lamnorianos acabaram adotando os valores dos tropéis das planícies vizinhas. Em poucas gerações, mesclaram-se ao povo local por meio de casamentos, integrando-se à sua cultura.
Com a adição desta última e mais recente leva migratória, consolidava-se a comunhão dos vários tropéis da crença hippionte. Em 1065 esses bandos seminômades que compunham a nação seriam imortalizados nos célebres versos do infame bardo Tantinbor como as Veneráveis Hostes de Namalkah. O nome, segundo alguns, vem das palavras nativas namminuyhnhnm, vento frio que sopra das Uivantes em direção ao norte, e amalkhan, um termo intraduzível que descreve ao mesmo tempo saudade de casa e ânsia por explorar. O neologismo descrevia perfeitamente a sensação de viver na região abençoada por Hippion. Quando as hostes foram finalmente convidadas a se juntar ao Reinado, esta denominação poética foi adotada para o que formalmente passou a ser um reino, com uma monarquia eletiva, mas ainda alicerçada nos antigos ritos de chefia das planícies.

### Ventos da Guerra
Em 1412, a Guerra Artoniana chegou a Namalkah e a cidade de Hippiontar marcou o ponto de resistência do reino, permanecendo milagrosamente intocada. O então Rei Borandir Silloherom estava na cidade para uma transação comercial — ou, dizem alguns, porque recebera um presságio de que sua presença ali seria importante.
Dizem que a conquista de Hippiontar pelo inimigo foi evitada graças a um grupo de bravos heróis, que cavalgou através de todo o reino para avisar o rei de uma invasão simultânea. A Supremacia Purista ocupou todo o interior de Namalkah ao mesmo tempo, usando mobilização rápida de tropas transportadas por aeronaves e túneis subterrâneos dos trolls.
Os mesmos heróis teriam sido responsáveis por improvisar uma cavalaria alada com grifos, serpes e gárgulas para atacar os transportes aéreos — um feito totalmente aberrante aos costumes namalkahnianos. A tática de batalha assimétrica surpreendeu o inimigo. Infelizmente, a tropa formidável foi quase aniquilada nesta missão suicida e o Rei Borandir perdeu sua vida.
A batalha decisiva aconteceu no chão. O grosso das tropas da Supremacia foi vencido em terra, em grande parte graças aos esforços do centauro Rark Cascos Sangrentos. O antigo vilão se aliou aos humanos em uma carga vitoriosa contra os arsenais puristas, empunhando seus dois machados imbuídos de magia.
Com o fim do conflito, Namalkah tenta se reerguer das consequências da ocupação, agora liderada pela Rainha Zallia Silloherom, filha do antigo rei, eleita por aclamação entre os chefes de tropéis do reino.`
    },
    {
      title: "Geografia",
      content: `Namalkah apresenta clima muito quente e úmido próximo ao Rio dos Deuses, mas seu interior é atravessado por uma corrente de ar gélido das Uivantes, trazendo ventos cortantes e erosivos. Tornados são comuns, representando ameaça frequente.
O reino é, em primeira impressão, uma planície infindável, pontilhada por terrenos irregulares como ravinas e coxilhas. Além do Rio Amarante que nasce nos Montes Nublados, outros pequenos afluentes correm por suas terras, mas poucos são caudalosos ou amplos o bastante para formar vales ou depressões — com exceção notável de alguns acidentes geográficos, como os Desfiladeiros de Dópsia.
Há ao menos uma fronteira clara: o Rio dos Deuses ao norte, além do qual se localiza a Grande Savana. Bem menos exata a nordeste é sua fronteira com um antigo desafeto, o reino de Callistia — hoje incorporado às Repúblicas Livres de Sambúrdia. Essa divisão é mais uma convenção histórica do que geográfica; apenas nativos sabem dizer onde acaba uma região e começa a outra.
Ao sul, marcada pela reconquistada cidade de Suth Eleghar, temos a fronteira com a odiada Supremacia Purista, vigiada por patrulhas de ginetes. A sudeste, além do Rio Vermelho, situa-se Salistick, o Reino sem Deuses.
A oeste, atravessando diferentes pontos do Rio Lengarim, é possível chegar às Estepes Selvagens, região fronteiriça com as Montanhas Uivantes; ou a Zakharov, o Reino das Armas.`
    },
    {
      title: "Povo & Costumes",
      content: `Hoje a população namalkhaniana é formada em sua maioria por humanos seminômades, de identidade muito ligada à vida na planície, o que os diferencia de reinos vizinhos. Embora existam muitas cidades, aldeias e paradas de caravanas pelo reino, a unidade social mais importante ainda é o tropel: grandes grupos de ginetes que conduzem gado, cavalos ou outros animais de um ponto a outro, para comércio ou outros fins.
Centauros são presença comum no reino, ainda que tenham sofrido baixas severas durante a Guerra Artoniana. Muitos hynne locais abandonaram o reino em êxodo para as Repúblicas Livres de Sambúrdia.
Humanos nativos costumam usar calças acolchoadas de lã e túnicas largas do mesmo material. Por cima vestem a pênula, espécie de manto que protege contra o frio. Botas, chapéus de abas largas e acessórios de couro — inclusive armaduras — são frequentes.
A aristocracia local não se veste de maneira tão diferente da população comum, apenas usando materiais de melhor qualidade. Com efeito, a nobreza, embora próspera, controla parcas propriedades, considerando o território do reino como um todo. Em vez de terras ou lavouras, o poder local é medido pela posse de rebanhos e ginetes lutando em seu nome.
A maior parte das forças militares namalkhanianas não é composta por servos que juram lealdade a senhores em troca de proteção — e sim gente livre que habita os ermos, vivendo em tropéis errantes lutando uns pelos outros. Azul, dourado, marrom e verde são cores muito valorizadas no país, utilizadas em brasões e uniformes nos tempos de guerra.
Um dos costumes mais importantes para um habitante de Namalkah é receber seu primeiro cavalo. Crianças aprendem a cavalgar desde cedo, recebendo a primeira montaria aos seis anos. É esperado que cuidem do animal como um pai cuida do filho. Essa responsabilidade, tênue no início, se torna mais rigorosa na adolescência. Negligenciar a própria montaria é malvisto; maus tratos são considerados crimes tão graves quanto agredir ou torturar pessoas.
Deixar o primeiro cavalo morrer, mesmo que por acidente ou doença, é sinal de mau agouro, trazendo estigma social. Uma das piores ofensas a um nativo é dizer que este “usa esporas” em suas botas; tal acusação invariavelmente resulta em desafio para um duelo, que pode ser uma corrida ou briga de faca. Segundo os costumes namalkahnianos, a comunicação entre ginete e montaria deve ser intuitiva e não violenta. Assim, esporas são consideradas uma ferramenta de covardes e incompetentes.
Em geral, a sociedade namalkhaniana é aberta a outros povos e culturas — mas isso não significa ser livre de preconceitos. Ser esguio e atlético é considerado padrão de beleza, enquanto os sedentários ou incapazes de cavalgar são estigmatizados. Também existe forte hostilidade contra nativos do antigo reino de Callistia, considerados empolados, preguiçosos e decadentes. Salistick costumava ser considerado um “reino irmão”, com fazendeiros enviando seus filhos para o Colégio Real de Médicos. Porém, há ressentimento quanto à neutralidade dos salistienses durante a última guerra.`
    },
    {
      title: "Hippion e Outros Deuses",
      content: `A principal divindade do reino é Hippion, o Deus Menor dos Cavalos, sendo uma das poucas nações conhecidas que tem como principal padroeiro um deus menor. Dizem as lendas que Hippion seria um semideus filho de Allihanna, a Mãe Natureza. Ao longo da história de Arton ele teria servido como montaria para rainhas amazonas, paladinos e grandes heróis — algo provado verdadeiro quando Hippion foi cavalgado por Orion Drake em 1405, durante sua batalha final contra as forças aberrantes da Tormenta.
Alguns afirmam que Hippion gosta de assumir a forma de cavalos comuns e seus ginetes nem desconfiam terem sido escolhidos por ele. Encontrá-lo cavalgando nas planícies de Namalkah é visão rara, mas recorrente, sendo considerado um bom augúrio.
Nimb é uma presença bizarra, mas marcante, no reino. Existem locais tocados pela loucura do Deus do Caos, onde a própria realidade se comporta de maneira diferente. A maioria dos habitantes considera que esses lugares são “amaldiçoados”, “malignos” ou simplesmente palco de histórias infelizes. Apenas alguns sábios e aventureiros e exploradores conhecem a verdade e notam que muitas anedotas históricas de Namalkah são efeitos perigosos e alarmantes do Caos.`
    },
    {
      title: "Governo",
      content: `A atual rainha de Namalkah é Zallia Silloherom, filha de uma guerreira amazona e do rei anterior. É a única herdeira de um rico clã criador de cavalos, famoso por organizar torneios. Embora não aparente por suas vestes simples, é uma das mulheres mais ricas e poderosas do Reinado.
O primeiro ato do governo de Zallia foi restabelecer a tradição ancestral da Corte Errante, retomando alguns mitos fundadores do reino para unir a população nestes tempos difíceis. Hoje em dia, onde quer que a hoste guerreira da monarca decida acampar torna-se automaticamente a capital namalkhaniana. Zallia está sempre viajando e recrutando aventureiros para ajudar a resolver os infinitos problemas afligindo sua regência.
Alguns boatos afirmam que o restante da dinastia Silloherom foi vitimado por uma estranha maldição. Seja verdade ou não, a nova rainha parece determinar seu próprio destino e desafiar com pura força de vontade o sortilégio lançado sobre sua família.
A política local é derivada das tradições do norte de Arton. Os habitantes de uma cidade ou acampamento costumam se reunir periodicamente, escolhendo seus chefes com base em bom senso e consenso, após um debate aberto. Geralmente os escolhidos estão entre as pessoas mais velhas e experientes na comunidade, mas combatentes jovens costumam ter preferência em tempos de guerra, desde que sigam a religião hippionte. Quando surge dúvida, o impasse é resolvido em rápida votação, ou algum tipo de jogo ou disputa. É comum que corridas em cancha reta ou outras provas de equitação sejam usadas para solucionar esses casos, em vez de duelos ou outros confrontos violentos.
Chefes eleitos participam de reuniões periódicas na Corte Errante para discutir o rumo da nação. Esse enclave também aponta possíveis sucessores e sucessoras ao trono de Namalkah. Os candidatos devem então vagar pelas planícies até encontrar Hippion: quem domá-lo e retornar cavalgando-o prova ter seu consentimento para governar. Catástrofes naturais ou outros fenômenos podem ser interpretados como mau presságio pelos altos sacerdotes. Nesses casos, os chefes podem mais uma vez ser convocados para a Corte Errante para discutir a deposição do rei amaldiçoado.`
    },
    {
      title: "Locais importantes",
      places: [
        {
          name: "A Corte Errante (capital)",
          content: `Quando se chega às cercanias de uma cidade namalkhaniana, ou mesmo enquanto se cavalga em meio ao mais completo nada da pradaria, às vezes é possível avistar ao longe um acampamento de tendas com os estandartes do reino presos a longas lanças. Fumaça emana de fogueiras onde ginetes veteranos, provenientes de diversos tropéis, discutem em debates acalorados ou contam histórias enquanto assam cordeiro e degustam bebidas quentes. Aos olhos estrangeiros pode não parecer, mas esta é a capital de Namalkah.
A Corte Errante é uma tradição antiquíssima, remontando ao tempo em que manadas de centauros dominavam as planícies. Os capitães de hoste da época não podiam demonstrar preferência por nenhum assentamento, então tinham seu próprio tropel, composto pelos guerreiros e sábios mais proeminentes. Vagavam pelo reino, cuidando pessoalmente dos problemas de seus súditos. De tempos em tempos, uma assembleia decidia a próxima parada da corte itinerante, com o fim de debater e resolver problemas.
Essa instituição foi retomada pela atual Rainha Zallia, sentindo que o reino precisava recuperar um poderoso símbolo nacional, capaz de reerguer o moral ainda combalido pela guerra recente. Mais que isso: uma sede de governo móvel permite à monarca ver com os próprios olhos lugares distantes e negligenciados da infinita pradaria.
Qualquer um pode adentrar a Corte Errante portando armas ou usando habilidades especiais de qualquer tipo. Isso acontece porque, apesar de ser um grupo relativamente pequeno, todos os líderes ou ginetes do acampamento são heróis com suas próprias salvaguardas contra aço e magia, mais que capazes de se defender sozinhos — incluindo a própria rainha.
A prática da Corte Errante tornou Zallia muito aclamada entre seus súditos, mas também representa um risco. Embora os membros da corte estejam relativamente a salvo de ataques diretos, alguns afirmam que é muito fácil para sszzaazitas ou outros conspiradores infiltrar-se nas decisões políticas do reino. A diplomacia com outros reinos também pode ser prejudicada, já que poucos regentes estão acostumados a essa prática.
Não é incomum que a Corte Errante se depare com problemas ou ameaças em suas viagens infindáveis. E, ainda que conte com muitos heróis, eles não podem abandonar seus postos para resolver tudo. Assim, é frequente que grupos de aventureiros sejam chamados para cavalgar com a Corte Errante durante algum tempo, servindo como batedores ou “resolvedores de problemas”. Essa é uma honraria muito disputada por aventureiros namalkahnianos e um prêmio inigualável para estrangeiros. Ao contrário do que costuma acontecer em outros reinos, em Namalkah não são aventureiros errantes que são chamados à corte real: muitas vezes a corte vai até eles!`
        },
        {
          name: "Hippiontar",
          content: `Uma das cidades mais importantes de Namalkah começou como um mero rancho no meio do nada, até que recebeu a visita de Hippion, que escolheu o estábulo para passar a noite. A família Verimm, proprietária do rancho, trouxe tudo que tinha de riquezas em oferenda à divindade. Quando Hippion partiu pela manhã, os rancheiros começaram a experimentar uma época de boa fortuna que não acabou até hoje, séculos depois. A fama do lugar se espalhou e o pequeno rancho se transformou na cidade de Hippiontar, também chamada de “Baia de Hippion”.
Hippiontar não passa de uma vastidão de estalagens, canchas de corrida, pequenas fazendas e oficinas espalhadas numa planície ao redor do rancho. Contudo, os tropeiros de Namalkah consideram que em cada viagem devem parar pelo menos uma noite em Hippiontar, assim como Hippion fez tanto tempo atrás. A “cidade” está sempre recebendo visitantes que trazem oferendas, gastam dinheiro nas tavernas, hospedam-se nas estalagens e, é claro, visitam a lendária baia onde Hippion dormiu. É comum que mais de uma tropa ou caravana se encontre em Hippiontar, resultando em superlotação, algumas brigas e muita bagunça. Mesmo assim, é raro que exista violência real ou mesmo grandes problemas.
Todos que visitam a baia onde o Deus Menor dos Cavalos esteve relatam boa sorte — bebedeiras épicas resultam em nenhuma consequência ruim, rivalidades são resolvidas amigavelmente, acordos comerciais dão certo… Isso faz com que Hippiontar também seja um ponto muito procurado por comerciantes, nobres e diplomatas. Desde que se preste homenagem ao deus, tudo que tem início aqui costuma dar bons frutos.
Alguns estudiosos já especularam sobre algo mais sinistro neste lugar. Hippion não tem nada a ver com sorte e azar, não deveria fazer sentido que probabilidades fossem distorcidas por sua passagem. Existem lugares em Namalkah tocados por Nimb e sabe-se que, assim como os outros deuses do Panteão, ele pode assumir qualquer forma. Alguns sussurram que o cavalo que visitou Hippiontar não era Hippion, mas o Deus do Caos disfarçado. Segundo esses estudiosos, toda boa sorte gerada em Hippiontar precisaria ser compensada ou “paga” de alguma forma. Talvez com azar extremo para algum amigo ou familiar da pessoa abençoada. Talvez com uma torrente devastadora de má sorte no futuro.
Alarmado por essas sugestões, o clã Verimm está convocando aventureiros para desvendar o mistério ou até mesmo localizar o próprio Hippion e tentar arrancar dele uma resposta. Contudo, como garantir que esses heróis estariam falando com o Deus Menor dos Cavalos e não com o Deus do Caos disfarçado mais uma vez?`
        },
        {
          name: "Palthar",
          content: `Cidades namalkhanianas são modestas, sem exibir luxo exagerado. Torres e estruturas elevadas são raridades. Pode fazer parecer que se trata de um reino pobre, sem recursos. Na verdade, o próprio povo prefere esse estilo de vida, valorizando outras formas de conforto. A arquitetura local privilegia espaços abertos e áreas verdes, mesmo nas cidades mais povoadas. Quase não se vê casas de alvenaria com mais de um andar — poucos em Namalkah gostam de estar longe do solo. Esse tipo de estruturação horizontal resulta em percorrer grandes distâncias para chegar a qualquer lugar — o que não costuma ser problema para gente nascida no dorso de um cavalo!
Palthar, o maior assentamento e antiga capital de Namalkah, é talvez o melhor exemplo do que esse estilo de vida pode oferecer. Tem amplas ruas de paralelepípedos, imensos (mas baixos!) prédios públicos e uma elaborada infraestrutura que conta com galeria de esgotos e aquedutos, além de pequenos palácios. Aqui fica o Mausoléu de Hippion, onde estão enterrados alguns dos cavalos mais famosos da história do reino; o Instituto de Estudos Equinos, instituição influenciada pelo reino vizinho de Salistick, onde se pesquisa e se ensina medicina e teologia centrada em cavalos, e também os Parques Tranquilos, onde animais velhos e doentes são cuidados por druidas, sendo tratados como aventureiros ou soldados veteranos.
Palthar sempre teve ótima qualidade de vida — a família Silloherom considera que proteger a cidade é seu dever e há séculos dedica muitos recursos a manter a prosperidade local. Isso não mudou, mas hoje em dia a antiga capital é algo como uma cidade fantasma: a maioria dos habitantes se juntou aos tropéis do exército contra os puristas e permanece de prontidão no caso de uma nova guerra, enquanto muitos guerreiros e nobres foram integrar a Corte Errante da Rainha Zallia. Restaram apenas os muito jovens ou muito velhos. Os palácios locais, antes domínio de ricaços e nobres, hoje são habitados por famílias modestas, mas não parecem trazer alegria para seus moradores. Os cidadãos parecem sempre imersos em nostalgia e melancolia, sonhando com tempos distantes, quando a guerra total ou ameaças como a Tormenta eram desconhecidas. Talvez por isso, ou algum outro fenômeno arcano, fantasmas (de humanos e cavalos) perambulam pelas ruas à luz do dia, ou assombram casarões decadentes e vazios, sem perceber que morreram. Também devido a esse marasmo, não é incomum que aventureiros sejam contratados por cidadãos de Palthar com alguma desculpa, mas com a única finalidade verdadeira de ouvir suas histórias e trazer alguma vida à cidade. Dizem os boatos que alguns desses grupos envelhecem rapidamente em Palthar, inexplicavelmente “decidindo” se assentar aqui e abandonar a vida errante, unindo-se à população de saudosistas e almas penadas…`
        },
        {
          name: "Yron",
          content: `Esta cidade fica situada às margens do Rio Amarante, segundo maior do reino (o primeiro, naturalmente, é o Rio dos Deuses). Por sua posição privilegiada, atua como ponto de entrada para grande parte das importações do país — sendo um dos entrepostos comerciais mais notáveis da região norte.
Embora não tão vasta quanto Hippiontar ou Palthar, Yron é igualmente rica. Faz parte da tradição local adornar cavalos com joias e gemas preciosas e usar adornos melhores que seu cavalo é visto como mau gosto. Os mais endinheirados equipam sua montaria com ferraduras de ouro, prata ou até platina.
Yron é especializada em serviços: sua pecuária é fraca, mas compensada pela qualidade de seus treinadores e cavalariços. No ramo de aventuras, alguns dos mais hábeis cavaleiros mercenários podem ser contratados aqui. O Templo de Hippion local tem clérigos especializados em doenças e maldições ligadas a equinos.
Igualmente digna de nota é a Guilda dos Tratadores, que organiza escolas e tutelas específicas ligadas aos animais. A maioria dos namalkahnianos sabe criar e cuidar de cavalos, mas apenas os professores yronenses formam mestres nessa arte — e em combate montado. Não raro, jovens nobres de outros reinos chegam em transportes fluviais para estudar aqui.
Alguns namalkahnianos acusam o povo de Yron de ser tudo que tradicionalmente se abomina no reino: sedentários cheios de luxos vivendo às margens de um rio (como os odiados callistienses). De fato, Yron tem sua parcela de empolados e arrogantes. Muitos ricaços contratam aventureiros para escoltar seus filhos e filhas em “missões”, fazendo todo o trabalho para que os herdeiros fiquem com a glória. Muitos também tentam pagar heróis para perder em duelos ou corridas, elevando o próprio nome sem precisar de habilidade.`
        },
        {
          name: "Suth Eleghar",
          content: `Como cidade mais próxima da Supremacia Purista, esta costumava ser uma grande exportadora de cavalos, o ponto comercial mais importante do sul do reino. Tudo mudou quando os puristas a invadiram, tomando seus estábulos. Cavalos destinados a corridas e torneios passaram a ser usados como montarias de combate. Fazendas nos arrabaldes da cidade permaneceram intactas, são ainda um pólo de produção. Mas o mesmo não pode ser dito da cidade em si. As terras em suas cercanias mais imediatas foram quase completamente incendiadas, antes de sua reconquista pelos exércitos de Namalkah. Grande parte dos cavalos foi roubada ou envenenada. O fechamento da fronteira também privou a cidade de seu maior mercado — a cidade de Drekellar, hoje parte do atual território da Supremacia.
Felizmente, a Rainha Zallia veio em socorro. Ordenou a construção de uma imensa fortaleza — obra que tem empregado quase toda a plebe local. A nobreza também foi atendida: sua produção agora é comprada diretamente pelos tropéis que formam o exército de Namalkah. Dizem que o reino não gastou um só tibar de seus cofres públicos na reconstrução: todo o ouro veio das reservas pessoais da monarca.
Em homenagem à rainha ginete, o imenso anfiteatro local, uma das poucas ruínas restantes dos dias pré-conflito, foi restaurado e renomeado Hipódromo Real. Abriga hoje algumas das mais impressionantes corridas de Arton. Muitos nobres, e suas tropas estacionadas na cidade, passam o tempo livre fazendo apostas — o principal lazer da população, obcecada em saber tudo sobre seus corredores favoritos. As corridas no Hipódromo são verdadeiros festivais, mas às vezes são infiltradas por competidores da Supremacia que atuam como espiões em busca de informações sobre as defesas do reino ou mesmo assassinos, tendo como alvo nobres ou campeões locais.`
        },
        {
          name: "Izzileria",
          content: `Namalkah é um reino simples e rústico — muitos acusam-no de ser simples demais. Mas Namalkah tem suas estranhezas, e algumas delas são mantidas em segredo. Talvez o maior exemplo seja Izzileria.
Situada próxima à Pista do Unicórnio Funesto, Izzileria era uma aldeia como qualquer outra em Namalkah. Governada por homens e cavalos, recebendo periodicamente tropeiros e competidores das carreiras, a única coisa que a diferenciava do resto eram ocasionais fenômenos estranhos, raros demais para provocar grande alarde. Vez por outra, um bezerro nascia com duas cabeças ou uma criança nascia com a capacidade de ler mentes. Uma árvore apresentava folhas azuis ou um córrego congelava em pleno verão. Esquisitices descartadas pelos ginetes, com sua mente objetiva e tranquila.
Quando houve a tragédia na Pista do Unicórnio Funesto, Izzileria perdeu uma de suas principais fontes de renda e ganhou um perigo. Mas o povo não debandou por completo — em vez disso, os jovens desafiavam uns aos outros para ver quem tinha coragem de chegar mais perto do local maldito, os mais velhos repetiam de novo e de novo a história de Andhes e Sooliah. E as esquisitices pioraram. Alguns dizem que a região toda ficou marcada pelo caos, a sorte e o azar: assim como certas doenças ou venenos podem deixar sequelas permanentes em uma pessoa, os eventos deixaram um resíduo caótico que o tempo não apagou. Já era possível notar que Izzileria não era como as outras aldeias. Não nasciam apenas bezerros de duas cabeças: agora eram bezerros com asas de mosca. Os humanos nasciam com pele transparente, os cavalos eram capazes de voar, as plantas falavam. Mesmo assim, tudo esporádico. Os tropeiros de passagem cada vez mais convenciam-se de que não valia a pena chamar atenção para aquilo: o povo da aldeia devia tomar conta de seus próprios assuntos, e Izzileria tornou-se um lugar a ser omitido de histórias, ignorado em mapas.
Houve uma nova piora depois da passagem de um cavalo tocado por Nimb, um animal do Caos chamado Bandido.
Agora eram raras as pessoas, cavalos, plantas e construções normais. As mutações ocorriam espontaneamente, em indivíduos já adultos. A água do poço não congelava: transformava-se em fogo, que crepitava com música de alaúde. As árvores nasciam de cabeça para baixo, as casas transformavam-se em cristal. Os habitantes acordavam para notar que seus pés haviam virado cabeças de cães, e seus filhos agora eram feitos de carvão. Já empobrecida, Izzileria caiu na miséria total, mal subsistindo com a raríssima passagem de tropeiros e as plantações de vegetais que podem ou não se transformarem antes de serem consumidos.
O líder do povoado é Santhell, um cavalo inteligente e capaz de falar, coberto por finas minhocas no lugar do pelo. É bem-intencionado, mas já está muito velho e pouco pode fazer contra a loucura que existe no local. Os habitantes de Izzileria são amedrontados e inquietos, e desconfiam de forasteiros. Apenas Santhell faz qualquer esforço para acolher visitantes.`
        },
        {
          name: "Desfiladeiros de Dópsia",
          content: `Uma das raríssimas áreas montanhosas do reino, e consequentemente uma das mais famosas (juntamente com os Montes Nublados), os Desfiladeiros de Dópsia são resultado da erosão do Rio Ammnes, outrora vasto e caudaloso. Hoje não passa de um córrego nas profundezas dos estreitos. O que teria causado sua diminuição ninguém sabe.
Os Desfiladeiros estão entre os lugares mais perigosos de Namalkah. Foram tomados pelos finntroll e ainda hoje permanecem sob seu controle, protegidos por monstros nativos sob encantamento: ciclopes, gigantes, ogros e trolls comuns. Não é incomum encontrar esses seres emboscando caravanas, grupos de aventureiros ou tropéis de ginetes. Alguns dizem que os finntroll têm uma magia que transforma a água de cantis em óleo escuro, obrigando viajantes a mudar sua rota original para passar por aqui e reabastecer. A região seca e pedregosa é também propícia como esconderijo de felinos selvagens, quimeras e grifos. Aparentemente não há lobos: caçadores dizem que eles foram embora “viver em algum lugar mais calmo, como uma área de Tormenta, por exemplo!”.`
        },
        {
          name: "Montes Nublados",
          content: `Ponto mais alto de Namalkah, os Montes Nublados são modestos se comparados às Uivantes ou Sanguinárias. Para os habitantes do reino mais plano de Arton, contudo, são vistos com espanto e admiração. Assim chamados devido aos cumes sempre encobertos, são formados por quatro elevações principais — a maior abriga a nascente do Rio Amarante. Sua escalada não é difícil com treino e experiência, e cavernas nas partes baixas servem de abrigo para viajantes. Isto é, quando não estão ocupadas por animais selvagens.
Namalkahnianos preferem evitar os montes, por serem habitados por cavaleiros de grifos, descendentes de povos vindos das Sanguinárias. Estes bárbaros teriam sido liderados na guerra contra os puristas por uma mulher conhecida hoje apenas como “Princesa” — notória bandoleira e ladra de gado. Ela talvez possa ser convencida a encerrar suas atividades e trabalhar para a coroa, se receber ajuda para derrotar um dragão bicéfalo que aterroriza a região. Mas as autoridades do reino não parecem interessadas em lidar com tal ameaça…`
        },
        {
          name: "Refúgio de Alliah",
          content: `Com planícies verdejantes cobrindo praticamente todo o reino, qualquer tipo de vegetação mais cerrada ou acidente geográfico acaba por se tornar conhecido, por menor que seja. Assim aconteceu com esta floresta.
O refúgio é na verdade a parte mais interna de um bosque no extremo leste do reino, com árvores medianas e espaçadas. Um druida poderia definir o lugar como não mais que um matagal.
Nada haveria de curioso no bosque, não fossem os centauros que o habitam. De fato, este lugar é proibido para não centauros e costumava até mesmo ser protegido por um acordo com a coroa do reino, garantindo que as outras raças nunca o perturbariam. A única exceção eram os elfos.
Durante a guerra, o Refúgio foi impiedosamente atacado pelos puristas, que encontraram uma resistência liderada por Brahm Crina Negra. Relatos diziam que os centauros haviam sido dizimados. Mas, quando tropeiros humanos tentaram entrar no bosque recentemente, foram repelidos por Brahm e seus súditos, como se nada tivesse mudado! Ninguém sabe qual a verdade por trás da “ressurreição” desses seres. Alguns dizem que é uma bênção de Thyatis e o cumprimento da antiga profecia que falava do “Rei dos Centauros”. Outros afirmam que os habitantes do bosque são mortos-vivos. E há quem diga que os atuais “centauros” não passam de hynne ilusionistas, assustando forasteiros com seus truques!`
        },
        {
          name: "Pista do Unicórnio Funesto",
          content: `Outrora usada para sediar torneios entre ginetes, esta arena de jogos foi abandonada devido a um incidente trágico, ocorrido há mais de 50 anos. Durante uma corrida, a amazona Sooliah e seu fabuloso unicórnio Andhes estavam à frente, sem desconfiar que um competidor trapaceiro contratara capangas para colocar armadilhas na pista. Caindo em uma delas, o unicórnio tropeçou e derrubou sua dona, matando-a acidentalmente com o chifre.
Enlouquecido, Andhes massacrou todos os outros competidores, incluindo o assassino, e seus cavalos. Naquele instante o unicórnio — animal mágico de bondade e pureza — adquiriu aspecto sombrio, seus olhos se tornaram vermelhos. Transformou-se em uma fera abissal, corrompida pelo ódio, que ainda hoje ronda o sítio, galopando em sua pista forrada de cadáveres. Alguns afirmam que incidente tão trágico deve ter o dedo de Nimb, o Deus do Caos — teoria reforçada por visitas ocasionais de Dee, seu sinistro sumo-sacerdote, com suas maças cobertas de melado, sangue e moscas.
Embora a maioria dos tropéis evite a todo custo esta área, alguns afirmam que o Unicórnio Funesto continua aceitando desafios e correndo na cancha reta contra aqueles que sobrevivem a suas investidas. Qual o prêmio? Alguns dizem que é o favor eterno de Nimb. Outros, que é a libertação do espírito de Sooliah ou a redenção do próprio Unicórnio Funesto. Por fim, há quem diga que o vencedor poderia domar o unicórnio, transformando-o em sua montaria para sempre.`
        },
        {
          name: "Ruínas de Alkav",
          content: `Nem os centauros sabem dizer quem — ou o que — vivia nestas ruínas. Uma civilização antiga e desconhecida habitava o lugar antes mesmo de sua chegada. As evidências de sua presença são restos de uma cidade com construções de pedra e alvenaria, e muralhas repletas de entalhes, pinturas e hieróglifos.
Há tesouros antigos, por isso o lugar costuma ser visitado por saqueadores de tumbas e expedições de aventureiros. Estes costumam ser financiados pela coroa do reino, buscando artefatos. Mas as ruínas são perigosas, habitadas por tipos únicos de mortos-vivos.
Curiosamente, estudiosos descobriram que os antigos habitantes de Alkav nunca domesticaram cavalos, considerando-os bestas selvagens. Alguns sábios suspeitam até mesmo que esse povo os temia ou os caçava. Alguns murais retratam cavalos monstruosos destruindo torres e monumentos, o que leva a crer que esses animais tenham trazido a ruína da tal civilização. Certos teólogos chegam a sussurrar a sugestão herética de que isso teria sido obra do próprio Hippion, mas ninguém sabe o porquê.`
        }
      ]
    },
    {
      title: "Guildas & Organizações",
      places: [
        {
          name: "As Amazonas",
          content: `O Reino Indomado até hoje hospeda tropéis matriarcais, governados por algumas das melhores guerreiras do continente. Vários desses clãs já serviram como guarda-costas a famílias de governantes em todo o Reinado. Alguns grupos são formados exclusivamente por mulheres, que perpetuam seu clã adotando e treinando novas aprendizes.
Existem inúmeros bandos de amazonas, com seus próprios valores e leis. Embora sempre voltem a Namalkah de tempos em tempos, estão dispersos pelo continente. Um dos maiores e mais poderosos bandos é o das Amazonas de Hippion — algumas de suas lideranças já se tornaram monarcas deheoni através do casamento. Outro tropel notório é o da Planície sem Fim: descendentes da famigerada heroína Duria, não cultuam o Deus Menor dos Cavalos, mas Allihanna. Veem com desconfiança os demais namalkahnianos, jamais adentrando suas cidades.`
        },
        {
          name: "Cavaleiros da Tempestade",
          content: `Estes misteriosos cavaleiros representam um dos maiores mistérios de Namalkah. Quando há inocentes em perigo — sejam vítimas de monstros, bandidos ou mesmo desastres naturais — eles surgem com suas montarias furiosas, combatem a ameaça e partem, sem dizer palavra. Receberam esse nome porque uma grande nuvem de pó e areia, levantada pelos cascos de seus cavalos, ergue-se no horizonte quando estão prestes a chegar. O povo acredita que essa nuvem é de onde eles vêm e para onde vão.
Não se sabe quantos são, pois seu número muda a cada aparição: podem ser cinco ou seis, ou então dezenas. Suas faces também são desconhecidas, pois usam máscaras. No entanto, como notou um forasteiro certa vez, todos carregam espadas e escudos similares àqueles usados por guerreiros do Deserto da Perdição — que fica milhares de quilômetros ao norte, muito além do Rio dos Deuses.
Alguns dizem que os Cavaleiros da Tempestade são espíritos cumprindo uma missão, ou estariam aguardando uma ordem de seu comandante. Outros dizem que são manifestações do poder de Hippion, encarregados de ajudar seus devotos.`
        },
        {
          name: "Tropel dos Cascos Sangrentos",
          content: `Os Cascos Sangrentos eram um bando de centauros, dissidentes e proscritos dos tropéis que habitavam o Refúgio de Alliah. Com o tempo, abandonaram Hippion e voltaram a adorar uma divindade mais primordial: Megalokk, o Deus dos Monstros.
São conhecidos desde sempre como tiranos e canibais — mas sua sociedade é mais complexa do que parece. Liderados pelo poderoso clérigo Rark Cascos Sangrentos, eles têm seu próprio código de honra: tomam como prisioneiros apenas humanos ou finntroll capturados em batalha e se alimentam somente de oponentes fortes, em uma espécie de ritual destinado a absorver seus poderes.
Por estranho que pareça, sua intolerância contra os “filhos de Valkaria” os manteve alertas e vivos durante a invasão da Supremacia Purista — enquanto outros bandos foram expulsos, capturados ou massacrados. Os Cascos acabaram relutantemente convencidos por aventureiros a lutar do lado dos namalkahnianos, em uma aliança de conveniência. Esse fato causou, talvez, uma das maiores ironias de Arton: Rark foi alçado ao posto de herói!
Hoje, baladas descrevem o clérigo com sua armadura de ferro e seus dois machados mágicos abatendo, sozinho, milhares de invasores — o que parece exagero, mas não é. Tais histórias têm levado jovens namalkahnianos impressionáveis a cultuar sua figura em segredo, assim como seu deus bestial. Alguns se desgarram de seus tropéis civilizados para regredir a um estado selvagem, em adoração ao Deus dos Monstros.`
        }
      ]
    },
    {
      title: "Aventuras",
      content: `O maior flagelo das pradarias de Namalkah são os grifos: criaturas parte águia, parte leão, com apetite total por cavalos! Embora individualmente não sejam desafio a tropéis de lanceiros atentos, as feras costumam atacar em revoadas selvagens e famintas. Como lobos, os grifos tentam isolar e depois atacar em conjunto as presas mais fracas. Quase todo namalkahniano conhece alguém que perdeu um parente em uma batalha contra um grifo. Quimeras, mantícoras, serpes, dragões ferais e outros predadores alados já foram avistados a céu aberto, mas seus ataques são mais raros.
A outra grande praga das planícies são os saqueadores. Esses bandidos atacam em grupos bem organizados, sempre liderados por um ginete experiente. Existem inúmeros, alguns com seus próprios estandartes e gritos de batalha.
Os mais temíveis são a Gangue dos Pistoleiros, liderada por goblins alquimistas cavalgando mulas robustas; os Lacaios de Glórienn Flechicerteira, elfos fanáticos ainda seguidores de sua antiga deusa, e a odiosa Hoste das Seis Faixas, fundada por proscritos que colaboraram com os puristas durante a invasão do reino e composta inteiramente por humanos. Há também o Bando do Reino Celeste, integrado por ginetes de grifo dos Monte Nublados, chefiados pela famigerada criminosa “Princesa”.
Entre animais selvagens comuns há grandes felinos como panteras e leões de pradaria que caçam manadas de bestas herbívoras (também bastante ferozes). As matas são ricas em variedade de pássaros e insetos, incluindo versões gigantes e atrozes. Já os desfiladeiros costumam abrigar todo tipo de criatura.
Por fim, aventureiros de outros reinos podem ser enredados na teia surpreendentemente complexa de diplomacia e alianças entre tropéis. Na superfície, não passam de bandos viajantes, mas além de amizades e inimizades entre humanos, também existem as relações entre os cavalos. Não é raro que um grupo de heróis seja expulso de uma região porque ousou cavalgar o desafeto de um cavalo importante perto de seu tropel, ou porque não deu um funeral honrado o suficiente a uma montaria caída em batalha.`
    }
  ]
},

  // Exemplo MÍNIMO (região pequena, só texto)
  { id: "reino-dos-pesadelos",
  name: "O Reino dos Pesadelos",
  tag: "Além de Arton",
  image: "/regioes/reino-dos-pesadelos.png",
  intro: `Em algum lugar além de Arton, existe um mundo desolado, de vastas planícies metálicas e florestas de troncos calcificados, onde as únicas formas de vida são feitas de metal, ossos e trevas. Neste reino terrível, a paisagem é dominada por inúmeras forjas oníricas, onde são construídos exércitos de criaturas necromecânicas. Seres assustadores, fabricados para um único propósito: colher os sonhos dos mortais e usá-los para ampliar o mundo onde vivem.
A verdade é que mais especulações do que fatos cercam o Reino dos Pesadelos. Não há relatos de aventureiros e exploradores que tenham conseguido entrar neste lugar sombrio. As poucas informações concretas sobre este domínio foram obtidas por meio do estudo das criaturas do pesadelo ou de vislumbres surgidos mediante poderes divinatórios. Entretanto, nem mesmo estes relatos e descobertas são precisos; aqueles que entram em contato com o Reino dos Pesadelos inevitavelmente têm seus próprios sonhos roubados e substituídos por visões terríveis, que podem levar à insanidade ou mesmo à morte.
A própria origem do Reino dos Pesadelos e de seus habitantes é um mistério distante de ser desvendado. Textos quase incompreensíveis encontrados no estúdio de um mago valkariano desaparecido citam um suposto acúmulo de energia negativa, ou de resquícios de Drashantyr, liberados quando Kallyadranoch foi punido como fator preponderante. Da mesma forma, não há consenso entre estudiosos, seja na Academia Arcana ou fora, sobre sua localização. Alguns dizem que se trata de uma região isolada dentro de Sombria, o reino de Tenebra, enquanto outros teorizam que estaria em uma dimensão paralela. A hipótese mais ousada estabelece sua localização em um planeta no Éter Divino, oculto no lado escuro de algum outro mundo dos deuses.
Por trás do surgimento do Reino dos Pesadelos está um fato pouco estudado, mas fundamental: as criações oníricas dos mortais — seus sonhos e pesadelos — não só possuem força, mas, por vezes, também vontade própria. O Reino dos Pesadelos pode ser uma prova fundamental disso; sua formação teria ocorrido lentamente, conforme pesadelos vagavam pelo Éter Divino e se reuniam em um ponto do espaço vazio. Como ou por que isso aconteceu é um mistério que talvez nem mesmo os deuses sejam capazes de elucidar. O fato é que, conforme estes pesadelos se acumulavam, um novo mundo surgiu e deu a eles substância, forma e, finalmente, vida.`,
  sections: [
    {
      title: "Habitantes do Pesadelo",
      content: `Quando o Reino dos Pesadelos surgiu, os primeiros a surgir em seu interior foram os misteriosos Mestres do Pesadelo. Quatro seres de energia onírica encarnada personificavam a natureza dos pesadelos mais comuns entre os mortais: desastre, fracasso, perseguição e morte. Servindo como pilares do Reino dos Pesadelos, passaram a influenciar a forma como o mundo crescia e se desenvolvia. Para auxiliá-los, criaram lacaios, usando a mesma força que formava seus próprios corpos. Mais tarde, esses lacaios viriam a ser chamados em Arton de soldados do pesadelo.
Cada um desses soldados construídos a partir de energia onírica tem o corpo de um grande cão esquelético, com ossos de aspecto metálico cobertos por pele e carne translúcidas, que mudam de tonalidade conforme o ambiente ao seu redor. A cabeça é semelhante a um crânio humano, o que os torna ainda mais perturbadores. Como armas, os soldados do pesadelo empregam sua poderosa mordida e uma longa cauda flexível como um tentáculo. Existem quatro tipos de soldados do pesadelo. Três deles surgiram pelas mãos dos Mestres do Pesadelo e são criados até hoje. O quarto tipo, os coletores, apareceu apenas após a ascensão de Judara, a Soberana dos Pesadelos, e possuem a capacidade única de roubar os sonhos dos mortais.
Os soldados mais comuns são os zangões, que funcionam como tropas de infantaria. Cada zangão possui uma cauda com uma função específica, própria para um papel em combate. Estas são também as criaturas do pesadelo mais numerosas, frequentemente encontradas em pequenos grupos de três a oito indivíduos.
Mais poderosos que os zangões são os ceifadores. Inteligentes, têm a função de liderar outros soldados e organizar a defesa das torres e outras estruturas de seu mundo. Ao contrário dos zangões, possuem apenas um tipo de cauda, que ostenta uma afiadíssima lâmina biometálica.
O terceiro tipo entre os soldados originais é o dos polivalentes, os brutamontes das tropas do pesadelo. Grandes como cavalos, possuem quatro caudas, cada uma de um dos tipos existentes entre os zangões. Costumam acompanhar grupos de zangões sob a liderança de um ceifador, mas podem ser encontrados sozinhos, protegendo estruturas do Reino dos Pesadelos ou, em certas ocasiões, causando destruição em incursões a Arton.
Por fim, existem os coletores, soldados que não foram criados pelos Mestres, mas sim por Judara, a Soberana dos Pesadelos. Estes seres possuem uma cauda especializada única, capaz de se conectar à mente de vítimas inconscientes e roubar seus sonhos, deixando para trás apenas os mais terríveis pesadelos que a mente daquela criatura é capaz de criar. Quando participam de uma incursão para roubar sonhos, coletores costumam ser acompanhados por outros tipos de soldados, sobretudo grupos de zangões.`
    },
    {
      title: "A Primeira Visita a Arton",
      content: `A primeira aparição de seres do pesadelo de que se tem registro em Arton ocorreu entre 1398 e 1400, em uma pequena vila na fronteira entre Sambúrdia e Trebuck formada ao redor de uma das antigas torres de vigia, ainda da época em que essas nações viviam um período de tensão e conflitos. Ali, a jovem Judara Gigger, uma humana dotada de excepcionais capacidades mágicas, inadvertidamente entrou em contato com Arquean, o Mestre do Pesadelo do Desastre.
Este contato fez com que a mente da jovem fosse invadida por pesadelos terríveis e debilitantes, que a atormentaram por meses. Em uma desesperada busca pela cura, Judara acabou abrindo uma passagem para o Reino dos Pesadelos, transformando a torre de sua vila natal em um portal. Através dele, Arquean e seus soldados se estabeleceram no lugar.
Judara foi morta nos primeiros momentos da invasão, mas seu espírito se manteve preso à vila na forma de um fantasma de energia mental. Nesta condição, ela conseguiu contatar um grupo de aventureiros que veio em auxílio à vila e enfrentou os invasores. Mas a vitória não foi o suficiente para romper a conexão com o Reino dos Pesadelos. Assim, em um sacrifício final, Judara atravessou o portal e, do outro lado, conseguiu fechar a passagem permanentemente.`
    },
    {
      title: "A Ascensão da Soberana",
      content: `Até a incursão de Arquean a Arton, o Reino dos Pesadelos crescia passivamente, dependendo apenas da chegada de mais pesadelos perdidos. Os Mestres do Pesadelo, embora sedentos por poder, se contentavam com isso, pois desconheciam outra forma de aumentar suas forças.
Com Judara, tudo isso mudou. Enquanto os Mestres conheciam apenas a força dos pesadelos, Judara estava familiarizada também com o outro lado dessa energia: os sonhos. Com a fusão inevitável de sua forma fantasmagórica à energia dos pesadelos, Judara se tornou uma nova entidade, mais poderosa que qualquer outra criatura do reino e eternamente ligada à sua nova morada. Rapidamente, ela sobrepujou os Mestres do Pesadelo, transformando-os em seus subordinados e assumindo a liderança daquele mundo. Não mais Judara Gigger, de Arton, ela agora se tornaria Judara, a Soberana dos Pesadelos.
Com o início de seu reinado, Judara passou a buscar outra fonte de poder para seu mundo. Algo maior que qualquer pesadelo. Algo sem limites.
Agora, seus soldados deveriam roubar os sonhos dos mortais. Começaram assim as incursões de soldados do pesadelo a Arton.`
    },
    {
      title: "Seres do Pesadelo em Arton",
      content: `O objetivo das incursões é, na falta de uma descrição melhor, caçar sonhos e levá-los de volta para seu mundo, onde servirão de energia para os planos de Judara. Embora as motivações da Soberana sejam claras — aumentar o poder de seu reino —, o motivo exato de seu interesse não é totalmente compreendido. Talvez, por ter sido mortal, ela entenda a importância dos sonhos em um mundo repleto de heróis, assim como a amplitude quase infinita deste poder.
Criaturas do pesadelo encontradas em Arton geralmente têm atacado povoados isolados. Ao contrário de Ferren, que busca manipular os sonhos de seus súditos de forma sutil, as criaturas do pesadelo empregam uma abordagem mais violenta, semelhante a predadores vorazes. Entretanto, Judara possui a inteligência e racionalidade que faltava aos Mestres do Pesadelo e combina incursões selvagens com missões discretas para reunir informações.
As consequências do roubo dos sonhos de um mortal são profundas. A vítima perde o desejo de perseguir seus objetivos em vida, tornando-se lentamente um indivíduo sem vontades e ambições. Além disso, o que antes era ocupado pelos sonhos roubados dá espaço a pesadelos terríveis. Estudiosos, mesmo que ainda sem uma compreensão completa do processo, acreditam que os pesadelos incessantes que passam a povoar a mente da vítima são o que resta em uma mente sem sonhos, como ocupantes indesejados de uma casa vazia. Outros postulam que isso faça parte de algum plano ainda mais profundo. Cada pesadelo seria uma ideia sinistra incubada, se desenvolvendo lentamente até o momento de eclodir. Ainda não há provas de que isso possa acontecer, e a maioria das pessoas que tem conhecimento de casos assim torce para que elas jamais venham a existir.
Há, pelo menos, uma boa notícia (por enquanto): devido à distância e à natureza do Reino dos Pesadelos, o envio de criaturas até Arton é um processo complexo, que não parece poder ser feito com frequência. Por isso, atualmente as incursões de Soldados do Pesadelo são pouco frequentes. Ainda assim, talvez seja apenas uma questão de tempo até que Judara contorne essa dificuldade e transforme Arton em um verdadeiro campo de caça para seus lacaios.`
    }
  ]
  },
];
