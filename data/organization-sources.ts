// data/organization-sources.ts
import { OrganizationSource } from "@/types/organization";

// Opcional: texto de apresentação de cada fonte. O "name" precisa ser igual ao
// "origem" usado nas organizações. Se a lista estiver vazia, a seção
// "Fontes & Como Usar" simplesmente não aparece na página.
//
// Exemplo:
//
//   {
//     name: "Nome da Revista 000",
//     description: "Frase de apresentação da fonte.",
//     sections: [{ title: "Sobre a Matéria", content: "Texto..." }],
//   },

export const organizationSources: OrganizationSource[] = [];