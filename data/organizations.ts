import { Organization } from "@/types/organization";

export const organizations: Organization[] = [
  { id: "arautos-do-destruidor",
    name: "Arautos do Destruidor",
    summary:
      "Devotos de Megalokk que caçam os caçadores de monstros, vendo a predação esportiva de feras como uma arrogância da civilização contra as crias do Deus dos Monstros.",
    lore: `Ainda que os monstros de Megalokk estejam entre as criaturas mais perigosas de Arton, algumas organizações decidem desafiar seu poder e inverter a ordem natural das coisas, transformando esses predadores monstruosos em presas e troféus. Os Arautos do Destruidor agem para reverter esse cenário: seu objetivo é (com o perdão da redundância) caçar esses caçadores hereges que acreditam ter o direito de predar as crias do Deus dos Monstros.

Para os Arautos, esse costume crescente não passa de arrogância da civilização. Guildas de caça, expedições e aventureiros em busca de fama começaram a acreditar que monstros não passam de desafios esportivos, recompensas ou troféus. Os Arautos, por outro lado, creem que Megalokk criou esses seres poderosos para dominar e sobreviver — não para adornar muralhas ou alimentar histórias heroicas. É por isso que os integrantes desta organização focam em equilibrar o jogo e colocar esses caçadores pretensiosos no seu verdadeiro lugar: o da caça.

Suas missões começam semanas antes do momento em que atacam de fato. Estudam hábitos, seguem rastros, interceptam informantes e aprendem as rotinas de seus alvos com paciência predatória. Depois vêm os acidentes: provisões desaparecidas, trilhas falsas e monstros enfurecidos atraídos para o caminho errado. Quando o confronto acontece, raramente é honrado. E os Arautos admitem isso sem qualquer vergonha. Emboscadas, ataques noturnos e superioridade numérica são a linguagem natural da caçada; qualquer caçador que se preze deveria se orgulhar disso.

Entre seus membros existem antigos caçadores de monstros que abandonaram suas antigas vidas após testemunhar massacres desnecessários ou a extinção de espécies raras. Outros apenas encontraram no culto uma desculpa conveniente para continuar caçando. Eles não se importam com o abate de feras enlouquecidas ou ameaças difíceis de conter. Seria impossível para a organização proteger toda criatura monstruosa — e isso iria de encontro às próprias crenças de destruição e morte pregadas por devotos de Megalokk. O que os Arautos rejeitam é a ideia de que monstros devam recuar diante da expansão da civilização.

Nas fronteiras selvagens, guias experientes repetem um aviso simples: caçar monstros já é perigoso. Fazer disso um hábito pode atrair a atenção dos desvairados que se escondem entre nós.`,
    membros:
      "Humanoides que causam muito dano, acompanhados por criaturas monstruosas que passaram a obedecer suas ordens; todos com bônus elevados em Furtividade, Investigação e Sobrevivência, além de habilidades que melhorem suas capacidades de rastreio e destruição.",
    comoUsar:
      "Vilões. Um grupo de aventureiros contratado para eliminar monstros desapareceu sem deixar rastros. Investigações mais minuciosas podem revelar uma verdade inquietante: os caçadores se tornaram as presas, e não do alvo que procuravam, mas de devotos fervorosos do Deus dos Monstros.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Arco dos Arautos",
      description:
        "Arma favorita dos Arautos do Destruidor, este arco longo cruel e preciso pode ser encontrado por qualquer aventureiro que vasculhe os equipamentos de um membro desta organização. Você recebe a habilidade Marca da Presa do caçador, mas só pode usá-la com esta arma. Se já possui essa habilidade, em vez disso, o custo para usá-la com esta arma diminui em –1 PM. Arma específica média, preço T$ 39.100.",
    },
  },
  { id: "caravana-das-tres-chamas",
    name: "Caravana das Três Chamas",
    summary:
      "Escola itinerante fundada por três irmãos magos de Wynlla, que viaja pelo Reinado levando ensinamentos arcanos básicos a quem quiser aprender, sem academias ou linhagens restritivas.",
    lore: `A magia surge de várias formas em Arton. Alguns nascem com aptidões mágicas. Outros podem lançar magias através de itens. E há aqueles cuja magia advém do acúmulo de conhecimento — para os mais egocêntricos entre estes, saber arcano deveria ser mantido atrás de muralhas, dentro de laboratórios privados ou bibliotecas de difícil acesso e compreensão.

Contra essa visão de mundo, três irmãos magos nascidos em Wynlla — Thellius, Aphandra e Mallett — se reuniram para fundar a Caravana das Três Chamas. Esta escola itinerante percorre as estradas do Reinado levando ensinamentos arcanos básicos para qualquer um disposto a aprender. Hoje composta por diversos magos, escribas e sacerdotes, a caravana acredita que magia não deve ficar presa a uma casta específica, a academias restritivas ou àqueles cuja linhagem é encantada. Afinal, Wynna presenteou o mundo inteiro com ela.

Quando seus fundadores decidiram começar a viajar por Arton, os três compartilhavam uma preocupação comum: incontáveis pessoas com a promessa de um futuro arcano brilhante deixavam de descobrir seu potencial ou acabavam atraídas por práticas perigosas por falta de orientação. Assim, em vez de viver em suas torres e esperar que candidatos a aprendizes os procurassem, decidiram levar o conhecimento até eles.

A escola não possui sede permanente. Viaja com uma série de carroças coloridas adaptadas como salas de aula, bibliotecas e pequenos laboratórios. Quando chega a uma comunidade, instala tendas e inicia um curto período de atividades abertas ao público. As lições oferecidas não envolvem magias poderosas ou segredos restritos. A Caravana ensina fundamentos: segurança arcana, leitura de runas simples, história da magia e pequenos truques capazes de despertar afinidade e disciplina. Para muitos alunos, trata-se apenas de curiosidade passageira. Para outros, é o primeiro passo rumo à vida arcana.

Devotos de Wynna em comunidades isoladas frequentemente celebram a chegada da Caravana das Três Chamas. Enquanto isso, alguns círculos acadêmicos e magos mais tradicionalistas consideram-na uma organização indulgente, acusando-a de banalizar conhecimentos que deveriam permanecer sob tutela rigorosa. Os membros respondem com serenidade. Para eles, ignorância só produz mais ignorância.

Os três irmãos tinham um lema quanto a isso, que reverbera pelos alunos muito tempo depois da caravana deixar um local: "uma chama compartilhada nunca perde seu brilho". Se você estiver num lugar repleto de curiosidade, talento adormecido ou medo da magia, a Caravana das Três Chamas talvez já esteja a caminho.`,
    membros:
      "Quaisquer criaturas capazes de ensinar magia podem representar professores desta organização, em especial aqueles com bônus elevados de Misticismo e habilidades como as da distinção professor de magia (Heróis de Arton, pp. 205–207).",
    comoUsar:
      "Aliados. No início de uma campanha com muita presença de magia arcana, a Caravana das Três Chamas se instala temporariamente no vilarejo onde os aventureiros estão, atraindo curiosos e aspirantes a conjuradores. Quando um dos grimórios de sua biblioteca desaparece, os professores pedem aos heróis que os ajudem a encontrá-lo antes que caia em mãos erradas — ou pior: que seja usado erroneamente por alguém inexperiente.",
    mecanica: {
      kind: "Novo Poder de Destino",
      name: "Certificado de Conclusão",
      description:
        "Especial: após passar um mês estudando na Caravana das Três Chamas, você recebe este poder. Essa é a única forma de adquiri-lo. Você recebe +1 PM e pode lançar uma das magias a seguir (atributo-chave Inteligência) à sua escolha: Alarme, Aviso, Criar Elementos e Luz; mas não pode aplicar aprimoramentos. Caso aprenda novamente uma dessas magias, seu custo diminui em –1 PM e você passa a conseguir aplicar aprimoramentos normalmente.",
    },
  },
  { id: "casa-dos-desgarrados",
    name: "Casa dos Desgarrados",
    summary:
      "Enquanto a maioria dos devotos de Khalmyr se dedica à lei e ao julgamento, os integrantes deste local focam seus esforços em oferecer clemência, perdão e redenção.",
    lore: `Uma organização relativamente altruísta, a Casa dos Desgarrados é um local único de Arton. Enquanto a maioria dos devotos de Khalmyr se dedica à lei e ao julgamento, os integrantes deste local focam seus esforços naquilo que acreditam ser mais importante no ethos do Deus da Justiça: oferecer clemência, perdão e redenção.

Esta organização surgiu a partir da observação de um problema comum em Arton. Criaturas cuja natureza costuma ser maligna, pessoas possuídas, vítimas de maldições ou indivíduos sob influência extraplanar frequentemente são condenados sem uma verdadeira oportunidade de se redimir. Para os membros da Casa, isso é diferente de justiça, pois não passa de medo vestido de autoridade. Por isso, a organização passou a ser vista como a última chance daqueles que um dia se perderam.

Sediadas numa mansão no sudoeste das Repúblicas Livres de Sambúrdia, as dependências da Casa dos Desgarrados compreendem um hospital, um tribunal sagrado e um centro de reabilitação. Para lá são levados licantropos incapazes de controlar sua maldição, indivíduos supostamente possuídos, vítimas de corrupção mágica, monstros cuja natureza levanta dúvidas morais e quaisquer criaturas em situação semelhante.

Trabalhadores do local chamam isso de libertação. Tal prática, naturalmente, gera controvérsia. Tudo fica ainda mais nebuloso quando se descobre que o processo de purificação empregado pela Casa dos Desgarrados segue uma metodologia secreta. Apenas os membros mais graduados dentro da organização podem realizar as sessões de reabilitação — e somente a eles esse segredo é confiado.

Muitos devotos mais rígidos de Khalmyr consideram a organização excessivamente indulgente. Outros a acusam de ingenuidade, afirmando que certas criaturas não merecem misericórdia. Ainda assim, a Casa dos Desgarrados mantém sua posição: deve haver deliberação conforme as leis, mas vereditos mais drásticos devem ser aplicados somente quando (e se) o indivíduo não for reabilitado pelo local.

Isso não significa pacifismo cego. Seus membros são treinados para enfrentar entidades malignas e realizar exorcismos e rituais de purificação quando necessário. Contudo, acreditam que destruir aquilo que poderia ser salvo é a maior falha na justiça mortal.`,
    membros:
      "Juízes, clérigos, frades e paladinos de Khalmyr, com habilidades de cura, proteção e investigação; caso seja relevante para a aventura, vale a pena conceder habilidades relacionadas a exorcismo ou purificações que façam sentido.",
    comoUsar:
      "Neutros. Integrantes da organização recebem um indivíduo cruel e inescrupuloso, mas que supostamente está sob influência demoníaca. Uma procissão o seguiu até a Casa dos Desgarrados alegando que não há possessão alguma e o destino dele deve ser a forca. Os aventureiros são convocados para intervir e mediar a situação; será mesmo possível redimir alguém tão execrável?",
    mecanica: {
      kind: "Novo Parceiro",
      name: "Reabilitador",
      description:
        "É possível encaminhar uma solicitação formal para a Casa dos Desgarrados com o objetivo de contratar um de seus reabilitadores — juízes com treinamento especial para espalhar a justiça de Khalmyr, equilibrando as chances de todos os presentes, como uma ferramenta por meio da qual o Deus da Justiça em pessoa realiza o julgamento — por T$ 1.000. Um reabilitador é um parceiro especial que acompanha o grupo de personagens até o fim da aventura. Durante uma cena à escolha dos jogadores, ele faz todos os modificadores serem iguais à média dos modificadores de todas as criaturas presentes. No final da cena, o reabilitador se despede do grupo e retorna para a Casa dos Desgarrados.",
    },
  },
  { id: "o-claviculario",
    name: "O Claviculário",
    image: "/mundo/orgs/o-claviculario.png",
    summary:
      "Uma organização dedicada a Sszzaas que oferece um serviço de “custódia” mística, guardando segredos, crimes e verdades inconfessáveis até que sejam reclamados ou revelados.",
    lore: `A maioria dos devotos de Sszzaas dedica-se à intriga, ao veneno e à traição. Já os membros do Claviculário seguem outro caminho — embora não possam ser considerados menos perigosos por isso. Para eles, segredos são mais valiosos que tudo. Culpa, amor proibido, crimes, fórmulas secretas, nomes esquecidos e verdades inconfessáveis são fardos capazes de moldar destinos, adoecer espíritos e destruir vidas. Por isso, o Claviculário oferece um serviço que chamam de “custódia”.

O ritual é simples, mas cercado de solenidade. O confidente entrega por vontade própria um segredo a um claviculário, como são chamados os membros da ordem, geralmente diante do símbolo sagrado da organização: uma chave ornamentada, representando aquilo que tanto tranca quanto revela. Uma vez aceito, o segredo desaparece da memória do indivíduo. Para muitos, isso representa libertação. Aquilo que foi entregue permanece sob a tutela do Claviculário até que seja reclamado novamente – o indivíduo sabe que entregou um segredo, só não se lembra mais o que foi.

Governantes entregam o remorso por seus atos escusos. Casais ocultam suas relações proibidas. Espiões preservam informações sensíveis sem risco de serem descobertas por meio de tortura ou magias de encantamento. Alguns até mesmo procuram os claviculários para silenciar dores profundas demais para que o esquecimento surja sozinho.

Os claviculários afirmam que segredos entregues lhes pertencem apenas enquanto o confidente não os retomar, mas também reivindicam o princípio do direito divino de revelação. Segundo tal doutrina, Sszzaas concede à organização autoridade para expor um segredo quando sua ocultação ameaça interesses maiores — ou quando o próprio deus assim desejar. O que define esse momento, porém, raramente é claro.

É por isso que o Claviculário ocupa uma posição ambígua em Arton. São procurados por reis, criminosos e aventureiros, mas também por informantes, espiões e investigadores. Sempre escusos. Jamais plenamente confiáveis. Seus santuários funcionam como arquivos vivos, onde cada segredo repousa aguardando retorno, revelação – ou algum uso por uma causa maior.`,
    membros:
      "Humanoides de qualquer classe que tenham habilidades relacionadas à manipulação e investigação, com bônus altos de Enganação, Intuição, Investigação e Misticismo.",
    comoUsar:
      "Neutros. Quando um nobre falecido deixa pistas indicando que a chave para sua herança foi confiada ao Claviculário, os aventureiros são pegos em uma busca pelo local dessa organização, e então pelo trabalho complicado de convencer seus integrantes de que eles, não um grupo rival, têm o direito divino de receber esse segredo. Em outros casos, podem ser contratados para impedir que um dos membros exerça seu direito de revelação, pois o contratante acredita que isso causará uma catástrofe sem igual.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Chave Mestra",
      description:
        "Uma chave carregada pelos membros do Claviculário como um símbolo sagrado, este item mágico também é capaz de destrancar qualquer coisa, concedendo sucesso automático em testes de Ladinagem para abrir fechaduras. Contudo, se não for usada por um dos membros do Claviculário ou por um devoto de Sszzaas, um efeito mágico sobre seu material é ativado, reduzindo a Chave Mestra a pó após o primeiro uso. Acessório médio, preço T$ 25.500.",
    },
  },
  { id: "companhia-teatral-valluk-delsori",
    name: "Companhia Teatral Valluk Delsori",
    summary:
      "Devotos não declarados de Nimb, os membros da companhia teatral percorrem cidades, vilas e estradas apresentando peças extravagantes, absurdas e deliberadamente incorretas.",
    lore: `Esta companhia itinerante não tem qualquer interesse por prestígio ou preservação histórica… ou será que tem? Devotos não declarados (jamais declarados!) de Nimb, os membros da companhia teatral percorrem cidades, vilas e estradas apresentando peças extravagantes, absurdas e deliberadamente incorretas. Reis aparecem vestidos como pescadores. Batalhas históricas terminam em casamentos improváveis. Heróis lendários trocam discursos épicos por números musicais improvisados. Aliados históricos são representados como inimigos ferrenhos. Não importa quem esteja sendo retratado, sempre algum pequeno detalhe estará fora de lugar. Quanto maior o disparate, melhor. Para esses artistas desvairados, a história oficial pouco importa. O principal é o caos gerado pela desinformação de cada peça, para o agrado do Deus do Caos.

A origem do grupo é tão contraditória quanto suas apresentações. Algumas versões afirmam que surgiu de um festival arruinado por um dado mágico com desenhos nas faces. Outras dizem que são a união de um conjunto de artistas expulsos de várias cortes por “excessiva criatividade”. Os próprios integrantes costumam oferecer relatos incompatíveis entre si, frequentemente mudando de versão no meio da conversa. E, mais do que isso, ninguém tem ideia de quem foi ou é Valluk Delsori.

A companhia não tem liderança fixa nem repertório definitivo. Papéis mudam o tempo todo, roteiros são reescritos durante os ensaios e apresentações podem terminar de forma diferente a cada noite.

Existe um estranho talento coletivo por trás do aparente descontrole, mas isso não significa compromisso com verdade ou justiça. A companhia busca diversão e caos acima de tudo. Satirizar tiranos e ridicularizar heróis respeitados; ou transformar tragédia em comédia sem qualquer pudor — é isso que move seus integrantes.`,
    membros:
      "Qualquer humanoide (e até mesmo alguns animais, espíritos e monstros) pode fazer parte da companhia, especialmente bardos e outros tipos de artistas.",
    comoUsar:
      "Neutros? A caravana chega a uma cidade e anuncia uma grande apresentação sobre um evento histórico — para horror das autoridades! Quando a peça provoca tumulto e a ira dos nobres retratados de forma ridícula, os heróis são contratados para proteger os artistas.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Bilhete de Valluk Delsori",
      description:
        "Este item mágico é concedido apenas àqueles que conseguirem descobrir onde a companhia irá se apresentar e consigam assistir a cinco de suas apresentações seguidas. Rasgar o bilhete (como se faz ao entrar para assistir a um espetáculo) permite que o usuário se transforme em uma das grandes figuras de Arton — como o herói Orion Drake ou a própria Rainha-Imperatriz Shivara I —, mas com uma característica diferente da verdadeira pessoa. Você poderia, por exemplo, se transformar em sir Alenn Toren, mas seu tapa-olho estaria no olho esquerdo, em vez do direito. Este efeito funciona como a magia Disfarce Ilusório, com direito ao aprimoramento que aumenta o bônus de Enganação para +20 e duração de 1 dia. Item mágico de uso único, preço T$ 300.",
    },
  },
  { id: "confraria-dourada",
    name: "Confraria Dourada",
    image: "/mundo/orgs/confraria-dourada.png",
    summary:
      "Uma guilda de ladrões religiosos que consideram-se restauradores da ordem natural das riquezas: todo ouro acumulado deve ser redirecionado para usos mais dignos em nome de Azgher.",
    lore: `Azgher é um deus tão benevolente quanto rigoroso. Portanto, é comum que seus devotos sigam caminhos considerados honrados ou justos, como os de heróis e paladinos. A Confraria Dourada, contudo, segue por outro caminho. Para seus integrantes, o aspecto mais sagrado do Deus-Sol não está no combate às trevas, mas no ouro: metal que eles acreditam carregar o brilho e a perfeição do próprio deus. Segundo a filosofia da Confraria, todo ouro pertence à sua divindade patrona. Não importa qual formato os mortais deram a ele (sejam moedas, joias ou revestimento de itens valiosos), todo ouro é apenas um fragmento temporariamente afastado de sua origem divina. Por isso, repetem um antigo lema: “Se todo ouro vem de Azgher, então todo ouro deve voltar a ele”.

Essa crença foi o que construiu esta guilda de ladrões religiosos, embora seus membros raras vezes vejam a si mesmos dessa forma. Consideram-se restauradores da ordem natural das riquezas: todo ouro acumulado por tiranos e autoridades corruptas deve ser tomado e redirecionado para usos mais dignos — em geral para templos de Azgher, a causas defendidas pela Confraria ou, com uma frequência nada modesta, aos próprios cofres da organização.

A organização possui células escondidas em centros comerciais, rotas mercantes e locais de riqueza. Seus integrantes costumam ser ladinos, espiões e aventureiros interessados em infiltração, disfarces e roubos bem planejados. Embora saibam lutar quando necessário, preferem golpes elegantes e furtivos a confrontos sangrentos.

Muitos membros veneram Fin Zandim, o lendário Príncipe dos Ladrões, como símbolo da ousadia, astúcia e engenhosidade necessárias àqueles que vivem entre fechaduras e cofres. Não interessa se as histórias sobre ele são verdadeiras ou folclóricas. Para a Confraria Dourada, o que importa é aquilo que elas ensinam: como sobreviver às sagradas incursões em busca do ouro de Azgher.

Essa devoção cria uma relação curiosa com o restante dos seguidores do Deus-Sol. Alguns sacerdotes condenam a Confraria como oportunistas que usam a fé para justificar crimes. Outros enxergam nela um mal necessário, capaz de remover riquezas das mãos erradas quando a justiça formal fracassa.

A Confraria Dourada raramente deseja destruir ou matar. Seu interesse é simples, direto e brilhante como o próprio sol: encontrar ouro, reivindicá-lo em nome de Azgher e garantir que seu brilho jamais permaneça muito tempo nas mãos erradas.`,
    membros:
      "Praticamente qualquer humanoide com habilidades de infiltração, furtividade e roubo pode representar um integrante da Confraria Dourada, basta ter devoção a Azgher e um de seus poderes concedidos.",
    comoUsar:
      "Rivais. Uma antiga relíquia de ouro desapareceu dos cofres de um mercador pouco antes do evento em que seria leiloada. O comerciante contratou aventureiros para rastrear os ladrões mascarados que roubaram o item.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Máscara do Sol Dourado",
      description:
        "Uma máscara amarela com o desenho de um sorriso e dois tibares de ouro no lugar dos olhos, adornados com raios solares em laranja. Enquanto seguir as Obrigações & Restrições de Azgher, as moedas mágicas que substituem os olhos da máscara fornecem +10 em Ladinagem. Contudo, por ser chamativo demais, uma pessoa vestindo este item recebe –2 em Furtividade. Acessório menor, preço T$ 9.000.",
    },
  },
  { id: "criancas-de-aharadak",
    name: "Crianças de Aharadak",
    summary:
      "Um grupo de órfãos deixados num templo em Ahar’kadham, entregues para serem criados por um reishid encarregado de espalhar o culto ao Deus da Tormenta por Arton.",
    lore: `Os lefeu capturam e abduzem pessoas sem distinção de raça ou idade, mas o que acontece quando as máculas da Tempestade Rubra corrompem a mente fértil e curiosa de uma criança? Uma das respostas está numa das incontáveis tragédias causadas pela Tormenta: um grupo de órfãos deixados num templo em Ahar’kadham — a cidade coberta por matéria vermelha em Zakharov —, entregues para serem criados por um reishid, um lefeu encarregado de espalhar o culto ao Deus da Tormenta por Arton.

É assim que essas crianças conhecem Aharadak. Ao contrário de muitos cultos da Tormenta, elas passaram a servir à divindade não após serem consumidas pela insanidade, mas por acreditarem que ele foi quem as salvou.

Nas histórias que os órfãos repetem como cantigas infantis, Aharadak é retratado como um pai gentil que acolhe os rejeitados. Ele parece ter oferecido a estes jovens seguidores algo que acreditam ter sido negado pelo restante de Arton: pertencimento.

Com o tempo, essa devoção transformou-se em uma visão de mundo perigosa. As Crianças de Aharadak (pois assim passaram a ser chamadas nas lendas sobre sua existência) enxergam o chamado “mundo dos adultos” como a verdadeira origem do seu sofrimento. Reis iniciam guerras. Nobres exploram os fracos. Mercadores enriquecem enquanto outros passam fome. Mesmo os heróis, tão celebrados, nunca conseguem salvar a todos. Se tudo é assim tão cruel, concluem elas, então este mundo está errado.

Para os órfãos, a Tormenta é reparação, conserto e correção. É a ferramenta capaz de apagar uma realidade falha e substituí-la por algo novo. Algo melhor. Cada pesadelo provocado e cada comunidade levada ao desespero são vistos como um pequeno passo nessa direção.

Integrantes viajam em grupos discretos, apresentando-se como refugiados, mendigos ou apenas crianças perdidas. Oculto, levam o Pingente Rubro, um colar de matéria vermelha que usam como símbolo sagrado, uma representação da proteção e do afeto de seu deus. Enquanto forem jovens — algo que a Tormenta parece fazer durar por mais tempo do que deveria — e permanecerem fiéis aos desígnios de Aharadak, o pingente ameniza qualquer sofrimento causado pela Tempestade Rubra.

Depois de se infiltrar nos povoados, iniciam seus rituais discretamente. Durante a noite, entoam cânticos compostos por palavras que parecem infantis ou desconexas, mas escondem o ritmo impossível da Tormenta. Após algumas semanas, os moradores passam a ser acometidos por pesadelos perturbadores, que causam medo, exaustão e paranoia.

Quando as Crianças de Aharadak finalmente partem, deixam para trás uma comunidade à beira do colapso. Em seus corações, acreditam ter realizado uma boa ação.`,
    membros:
      "Crianças humanoides devotas de Aharadak, todos com resistência a efeitos lefeu e da Tormenta +10; se tiver acesso a Heróis de Arton, aplique os efeitos de idade variada para a faixa etária criança.",
    comoUsar:
      "Vilões. Integrantes desta organização surgem em vilarejos isolados, onde provocam pesadelos e enfraquecem o espírito das pessoas. Se heróis forem chamados para descobrir o problema de um local sofrendo de insônia e paranoia, podem acabar descobrindo que as Crianças de Aharadak são as responsáveis.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Pingente Rubro",
      description:
        "Este colar de matéria vermelha é estranho e parece estar sempre mudando de forma. Enquanto seguir as Obrigações & Restrições de Aharadak, sendo devoto ou não, você reduz a perda de PM causada por efeitos lefeu e da Tormenta em –1 PM por patamar. Acessório menor, preço T$ 3.000.",
    },
  },
  { id: "fadas-do-jardim-secreto",
    name: "Fadas do Jardim Secreto",
    image: "/mundo/orgs/fadas-do-jardim-secreto.png",
    summary:
      "Numa floresta secreta dos Feudos de Trebuck, floresce uma fraternidade de feéricos botânicos e herbalistas devotos de Allihanna que se dedica a estudar os segredos espirituais da natureza.",
    lore: `Numa floresta secreta dos Feudos de Trebuck, ao norte da Pondsmânia, floresce uma fraternidade de feéricos botânicos e herbalistas devotos de Allihanna que se dedica a estudar os segredos espirituais da natureza. Embora muitos os confundam com simples alquimistas ou comerciantes de ervas, suas práticas vão muito além da cura ou da preparação de remédios. Essas fadas acreditam que toda planta carrega consigo ecos do espírito do ambiente onde cresceu. Se uma flor desabrocha sob a luz da lua, uma raiz é alimentada por águas antigas ou um fungo surge entre pedras ancestrais, terá diferentes características mágicas. Seu trabalho consiste em compreender esses aspectos e transformá-los em fórmulas capazes de estreitar as relações entre mortais e espíritos da natureza.

A origem da organização é tão incerta quanto seu local exato. Algumas histórias afirmam que surgiu entre druidas do Reino das Fadas; outras atribuem sua fundação a uma linhagem ancestral de fadas da antiga Floresta de Tollon. As próprias sílfides têm pouco interesse pela precisão histórica. Para elas, importa apenas que seus ensinamentos sejam preservados e transmitidos com responsabilidade.

Apesar do nome, a organização não é formada apenas por mulheres; está aberta a todos os feéricos que desejam aprender a ouvir a natureza sem dominá-la. Seus membros costumam usar roupas simples, adornadas por folhas, sementes e símbolos vegetais.

As Fadas do Jardim Secreto são pacíficas, evitam conflitos sempre que possível e preferem negociar, curar ou afastar-se da violência. Contudo, essa postura não deve ser confundida com ingenuidade. Elas conhecem o valor de suas descobertas, bem como os perigos que representam. Suas fórmulas são cobiçadas por alquimistas sem escrúpulos, traficantes de substâncias raras e cultistas interessados em distorcer forças naturais. Misturas criadas para acalmar espíritos podem ser alteradas para escravizá-los. Essências destinadas à cura podem ser convertidas em venenos sutis. Por isso, as fadas guardam seu conhecimento em um jardim secreto protegido por magia, enigmas naturais e aliados feéricos.

Aqueles que conquistam sua confiança recebem mais que hospitalidade. Realizar uma tarefa em favor das Fadas do Jardim Secreto — como proteger uma floresta, recuperar um ingrediente raro ou impedir o abuso de uma fórmula roubada — costuma ser recompensado com um de seus maiores tesouros: uma poção especial capaz de criar um vínculo com um pequenino espírito feérico: os allihennali.`,
    membros:
      "Duendes, sátiros e sílfides alquimistas, clérigos, druidas ou frades de Allihanna, todos com pelo menos 1d6 poções disponíveis para comercializar.",
    comoUsar:
      "Aliados. Integrantes desta organização raramente pedem ajuda sem motivo. Quando uma das fadas foi capturada em Trebuck, as Fadas do Jardim Secreto rapidamente entraram em contato com aventureiros que poderiam descobrir para onde ela foi levada.",
    mecanica: {
      kind: "Novo Parceiro",
      name: "Allihennali",
      description:
        "Estes espíritos feéricos lembram uma pequena esfera de luz com quatro asas finas de inseto. Um allihennali parceiro fornece os benefícios a seguir. Iniciante: uma vez por rodada, você pode gastar 1 PM para curar 2d6 PV de uma criatura em alcance curto. Veterano: como acima, mas também reduz o custo de magias que geram efeitos mágicos de cura em –2 PM. Mestre: como acima, mas você também pode gastar 3 PM para curar 6d6 PV.",
    },
  },
  { id: "herdeiros-da-escama",
    name: "Herdeiros da Escama",
    image: "/mundo/orgs/herdeiros-da-escama.png",
    summary:
      "Os Herdeiros da Escama vivem sob uma ótica tão direta quanto perigosa. Para eles, dragões são o exemplo do potencial máximo.",
    lore: `Os Herdeiros da Escama vivem sob uma ótica tão direta quanto perigosa. Para eles, dragões são o exemplo do potencial máximo. Majestosos, temidos e soberanos, representam a vitória absoluta. Os Herdeiros creem que o epítome da devoção a Kallyadranoch está na busca por aperfeiçoamento e ascensão.

A organização reúne indivíduos em busca de aflorar sua ascendência dracônica. Em alguns casos, essa herança é literal: são kallyanach, feiticeiros dracônicos e raros kobolds. Em outros, não passa de convicção espiritual. Os Herdeiros desejam alcançar a perfeição e o poder dos dragões, pouco importam os meios.

Costumam se reunir em pequenos grupos que operam em regiões onde dragões são mais presentes, como em Sckharshantallas, nas Uivantes ou nas Sanguinárias. Cada grupo tem seus próprios métodos. Alguns estudam magia ancestral e linhagens com sangue de dragão. Outros procuram ovos fossilizados, escamas mágicas e covis abandonados. Há, também, aqueles que conduzem rituais perigosos e experimentos destinados a despertar traços dracônicos. Os Herdeiros da Escama não são um culto unificado, mas todos compartilham uma certeza absoluta: poder não é algo que se recebe, mas que se conquista.

Por isso, admiram liderança e excelência, desprezando complacência, compaixão e fraqueza. São conjuradores, megalomaníacos e outros tipos variados de devotos do Deus dos Dragões, obcecados por tornar-se a versão mais poderosa de si mesmos. Cada membro acredita piamente ser mais digno que qualquer outro, mas isso não impede que sirva a alguém mais poderoso enquanto planeja a melhor forma de sobrepujá-lo.

Herdeiros interpretam vitórias como confirmação de superioridade e derrotas como prova de inadequação. Em um mundo povoado por lendas dracônicas, poucos grupos perseguem o poder com tanta devoção ou acreditam merecê-lo com tamanha arrogância.`,
    membros:
      "Dracomantes, feiticeiros dracônicos, kallyanach, kobolds e devotos de Kallyadranoch, todos com as estatísticas mais altas do ND equivalente ao nível do grupo — essa galera é osso duro de roer —; todas as fichas da seção “Igreja de Kallyadranoch” (Ameaças de Arton, pp. 144–153) representam bem este grupo.",
    comoUsar:
      "Vilões. Integrantes desta organização veem artefatos, relíquias e magia dracônica como seu direito legítimo. No sopé das Sanguinárias, aventureiros ouvem um pedido de socorro, então sentem cheiro de fumaça e carne queimando. Caso se aproximem, vão encontrar um kallyanach incendiando um pequeno vilarejo. Berrando impropérios, ele diz ser o verdadeiro senhor do local — seu sangue é de dragão, afinal.",
    mecanica: {
      kind: "Novo Item Geral",
      name: "Alma de Dragão",
      description:
        "Uma pedra translúcida, no formato de uma escama de dragão e do tamanho de um punho fechado, que faz parte das posses de todos os Herdeiros da Escama. Quando sofrer dano de um dos tipos a seguir, você pode reduzir o dano sofrido em um dado como uma reação. Então este item deixa de ser translúcido e armazena a energia do dano, tomando a aparência de uma pedra preciosa: diamante (luz), esmeralda (ácido), ônix (trevas), rubi (fogo), safira (frio) ou topázio (eletricidade). Quando lança uma magia que causa dano do tipo da pedra preciosa enquanto tiver uma energia armazenada, você pode descarregar essa energia como uma ação livre para aumentar o dano em um dado do mesmo tipo. Após descarregar a energia, a pedra volta a ser translúcida e precisa armazenar energia outra vez antes de ser usada novamente. Item esotérico, preço T$ 250.",
    },
  },
  { id: "hoshikage",
    name: "Hoshikage",
    image: "/mundo/orgs/hoshikage.png",
    summary:
      "Conhecidos entre as pessoas da casta de trabalhadores em Tamu-ra (os “shimin”) como “ninjas da Constelação”, estes agentes surgiram como dissidência do antigo Ferrão.",
    lore: `Conhecidos entre as pessoas da casta de trabalhadores em Tamu-ra (os “shimin”) como “ninjas da Constelação”, estes agentes surgiram como dissidência do antigo Ferrão — clã ninja mais poderoso e antigo do Império de Jade — durante a Grande Unificação. Enquanto outros clãs cultivavam métodos escusos e repletos de desonra, a Constelação seguiu outro ideal: servir não a senhores particulares, mas ao futuro de Tamu-ra.

Os próprios membros descrevem sua função por meio de uma metáfora. Enquanto samurais são o sol — visíveis, inspiradores e destinados a agir diante do mundo —, ninjas pertencem à noite, como estrelas vistas apenas na escuridão. Não competem com a luz da honra, mas ajudam-na a existir e perdurar. Essa visão tornou-se ainda mais importante durante a Era Hikari, quando adotaram de fato o nome “Hoshikage” (que significa algo como “sombra das estrelas”).

Ninjas da Constelação acreditam que a nova Tamu-ra representa algo precioso demais para ser abandonado à própria sorte. Contra seus inimigos, a honra precisa de agentes ocultos.

Por isso, a Constelação opera discretamente. Boatos dizem que são acompanhados por estranhos animais mascarados, algo que contribui para a crença popular de que este clã não existe — esta lenda urbana começou a ser disseminada por nativos de Nitamu-ra e retrata integrantes com posições de maior prestígio na hierarquia da organização atuando com o auxílio de guaxinins treinados nos métodos furtivos do clã, os “araiguma ninja” (traduzido para valkar como “guaxininja”).

O trabalho dos Hoshikage inclui investigar a corrupção, silenciar conspiradores perigosos e evitar tragédias antes que se tornem crises ou chamem muita atenção. A maioria de suas vitórias jamais é reconhecida, mas essa é uma invisibilidade deliberada.

Um samurai tradicional dificilmente aceitaria auxílio de um ninja. Os membros da Constelação consideram isso irrelevante. Para eles, a honra não depende de reconhecimento público, mas daquilo que se escolhe proteger.

Os shimin acreditam que isso não passa de lendas para assustar crianças, mas há quem diga que esses ninjas deixam marcas de sua presença após missões decisivas. Ninguém, contudo, sabe reconhecer esses símbolos e eles funcionam mais como mensagens secretas para agentes do clã. São pouquíssimas as outras pessoas que compreendem seu significado. Eles preferem assim. Afinal, estrelas não pedem aplausos quando surgem para iluminar a noite.`,
    membros:
      "Humanoides de diversas raças nativas de Tamu-ra, em especial mashin e nezumi, são ótimos para representar esta organização; se tiver acesso a Ameaças de Arton, você pode usar as fichas da seção do “Império de Jade” (pp. 154–167).",
    comoUsar:
      "Neutros. Numa campanha ambientada em Tamu-ra, os aventureiros podem descobrir que vêm sendo usados como ferramenta por tradicionalistas, yakuza e outras figuras de honra ainda menor. Caso desejem se redimir, podem acabar se deparando com agentes desta organização — se estarão lá para ajudá-los ou não, só o tempo poderá dizer.",
    mecanica: {
      kind: "Novo Parceiro",
      name: "Guaxininjas",
      description:
        "Não se sabe ao certo se é possível treinar guaxinins comuns para desempenharem o papel de guaxininjas, mas acredita-se que eles seriam um parceiro capanga especial que fornece os benefícios descritos a seguir. Uma vez por aventura, você pode gastar uma ação de movimento e 2 PM para fazer um assovio e invocar 1d4+1 guaxininjas capangas em espaços desocupados em alcance curto — eles surgem de um beco próximo, por trás de uma pedra ou de maneiras igualmente furtivas. Guaxininjas têm deslocamento 9m, Defesa 17, dano 1d4 de corte cada e Ataque Furtivo +1d6. Eles desaparecem quando morrem ou no fim da cena (veja mais sobre capangas em Heróis de Arton, pp. 240–241).",
    },
  },
  { id: "hoste-naufragista",
    name: "Hoste Naufragista",
    summary:
      "Estes piratas religiosos são devotos fervorosos de Oceano e percorrem as águas de Arton para louvar o mar como um deus faminto e majestoso.",
    lore: `Nem todo pirata navega buscando riquezas. Os membros da Hoste Naufragista, por exemplo, têm um objetivo muito mais divino. Estes piratas religiosos são devotos fervorosos de Oceano e percorrem as águas de Arton para louvar o mar como um deus faminto e majestoso, cuja grandeza não pode ser honrada somente com orações simples ou pequenas oferendas. Para eles, verdadeira devoção exige sacrifício. E poucas coisas têm mais valor que um navio repleto de tesouros.

Suas embarcações são também templo para o Deus dos Mares. Cada tábua, vela e cordame recebe uma manutenção ritualística regular. Membros da tripulação obedecem, com devoção quase cega, às ordens de um capitão que é também um sacerdote.

Os ataques e saques são distintos e peculiares. Diferentemente de corsários comuns, esta tripulação pouco demonstra interesse por pilhagem indiscriminada. Antes de atacar, estudam rotas e escolhem embarcações consideradas dignas de tributo: navios ricos, cargueiros opulentos, frotas mercantes ou embarcações ligadas a indivíduos que possam ter atraído o desafeto do mar de alguma forma. Após vencer a resistência, realizam um ritual de devolução e sacrifício.

Um mínimo da carga é recolhido para sustentar a tripulação e realizar a manutenção do navio sagrado, mas tesouros mais valiosos — como moedas, joias, obras raras e relíquias — são entregues às profundezas junto com a embarcação condenada. Assistir ao naufrágio e festejar enquanto entregam suas oferendas a Oceano é o momento mais sagrado do ritual.

As ondas carregam lendas sobre o surgimento desta devota tripulação do reino-arquipélago de Khubar até os ouvidos de integrantes da Frota Áurea, mas nenhuma foi comprovada. No fim das contas, talvez a Hoste Naufragista seja só mais um retrato da devoção cega que às vezes acomete os artonianos. O que se sabe com certeza é que a Hoste é uma das facções mais ferrenhas na busca pelo Coração do Oceano, na tentativa de trazer o deus de volta a Arton. Talvez tudo isso seja um exagero. Ou talvez o Deus dos Mares apenas cuide bem daqueles que se dedicam a devolver seus presentes.`,
    membros:
      "Piratas, bucaneiros, ladinos e clérigos devotos de Oceano; fichas de piratas da seção “Piratas & Pistoleiros” (Ameaças de Arton, pp. 252–263) representam bem este grupo.",
    comoUsar:
      "Vilões. Mercadores do Mar do Dragão-Rei começam a relatar o desaparecimento de embarcações inteiras. Os sobreviventes descrevem um navio adornado com conchas, tridentes e ondas referentes ao Deus dos Mares. Há um pedido de ajuda numa cidade costeira das Repúblicas Livres de Sambúrdia, bem como uma recompensa pelo capitão da embarcação que supostamente é responsável por afundar esses navios.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Âncora Naufragista",
      description:
        "Um colar com pingente em forma de âncora, tanto a corrente quanto o pingente são feitos de ferro oxidado, é usado como símbolo sagrado por piratas naufragistas. Enquanto seguir as Obrigações & Restrições de Oceano, sempre que oferecer como tributo para a água do mar um item valioso (com valor mínimo de T$ 100), você recebe um benefício a seguir (à sua escolha) durante 1 dia: deslocamento de natação igual ao seu deslocamento terrestre, +5 em Pilotagem, ou resistência a frio e eletricidade 10. Se você recuperar esse tributo, este item perde todos os seus efeitos e evapora como água do mar. Acessório menor, preço T$ 3.000.",
    },
  },
  { id: "lanca-silente",
    name: "Lança Silente",
    summary:
      "Guerreiros, mercenários e campeões famosos estão entre os variados devotos de Arsenal, mas os membros da Lança Silente compreendem a guerra de outro modo.",
    lore: `Guerreiros, mercenários e campeões famosos estão entre os variados devotos de Arsenal, mas os membros da Lança Silente compreendem a guerra de outro modo. Esta organização reúne conselheiros militares, estudiosos e diplomatas dedicados ao uso da guerra como ferramenta de transformação.

Acreditam que a verdadeira força de Arsenal reside na disciplina do conflito bem conduzido, não na violência descontrolada. Para seus membros, guerras são inevitáveis: sempre haverá povos competindo por território e reis disputando influência.

Por isso, dedicam-se a compreender batalhas, campanhas e disputas políticas com precisão quase acadêmica. Estudam antigas derrotas, catalogam táticas e analisam lideranças militares com o mesmo cuidado de um sacerdote que examina escrituras sagradas. Muitos nem sequer possuem treinamento marcial impressionante — alguns, inclusive, nunca foram ao campo de batalha.

É raro que atuem abertamente. Em vez disso, infiltram-se em cortes, conselhos militares, casas nobres e assembleias mercantis. Seus integrantes tornam-se escribas, conselheiros, cronistas ou especialistas contratados para resolver disputas. Uma vez dentro de tais círculos de influência, manipulam as decisões para causar — ou prorrogar — os confrontos.

Isso não significa que busquem destruição gratuita. Os membros da Lança Silente não celebram massacres ou sofrimento desnecessário. Em sua filosofia, guerras mal conduzidas são sinal de incompetência. Seu propósito é garantir que conflitos inevitáveis ocorram com propósito claro, liderança forte e objetivos definidos.

Tal visão lhes rende aliados e inimigos. Governantes expansionistas podem buscar seus conselhos, enquanto diplomatas e pacifistas os enxergam como manipuladores perigosos. Muitos nem mesmo percebem sua presença até que alianças desmoronem ou negociações fracassem por motivos aparentemente triviais.

Os membros da Lança Silente costumam exibir o símbolo sagrado de Arsenal, identificando-se como integrantes da organização por meio de uma prática mais sutil: sempre portam uma arma de haste (pique, lança, azagaia, alabarda…) com uma fita púrpura amarrada próxima à parte afiada.`,
    membros:
      "Humanoides com papel de combate especial, habilidades focadas em diplomacia, manipulação e gerenciamento de tropas, além de bônus altos de Conhecimento, Guerra e Nobreza.",
    comoUsar:
      "Neutros. Quando a tensão entre dois nobres está aumentando cada vez mais, heróis são contratados para descobrir quem está sabotando as negociações de paz — uma investigação que provavelmente vai revelar o trabalho de alguém da Lança Silente.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Arma Silente",
      description:
        "Uma arma silente é o espólio obtido por aqueles que derrotam um membro da Lança Silente. Este item é uma arma (escolha entre alabarda, azagaia, lança, lança de falange, lança montada, machado de haste ou pique) certeira equilibrada formidável de adamante que fornece +5 em testes de Conhecimento, Guerra e Nobreza cujo objetivo seja perpetuar a guerra. Arma específica menor, preço T$ 31.000.",
    },
  },
  { id: "memorialistas",
    name: "Memorialistas",
    summary:
      "Livros queimam, ruínas desmoronam, bibliotecas são saqueadas, reinos desaparecem e idiomas inteiros podem sobreviver apenas na lembrança daqueles que os conheceram. Memorialistas existem para evitar que isso aconteça.",
    lore: `Livros queimam, ruínas desmoronam, bibliotecas são saqueadas, reinos desaparecem e idiomas inteiros podem sobreviver apenas na lembrança daqueles que os conheceram. Memorialistas existem para evitar que isso aconteça.

Em Svalas, ventos antigos castigam muralhas tão jovens quanto este reino. Por isso, poucos visitantes esperam encontrar uma biblioteca dedicada a povos esquecidos. Pouco tempo atrás, após o armistício que marcou o fim da Guerra Artoniana, os Memorialistas reformaram um antigo complexo de pedra para que servisse simultaneamente como biblioteca e centro de pesquisa. Sua existência surpreende até mesmo habitantes locais, pois, nesta terra de fronteiras perigosas e recente liberdade, este lugar insiste em olhar para o passado. Segundo seus estudiosos, isso é deliberado.

Svalas foi um reino erguido com base em antigas tradições. E foram ações como as da Rainha Ayleth, motivadas pelo senso de dever que tinha para com esta terra, que permitiram a estes devotos de Tanna-Toh pesquisar os vestígios de culturas anteriores à vida contemporânea na região. Para eles, ignorar esse passado equivaleria a construir uma casa sem antes erguer suas fundações.

Com o tempo, os Memorialistas começaram a estudar povos originários de todas as regiões de Arton: de culturas desaparecidas a conhecimentos fadados ao esquecimento. Porém, sua principal característica não é a quantidade de livros que preservam, mas a forma como reverenciam o saber.

Eles sabem que arquivos podem ser destruídos. Então parte do conhecimento sob seus cuidados é preservada magicamente na sua memória. Cada Memorialista especializa-se em determinados temas — idiomas antigos, linhagens, mitos, mapas ou tradições orais —, tornando-se responsável por mantê-los vivos e transmiti-los às gerações seguintes.

A biblioteca dos Memorialistas é o epítome dessa filosofia: seus corredores guardam manuscritos e artefatos, mas também salas destinadas à narração, repetição e aprendizado oral. Nem todos apreciam esse trabalho. Colecionadores, saqueadores e autoridades interessadas em controlar interpretações do passado frequentemente entram em conflito com esta organização.`,
    membros:
      "Criaturas com ânsia pela busca de conhecimento, arcanistas, bardos e clérigos de Tanna-Toh; todos com habilidades relacionadas a descobrir informações, bônus elevados em Conhecimento, Investigação e Misticismo, além de acesso à magia Memorizar Conhecimento (veja a seguir).",
    comoUsar:
      "Aliados. Um Memorialista foi capturado por soldados da Supremacia Purista após descobrir conhecimentos antigos sobre o reino de Yudennach. O conselho que lidera a biblioteca pede que os aventureiros sigam seus rastros e o tragam de volta.",
    mecanica: {
      kind: "Nova Magia",
      name: "Memorizar Conhecimento",
      description:
        "Universal 2 (adivinhação) Execução: padrão; Alcance: pessoal; Alvo: você; Duração: permanente até ser descarregada. Esta magia permite que você grave todos os detalhes relacionados a uma cena na sua mente. Enquanto tiver uma memória gravada, você recebe +5 em testes relacionados a informações da cena memorizada (o mestre tem a palavra final sobre esse bônus ser ou não aplicável em um teste). O limite máximo de memórias que você pode gravar é igual a 1 por patamar de personagem (1 enquanto for iniciante, 2 enquanto for veterano e assim por diante) + seu atributo-chave de magias. Se alcançar o limite de memórias, você precisa esquecer uma delas (descarregando o efeito desta magia e perdendo seu bônus) antes de gravar memórias novas. +3 PM: muda o bônus em testes para +10. Requer 4º círculo.",
    },
  },
  { id: "os-mestres-de-cerimonia",
    name: "Os Mestres de Cerimônia",
    image: "/mundo/orgs/os-mestres-de-cerimonia.png",
    summary:
      "Carregando instrumentos, tecidos coloridos, bebidas, panelas e músicas, esses festeiros percorrem Arton organizando bailes, festivais, casamentos, banquetes e celebrações públicas.",
    lore: `Carregando instrumentos, tecidos coloridos, bebidas, panelas e músicas, esses festeiros percorrem Arton organizando bailes, festivais, casamentos, banquetes e celebrações públicas. À primeira vista, parecem apenas artistas itinerantes ou mestres de cerimônia comuns. Poucos percebem o verdadeiro propósito por trás da música.

Devotos de Marah, acreditam que a paz raramente nasce apenas de discursos solenes. Ela surge quando pessoas comem juntas, dançam juntas, comemoram juntas, cantam juntas e voltam a compartilhar as pequenas coisas da vida ao lado umas das outras. Por isso, costumam aparecer em lugares desconfortáveis: fronteiras tensas, cidades marcadas por disputas, bairros conflituosos e comunidades onde a guerra está prestes a surgir. Mestres de Cerimônia não precisam de um convite — na verdade, eles quase sempre são rejeitados pelas autoridades antes de conquistarem seu espaço no coração do público.

Seu trabalho envolve muito mais do que entretenimento. Os festeiros observam rivalidades locais, escolhem músicas apropriadas, planejam cerimônias e organizam espaços destinados a diminuir hostilidades. Uma dança compartilhada, um torneio amistoso e uma refeição coletiva podem servir como o primeiro passo para desfazer ressentimentos antigos.

E essa é uma tradição transmitida de maneira diferente da maioria dos conhecimentos formais, pois Mestres de Cerimônia não dão aulas em academias. Inclusive, a maioria deles nunca decidiu simplesmente tornar-se um deles. Todos aprenderam acompanhando acidentalmente um festeiro mais experiente, ajudando-o a organizar eventos e observando como cada povo celebra a própria alegria. É um ofício passado de voz em voz, de palco em palco e de festa em festa.

Os Mestres de Cerimônia conhecem ódio, orgulho e violência demais para acreditar que música resolve tudo. Algumas festas fracassam. Outras terminam em tragédia. Ainda assim, continuam viajando. Tudo isso porque compreendem algo simples: povos em guerra quase nunca se divertem juntos; mas, quando reunidos, eles podem, ainda que somente por uma noite, lembrar que existe outra maneira de viver.`,
    membros:
      "Bardos, artistas, dançarinos e qualquer devoto de Marah com habilidades relacionadas à música, diplomacia e entretenimento; todos com bônus altos em Atuação, Diplomacia e Intuição.",
    comoUsar:
      "Aliados. Dois barões rivais estão prestes a engolfar feudos vizinhos numa guerra em Trebuck, mas um dos festeiros de Marah apareceu propondo uma solução improvável: reuni-los numa celebração. Ele sabe que, sozinho, não conseguirá os convencer, então pede que os aventureiros o ajudem a realizar esse plano tão curioso quanto divertido.",
    mecanica: {
      kind: "Novo Item Geral",
      name: "Cítola da Paz",
      description:
        "Feita de madeira de qualidade, com cordas douradas e encantada por um devoto de Marah, esta cítola é entregue por seus tutores como um símbolo de independência para Mestres de Cerimônia. Enquanto seguir as Obrigações & Restrições de Marah, sua Inspiração e suas músicas de bardo custam –1 PM e você recebe um bônus de +5 em testes de perícia para mudar atitude. Conta como instrumento musical. Ferramenta, preço T$ 175.",
    },
  },
  { id: "passagem-vulpina",
    name: "Passagem Vulpina",
    summary:
      "Para muitos aventureiros, masmorras não passam de armadilhas repletas de perigos e riquezas. Para a Passagem Vulpina, são desafios deixados por sua divindade patrona.",
    lore: `Para muitos aventureiros, masmorras não passam de armadilhas repletas de perigos e riquezas. Para a Passagem Vulpina, são desafios deixados por sua divindade patrona. Esta organização devota de Hyninn reúne ladinos, exploradores, cartógrafos, arqueólogos e armadilheiros unidos por uma filosofia simples: aquilo que foi escondido existe para ser encontrado. Portas seladas, passagens secretas e mecanismos esquecidos não representam proibições, mas enigmas destinados àqueles capazes de superá-los.

Membros da Passagem Vulpina afirmam que o Deus da Trapaça premia a engenhosidade, favorecendo aqueles com a mente capaz de encontrar um caminho onde outros veem apenas obstáculos intransponíveis. É por isso que a organização valoriza curiosidade, improviso e inteligência acima de força ou violência.

A origem do grupo remonta a antigos saqueadores de ruínas e aventureiros veteranos que compartilhavam técnicas para sobreviver em tumbas, fortalezas abandonadas e passagens subterrâneas. Com o tempo, esses encontros se tornaram uma fraternidade informal espalhada por Arton. Seus membros costumam se identificar com um broche no formato de uma raposa em movimento, quase sempre representada atravessando um arco ou corredor estreito. Eles acreditam que esse símbolo vai além da relação das raposas com astúcia, pois simboliza a criatura que atravessa fronteiras, encontra caminhos secretos e quebra barreiras.

Integrantes da Passagem Vulpina raramente permanecem muito tempo em um só lugar. São atraídos por rumores de cidades soterradas, criptas esquecidas e construções consideradas inacessíveis. Muitos sobrevivem vendendo mapas, recuperando relíquias ou oferecendo serviços especializados para grupos de aventureiros, expedições e nobres.

Apesar da reputação suspeita, a organização não é necessariamente criminosa. Alguns membros respeitam limites legais; outros enxergam fechaduras e fronteiras apenas como convenções morais. Essa ambiguidade faz com que sejam vistos tanto como especialistas valiosos quanto como rivais incômodos.

A Passagem Vulpina mantém uma relação quase espiritual com ruínas, calabouços e o próprio Espaço de Masmorra. Além de tesouros, esses lugares também guardam desafios e enigmas aguardando respostas — e Hyninn sempre sorri aos ousados o bastante para procurá-las.`,
    membros:
      "Humanoides especialistas em exploração de masmorras e passagens secretas — no geral bardos, bucaneiros e ladinos devotos de Hyninn —, todos com bônus altos em Furtividade, Investigação, Ladingagem, Percepção e/ou Sobrevivência.",
    comoUsar:
      "Rivais. Ao descobrir a entrada para uma masmorra lendária, os heróis percebem a presença de outro grupo no local — e não parecem saqueadores comuns. Se questionados sobre a origem de suas habilidades, inventam qualquer desculpa e nunca admitem serem devotos do Deus da Trapaça.",
    mecanica: {
      kind: "Novo Poder Concedido de Hyninn",
      name: "Percepção de Masmorra",
      description:
        "Uma vez por cena, você tem sucesso automático em testes de Investigação para encontrar armadilhas realizados no subterrâneo ou dentro de uma masmorra.",
    },
  },
  { id: "parteiras-das-mandibulas",
    name: "Parteiras das Mandíbulas",
    summary:
      "Nas Montanhas Sanguinárias, onde predadores colossais disputam território, há uma presença improvável. Não caçadores, mercenários ou domadores, nem animais ou monstros ancestrais, mas pessoas de mantos simples e exibindo símbolos sagrados de Lena.",
    lore: `Nas Montanhas Sanguinárias, onde predadores colossais disputam território, há uma presença improvável. Não caçadores, mercenários ou domadores, nem animais ou monstros ancestrais, mas pessoas de mantos simples e exibindo símbolos sagrados de Lena. São chamadas de Parteiras das Mandíbulas.

Composta por pequenos comboios de devotos da Deusa da Vida, esta organização itinerante atravessa as Sanguinárias para realizar partos tão exóticos quanto perigosos, auxiliando animais e monstros que precisam passar por tal sofrimento antes de encher Arton com a vida dos seus filhotes. Para elas, há pouca diferença entre uma ninhada de répteis gigantes, a cria de uma quimera ou o filhote de um grifo. Vida é vida.

Seu trabalho raramente é simples. Uma Parteira pode passar dias acompanhando manadas migratórias, atravessar cânions infestados por feras até ninhos ameaçados ou improvisar um abrigo enquanto criaturas colossais realizam trabalho de parto. Muitas carregam cordas, talas, ervas, ferramentas cirúrgicas e diversos outros tipos de suprimentos médicos.

As montanhas ensinaram a elas uma verdade desconfortável: a vida nem sempre é gentil. Por isso, as Parteiras não cultivam a ingenuidade associada por alguns à Deusa da Vida. Seus membros conhecem sangue, medo e perda. Alguns já testemunharam mães de espécies que atacam suas próprias crias — e precisaram intervir para impedir a morte das criaturas — ou espécies inteiras desaparecendo após uma caçada.

Estas Parteiras acreditam que Arton se torna mais abundante quando seus ciclos naturais prosperam. Não importa se a criatura em questão é doméstica, selvagem ou monstruosa. Para elas, negar auxílio a um nascimento por medo ou preconceito é o que impede o mundo de ser agraciado pelas bênçãos de sua divindade patrona.

Essa postura provoca conflitos constantes. Colonos acusam a fraternidade de proteger ameaças. Caçadores as consideram românticas ou perigosas. Devotos de Megalokk — que é o Deus dos Monstros, mas também da fúria e da destruição — são os principais inimigos desta organização, pois acreditam que elas interferem no ciclo natural perpetuado pelas crias do seu deus. As Parteiras respondem da melhor maneira que podem: ajudando mais criaturas vivas a vir ao mundo.

Nas Montanhas Sanguinárias, todos sabem o que elas perpetuam: a crença de que o mundo já conhece morte suficiente e seu trabalho é espalhar a vida. Talvez por isso, quando um nativo encontra pegadas humanas ao lado de marcas deixadas por garras gigantes, seu coração sabe que as Parteiras provavelmente estiveram no local.`,
    membros:
      "Você não vai precisar das fichas de integrantes desta organização, pois eles se recusam a participar de combates. Para representá-los, usar um parceiro médico (Tormenta20, p. 261) pode ser o suficiente.",
    comoUsar:
      "Neutros. Uma ninhada de lagartos-trovão desapareceu nas Montanhas Sanguinárias, fazendo uma matriarca enfurecida atacar caravanas da região. As Parteiras estavam no local por outro motivo: uma fêmea de grifo estava prestes a pôr os ovos num local próximo. Elas desejam proteger o ninho, mas não podem fazer isso e acalmar a matriarca ao mesmo tempo, então precisarão da ajuda dos aventureiros para resolver os dois problemas.",
    mecanica: {
      kind: "Novo Item Geral",
      name: "Rosário da Vida",
      description:
        "Este item costuma ser usado por Parteiras das Mandíbulas para aumentar o efeito das suas magias de cura e, assim, diminuir a dor sentida pelas criaturas durante o parto. Quando empunhado por alguém que siga as Obrigações & Restrições de Lena, este rosário aumenta o número de PV recuperados por efeitos de cura mágica de luz em um dado do mesmo tipo por patamar de personagem (1 dado do mesmo tipo no 1º patamar, 2 dados no 2º e assim por diante). Esotérico, preço T$ 750.",
    },
  },
  { id: "peregrinos-das-lagrimas",
    name: "Peregrinos das Lágrimas",
    summary:
      "Entre os muitos artefatos lendários de Arton, poucos carregam uma história tão conhecida (e um futuro tão incerto) quanto as Lágrimas de Valkaria.",
    lore: `Entre os muitos artefatos lendários de Arton, poucos carregam uma história tão conhecida (e um futuro tão incerto) quanto as Lágrimas de Valkaria.

Durante séculos, essas relíquias cristalinas estiveram ligadas ao aprisionamento da Deusa da Aventura. Reunidas, permitiam adentrar sua estátua colossal na capital de Deheon para desbravar as masmorras ocultas em seu interior. Esse desafio culminaria na libertação da divindade pelos heróis que foram eternizados na história como “os Libertadores”. Mas esse tempo passou.

Valkaria está livre, as antigas masmorras ficaram no passado e, ainda assim, as Lágrimas da deusa permanecem espalhadas por Arton.

Os Peregrinos das Lágrimas surgiram dessa inquietação. Devotados ao aspecto aventuresco e inquieto de Valkaria, exploradores, estudiosos e sonhadores, convencidos de que as relíquias não perderam seu propósito, se reuniram para fundar esta organização. Para eles, é impensável que artefatos tão grandiosos existissem apenas para cumprir um único destino e então perdessem seu propósito. A grande pergunta, naturalmente, é: para que servem agora?

A organização ainda não encontrou uma resposta definitiva. Alguns acreditam que as Lágrimas escondem um segundo poder jamais descoberto. Outros defendem que ainda conduzem a um local desconhecido ou a um desafio deixado pela própria deusa após sua libertação. Há quem suspeite de uma revelação ligada ao futuro de Arton. E há aqueles que apenas consideram impossível aceitar que este mistério perdure.

Essa incerteza não enfraquece os Peregrinos. Pelo contrário. Seus integrantes viajam continuamente, reunindo mapas, testemunhos e registros antigos ligados às Lágrimas e aos acontecimentos da Libertação de Valkaria. Muitos dedicam anos a rumores falsos, relíquias adulteradas e pistas inconclusivas.

Em seus corações, acreditam que a ascensão de Valkaria como líder do Panteão só reflete a importância que tais artefatos devem esconder. Se não funcionam separadas, a deusa provavelmente escondeu um efeito ativado apenas quando todas as Lágrimas forem reunidas. Esse é o principal objetivo da organização no momento.`,
    membros:
      "Aventureiros de qualquer tipo podem ser membros dos Peregrinos e representá-los. É fácil se tiver acesso ao Guia de NPCs, pois as fichas da seção de mercenários (pp. 76–79) desempenham bem este papel.",
    comoUsar:
      "Aliados. Um dos Peregrinos estava explorando uma antiga ruína deheoni, mas seu parceiro parou de receber mensagens dele faz um tempo. Então, essa pessoa pediu aos heróis que fossem até a ruína para descobrir o paradeiro do Peregrino e do grupo de aventureiros que fazia sua escolta.",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Bússola das Lágrimas",
      description:
        "Desenvolvido por inventores Peregrinos, este item mágico foi um protótipo que acabou se tornando mais famoso do que o planejado: seu objetivo inicial era rastrear as Lágrimas de Valkaria, mas as primeiras versões acabaram alertando seu usuário para a presença de qualquer magia. Hoje em dia, ainda que usem uma versão mais avançada e precisa para buscar pelas Lágrimas, os Peregrinos continuam comercializando este item — afinal, todo mundo precisa pagar as contas, certo? Ao empunhar a Bússola das Lágrimas com uma das mãos, você tem sucesso automático em testes de Misticismo para detectar magia e pode fazê-los mesmo que não seja treinado nesta perícia. Acessório menor, preço T$ 3.500.",
    },
  },
  { id: "rastro-da-polvora",
    name: "Rastro da Pólvora",
    summary:
      "Muitas histórias giram em torno de como é perigoso (e profano) o uso da pólvora. Esta organização surgiu originalmente como um movimento político dedicado à defesa e difusão das armas de fogo.",
    lore: `Muitas histórias giram em torno de como é perigoso (e profano) o uso da pólvora. Alguns devotos de Tenebra acreditam que isso não passa de comoção desinformada e temor incabível. Esta organização surgiu em grandes cidades do Reinado, originalmente como um movimento político dedicado à defesa e difusão das armas de fogo. Seus integrantes sustentam uma ideia controversa: pólvora não é perversão perigosa, mas um presente legítimo entregue pela Deusa das Trevas ao mundo de Arton — e, portanto, deve ser acessível.

O Rastro da Pólvora reúne um grupo improvável de devotos: armeiros, comerciantes, estudiosos e figuras públicas favoráveis à regulamentação da pólvora. Alguns enxergam nela oportunidade econômica. Outros, influência política. Muitos veem algo ainda mais valioso: equilíbrio e poder.

Para essas pessoas, espadas, cavalaria e armaduras sempre favoreceram nobres, ordens militares e guerreiros treinados desde a infância. Armas de fogo nivelam essa relação. Uma pistola nas mãos certas pode desafiar privilégios antigos e reduzir a distância entre soldados treinados e indivíduos comuns.

Autoridades religiosas, conservadores e parte da nobreza frequentemente tratam o Rastro da Pólvora como uma ameaça social disfarçada de movimento legalista. Seus opositores alertam para acidentes, contrabando e violência crescente associados à disseminação da pólvora.

Os membros da organização já esperavam que suas ações gerassem resistência. A essas figuras rivais, respondem que a culpa jamais deve pertencer à ferramenta.

Apesar da fama provocadora, a organização não se vale de atos revolucionários. Publicamente, defendem regulamentação, responsabilidade e liberdade de escolha. Nos bastidores, porém, muitos acreditam que medo e instabilidade aceleram mudanças que jamais ocorreriam por consenso. Seus representantes transitam por conselhos, tribunais e salões nobres com a mesma frequência que pelas oficinas ilegais. Alguns membros mais radicais defendem acesso irrestrito à pólvora e mantêm ligações com contrabandistas e fabricantes ilegais. A liderança da organização raramente confirma tais rumores, mas também não atua para dissuadir esses integrantes mais problemáticos.

Talvez por isso tantos governantes observem o Rastro da Pólvora com cautela. Afinal, Tenebra raramente precisa derrubar muralhas quando pode convencer alguém a explodir os portões.`,
    membros:
      "Bucaneiros, burgueses, inventores, nobres, políticos, mercadores… praticamente qualquer pessoa que tenha algo a ganhar com a legalização da pólvora pode ser um integrante desta organização; fichas de pistoleiros da seção “Piratas & Pistoleiros” (Ameaças de Arton, pp. 252–263) representam bem este grupo.",
    comoUsar:
      "Vilões. Uma assembleia local em Deheon está prestes a ordenar restrições e rondas ainda mais severas em busca de armas de fogo, mas atentados misteriosos aumentam o medo do povo. Enquanto a milícia local busca pelos culpados, um político do Rastro da Pólvora surge para defender que o uso de armas de fogo poderia ter salvo as vítimas. Quem os aventureiros vão apoiar nessa situação: os milicianos que desejam preservar a lei do Reinado ou o político escuso que promete as maravilhas da pólvora?",
    mecanica: {
      kind: "Novo Item Mágico",
      name: "Corso Sombrio",
      description:
        "De alguma forma, todo integrante do Rastro da Pólvora tem uma dessas cartas de corso entre seus pertences. Enquanto seguir as Obrigações & Restrições de Tenebra, este item funciona como uma carta de corso comum: concede a você permissão para usar armas de fogo em território do Reinado. Se tais obrigações forem violadas, a carta imediatamente se transforma em um corvo mágico que voa até a autoridade do Reinado mais próxima e denuncia você pelo porte e uso de itens proibidos pelo Vintílogo (veja Atlas de Arton, p. 466). Acessório menor, preço T$ 2.500.",
    },
  },
  { id: "vigilia-das-segundas-chances",
    name: "Vigília das Segundas Chances",
    summary:
      "Aventurar-se em Arton significa aceitar certas probabilidades: lâminas falham, monstros vencem, doenças pioram na hora errada… é por isso que nem todo herói retorna da masmorra.",
    lore: `Aventurar-se em Arton significa aceitar certas probabilidades: lâminas falham, monstros vencem, doenças pioram na hora errada… é por isso que nem todo herói retorna da masmorra — sobreviventes, na verdade, são a exceção. E os reincidentes dedicam-se a criar essas exceções.

Composta exclusivamente por clérigos de Thyatis, esta organização reúne sacerdotes que já foram ressuscitados em algum momento da própria vida. Acreditando estar realizando uma missão divina, oferecem algo incomum a aventureiros e exploradores: um pacto de retorno.

Esse acordo assume formas variadas. Alguns membros contribuem com doações regulares, outros prestam serviços sagrados ou juramentos ligados a Thyatis. Em troca, um membro da Vigília se encarrega de registrar sua história, vínculos e feitos em arquivos mantidos sob proteção divina. Não é sobre comprar o direito à vida eterna — os próprios sacerdotes rejeitam essa interpretação —, o objetivo é estar preparado caso a morte chegue cedo demais.

Os registros recebem atenção quase obsessiva. São compostos por testamentos, memoriais, testemunhos de aliados, símbolos pessoais e até objetos significativos que podem ser preservados pela organização. Uma ressurreição bem-sucedida depende tanto de magia quanto de identidade: alguém deve ser lembrado de maneira clara antes de ser chamado de volta. Quando essas pessoas morrem, inicia-se o processo de reivindicação.

Sacerdotes analisam circunstâncias da morte, avaliam pendências e realizam ritos nos quais representam o falecido diante de Thyatis. Eles descrevem esse processo como uma defesa espiritual. Na maioria das vezes, isso garante uma salvaguarda contra a primeira vez que a pessoa morreu; é quase como se os integrantes desta organização convencessem o Deus da Ressurreição e da Profecia de que essa morte prematura jamais fora prevista e, portanto, não deveria acontecer.

Mas nem sempre dá certo. Os membros da Vigília deixam isso claro desde o início. Alguns destinos encerram-se de forma definitiva; outros recusam o chamado ou simplesmente não pertencem mais ao mundo dos vivos. Ainda assim, a organização conquistou certo prestígio entre aventureiros.

Em tavernas e estradas circula um comentário frequente sobre eles: ter coragem é mais fácil quando alguém promete argumentar em seu favor diante da eternidade.`,
    membros:
      "Clérigos de Thyatis que já morreram e voltaram à vida, em geral têm habilidades de cura e bônus muito altos em Religião e perícias sociais (como Diplomacia e Enganação).",
    comoUsar:
      "Aliados. Algo interrompeu o processo de reivindicação que um dos reincidentes deveria realizar para um aliado importante dos aventureiros. Agora, os heróis precisarão investigar o motivo e descobrir como ajudar seu companheiro a voltar à vida.",
    mecanica: {
      kind: "Novo Poder de Destino",
      name: "Previdência da Vigília",
      description:
        "Após contribuir com a Vigília das Segundas Chances ou realizar um juramento para Thyatis (o que exige seguir suas Obrigações & Restrições), você recebe o poder Dom da Imortalidade (Tormenta20, p. 133), mas só pode usá-lo na primeira vez que morrer na campanha.",
    },
  },
  { id: "zoyrak",
    name: "Zoyrak",
    summary:
      "Em muralhas e construções de cidades importantes pelo continente norte de Arton, às vezes surgem rabiscos de uma pequena semente cercada por traços irregulares.",
    lore: `Em muralhas e construções de cidades importantes pelo continente norte de Arton, às vezes surgem rabiscos de uma pequena semente cercada por traços irregulares. Zoyrak — que pode ser traduzido para o idioma valkar como “Semente” ou “A Semente” — é uma referência a uma antiga expressão goblinoide: “Zoyrakbe jak-duyshidakk” — que significa algo como “semente destinada à transformação e crescimento gradual para integrar a vida que sofre junta”. Para quem pessoas comuns chamariam de “integrantes” dessa “organização”, isso é mais do que um nome. É um plano.

Nascida em comunidades goblinoides urbanas que ouviram sobre Thwor e suas histórias do Mundo Como Deve Ser, os Zoyrak acreditam que os desígnios do Deus dos Goblinoides não podem ser realizados por meio de um único líder ou batalha gloriosa, mas pelo acúmulo paciente de pequenas mudanças.

Seus membros sabem que podem fazer pouco por enquanto, então agem para plantar sementes da revolução vindoura.

Então raramente travam guerras abertas. Em vez disso, espalham mensagens, constrangem figuras poderosas e interferem em estruturas sociais que consideram opressivas. Palacetes amanhecem cobertos por pichações de símbolos goblinoides, depósitos sofrem sabotagens e monumentos ligados a conquistadores amanhecem repletos de tinta, esterco e ferrugem.

A tecnologia — em sua maioria fabricada por goblins, mas disseminada entre todas as raças dos duyshidakk — ocupa lugar importante nesse processo. Engenhocas movidas a vapor e magia ajudam na mobilidade e nas intervenções urbanas: planadores inseguros, bombas de tinta, ferramentas de escalada e dispositivos que costumam despertar genialidade e causar desastres iminentes.

Zoyrak estão espalhados em pequenas células por oficinas, cortiços e comunidades goblinoides, conectados mais por símbolos e ideias do que por hierarquia formal. Vistos por humanos e outros povos “civilizados” como criminosos ou incendiários políticos, seus membros costumam respondê-los com uma constatação inquietante: aqueles que veem uma semente como ameaça provavelmente temem o que pode crescer a partir dela.`,
    membros:
      "Goblins, hobgoblins, bugbears, orcs, ogros e outros povos humanoides aceitos pelos goblinoides; todas as fichas da seção “Duyshidakk” (Ameaças de Arton, pp. 78–87) representam bem este grupo.",
    comoUsar:
      "Rivais. Uma série de pichações e sabotagens começa a atingir as mansões de nobres, entre eles um patrono dos aventureiros. Embora parte do povo admire os responsáveis, as autoridades (e os aristocratas afetados) desejam levá-los à justiça. Como os heróis vão agir? Ajudarão os revoltosos ou protegerão os interesses de seu contratante?",
    mecanica: {
      kind: "Novo Item Geral",
      name: "Bomba de Tinta",
      description:
        "Favorito entre os Zoyrak, este item segue as mesmas regras da bomba (Tormenta20, p. 180), mas, em vez de causar dano, afeta uma esfera com 6m de raio que fica sob efeito simulado da magia Área Escorregadia até o fim da cena. Criaturas dentro dessa área durante a explosão da bomba também ficam lentas (Reflexos CD Des evita); elas podem gastar uma ação de movimento para fazer um teste de Força (CD Des) para se recuperar da condição. Preparado alquímico, preço T$ 35.",
    },
  }
];