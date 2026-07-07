"use client";

import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
  </svg>
);

/**
 * Botão de alternância de tema (claro/escuro).
 * Lê/escreve em localStorage e aplica via atributo `data-theme` na <html>.
 * O layout raiz já roda um script inline (ver layout.tsx) que aplica o
 * tema salvo ANTES da primeira pintura, então não há flash de tema errado.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("a-tormenta-theme", next);
    } catch {
      // localStorage indisponível (modo privado, etc) — tema ainda funciona, só não persiste
    }
  }

  // Evita renderizar o ícone errado por uma fração de segundo antes do useEffect rodar
  if (theme === null) {
    return (
      <button
        className={`w-[34px] h-[34px] rounded-full border border-amber-900/25 bg-[rgb(var(--bg-inset-rgb))]/50 ${className}`}
        aria-label="Alternar tema"
      />
    );
  }

  return (
    <button
      onClick={toggle}
      title="Alternar modo claro/escuro"
      aria-label="Alternar tema"
      className={`w-[34px] h-[34px] rounded-full flex items-center justify-center border border-amber-900/25 bg-[rgb(var(--bg-inset-rgb))]/50 text-[rgb(var(--accent-rgb))] hover:border-[rgb(var(--accent-rgb))]/60 transition-colors shrink-0 ${className}`}
    >
      <span className="w-[17px] h-[17px]">{theme === "dark" ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}