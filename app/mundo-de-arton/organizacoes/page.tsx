"use client";

import Link from "next/link";
import { useState } from "react";
import { Organization } from "@/types/organization";
import { organizations } from "@/data/organizations";
import ThemeToggle from "@/components/ThemeToggle";

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function BannerGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3v18l3-2.5L12 21l3-2.5L18 21V3z" />
      <path d="M9 7h6M9 10h6" />
    </svg>
  );
}

function BookGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

function PeopleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.5 13.2c2.4.3 4 2.3 4 5.3" />
    </svg>
  );
}

function BulbGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.2 11l.7 1h5l.7-1A6 6 0 0 0 12 3z" />
    </svg>
  );
}

function CoinGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
    </svg>
  );
}

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

export default function OrganizacoesPage() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredOrganizations = organizations
    .filter((org) => org.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedOrg(null);
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="inline-block group">
            <h1
              className="font-display text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125"
              style={{ textShadow: "0 1px 2px rgba(var(--bg-rgb),0.1)" }}
            >
              a-Tormenta
            </h1>
          </Link>
          <div className="flex items-center gap-3">
            <div className="font-display flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
              <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors">
                Início
              </Link>
              <span className="text-amber-900/40">/</span>
              <Link href="/mundo-de-arton" className="text-amber-950/70 hover:text-red-800 transition-colors">
                Mundo de Arton
              </Link>
              <span className="text-amber-900/40">/</span>
              <span className="text-red-800">Organizações</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Título Principal */}
        <div className="mb-10 w-full flex flex-col items-start">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider flex items-center gap-3">
            <BannerGlyph className="text-red-800 w-9 h-9 shrink-0" /> Organizações - Dragão Brasil 228
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
          <p className="text-amber-950/85 text-lg font-medium w-full leading-relaxed">
            Vinte grupos de NPCs devotos dos deuses maiores do Panteão, cada um explorando um aspecto
            menos óbvio de sua fé — com lore, ganchos de aventura e benefícios mecânicos próprios.
          </p>

        </div>

        {/* Acordeão de Introdução/Origem */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <BookGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors tracking-wide">
                  Origem & Como Usar
                </h2>
                <p className="text-sm text-amber-900/70 italic font-bold">
                  Clique para expandir ou recolher a matéria original sobre estas organizações.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? "max-h-[500000px] opacity-100" : "max-h-0 opacity-0 border-transparent"}`}>
            <div className="p-8 sm:p-10 font-serif text-amber-950/85 text-justify leading-relaxed flex flex-col gap-8">

              <section>
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide">Vinte Organizações</h3>
                <p>
                  Tudo começou quando Tiago Orib, um dos autores de 3DeT Victory e um dos redatores da
                  Liga dos Defensores, sugeriu desenvolver uma organização de Sszzaas focada em seu
                  aspecto de divindade dos segredos (que veio a se tornar o Claviculário, que você vai
                  conhecer mais adiante) e Trevisan, nosso editor, comprou a ideia. Na verdade, ele não
                  só comprou como também a expandiu, pedindo uma organização para cada deus maior do
                  Panteão. Desde então, temos trabalhado para criar e refinar os vinte grupos de NPCs
                  que você vai conhecer a seguir. Nossa proposta foca em explorar aspectos menos
                  chamativos de devotos dos vinte deuses. Poucas pessoas, por exemplo, lembram que a
                  origem da pólvora em Arton vem de demônios nativos de Sombria, o mundo divino de
                  Tenebra; então criamos o Rastro da Pólvora, um grupo de políticos devotos da Deusa
                  das Trevas que deseja legalizar a pólvora no Reinado. Cada organização traz
                  descrições de lore e informações gerais, além de direcionamentos para a criação de
                  personagens pertencentes a ela, qual seu papel padrão numa campanha (vilões, aliados,
                  rivais ou neutros), além de um gancho de aventura, terminando com alguma
                  característica mecânica relacionada — de itens e parceiros novos até poderes de uso
                  único ou pequenos benefícios permanentes.
                </p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 tracking-wide">Cadê as Fichas?</h3>
                <p>
                  Enquanto estiver lendo esta matéria, você pode se perguntar "onde estão as
                  estatísticas dessas organizações?" A resposta é simples: o conjunto de regras
                  apresentado na Dragão Brasil 216 não se aplica a todas as organizações do mundo de
                  Arton, apenas àquelas criadas pelos personagens. Assim, apesar de apresentar
                  possíveis aliados dos heróis, esta matéria foca somente em entidades compostas por
                  NPCs com os quais o grupo pode interagir durante a campanha.
                </p>
              </section>

            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
          <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Organização
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Digite o nome..."
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
              <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40" />
            )}
          </div>
        </div>

        {/* Grid de Organizações */}
        <h2 className="font-display text-2xl font-bold text-red-800 mb-6 border-b-2 border-amber-900/20 pb-2 tracking-wide">
          {filteredOrganizations.length} Organizações Encontradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-10 w-full mb-16">
          {filteredOrganizations.map((org) => (
            <div
              key={org.id}
              onClick={() => setSelectedOrg(org)}
              className="card-grain group relative mt-6 rounded-md bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 hover:border-[rgb(var(--accent-rgb))]/55 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] cursor-pointer flex flex-col"
            >
              <CornerOrnament className="absolute -top-px -left-px z-10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -top-px -right-px z-10 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -right-px z-10 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CornerOrnament className="absolute -bottom-px -left-px z-10 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="crest z-20">
                <span>{org.name.charAt(0)}</span>
              </div>

              <div className="relative w-full h-72 rounded-t-md bg-[rgb(var(--portrait-rgb))] border-b border-amber-900/15 overflow-hidden flex items-center justify-center">
                {org.image ? (
                  <img
                    src={org.image}
                    alt={org.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-95 group-hover:opacity-100"
                  />
                ) : (
                  <BannerGlyph className="text-[rgb(60,55,50)]/35" />
                )}
              </div>

              <div className="relative p-5 flex-1 flex flex-col justify-between bg-[rgb(var(--bg-card-rgb))]">
                <div className="w-full flex flex-col items-center">
                  <h3 className="font-display text-lg font-bold text-amber-950 group-hover:text-red-800 transition-colors mt-1 mb-3 text-center tracking-wide">
                    {org.name}
                  </h3>
                  <p className="text-amber-950/70 text-sm leading-relaxed line-clamp-3 text-center italic font-medium">
                    {org.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[rgb(var(--bg-card-rgb))]/50 flex flex-col items-center justify-center">
            <BannerGlyph className="text-amber-950/40 mb-4" />
            <p className="font-display text-amber-950/70 text-lg italic tracking-wide">
              Nenhuma organização encontrada nos registros.
            </p>
          </div>
        )}
      </main>

      {/* Modal de Detalhes */}
      {selectedOrg && (
        <div
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-[rgb(var(--void-rgb))]/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4"
        >
          <div className="bg-[rgb(var(--bg-inset-rgb))] border-4 border-double border-amber-900/40 rounded-xl shadow-[0_0_60px_rgba(var(--bg-rgb),0.3)] max-w-5xl w-full max-h-[95vh] overflow-y-auto relative custom-scrollbar bg-[url('/noise.png')]">

            <button
              onClick={() => setSelectedOrg(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-amber-900/60 hover:text-red-800 transition-colors z-10 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-full w-10 h-10 flex items-center justify-center text-2xl pb-1 shadow-sm"
            >
              ×
            </button>

            <div className="p-5 md:p-12 font-serif text-amber-950/85">

              {/* Cabeçalho da Organização */}
              <div className="mb-8 md:mb-10 text-center border-b-2 border-amber-900/20 pb-6 md:pb-8 mt-4 md:mt-0">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-4 tracking-wider uppercase">
                  {selectedOrg.name}
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
                  <BannerGlyph className="text-red-800/70 w-5 h-5" />
                  <div className="h-[2px] w-8 md:w-12 bg-amber-900/30"></div>
                </div>
              </div>

              {/* Lore */}
              <div className="mb-10 p-5 md:p-8 bg-[rgb(var(--bg-card-rgb))]/50 border-2 border-amber-900/20 rounded-xl shadow-inner relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 md:w-2 h-full bg-amber-900/20"></div>
                <h3 className="font-display text-sm md:text-base font-bold text-amber-900/50 mb-4 uppercase tracking-widest flex items-center gap-2">
                  <BookGlyph className="w-4 h-4" /> Lore & Descrição
                </h3>
                <p className="text-amber-950/90 leading-relaxed whitespace-pre-line text-base md:text-lg first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-red-800 first-letter:mr-2 first-letter:float-left text-left md:text-justify">
                  {selectedOrg.lore}
                </p>
              </div>

              {/* Membros */}
              <div className="mb-10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                  <PeopleGlyph /> Membros
                </h3>
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))] rounded-xl border-2 border-amber-900/20 shadow-sm">
                  <p className="text-amber-950/85 text-base md:text-lg leading-relaxed font-medium text-left md:text-justify">
                    {selectedOrg.membros}
                  </p>
                </div>
              </div>

              {/* Como Usar */}
              <div className="mb-10">
                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                  <BulbGlyph /> Como Usar
                </h3>
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-inset-rgb))] rounded-xl border-2 border-amber-900/20 shadow-inner">
                  <p className="text-amber-950/85 text-base md:text-lg leading-relaxed font-medium text-left md:text-justify">
                    {selectedOrg.comoUsar}
                  </p>
                </div>
              </div>

              {/* Mecânica */}
              <div className="mb-12">
                <h3 className="font-display text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 flex items-center gap-2 tracking-wide">
                  <CoinGlyph /> {selectedOrg.mecanica.kind}
                </h3>
                <div className="p-5 md:p-6 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border-2 border-amber-900/20 shadow-inner">
                  <p className="font-display text-red-800 font-bold text-lg md:text-xl mb-3 tracking-wide">
                    {selectedOrg.mecanica.name}
                  </p>
                  <p className="text-amber-950/90 text-base md:text-lg leading-relaxed font-medium text-left md:text-justify">
                    {selectedOrg.mecanica.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-center gap-4 opacity-50">
                <div className="h-[2px] w-12 md:w-20 bg-amber-900/60"></div>
                <span className="text-red-800/60 text-xl md:text-2xl">❖</span>
                <div className="h-[2px] w-12 md:w-20 bg-amber-900/60"></div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}