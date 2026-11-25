// data/organizations.ts
import { Organization, OrganizationEntry, comOrigem } from "@/types/organization";

const exemploRevista: OrganizationEntry[] = [
  //#region Dragão Brasil - 228
  { id: "arautos-do-destruidor",
  name: "Arautos do Destruidor",
  origem: "Dragão Brasil - 228",
  summary: "Devotos de Megalokk que caçam os caçadores de monstros que transformam as crias do Deus dos Monstros em presas e troféus.",
  sections: [
    {
      title: "Lore & Descrição",
      variant: "destaque",
      content:
        "Ainda que os monstros de Megalokk estejam entre as criaturas mais perigosas de Arton, algumas organizações decidem desafiar seu poder e inverter a ordem natural das coisas, transformando esses predadores monstruosos em presas e troféus. Os Arautos do Destruidor agem para reverter esse cenário: seu objetivo é (com o perdão da redundância) caçar esses caçadores hereges que acreditam ter o direito de predar as crias do Deus dos Monstros.\nPara os Arautos, esse costume crescente não passa de arrogância da civilização. Guildas de caça, expedições e aventureiros em busca de fama começaram a acreditar que monstros não passam de desafios esportivos, recompensas ou troféus. Os Arautos, por outro lado, creem que Megalokk criou esses seres poderosos para dominar e sobreviver — não para adornar muralhas ou alimentar histórias heroicas.\nÉ por isso que os integrantes desta organização focam em equilibrar o jogo e colocar esses caçadores pretensiosos no seu verdadeiro lugar: o da caça. Suas missões começam semanas antes do momento em que atacam de fato. Estudam hábitos, seguem rastros, interceptam informantes e aprendem as rotinas de seus alvos com paciência predatória. Depois vêm os acidentes: provisões desaparecidas, trilhas falsas e monstros enfurecidos atraídos para o caminho errado.\nQuando o confronto acontece, raramente é honrado. E os Arautos admitem isso sem qualquer vergonha. Emboscadas, ataques noturnos e superioridade numérica são a linguagem natural da caçada; qualquer caçador que se preze deveria se orgulhar disso.\nEntre seus membros existem antigos caçadores de monstros que abandonaram suas antigas vidas após testemunhar massacres desnecessários ou a extinção de espécies raras. Outros apenas encontraram no culto uma desculpa conveniente para continuar caçando.\nEles não se importam com o abate de feras enlouquecidas ou ameaças difíceis de conter. Seria impossível para a organização proteger toda criatura monstruosa — e isso iria de encontro às próprias crenças de destruição e morte pregadas por devotos de Megalokk. O que os Arautos rejeitam é a ideia de que monstros devam recuar diante da expansão da civilização.\nNas fronteiras selvagens, guias experientes repetem um aviso simples: caçar monstros já é perigoso. Fazer disso um hábito pode atrair a atenção dos desvairados que se escondem entre nós.",
    },
    {
      title: "Membros",
      content:
        "Humanoides que causam muito dano, acompanhados por criaturas monstruosas que passaram a obedecer suas ordens; todos com bônus elevados em Furtividade, Investigação e Sobrevivência, além de habilidades que melhorem suas capacidades de rastreio e destruição.",
    },
    {
      title: "Como Usar",
      content:
        "Vilões. Um grupo de aventureiros contratado para eliminar monstros desapareceu sem deixar rastros. Investigações mais minuciosas podem revelar uma verdade inquietante: os caçadores se tornaram as presas, e não do alvo que procuravam, mas de devotos fervorosos do Deus dos Monstros.",
    },
    {
      title: "Novo Item Mágico",
      subtitle: "Arco dos Arautos",
      variant: "regra",
      content:
        "Arma favorita dos Arautos do Destruidor, este arco longo cruel preciso caçador pode ser encontrado por qualquer aventureiro que vasculhe os equipamentos de um membro desta organização. Você recebe a habilidade Marca da Presa do caçador, mas só pode usá-la com esta arma. Se já possui essa habilidade, em vez disso, o custo para usá-la com esta arma diminui em –1 PM. Arma específica média, preço T$ 39.100.",
    },
  ],
  },
  { id: "caravana-das-tres-chamas",
    name: "Caravana das Três Chamas",
    origem: "Dragão Brasil - 228",
    summary: "Uma escola itinerante fundada por três irmãos magos de Wynlla que percorre o Reinado levando ensinamentos arcanos básicos a qualquer um disposto a aprender.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "A magia surge de várias formas em Arton. Alguns nascem com aptidões mágicas. Outros podem lançar magias através de itens. E há aqueles cuja magia advém do acúmulo de conhecimento — para os mais egocêntricos entre estes, saber arcano deveria ser mantido atrás de muralhas, dentro de laboratórios privados ou bibliotecas de difícil acesso e compreensão. Contra essa visão de mundo, três irmãos magos nascidos em Wynlla — Thellius, Aphandra e Mallett — se reuniram para fundar a Caravana das Três Chamas.\nEsta escola itinerante percorre as estradas do Reinado levando ensinamentos arcanos básicos para qualquer um disposto a aprender. Hoje composta por diversos magos, escribas e sacerdotes, a caravana acredita que magia não deve ficar presa a uma casta específica, a academias restritivas ou àqueles cuja linhagem é encantada. Afinal, Wynna presenteou o mundo inteiro com ela.\nQuando seus fundadores decidiram começar a viajar por Arton, os três compartilhavam uma preocupação comum: incontáveis pessoas com a promessa de um futuro arcano brilhante deixavam de descobrir seu potencial ou acabavam atraídas por práticas perigosas por falta de orientação. Assim, em vez de viver em suas torres e esperar que candidatos a aprendizes os procurassem, decidiram levar o conhecimento até eles.\nA escola não possui sede permanente. Viaja com uma série de carroças coloridas compostas adaptadas como salas de aula, bibliotecas e pequenos laboratórios. Quando chega a uma comunidade, instala tendas e inicia um curto período de atividades abertas ao público.\nAs lições oferecidas não envolvem magias poderosas ou segredos restritos. A Caravana ensina fundamentos: segurança arcana, leitura de runas simples, história da magia e pequenos truques capazes de despertar afinidade e disciplina. Para muitos alunos, trata-se apenas de curiosidade passageira. Para outros, é o primeiro passo rumo à vida arcana.\nDevotos de Wynna em comunidades isoladas frequentemente celebram a chegada da Caravana das Três Chamas. Enquanto isso, alguns círculos acadêmicos e magos mais tradicionalistas consideram-na uma organização indulgente, acusando-a de banalizar conhecimentos que deveriam permanecer sob tutela rigorosa.\nOs membros respondem com serenidade. Para eles, ignorância só produz mais ignorância. Os três irmãos tinham um lema quanto a isso, que reverbera pelos alunos muito tempo depois da caravana deixar um local: “uma chama compartilhada nunca perde seu brilho”.\nSe você estiver num lugar repleto de curiosidade, talento adormecido ou medo da magia, a Caravana das Três Chamas talvez já esteja a caminho.",
      },
      {
        title: "Membros",
        content:
          "Quaisquer criaturas capazes de ensinar magia podem representar professores desta organização, em especial aqueles com bônus elevados de Misticismo e habilidades como as da distinção professor de magia (Heróis de Arton, pp. 205–207).",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. No início de uma campanha com muita presença de magia arcana, a Caravana das Três Chamas se instala temporariamente no vilarejo onde os aventureiros estão, atraindo curiosos e aspirantes a conjuradores. Quando um dos grimórios de sua biblioteca desaparece, os professores pedem aos heróis que os ajudem a encontrá-lo antes que caia em mãos erradas — ou pior: que seja usado erroneamente por alguém inexperiente.",
      },
      {
        title: "Novo Poder de Destino",
        subtitle: "Certificado de Conclusão",
        variant: "regra",
        content:
          "Especial: após passar um mês estudando na Caravana das Três Chamas, você recebe este poder. Essa é a única forma de adquiri-lo.\nVocê recebe +1 PM e pode lançar uma das magias a seguir (atributo-chave Inteligência) à sua escolha: Alarme, Aviso, Criar Elementos e Luz; mas não pode aplicar aprimoramentos. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM e você passa a conseguir aplicar aprimoramentos normalmente.",
      },
    ],
  },
  { id: "casa-dos-desgarrados",
    name: "Casa dos Desgarrados",
    origem: "Dragão Brasil - 228",
    summary: "Uma organização de devotos de Khalmyr em Sambúrdia dedicada a oferecer clemência, perdão e redenção a criaturas malignas, possuídas ou amaldiçoadas.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Uma organização relativamente altruísta, a Casa dos Desgarrados é um local único de Arton. Enquanto a maioria dos devotos de Khalmyr se dedica à lei e ao julgamento, os integrantes deste local focam seus esforços naquilo que acreditam ser mais importante no ethos do Deus da Justiça: oferecer clemência, perdão e redenção.\nEsta organização surgiu a partir da observação de um problema comum em Arton. Criaturas cuja natureza costuma ser maligna, pessoas possuídas, vítimas de maldições ou indivíduos sob influência extraplanar frequentemente são condenados sem uma verdadeira oportunidade de se redimir. Para os membros da Casa, isso é diferente de justiça, pois não passa de medo vestido de autoridade. Por isso, a organização passou a ser vista como a última chance daqueles que um dia se perderam.\nSediadas numa mansão no sudoeste das Repúblicas Livres de Sambúrdia, as dependências da Casa dos Desgarrados compreendem um hospital, um tribunal sagrado e um centro de reabilitação. Para lá são levados licantropos incapazes de controlar sua maldição, indivíduos supostamente possuídos, vítimas de corrupção mágica, monstros cuja natureza levanta dúvidas morais e quaisquer criaturas em situação semelhante.\nTrabalhadores do local chamam isso de libertação. Tal prática, naturalmente, gera controvérsia. Tudo fica ainda mais nebuloso quando se descobre que o processo de purificação empregado pela Casa dos Desgarrados segue uma metodologia secreta. Apenas os membros mais graduados dentro da organização podem realizar as sessões de reabilitação — e somente a eles esse segredo é confiado.\nMuitos devotos mais rígidos de Khalmyr consideram a organização excessivamente indulgente. Outros a acusam de ingenuidade, afirmando que certas criaturas não merecem misericórdia. Ainda assim, a Casa dos Desgarrados mantém sua posição: deve haver deliberação conforme as leis, mas vereditos mais drásticos devem ser aplicados somente quando (e se) o indivíduo não for reabilitado pelo local.\nIsso não significa pacifismo cego. Seus membros são treinados para enfrentar entidades malignas e realizar exorcismos e rituais de purificação quando necessário. Contudo, acreditam que destruir aquilo que poderia ser salvo é a maior falha na justiça mortal.",
      },
      {
        title: "Membros",
        content:
          "Juízes, clérigos, frades e paladinos de Khalmyr, com habilidades de cura, proteção e investigação; caso seja relevante para a aventura, vale a pena conceder habilidades relacionadas a exorcismo ou purificações que façam sentido.",
      },
      {
        title: "Como Usar",
        content:
          "Neutros. Integrantes da organização recebem um indivíduo cruel e inescrupuloso, mas que supostamente está sob influência demoníaca. Uma procissão o seguiu até a Casa dos Desgarrados alegando que não há possessão alguma e o destino dele deve ser a forca. Os aventureiros são convocados para intervir e mediar a situação; será mesmo possível redimir alguém tão execrável?",
      },
      {
        title: "Novo Parceiro",
        subtitle: "Reabilitador",
        variant: "regra",
        content:
          "É possível encaminhar uma solicitação formal para a Casa dos Desgarrados com o objetivo de contratar um de seus reabilitadores — juízes com treinamento especial para espalhar a justiça de Khalmyr, equilibrando as chances de todos os presentes, como uma ferramenta por meio da qual o Deus da Justiça em pessoa realiza o julgamento — por T$ 1.000. Um reabilitador é um parceiro especial que acompanha o grupo de personagens até o fim da aventura. Durante uma cena à escolha dos jogadores, ele faz todos os modificadores serem iguais à média dos modificadores de todas as criaturas presentes. No final da cena, o reabilitador se despede do grupo e retorna para a Casa dos Desgarrados.",
      },
    ],
  },
  { id: "o-claviculario",
    name: "O Claviculário",
    origem: "Dragão Brasil - 228",
    image: "/mundo/orgs/o-claviculario.png",
    summary: "Uma ordem de devotos de Sszzaas que oferece o serviço de custódia, removendo e guardando segredos da memória de seus confidentes.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "A maioria dos devotos de Sszzaas dedica-se à intriga, ao veneno e à traição. Já os membros do Claviculário seguem outro caminho — embora não possam ser considerados menos perigosos por isso. Para eles, segredos são mais valiosos que tudo. Culpa, amor proibido, crimes, fórmulas secretas, nomes esquecidos e verdades inconfessáveis são fardos capazes de moldar destinos, adoecer espíritos e destruir vidas. Por isso, o Claviculário oferece um serviço que chamam de “custódia”.\nO ritual é simples, mas cercado de solenidade. O confidente entrega por vontade própria um segredo a um claviculário, como são chamados os membros da ordem, geralmente diante do símbolo sagrado da organização: uma chave ornamentada, representando aquilo que tanto tranca quanto revela. Uma vez aceito, o segredo desaparece da memória do indivíduo. Para muitos, isso representa libertação. Aquilo que foi entregue permanece sob a tutela do Claviculário até que seja reclamado novamente – o indivíduo sabe que entregou um segredo, só não se lembra mais o que foi.\nGovernantes entregam o remorso por seus atos escusos. Casais ocultam suas relações proibidas. Espiões preservam informações sensíveis sem risco de serem descobertas por meio de tortura ou magias de encantamento. Alguns até mesmo procuram os claviculários para silenciar dores profundas demais para que o esquecimento surja sozinho.\nOs claviculários afirmam que segredos entregues lhes pertencem apenas enquanto o confidente não os retomar, mas também reivindicam o princípio do direito divino de revelação. Segundo tal doutrina, Sszzaas concede à organização autoridade para expor um segredo quando sua ocultação ameaça interesses maiores — ou quando o próprio deus assim desejar. O que define esse momento, porém, raramente é claro.\nÉ por isso que o Claviculário ocupa uma posição ambígua em Arton. São procurados por reis, criminosos e aventureiros, mas também por informantes, espiões e investigadores. Sempre escusos. Jamais plenamente confiáveis. Seus santuários funcionam como arquivos vivos, onde cada segredo repousa aguardando retorno, revelação – ou algum uso por uma causa maior.",
      },
      {
        title: "Membros",
        content:
          "Humanoides de qualquer classe que tenham habilidades relacionadas à manipulação e investigação, com bônus altos de Enganação, Intuição, Investigação e Misticismo.",
      },
      {
        title: "Como Usar",
        content:
          "Neutros. Quando um nobre falecido deixa pistas indicando que a chave para sua herança foi confiada ao Claviculário, os aventureiros são pegos em uma busca pelo local dessa organização, e então pelo trabalho complicado de convencer seus integrantes de que eles, não um grupo rival, têm o direito divino de receber esse segredo. Em outros casos, podem ser contratados para impedir que um dos membros exerça seu direito de revelação, pois o contratante acredita que isso causará uma catástrofe sem igual.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Chave Mestra",
        variant: "regra",
        content:
          "Uma chave carregada pelos membros do Claviculário como um símbolo sagrado, este item mágico também é capaz de destrancar qualquer coisa, concedendo sucesso automático em testes de Ladinagem para abrir fechaduras. Contudo, se não for usada por um dos membros do Claviculário ou por um devoto de Sszzaas, um efeito mágico sobre seu material é ativado, reduzindo a Chave Mestra a pó após o primeiro uso. Acessório médio, preço T$ 25.500.",
      },
    ],
  },
  { id: "companhia-teatral-valluk-delsori",
    name: "Companhia Teatral Valluk Delsori",
    origem: "Dragão Brasil - 228",
    summary: "Uma companhia itinerante de devotos não declarados de Nimb que apresenta peças extravagantes, absurdas e deliberadamente incorretas.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Esta companhia itinerante não tem qualquer interesse por prestígio ou preservação histórica… ou será que tem? Devotos não declarados (jamais declarados!) de Nimb, os membros da companhia teatral percorrem cidades, vilas e estradas apresentando peças extravagantes, absurdas e deliberadamente incorretas. Reis aparecem vestidos como pescadores. Batalhas históricas terminam em casamentos improváveis. Heróis lendários trocam discursos épicos por números musicais improvisados. Aliados históricos são representados como inimigos ferrenhos. Não importa quem esteja sendo retratado, sempre algum pequeno detalhe estará fora de lugar. Quanto maior o disparate, melhor.\nPara esses artistas desvairados, a história oficial pouco importa. O principal é o caos gerado pela desinformação de cada peça, para o agrado do Deus do Caos.\nA origem do grupo é tão contraditória quanto suas apresentações. Algumas versões afirmam que surgiu de um festival arruinado por um dado mágico com desenhos nas faces. Outras dizem que são a união de um conjunto de artistas expulsos de várias cortes por “excessiva criatividade”. Os próprios integrantes costumam oferecer relatos incompatíveis entre si, frequentemente mudando de versão no meio da conversa. E, mais do que isso, ninguém tem ideia de quem foi ou é Valluk Delsori.\nA companhia não tem liderança fixa nem repertório definitivo. Papéis mudam o tempo todo, roteiros são reescritos durante os ensaios e apresentações podem terminar de forma diferente a cada noite.\nExiste um estranho talento coletivo por trás do aparente descontrole, mas isso não significa compromisso com verdade ou justiça. A companhia busca diversão e caos acima de tudo. Satirizar tiranos e ridicularizar heróis respeitados; ou transformar tragédia em comédia sem qualquer pudor — é isso que move seus integrantes.",
      },
      {
        title: "Membros",
        content:
          "Qualquer humanoide (e até mesmo alguns animais, espíritos e monstros) pode fazer parte da companhia, especialmente bardos e outros tipos de artistas.",
      },
      {
        title: "Como Usar",
        content:
          "Neutros? A caravana chega a uma cidade e anuncia uma grande apresentação sobre um evento histórico — para horror das autoridades! Quando a peça provoca tumulto e a ira dos nobres retratados de forma ridícula, os heróis são contratados para proteger os artistas.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Bilhete de Valluk Delsori",
        variant: "regra",
        content:
          "Este item mágico é concedido apenas àqueles que conseguirem descobrir onde a companhia irá se apresentar e consigam assistir a cinco de suas apresentações seguidas. Rasgar o bilhete (como se faz ao entrar para assistir a um espetáculo) permite que o usuário se transforme em uma das grandes figuras de Arton — como o herói Orion Drake ou a própria Rainha-Imperatriz Shivara I —, mas com uma característica diferente da verdadeira pessoa. Você poderia, por exemplo, se transformar em sir Alenn Toren, mas seu tapa-olho estaria no olho esquerdo, em vez do direito. Este efeito funciona como a magia Disfarce Ilusório, com direito ao aprimoramento que aumenta o bônus de Enganação para +20 e duração de 1 dia. Item mágico de uso único, preço T$ 300.",
      },
    ],
  },
  { id: "confraria-dourada",
    name: "Confraria Dourada",
    origem: "Dragão Brasil - 228",
    summary: "Uma guilda de ladrões devotos de Azgher que roubam ouro de tiranos e corruptos sob a crença de que todo ouro deve retornar ao Deus-Sol.",
    image: "/mundo/orgs/confraria-dourada.png",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Azgher é um deus tão benevolente quanto rigoroso. Portanto, é comum que seus devotos sigam caminhos considerados honrados ou justos, como os de heróis e paladinos. A Confraria Dourada, contudo, segue por outro caminho. Para seus integrantes, o aspecto mais sagrado do Deus-Sol não está no combate às trevas, mas no ouro: metal que eles acreditam carregar o brilho e a perfeição do próprio deus.\nSegundo a filosofia da Confraria, todo ouro pertence à sua divindade patrona. Não importa qual formato os mortais deram a ele (sejam moedas, joias ou revestimento de itens valiosos), todo ouro é apenas um fragmento temporariamente afastado de sua origem divina. Por isso, repetem um antigo lema: “Se todo ouro vem de Azgher, então todo ouro deve voltar a ele”.\nEssa crença foi o que construiu esta guilda de ladrões religiosos, embora seus membros raras vezes vejam a si mesmos dessa forma. Consideram-se restauradores da ordem natural das riquezas: todo ouro acumulado por tiranos e autoridades corruptas deve ser tomado e redirecionado para usos mais dignos — em geral para templos de Azgher, a causas defendidas pela Confraria ou, com uma frequência nada modesta, aos próprios cofres da organização.\nA organização possui células escondidas em centros comerciais, rotas mercantes e locais de riqueza. Seus integrantes costumam ser ladinos, espiões e aventureiros interessados em infiltração, disfarces e roubos bem planejados. Embora saibam lutar quando necessário, preferem golpes elegantes e furtivos a confrontos sangrentos.\nMuitos membros veneram Fin Zandim, o lendário Príncipe dos Ladrões, como símbolo da ousadia, astúcia e engenhosidade necessárias àqueles que vivem entre fechaduras e cofres. Não interessa se as histórias sobre ele são verdadeiras ou folclóricas. Para a Confraria Dourada, o que importa é aquilo que elas ensinam: como sobreviver às sagradas incursões em busca do ouro de Azgher.\nEssa devoção cria uma relação curiosa com o restante dos seguidores do Deus-Sol. Alguns sacerdotes condenam a Confraria como oportunistas que usam a fé para justificar crimes. Outros enxergam nela um mal necessário, capaz de remover riquezas das mãos erradas quando a justiça formal fracassa.\nA Confraria Dourada raramente deseja destruir ou matar. Seu interesse é simples, direto e brilhante como o próprio sol: encontrar ouro, reivindicá-lo em nome de Azgher e garantir que seu brilho jamais permaneça muito tempo nas mãos erradas.",
      },
      {
        title: "Membros",
        content:
          "Praticamente qualquer humanoide com habilidades de infiltração, furtividade e roubo pode representar um integrante da Confraria Dourada, basta ter devoção a Azgher e um de seus poderes concedidos.",
      },
      {
        title: "Como Usar",
        content:
          "Rivais. Uma antiga relíquia de ouro desapareceu dos cofres de um mercador pouco antes do evento em que seria leiloada. O comerciante contratou aventureiros para rastrear os ladrões mascarados que roubaram o item.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Máscara do Sol Dourado",
        variant: "regra",
        content:
          "Uma máscara amarela com o desenho de um sorriso e dois tibares de ouro no lugar dos olhos, adornados com raios solares em laranja. Enquanto seguir as Obrigações & Restrições de Azgher, as moedas mágicas que substituem os olhos da máscara fornecem +10 em Ladinagem. Contudo, por ser chamativo demais, uma pessoa vestindo este item recebe –2 em Furtividade. Acessório menor, preço T$ 9.000.",
      },
    ],
  },
  { id: "criancas-de-aharadak",
    name: "Crianças de Aharadak",
    origem: "Dragão Brasil - 228",
    summary: "Órfãos criados no culto de Aharadak que se infiltram em povoados para espalhar pesadelos, acreditando que a Tormenta consertará um mundo cruel.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Os lefeu capturam e abduzem pessoas sem distinção de raça ou idade, mas o que acontece quando as máculas da Tempestade Rubra corrompem a mente fértil e curiosa de uma criança? Uma das respostas está numa das incontáveis tragédias causadas pela Tormenta: um grupo de órfãos deixados num templo em Ahar’kadham — a cidade coberta por matéria vermelha em Zakharov —, entregues para serem criados por um reishid, um lefeu encarregado de espalhar o culto ao Deus da Tormenta por Arton.\nÉ assim que essas crianças conhecem Aharadak.\nAo contrário de muitos cultos da Tormenta, elas passaram a servir à divindade não após serem consumidas pela insanidade, mas por acreditarem que ele foi quem as salvou. Nas histórias que os órfãos repetem como cantigas infantis, Aharadak é retratado como um pai gentil que acolhe os rejeitados. Ele parece ter oferecido a estes jovens seguidores algo que acreditam ter sido negado pelo restante de Arton: pertencimento.\nCom o tempo, essa devoção transformou-se em uma visão de mundo perigosa. As Crianças de Aharadak (pois assim passaram a ser chamadas nas lendas sobre sua existência) enxergam o chamado “mundo dos adultos” como a verdadeira origem do seu sofrimento. Reis iniciam guerras. Nobres exploram os fracos. Mercadores enriquecem enquanto outros passam fome. Mesmo os heróis, tão celebrados, nunca conseguem salvar a todos. Se tudo é assim tão cruel, concluem elas, então este mundo está errado.\nPara os órfãos, a Tormenta é reparação, conserto e correção. É a ferramenta capaz de apagar uma realidade falha e substituí-la por algo novo. Algo melhor. Cada pesadelo provocado e cada comunidade levada ao desespero são vistos como um pequeno passo nessa direção.\nIntegrantes viajam em grupos discretos, apresentando-se como refugiados, mendigos ou apenas crianças perdidas. Oculto, levam o Pingente Rubro, um colar de matéria vermelha que usam como símbolo sagrado, uma representação da proteção e do afeto de seu deus. Enquanto forem jovens — algo que a Tormenta parece fazer durar por mais tempo do que deveria — e permanecerem fiéis aos desígnios de Aharadak, o pingente ameniza qualquer sofrimento causado pela Tempestade Rubra.\nDepois de se infiltrar nos povoados, iniciam seus rituais discretamente. Durante a noite, entoam cânticos compostos por palavras que parecem infantis ou desconexas, mas escondem o ritmo impossível da Tormenta. Após algumas semanas, os moradores passam a ser acometidos por pesadelos perturbadores, que causam medo, exaustão e paranoia.\nQuando as Crianças de Aharadak finalmente partem, deixam para trás uma comunidade à beira do colapso. Em seus corações, acreditam ter realizado uma boa ação.",
      },
      {
        title: "Membros",
        content:
          "Crianças humanoides devotas de Aharadak, todos com resistência a efeitos lefeu e da Tormenta +10; se tiver acesso a Heróis de Arton, aplique os efeitos de idade variada para a faixa etária criança.",
      },
      {
        title: "Como Usar",
        content:
          "Vilões. Integrantes desta organização surgem em vilarejos isolados, onde provocam pesadelos e enfraquecem o espírito das pessoas. Se heróis forem chamados para descobrir o problema de um local sofrendo de insônia e paranoia, podem acabar descobrindo que as Crianças de Aharadak são as responsáveis.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Pingente Rubro",
        variant: "regra",
        content:
          "Este colar de matéria vermelha é estranho e parece estar sempre mudando de forma. Enquanto seguir as Obrigações & Restrições de Aharadak, sendo devoto ou não, você reduz a perda de PM causada por efeitos lefeu e da Tormenta em –1 PM por patamar. Acessório menor, preço T$ 3.000.",
      },
    ],
  },
  { id: "fadas-do-jardim-secreto",
    name: "Fadas do Jardim Secreto",
    origem: "Dragão Brasil - 228",
    summary: "Uma fraternidade de feéricos botânicos e herbalistas devotos de Allihanna nos Feudos de Trebuck dedicada aos segredos espirituais da natureza.",
    image: "/mundo/orgs/fadas-do-jardim-secreto.png",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Numa floresta secreta dos Feudos de Trebuck, ao norte da Pondsmânia, floresce uma fraternidade de feéricos botânicos e herbalistas devotos de Allihanna que se dedica a estudar os segredos espirituais da natureza. Embora muitos os confundam com simples alquimistas ou comerciantes de ervas, suas práticas vão muito além da cura ou da preparação de remédios.\nEssas fadas acreditam que toda planta carrega consigo ecos do espírito do ambiente onde cresceu. Se uma flor desabrocha sob a luz da lua, uma raiz é alimentada por águas antigas ou um fungo surge entre pedras ancestrais, terá diferentes características mágicas. Seu trabalho consiste em compreender esses aspectos e transformá-los em fórmulas capazes de estreitar as relações entre mortais e espíritos da natureza.\nA origem da organização é tão incerta quanto seu local exato. Algumas histórias afirmam que surgiu entre druidas do Reino das Fadas; outras atribuem sua fundação a uma linhagem ancestral de fadas da antiga Floresta de Tollon. As próprias sílfides têm pouco interesse pela precisão histórica. Para elas, importa apenas que seus ensinamentos sejam preservados e transmitidos com responsabilidade.\nApesar do nome, a organização não é formada apenas por mulheres; está aberta a todos os feéricos que desejam aprender a ouvir a natureza sem dominá-la. Seus membros costumam usar roupas simples, adornadas por folhas, sementes e símbolos vegetais.\nAs Fadas do Jardim Secreto são pacíficas, evitam conflitos sempre que possível e preferem negociar, curar ou afastar-se da violência. Contudo, essa postura não deve ser confundida com ingenuidade. Elas conhecem o valor de suas descobertas, bem como os perigos que representam.\nSuas fórmulas são cobiçadas por alquimistas sem escrúpulos, traficantes de substâncias raras e cultistas interessados em distorcer forças naturais. Misturas criadas para acalmar espíritos podem ser alteradas para escravizá-los. Essências destinadas à cura podem ser convertidas em venenos sutis. Por isso, as fadas guardam seu conhecimento em um jardim secreto protegido por magia, enigmas naturais e aliados feéricos.\nAqueles que conquistam sua confiança recebem mais que hospitalidade. Realizar uma tarefa em favor das Fadas do Jardim Secreto — como proteger uma floresta, recuperar um ingrediente raro ou impedir o abuso de uma fórmula roubada — costuma ser recompensado com um de seus maiores tesouros: uma poção especial capaz de criar um vínculo com um pequenino espírito feérico: os allihennali.",
      },
      {
        title: "Membros",
        content:
          "Duendes, sátiros e sílfides alquimistas, clérigos, druidas ou frades de Allihanna, todos com pelo menos 1d6 poções disponíveis para comercializar.",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. Integrantes desta organização raramente pedem ajuda sem motivo. Quando uma das fadas foi capturada em Trebuck, as Fadas do Jardim Secreto rapidamente entraram em contato com aventureiros que poderiam descobrir para onde ela foi levada.",
      },
      {
        title: "Novo Parceiro",
        subtitle: "Allihennali",
        variant: "regra",
        content:
          "Estes espíritos feéricos lembram uma pequena esfera de luz com quatro asas finas de inseto. Um allihennali parceiro fornece os benefícios a seguir.\n**Iniciante:** uma vez por rodada, você pode gastar 1 PM para curar 2d6 PV de uma criatura em alcance curto.\n**Veterano:** como acima, mas também reduz o custo de magias que geram efeitos mágicos de cura em –2 PM.\n**Mestre:** como acima, mas você também pode gastar 3 PM para curar 6d6 PV.",
      },
    ],
  },
  { id: "herdeiros-da-escama",
    name: "Herdeiros da Escama",
    origem: "Dragão Brasil - 228",
    summary: "Devotos de Kallyadranoch obcecados por despertar sua ascendência dracônica e alcançar o poder máximo dos dragões a qualquer custo.",
    image: "/mundo/orgs/herdeiros-da-escama.png",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Os Herdeiros da Escama vivem sob uma ótica tão direta quanto perigosa. Para eles, dragões são o exemplo do potencial máximo. Majestosos, temidos e soberanos, representam a vitória absoluta. Os Herdeiros creem que o epítome da devoção a Kallyadranoch está na busca por aperfeiçoamento e ascensão.\nA organização reúne indivíduos em busca de aflorar sua ascendência dracônica. Em alguns casos, essa herança é literal: são kallyanach, feiticeiros dracônicos e raros kobolds. Em outros, não passa de convicção espiritual. Os Herdeiros desejam alcançar a perfeição e o poder dos dragões, pouco importam os meios.\nCostumam se reunir em pequenos grupos que operam em regiões onde dragões são mais presentes, como em Sckharshantallas, nas Uivantes ou nas Sanguinárias. Cada grupo tem seus próprios métodos. Alguns estudam magia ancestral e linhagens com sangue de dragão. Outros procuram ovos fossilizados, escamas mágicas e covis abandonados. Há, também, aqueles que conduzem rituais perigosos e experimentos destinados a despertar traços dracônicos.\nOs Herdeiros da Escama não são um culto unificado, mas todos compartilham uma certeza absoluta: poder não é algo que se recebe, mas que se conquista.\nPor isso, admiram liderança e excelência, desprezando complacência, compaixão e fraqueza. São conjuradores, megalomaníacos e outros tipos variados de devotos do Deus dos Dragões, obcecados por tornar-se a versão mais poderosa de si mesmos. Cada membro acredita piamente ser mais digno que qualquer outro, mas isso não impede que sirva a alguém mais poderoso enquanto planeja a melhor forma de sobrepujá-lo.\nHerdeiros interpretam vitórias como confirmação de superioridade e derrotas como prova de inadequação. Em um mundo povoado por lendas dracônicas, poucos grupos perseguem o poder com tanta devoção ou acreditam merecê-lo com tamanha arrogância.",
      },
      {
        title: "Membros",
        content:
          "Dracomantes, feiticeiros dracônicos, kallyanach, kobolds e devotos de Kallyadranoch, todos com as estatísticas mais altas do ND equivalente ao nível do grupo — essa galera é osso duro de roer —; todas as fichas da seção “Igreja de Kallyadranoch” (Ameaças de Arton, pp. 144–153) representam bem este grupo.",
      },
      {
        title: "Como Usar",
        content:
          "Vilões. Integrantes desta organização veem artefatos, relíquias e magia dracônica como seu direito legítimo. No sopé das Sanguinárias, aventureiros ouvem um pedido de socorro, então sentem cheiro de fumaça e carne queimando. Caso se aproximem, vão encontrar um kallyanach incendiando um pequeno vilarejo. Berrando impropérios, ele diz ser o verdadeiro senhor do local — seu sangue é de dragão, afinal.",
      },
      {
        title: "Novo Item Geral",
        subtitle: "Alma de Dragão",
        variant: "regra",
        content:
          "Uma pedra translúcida, no formato de uma escama de dragão e do tamanho de um punho fechado, que faz parte das posses de todos os Herdeiros da Escama. Quando sofrer dano de um dos tipos a seguir, você pode reduzir o dano sofrido em um dado como uma reação. Então este item deixa de ser translúcido e armazena a energia do dano, tomando a aparência de uma pedra preciosa: diamante (luz), esmeralda (ácido), ônix (trevas), rubi (fogo), safira (frio) ou topázio (eletricidade). Quando lança uma magia que causa dano do tipo da pedra preciosa enquanto tiver uma energia armazenada, você pode descarregar essa energia como uma ação livre para aumentar o dano em um dado do mesmo tipo. Após descarregar a energia, a pedra volta a ser translúcida e precisa armazenar energia outra vez antes de ser usada novamente. Item esotérico, preço T$ 250.",
      },
    ],
  },
  { id: "hoshikage",
    name: "Hoshikage",
    origem: "Dragão Brasil - 228",
    summary: "Um clã ninja dissidente de Tamu-ra que atua nas sombras para proteger o futuro do Império de Jade, acompanhado por lendários guaxinins treinados.",
    image: "/mundo/orgs/hoshikage.png",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Conhecidos entre as pessoas da casta de trabalhadores em Tamu-ra (os “shimin”) como “ninjas da Constelação”, estes agentes surgiram como dissidência do antigo Ferrão — clã ninja mais poderoso e antigo do Império de Jade — durante a Grande Unificação. Enquanto outros clãs cultivavam métodos escusos e repletos de desonra, a Constelação seguiu outro ideal: servir não a senhores particulares, mas ao futuro de Tamu-ra.\nOs próprios membros descrevem sua função por meio de uma metáfora. Enquanto samurais são o sol — visíveis, inspiradores e destinados a agir diante do mundo —, ninjas pertencem à noite, como estrelas vistas apenas na escuridão. Não competem com a luz da honra, mas ajudam-na a existir e perdurar. Essa visão tornou-se ainda mais importante durante a Era Hikari, quando adotaram de fato o nome “Hoshikage” (que significa algo como “sombra das estrelas”).\nNinjas da Constelação acreditam que a nova Tamu-ra representa algo precioso demais para ser abandonado à própria sorte. Contra seus inimigos, a honra precisa de agentes ocultos.\nPor isso, a Constelação opera discretamente. Boatos dizem que são acompanhados por estranhos animais mascarados, algo que contribui para a crença popular de que este clã não existe — esta lenda urbana começou a ser disseminada por nativos de Nitamu-ra e retrata integrantes com posições de maior prestígio na hierarquia da organização atuando com o auxílio de guaxinins treinados nos métodos furtivos do clã, os “araiguma ninja” (traduzido para valkar como “guaxininja”).\nO trabalho dos Hoshikage inclui investigar a corrupção, silenciar conspiradores perigosos e evitar tragédias antes que se tornem crises ou chamem muita atenção. A maioria de suas vitórias jamais é reconhecida, mas essa é uma invisibilidade deliberada.\nUm samurai tradicional dificilmente aceitaria auxílio de um ninja. Os membros da Constelação consideram isso irrelevante. Para eles, a honra não depende de reconhecimento público, mas daquilo que se escolhe proteger.\nOs shimin acreditam que isso não passa de lendas para assustar crianças, mas há quem diga que esses ninjas deixam marcas de sua presença após missões decisivas. Ninguém, contudo, sabe reconhecer esses símbolos e eles funcionam mais como mensagens secretas para agentes do clã. São pouquíssimas as outras pessoas que compreendem seu significado. Eles preferem assim. Afinal, estrelas não pedem aplausos quando surgem para iluminar a noite.",
      },
      {
        title: "Membros",
        content:
          "Humanoides de diversas raças nativas de Tamu-ra, em especial mashin e nezumi, são ótimos para representar esta organização; se tiver acesso a Ameaças de Arton, você pode usar as fichas da seção do “Império de Jade” (pp. 154–167).",
      },
      {
        title: "Como Usar",
        content:
          "Neutros. Numa campanha ambientada em Tamu-ra, os aventureiros podem descobrir que vêm sendo usados como ferramenta por tradicionalistas, yakuza e outras figuras de honra ainda menor. Caso desejem se redimir, podem acabar se deparando com agentes desta organização — se estarão lá para ajudá-los ou não, só o tempo poderá dizer.",
      },
      {
        title: "Novo Parceiro",
        subtitle: "Guaxininjas",
        variant: "regra",
        content:
          "Não se sabe ao certo se é possível treinar guaxinins comuns para desempenharem o papel de guaxininjas, mas acredita-se que eles seriam um parceiro capanga especial que fornece os benefícios descritos a seguir. Uma vez por aventura, você pode gastar uma ação de movimento e 2 PM para fazer um assovio e invocar 1d4+1 guaxininjas capangas em espaços desocupados em alcance curto — eles surgem de um beco próximo, por trás de uma pedra ou de maneiras igualmente furtivas. Guaxininjas têm deslocamento 9m, Defesa 17, dano 1d4 de corte cada e Ataque Furtivo +1d6. Eles desaparecem quando morrem ou no fim da cena (veja mais sobre capangas em Heróis de Arton, pp. 240–241).",
      },
    ],
  },
  { id: "hoste-naufragista",
    name: "Hoste Naufragista",
    origem: "Dragão Brasil - 228",
    summary: "Piratas religiosos devotos de Oceano que afundam navios repletos de tesouros como sacrifício ritual ao Deus dos Mares.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Nem todo pirata navega buscando riquezas. Os membros da Hoste Naufragista, por exemplo, têm um objetivo muito mais divino. Estes piratas religiosos são devotos fervorosos de Oceano e percorrem as águas de Arton para louvar o mar como um deus faminto e majestoso, cuja grandeza não pode ser honrada somente com orações simples ou pequenas oferendas. Para eles, verdadeira devoção exige sacrifício. E poucas coisas têm mais valor que um navio repleto de tesouros.\nSuas embarcações são também templo para o Deus dos Mares. Cada tábua, vela e cordame recebe uma manutenção ritualística regular. Membros da tripulação obedecem, com devoção quase cega, às ordens de um capitão que é também um sacerdote.\nOs ataques e saques são distintos e peculiares. Diferentemente de corsários comuns, esta tripulação pouco demonstra interesse por pilhagem indiscriminada. Antes de atacar, estudam rotas e escolhem embarcações consideradas dignas de tributo: navios ricos, cargueiros opulentos, frotas mercantes ou embarcações ligadas a indivíduos que possam ter atraído o desafeto do mar de alguma forma. Após vencer a resistência, realizam um ritual de devolução e sacrifício.\nUm mínimo da carga é recolhido para sustentar a tripulação e realizar a manutenção do navio sagrado, mas tesouros mais valiosos — como moedas, joias, obras raras e relíquias — são entregues às profundezas junto com a embarcação condenada. Assistir ao naufrágio e festejar enquanto entregam suas oferendas a Oceano é o momento mais sagrado do ritual.\nAs ondas carregam lendas sobre o surgimento desta devota tripulação do reino-arquipélago de Khubar até os ouvidos de integrantes da Frota Áurea, mas nenhuma foi comprovada. No fim das contas, talvez a Hoste Naufragista seja só mais um retrato da devoção cega que às vezes acomete os artonianos. O que se sabe com certeza é que a Hoste é uma das facções mais ferrenhas na busca pelo Coração do Oceano, na tentativa de trazer o deus de volta a Arton. Talvez tudo isso seja um exagero. Ou talvez o Deus dos Mares apenas cuide bem daqueles que se dedicam a devolver seus presentes.",
      },
      {
        title: "Membros",
        content:
          "Piratas, bucaneiros, ladinos e clérigos devotos de Oceano; fichas de piratas da seção “Piratas & Pistoleiros” (Ameaças de Arton, pp. 252–263) representam bem este grupo.",
      },
      {
        title: "Como Usar",
        content:
          "Vilões. Mercadores do Mar do Dragão-Rei começam a relatar o desaparecimento de embarcações inteiras. Os sobreviventes descrevem um navio adornado com conchas, tridentes e ondas referentes ao Deus dos Mares. Há um pedido de ajuda numa cidade costeira das Repúblicas Livres de Sambúrdia, bem como uma recompensa pelo capitão da embarcação que supostamente é responsável por afundar esses navios.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Âncora Naufragista",
        variant: "regra",
        content:
          "Um colar com pingente em forma de âncora, tanto a corrente quanto o pingente são feitos de ferro oxidado, é usado como símbolo sagrado por piratas naufragistas. Enquanto seguir as Obrigações & Restrições de Oceano, sempre que oferecer como tributo para a água do mar um item valioso (com valor mínimo de T$ 100), você recebe um benefício a seguir (à sua escolha) durante 1 dia: deslocamento de natação igual ao seu deslocamento terrestre, +5 em Pilotagem, ou resistência a frio e eletricidade 10. Se você recuperar esse tributo, este item perde todos os seus efeitos e evapora como água do mar. Acessório menor, preço T$ 3.000.",
      },
    ],
  },
  { id: "lanca-silente",
    name: "Lança Silente",
    origem: "Dragão Brasil - 228",
    summary: "Conselheiros militares, estudiosos e diplomatas devotos de Arsenal que se infiltram em cortes para manipular e perpetuar conflitos bem conduzidos.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Guerreiros, mercenários e campeões famosos estão entre os variados devotos de Arsenal, mas os membros da Lança Silente compreendem a guerra de outro modo. Esta organização reúne conselheiros militares, estudiosos e diplomatas dedicados ao uso da guerra como ferramenta de transformação.\nAcreditam que a verdadeira força de Arsenal reside na disciplina do conflito bem conduzido, não na violência descontrolada. Para seus membros, guerras são inevitáveis: sempre haverá povos competindo por território e reis disputando influência.\nPor isso, dedicam-se a compreender batalhas, campanhas e disputas políticas com precisão quase acadêmica. Estudam antigas derrotas, catalogam táticas e analisam lideranças militares com o mesmo cuidado de um sacerdote que examina escrituras sagradas. Muitos nem sequer possuem treinamento marcial impressionante — alguns, inclusive, nunca foram ao campo de batalha.\nÉ raro que atuem abertamente. Em vez disso, infiltram-se em cortes, conselhos militares, casas nobres e assembleias mercantis. Seus integrantes tornam-se escribas, conselheiros, cronistas ou especialistas contratados para resolver disputas. Uma vez dentro de tais círculos de influência, manipulam as decisões para causar — ou prorrogar — os confrontos.\nIsso não significa que busquem destruição gratuita. Os membros da Lança Silente não celebram massacres ou sofrimento desnecessário. Em sua filosofia, guerras mal conduzidas são sinal de incompetência. Seu propósito é garantir que conflitos inevitáveis ocorram com propósito claro, liderança forte e objetivos definidos.\nTal visão lhes rende aliados e inimigos. Governantes expansionistas podem buscar seus conselhos, enquanto diplomatas e pacifistas os enxergam como manipuladores perigosos. Muitos nem mesmo percebem sua presença até que alianças desmoronem ou negociações fracassam por motivos aparentemente triviais.\nOs membros da Lança Silente costumam exibir o símbolo sagrado de Arsenal, identificando-se como integrantes da organização por meio de uma prática mais sutil: sempre portam uma arma de haste (pique, lança, azagaia, alabarda…) com uma fita púrpura amarrada próxima à parte afiada.",
      },
      {
        title: "Membros",
        content:
          "Humanoides com papel de combate especial, habilidades focadas em diplomacia, manipulação e gerenciamento de tropas, além de bônus altos de Conhecimento, Guerra e Nobreza.",
      },
      {
        title: "Como Usar",
        content:
          "Neutros. Quando a tensão entre dois nobres está aumentando cada vez mais, heróis são contratados para descobrir quem está sabotando as negociações de paz — uma investigação que provavelmente vai revelar o trabalho de alguém da Lança Silente.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Arma Silente",
        variant: "regra",
        content:
          "Uma arma silente é o espólio obtido por aqueles que derrotam um membro da Lança Silente. Este item é uma arma (escolha entre alabarda, azagaia, lança, lança de falange, lança montada, machado de haste ou pique) certeira equilibrada formidável de adamante que fornece +5 em testes de Conhecimento, Guerra e Nobreza cujo objetivo seja perpetuar a guerra. Arma específica menor, preço T$ 31.000.",
      },
    ],
  },
  { id: "memorialistas",
    name: "Memorialistas",
    origem: "Dragão Brasil - 228",
    summary: "Devotos de Tanna-Toh sediados em Svalas que preservam culturas desaparecidas e conhecimentos esquecidos magicamente em suas próprias memórias.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Livros queimam, ruínas desmoronam, bibliotecas são saqueadas, reinos desaparecem e idiomas inteiros podem sobreviver apenas na lembrança daqueles que os conheceram. Memorialistas existem para evitar que isso aconteça.\nEm Svalas, ventos antigos castigam muralhas tão jovens quanto este reino. Por isso, poucos visitantes esperam encontrar uma biblioteca dedicada a povos esquecidos. Pouco tempo atrás, após o armistício que marcou o fim da Guerra Artoniana, os Memorialistas reformaram um antigo complexo de pedra para que servisse simultaneamente como biblioteca e centro de pesquisa. Sua existência surpreende até mesmo habitantes locais, pois, nesta terra de fronteiras perigosas e recente liberdade, este lugar insiste em olhar para o passado. Segundo seus estudiosos, isso é deliberado.\nSvalas foi um reino erguido com base em antigas tradições. E foram ações como as da Rainha Ayleth, motivadas pelo senso de dever que tinha para com esta terra, que permitiram a estes devotos de Tanna-Toh pesquisar os vestígios de culturas anteriores à vida contemporânea na região. Para eles, ignorar esse passado equivaleria a construir uma casa sem antes erguer suas fundações.\nCom o tempo, os Memorialistas começaram a estudar povos originários de todas as regiões de Arton: de culturas desaparecidas a conhecimentos fadados ao esquecimento. Porém, sua principal característica não é a quantidade de livros que preservam, mas a forma como reverenciam o saber.\nEles sabem que arquivos podem ser destruídos. Então parte do conhecimento sob seus cuidados é preservada magicamente na sua memória. Cada Memorialista especializa-se em determinados temas — idiomas antigos, linhagens, mitos, mapas ou tradições orais —, tornando-se responsável por mantê-los vivos e transmiti-los às gerações seguintes.\nA biblioteca dos Memorialistas é o epítome dessa filosofia: seus corredores guardam manuscritos e artefatos, mas também salas destinadas à narração, repetição e aprendizado oral. Nem todos apreciam esse trabalho. Colecionadores, saqueadores e autoridades interessadas em controlar interpretações do passado frequentemente entram em conflito com esta organização.",
      },
      {
        title: "Membros",
        content:
          "Criaturas com ânsia pela busca de conhecimento, arcanistas, bardos e clérigos de Tanna-Toh; todos com habilidades relacionadas a descobrir informações, bônus elevados em Conhecimento, Investigação e Misticismo, além de acesso à magia Memorizar Conhecimento (veja a seguir).",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. Um Memorialista foi capturado por soldados da Supremacia Purista após descobrir conhecimentos antigos sobre o reino de Yudennach. O conselho que lidera a biblioteca pede que os aventureiros sigam seus rastros e o tragam de volta.",
      },
      {
        title: "Nova Magia",
        subtitle: "Memorizar Conhecimento",
        variant: "regra",
        content:
          "**Universal 2 (adivinhação)**\n**Execução:** padrão; **Alcance:** pessoal; **Alvo:** você; **Duração:** permanente até ser descarregada.\nEsta magia permite que você grave todos os detalhes relacionados a uma cena na sua mente. Enquanto tiver uma memória gravada, você recebe +5 em testes relacionados a informações da cena memorizada (o mestre tem a palavra final sobre esse bônus ser ou não aplicável em um teste). O limite máximo de memórias que você pode gravar é igual a 1 por patamar de personagem (1 enquanto for iniciante, 2 enquanto for veterano e assim por diante) + seu atributo-chave de magias. Se alcançar o limite de memórias, você precisa esquecer uma delas (descarregando o efeito desta magia e perdendo seu bônus) antes de gravar memórias novas.\n**+3 PM:** muda o bônus em testes para +10. Requer 4º círculo.",
      },
    ],
  },
  { id: "os-mestres-de-cerimonia",
    name: "Os Mestres de Cerimônia",
    origem: "Dragão Brasil - 228",
    summary: "Festeiros itinerantes devotos de Marah que percorrem lugares tensos e conflituosos organizando celebrações para promover a paz.",
    image: "/mundo/orgs/os-mestres-de-cerimonia.png",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Carregando instrumentos, tecidos coloridos, bebidas, panelas e músicas, esses festeiros percorrem Arton organizando bailes, festivais, casamentos, banquetes e celebrações públicas. À primeira vista, parecem apenas artistas itinerantes ou mestres de cerimônia comuns. Poucos percebem o verdadeiro propósito por trás da música.\nDevotos de Marah, acreditam que a paz raramente nasce apenas de discursos solenes. Ela surge quando pessoas comem juntas, dançam juntas, comemoram juntas, cantam juntas e voltam a compartilhar as pequenas coisas da vida ao lado umas das outras.\nPor isso, costumam aparecer em lugares desconfortáveis: fronteiras tensas, cidades marcadas por disputas, bairros conflituosos e comunidades onde a guerra está prestes a surgir. Mestres de Cerimônia não precisam de um convite — na verdade, eles quase sempre são rejeitados pelas autoridades antes de conquistarem seu espaço no coração do público.\nSeu trabalho envolve muito mais do que entretenimento. Os festeiros observam rivalidades locais, escolhem músicas apropriadas, planejam cerimônias e organizam espaços destinados a diminuir hostilidades. Uma dança compartilhada, um torneio amistoso e uma refeição coletiva podem servir como o primeiro passo para desfazer ressentimentos antigos.\nE essa é uma tradição transmitida de maneira diferente da maioria dos conhecimentos formais, pois Mestres de Cerimônia não dão aulas em academias. Inclusive, a maioria deles nunca decidiu simplesmente tornar-se um deles. Todos aprenderam acompanhando acidentalmente um festeiro mais experiente, ajudando-o a organizar eventos e observando como cada povo celebra a própria alegria. É um ofício passado de voz em voz, de palco em palco e de festa em festa.\nOs Mestres de Cerimônia conhecem ódio, orgulho e violência demais para acreditar que música resolve tudo. Algumas festas fracassam. Outras terminam em tragédia. Ainda assim, continuam viajando. Tudo isso porque compreendem algo simples: povos em guerra quase nunca se divertem juntos; mas, quando reunidos, eles podem, ainda que somente por uma noite, lembrar que existe outra maneira de viver.",
      },
      {
        title: "Membros",
        content:
          "Bardos, artistas, dançarinos e qualquer devoto de Marah com habilidades relacionadas à música, diplomacia e entretenimento; todos com bônus altos em Atuação, Diplomacia e Intuição.",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. Dois barões rivais estão prestes a engolfar feudos vizinhos numa guerra em Trebuck, mas um dos festeiros de Marah apareceu propondo uma solução improvável: reuni-los numa celebração. Ele sabe que, sozinho, não conseguirá os convencer, então pede que os aventureiros o ajudem a realizar esse plano tão curioso quanto divertido.",
      },
      {
        title: "Novo Item Geral",
        subtitle: "Cítola da Paz",
        variant: "regra",
        content:
          "Feita de madeira de qualidade, com cordas douradas e encantada por um devoto de Marah, esta cítola é entregue por seus tutores como um símbolo de independência para Mestres de Cerimônia. Enquanto seguir as Obrigações & Restrições de Marah, sua Inspiração e suas músicas de bardo custam –1 PM e você recebe um bônus de +5 em testes de perícia para mudar atitude. Conta como um instrumento musical. Ferramenta, preço T$ 175.",
      },
    ],
  },
  { id: "passagem-vulpina",
    name: "Passagem Vulpina",
    origem: "Dragão Brasil - 228",
    summary: "Uma fraternidade de exploradores, ladinos e arqueólogos devotos de Hyninn que encaram masmorras e passagens secretas como enigmas divinos.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Para muitos aventureiros, masmorras não passam de armadilhas repletas de perigos e riquezas. Para a Passagem Vulpina, são desafios deixados por sua divindade patrona.\nEsta organização devota de Hyninn reúne ladinos, exploradores, cartógrafos, arqueólogos e armadilheiros unidos por uma filosofia simples: aquilo que foi escondido existe para ser encontrado. Portas seladas, passagens secretas e mecanismos esquecidos não representam proibições, mas enigmas destinados àqueles capazes de superá-los.\nMembros da Passagem Vulpina afirmam que o Deus da Trapaça premia a engenhosidade, favorecendo aqueles com a mente capaz de encontrar um caminho onde outros veem apenas obstáculos intransponíveis. É por isso que a organização valoriza curiosidade, improviso e inteligência acima de força ou violência.\nA origem do grupo remonta a antigos saqueadores de ruínas e aventureiros veteranos que compartilhavam técnicas para sobreviver em tumbas, fortalezas abandonadas e passagens subterrâneas. Com o tempo, esses encontros se tornaram uma fraternidade informal espalhada por Arton. Seus membros costumam se identificar com um broche no formato de uma raposa em movimento, quase sempre representada atravessando um arco ou corredor estreito. Eles acreditam que esse símbolo vai além da relação das raposas com astúcia, pois simboliza a criatura que atravessa fronteiras, encontra caminhos secretos e quebra barreiras.\nIntegrantes da Passagem Vulpina raramente permanecem muito tempo em um só lugar. São atraídos por rumores de cidades soterradas, criptas esquecidas e construções consideradas inacessíveis. Muitos sobrevivem vendendo mapas, recuperando relíquias ou oferecendo serviços especializados para grupos de aventureiros, expedições e nobres.\nApesar da reputação suspeita, a organização não é necessariamente criminosa. Alguns membros respeitam limites legais; outros enxergam fechaduras e fronteiras apenas como convenções morais. Essa ambiguidade faz com que sejam vistos tanto como especialistas valiosos quanto como rivais incômodos.\nA Passagem Vulpina mantém uma relação quase espiritual com ruínas, calabouços e o próprio Espaço de Masmorra. Além de tesouros, esses lugares também guardam desafios e enigmas aguardando respostas — e Hyninn sempre sorri aos ousados o bastante para procurá-las.",
      },
      {
        title: "Membros",
        content:
          "Humanoides especialistas em exploração de masmorras e passagens secretas — no geral bardos, bucaneiros e ladinos devotos de Hyninn —, todos com bônus altos em Furtividade, Investigação, Ladingagem, Percepção e/ou Sobrevivência.",
      },
      {
        title: "Como Usar",
        content:
          "Rivais. Ao descobrir a entrada para uma masmorra lendária, os heróis percebem a presença de outro grupo no local — e não parecem saqueadores comuns. Se questionados sobre a origem de suas habilidades, inventam qualquer desculpa e nunca admitem serem devotos do Deus da Trapaça.",
      },
      {
        title: "Novo Poder Concedido de Hyninn",
        subtitle: "Percepção de Masmorra",
        variant: "regra",
        content:
          "Uma vez por cena, você tem sucesso automático em testes de Investigação para encontrar armadilhas realizados no subterrâneo ou dentro de uma masmorra.",
      },
    ],
  },
  { id: "parteiras-das-mandibulas",
    name: "Parteiras das Mandíbulas",
    origem: "Dragão Brasil - 228",
    summary: "Comboios itinerantes de devotos de Lena que atravessam as Montanhas Sanguinárias para realizar partos de animais e monstros.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Nas Montanhas Sanguinárias, onde predadores colossais disputam território, há uma presença improvável. Não caçadores, mercenários ou domadores, nem animais ou monstros ancestrais, mas pessoas de mantos simples e exibindo símbolos sagrados de Lena. São chamadas de Parteiras das Mandíbulas.\nComposta por pequenos comboios de devotos da Deusa da Vida, esta organização itinerante atravessa as Sanguinárias para realizar partos tão exóticos quanto perigosos, auxiliando animais e monstros que precisam passar por tal sofrimento antes de encher Arton com a vida dos seus filhotes. Para elas, há pouca diferença entre uma ninhada de répteis gigantes, a cria de uma quimera ou o filhote de um grifo. Vida é vida.\nSeu trabalho raramente é simples. Uma Parteira pode passar dias acompanhando manadas migratórias, atravessar cânions infestados por feras até ninhos ameaçados ou improvisar um abrigo enquanto criaturas colossais realizam trabalho de parto. Muitas carregam cordas, talas, ervas, ferramentas cirúrgicas e diversos outros tipos de suprimentos médicos.\nAs montanhas ensinaram a elas uma verdade desconfortável: a vida nem sempre é gentil.\nPor isso, as Parteiras não cultivam a ingenuidade associada por alguns à Deusa da Vida. Seus membros conhecem sangue, medo e perda. Alguns já testemunharam mães de espécies que atacam suas próprias crias — e precisaram intervir para impedir a morte das criaturas — ou espécies inteiras desaparecendo após uma caçada.\nEstas Parteiras acreditam que Arton se torna mais abundante quando seus ciclos naturais prosperam. Não importa se a criatura em questão é doméstica, selvagem ou monstruosa. Para elas, negar auxílio a um nascimento por medo ou preconceito é o que impede o mundo de ser agraciado pelas bênçãos de sua divindade patrona.\nEssa postura provoca conflitos constantes. Colonos acusam a fraternidade de proteger ameaças. Caçadores as consideram românticas ou perigosas. Devotos de Megalokk — que é o Deus dos Monstros, mas também da fúria e da destruição — são os principais inimigos desta organização, pois acreditam que elas interferem no ciclo natural perpetuado pelas crias do seu deus. As Parteiras respondem da melhor maneira que podem: ajudando mais criaturas vivas a vir ao mundo.\nNas Montanhas Sanguinárias, todos sabem o que elas perpetuam: a crença de que o mundo já conhece morte suficiente e seu trabalho é espalhar a vida. Talvez por isso, quando um nativo encontra pegadas humanas ao lado de marcas deixadas por garras gigantes, seu coração sabe que as Parteiras provavelmente estiveram no local.",
      },
      {
        title: "Membros",
        content:
          "Você não vai precisar das fichas de integrantes desta organização, pois eles se recusam a participar de combates. Para representá-los, usar um parceiro médico (Tormenta20, p. 261) pode ser o suficiente.",
      },
      {
        title: "Como Usar",
        content:
          "Neutros. Uma ninhada de lagartos-trovão desapareceu nas Montanhas Sanguinárias, fazendo uma matriarca enfurecida atacar caravanas da região. As Parteiras estavam no local por outro motivo: uma fêmea de grifo estava prestes a pôr os ovos num local próximo. Elas desejam proteger o ninho, mas não podem fazer isso e acalmar a matriarca ao mesmo tempo, então precisarão da ajuda dos aventureiros para resolver os dois problemas.",
      },
      {
        title: "Novo Item Geral",
        subtitle: "Rosário da Vida",
        variant: "regra",
        content:
          "Este item costuma ser usado por Parteiras das Mandíbulas para aumentar o efeito das suas magias de cura e, assim, diminuir a dor sentida pelas criaturas durante o parto. Quando empunhado por alguém que siga as Obrigações & Restrições de Lena, este rosário aumenta o número de PV recuperados por efeitos de cura mágica de luz em um dado do mesmo tipo por patamar de personagem (1 dado do mesmo tipo no 1º patamar, 2 dados no 2º e assim por diante). Esotérico, preço T$ 750.",
      },
    ],
  },
  { id: "peregrinos-das-lagrimas",
    name: "Peregrinos das Lágrimas",
    origem: "Dragão Brasil - 228",
    summary: "Exploradores e estudiosos devotos de Valkaria dedicados a desvendar o verdadeiro propósito atual das Lágrimas da deusa.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Entre os muitos artefatos lendários de Arton, poucos carregam uma história tão conhecida (e um futuro tão incerto) quanto as Lágrimas de Valkaria.\nDurante séculos, essas relíquias cristalinas estiveram ligadas ao aprisionamento da Deusa da Aventura. Reunidas, permitiam adentrar sua estátua colossal na capital de Deheon para desbravar as masmorras ocultas em seu interior. Esse desafio culminaria na libertação da divindade pelos heróis que foram eternizados na história como “os Libertadores”. Mas esse tempo passou.\nValkaria está livre, as antigas masmorras ficaram no passado e, ainda assim, as Lágrimas da deusa permanecem espalhadas por Arton.\nOs Peregrinos das Lágrimas surgiram dessa inquietação. Devotados ao aspecto aventuresco e inquieto de Valkaria, exploradores, estudiosos e sonhadores, convencidos de que as relíquias não perderam seu propósito, se reuniram para fundar esta organização. Para eles, é impensável que artefatos tão grandiosos existissem apenas para cumprir um único destino e então perdessem seu propósito. A grande pergunta, naturalmente, é: para que servem agora?\nA organização ainda não encontrou uma resposta definitiva. Alguns acreditam que as Lágrimas escondem um segundo poder jamais descoberto. Outros defendem que ainda conduzem a um local desconhecido ou a um desafio deixado pela própria deusa após sua libertação. Há quem suspeite de uma revelação ligada ao futuro de Arton. E há aqueles que apenas consideram impossível aceitar que este mistério perdure.\nEssa incerteza não enfraquece os Peregrinos. Pelo contrário. Seus integrantes viajam continuamente, reunindo mapas, testemunhos e registros antigos ligados às Lágrimas e aos acontecimentos da Libertação de Valkaria. Muitos dedicam anos a rumores falsos, relíquias adulteradas e pistas inconclusivas.\nEm seus corações, acreditam que a ascensão de Valkaria como líder do Panteão só reflete a importância que tais artefatos devem esconder. Se não funcionam separadas, a deusa provavelmente escondeu um efeito ativado apenas quando todas as Lágrimas forem reunidas. Esse é o principal objetivo da organização no momento.",
      },
      {
        title: "Membros",
        content:
          "Aventureiros de qualquer tipo podem ser membros dos Peregrinos e representá-los. É fácil se tiver acesso ao Guia de NPCs, pois as fichas da seção de mercenários (pp. 76–79) desempenham bem este papel.",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. Um dos Peregrinos estava explorando uma antiga ruína deheoni, mas seu parceiro parou de receber mensagens dele faz um tempo. Então, essa pessoa pediu aos heróis que fossem até a ruína para descobrir o paradeiro do Peregrino e do grupo de aventureiros que fazia sua escolta.",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Bússola das Lágrimas",
        variant: "regra",
        content:
          "Desenvolvido por inventores Peregrinos, este item mágico foi um protótipo que acabou se tornando mais famoso do que o planejado: seu objetivo inicial era rastrear as Lágrimas de Valkaria, mas as primeiras versões acabaram alertando seu usuário para a presença de qualquer magia. Hoje em dia, ainda que usem uma versão mais avançada e precisa para buscar pelas Lágrimas, os Peregrinos continuam comercializando este item — afinal, todo mundo precisa pagar as contas, certo? Ao empunhar a Bússola das Lágrimas com uma das mãos, você tem sucesso automático em testes de Misticismo para detectar magia e pode fazê-los mesmo que não seja treinado nesta perícia. Acessório menor, preço T$ 3.500.",
      },
    ],
  },
  { id: "rastro-da-polvora",
    name: "Rastro da Pólvora",
    origem: "Dragão Brasil - 228",
    summary: "Um movimento político de devotos de Tenebra dedicado à defesa, regulamentação e difusão das armas de fogo pelo Reinado.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Muitas histórias giram em torno de como é perigoso (e profano) o uso da pólvora. Alguns devotos de Tenebra acreditam que isso não passa de comoção desinformada e temor incabível.\nEsta organização surgiu em grandes cidades do Reinado, originalmente como um movimento político dedicado à defesa e difusão das armas de fogo. Seus integrantes sustentam uma ideia controversa: pólvora não é perversão perigosa, mas um presente legítimo entregue pela Deusa das Trevas ao mundo de Arton — e, portanto, deve ser acessível.\nO Rastro da Pólvora reúne um grupo improvável de devotos: armeiros, comerciantes, estudiosos e figuras públicas favoráveis à regulamentação da pólvora. Alguns enxergam nela oportunidade econômica. Outros, influência política. Muitos veem algo ainda mais valioso: equilíbrio e poder.\nPara essas pessoas, espadas, cavalaria e armaduras sempre favoreceram nobres, ordens militares e guerreiros treinados desde a infância. Armas de fogo nivelam essa relação. Uma pistola nas mãos certas pode desafiar privilégios antigos e reduzir a distância entre soldados treinados e indivíduos comuns.\nAutoridades religiosas, conservadores e parte da nobreza frequentemente tratam o Rastro da Pólvora como uma ameaça social disfarçada de movimento legalista. Seus opositores alertam para acidentes, contrabando e violência crescente associados à disseminação da pólvora.\nOs membros da organização já esperavam que suas ações gerassem resistência. A essas figuras rivais, respondem que a culpa jamais deve pertencer à ferramenta.\nApesar da fama provocadora, a organização não se vale de atos revolucionários. Publicamente, defendem regulamentação, responsabilidade e liberdade de escolha. Nos bastidores, porém, muitos acreditam que medo e instabilidade aceleram mudanças que jamais ocorreriam por consenso.\nSeus representantes transitam por conselhos, tribunais e salões nobres com a mesma frequência que pelas oficinas ilegais. Alguns membros mais radicais defendem acesso irrestrito à pólvora e mantêm ligações com contrabandistas e fabricantes ilegais. A liderança da organização raramente confirma tais rumores, mas também não atua para dissuadir esses integrantes mais problemáticos.\nTalvez por isso tantos governantes observem o Rastro da Pólvora com cautela. Afinal, Tenebra raramente precisa derrubar muralhas quando pode convencer alguém a explodir os portões.",
      },
      {
        title: "Membros",
        content:
          "Bucaneiros, burgueses, inventores, nobres, políticos, mercadores… praticamente qualquer pessoa que tenha algo a ganhar com a legalização da pólvora pode ser um integrante desta organização; fichas de pistoleiros da seção “Piratas & Pistoleiros” (Ameaças de Arton, pp. 252–263) representam bem este grupo.",
      },
      {
        title: "Como Usar",
        content:
          "Vilões. Uma assembleia local em Deheon está prestes a ordenar restrições e rondas ainda mais severas em busca de armas de fogo, mas atentados misteriosos aumentam o medo do povo. Enquanto a milícia local busca pelos culpados, um político do Rastro da Pólvora surge para defender que o uso de armas de fogo poderia ter salvo as vítimas. Quem os aventureiros vão apoiar nessa situação: os milicianos que desejam preservar a lei do Reinado ou o político escuso que promete as maravilhas da pólvora?",
      },
      {
        title: "Novo Item Mágico",
        subtitle: "Corso Sombrio",
        variant: "regra",
        content:
          "De alguma forma, todo integrante do Rastro da Pólvora tem uma dessas cartas de corso entre seus pertences. Enquanto seguir as Obrigações & Restrições de Tenebra, este item funciona como uma carta de corso comum: concede a você permissão para usar armas de fogo em território do Reinado. Se tais obrigações forem violadas, a carta imediatamente se transforma em um corvo mágico que voa até a autoridade do Reinado mais próxima e denuncia você pelo porte e uso de itens proibidos pelo Vintílogo (veja Atlas de Arton, p. 466). Acessório menor, preço T$ 2.500.",
      },
    ],
  },
  { id: "vigilia-das-segundas-chances",
    name: "Vigília das Segundas Chances",
    origem: "Dragão Brasil - 228",
    summary: "Clérigos de Thyatis que já foram ressuscitados e oferecem a aventureiros um pacto de retorno para interceder por suas vidas diante da morte.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Aventurar-se em Arton significa aceitar certas probabilidades: lâminas falham, monstros vencem, doenças pioram na hora errada… é por isso que nem todo herói retorna da masmorra — sobreviventes, na verdade, são a exceção. E os reincidentes dedicam-se a criar essas exceções.\nComposta exclusivamente por clérigos de Thyatis, esta organização reúne sacerdotes que já foram ressuscitados em algum momento da própria vida. Acreditando estar realizando uma missão divina, oferecem algo incomum a aventureiros e exploradores: um pacto de retorno.\nEsse acordo assume formas variadas. Alguns membros contribuem com doações regulares, outros prestam serviços sagrados ou juramentos ligados a Thyatis. Em troca, um membro da Vigília se encarrega de registrar sua história, vínculos e feitos em arquivos mantidos sob proteção divina. Não é sobre comprar o direito à vida eterna — os próprios sacerdotes rejeitam essa interpretação —, o objetivo é estar preparado caso a morte chegue cedo demais.\nOs registros recebem atenção quase obsessiva. São compostos por testamentos, memoriais, testemunhos de aliados, símbolos pessoais e até objetos significativos que podem ser preservados pela organização. Uma ressurreição bem-sucedida depende tanto de magia quanto de identidade: alguém deve ser lembrado de maneira clara antes de ser chamado de volta. Quando essas pessoas morrem, inicia-se o processo de reivindicação.\nSacerdotes analisam circunstâncias da morte, avaliam pendências e realizam ritos nos quais representam o falecido diante de Thyatis. Eles descrevem esse processo como uma defesa espiritual. Na maioria das vezes, isso garante uma salvaguarda contra a primeira vez que a pessoa morreu; é quase como se os integrantes desta organização convencessem o Deus da Ressurreição e da Profecia de que essa morte prematura jamais fora prevista e, portanto, não deveria acontecer.\nMas nem sempre dá certo. Os membros da Vigília deixam isso claro desde o início. Alguns destinos encerram-se de forma definitiva; outros recusam o chamado ou simplesmente não pertencem mais ao mundo dos vivos. Ainda assim, a organização conquistou certo prestígio entre aventureiros.\nEm tavernas e estradas circula um comentário frequente sobre eles: ter coragem é mais fácil quando alguém promete argumentar em seu favor diante da eternidade.",
      },
      {
        title: "Membros",
        content:
          "Clérigos de Thyatis que já morreram e voltaram à vida, em geral têm habilidades de cura e bônus muito altos em Religião e perícias sociais (como Diplomacia e Enganação).",
      },
      {
        title: "Como Usar",
        content:
          "Aliados. Algo interrompeu o processo de reivindicação que um dos reincidentes deveria realizar para um aliado importante dos aventureiros. Agora, os heróis precisarão investigar o motivo e descobrir como ajudar seu companheiro a voltar à vida.",
      },
      {
        title: "Novo Poder de Destino",
        subtitle: "Previdência da Vigília",
        variant: "regra",
        content:
          "Após contribuir com a Vigília das Segundas Chances ou realizar um juramento para Thyatis (o que exige seguir suas Obrigações & Restrições), você recebe o poder Dom da Imortalidade (Tormenta20, p. 133), mas só pode usá-lo na primeira vez que morrer na campanha.",
      },
    ],
  },
  { id: "zoyrak",
    name: "Zoyrak",
    origem: "Dragão Brasil - 228",
    summary: "Células urbanas goblinoides inspiradas por Thwor que usam sabotagens, pichações e engenhocas para plantar as sementes da revolução.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Em muralhas e construções de cidades importantes pelo continente norte de Arton, às vezes surgem rabiscos de uma pequena semente cercada por traços irregulares.\nZoyrak — que pode ser traduzido para o idioma valkar como “Semente” ou “A Semente” — é uma referência a uma antiga expressão goblinoide: “Zoyrakbe jak-duyshidakk” — que significa algo como “semente destinada à transformação e crescimento gradual para integrar a vida que sofre junta”. Para quem pessoas comuns chamariam de “integrantes” dessa “organização”, isso é mais do que um nome. É um plano.\nNascida em comunidades goblinoides urbanas que ouviram sobre Thwor e suas histórias do Mundo Como Deve Ser, os Zoyrak acreditam que os desígnios do Deus dos Goblinoides não podem ser realizados por meio de um único líder ou batalha gloriosa, mas pelo acúmulo paciente de pequenas mudanças.\nSeus membros sabem que podem fazer pouco por enquanto, então agem para plantar sementes da revolução vindoura.\nEntão raramente travam guerras abertas. Em vez disso, espalham mensagens, constrangem figuras poderosas e interferem em estruturas sociais que consideram opressivas. Palacetes amanhecem cobertos por pichações de símbolos goblinoides, depósitos sofrem sabotagens e monumentos ligados a conquistadores amanhecem repletos de tinta, esterco e ferrugem.\nA tecnologia — em sua maioria fabricada por goblins, mas disseminada entre todas as raças dos duyshidakk — ocupa lugar importante nesse processo. Engenhocas movidas a vapor e magia ajudam na mobilidade e nas intervenções urbanas: planadores inseguros, bombas de tinta, ferramentas de escalada e dispositivos que costumam despertar genialidade e causar desastres iminentes.\nZoyrak estão espalhados em pequenas células por oficinas, cortiços e comunidades goblinoides, conectados mais por símbolos e ideias do que por hierarquia formal.\nVistos por humanos e outros povos “civilizados” como criminosos ou incendiários políticos, seus membros costumam respondê-los com uma constatação inquietante: aqueles que veem uma semente como ameaça provavelmente temem o que pode crescer a partir dela.",
      },
      {
        title: "Membros",
        content:
          "Goblins, hobgoblins, bugbears, orcs, ogros e outros povos humanoides aceitos pelos goblinoides; todas as fichas da seção “Duyshidakk” (Ameaças de Arton, pp. 78–87) representam bem este grupo.",
      },
      {
        title: "Como Usar",
        content:
          "Rivais. Uma série de pichações e sabotagens começa a atingir as mansões de nobres, entre eles um patrono dos aventureiros. Embora parte do povo admire os responsáveis, as autoridades (e os aristocratas afetados) desejam levá-los à justiça. Como os heróis vão agir? Ajudarão os revoltosos ou protegerão os interesses de seu contratante?",
      },
      {
        title: "Novo Item Geral",
        subtitle: "Bomba de Tinta",
        variant: "regra",
        content:
          "Favorito entre os Zoyrak, este item segue as mesmas regras da bomba (Tormenta20, p. 180), mas, em vez de causar dano, afeta uma esfera com 6m de raio que fica sob efeito simulado da magia Área Escorregadia até o fim da cena. Criaturas dentro dessa área durante a explosão da bomba também ficam lentas (Reflexos CD Des evita); elas podem gastar uma ação de movimento para fazer um teste de Força (CD Des) para se recuperar da condição. Preparado alquímico, preço T$ 35.",
      },
    ],
  },
  //#region Dragão Brasil - 232
  { id: "andarilhos-do-ocaso",
  name: "Andarilhos do Ocaso",
  origem: "Dragão Brasil - 232",
  categoria: "Licantropos",
  summary: "Uma pequena organização secreta de licantropos devotos formada dentro da Igreja de Tenebra.",
  sections: [
    {
      title: "Lore & Descrição",
      variant: "destaque",
      content:
        "Ainda que a licantropia seja resultado de uma maldição de Tenebra imposta sobre uma criação de Megalokk, licantropos possuem uma conexão especial com a noite. É sob o manto das trevas que sua fúria desperta e sua transformação ocorre, o que os torna, de certa forma, filhos de Tenebra.\nAssim, foi apenas natural que em um determinado momento alguns licantropos buscassem a proteção da Deusa da Noite, tornando-se devotos. Muitas vezes caçados e odiados por sua condição monstruosa, esses indivíduos encontraram na religião uma forma de controlar sua maldição e se manter distantes daqueles que os consideravam meros monstros irracionais.\nAssim surgiu a ordem dos Andarilhos do Ocaso, criada por Agnes Lemain, uma clériga licantropa raposa natural de Ahlen. Uma estudiosa da maldição da licantropia e da relação de Tenebra com esses seres, ela desenvolveu formas de empregar o poder divino da Deusa da Noite para fortalecer as habilidades de licantropos devotos. Valendo-se de sua posição no clero, recrutou outros licantropos e compartilhou com eles suas descobertas e técnicas.\nA ordem dos Andarilhos do Ocaso é uma pequena organização secreta, formada dentro da Igreja de Tenebra. Sua sede fica no templo da Deusa da Noite em Kriegerr, de onde Agnes coordena os esforços e as missões de seus membros. A atuação e a própria existência da ordem são segredos bem guardados, pois mesmo entre o clero de Tenebra existem aqueles que se opõem aos licantropos. Acredita-se que a própria Agnes responda diretamente aos altos sacerdotes da Igreja, o que dá a ela uma invejável posição de poder político.",
    },
    {
      title: "Membros",
      content:
        "Os membros dos Andarilhos do Ocaso são todos licantropos devotos de Tenebra. Eles combinam fé e as técnicas desenvolvidas por Agnes para defender os ideais de sua religião. Alguns são clérigos, como a própria fundadora, e atuam de dentro da igreja, enquanto outros são aventureiros independentes que obedecem à própria ordem sem laços com o clero. Suas missões geralmente envolvem proteger outras criaturas da noite, promover o equilíbrio entre o mundo dos vivos e dos mortos e auxiliar outros licantropos que buscam controlar sua fúria de alguma forma.",
    },
  ],
  },
  { id: "filhos-da-furia",
    name: "Filhos da Fúria",
    origem: "Dragão Brasil - 232",
    categoria: "Licantropos",
    summary: "Uma crença compartilhada por licantropos devotos de Megalokk que buscam libertar toda a fúria e selvageria de sua maldição.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Se os Andarilhos do Ocaso surgiram como uma forma de controlar a licantropia, os Filhos da Fúria buscam o oposto: libertar toda a fúria e selvageria que a licantropia oferece. Fiéis aos dogmas de Megalokk, eles acreditam que poder da licantropia é uma dádiva primal ofertada pelo Deus dos Monstros e que foi corrompida por Tenebra. Para expurgar essa corrupção nefasta, é necessário empregar violência, selvageria e fúria incontroláveis.\nOs Filhos da Fúria não são uma organização formal, mas uma crença compartilhada por licantropos devotos de Megalokk. Eles empregam rituais xamânicos, muitas vezes conduzidos por clérigos do Deus dos Monstros, para se conectar com sua fera interior e despertar uma fúria primal em seus espíritos. Esses rituais frequentemente reúnem bandos de filhos da fúria que se unem para conduzir caçadas selvagens ou ataques a pequenas comunidades ou outros símbolos do mundo civilizado.",
      },
      {
        title: "Membros & Objetivos",
        content:
          "Não existe um objetivo unificado entre os Filhos da Fúria, nem um grande plano a ser executado coletivamente. Ainda que muitos rituais reúnam bandos destes licantropos, o caminho trilhado por eles é individual: cada filho da fúria busca sua própria maneira de se conectar com sua fúria interior para fortalecer suas habilidades como licantropo. Para alguns, isso significa se opor à civilização, caçando implacavelmente aqueles que vivem nas cidades, enquanto para outros pode representar viver em meio aos ermos, o mais próximo possível do mundo natural, ou mesmo assumir o papel de guardiões de outras monstruosidades.\nComo muitas crias de Megalokk, filhos da fúria podem ser bondosos, malignos ou mesmo indiferentes a noções de moralidade, mas todos serão, sempre, portadores de uma fúria selvagem.",
      },
    ],
  },
  { id: "punho-de-mitral",
    name: "Punho de Mitral",
    origem: "Dragão Brasil - 232",
    categoria: "Licantropos",
    summary: "Uma organização formal de experientes caçadores de licantropos com sede ao norte de Gorendill.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "O Punho de Mitral é uma organização de caçadores de licantropos surgida na fronteira oeste de Deheon, próximo às Uivantes. Seus membros fundadores eram habitantes da região que, por muito tempo, foram forçados a lidar com os metamorfos que desciam as montanhas ao norte em busca de vítimas e rebanho. Dos confrontos frequentes, surgiram técnicas de caça e enfrentamento elaboradas. Os bons resultados se tornaram conhecidos, e outras comunidades ameaçadas por licantropos passaram a pedir ajuda aos experientes caçadores. Não demorou para que a fama se espalhasse por outras partes do Reinado.\nCom o tempo, o Punho surgiu como uma organização formal, com sede em um forte ao norte de Gorendill, e seus membros passaram a oferecer seus serviços a qualquer vila ou indivíduo sob a ameaça de licantropos.",
      },
      {
        title: "Liderança & Atuação",
        content:
          "Hoje, o líder do Punho de Mitral é Tarkan Delantur, um humano deheoni cujos pais estavam entre os primeiros membros da ordem. Caçador habilidoso, ele acredita que a licantropia é uma maldição severa e que os métodos atuais de cura individual são lentos e pouco eficientes. Sob sua liderança, a organização tem promovido um combate rigoroso, e muitas vezes violento, contra todos os tipos de licantropos.\nOs calabouços da sede da ordem estão repletos de licantropos prisioneiros, empregados como cobaias na busca por aquilo que Tarkan chama de solução final para a maldição.",
      },
    ],
  },
  //#region Dragão Brasil - 233
  { id: "culto-de-kammapa",
    name: "Culto de Kammapa",
    origem: "Dragão Brasil - 233",
    summary: "Um suposto grupo de estrangeiros interessados no mito ubaneri de Kammapa, o faminto.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "As histórias mais antigas dos ubaneri dizem que a megadíbula é a boca de um monstro: Kammapa, o faminto. Ele teria causado grande destruição até ser enganado por um avatar do Outro Primo e se deitado para descansar. O avatar cobriu cuidadosamente o corpo de Kammapa com uma teia inquebrável, forçando-o a carregar o mundo inteiro em suas costas caso se levantasse. Emissários ubaneri relacionam o mito de Kammapa com a primeira derrota de Sartan, o Deus Menor da Desolação, antes do Disco dos Três ser envolvido.",
      },
      {
        title: "Como Usar",
        content:
          "A filha desaparecida de Sichan Darandaran, Janelle, foi vista em Kivulisi pedindo informações sobre um suposto grupo de estrangeiros interessados em Kammapa. Essa é a única pista de seu paradeiro.",
      },
    ],
  },
  { id: "irmandade-talabina",
    name: "Irmandade Talabina",
    origem: "Dragão Brasil - 233",
    summary: "Uma pequena irmandade de caçadores de dragões com sede em Ejotó e lealdade expressa ao comitê dos kipanes.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Talabi Ejotó foi Primeiro Entre os Kipanes por pouco mais de duas décadas, no período dos Seis Ousados. Caçador experiente da savana, era especialista a no tipo mais terrível de presa: os dragões.\nA Irmandade Talabina segue o exemplo de seu patrono, oferecendo esse serviço em troca de pagamento. Com sede em Ejotó, seus menos de dez membros disputam espaço com os Escamas Vivas, já que também há caçadores de dragões em suas fileiras. A principal diferença dos talabinos é sua lealdade expressa ao comitê dos kipanes. Acredita-se que, caso seja necessário recorrer a uma organização para enfrentar as crias de Kallyadranoch, o comitê preferirá a irmandade.",
      },
      {
        title: "Membros",
        content:
          "Sua atual líder é a voraci Kinaya Ejotó. Embora tenha boa vontade e muito interesse em expandir a fama de sua irmandade, sua paciência é bem curta, e por isso vive se envolvendo em brigas: seja com aprendizes, colegas ou até clientes!",
      },
    ],
  },
  { id: "frota-fantasma",
    name: "Frota Fantasma",
    origem: "Dragão Brasil - 233",
    summary: "Uma rede de espiões ocultos em pequenas embarcações no Canal do Tentáculo, a serviço de Kivulisi e do comitê de kipanes.",
    sections: [
      {
        title: "Lore & Descrição",
        variant: "destaque",
        content:
          "Oficialmente, a única força militar organizada de Ubani é a Patrulha da Fronteira. Apenas aqueles que costumam prestar muita atenção ao cruzar o Canal do Tentáculo conseguem perceber pequenas embarcações navegando sozinhas. Esses barcos podem ser facilmente ignorados, mas são guiados pelos corgann de maior confiança da kipane Nokanis. Seus tripulantes, ocultos sob o convés, são a Frota Fantasma, espiões a serviço de Kivulisi e do comitê de kipanes (mas principalmente de Kivulisi).",
      },
      {
        title: "Membros",
        content:
          "Entre seus agentes estão os gêmeos qareen da água, Maji e Kabiral. Maji é brincalhona, gosta de aproveitar os privilégios da posição e às vezes se deixa levar pela arrogância. Kabiral é sério, compenetrado e estoico. Embora os jovens sempre digam que estão prontos para assumir a liderança da Frota, Nokanis insiste em mantê-los por perto e treiná-los mais. Isso a leva a trazer todo tipo de instrutores especializados para Kivulisi, com os últimos recém-chegados exóticos sendo uma samurai de Tamu-ra e um Presa de Coral de Khubar.",
      },
    ],
  },
  //#endregion
];

