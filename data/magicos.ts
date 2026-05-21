// data/magicos.ts
import { SubItem } from "@/types/tesouro";

// ─── Tabela 8-2: Riquezas ────────────────────────────────────────────────────

export interface RiquezaEntry {
  menor: string;
  media: string;
  maior: string;
  valor: string;
  exemplos: string;
}

export const RIQUEZAS: RiquezaEntry[] = [
  { menor: "01-25", media: "—",     maior: "—",     valor: "4d4 (10)",           exemplos: "Ágata ou hematita (1/2); barril de farinha ou gaiola com galinhas (5)." },
  { menor: "26-40", media: "—",     maior: "—",     valor: "1d4×10 (25)",        exemplos: "Quartzo rosa ou topázio (1/2); caixa de tabaco ou rolo de linho (1); jarro de especiarias, como canela, gorad, pimenta ou sal (2)." },
  { menor: "41-55", media: "01-10", maior: "—",     valor: "2d4×10 (50)",        exemplos: "Bracelete de ouro finamente trabalhado (1/2); estatueta de osso ou marfim entalhado ou rolo de seda (1); vaso de prata (2)." },
  { menor: "56-70", media: "11-30", maior: "—",     valor: "4d6×10 (140)",       exemplos: "Ametista ou pérola branca (1/2); lingote de prata ou cálice de prata com gemas de lápis-lazúli (1); tapeçaria grande e bem-feita de lã (5)." },
  { menor: "71-85", media: "31-50", maior: "01-05", valor: "1d6×100 (350)",      exemplos: "Alexandrita ou pérola negra (1/2); espada cerimonial ornada com prata e gema negra no cabo ou pente de prata com pedras preciosas (1)." },
  { menor: "86-95", media: "51-65", maior: "06-15", valor: "2d6×100 (700)",      exemplos: "Pente em forma de dragão com olhos de gema vermelha (1); harpa de madeira exótica com ornamentos de zircão e marfim (5)." },
  { menor: "96-99", media: "66-80", maior: "16-25", valor: "2d8×100 (900)",      exemplos: "Opala negra ou tapa-olho com um olho falso de safira (1/2); luva bordada e adornada com gemas ou pingente de opala vermelha com corrente de ouro (1); lingote de ouro ou pintura antiga (2)." },
  { menor: "100",   media: "81-90", maior: "26-40", valor: "4d10×100 (2.200)",   exemplos: "Esmeralda verde ou pingente de safira (1/2); caixinha de música de ouro ou tornozeleira com gemas (1); manto bordado em veludo e seda com inúmeras pedras preciosas (2)." },
  { menor: "—",     media: "91-95", maior: "41-60", valor: "6d12×100 (3.900)",   exemplos: "Anel de prata e safira ou correntinha com pequenas pérolas rosas, diamante branco (1/2); ídolo de ouro puro maciço (5)." },
  { menor: "—",     media: "96-99", maior: "61-75", valor: "2d10×1.000 (11.000)",exemplos: "Anel de ouro e rubi ou diamante vermelho (1/2); conjunto de taças de ouro decoradas com esmeraldas (2)." },
  { menor: "—",     media: "100",   maior: "76-85", valor: "6d8×1.000 (27.000)", exemplos: "Coroa de ouro adornada com centenas de gemas, pertencente a um antigo monarca (1); baú de mitral com coleção de diamantes (2)." },
  { menor: "—",     media: "—",     maior: "86-95", valor: "1d10×10.000 (55.000)",exemplos: "Arca de madeira reforçada repleta de lingotes de prata e ouro, além de pedras preciosas de vários tipos (20)." },
  { menor: "—",     media: "—",     maior: "96-100",valor: "4d12×10.000 (260.000)",exemplos: "Uma sala forrada de moedas! Mover todo esse dinheiro exige trabalhadores e carroças (ou outra ideia por parte dos jogadores), além de atrair a atenção de bandidos, coletores de impostos e aproveitadores de vários tipos..." },
];

// ─── Tabela 8-8: Armas Mágicas ───────────────────────────────────────────────

