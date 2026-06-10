"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { searchIndex, SearchItem } from "@/data/search-index";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Raças":          "bg-green-800 text-green-100",
  "Magias":         "bg-purple-800 text-purple-100",
  "Ameaças":        "bg-red-800 text-red-100",
  "Equipamentos":   "bg-yellow-700 text-yellow-100",
  "Montarias":      "bg-lime-700 text-lime-100",
  "Poderes":        "bg-orange-700 text-orange-100",
  "Condições":      "bg-rose-800 text-rose-100",
  "Complicações":   "bg-rose-700 text-rose-100",
  "Regras do Jogo": "bg-indigo-800 text-indigo-100",
};
function catColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "bg-amber-800 text-amber-100";
}

function searchItems(query: string): SearchItem[] {
  if (!query.trim()) return [];
  const norm  = (s: string) => s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
  const terms = norm(query).split(/\s+/).filter(Boolean);
  return searchIndex
    .map((item) => {
      const hay  = norm(`${item.name} ${item.description} ${item.category} ${item.tags}`);
      const name = norm(item.name);
      let score  = 0;
      for (const t of terms) {
        if (!hay.includes(t)) return null;
        if (name.startsWith(t)) score += 10;
        else if (name.includes(t)) score += 5;
        else score += 1;
      }
      return { item, score };
    })
    .filter((x): x is { item: SearchItem; score: number } => x !== null)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15)
    .map((x) => x.item);
}

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const pattern = query.trim().split(/\s+/)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  return text.replace(
    new RegExp(`(${pattern})`, "gi"),
    '<mark style="background:rgba(200,140,30,0.45);border-radius:2px;padding:0 2px">$1</mark>'
  );
}

function truncate(desc: string, query: string, max = 130) {
  if (desc.length <= max) return desc;
  const term  = query.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const idx   = term ? desc.toLowerCase().indexOf(term) : -1;
  const start = idx === -1 ? 0 : Math.max(0, idx - 40);
  const end   = Math.min(desc.length, start + max);
  return (start > 0 ? "…" : "") + desc.slice(start, end) + (end < desc.length ? "…" : "");
}

