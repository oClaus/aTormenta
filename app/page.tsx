import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

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

export default function Home() {
  const themes = [
    { id: "racas", title: "Raças", icon: "/temas/racas.png", color: "from-green-700 to-emerald-900" },
    { id: "classes", title: "Classes", icon: "/temas/classes.png", color: "from-amber-700 to-yellow-800" },
    { id: "poderes", title: "Poderes", icon: "/temas/poderes.png", color: "from-orange-700 to-red-800" },
    { id: "origem", title: "Origem", icon: "/temas/origem.png", color: "from-cyan-600 to-blue-800" },
    { id: "deuses", title: "Deuses", icon: "/temas/deuses.png", color: "from-indigo-600 to-violet-900" },
    { id: "pericias", title: "Perícias", icon: "/temas/pericias.png", color: "from-violet-700 to-indigo-900" },
    { id: "equipamentos", title: "Equipamentos", icon: "/temas/equipamentos.png", color: "from-yellow-600 to-amber-800" },
    { id: "magias", title: "Magias", icon: "/temas/magias.png", color: "from-purple-600 to-indigo-800" },
    { id: "regras", title: "Regras do Jogo", icon: "/temas/regras.png", color: "from-red-700 to-rose-900" },
    { id: "parceiros", title: "Parceiros", icon: "/temas/parceiros.png", color: "from-emerald-600 to-green-800" },
    { id: "montarias", title: "Montarias", icon: "/temas/montarias.png", color: "from-lime-600 to-green-800" },
    { id: "ameacas",  title: "Ameaças",  icon: "/temas/ameacas.png",  color: "from-red-600 to-orange-800",  href: "/ameacas"},
    { id: "perigos",  title: "Perigos",  icon: "/temas/perigos.png",  color: "from-orange-600 to-red-800",  href: "/perigos"},
    { id: "condicoes",  title: "Condições",  icon: "/temas/condicoes.png",  color: "from-rose-600 to-red-800",  href: "/condicoes"},
    { id: "distincoes",  title: "Distinções",  icon: "/temas/distincoes.png",  color: "from-rose-600 to-red-800",  href: "/distincoes"},
    { id: "complicacoes",  title: "Complicações",  icon: "/temas/complicacoes.png",  color: "from-rose-600 to-red-800",  href: "/complicacoes"},
    { id: "tesouros",  title: "Tesouros",  icon: "/temas/tesouro.jpg",  color: "from-rose-600 to-red-800",  href: "/tesouros"},
    { id: "combate",  title: "Combate",  icon: "/temas/combate.png",  color: "from-rose-600 to-red-800",  href: "/combate"},
    { id: "mundo-de-arton",  title: "Mundo de Arton",  icon: "/temas/mundo-de-arton.png",  color: "from-blue-700 to-indigo-950",  href: "/mundo-de-arton"},
    { id: "ficha-t20", title: "Fichas", icon: "/temas/fichas.png", color: "from-blue-700 to-indigo-950", href: "/fichas-t20.html" },
  ];

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header - AJUSTADO: Centralização forçada */}
      <header className="relative z-10 p-8 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center w-full">
        <ThemeToggle className="absolute top-4 right-4 md:top-6 md:right-8" />
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm text-center" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
            a-Tormenta
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3 w-full">
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-[rgb(var(--accent-rgb))]"></div>
                <p className="font-display text-amber-900/80 text-sm tracking-[0.2em] uppercase font-bold text-center">
                Compêndio de Tormenta
                </p>
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-[rgb(var(--accent-rgb))]"></div>
            </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-6 py-12">
        <div className="mb-12 text-center w-full">
          <h2 className="font-display text-4xl font-bold text-red-800 mb-2 drop-shadow-sm">
            Grimório de Conteúdos
          </h2>
          <p className="text-amber-900/80 italic font-medium">
            "Escolha seu caminho e prepare-se para o que há de vir..."
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {themes
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((theme) => (
              <Link
                key={theme.id}
                href={theme.href || `/${theme.id}`}
                className="group relative h-full mt-6 perspective-1000"
              >
                {/* Card Container - AJUSTADO: min-h-[300px] para garantir altura */}
                <div className="card-grain relative h-full min-h-[300px] flex flex-col bg-[rgb(var(--bg-card-rgb))] border border-amber-900/20 rounded-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(var(--accent-rgb),0.18)] group-hover:border-[rgb(var(--accent-rgb))]/55">

                  {/* Glow por categoria */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-10 ${theme.color}`}
                  />

                  <div className="crest">
                    <span>{theme.title.charAt(0)}</span>
                  </div>

                  {/* Icon Container - imagens são arte cheia (sem fundo branco), então cobrem a caixa inteira sem blend de remoção de fundo */}
                  <div className="relative flex-1 w-full overflow-hidden rounded-t-lg border-b border-amber-900/15 bg-[rgb(var(--bg-card-rgb))]">
                    <div className="absolute inset-0 z-10 shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]"></div>

                    <img
                      src={theme.icon}
                      alt={theme.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgb(var(--bg-card-rgb))] to-transparent z-10"></div>
                  </div>

                  {/* Content Area */}
                  <div className="relative h-[100px] p-4 flex flex-col items-center justify-center rounded-b-lg bg-[rgb(var(--bg-card-rgb))] z-20">
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-700 transition-colors duration-300"></div>

                    <h3 className="font-display text-lg font-bold text-center text-amber-950 group-hover:text-red-700 transition-colors duration-300 tracking-wide leading-tight drop-shadow-sm">
                      {theme.title}
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
                Sobre o Compêndio
                </h3>
                <p className="text-amber-950 font-medium leading-relaxed w-full mx-auto">
                Este tomo contém o conhecimento acumulado sobre o mundo de Tormenta.
                O conteúdo ainda está sendo transcrito pelos escribas. Sugestões são bem-vindas na taverna mais próxima.
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