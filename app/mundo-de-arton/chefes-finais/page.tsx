"use client";

import { useState, useMemo, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { fontesDePoder, emanacoes, partesModulares } from "@/data/chefes-finais";
import { PowerSource, Emanation, ModularPart } from "@/types/chefe-final";
import ThemeToggle from "@/components/ThemeToggle";

// --- Ícones ---

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="none" aria-hidden="true" className={className}>
      <path d="M3 29V12C3 6.48 7.48 2 13 2H29" stroke="rgb(var(--accent-rgb))" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 21c5 0 8 3 8 8" stroke="rgb(var(--accent-rgb))" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function Corners() {
  return (
    <>
      <CornerOrnament className="absolute -top-px -left-px opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </>
  );
}

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function SkullIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M12 3C7.6 3 5 6 5 9.5c0 2.3 1.1 3.8 2.5 4.8V18h9v-3.7c1.4-1 2.5-2.5 2.5-4.8C19 6 16.4 3 12 3z" />
      <circle cx="9.3" cy="10" r="1.3" />
      <circle cx="14.7" cy="10" r="1.3" />
      <path d="M10 18v3M14 18v3M12 13.5v1.5" />
    </svg>
  );
}

// --- Utilitários ---

function normalize(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getPreviewText(text: string, maxLength = 150): string {
  const plain = text.replace(/\s+/g, " ").trim();
  return plain.length <= maxLength ? plain : plain.slice(0, maxLength).trim() + "…";
}

// --- Blocos reutilizáveis de texto ---

const SubHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">
    {children}
  </h3>
);

const BulletList = ({ items }: { items: [string, string][] }) => (
  <ul className="space-y-4">
    {items.map(([label, text]) => (
      <li key={label} className="flex items-start gap-3">
        <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
        <span className="font-medium">
          <strong className="font-display text-red-800">{label}.</strong> {text}
        </span>
      </li>
    ))}
  </ul>
);

const PlainList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((text) => (
      <li key={text} className="flex items-start gap-3">
        <span className="text-[10px] text-red-800/60 mt-2 shrink-0">◆</span>
        <span className="font-medium">{text}</span>
      </li>
    ))}
  </ul>
);

