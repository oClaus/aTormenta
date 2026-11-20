"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { formatOrigin } from "@/types/power";
import type { Power } from "@/types/power";

function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="26"
      height="26"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 29V12C3 6.48 7.48 2 13 2H29"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M3 21c5 0 8 3 8 8"
        stroke="rgb(var(--accent-rgb))"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="3" cy="2" r="4" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" opacity="0.5" />
      <circle cx="3" cy="2" r="2.2" fill="rgb(var(--accent-rgb))" />
    </svg>
  );
}

function LinkGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
      <path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
    </svg>
  );
}

function ExpandGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 4h6v6" />
      <path d="M10 20H4v-6" />
      <path d="M20 4l-7 7" />
      <path d="M4 20l7-7" />
    </svg>
  );
}

export default function PowerCard({ power }: { power: Power }) {
  const anchorId = String(power.id);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const openCard = () => {
    setOpen(true);
    window.history.replaceState(null, "", `#${anchorId}`);
  };

  const closeCard = useCallback(() => {
    setOpen(false);
    if (window.location.hash === `#${anchorId}`) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  }, [anchorId]);

  // Abre o card se a URL já chegar com #id (link direto) e acompanha mudanças no hash
  useEffect(() => {
    const sync = () => setOpen(window.location.hash === `#${anchorId}`);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [anchorId]);

  // Enquanto aberto: Esc fecha, a página de trás não rola e o foco vai para o modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCard();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, closeCard]);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Card compacto (na grade) */}
      <div
        id={anchorId}
        role="button"
        tabIndex={0}
        onClick={openCard}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openCard();
          }
        }}
        aria-label={`Abrir poder ${power.name}`}
        title="Clique para expandir"
        className="card-grain group relative scroll-mt-40 cursor-pointer rounded-md bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--accent-rgb),0.07),transparent_60%),rgb(var(--bg-card-rgb))] border border-amber-900/20 outline outline-1 outline-offset-4 outline-amber-900/5 p-5 md:p-6 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] flex flex-col h-full hover:-translate-y-1 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-red-800/60"
      >
        <CornerOrnament className="absolute -top-px -left-px opacity-50 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -top-px -right-px rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -bottom-px -right-px rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
        <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

        {/* Ícone de expandir (aviso visual de que o card abre) */}
        <ExpandGlyph className="absolute top-3 right-9 text-amber-900/50 group-hover:text-red-800 group-hover:scale-110 transition-all duration-300" />

        {/* px-6 dos dois lados mantém o título centralizado e longe do ícone */}
        <h3 className="font-display text-lg font-bold text-red-800 mb-3 tracking-wide border-b-2 border-amber-900/10 pb-2 text-center px-6">
          {power.name}
        </h3>

        <div className="flex-1 mb-4">
          <p className="text-amber-950/85 text-sm leading-relaxed text-center line-clamp-4">
            {power.description}
          </p>
        </div>

        <div className="mt-auto">
          {power.prerequisite && (
            <div className="mb-4 pt-4 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors">
              <p className="text-xs text-amber-950/70 text-center line-clamp-2">
                <span className="font-display font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
              </p>
            </div>
          )}

          <div className="flex items-center justify-center pt-4 border-t border-amber-900/15 group-hover:border-[rgb(var(--accent-rgb))]/30 transition-colors">
            <span className="hex-badge font-display text-[10px] px-3 py-1.5 bg-[rgb(var(--bg-inset-rgb))] border border-[rgb(var(--accent-rgb))]/30 text-amber-950/75 uppercase tracking-widest font-bold">
              {formatOrigin(power.origin)}
            </span>
          </div>
        </div>
      </div>

      {/* Card expandido: camada fixa dentro da página (herda o tema) */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50"
          onClick={(e) => {
            // clique no fundo (fora do painel) fecha
            if (e.target === e.currentTarget) closeCard();
          }}
        >
          <div
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label={power.name}
            style={{ backgroundColor: "rgb(var(--bg-card-rgb))" }}
            className="relative w-full max-w-xl max-h-[85vh] overflow-hidden rounded-md border-2 border-[rgb(var(--accent-rgb))]/50 outline outline-1 outline-offset-4 outline-amber-900/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] focus:outline-none"
          >
            {/* brilho suave no topo, igual ao dos cards */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--accent-rgb),0.1),transparent_60%)]"
            />

            <CornerOrnament className="absolute -top-px -left-px z-10" />
            <CornerOrnament className="absolute -top-px -right-px rotate-90 z-10" />
            <CornerOrnament className="absolute -bottom-px -right-px rotate-180 z-10" />
            <CornerOrnament className="absolute -bottom-px -left-px -rotate-90 z-10" />

            <button
              type="button"
              onClick={closeCard}
              title="Fechar"
              aria-label="Fechar"
              className="absolute top-4 right-5 z-10 text-red-800 font-bold text-xl hover:scale-110 transition-transform focus:outline-none"
            >
              ✕
            </button>

            {/* Só esta área rola, se o texto for muito longo */}
            <div className="relative max-h-[85vh] overflow-y-auto overflow-x-hidden p-7 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-5 tracking-wide border-b-2 border-amber-900/15 pb-3 text-center px-6">
                {power.name}
              </h3>

              <p className="text-amber-950 text-base md:text-lg leading-relaxed text-center mb-6">
                {power.description}
              </p>

              {power.prerequisite && (
                <div className="mb-5 pt-4 border-t border-amber-900/15">
                  <p className="text-sm md:text-base text-amber-950/80 text-center">
                    <span className="font-display font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
                  </p>
                </div>
              )}

              <div className="flex flex-col items-center gap-4 pt-4 border-t border-amber-900/15">
                <span className="hex-badge font-display text-[11px] px-3 py-1.5 bg-[rgb(var(--bg-inset-rgb))] border border-[rgb(var(--accent-rgb))]/30 text-amber-950/75 uppercase tracking-widest font-bold">
                  {formatOrigin(power.origin)}
                </span>

                <button
                  type="button"
                  onClick={copyLink}
                  className="font-display inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-amber-900/20 text-amber-950/70 hover:border-red-800/40 hover:text-red-800 transition-all"
                >
                  <LinkGlyph />
                  {copied ? "Link copiado!" : "Copiar link deste poder"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}