export interface MagicoEntry extends SubItem {
  encanto: string;
  efeito: string;
}

export const ARMAS_MAGICAS: MagicoEntry[] = [
  { min: 1,   max: 5,   result: "Ameaçadora",    encanto: "Ameaçadora",    efeito: "Duplica margem de ameaça" },
  { min: 6,   max: 10,  result: "Anticriaturas", encanto: "Anticriaturas", efeito: "Bônus contra tipo de criatura" },
  { min: 11,  max: 12,  result: "Arremesso",     encanto: "Arremesso",     efeito: "Pode ser arremessada" },
  { min: 13,  max: 14,  result: "Assassina",     encanto: "Assassina",     efeito: "Aumenta ataque furtivo" },
  { min: 15,  max: 16,  result: "Caçadora",      encanto: "Caçadora",      efeito: "Ignora camuflagem leve e total e cobertura leve" },
  { min: 17,  max: 21,  result: "Congelante",    encanto: "Congelante",    efeito: "+1d6 de dano de frio" },
  { min: 22,  max: 23,  result: "Conjuradora",   encanto: "Conjuradora",   efeito: "Pode guardar e lançar magias" },
  { min: 24,  max: 28,  result: "Corrosiva",     encanto: "Corrosiva",     efeito: "+1d6 de dano de ácido" },
  { min: 29,  max: 30,  result: "Dançarina",     encanto: "Dançarina",     efeito: "Ataca sozinha" },
  { min: 31,  max: 34,  result: "Defensora",     encanto: "Defensora",     efeito: "Defesa +2" },
  { min: 35,  max: 36,  result: "Destruidora",   encanto: "Destruidora",   efeito: "Bônus contra construtos" },
  { min: 37,  max: 38,  result: "Dilacerante",   encanto: "Dilacerante",   efeito: "+10 de dano em acertos críticos" },
  { min: 39,  max: 40,  result: "Drenante",      encanto: "Drenante",      efeito: "Crítico drena vítima" },
  { min: 41,  max: 45,  result: "Elétrica",      encanto: "Elétrica",      efeito: "+1d6 de dano de eletricidade" },
  { min: 46,  max: 46,  result: "Energética*",   encanto: "Energética*",   efeito: "Bônus em ataque" },
  { min: 47,  max: 48,  result: "Excruciante",   encanto: "Excruciante",   efeito: "Causa fraqueza" },
  { min: 49,  max: 53,  result: "Flamejante",    encanto: "Flamejante",    efeito: "+1d6 de dano de fogo" },
  { min: 54,  max: 63,  result: "Formidável",    encanto: "Formidável",    efeito: "Ataque e dano +2" },
  { min: 64,  max: 64,  result: "Lancinante*",   encanto: "Lancinante*",   efeito: "Causa crítico terrível" },
  { min: 65,  max: 72,  result: "Magnífica*",    encanto: "Magnífica*",    efeito: "Ataque e dano +4" },
  { min: 73,  max: 74,  result: "Piedosa",       encanto: "Piedosa",       efeito: "Dano não letal" },
  { min: 75,  max: 76,  result: "Profana",       encanto: "Profana",       efeito: "Bônus contra devotos do Bem" },
  { min: 77,  max: 78,  result: "Sagrada",       encanto: "Sagrada",       efeito: "Bônus contra devotos do Mal" },
  { min: 79,  max: 80,  result: "Sanguinária",   encanto: "Sanguinária",   efeito: "Causa sangramento" },
  { min: 81,  max: 82,  result: "Trovejante",    encanto: "Trovejante",    efeito: "Causa atordoamento" },
  { min: 83,  max: 84,  result: "Tumular",       encanto: "Tumular",       efeito: "+1d8 de dano de trevas" },
  { min: 85,  max: 88,  result: "Veloz",         encanto: "Veloz",         efeito: "Fornece ataque extra" },
  { min: 89,  max: 90,  result: "Venenosa",      encanto: "Venenosa",      efeito: "Causa envenenamento" },
  { min: 91,  max: 100, result: "Arma específica — Tabela 8-9", encanto: "Arma específica", efeito: "Veja a Tabela 8-9" },
];

