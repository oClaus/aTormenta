// types/organization.ts

// ---------------------------------------------------------------------------
// COMO USAR
//
// Toda organização tem: id, name, origem (de onde você tirou) e summary (a
// frase curta que aparece no card). O conteúdo é uma lista de "sections" livre,
// então serve tanto pra uma organização de revista quanto pra um capítulo de
// livro com subtítulos.
//
// 1) Estilo revista (lore + membros + como usar + item/poder/parceiro novo):
//
//   {
//     id: "exemplo",
//     name: "Exemplo",
//     summary: "Frase curta do card.",
//     sections: [
//       { title: "Lore & Descrição", variant: "destaque", content: "Texto..." },
//       { title: "Membros", content: "Texto..." },
//       { title: "Como Usar", content: "Texto..." },
//       { title: "Novo Item Mágico", subtitle: "Nome do Item", variant: "regra", content: "Regras..." },
//     ],
//   }
//
// 2) Estilo livro (texto corrido com subtítulos, ex: "Outros Exércitos"):
//
//   {
//     id: "exemplo-2",
//     name: "Exemplo 2",
//     categoria: "Exércitos & Mercenários",
//     summary: "Frase curta do card.",
//     sections: [
//       { title: "Visão Geral", content: "Texto..." },
//       {
//         title: "Outros Exércitos",
//         subsections: [
//           { title: "Primeiro Reino", content: "Texto..." },
//           { title: "Segundo Reino", content: "Texto..." },
//         ],
//       },
//     ],
//   }
//
// 3) Só texto (como as organizações de licantropos): uma ou duas seções bastam.
//    Quem não tem item novo, parceiro etc. simplesmente não coloca a seção.
//
// Formatação aceita em qualquer "content": \n para quebra de linha, **negrito**,
// *itálico*, "> citação", "- item de lista", "### subtítulo".
// ---------------------------------------------------------------------------

export type OrgSectionVariant =
  | "texto" // padrão: título + texto
  | "destaque" // caixa de destaque (bom pra lore / introdução)
  | "regra"; // caixa de regra (item novo, poder, parceiro, magia...)

export interface OrgSubsection {
  title: string;
  content: string;
}

export interface OrgSection {
  title: string; // ex: "Lore & Descrição", "Membros", "Novo Item Mágico", "Comandante"
  subtitle?: string; // ex: o nome do item novo
  content?: string;
  subsections?: OrgSubsection[];
  variant?: OrgSectionVariant;
}

// Linha de informação rápida (Sede, Líder, Divindade, Papel na campanha...)
export interface OrgFact {
  label: string;
  value: string;
}

export interface Organization {
  id: string;
  name: string;
  origem: string; // de onde veio: "Dragão Brasil 228", "Heróis de Arton, cap. 4", etc.
  categoria?: string; // agrupa/filtra: "Exércitos & Mercenários", "Licantropos"...
  summary: string; // frase curta do card
  image?: string; // ex: "/mundo/orgs/nome.png"
  imageCaption?: string;
  facts?: OrgFact[];
  sections?: OrgSection[];
}

// Para listas onde todas as organizações vêm da mesma fonte, você pode omitir a
// origem em cada uma e passar uma vez só com comOrigem() (e a categoria também,
// se for a mesma para o grupo todo).
export type OrganizationEntry = Omit<Organization, "origem"> & { origem?: string };

export function comOrigem(
  origem: string,
  entries: OrganizationEntry[],
  categoria?: string
): Organization[] {
  return entries.map((e) => ({
    ...e,
    origem: e.origem ?? origem,
    categoria: e.categoria ?? categoria,
  }));
}

// Apresentação de uma fonte (aparece na seção "Fontes & Como Usar" da página).
// Opcional: fontes sem texto não precisam estar cadastradas.
export interface OrganizationSource {
  name: string; // igual ao "origem" das organizações
  description?: string;
  sections?: OrgSection[];
}