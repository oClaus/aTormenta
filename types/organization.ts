export type OrganizationRole = "Vilões" | "Aliados" | "Rivais" | "Neutros";

export interface OrganizationMechanic {
  /** Ex: "NOVO ITEM MÁGICO", "NOVO PODER DE DESTINO" */
  kind: string;
  /** Nome do item/poder/benefício */
  name: string;
  /** Texto completo da regra mecânica */
  description: string;
}

export interface Organization {
  id: string;
  name: string;
  /** Resumo curto para o card da listagem */
  summary: string;
  /** Imagem de capa (opcional) */
  image?: string;
  /** Texto de lore e descrição geral da organização */
  lore: string;
  /** Direcionamento de quem pode representar membros desta organização */
  membros: string;
  /** Gancho de aventura / como usar na campanha */
  comoUsar: string;
  /** Benefício mecânico ao final (item, poder, etc.) */
  mecanica: OrganizationMechanic;
}