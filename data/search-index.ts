// data/search-index.ts
// Índice centralizado de busca — agrega todos os dados do compêndio.
// Cada item tem: id, name, description, category, href, tags (campos extras para busca)

export interface SearchItem {
  id: string;
  name: string;
  description: string;
  category: string;       // Nome legível da seção (ex: "Raças", "Magias")
  href: string;           // Link para a página correta
  tags: string;           // Campos extras concatenados para busca (ex: tipo, escola, nd...)
}

// ─── Importações dos dados ────────────────────────────────────────────────────
import { races }           from "@/data/races";
import { spells }          from "@/data/spells";
import { threats }         from "@/data/threats";
import { weapons }         from "@/data/weapons";
import { animals }         from "@/data/animals";
import { aparatos }        from "@/data/aparatos";
import { armors }          from "@/data/armors";
import { clothing }        from "@/data/clothing";
import { attributes }      from "@/data/attributes";
import { conditions }      from "@/data/conditions";
import { powersGerais }    from "@/data/powers-gerais";
import { powersBardo }     from "@/data/powers-bardo";
import { powersBucaneiro } from "@/data/powers-bucaneiro";
import { powersGeraisConcedido } from "@/data/powers-gerais-concedido";
// Adicione outros imports conforme for criando novos arquivos de dados:
// import { classes }      from "@/data/classes";
// import { adventures }   from "@/data/adventures";
// import { artifacts }    from "@/data/artifacts";
// import { alchemys }     from "@/data/alchemys";
// import { bosses }       from "@/data/bosses";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function safe(v: unknown): string {
  if (!v) return "";
  if (typeof v === "string") return v;
  if (typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(safe).join(" ");
  if (typeof v === "object") return Object.values(v as object).map(safe).join(" ");
  return "";
}

// ─── Construção do índice ─────────────────────────────────────────────────────
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Raças
  races.forEach((r) =>
    items.push({
      id: r.id,
      name: r.name,
      description: r.description ?? "",
      category: "Raças",
      href: `/racas#${r.id}`,
      tags: safe(r.abilities) + " " + safe(r.attributeModifiers),
    })
  );

  // Magias
  spells.forEach((s) =>
    items.push({
      id: s.id,
      name: s.name,
      description: s.description ?? "",
      category: "Magias",
      href: `/magias#${s.id}`,
      tags: [s.type, s.school, s.execution, s.range, safe(s.enhancements)].join(" "),
    })
  );

  // Ameaças / Criaturas
  threats.forEach((t) =>
    items.push({
      id: t.id,
      name: t.name,
      description: t.description ?? "",
      category: "Ameaças",
      href: `/ameacas#${t.id}`,
      tags: [t.nd, t.tipo, t.tema, t.tamanho, t.papel, safe(t.habilidades)].join(" "),
    })
  );

  // Armas
  weapons.forEach((w) =>
    items.push({
      id: w.id,
      name: w.name,
      description: w.description ?? "",
      category: "Equipamentos",
      href: `/equipamentos#${w.id}`,
      tags: [w.purpose, w.proficiency, w.grip, w.type, w.damage, w.price].join(" "),
    })
  );

  // Animais / Montarias
  animals.forEach((a) =>
    items.push({
      id: a.id,
      name: a.name,
      description: a.description ?? "",
      category: "Montarias",
      href: `/montarias#${a.id}`,
      tags: [a.price, a.spaces, a.origin].join(" "),
    })
  );

  // Aparatos (engenhoca)
  aparatos.forEach((a) =>
    items.push({
      id: a.id,
      name: a.name,
      description: a.description ?? "",
      category: "Equipamentos",
      href: `/equipamentos#${a.id}`,
      tags: [a.price, a.origin].join(" "),
    })
  );


  // Armaduras
  armors.forEach((a) =>
    items.push({
      id: a.id,
      name: a.name,
      description: a.description ?? "",
      category: "Equipamentos",
      href: `/equipamentos#${a.id}`,
      tags: [safe((a as any).type), a.price, a.origin].join(" "),
    })
  );

  // Vestuário
  clothing.forEach((c) =>
    items.push({
      id: c.id,
      name: c.name,
      description: c.description ?? "",
      category: "Equipamentos",
      href: `/equipamentos#${c.id}`,
      tags: [c.price, c.origin].join(" "),
    })
  );

  // Atributos
  attributes.forEach((a) =>
    items.push({
      id: a.id,
      name: a.name,
      description: a.description ?? "",
      category: "Regras do Jogo",
      href: `/regras#${a.id}`,
      tags: [safe((a as any).abbreviation)].join(" "),
    })
  );

  // Condições
  conditions.forEach((c) =>
    items.push({
      id: c.id,
      name: c.name,
      description: c.description ?? "",
      category: "Condições",
      href: `/condicoes#${c.id}`,
      tags: "",
    })
  );


  // Poderes Gerais
  powersGerais.forEach((p) =>
    items.push({
      id: p.id,
      name: p.name,
      description: p.description ?? "",
      category: "Poderes",
      href: `/poderes#${p.id}`,
      tags: safe((p as any).prerequisite),
    })
  );

  // Poderes de Bardo
  powersBardo.forEach((p) =>
    items.push({
      id: p.id,
      name: p.name,
      description: p.description ?? "",
      category: "Poderes",
      href: `/poderes#${p.id}`,
      tags: ["Bardo", safe((p as any).prerequisite)].join(" "),
    })
  );

  // Poderes de Bucaneiro
  powersBucaneiro.forEach((p) =>
    items.push({
      id: p.id,
      name: p.name,
      description: p.description ?? "",
      category: "Poderes",
      href: `/poderes#${p.id}`,
      tags: ["Bucaneiro", safe((p as any).prerequisite)].join(" "),
    })
  );

  // Poderes Gerais Concedido
  powersGeraisConcedido.forEach((p) =>
    items.push({
      id: p.id,
      name: p.name,
      description: p.description ?? "",
      category: "Poderes",
      href: `/poderes#${p.id}`,
      tags: safe((p as any).prerequisite),
    })
  );

  return items;
}

// Instância singleton — importar isso nas páginas que precisam
export const searchIndex: SearchItem[] = buildSearchIndex();
