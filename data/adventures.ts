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
      { type: "text", content: "A jornada até a floresta leva 3 dias. No caminho, os heróis encontram pistas sobre o que os espera." },
      { type: "break" },
      { type: "subtitle", content: "Dentro da Floresta" },
      { type: "text", content: "A floresta é densa e escura. Criaturas estranhas habitam seus recessos, e o caminho não é claro." },
      { type: "break" },
      { type: "title", content: "O Tesouro Final" },
      { type: "text", content: "Após superar diversos desafios, os heróis finalmente encontram o tesouro guardado há séculos." }
    ]
  },
];