// ─── Tabela 8-9: Armas Específicas ───────────────────────────────────────────

export interface EspecificaEntry extends SubItem {
  preco: string;
}

export const ARMAS_ESPECIFICAS: EspecificaEntry[] = [
  { min: 1,   max: 5,   result: "Azagaia dos relâmpagos", preco: "T$ 30.000" },
  { min: 6,   max: 15,  result: "Espada baronial",        preco: "T$ 30.000" },
  { min: 16,  max: 25,  result: "Lâmina da luz",          preco: "T$ 45.000" },
  { min: 26,  max: 30,  result: "Lança animalesca",       preco: "T$ 45.000" },
  { min: 31,  max: 35,  result: "Maça do terror",         preco: "T$ 45.000" },
  { min: 36,  max: 40,  result: "Florete fugaz",          preco: "T$ 50.000" },
  { min: 41,  max: 45,  result: "Cajado da destruição",   preco: "T$ 60.000" },
  { min: 46,  max: 50,  result: "Cajado da vida",         preco: "T$ 60.000" },
  { min: 51,  max: 55,  result: "Machado silvestre",      preco: "T$ 70.000" },
  { min: 56,  max: 60,  result: "Martelo de Doherimm",    preco: "T$ 70.000" },
  { min: 61,  max: 67,  result: "Arco do poder",          preco: "T$ 90.000" },
  { min: 68,  max: 72,  result: "Língua do deserto",      preco: "T$ 90.000" },
  { min: 73,  max: 77,  result: "Besta explosiva",        preco: "T$ 100.000" },
  { min: 78,  max: 82,  result: "Punhal sszzaazita",      preco: "T$ 100.000" },
  { min: 83,  max: 87,  result: "Espada sortuda",         preco: "T$ 110.000" },
  { min: 88,  max: 92,  result: "Avalanche",              preco: "T$ 140.000" },
  { min: 93,  max: 95,  result: "Cajado do poder",        preco: "T$ 180.000" },
  { min: 96,  max: 100, result: "Vingadora sagrada",      preco: "T$ 200.000" },
];

// ─── Tabela 8-10: Armaduras & Escudos Mágicos ────────────────────────────────

