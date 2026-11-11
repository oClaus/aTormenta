"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useMemo, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { regioes, regiaoTags } from "@/data/regioes";
import { Region, RegionTag, RegionTagInfo, RegionSection, REGION_TAGS } from "@/types/regiao";
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

function GlobeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  );
}

// --- Utilitários ---

const TAG_STYLES: Record<RegionTag, string> = {
  Reinado: "border-red-800/40 text-red-800",
  "Além do Reinado": "border-amber-700/50 text-amber-800",
  "Além de Arton": "border-indigo-700/40 text-indigo-800",
};

function normalize(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function stripFormatting(text: string, maxLength = 140): string {
  const plain = text
    .replace(/\\n|\r\n|\n/g, " ")
    .replace(/^(>|-|###)\s*/gm, "")
    .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length <= maxLength ? plain : plain.slice(0, maxLength).trim() + "…";
}

function regionSearchText(r: Region): string {
  const parts = [
    r.name,
    r.subtitle,
    r.tag,
    r.intro,
    ...(r.facts ?? []).flatMap((f) => [f.label, f.value]),
    ...(r.sections ?? []).flatMap((s) => [
      s.title,
      s.content,
      ...(s.places ?? []).flatMap((p) => [p.name, p.content]),
      ...(s.sidebars ?? []).flatMap((sb) => [sb.title, sb.content]),
    ]),
  ];
  return normalize(parts.filter(Boolean).join(" "));
}

// Mesma convenção de texto das outras páginas (\n, **negrito**, *itálico*, "> ", "- ", "### ")
const formatTextWithBreaks = (text: string) => {
  if (!text) return null;

  const lines = text.split(/\r\n|\n|\\n/);

  return lines.map((line, index) => {
    if (line.trim() === "") return <div key={index} className="h-4" />;

    let formattedLine = line;

    if (formattedLine.startsWith("> ")) {
      formattedLine = `<blockquote class="border-l-4 border-red-800 pl-4 py-3 my-4 text-base italic text-amber-950/85 bg-[rgb(var(--bg-inset-rgb))]/50 rounded-r-xl font-serif font-medium shadow-sm">${formattedLine.substring(2)}</blockquote>`;
    } else if (formattedLine.startsWith("### ")) {
      formattedLine = `<h4 class="font-display text-xl md:text-2xl font-bold text-red-800 mt-6 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-1">${formattedLine.substring(4)}</h4>`;
    } else if (formattedLine.startsWith("- ")) {
      formattedLine = `<div class="mt-3 flex items-start gap-3"><span class="text-red-800/60 mt-1.5 text-[10px] shrink-0">◆</span><div class="flex-1">${formattedLine.substring(2)}</div></div>`;
    }

    formattedLine = formattedLine
      .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-red-800 font-serif italic">$1</strong>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-red-800 font-serif">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-amber-950/85 font-serif font-medium">$1</em>');

    return (
      <div
        key={index}
        dangerouslySetInnerHTML={{ __html: formattedLine }}
        className="mb-2 last:mb-0 text-base md:text-lg leading-relaxed text-amber-950/85 font-serif font-medium"
      />
    );
  });
};

// Imagem que some (ou mostra um fallback) se o arquivo não existir
const SafeImage = ({
  src,
  alt,
  className = "",
  fallback = null,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}) => {
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={className} />;
};

const TagBadge = ({ tag, overlay = false }: { tag: RegionTag; overlay?: boolean }) => (
  <span
    className={`font-display text-[10px] px-2.5 py-1 rounded border uppercase tracking-widest font-bold inline-block ${
      TAG_STYLES[tag]
    } ${overlay ? "bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-sm shadow-sm" : "bg-[rgb(var(--bg-inset-rgb))]"}`}
  >
    {tag}
  </span>
);

// --- Janela (modal) base ---

const ModalShell = ({ onClose, children }: { onClose: () => void; children: ReactNode }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl rounded-2xl border-2 border-amber-900/30 bg-[rgb(var(--bg-card-rgb))] shadow-2xl"
      >
        <CornerOrnament className="absolute -top-px -left-px opacity-70 pointer-events-none z-10" />
        <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-70 pointer-events-none z-10" />
        <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-70 pointer-events-none z-10" />
        <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-70 pointer-events-none z-10" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-red-800 hover:scale-110 transition-transform text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-sm border border-amber-900/20 shadow-sm"
          title="Fechar"
        >
          ✕
        </button>

        <div className="max-h-[90vh] overflow-y-auto rounded-2xl">{children}</div>
      </div>
    </div>
  );
};

// --- Seções (usadas na janela da região e da categoria) ---

const SectionList = ({ sections }: { sections: RegionSection[] }) => (
  <>
    {sections.map((s, i) => (
      <section key={`${s.title}-${i}`} className="mt-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide uppercase border-b-2 border-amber-900/10 pb-1">
          {s.title}
        </h3>

        {s.content && <div>{formatTextWithBreaks(s.content)}</div>}

        {s.places && s.places.length > 0 && (
          <div className="mt-4 space-y-6">
            {s.places.map((p) => (
              <div key={p.name}>
                <h4 className="font-display text-lg md:text-xl font-bold text-red-800 mb-2 tracking-wide uppercase">
                  {p.name}
                </h4>
                {formatTextWithBreaks(p.content)}
              </div>
            ))}
          </div>
        )}

        {s.sidebars?.map((sb) => (
          <div
            key={sb.title}
            className="my-6 rounded-xl border-2 border-amber-900/30 bg-[rgb(var(--bg-inset-rgb))] p-5 md:p-6 shadow-sm"
          >
            <h4 className="font-display text-lg font-bold text-red-800 mb-3 tracking-wide">{sb.title}</h4>
            {formatTextWithBreaks(sb.content)}
          </div>
        ))}
      </section>
    ))}
  </>
);

// --- Janela da Região ---

const RegionModal = ({ region, onClose }: { region: Region; onClose: () => void }) => {
  const hasFacts = !!region.facts && region.facts.length > 0;
  const hasAside = hasFacts || !!region.coatOfArms;

  return (
    <ModalShell onClose={onClose}>
      <div className="relative w-full h-48 md:h-72 bg-[rgb(var(--bg-inset-rgb))] overflow-hidden rounded-t-2xl">
        <SafeImage
          src={region.image}
          alt={region.name}
          className="w-full h-full object-cover"
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <GlobeIcon className="w-14 h-14 opacity-30" />
            </div>
          }
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))] to-transparent" />
      </div>

      <div className="px-6 md:px-10 pb-10 -mt-4 relative">
        <div className="mb-2">
          <TagBadge tag={region.tag} />
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-red-800 tracking-wider pr-12">
          {region.name}
        </h2>
        {region.subtitle && (
          <p className="font-display text-sm md:text-base uppercase tracking-[0.25em] text-amber-950/60 font-bold mt-2">
            {region.subtitle}
          </p>
        )}

        <div className={`mt-8 ${hasAside ? "md:grid md:grid-cols-[minmax(0,1fr)_280px] md:gap-10 md:items-start" : ""}`}>
          <div>
            {region.intro && <div>{formatTextWithBreaks(region.intro)}</div>}

            {region.map && (
              <figure className="mt-8">
                <SafeImage
                  src={region.map}
                  alt={`Mapa de ${region.name}`}
                  className="w-full rounded-xl border-2 border-amber-900/20 shadow-sm"
                />
              </figure>
            )}

            {region.sections && <SectionList sections={region.sections} />}
          </div>

          {hasAside && (
            <aside className="mt-8 md:mt-0 md:sticky md:top-4">
              <div className="rounded-xl overflow-hidden border-2 border-amber-900/30 bg-[rgb(var(--void-rgb))] text-white/85 p-5 shadow-sm">
                {region.coatOfArms && (
                  <div className="flex justify-center mb-4">
                    <SafeImage
                      src={region.coatOfArms}
                      alt={`Brasão de ${region.name}`}
                      className="max-h-44 object-contain"
                    />
                  </div>
                )}
                <h4 className="font-display text-xl font-bold text-white mb-3 tracking-wide">{region.name}</h4>
                {hasFacts && (
                  <dl className="space-y-2 text-sm leading-relaxed">
                    {region.facts!.map((f) => (
                      <div key={f.label}>
                        <dt className="inline font-display text-xs font-bold uppercase tracking-wide text-white">
                          {f.label}:{" "}
                        </dt>
                        <dd className="inline font-serif text-white/75">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </ModalShell>
  );
};

// --- Janela da Categoria ---

const TagModal = ({
  info,
  count,
  onClose,
  onFilter,
}: {
  info: RegionTagInfo;
  count: number;
  onClose: () => void;
  onFilter: () => void;
}) => (
  <ModalShell onClose={onClose}>
    {info.image && (
      <div className="relative w-full h-40 md:h-56 bg-[rgb(var(--bg-inset-rgb))] overflow-hidden rounded-t-2xl">
        <SafeImage src={info.image} alt={info.tag} className="w-full h-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))] to-transparent" />
      </div>
    )}
    <div className="p-6 md:p-10">
      <div className="mb-2">
        <TagBadge tag={info.tag} />
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-bold text-red-800 tracking-wider pr-12 mb-6">
        {info.tag}
      </h2>
      <div>{formatTextWithBreaks(info.description)}</div>
      {info.sections && <SectionList sections={info.sections} />}

      <div className="mt-10 pt-6 border-t-2 border-amber-900/10 flex justify-end">
        <button
          onClick={onFilter}
          className="font-display text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-lg border-2 border-red-800/40 bg-red-800/10 text-red-800 hover:bg-red-800/20 transition-colors"
        >
          Ver {count} {count === 1 ? "região" : "regiões"} de {info.tag}
        </button>
      </div>
    </div>
  </ModalShell>
);

// --- Card de categoria (no início da página) ---

const TagCard = ({ info, count, onOpen }: { info: RegionTagInfo; count: number; onOpen: () => void }) => (
  <div
    onClick={onOpen}
    className="card-grain group relative rounded-xl border-2 border-amber-900/30 shadow-sm overflow-hidden bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    {info.image && (
      <div className="h-28 overflow-hidden bg-[rgb(var(--bg-inset-rgb))]">
        <SafeImage src={info.image} alt={info.tag} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6 flex flex-col gap-3">
      <TagBadge tag={info.tag} />
      <h3 className="font-display text-2xl font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors">
        {info.tag}
      </h3>
      <p className="text-amber-950/70 text-sm leading-relaxed">{stripFormatting(info.description)}</p>
      <p className="font-display text-[10px] uppercase tracking-widest font-bold text-amber-950/50 pt-3 border-t border-amber-900/15">
        {count} {count === 1 ? "região" : "regiões"}
      </p>
    </div>
    <Corners />
  </div>
);

// --- Card de região (grade) ---

const RegionCard = ({ region, onOpen }: { region: Region; onOpen: (r: Region) => void }) => (
  <div
    onClick={() => onOpen(region)}
    className="card-grain group relative rounded-xl border-2 border-amber-900/20 shadow-sm overflow-hidden bg-[rgb(var(--bg-card-rgb))] hover:border-red-800/40 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-[rgb(var(--bg-inset-rgb))]">
      <SafeImage
        src={region.image}
        alt={region.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <GlobeIcon className="w-12 h-12 opacity-30" />
          </div>
        }
      />
      <div className="absolute top-3 left-3">
        <TagBadge tag={region.tag} overlay />
      </div>
    </div>
    <div className="p-5 md:p-6">
      <h3 className="font-display text-xl font-bold text-red-800 tracking-wide group-hover:text-red-700 transition-colors">
        {region.name}
      </h3>
      {region.subtitle && (
        <p className="font-display text-[11px] uppercase tracking-[0.2em] text-amber-950/60 font-bold mt-1">
          {region.subtitle}
        </p>
      )}
    </div>
    <Corners />
  </div>
);

// --- Página Principal ---

export default function RegioesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [openRegion, setOpenRegion] = useState<Region | null>(null);
  const [openTag, setOpenTag] = useState<RegionTagInfo | null>(null);

  const searchIndex = useMemo(
    () => regioes.map((r) => ({ region: r, text: regionSearchText(r) })),
    []
  );

  const countByTag = useMemo(() => {
    const counts = {} as Record<RegionTag, number>;
    REGION_TAGS.forEach((t) => (counts[t] = regioes.filter((r) => r.tag === t).length));
    return counts;
  }, []);

  const filteredRegions = useMemo(() => {
    const term = normalize(searchTerm);
    return searchIndex
      .filter(({ region, text }) => {
        const matchesSearch = text.includes(term);
        const matchesTag = selectedTag === "all" || region.tag === selectedTag;
        return matchesSearch && matchesTag;
      })
      .map(({ region }) => region)
      .sort((a, b) => {
        const tagDiff = REGION_TAGS.indexOf(a.tag) - REGION_TAGS.indexOf(b.tag);
        return tagDiff !== 0 ? tagDiff : a.name.localeCompare(b.name, "pt-BR");
      });
  }, [searchIndex, searchTerm, selectedTag]);

  const handleFilterFromTag = (tag: RegionTag) => {
    setSelectedTag(tag);
    setSearchTerm("");
    setOpenTag(null);
    setTimeout(() => {
      document.getElementById("lista-regioes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

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
              <Link
                href="/mundo-de-arton"
                className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap"
              >
                Mundo de Arton
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Regiões</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <div className="flex items-center gap-4 mb-3">
            <GlobeIcon className="w-9 h-9 opacity-80" />
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-red-800 drop-shadow-sm tracking-wider"
              style={{ textShadow: "0 0 28px rgba(127,29,29,0.3)" }}
            >
              Regiões
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
            Das fronteiras do Reinado aos mundos além de Arton, cada região guarda seus povos, seus
            segredos e seus perigos. Comece por uma categoria ou procure direto pelo nome.
          </p>
        </div>

        {/* Cards de categoria */}
        <div className="mb-3 flex items-center gap-3">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-2xl font-bold text-red-800 uppercase tracking-wide">Categorias</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-14 mt-6">
          {regiaoTags.map((info) => (
            <TagCard
              key={info.tag}
              info={info}
              count={countByTag[info.tag] ?? 0}
              onOpen={() => setOpenTag(info)}
            />
          ))}
        </div>

        {/* Busca e Filtro */}
        <div
          id="lista-regioes"
          className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-6 scroll-mt-32"
        >
          <div className="flex-1">
            <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Região
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Busque por nome, lugar, personagem ou tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              {searchTerm ? (
                <button
                  onClick={() => setSearchTerm("")}
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
              Categoria
            </label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-5 py-3 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm font-medium"
            >
              <option value="all">Todas as categorias</option>
              {REGION_TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contagem */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-red-800 text-2xl">❖</span>
          <h2 className="font-display text-2xl font-bold text-red-800 uppercase tracking-wide">
            {filteredRegions.length} {filteredRegions.length === 1 ? "Região" : "Regiões"} Encontrada
            {filteredRegions.length !== 1 ? "s" : ""}
          </h2>
        </div>

        {/* Grade */}
        {filteredRegions.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center mt-8 gap-3">
            <PageGlyph className="text-amber-950/40" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma região encontrada.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {filteredRegions.map((r) => (
              <RegionCard key={r.id} region={r} onOpen={setOpenRegion} />
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

      {openRegion && <RegionModal region={openRegion} onClose={() => setOpenRegion(null)} />}

      {openTag && (
        <TagModal
          info={openTag}
          count={countByTag[openTag.tag] ?? 0}
          onClose={() => setOpenTag(null)}
          onFilter={() => handleFilterFromTag(openTag.tag)}
        />
      )}
    </div>
  );
}