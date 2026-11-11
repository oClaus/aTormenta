// types/regiao.ts

export type RegionTag = "Reinado" | "Além do Reinado" | "Além de Arton";

// Ordem em que as categorias aparecem na página
export const REGION_TAGS: RegionTag[] = ["Reinado", "Além do Reinado", "Além de Arton"];

// Linha da caixa de informações (Nome Oficial, Lema, Capital...). Cada região escolhe quais usar.
export interface RegionFact {
  label: string;
  value: string;
}

// Caixa de destaque dentro de uma seção (como "As Amazonas de Hippion")
export interface RegionSidebar {
  title: string;
  content: string;
}

// Sub-entrada dentro de uma seção (usada em "Locais Importantes": Valkaria, Vilent, ...)
export interface RegionPlace {
  name: string;
  content: string;
}

export interface RegionSection {
  title: string; // ex: "História", "Geografia", "Povo & Costumes"
  content?: string; // texto da seção (aceita \n, **negrito**, *itálico*, "> citação", "- lista", "### subtítulo")
  places?: RegionPlace[]; // sub-entradas opcionais
  sidebars?: RegionSidebar[]; // caixas de destaque opcionais, mostradas depois do texto
}

export interface Region {
  id: string;
  name: string;
  subtitle?: string; // ex: "O Reino Capital"
  tag: RegionTag;
  image: string; // foto do card e do topo da janela, ex: "/regioes/deheon.jpg"
  intro?: string; // texto de abertura
  coatOfArms?: string; // brasão, ex: "/regioes/deheon-brasao.png"
  map?: string; // mapa, ex: "/regioes/deheon-mapa.jpg"
  facts?: RegionFact[]; // caixa de informações
  sections?: RegionSection[]; // o resto do conteúdo, na ordem que você quiser
}

// Card especial de cada categoria (aparece separado, no começo da página)
export interface RegionTagInfo {
  tag: RegionTag;
  description: string; // mesmo formato de texto das seções
  image?: string;
  sections?: RegionSection[];
}