export const ARMADURAS_MAGICAS: MagicoEntry[] = [
  { min: 1,   max: 6,   result: "Abascanto",     encanto: "Abascanto",     efeito: "Resistência contra magia" },
  { min: 7,   max: 10,  result: "Abençoado",     encanto: "Abençoado",     efeito: "Resistência contra trevas" },
  { min: 11,  max: 12,  result: "Acrobático",    encanto: "Acrobático",    efeito: "Bônus em Acrobacia" },
  { min: 13,  max: 14,  result: "Alado",         encanto: "Alado",         efeito: "Deslocamento de voo 12m" },
  { min: 15,  max: 16,  result: "Animado¹",      encanto: "Animado¹",      efeito: "Escudo defende sozinho" },
  { min: 17,  max: 18,  result: "Assustador",    encanto: "Assustador",    efeito: "Causa efeito de medo" },
  { min: 19,  max: 22,  result: "Cáustica",      encanto: "Cáustica",      efeito: "Resistência contra ácido" },
  { min: 23,  max: 32,  result: "Defensor",      encanto: "Defensor",      efeito: "Defesa +2" },
  { min: 33,  max: 34,  result: "Escorregadio",  encanto: "Escorregadio",  efeito: "Bônus para escapar" },
  { min: 35,  max: 36,  result: "Esmagador¹",    encanto: "Esmagador¹",    efeito: "Escudo causa mais dano" },
  { min: 37,  max: 38,  result: "Fantasmagórico",encanto: "Fantasmagórico",efeito: "Lança Manto de Sombras" },
  { min: 39,  max: 40,  result: "Fortificado",   encanto: "Fortificado",   efeito: "Chance de ignorar crítico" },
  { min: 41,  max: 44,  result: "Gélido",        encanto: "Gélido",        efeito: "Resistência contra frio" },
  { min: 45,  max: 54,  result: "Guardião²",     encanto: "Guardião²",     efeito: "Defesa +4" },
  { min: 55,  max: 56,  result: "Hipnótico",     encanto: "Hipnótico",     efeito: "Fascina inimigos" },
  { min: 57,  max: 58,  result: "Ilusório",      encanto: "Ilusório",      efeito: "Camufla-se como item comum" },
  { min: 59,  max: 62,  result: "Incandescente", encanto: "Incandescente", efeito: "Resistência contra fogo" },
  { min: 63,  max: 68,  result: "Invulnerável",  encanto: "Invulnerável",  efeito: "Redução de dano" },
  { min: 69,  max: 72,  result: "Opaco",         encanto: "Opaco",         efeito: "Redução de energia" },
  { min: 73,  max: 78,  result: "Protetor",      encanto: "Protetor",      efeito: "Resistência +2" },
  { min: 79,  max: 80,  result: "Refletor",      encanto: "Refletor",      efeito: "Reflete magia" },
  { min: 81,  max: 84,  result: "Relampejante",  encanto: "Relampejante",  efeito: "Resistência contra eletricidade" },
  { min: 85,  max: 86,  result: "Reluzente",     encanto: "Reluzente",     efeito: "Causa efeito de cegueira" },
  { min: 87,  max: 88,  result: "Sombrio",       encanto: "Sombrio",       efeito: "Bônus em Furtividade" },
  { min: 89,  max: 90,  result: "Zeloso",        encanto: "Zeloso",        efeito: "Atrai ataques em aliados" },
  { min: 91,  max: 100, result: "Item específico — Tabela 8-11", encanto: "Item específico", efeito: "Veja a Tabela 8-11" },
];

// ─── Tabela 8-11: Armaduras & Escudos Específicos ────────────────────────────

export const ARMADURAS_ESPECIFICAS: EspecificaEntry[] = [
  { min: 1,   max: 10,  result: "Cota élfica",             preco: "T$ 30.000" },
  { min: 11,  max: 20,  result: "Couro de monstro",        preco: "T$ 36.000" },
  { min: 21,  max: 25,  result: "Escudo do conjurador",    preco: "T$ 45.000" },
  { min: 26,  max: 32,  result: "Loriga do centurião",     preco: "T$ 45.000" },
  { min: 33,  max: 42,  result: "Manto da noite",          preco: "T$ 45.000" },
  { min: 43,  max: 49,  result: "Couraça do comando",      preco: "T$ 45.000" },
  { min: 50,  max: 59,  result: "Baluarte anão",           preco: "T$ 50.000" },
  { min: 60,  max: 66,  result: "Escudo espinhoso",        preco: "T$ 50.000" },
  { min: 67,  max: 76,  result: "Escudo do leão",          preco: "T$ 50.000" },
  { min: 77,  max: 83,  result: "Carapaça demoníaca",      preco: "T$ 63.000" },
  { min: 84,  max: 88,  result: "Escudo do eclipse",       preco: "T$ 70.000" },
  { min: 89,  max: 93,  result: "Escudo de Azgher",        preco: "T$ 140.000" },
  { min: 94,  max: 100, result: "Armadura da luz",         preco: "T$ 150.000" },
];

// ─── Tabela 8-12: Poções ─────────────────────────────────────────────────────

export interface PocaoEntry extends SubItem {
  preco: string;
}