// Estilo livro: texto corrido com subtítulos, imagem e informações rápidas
const exemploLivro: OrganizationEntry[] = [
  {
  id: "exercitos-e-mercenarios",
  name: "Exércitos & Mercenários",
  origem: "Atlas de Arton",
  categoria: "Exércitos & Mercenários",
  summary: "Panorama das forças militares de Arton: exércitos feudais, exércitos profissionais, companhias mercenárias, o Exército do Reinado e as tropas dos reinos.",
  image: "/mundo/orgs/exercitos-e-mercenarios.png",
  sections: [
    {
      title: "Visão Geral",
      variant: "destaque",
      content:
        "A história de Arton é repleta de guerras. A origem do próprio Reinado pode ser traçada até a Grande Batalha, um conflito entre os antigos reinos humanos de Lamnor. Assim, não é estranho que praticamente todas as nações possuam forças armadas de algum tipo. A maioria possui exércitos feudais, formados por guerreiros nobres e seus guardas. Já outras possuem exércitos profissionais, formados por soldados e oficiais de carreira, ou dependem de companhias mercenárias, cuja lealdade não reside em um brasão, mas no ouro. Além de afetar a política, essas organizações podem ser potenciais contratantes — ou antagonistas — de aventureiros.",
    },
    {
      title: "Exércitos Feudais",
      content:
        "Nas sociedades feudais, os camponeses trabalham a terra, dando parte de sua produção para os nobres na forma de impostos. Em troca, os nobres protegem os camponeses. Por esse motivo, muitos senhores de terras são combatentes. Em alguns casos, um guerreiro poderoso, mesmo que não pertença a uma linhagem, pode conquistar território, convocar camponeses para trabalhar a terra e cobrar impostos deles. Ao fazer isso, se tornará um nobre. De fato, muitas famílias aristocráticas do Reinado começaram assim.\nAssim, a base do exército feudal é o guerreiro nobre, ou cavaleiro. Ele normalmente é um combatente capaz, por dois motivos. Primeiro, por seu treinamento — como nobres têm seu sustento fornecido pelos camponeses, podem se dedicar às armas. De fato, é comum que filhos e filhas de nobres humanos comecem a treinar aos sete anos. Segundo, por seu equipamento — por sua riqueza, nobres possuem itens normalmente inacessíveis a pessoas comuns, como armas e armaduras de manufatura superior e cavalos de guerra.\nPor mais valentes que guerreiros nobres sejam, eles não podem estar em todos os lugares ao mesmo tempo. Por isso, usam parte do dinheiro gerado pelos impostos para sustentar guarnições. Esses guardas podem se dedicar à luta e possuem equipamento de guerra, embora não tão luxuoso quanto o de seu senhor — cotas de malha, alabardas e maças são o padrão. Eles fazem o trabalho diário de patrulha e proteção das terras, enfrentando bandidos, animais selvagens e monstros menores, como glops e orcs, mas recorrem a seu senhor para problemas mais sérios.\nInfelizmente, às vezes tais problemas surgem em números muito grandes. Um cavaleiro e seus guardas podem lidar com bandoleiros na estrada. Mas, se em vez de uma gangue for uma horda de saqueadores, o lorde precisará de ajuda. Para isso, convoca os próprios camponeses da sua terra.\nAo contrário dos cavaleiros e guardas, camponeses recrutados não têm treinamento ou equipamento militar. São pessoas comuns, como fazendeiros, pastores e caçadores, e suas “armas” são muitas vezes suas ferramentas de trabalho, como arcos, machados e foices. Sua única força está na quantidade. Alguns nobres eventualmente convocam seus plebeus para treinos no pátio do castelo ou em campos perto da vila e fornecem equipamento básico (corseletes de couro e lanças) durante o recrutamento. Mas isso não é comum e, mesmo onde acontece, o treinamento será rudimentar — afinal, ao contrário dos nobres, os camponeses precisam trabalhar.\nPor fim, feudos maiores ou mais ricos podem sustentar outros cavaleiros, além do próprio senhor da terra. Esses cavaleiros vivem no castelo do lorde, sendo sustentados por ele, e têm praticamente o mesmo treinamento e equipamento que seu senhor, pagando por isso através de um juramento de lealdade. Formam uma tropa de elite, mais capacitada que os guardas.\nA liderança de um exército feudal sempre cabe ao senhor das terras, mesmo que ele não seja o mais experiente. Por exemplo, um nobre jovem, que recém herdou seu trono, pode saber menos sobre guerra que um guarda veterano, mas será seu superior. Quando um exército é formado pela junção de vários nobres (no caso de um ataque em larga escala, que ameace mais de um feudo), o líder é o nobre de maior graduação. Em ordem crescente, a precedência é: cavaleiro, barão, conde, marquês, duque e o monarca do reino. Assim, um exército recrutado do reino inteiro será sempre liderado pelo rei ou rainha.",
    },
    {
      title: "Exércitos Profissionais",
      content:
        "Esse tipo de força consiste em militares divididos em soldados e oficiais (respectivamente, combatentes e comandantes). Cada categoria tem suas subdivisões, chamadas de “patentes”. As patentes variam de exército para exército, mas a seguir apresentamos uma nomenclatura comum.\nSoldados são recrutados entre jovens de origem humilde, normalmente com 16 a 25 anos. Todos os verões, oficiais recrutadores passam pelas fazendas, vilas e cidades, recolhendo camponeses e plebeus que queiram ingressar no exército — aqueles de melhor nascimento que tenham interesse numa vida de viagens e batalhas tornam-se oficiais ou aventureiros. Iniciam suas carreiras como recrutas, quando passam por treinamento num acampamento ou base. Após um ano, tornam-se soldados. Soldados que se destaquem em campo, ou pelo menos sobrevivam a diversas batalhas, são promovidos a sargentos, veteranos que detêm o respeito (ou temor) de outros soldados — e, às vezes, até mesmo de oficiais. Alguns exércitos possuem um posto intermediário entre soldado e sargento, mas isso não é unanimidade. Em alguns reinos tirânicos o alistamento é obrigatório e quem evitá-lo pode ser preso ou mesmo executado.\nJá oficiais são recrutados entre filhos e filhas da nobreza ou da burguesia. Começam como tenentes, que lideram grupos pequenos (entre dez a trinta soldados) ou atuam como auxiliares de oficiais mais graduados. Com o tempo e provando seu valor, podem ser promovidos a capitães — comandantes de grupos grandes, com por volta de cem soldados, ou de uma guarnição pequena, como uma torre de vigia ou posto de fronteira. Capitães são os oficiais mais graduados que ainda participam de batalhas em situações normais.\nAqueles que se destacam são promovidos a coronéis e ganham o comando de uma guarnição grande, como um castelo ou fortaleza de fronteira. Coronéis normalmente não atuam mais em campo, liderando de trás das linhas, mas alguns insistem em lutar lado a lado com seus subordinados. Tais oficiais são teimosos que podem botar tudo a perder com sua imprudência — ou corajosos que inspiram a mais pura devoção em seus soldados. Um coronel que não seja um nobre (algo raro) ganhará terras e um título de nobreza ao atingir essa patente.\nCoronéis que demonstrem grande capacidade estratégica ou diplomática são promovidos a generais — a patente mais alta, com o comando de uma região inteira do reino. Generais normalmente têm seu título nobiliárquico elevado e geralmente são condes ou mesmo duques.\nTanto para soldados quanto para oficiais, os termos do recrutamento — incluindo salário e tempo de serviço — são estipuladas em contratos, normalmente redigidos num pergaminho abençoado por um clérigo de Khalmyr e autenticado pelo selo do oficial recrutador. Tais pergaminhos são uma posse valiosa para seus donos — afinal, provam quando eles começaram a servir e, consequentemente, quando poderão se aposentar. Normalmente, o fim da carreira de um soldado é o posto de sargento — exceto em casos raros, sargentos não são promovidos a tenentes. Ou seja, soldados não viram oficiais. Isso acontece porque o treinamento e a função das duas categorias são diferentes. Um sargento pode ser um combatente temível, mas nada garante que seja um bom estrategista. Sargentos especialmente capazes, porém, provavelmente são alocados a unidades de elite ou posições de honra (como guarda real).\nComo oficiais também ingressam no exército muito cedo, às vezes um jovem inexperiente pode acabar liderando soldados veteranos. Isso pode soar estranho, mas oficiais são treinados justamente para isso — liderar. Um oficial não necessariamente é um combatente melhor que um soldado de experiência equivalente, mas possui treinamento para ser um comandante melhor. Claro, alguns oficiais alcançam seu posto apenas por seu nascimento, e não possuem aptidão alguma. Esses costumam ser transferidos para posições burocráticas ou para guarnições afastadas, onde dificilmente verão combate. Em casos extremos, podem até mesmo sofrer um “acidente” causado por subordinados fartos de seguir ordens estúpidas.\nPoucas nações possuem exércitos profissionais. Isso ocorre pelo sistema feudal usado na maior parte dos reinos, no qual o dever de proteger o povo cabe aos nobres. Também porque manter um exército profissional é caro — é mais barato recrutar camponeses apenas quando necessário do que sustentar soldados em tempo integral. Atualmente, os exércitos profissionais de maior destaque são o Exército do Reinado, o Exército Purista (da Supremacia) e as Legiões de Tauron (do Império de Tauron).",
    },
    {
      title: "Companhias Mercenárias",
      content:
        "Um ditado popular entre devotos de Tibar diz: “Sempre que alguém quiser um serviço, haverá alguém disposto a fornecer esse serviço… pelo preço certo”. No Reinado e além, muitos nobres almejam conquistas militares — e os que não têm esse desejo precisam se proteger daqueles que têm. Assim, não é de se espantar que Arton possua incontáveis companhias mercenárias — grupos de pessoas dispostas a lutar por quem pagar mais.\nA origem dessas organizações varia. Podem ser formadas por soldados veteranos que, após serem dispensados de seus exércitos, passam a vagar pelos reinos vendendo serviços militares — afinal, não conhecem outro ofício. Também por bandidos que descobrem que lutar as batalhas dos outros paga mais do que assaltar em estradas. Ou, ainda, por bárbaros que não se encaixam na sociedade “civilizada”, devotos de Arsenal que só querem uma desculpa para entrar em guerra, aventureiros desiludidos… Poucas organizações em Arton são tão diversas quanto companhias mercenárias.\nSuas estruturas também variam — enquanto algumas são pouco mais que gangues desordeiras, outras possuem códigos tão rígidos quanto os de uma ordem de cavalaria. A maioria, porém, obedece a uma hierarquia padrão. O líder é chamado de capitão ou condotiero (um termo que surgiu nas Legiões da Fortuna de Sambúrdia, mas se espalhou por Arton). Ele possui um ajudante, chamado de tenente, que também atua como segundo em comando. Abaixo dos dois estão os sargentos, veteranos que lideram grupos de dez a trinta soldados — a base da hierarquia.\nAlém desses, as companhias possuem membros com funções específicas: os conjuradores, arcanistas e clérigos que fornecem suporte mágico e são muito respeitados (ou temidos…) pelos outros mercenários; o arauto, responsável por anunciar a chegada da companhia aos nobres locais e oferecer os serviços dela, e o arquivista. Este último é um escriba, sábio ou devoto de Tanna-Toh encarregado de registrar a história da companhia (para quais reinos ela viajou, de quais batalhas participou…) e redigir os contratos de serviço. Esses documentos estipulam os termos a serem seguidos pelos mercenários — por quanto tempo servirão, contra quais inimigos lutarão, se farão outro tipo de serviço (como escolta, espionagem…) e, claro, quanto receberão. O pergaminho é assinado pelo condotiero e pelo contratante e, nas maiores companhias, será mágico, vinculando todos que o assinaram a cumprir suas cláusulas ou sofrer maldições arcanas. O arquivista é o terceiro membro mais importante da hierarquia, atrás apenas do condotiero e do tenente. Seu trabalho é muito respeitado, pois mercenários normalmente possuem orgulho da história de sua companhia e, de forma mais prática, bandos com tradições longas e orgulhosas tendem a conseguir os melhores contratos.\nCompanhias mercenárias são mais comuns em Aslothia e nas Repúblicas Livres de Sambúrdia. Porém, podem ser encontradas em praticamente todo o mundo. Elas também são chamadas de companhias livres, por não serem leais a um senhor específico. Já os mercenários também são chamados de soldados da fortuna, por suas vidas girarem em torno da busca por aventura e ouro.\nA ironia das companhias mercenárias é que elas podem ser mais perigosas em tempos de paz do que em tempos de guerra. Quando as batalhas terminam e os mercenários ficam sem trabalho, muitas vezes tornam-se bandidos e começam a saquear as mesmas terras que estavam protegendo. Nobres que contratam essas companhias para resolver seus problemas militares descobrem que, quando a guerra termina, os problemas de verdade começam.",
    },
    {
      title: "O Exército do Reinado",
      content:
        "Esta força militar foi formada em 1400, quando Shivara, recém-coroada rainha de Trebuck, solicitou ao Rei-Imperador Thormy tropas de todo o Reinado para erguer um exército e enfrentar a Tormenta. Apesar de sua primeira incursão — a Batalha do Forte Amarid — ter sido uma derrota, o Exército do Reinado perdurou. Mais do que isso, ao longo dos próximos anos foi expandido, com a criação de novas guarnições para proteger os reinos de diferentes ameaças, como a Aliança Negra e o vilão Mestre Arsenal.\nDurante a Guerra Artoniana, muitos soldados do Exército do Reinado pediram baixa — ou desertaram — para proteger seus lares. Porém, desde o fim do conflito, Shivara tem feito esforços para restaurar sua força. O objetivo da Rainha-Imperatriz é ter acampamentos, torres de vigia e fortes prontos para defender a coalizão de qualquer perigo externo. Isso ainda não é realidade, mas o empenho já deu frutos — recentemente, o Forte Cabeça-de-Martelo, nas Colinas Centrais, protegeu a região de um ataque de bandidos e zumbis da Tormenta.\nA primeira medida prática de Shivara para fortalecer o Exército do Reinado foi fundi-lo com o Exército Real de Deheon. Apesar de também ter sofrido perdas no conflito para os puristas, as tropas profissionais deheoni ainda eram numerosas e bem-preparadas. Essa medida teve outros benefícios — simplificou a burocracia militar, evitando possíveis disputas entre as duas forças, e revigorou os laços entre as nações aliadas. Ao abrir mão do exército de Deheon em prol de um que sirva a todo o Reinado, Shivara mostrou que coloca a coalizão acima do reino do qual é rainha.\nEmbora o Exército do Reinado tenha mantido seu nome, passou a usar a hierarquia do Exército do Real de Deheon, que estava mais estruturado. Sua base são os soldados, que podem ser de infantaria (equipados com espadas e escudos ou alabardas), cavalaria ou besteiros. Sua unidade básica é a companhia, que consiste em aproximadamente cem soldados, guardiães (soldados veteranos) e sargentos (subcomandantes). Cada companhia é liderada por um capitão — um aristocrata treinado para isso desde criança, um sargento que se destacou e foi promovido ou mesmo um aventureiro que decidiu largar a exploração de masmorras para servir ao Reinado. O capitão é auxiliado por um ou dois tenentes — jovens em treinamento para se tornar capitães. Normalmente, companhias possuem apoio mágico, com um punhado de conjuradores ao seu dispor, entre magos (normalmente ex-alunos da Academia Arcana) e clérigos (tipicamente de Valkaria, Khalmyr ou Lena). Conjuradores gozam de grande respeito nas fileiras e são considerados equivalentes a tenentes na hierarquia.\nDez companhias formam uma flâmula, liderada por um mestre de campo — um capitão promovido ou um nobre, como um barão ou conde. Quatro flâmulas formam um escudo, a maior divisão do Exército do Reinado, liderado por um condestável (ou condestablessa) — um mestre de campo promovido ou um alto nobre, como um duque ou mesmo um membro de uma das famílias reais da coalizão.\nO Exército do Reinado possui cinco escudos. Quatro deles são responsáveis pelos pontos cardeais, enquanto o quinto guarda Deheon. Assim, há o escudo do oeste, com bases em Ahlen e na fronteira de Deheon com as Uivantes, que guarnece a coalizão de investidas de bárbaros e monstros das montanhas, assim como de legiões desgarradas do Império de Tauron. Há o escudo do leste, com guarnições ao longo da Garganta do Troll e nos reinos de Wynlla e Bielefeld, sempre vigilante contra a Supremacia. Há o escudo do sul, estacionado próximo da fronteira com as Ruínas de Tyrondir, preparado para incursões duyshidakk. Há o escudo do norte, dividido entre Zakharov e Namalkah — e, em tese, responsável também por guardar a Pondsmânia, embora Shivara não seja tola a ponto de enviar soldados para o Reino das Fadas… Por fim, há o escudo da Deusa, no coração de Deheon, sempre preparado para proteger o Reino Capital ou partir ao auxílio de qualquer nação em necessidade.",
      subsections: [
        {
          title: "Comandante",
          content:
            "O Exército do Reinado é formalmente liderado pela Rainha-Imperatriz. Porém, o comando no dia a dia foi delegado para o Arquiduque Marechal Sir Bradwen Lança Dourada, que provou sua lealdade liderando o Exército Real de Deheon durante a Guerra Artoniana, nos anos em que Shivara estava desaparecida. Sir Bradwen descende de uma família que tem lutado desde a Grande Batalha, e honra essa ascendência. Um homem de estirpe e valor, confortável tanto em salões da nobreza quanto em acampamentos militares, sir Bradwen possui ombros largos e postura altiva. Está perto dos 80 anos, fato perceptível apenas pelo grisalho de seu vistoso bigode. Em campo, luta a cavalo, trajando uma armadura magnífica e a lança pela qual sua família é conhecida — uma arma mágica com mais de 1.000 anos. Embora o guerreiro tenha se provado várias vezes, a idade de sir Bradwen é uma preocupação. Ele ainda mostra vigor, mas isso não durará para sempre e logo chegará a hora de escolher um novo Marechal do Reinado.",
        },
      ],
    },
    {
      title: "Outros Exércitos",
      subsections: [
        {
          title: "Deheon",
          content:
            "A maior nação do Reinado possui um exército feudal com guardas bem-equipados, cavaleiros heroicos… e muito mais! Deheon é um reino cosmopolita e próspero, com cidadãos de todas as raças e nobres extravagantes. Essa combinação resulta em tropas excêntricas, como cavaleiros aggelus protegidos tanto por couraças quanto por bênçãos, arqueiras medusas capazes de petrificar inimigos que as alcancem em corpo a corpo e outros prodígios. Além disso, em épocas de guerra Deheon consegue erguer uma quantidade espantosa de camponeses, com equipamento acima da média. Mas a maior força de Deheon reside no elevado moral de suas tropas. Isso decorre do tratamento justo que a maior parte dos nobres dispensa a seus súditos — e do orgulho de lutar pela maior nação de Arton.\nDeheon possui outra força relevante: a Guarda de Valkaria. Milícias normalmente são parte das tropas feudais de seus reinos. A Guarda de Valkaria, porém, é uma exceção, pois responde à própria capital e a sua burocracia urbana. Com milhares de patrulheiros, detetives e xerifes, a Guarda de Valkaria possui força equivalente ao exército de um pequeno reino! Contudo, seu foco não é lutar, mas investigar e proteger.",
        },
        {
          title: "Bielefeld",
          content:
            "O Reino dos Cavaleiros possui um exército feudal típico. Porém, graças à cultura do reino, que dá grande valor às virtudes da cavalaria e aos dogmas de Khalmyr, Bielefeld possui mais cavaleiros do que seria esperado pela sua população. O reino também conta com a Ordem da Luz, a maior ordem de cavalaria de Arton. Embora em épocas anteriores seus membros passassem mais tempo em salões de baile do que em campos de batalha, poucas unidades militares podem resistir a uma investida montada de cavaleiros da Luz.",
        },
        {
          title: "Namalkah",
          content:
            "O Reino Indomado possui um exército feudal rústico e pouco organizado, mas que compensa essas falhas com a bravura de seus guerreiros. A nobreza aqui é organizada de forma simples — em vez da estrutura nobiliárquica típica, com barões, condes e duques, os nobres são chamados de chefes e o único requisito para ser considerado nobre é ser dono de uma grande extensão de terra. Os guerreiros jurados dos chefes, conhecidos como ginetes, lutam montados. Porém, ao contrário dos cavaleiros de outros reinos, confiam mais em mobilidade do que em equipamento pesado. Vestem couro ou cota de malha e empunham lanças, azagaias e arcos. Abaixo dos ginetes estão os peões — servos que trabalham a terra e, quando a necessidade surge, lutam a pé. O equipamento dos peões é bastante singelo, normalmente adaptado de ferramentas agrícolas.\nNas vastas planícies do reino, a maioria das pessoas não são nobres nem seus servos, mas homens e mulheres livres. Esses são pequenos fazendeiros donos de suas próprias terras, ou tropeiros que conduzem rebanhos em tropéis, que não servem a nenhum senhor, embora ainda sejam leais a Namalkah. Esses homens e mulheres livres combatem como cavalaria leve, sendo muito mais temíveis do que camponeses de outros reinos. A falta de hierarquia dentro do povo faz com que seja mais difícil erguer o exército, mas também faz com que cada combatente seja mais valoroso. Afinal, são pessoas que lutam por suas próprias terras, não pelas de um senhor.",
        },
        {
          title: "Wynlla",
          content:
            "Uma nação pequena, mas rica, Wynlla é um caso particular no Reinado, pois seus nobres não têm obrigação de fornecer tropas para a defesa do reino. Em vez disso, pagam uma taxa ao Conselho que governa a nação. O Conselho, por sua vez, usa esse dinheiro para manter um exército diminuto, mas eficaz.\nA base do exército são os Magos de Batalha, arcanistas especializados em magias de destruição em área — ou seja, especialmente eficazes contra tropas. Ainda mais impressionantes são os golens de Wynlla, máquinas de combate de bronze e ferro que nunca se acovardam, nunca se cansam e nunca sentem dor. São a tropa de choque do Reino da Magia e uma das forças mais temíveis de Arton. Porém, o custo exorbitante de cada golem faz com que poucos existam.\nAlém dos magos e golens, as cidades de Wynlla são protegidas por guardas urbanos. Bem-equipados e acostumados a proteger as muralhas de suas cidades de monstros e elementais desgarrados, conseguiriam fazer o mesmo contra exércitos invasores — embora tenham pouca motivação para sair de suas cidades e lutar em outros campos de batalha.",
        },
        {
          title: "Ahlen",
          content:
            "O Reino da Intriga possui um exército feudal pequeno — o que faz sentido, visto que a cultura local repudia a violência aberta, em vez disso priorizando soluções “astutas” para conflitos. Porém, isso não significa que o país seja inofensivo. Com uma rede de espiões infiltrados em quase todas as cortes do Reinado, Ahlen pode ser capaz de derrubar um reino… sem derramar uma única gota de sangue.\nO Reino da Intriga possui uma única tropa digna de nota: os esgrimistas de Rishantor. Esses guardas palacianos usam roupas leves e floretes, pois para eles a elegância é crucial. Não se trata (apenas) de soberba — a função dos esgrimistas é proteger a aristocracia de Ahlen e, para isso, eles precisam se mesclar aos nobres e aos bailes dos quais eles participam. Se andassem com equipamento pesado, seriam facilmente detectados (e, consequentemente, evitados) pelos assassinos que devem impedir. Embora a função dos esgrimistas não seja a guerra aberta, eles são capazes de lutar em campo — mais de um cavaleiro já encontrou seu fim na ponta de um florete ao subestimar a velocidade e precisão desses espadachins.",
        },
        {
          title: "Zakharov",
          content:
            "O Reino das Armas possui um exército feudal com duas peculiaridades. Primeiro, como seria de se esperar, possui o melhor equipamento do Reinado — senão de Arton! Segundo, possui o reforço de duas tropas de elite: os forjadores e os trovejantes. Os primeiros são soldados-armeiros que, além de serem combatentes capazes, mantêm as armas de suas unidades sempre nas melhores condições. Já os segundos são inventores especializados em bombas e outras armas alquímicas.\nTradicionalmente, zakharovianos não são especialmente belicosos — gostam de armas, mas as veem mais como obras de arte do que como ferramentas de morte. Desde a Guerra Artoniana, porém, o reino tem se tornado cada vez mais militarista. Alguns veem isso como algo necessário para que o Reinado se defenda da Supremacia Purista. Outros são mais pessimistas e temem que o Zakharov esteja trilhando o mesmo caminho do antigo Reino de Yudennach.",
        },
        {
          title: "Pondsmânia",
          content:
            "Como quase tudo no Reino das Fadas, a existência de um exército feérico depende do humor da Rainha. Atualmente em sua fase de Donzela, Thantalla está mais interessada em jogos e bailes do que em guerras, o que faz com que a Pondsmânia não tenha uma força militar permanente, com exceção das fadas guerreiras da casa Aghmawor.\nIsso não significa que o reino seja indefeso. Anos atrás, quando Crânio Negro marchou pela Pondsmânia, tropas feéricas enfrentaram a horda aberrante do algoz da Tormenta. Eram compostas por cavaleiros montados em gamos e equipados com armaduras de esmeralda e sabres de diamante, poderosas árvores vivas e duendes variados com poderes mais variados ainda.\nAcima de tudo, a Pondsmânia conta com a Caçada Selvagem. Liderada pelo Rei das Fadas — um humanoide imenso, de peito musculoso e galhada enorme e pontiaguda — contém cães com olhos de fogo e caçadores com lanças negras. Não é sabido como e se a Rainha pode invocar a Caçada Selvagem, mas sabe-se que poucas tropas mortais podem resistir a ela.",
        },
      ],
    },
  ],
},
];

export const organizations: Organization[] = [
  ...comOrigem("Nome da Revista 000", exemploRevista),
  ...comOrigem("Nome do Livro, cap. 0", exemploLivro, "Categoria Opcional"),
];