// ─── Modal de Busca ───────────────────────────────────────────────────────────
function SearchModal({ onClose }: { onClose: () => void }) {
  const [query,   setQuery]   = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [focused, setFocused] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  // Bloqueia scroll do body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => { setResults(searchItems(query)); setFocused(0); }, 120);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") setFocused(f => Math.min(f + 1, results.length - 1));
      if (e.key === "ArrowUp")   setFocused(f => Math.max(f - 1, 0));
      if (e.key === "Enter" && results[focused]) { window.location.href = results[focused].href; onClose(); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [results, focused, onClose]);

  return createPortal(
    // Overlay
    <div
      style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", alignItems: "flex-start",
               justifyContent: "center", paddingTop: "80px", paddingLeft: "16px", paddingRight: "16px",
               background: "rgba(20,8,0,0.65)", backdropFilter: "blur(4px)" }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Painel */}
      <div
        style={{ width: "100%", maxWidth: "680px", background: "#fbf5e6",
                 border: "2px solid rgba(120,60,10,0.4)", borderRadius: "12px",
                 boxShadow: "0 24px 80px rgba(30,10,0,0.5)",
                 fontFamily: "Georgia, serif", overflow: "hidden",
                 display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 120px)" }}
      >
        {/* Campo de busca */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px",
                      padding: "14px 16px", borderBottom: "1px solid rgba(120,60,10,0.2)",
                      background: "#f0e6d0" }}>
          <span style={{ fontSize: "18px", color: "rgba(120,60,10,0.5)", flexShrink: 0 }}>⚔</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar raças, magias, criaturas, poderes..."
            style={{ flex: 1, border: "none", outline: "none", background: "transparent",
                     fontSize: "16px", color: "#1c0a00", fontFamily: "Georgia, serif" }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{ flexShrink: 0, fontSize: "20px", color: "rgba(120,60,10,0.4)",
                       cursor: "pointer", background: "none", border: "none", lineHeight: 1 }}
            >×</button>
          )}
          <button
            onClick={onClose}
            style={{ flexShrink: 0, fontSize: "12px", padding: "3px 7px",
                     background: "rgba(120,60,10,0.12)", border: "1px solid rgba(120,60,10,0.25)",
                     borderRadius: "4px", color: "rgba(120,60,10,0.6)", cursor: "pointer",
                     fontFamily: "Georgia, serif" }}
          >ESC</button>
        </div>

        {/* Resultados */}
        <div style={{ overflowY: "auto", flex: 1 }}>
          {/* Estado vazio */}
          {!query.trim() && (
            <div style={{ padding: "32px 20px", textAlign: "center", color: "rgba(120,60,10,0.45)" }}>
              <div style={{ fontSize: "32px", marginBottom: "10px" }}>🔍</div>
              <p style={{ fontSize: "14px", fontStyle: "italic" }}>
                Digite para buscar em todos os conteúdos do compêndio
              </p>
            </div>
          )}

          {/* Sem resultados */}
          {query.trim() && results.length === 0 && (
            <div style={{ padding: "32px 20px", textAlign: "center", color: "rgba(120,60,10,0.45)" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>⚗</div>
              <p style={{ fontSize: "14px", fontStyle: "italic" }}>
                Nenhum resultado para "<strong>{query}</strong>"
              </p>
            </div>
          )}

          {/* Lista */}
          {results.length > 0 && (
            <>
              <div style={{ padding: "6px 14px", fontSize: "11px", fontStyle: "italic",
                            color: "rgba(120,60,10,0.5)", background: "#ede4d0",
                            borderBottom: "1px solid rgba(120,60,10,0.12)" }}>
                {results.length} resultado{results.length !== 1 ? "s" : ""} · ↑↓ navegar · Enter abrir
              </div>
              {results.map((item, i) => (
                <Link
                  key={`${item.id}-${i}`}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setFocused(i)}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: "12px",
                    padding: "11px 16px",
                    borderBottom: "1px solid rgba(120,60,10,0.09)",
                    background: i === focused ? "#e8dac1" : "transparent",
                    textDecoration: "none", cursor: "pointer",
                    transition: "background 0.08s",
                  }}
                >
                  <span
                    style={{ flexShrink: 0, marginTop: "2px", fontSize: "10px", fontWeight: 700,
                             textTransform: "uppercase", letterSpacing: "0.06em",
                             padding: "2px 7px", borderRadius: "4px", whiteSpace: "nowrap" }}
                    className={catColor(item.category)}
                  >
                    {item.category}
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p
                      style={{ margin: 0, fontWeight: 700, fontSize: "14px", lineHeight: 1.3,
                               color: i === focused ? "#991b1b" : "#1c0a00" }}
                      dangerouslySetInnerHTML={{ __html: highlight(item.name, query) }}
                    />
                    <p
                      style={{ margin: "3px 0 0", fontSize: "12px", lineHeight: 1.45,
                               color: "rgba(100,50,10,0.65)",
                               overflow: "hidden", display: "-webkit-box",
                               WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}
                      dangerouslySetInnerHTML={{ __html: highlight(truncate(item.description, query), query) }}
                    />
                  </div>
                  <span style={{ flexShrink: 0, fontSize: "14px", marginTop: "2px",
                                 color: i === focused ? "#991b1b" : "rgba(120,60,10,0.25)" }}>→</span>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Botão que abre o modal ───────────────────────────────────────────────────
function SearchTrigger() {
  const [open,    setOpen]    = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          w-full max-w-2xl mx-auto flex items-center gap-3
          px-4 py-3 rounded-lg text-left
          bg-[#fbf5e6] border-2 border-amber-900/30
          hover:border-red-700/50 hover:bg-white/60
          transition-all duration-200 shadow-inner
          font-serif text-amber-700/50 text-base
          cursor-text
        "
      >
        <span className="text-lg">⚔</span>
        <span>Buscar raças, magias, criaturas, equipamentos...</span>
        <span className="ml-auto text-xs border border-amber-900/25 rounded px-1.5 py-0.5 text-amber-800/40 hidden sm:inline">
          clique para buscar
        </span>
      </button>
      {mounted && open && <SearchModal onClose={() => setOpen(false)} />}
    </>
  );
}

// ─── Página Principal ─────────────────────────────────────────────────────────
export default function Home() {
  const themes = [
    { id: "chefes",             title: "Chefes",             icon: "/temas/chefes.png",            color: "from-red-600 to-red-900" },
    { id: "pequenas-aventuras", title: "Pequenas Aventuras", icon: "/temas/pequenas_aventuras.png", color: "from-pink-700 to-purple-900" },
    { id: "racas",              title: "Raças",              icon: "/temas/racas.png",              color: "from-green-700 to-emerald-900" },
    { id: "classes",            title: "Classes",            icon: "/temas/classes.png",            color: "from-amber-700 to-yellow-800" },
    { id: "poderes",            title: "Poderes",            icon: "/temas/poderes.png",            color: "from-orange-700 to-red-800" },
    { id: "origem",             title: "Origem",             icon: "/temas/origem.png",             color: "from-cyan-600 to-blue-800" },
    { id: "deuses",             title: "Deuses",             icon: "/temas/deuses.png",             color: "from-indigo-600 to-violet-900" },
    { id: "pericias",           title: "Perícias",           icon: "/temas/pericias.png",           color: "from-violet-700 to-indigo-900" },
    { id: "equipamentos",       title: "Equipamentos",       icon: "/temas/equipamentos.png",       color: "from-yellow-600 to-amber-800" },
    { id: "magias",             title: "Magias",             icon: "/temas/magias.png",             color: "from-purple-600 to-indigo-800" },
    { id: "regras",             title: "Regras do Jogo",     icon: "/temas/regras.png",             color: "from-red-700 to-rose-900" },
    { id: "parceiros",          title: "Parceiros",          icon: "/temas/parceiros.png",          color: "from-emerald-600 to-green-800" },
    { id: "montarias",          title: "Montarias",          icon: "/temas/montarias.png",          color: "from-lime-600 to-green-800" },
    { id: "ameacas",            title: "Ameaças",            icon: "/temas/ameacas.png",            color: "from-red-600 to-orange-800",   href: "/ameacas" },
    { id: "perigos",            title: "Perigos",            icon: "/temas/perigos.png",            color: "from-orange-600 to-red-800",   href: "/perigos" },
    { id: "itens-magicos",      title: "Itens Mágicos",      icon: "/temas/itens-magicos.png",      color: "from-purple-500 to-amber-600", href: "/itens-magicos" },
    { id: "condicoes",          title: "Condições",          icon: "/temas/condicoes.png",          color: "from-rose-600 to-red-800",     href: "/condicoes" },
    { id: "distincoes",         title: "Distinções",         icon: "/temas/distincoes.png",         color: "from-rose-600 to-red-800",     href: "/distincoes" },
    { id: "complicacoes",       title: "Complicações",       icon: "/temas/complicacoes.png",       color: "from-rose-600 to-red-800",     href: "/complicacoes" },
    { id: "tesouros",           title: "Tesouros",           icon: "/temas/tesouro.jpg",            color: "from-rose-600 to-red-800",     href: "/tesouros" },
    { id: "combate",            title: "Combate",            icon: "/temas/combate.png",            color: "from-rose-600 to-red-800",     href: "/combate" },
  ];

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden from-[#f5e6d0] to-[#e6d5b8]">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      <header className="relative p-8 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm flex flex-col items-center text-center w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-5">
          <div>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm"
              style={{ textShadow: "0 1px 2px rgba(69,26,3,0.1)" }}
            >
              a-Tormenta
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-red-800" />
              <p className="text-amber-900/80 text-sm tracking-[0.2em] uppercase font-bold">Compêndio de Tormenta</p>
              <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-red-800" />
            </div>
          </div>
          <SearchTrigger />
        </div>
      </header>

      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-red-800 mb-2 drop-shadow-sm">Grimório de Conteúdos</h2>
          <p className="text-amber-900/80 italic font-medium">"Escolha seu caminho e prepare-se para o que há de vir..."</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {themes.sort((a, b) => a.title.localeCompare(b.title)).map((theme) => (
            <Link key={theme.id} href={theme.href || `/${theme.id}`} className="group relative h-full">
              <div className="relative h-full min-h-[300px] flex flex-col bg-[#d9c8a9] border-2 border-amber-900/30 rounded-lg overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] group-hover:border-red-700/50">
                <div className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${theme.color}`} />
                <div className="relative flex-1 w-full overflow-hidden border-b border-amber-900/20 bg-[#e8dac1]">
                  <div className="absolute inset-0 z-10 shadow-[inset_0_0_20px_rgba(69,26,3,0.1)]" />
                  <img src={theme.icon} alt={theme.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 filter saturate-50 group-hover:saturate-100 mix-blend-multiply sepia-[0.2]" />
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#d9c8a9] to-transparent z-10" />
                </div>
                <div className="relative h-[100px] p-4 flex flex-col items-center justify-center bg-[#d9c8a9] group-hover:bg-[#e8dac1] transition-colors duration-300 z-20">
                  <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-700 transition-colors duration-300" />
                  <h3 className="text-xl font-bold text-center text-amber-950 group-hover:text-red-700 transition-colors duration-300 tracking-wide leading-tight drop-shadow-sm">{theme.title}</h3>
                  <div className="w-1/2 h-[1px] bg-amber-900/20 mt-2 group-hover:w-3/4 group-hover:bg-red-800/50 transition-all duration-500" />
                </div>
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-900/40 group-hover:border-red-700 transition-colors z-20" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-900/40 group-hover:border-red-700 transition-colors z-20" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/40 group-hover:border-red-700 transition-colors z-20" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/40 group-hover:border-red-700 transition-colors z-20" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 p-1 rounded-lg bg-gradient-to-r from-[#d9c8a9] via-amber-900/20 to-[#d9c8a9]">
          <div className="bg-[#e8dac1] p-8 rounded border-2 border-amber-900/30 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-800/30 to-transparent" />
            <h3 className="text-2xl font-bold text-red-800 mb-4 uppercase tracking-widest drop-shadow-sm">Sobre o Compêndio</h3>
            <p className="text-amber-950 font-medium leading-relaxed">
              Este tomo contém o conhecimento acumulado sobre o mundo de Tormenta.
              O conteúdo ainda está sendo transcrito pelos escribas. Sugestões são bem-vindas na taverna mais próxima.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}