export const POCOES: PocaoEntry[] = [
  { min: 1,   max: 1,   result: "Abençoar Alimentos (óleo)",                          preco: "T$ 30" },
  { min: 2,   max: 3,   result: "Área Escorregadia (granada)",                        preco: "T$ 30" },
  { min: 4,   max: 6,   result: "Arma Mágica (óleo)",                                 preco: "T$ 30" },
  { min: 7,   max: 7,   result: "Compreensão",                                        preco: "T$ 30" },
  { min: 8,   max: 15,  result: "Curar Ferimentos (2d8+2 PV)",                        preco: "T$ 30" },
  { min: 16,  max: 18,  result: "Disfarce Ilusório",                                  preco: "T$ 30" },
  { min: 19,  max: 20,  result: "Escuridão (óleo)",                                   preco: "T$ 30" },
  { min: 21,  max: 22,  result: "Luz (óleo)",                                         preco: "T$ 30" },
  { min: 23,  max: 24,  result: "Névoa (granada)",                                    preco: "T$ 30" },
  { min: 25,  max: 26,  result: "Primor Atlético",                                    preco: "T$ 30" },
  { min: 27,  max: 28,  result: "Proteção Divina",                                    preco: "T$ 30" },
  { min: 29,  max: 30,  result: "Resistência à Energia",                              preco: "T$ 30" },
  { min: 31,  max: 32,  result: "Sono",                                               preco: "T$ 30" },
  { min: 33,  max: 33,  result: "Suporte Ambiental",                                  preco: "T$ 30" },
  { min: 34,  max: 34,  result: "Tranca Arcana (óleo)",                               preco: "T$ 30" },
  { min: 35,  max: 35,  result: "Visão Mística",                                      preco: "T$ 30" },
  { min: 36,  max: 36,  result: "Vitalidade Fantasma",                                preco: "T$ 30" },
  { min: 37,  max: 38,  result: "Escudo da Fé (aprimoramento para duração cena)",     preco: "T$ 120" },
  { min: 39,  max: 40,  result: "Alterar Tamanho",                                    preco: "T$ 270" },
  { min: 41,  max: 42,  result: "Aparência Perfeita",                                 preco: "T$ 270" },
  { min: 43,  max: 43,  result: "Armamento da Natureza (óleo)",                       preco: "T$ 270" },
  { min: 44,  max: 49,  result: "Bola de Fogo (granada)",                             preco: "T$ 270" },
  { min: 50,  max: 51,  result: "Camuflagem Ilusória",                                preco: "T$ 270" },
  { min: 52,  max: 53,  result: "Concentração de Combate (aprimoramento para duração cena)", preco: "T$ 270" },
  { min: 54,  max: 62,  result: "Curar Ferimentos (4d8+4 PV)",                        preco: "T$ 270" },
  { min: 63,  max: 66,  result: "Físico Divino",                                      preco: "T$ 270" },
  { min: 67,  max: 68,  result: "Mente Divina",                                       preco: "T$ 270" },
  { min: 69,  max: 70,  result: "Metamorfose",                                        preco: "T$ 270" },
  { min: 71,  max: 75,  result: "Purificação",                                        preco: "T$ 270" },
  { min: 76,  max: 77,  result: "Velocidade",                                         preco: "T$ 270" },
  { min: 78,  max: 79,  result: "Vestimenta da Fé (óleo)",                            preco: "T$ 270" },
  { min: 80,  max: 80,  result: "Voz Divina",                                         preco: "T$ 270" },
  { min: 81,  max: 82,  result: "Arma Mágica (óleo; aprimoramento para bônus +3)",    preco: "T$ 750" },
  { min: 83,  max: 88,  result: "Curar Ferimentos (7d8+7 PV)",                        preco: "T$ 1.080" },
  { min: 89,  max: 89,  result: "Físico Divino (aprimoramento para três atributos)",  preco: "T$ 1.080" },
  { min: 90,  max: 92,  result: "Invisibilidade (aprimoramento para duração cena)",   preco: "T$ 1.080" },
  { min: 93,  max: 96,  result: "Bola de Fogo (granada; aprimoramento para 10d6 de dano)", preco: "T$ 1.470" },
  { min: 97,  max: 100, result: "Curar Ferimentos (11d8+11 PV)",                      preco: "T$ 3.000" },
];

// ─── Tabela 8-13: Acessórios Menores ─────────────────────────────────────────

