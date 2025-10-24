import { Adventure } from "@/types/adventure";

export const adventures: Adventure[] = [
  {
    id: "1",
    name: "A Floresta Perdida",
    theme: "Exploração",
    image: "/aventuras/floresta-perdida.png",
    summary: "Uma aventura clássica onde os heróis exploram uma floresta antiga cheia de mistérios.",
    sections: [
      { type: "title", content: "Introdução" },
      { type: "text", content: "Os heróis recebem um mapa antigo que aponta para uma floresta perdida há séculos. Dizem que lá existe um tesouro lendário..." },
      { type: "break" },
      { type: "subtitle", content: "O Caminho para a Floresta" },
      { type: "text", content: "A jornada até a floresta leva 3 dias. No caminho, os heróis encontram pistas sobre o que os espera." },
      { type: "break" },
      { type: "subtitle", content: "Dentro da Floresta" },
      { type: "text", content: "A floresta é densa e escura. Criaturas estranhas habitam seus recessos, e o caminho não é claro." },
      { type: "break" },
      { type: "title", content: "O Tesouro Final" },
      { type: "text", content: "Após superar diversos desafios, os heróis finalmente encontram o tesouro guardado há séculos." }
    ]
  },
  {
    id: "2",
    name: "O Castelo Assombrado",
    theme: "Horror",
    image: "/aventuras/castelo-assombrado.png",
    summary: "Uma aventura assustadora em um castelo repleto de espíritos e segredos sombrios.",
    sections: [
      { type: "title", content: "O Convite Misterioso" },
      { type: "text", content: "Os heróis recebem um convite para explorar um castelo antigo. Ninguém sabe quem o enviou." },
      { type: "break" },
      { type: "subtitle", content: "Chegada ao Castelo" },
      { type: "text", content: "O castelo é sombrio e assustador. Sons estranhos ecoam pelos corredores vazios." },
      { type: "break" },
      { type: "title", content: "Revelações" },
      { type: "text", content: "Conforme exploram, os heróis descobrem a verdadeira história do castelo e de seus antigos habitantes." }
    ]
  },
  {
    id: "3",
    name: "Evil Park",
    theme: "Horror",
    image: "/aventuras/evil_park.png",
    summary: "Uma aventura investigativa em um parque temático povoado por mistérios.",
    sections: [
      { type: "title", content: "Informação Importante" },
      { type: "text", content: "Esta mini-aventura foi feita para RPGs de terror contemporâneo — Ordem Paranormal, Rastro de Cthulhu e qualquer outro sistema compatível com o gênero. É uma trama sem regras, para ser adaptada conforme necessário. Pode ser jogada como aventura avulsa ou início de uma campanha." },
      { type: "break" },
      { type: "subtitle", content: "Sombras no Parque Proibido" },
      { type: "text", content: "Algumas pessoas achariam impensável erguer um parque temático povoado por assombrações reais, ainda mais a poucos quilômetros da capital de um país, ignorando leis de segurança nacional. Mas estas pessoas não são Alexandre Vonades, bilionário conhecido por seus projetos excêntricos, acostumado a ter tudo o que deseja. Ele conta hoje com riquezas que superam as de algumas nações, acumuladas por sua família há mais de um século em diferentes negócios ligados à tecnologia. Contudo, Alex — como gosta de ser chamado — não está interessado em ciência, ou não somente. É também um ocultista. Tem a obsessão de se tornar o primeiro homem na história a domar o desconhecido. De personalidade teatral, falem bem ou falem mal dele, quer acima de tudo uma plateia." },
      { type: "break" },
      { type: "text", content: "Recentemente, o magnata comprou uma cidade quase inteira — um velho entreposto rodoviário ligando o interior ao distrito federal. O lugarejo deixou de receber o dinheiro de igrejas locais, fechadas por escândalos de um de seus líderes, passando a contar apenas com esmolas de caminhoneiros. É ao mesmo tempo uma área abandonada que fica próxima a um centro administrativo, sendo de fácil acesso. Perfeita para o empreendimento." },
      { type: "break" },
      { type: "text", content: "O projeto do parque foi vetado, mas graças a uma bancada de políticos trabalhando para Alex no congresso, a magia aconteceu. Magia literal: com acesso a um time de místicos, rituais e experimentos foram feitos, atraindo criaturas paranormais para habitar as atrações do Evil Park." },
      { type: "break" },
      { type: "text", content: "Os personagens dos jogadores fazem parte de uma equipe de investigação, têm diferentes motivações, mas um só objetivo: encontrar irregularidades no local, demonstrando que é um risco ao público, e fechá-lo. Esta é uma aventura estilo sandbox, não tem uma ordem definida. Os protagonistas podem explorar em qualquer ordem as atrações descritas abaixo, interagindo entre si. Ao mestre cabe pegar a ideia básica de cada lugar, planejar e adaptar à sua maneira, antes de narrar (para desafios prontos, recomendamos o livro Ordem Paranormal, que já vem com diversas ameaças similares às descritas aqui!)" },
      { type: "break" },
      { type: "text", content: "Reunir evidências fica a critério do grupo, mas não é realmente necessário. Pois, após terem explorado o parque por tempo o bastante, quando o narrador julgar mais dramático e adequado, algo acontece: um blecaute. A tecnologia mística que contém as assombrações é desativada por sabotadores, agentes infiltrados de uma potência estrangeira. Foram eles que guiaram os passos de Alex o tempo todo, pois pretendiam usar o incidente causado pela fuga das criaturas para atingir a capital causando caos e instabilidade política no país." },
      { type: "break" },
      { type: "text", content: "Se envolver com a trama política, porém, é completamente opcional. A prioridade do grupo passa a ser navegar em meio à paisagem noturna do parque e encontrar uma saída, tendo o mais simples dos objetivos: sobreviver." },

      { type: "break" },
      { type: "subtitle", content: "Nossas Atrações" },
      { type: "text", content: "Boas vindas ao Evil Park, onde os pesadelos se tornam realidade!" },
      { type: "text", content: "Este é o primeiro safari supranatural do planeta Terra. Um lugar onde a humanidade pode observar e interagir de maneiras segura com as criaturas que habitam o além." },
      { type: "text", content: "Horário de funcionamento: 7h00 às 5h00 da manhã. Descontos especiais em ingressos a partir da meia-noite." },
      { type: "break" },
      
      { type: "subtitle", content: "Aracnoárea."},
      {
      type: "text",
      content: "Entre no covil das aranhas da morte e presencie em primeira mão os fascinantes hábitos destas criaturas originadas de pavores primitivos. Atire oferendas em sua teia e as veja se alimentar e crescer. Ou — se tiver coragem — entre na Sala dos Espelhos e descubra qual é o seu maior medo!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Cybercoliseu."
      },
      {
        type: "text",
        content: "Quem disse que ocultismo não pode se fundir à tecnologia? Conheça nossos cybergladiadores, lutadores que unem as armas e técnicas marciais criadas pela racionalidade humana à energia caótica pulsante de horrores que assombram o inconsciente coletivo. E se você acredita ter um bom olho para rinhas biomecânicas, participe de nossa banca de apostas e concorra a incríveis prêmios exclusivos!"
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Praça do Homem Ilustrado."
      },
      {
        type: "text",
        content: "O início de tudo. Contemple o antigo faraó com hieróglifos luminosos de pura luz tatuados em sua pele. Eles contém a chave que permitiu aos maiores cientistas desta era diluírem a membrana do além mundo. Hoje é um monumento vivo disponível para que todos vejam, a lenda diz que ele traz amor, sorte e riqueza àqueles que o ouvem pacientemente repetir seu nome 1000 vezes. Mas no meio tempo, aproveite, e delicie-se com restaurantes inspirados na cozinha de mais de sete países diferentes."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Templo da Divindade Ignota."
      },
      {
        type: "text",
        content: "Venha participar desta experiência 100% imersiva e interativa neste resort místico. Entregue-se a uma semana inebriantemente luxuriosa como membro de um culto presidido por ocultistas iniciados. Participe de banquetes, festas, cânticos profanos e os mais diversos rituais, acompanhando em tempo real o esforço para a invocação de uma deusa misteriosa. Vagas sujeitas a disponibilidade."
      },
      {
        type: "break"
      },
      {
        type: "subtitle",
        content: "Zona Z."
      },
      {
        type: "text",
        content: "Você sempre quis saber o que faria durante um apocalipse zumbi? Agora você pode. Explore este antigo bairro abandonado, deixado exatamente como estava quando a atração foi inaugurada. Fique o tempo que quiser, leve as lembranças que quiser… mas cuidado! As ruas estão infestadas de cadáveres possuídos. Antes de embarcar nesta aventura, não deixe de passar no Clube de Tiro, para praticar pontaria e comprar as armas mais letais disponíveis no mercado. Visitas apenas acompanhadas de um guia."
      },
      {
        type: "break"
      },
      {
        type: "text",
        content: "Não é permitido o ingresso de menores de idade e pessoas com problemas cardíacos. Prepare-se para uma jornada assustadora ao coração do verdadeiro terror."
      },
      {
        type: "break"
      },
      {
        type: "text",
        content: "O Evil Park espera por você."
      },
    ]
  },
];