const RuleAccordion = ({
  icon,
  title,
  children,
  defaultOpen = false,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
        style={!open ? { borderRadius: "0.75rem" } : undefined}
      >
        <div className="flex items-center gap-3">
          <span className="text-red-800/70 shrink-0">{icon}</span>
          <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide text-left">
            {title}
          </h2>
        </div>
        <span className={`text-red-800 text-2xl shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${
          open ? "max-h-[20000px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg leading-relaxed flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Modal genérico ---

const DetailModal = ({
  onClose,
  eyebrow,
  title,
  children,
}: {
  onClose: () => void;
  eyebrow?: ReactNode;
  title: string;
  children: ReactNode;
}) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border-2 border-amber-900/30 bg-[rgb(var(--bg-card-rgb))] shadow-2xl p-6 md:p-10"
      >
        <CornerOrnament className="absolute -top-px -left-px opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-70 pointer-events-none" />
        <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-70 pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-800 hover:scale-110 transition-transform text-xl font-bold w-9 h-9 flex items-center justify-center rounded-full hover:bg-[rgb(var(--bg-inset-rgb))]"
          title="Fechar"
        >
          ✕
        </button>

        {eyebrow}

        <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 pr-10">{title}</h3>

        <div className="text-amber-950/85 text-base md:text-lg leading-relaxed font-serif font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Componentes (fontes de poder, emanações e partes) em uma lista única ---

type Entry =
  | { kind: "fonte"; data: PowerSource }
  | { kind: "emanacao"; data: Emanation }
  | { kind: "parte"; data: ModularPart };

type EntryKind = Entry["kind"];

const KIND_ORDER: EntryKind[] = ["fonte", "emanacao", "parte"];

const KIND_LABEL: Record<EntryKind, string> = {
  fonte: "Fonte de Poder",
  emanacao: "Emanação",
  parte: "Parte Modular",
};

const KIND_ARCHETYPE: Record<EntryKind, string> = {
  fonte: "Mestre da Fonte",
  emanacao: "Mestre da Fonte",
  parte: "Vilão Modular",
};

const KIND_STYLE: Record<EntryKind, string> = {
  fonte: "border-amber-700/50 text-amber-800",
  emanacao: "border-indigo-700/40 text-indigo-800",
  parte: "border-red-800/40 text-red-800",
};

const entryName = (e: Entry) => e.data.name;

function entryPreview(e: Entry): string {
  if (e.kind === "fonte") return getPreviewText(e.data.text);
  return getPreviewText(e.data.description);
}

function entrySearchText(e: Entry): string {
  let parts: string[];
  if (e.kind === "fonte") {
    parts = [e.data.name, e.data.text];
  } else if (e.kind === "emanacao") {
    parts = [e.data.name, e.data.description, e.data.note ?? "", e.data.benefits, ...e.data.stages];
  } else {
    parts = [e.data.name, e.data.description, ...e.data.abilities.flatMap((a) => [a.name, a.action ?? "", a.text])];
  }
  return normalize([...parts, KIND_LABEL[e.kind], KIND_ARCHETYPE[e.kind]].join(" "));
}

const Badge = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span
    className={`font-display text-[10px] px-2 py-1 rounded border bg-[rgb(var(--bg-inset-rgb))] uppercase tracking-widest font-bold inline-block ${className}`}
  >
    {children}
  </span>
);

const LabelBadge = ({ children }: { children: ReactNode }) => (
  <span className="font-display text-[10px] px-2 py-1 rounded bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold inline-block mb-2">
    {children}
  </span>
);

const EntryCard = ({ entry, onOpen }: { entry: Entry; onOpen: (e: Entry) => void }) => (
  <div
    onClick={() => onOpen(entry)}
    className="card-grain group relative rounded-xl border-2 border-amber-900/20 shadow-sm overflow-hidden bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer p-5 md:p-6"
  >
    <Corners />
    <div className="mb-3">
      <Badge className={KIND_STYLE[entry.kind]}>{KIND_LABEL[entry.kind]}</Badge>
    </div>
    <h3 className="font-display text-lg font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors mb-2">
      {entryName(entry)}
    </h3>
    <p className="text-amber-950/70 text-sm leading-relaxed">{entryPreview(entry)}</p>
    {entry.kind === "parte" && (
      <p className="mt-3 text-xs italic text-amber-950/50">
        {entry.data.abilities.length} habilidade{entry.data.abilities.length !== 1 ? "s" : ""}
      </p>
    )}
    {entry.kind === "emanacao" && <p className="mt-3 text-xs italic text-amber-950/50">3 estágios</p>}
  </div>
);

const EntryModalBody = ({ entry }: { entry: Entry }) => {
  if (entry.kind === "fonte") {
    return <p>{entry.data.text}</p>;
  }

  if (entry.kind === "emanacao") {
    const e = entry.data;
    return (
      <div className="flex flex-col gap-6">
        <p>{e.description}</p>
        {e.note && (
          <blockquote className="border-l-4 border-red-800 pl-4 py-3 text-base italic bg-[rgb(var(--bg-inset-rgb))]/50 rounded-r-xl shadow-sm">
            {e.note}
          </blockquote>
        )}
        <div>
          <LabelBadge>Benefícios</LabelBadge>
          <p>{e.benefits}</p>
        </div>
        {e.stages.map((stage, i) => (
          <div key={i}>
            <LabelBadge>Estágio {i + 1}</LabelBadge>
            <p>{stage}</p>
          </div>
        ))}
      </div>
    );
  }

  const p = entry.data;
  return (
    <div className="flex flex-col gap-6">
      <p>{p.description}</p>
      <div className="flex flex-col gap-4">
        {p.abilities.map((a) => (
          <div
            key={a.name}
            className="rounded-lg border-2 border-amber-900/15 bg-[rgb(var(--bg-inset-rgb))] p-4"
          >
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h4 className="font-display text-base font-bold text-red-800">{a.name}</h4>
              <Badge className="border-amber-900/20 text-amber-950/60">{a.action ?? "Passiva"}</Badge>
            </div>
            <p className="text-base">{a.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Página Principal ---

export default function ChefesFinaisPage() {
  const [search, setSearch] = useState("");
  const [selectedKind, setSelectedKind] = useState<string>("all");
  const [openEntry, setOpenEntry] = useState<Entry | null>(null);

  const entries = useMemo<{ entry: Entry; text: string }[]>(() => {
    const all: Entry[] = [
      ...fontesDePoder.map((data) => ({ kind: "fonte" as const, data })),
      ...emanacoes.map((data) => ({ kind: "emanacao" as const, data })),
      ...partesModulares.map((data) => ({ kind: "parte" as const, data })),
    ];
    return all.map((entry) => ({ entry, text: entrySearchText(entry) }));
  }, []);

  const filtered = useMemo(() => {
    const term = normalize(search);
    return entries
      .filter(({ entry, text }) => text.includes(term) && (selectedKind === "all" || entry.kind === selectedKind))
      .map(({ entry }) => entry)
      .sort((a, b) => {
        const diff = KIND_ORDER.indexOf(a.kind) - KIND_ORDER.indexOf(b.kind);
        return diff !== 0 ? diff : entryName(a).localeCompare(entryName(b), "pt-BR");
      });
  }, [entries, search, selectedKind]);

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
          <Link href="/" className="inline-block group self-start md:self-auto">
            <h1
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              a-Tormenta
            </h1>
          </Link>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                Início
              </Link>
              <span className="text-amber-900/40">/</span>
              <Link href="/mundo-de-arton" className="text-amber-950/70 hover:text-red-800 transition-colors">
                Mundo de Arton
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Chefes Finais</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <div className="flex items-center gap-4 mb-3">
            <SkullIcon className="w-9 h-9 opacity-80" />
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-red-800 drop-shadow-sm tracking-wider"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              Chefes Finais
            </h1>
          </div>
          <div className="flex items-center gap-3 w-full mb-6">
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
              <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
              <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
            </svg>
            <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
          </div>
          <p className="text-amber-950/85 text-lg font-medium leading-relaxed">
            Este capítulo apresenta regras para transformar qualquer criatura de Tormenta20 em um chefe
            final, um adversário especialmente preparado para uma batalha decisiva em sua campanha. Não
            se trata apenas de tornar um monstro mais poderoso; nesse caso, o mestre poderia simplesmente
            escolher uma criatura de ND mais alto (e ainda pode fazê-lo, se preferir). O chefe final, no
            entanto, proporciona um confronto diferente e marcante, com ataques vastos e inesperados,
            capazes de desafiar o grupo inteiro. Mesmo em níveis baixos, você poderá oferecer aos
            jogadores um combate final épico, um encerramento digno para a jornada. Conforme o próprio
            nome sugere, reserve o chefe final para a última batalha da aventura. Evite utilizá-lo em
            encontros normais, a fim de preservar seu impacto no momento apropriado. Ainda assim, é
            possível empregar chefes em combates marcantes, embora não finais. Eles também podem ser
            adequados para campanhas baseadas em exploração e investigação, em que combates são escassos,
            mas extremamente importantes e dramáticos.
          </p>
        </div>

        {/* Criando um Chefe Final */}
        <RuleAccordion icon={<SkullIcon className="w-5 h-5" />} title="Criando um Chefe Final" defaultOpen>
          <p className="font-medium">
            Mais do que uma criatura poderosa, um chefe final é um desafio especial, que exige dos
            jogadores pensamento estratégico, uso inteligente de recursos e boas ideias. Cada chefe final
            é formado por uma criatura (o chefe) e um arquétipo, que define suas características
            especiais. Este livro apresenta dois arquétipos, mestre da fonte e vilão modular; outros
            suplementos de Tormenta20, como o Ameaças de Arton, descrevem arquétipos adicionais.
          </p>
          <p className="font-medium">
            Para criar um chefe final, primeiramente escolha uma criatura. Você pode usar qualquer tipo
            de criatura, mas as mais apropriadas são solos e especiais (lacaios, por definição, não são
            bons chefes finais). Ao escolher o chefe final, leve em conta não apenas suas estatísticas de
            combate, mas também seu papel dentro da aventura. Pense se ele faria sentido como o inimigo
            final dos aventureiros, tanto em termos narrativos quanto em relação aos outros inimigos que o
            grupo enfrentou.
          </p>
          <div>
            <p className="font-medium mb-4">
              Uma vez que tenha escolhido a criatura, faça os seguintes ajustes em suas estatísticas.
            </p>
            <PlainList
              items={[
                "Dobre seus pontos de vida.",
                "Aumente seus pontos de mana (se houver) em +2 por ND.",
                "Acrescente a habilidade Maior que a Morte (p. 11) e, se a criatura for de patamar veterano ou superior, Redução de Dano, conforme seu patamar: 5 para veterano, 10 para campeão e 20 para lenda.",
                "Aumente seu ND em 2 (apenas para efeitos de XP e tesouro). Se a criatura tiver ND menor que 1, ele se torna 2.",
              ]}
            />
          </div>
        </RuleAccordion>

        {/* Mestre da Fonte */}
        <RuleAccordion icon={<SkullIcon className="w-5 h-5" />} title="Mestre da Fonte">
          <p className="font-medium">
            Um celestial conectado magicamente a Odisseia, emanando um vórtice descontrolado de energia
            positiva. Um ente enlouquecido por uma maldição, que propaga ondas de trevas pela floresta. O
            mestre da fonte é um chefe final no centro de um poderoso fenômeno sobrenatural que assola a
            região ao seu redor. Um chefe final do tipo mestre da fonte é definido por uma emanação, um
            efeito poderoso gerado a partir do local onde ele se encontra, e que atua como um perigo
            adicional a ser superado. Enquanto o rei da arena (descrito em Ameaças de Arton) controla um
            espaço repleto de armadilhas e defesas, o mestre da fonte domina a origem de um efeito único e
            poderoso, que gera um desafio a ser superado em estágios. Para um exemplo de mestre da fonte,
            veja Ankhenaten, a Rainha de Antylia, na página 103.
          </p>

          <div>
            <SubHeading>Preparação</SubHeading>
            <p className="font-medium mb-4">
              Para criar um mestre da fonte, você precisa de um chefe final, uma fonte de poder e uma
              emanação.
            </p>
            <BulletList
              items={[
                [
                  "Fonte de Poder",
                  "É aquilo que alimenta o poder do chefe e permite que ele gere sua emanação. Os personagens só podem interagir com a fonte de poder quando se aproximam do chefe — ou seja, durante o confronto final (veja a seguir). Desabilitar uma fonte de poder cancela a emanação e quaisquer benefícios que ela esteja fornecendo.",
                ],
                [
                  "Emanação",
                  "Este é o efeito gerado pelo chefe e ocupa uma grande área ao seu redor. Seu tamanho depende do cenário — um chefe no topo de uma montanha pode gerar ventos em um raio de três quilômetros, enquanto outro pode emitir ondas de pesadelos que preenchem todo o interior de um pequeno castelo. A emanação determina o benefício recebido pelo chefe e os testes necessários para superá-la (veja Estágios, a seguir).",
                ],
              ]}
            />
            <p className="font-medium mt-4">
              A CD dos testes contra a fonte de poder e a emanação depende do patamar do chefe: 15 para
              iniciante, 25 para veterano, 30 para campeão e 35 para lenda. Criaturas geradas por esses
              efeitos não contam para recompensas do encontro. Alguns efeitos de fontes de poder e de
              emanações possuem quatro valores separados por uma barra. Nesse caso, use o valor
              correspondente ao patamar do chefe final (o primeiro para um chefe iniciante, o segundo para
              um veterano e assim por diante). Se uma fonte de poder ou emanação causar dano, escolha um
              tipo de dano para cada efeito, conforme apropriado para o conceito de seu chefe final. A
              menos que indicado em contrário em sua descrição, condições e penalidades geradas por uma
              emanação duram até o fim do confronto final ou até que a fonte de poder seja desabilitada.
              Fontes de poder e emanações podem ser mágicas ou não. Escolha conforme o mais apropriado para
              a natureza de seus efeitos e do próprio chefe final. Você pode inclusive combinar efeitos
              mundanos e mágicos (como uma fonte de poder mágica que gera uma emanação mundana).
            </p>
          </div>

          <div>
            <SubHeading>Conduzindo o Encontro</SubHeading>
            <p className="font-medium mb-4">
              Um combate contra um mestre da fonte é conduzido em três estágios e um confronto final.
            </p>
            <BulletList
              items={[
                [
                  "Estágios",
                  "Cada estágio representa uma região da área sob efeito da fonte de poder do chefe final. O tamanho dessa área e o tempo necessário para percorrê-la dependem da natureza do desafio, mas, em termos de regras, não têm impacto na resolução do estágio. A menos que indicado em contrário, os personagens podem usar habilidades a qualquer momento durante cada estágio. Entretanto, cada estágio conta como uma cena. Uma vez que superem os três estágios, os personagens encontram o chefe e o confronto final tem início.",
                ],
                [
                  "Confronto Final",
                  "O confronto final é conduzido como um combate normal, em que os personagens começam em alcance médio do chefe. Durante esse confronto, os personagens podem interagir com a fonte de poder — desabilitá-la elimina a emanação e os benefícios que ela fornece.",
                ],
              ]}
            />
          </div>

          <div>
            <SubHeading>Desvendando uma Fonte de Poder</SubHeading>
            <p className="font-medium">
              Antes de desabilitar uma fonte de poder, os personagens precisam descobrir como fazer isso.
              Os heróis podem desvendar quais perícias ou ações são necessárias através de tentativa e
              erro, ou podem deduzir a partir da descrição da fonte ou de pistas obtidas anteriormente na
              aventura. Por fim, um personagem pode gastar uma ação completa e fazer um teste de uma
              perícia apropriada (a critério do mestre) contra a CD da fonte para analisá-la. Um sucesso
              revela uma das perícias ou ações que podem desabilitar a fonte.
            </p>
          </div>

          <div>
            <SubHeading>Descrevendo as Emanações</SubHeading>
            <p className="font-medium">
              Cada emanação apresentada aqui é propositalmente mecânica e vaga, para que possa ser
              utilizada em várias situações e cenários. Ao apresentar uma emanação e descrever a forma
              como os personagens avançam por cada estágio, descreva os efeitos da emanação conforme se
              aplicam ao cenário onde os personagens estão. Um campo repulsor em um templo de Tenebra, por
              exemplo, pode se manifestar como ondas de espíritos que atravessam os heróis, retardando seu
              avanço e causando dano de trevas. Esses mesmos espíritos podem circular o chefe,
              interpondo-se contra ataques e disparos para representar os benefícios fornecidos pela
              emanação.
            </p>
          </div>

          <p className="font-medium italic text-amber-950/70">
            As fontes de poder e as emanações estão na seção Componentes, mais abaixo.
          </p>
        </RuleAccordion>

        {/* Vilão Modular */}
        <RuleAccordion icon={<SkullIcon className="w-5 h-5" />} title="Vilão Modular">
          <p className="font-medium">
            Um inventor kliren trajando uma armadura avançada, repleta de mecanismos e acessórios
            automatizados acoplados. Um vampiro cercado por espíritos vinculados ao seu corpo, cada um
            fornecendo uma perigosa e poderosa habilidade. Uma dragoa dos mares cujo corpo abriga corais
            capazes de lutar ao seu lado. O vilão modular é um indivíduo cujas habilidades são
            complementadas por equipamentos ou aliados vinculados ao seu próprio corpo, que potencializam
            seu poder e o protegem em combate. Enquanto outros vilões reinam supremos em seus covis, o
            chefe final modular carrega consigo suas mais poderosas e mortíferas armas especiais. Um vilão
            modular é definido por uma seleção de partes adicionais, que fornecem a ele habilidades e
            ações extras. Seu poder não depende de um local específico, mas sim de acesso às suas próprias
            capacidades. Isso faz dele um antagonista ideal para campanhas onde o vilão deve ser
            encontrado em diferentes locais, ou quando é ele quem vai ao encontro dos aventureiros. Para
            um exemplo de vilão modular, veja Judara, a Soberana do Pesadelo, na página 146.
          </p>

          <div>
            <SubHeading>Preparação</SubHeading>
            <p className="font-medium mb-4">
              Para criar um vilão modular, você precisa de um chefe final e de três a cinco partes. Um
              vilão modular normalmente tem três partes, mas é possível aumentar esse número até cinco.
              Cada parte adicional além da terceira aumenta o ND do vilão em +1 (apenas para efeitos de XP
              e tesouro). Ao contrário de outros chefes finais, não duplique o total de pontos de vida do
              vilão modular (veja Características das Partes, a seguir).
            </p>
            <BulletList
              items={[
                [
                  "Partes",
                  "Uma parte representa um elemento adicional incorporado ao corpo do chefe. A natureza exata disso fica a seu critério; partes em um golem podem representar melhorias em sua estrutura, enquanto partes em um bando podem ser equipamentos ou indivíduos adicionais. Da mesma forma, fique à vontade para decidir a origem dessas partes: elas podem ser fruto de um ritual executado pelo chefe, uma evolução natural ou mágica, ou uma invenção especial. Exceto quando indicado o contrário, uma mesma parte não pode ser aplicada mais de uma vez no mesmo chefe. Os efeitos de uma parte podem ser mágicos ou não. Escolha o mais apropriado para cada parte conforme o conceito do chefe.",
                ],
                [
                  "Características",
                  "Cada parte possui um total de pontos de vida igual a 40% dos PV do chefe. Além disso, a parte tem valores de Defesa e de testes de resistência, redução de dano, imunidades e vulnerabilidades iguais aos do chefe. Por fim, qualquer habilidade do chefe que afete o dano que ele sofre (como Evasão) pode ser aplicada ao dano sofrido por uma parte.",
                ],
                [
                  "Habilidades",
                  "Cada parte tem uma ou mais habilidades. Habilidades passivas e reações estão sempre à disposição do chefe (a menos que a parte seja desabilitada). Habilidades que exigem outros tipos de ações só podem ser usadas no turno da parte (veja Conduzindo o Encontro). Para habilidades com quatro valores separados por uma barra, use o valor correspondente ao patamar do chefe final (o primeiro para um chefe iniciante, o segundo para um veterano e assim por diante). Da mesma forma, a CD dos testes contra a parte depende do patamar do chefe: 15 para iniciante, 25 para veterano, 30 para campeão e 35 para lenda. Se a parte causar dano, escolha um tipo para esse dano, conforme apropriado para o conceito do chefe.",
                ],
                [
                  "Partes em Combate",
                  "Cada parte é considerada uma criatura separada para fins de ser atacada ou ser alvo de habilidades, efeitos e condições. Para efeitos em área, se o efeito atingir todo o espaço ocupado pelo chefe, cada parte é afetada como se fosse uma criatura separada (e tem direito a testes de resistência como normal). Se a área não for grande o suficiente para afetar todo o chefe, considere que apenas uma de suas partes é afetada (à escolha do controlador do efeito). Uma parte reduzida a 0 PV é desabilitada (partes não têm pontos de vida negativos); ela não pode mais ser usada e não fornece mais nenhum benefício.",
                ],
              ]}
            />
          </div>

          <div>
            <SubHeading>Conduzindo o Encontro</SubHeading>
            <p className="font-medium mb-4">
              Um combate contra um vilão modular é conduzido como um combate normal, mas com duas
              alterações importantes. Primeiramente, os personagens não podem afetar o chefe de nenhuma
              forma até que desabilitem todas as suas partes. Nem mesmo efeitos em área conseguem afetá-lo
              (mas podem afetar todas as partes, como descrito anteriormente). A forma exata como as partes
              protegem o chefe fica a seu critério, conforme a natureza da criatura. Elas podem se mover de
              forma a proteger o chefe, ou ser a origem de um campo de força impenetrável, por exemplo.
            </p>
            <p className="font-medium mb-4">
              Além de proteger o chefe, suas partes concedem a ele ações extras. A cada rodada, o chefe
              tem um turno como normal (em que só pode usar suas próprias habilidades) e um turno
              adicional para cada uma de suas partes que não está desabilitada. Esses turnos ocorrem
              respectivamente em sua contagem de iniciativa –5, depois –10 e assim por diante, até que
              todas as partes tenham agido. Em cada um desses turnos adicionais, o chefe pode usar uma
              parte que ainda não tenha usado na rodada.
            </p>
            <blockquote className="border-l-4 border-red-800 pl-4 py-3 text-base italic text-amber-950/85 bg-[rgb(var(--bg-card-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">
              Uma mantícora modular com três partes está enfrentando os personagens. A iniciativa dela é
              27. Em seu turno, ela age normalmente, mas pode usar apenas suas próprias habilidades. Na
              contagem de iniciativa 22, ela tem um turno adicional, em que pode usar as habilidades de
              uma de suas partes. Na contagem de iniciativa 17, ela recebe um segundo turno adicional, em
              que pode usar outra de suas partes (que não tenha sido usada na contagem 22). Por fim, na
              contagem de iniciativa 12 ela recebe um terceiro turno adicional, em que pode usar sua parte
              restante.
            </blockquote>
          </div>

          <p className="font-medium italic text-amber-950/70">
            As partes do vilão modular estão na seção Componentes, mais abaixo.
          </p>
        </RuleAccordion>

        {/* Componentes */}
        <div className="mb-6 flex items-center gap-3 mt-14">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-3xl font-bold text-red-800 uppercase tracking-wide">Componentes</h2>
        </div>
        <p className="text-amber-950/85 text-lg font-medium leading-relaxed mb-8">
          Fontes de poder e emanações são usadas pelo mestre da fonte; as partes são usadas pelo vilão
          modular. Clique em um card para ver todos os detalhes.
        </p>

        <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Componente
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por nome, habilidade ou efeito..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              {search ? (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
                  title="Limpar busca"
                >
                  ✕
                </button>
              ) : (
                <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
              )}
            </div>
          </div>
          <div className="md:w-64">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Tipo
            </label>
            <select
              value={selectedKind}
              onChange={(e) => setSelectedKind(e.target.value)}
              className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm font-medium"
            >
              <option value="all">Todos os tipos</option>
              <option value="fonte">Fontes de Poder</option>
              <option value="emanacao">Emanações</option>
              <option value="parte">Partes do Vilão Modular</option>
            </select>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-800 text-2xl">❖</span>
          <h3 className="font-display text-xl font-bold text-red-800 uppercase tracking-wide">
            {filtered.length} {filtered.length === 1 ? "Componente Encontrado" : "Componentes Encontrados"}
          </h3>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhum componente encontrado.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filtered.map((entry) => (
              <EntryCard key={`${entry.kind}-${entry.data.id}`} entry={entry} onOpen={setOpenEntry} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>

      {openEntry && (
        <DetailModal
          onClose={() => setOpenEntry(null)}
          title={entryName(openEntry)}
          eyebrow={
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge className={KIND_STYLE[openEntry.kind]}>{KIND_LABEL[openEntry.kind]}</Badge>
              <Badge className="border-amber-900/20 text-amber-950/60">{KIND_ARCHETYPE[openEntry.kind]}</Badge>
            </div>
          }
        >
          <EntryModalBody entry={openEntry} />
        </DetailModal>
      )}
    </div>
  );
}