export const ACESSORIOS_MENORES: EspecificaEntry[] = [
  { min: 1,   max: 2,   result: "Anel do sustento",          preco: "T$ 3.000" },
  { min: 3,   max: 3,   result: "Bainha mágica",             preco: "T$ 3.000" },
  { min: 8,   max: 12,  result: "Corda da escalada",         preco: "T$ 3.000" },
  { min: 13,  max: 14,  result: "Ferraduras da velocidade",  preco: "T$ 3.000" },
  { min: 15,  max: 19,  result: "Garrafa da fumaça eterna",  preco: "T$ 3.000" },
  { min: 20,  max: 24,  result: "Gema da luminosidade",      preco: "T$ 3.000" },
  { min: 25,  max: 29,  result: "Manto élfico",              preco: "T$ 3.000" },
  { min: 30,  max: 34,  result: "Mochila de carga",          preco: "T$ 3.000" },
  { min: 35,  max: 40,  result: "Brincos da sagacidade",     preco: "T$ 4.500" },
  { min: 41,  max: 46,  result: "Luvas da delicadeza",       preco: "T$ 4.500" },
  { min: 47,  max: 52,  result: "Manoplas da força do ogro", preco: "T$ 4.500" },
  { min: 53,  max: 59,  result: "Manto da resistência",      preco: "T$ 4.500" },
  { min: 60,  max: 65,  result: "Manto do fascínio",         preco: "T$ 4.500" },
  { min: 66,  max: 71,  result: "Pingente da sensatez",      preco: "T$ 4.500" },
  { min: 72,  max: 77,  result: "Torque do vigor",           preco: "T$ 4.500" },
  { min: 78,  max: 82,  result: "Chapéu do disfarce",        preco: "T$ 6.000" },
  { min: 83,  max: 84,  result: "Flauta fantasma",           preco: "T$ 6.000" },
  { min: 85,  max: 89,  result: "Lanterna da revelação",     preco: "T$ 6.000" },
  { min: 90,  max: 96,  result: "Anel da proteção",          preco: "T$ 9.000" },
  { min: 97,  max: 98,  result: "Anel do escudo mental",     preco: "T$ 9.000" },
  { min: 99,  max: 100, result: "Pingente da saúde",         preco: "T$ 9.000" },
];

// ─── Tabela 8-14: Acessórios Médios ──────────────────────────────────────────

export const ACESSORIOS_MEDIOS: EspecificaEntry[] = [
  { min: 1,   max: 4,   result: "Anel de telecinesia",         preco: "T$ 10.500" },
  { min: 5,   max: 8,   result: "Bola de cristal",             preco: "T$ 10.500" },
  { min: 9,   max: 10,  result: "Caveira maldita",             preco: "T$ 10.500" },
  { min: 11,  max: 14,  result: "Botas aladas",                preco: "T$ 15.000" },
  { min: 15,  max: 18,  result: "Braceletes de bronze",        preco: "T$ 16.500" },
  { min: 19,  max: 24,  result: "Anel da energia",             preco: "T$ 21.000" },
  { min: 25,  max: 30,  result: "Anel da vitalidade",          preco: "T$ 21.000" },
  { min: 31,  max: 34,  result: "Anel de invisibilidade",      preco: "T$ 21.000" },
  { min: 35,  max: 38,  result: "Braçadeiras do arqueiro",     preco: "T$ 21.000" },
  { min: 39,  max: 42,  result: "Brincos de Marah",            preco: "T$ 21.000" },
  { min: 43,  max: 46,  result: "Faixas do pugilista",         preco: "T$ 21.000" },
  { min: 47,  max: 50,  result: "Manto da aranha",             preco: "T$ 21.000" },
  { min: 51,  max: 54,  result: "Vassoura voadora",            preco: "T$ 21.000" },
  { min: 55,  max: 58,  result: "Símbolo abençoado",           preco: "T$ 21.000" },
  { min: 59,  max: 64,  result: "Amuleto da robustez",         preco: "T$ 25.500" },
  { min: 65,  max: 68,  result: "Botas velozes",               preco: "T$ 25.500" },
  { min: 69,  max: 74,  result: "Cinto da força do gigante",   preco: "T$ 25.500" },
  { min: 75,  max: 80,  result: "Coroa majestosa",             preco: "T$ 25.500" },
  { min: 81,  max: 86,  result: "Estola da serenidade",        preco: "T$ 25.500" },
  { min: 87,  max: 88,  result: "Manto do morcego",            preco: "T$ 25.500" },
  { min: 89,  max: 94,  result: "Pulseiras da celeridade",     preco: "T$ 25.500" },
  { min: 95,  max: 100, result: "Tiara da sapiência",          preco: "T$ 25.500" },
];

