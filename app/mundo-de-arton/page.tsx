import Link from "next/link";

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

export default function MundoDeArtonPage() {
  // Conteúdos adaptados de outros universos para o cenário de Arton.
  // Adicione novos itens aqui conforme novas páginas forem criadas.
  const sections = [
    {
      id: "chefes",
      title: "Chefes Adaptados",
      icon: "/temas/chefes.png",
      color: "from-red-600 to-red-900",
      href: "/chefes",
    },
    {
      id: "pequenas-aventuras",
      title: "Pequenas Aventuras",
      icon: "/temas/pequenas_aventuras.png",
      color: "from-pink-700 to-purple-900",
      href: "/pequenas-aventuras",
    },
  ];

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Padronizado */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800 whitespace-nowrap">Mundo de Arton</span>
            </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-6 py-12">
        <div className="mb-12 text-center w-full">
          <h2 className="font-display text-4xl font-bold text-red-800 mb-2 drop-shadow-sm">
            Mundo de Arton
          </h2>
          <p className="text-amber-900/80 italic font-medium max-w-2xl mx-auto">
            "Outras lendas, outros heróis, outros monstros — todos encontram seu lugar sob os céus de Arton."
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {sections
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((section) => (
              <Link
                key={section.id}
                href={section.href}
                className="group relative h-full mt-6 perspective-1000"
              >
                <div className="card-grain relative h-full min-h-[300px] flex flex-col bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 rounded-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] group-hover:border-[rgb(var(--accent-rgb))]/55">

                  {/* Glow por categoria */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-10 ${section.color}`}
                  />

                  <div className="crest">
                    <span>{section.title.charAt(0)}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="relative flex-1 w-full overflow-hidden rounded-t-lg border-b border-amber-900/15 bg-[rgb(var(--bg-card-rgb))]">
                    <div className="absolute inset-0 z-10 shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]"></div>

                    <img
                      src={section.icon}
                      alt={section.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))] to-transparent z-10"></div>
                  </div>

                  {/* Content Area */}
                  <div className="relative h-[100px] p-4 flex flex-col items-center justify-center rounded-b-lg bg-[rgb(var(--bg-card-rgb))] z-20">
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-700 transition-colors duration-300"></div>

                    <h3 className="font-display text-lg font-bold text-center text-amber-950 group-hover:text-red-700 transition-colors duration-300 tracking-wide leading-tight drop-shadow-sm">
                      {section.title}
                    </h3>

                    <div className="w-1/2 h-[1px] bg-amber-900/20 mt-2 group-hover:w-3/4 group-hover:bg-red-800/50 transition-all duration-500"></div>
                  </div>

                  {/* Corner Ornaments */}
                  <CornerOrnament className="absolute -top-px -left-px z-30 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <CornerOrnament className="absolute -top-px -right-px z-30 rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <CornerOrnament className="absolute -bottom-px -right-px z-30 rotate-180 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <CornerOrnament className="absolute -bottom-px -left-px z-30 -rotate-90 opacity-50 group-hover:opacity-100 transition-opacity" />

                </div>
              </Link>
            ))}
        </div>

        <div className="mt-20 w-full p-1 rounded-lg bg-gradient-to-r from-[rgb(var(--bg-card-rgb))] via-amber-900/20 to-[rgb(var(--bg-card-rgb))]">
            <div className="bg-[rgb(var(--bg-inset-rgb))] p-8 rounded border border-amber-900/20 text-center relative overflow-hidden w-full shadow-sm">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
                <h3 className="font-display text-2xl font-bold text-red-800 mb-4 uppercase tracking-widest drop-shadow-sm">
                Sobre o Mundo de Arton
                </h3>
                <p className="text-amber-950 font-medium leading-relaxed w-full mx-auto">
                Esta seção reúne conteúdos adaptados de outras fontes para o cenário de Arton: chefes, aventuras curtas e mais material por vir.
                Os escribas continuam trabalhando para trazer novas lendas a este tomo.
                </p>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center text-sm relative z-10">
        <p className="font-display text-white/55 tracking-wide">Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p className="text-white/35 mt-1">Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}