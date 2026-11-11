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
//   ### texto     -> subtítulo

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