// ─── Tabela 8-15: Acessórios Maiores ─────────────────────────────────────────

export const ACESSORIOS_MAIORES: EspecificaEntry[] = [
  { min: 1,   max: 2,   result: "Elmo do teletransporte",            preco: "T$ 30.000" },
  { min: 3,   max: 4,   result: "Gema da telepatia",                 preco: "T$ 30.000" },
  { min: 5,   max: 9,   result: "Gema elemental",                    preco: "T$ 30.000" },
  { min: 10,  max: 15,  result: "Manual da saúde corporal",          preco: "T$ 30.000" },
  { min: 16,  max: 21,  result: "Manual do bom exercício",           preco: "T$ 30.000" },
  { min: 22,  max: 27,  result: "Manual dos movimentos precisos",    preco: "T$ 30.000" },
  { min: 28,  max: 34,  result: "Medalhão de Lena",                  preco: "T$ 30.000" },
  { min: 35,  max: 40,  result: "Tomo da compreensão",               preco: "T$ 30.000" },
  { min: 41,  max: 46,  result: "Tomo da liderança e influência",    preco: "T$ 30.000" },
  { min: 47,  max: 52,  result: "Tomo dos grandes pensamentos",      preco: "T$ 30.000" },
  { min: 53,  max: 57,  result: "Anel refletor",                     preco: "T$ 51.000" },
  { min: 58,  max: 60,  result: "Cinto do campeão",                  preco: "T$ 51.000" },
  { min: 61,  max: 67,  result: "Colar guardião",                    preco: "T$ 51.000" },
  { min: 68,  max: 72,  result: "Estatueta animista",                preco: "T$ 51.000" },
  { min: 73,  max: 77,  result: "Anel da liberdade",                 preco: "T$ 60.000" },
  { min: 78,  max: 82,  result: "Tapete voador",                     preco: "T$ 60.000" },
  { min: 83,  max: 87,  result: "Braceletes de ouro",                preco: "T$ 64.500" },
  { min: 88,  max: 89,  result: "Espelho da oposição",               preco: "T$ 75.000" },
  { min: 90,  max: 90,  result: "Robe do arquimago",                 preco: "T$ 90.000" },
  { min: 91,  max: 95,  result: "Orbe das tempestades",              preco: "T$ 97.500" },
  { min: 96,  max: 97,  result: "Anel da regeneração",               preco: "T$ 97.500" },
  { min: 98,  max: 99,  result: "Tiara da sapiência",                preco: "T$ 97.500" },
  { min: 100, max: 100, result: "Espelho do aprisionamento",         preco: "T$ 150.000" },
];

// ─── Categoria de Mágico: 1d6 ────────────────────────────────────────────────
// 1-2 = Arma · 3 = Armadura/Escudo · 4-6 = Acessório

export const MAGICO_CATEGORIAS = [
  { min: 1, max: 2, label: "Arma" },
  { min: 3, max: 3, label: "Armadura/Escudo" },
  { min: 4, max: 6, label: "Acessório" },
] as const;

// Subcategorias de Acessório por grau do item mágico
export type GrauMagico = "menor" | "medio" | "maior";
export const ACESSORIO_POR_GRAU: Record<GrauMagico, EspecificaEntry[]> = {
  menor: ACESSORIOS_MENORES,
  medio: ACESSORIOS_MEDIOS,
  maior: ACESSORIOS_MAIORES,
};