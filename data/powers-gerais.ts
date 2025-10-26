import { Power } from "@/types/power";

export const powersGerais: Power[] = [
  {
    id: "1",
    name: "Ataque Especial",
    description: "Você pode fazer um ataque especial que causa dano adicional. Faça um teste de ataque com penalidade de -2. Se acertar, causa 1d6 de dano adicional.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "2",
    name: "Defesa Aprimorada",
    description: "Você aprende técnicas avançadas de defesa. Aumenta sua Defesa em +1.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "3",
    name: "Esquiva Acrobática",
    description: "Você pode usar sua ação para se esquivar de ataques. Faça um teste de Acrobacia. Se passar, reduz o dano do próximo ataque em 1d6.",
    prerequisite: "Acrobacia 5+",
    origin: "Dragão Brasil"
  },
  {
    id: "4",
    name: "Foco Mental",
    description: "Você pode se concentrar para aumentar sua resistência mental. Recebe +2 em testes de Vontade por uma rodada.",
    origin: "tormenta20 - jogo do ano"
  },
  {
    id: "5",
    name: "Golpe Crítico",
    description: "Você aprende a explorar fraquezas de seus inimigos. Seus ataques causam dano crítico com 19-20.",
    prerequisite: "Nível 5",
    origin: "tormenta20 - jogo do ano"
  }
];