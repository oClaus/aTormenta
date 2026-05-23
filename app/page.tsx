import Link from "next/link";

export default function Home() {
  const themes = [
    { id: "chefes", title: "Chefes", icon: "/temas/chefes.png", color: "from-red-600 to-red-900" },
    { id: "pequenas-aventuras", title: "Pequenas Aventuras", icon: "/temas/pequenas_aventuras.png", color: "from-pink-700 to-purple-900" },
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
    { id: "itens-magicos",  title: "Itens Mágicos",  icon: "/temas/itens-magicos.png",  color: "from-purple-500 to-amber-600",  href: "/itens-magicos"},
    { id: "condicoes",  title: "Condições",  icon: "/temas/condicoes.png",  color: "from-rose-600 to-red-800",  href: "/condicoes"},
    { id: "distincoes",  title: "Distinções",  icon: "/temas/distincoes.png",  color: "from-rose-600 to-red-800",  href: "/distincoes"},
    { id: "complicacoes",  title: "Complicações",  icon: "/temas/complicacoes.png",  color: "from-rose-600 to-red-800",  href: "/complicacoes"},
    { id: "tesouros",  title: "Tesouros",  icon: "/temas/tesouro.jpg",  color: "from-rose-600 to-red-800",  href: "/tesouros"},
    { id: "combate",  title: "combate",  icon: "/temas/tesouro.jpg",  color: "from-rose-600 to-red-800",  href: "/combate"},
  ];

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header - AJUSTADO: Centralização forçada */}
      <header className="relative z-10 p-8 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm flex flex-col items-center justify-center text-center w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm text-center" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
            a-Tormenta
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3 w-full">
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-red-800"></div>
                <p className="text-amber-900/80 text-sm tracking-[0.2em] uppercase font-bold text-center">
                Compêndio de Tormenta
                </p>
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-red-800"></div>
            </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-6 py-12">
        <div className="mb-12 text-center w-full">
          <h2 className="text-4xl font-bold text-red-800 mb-2 drop-shadow-sm">
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
                className="group relative h-full perspective-1000"
              >
                {/* Card Container - AJUSTADO: min-h-[300px] para garantir altura */}
                <div className="relative h-full min-h-[300px] flex flex-col bg-[#d9c8a9] border-2 border-amber-900/30 rounded-lg overflow-hidden transition-all duration-300 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] group-hover:border-red-700/50">
                  
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${theme.color}`}
                  />
                  
                  {/* Icon Container - AJUSTADO: flex-1 para ocupar o espaço todo acima do texto */}
                  <div className="relative flex-1 w-full overflow-hidden border-b border-amber-900/20 bg-[#e8dac1]">
                    <div className="absolute inset-0 z-10 shadow-[inset_0_0_20px_rgba(69,26,3,0.1)]"></div>
                    
                    <img
                      src={theme.icon}
                      alt={theme.title}
                      className="
                        w-full h-full
                        object-cover
                        opacity-90 group-hover:opacity-100
                        transition-all duration-500
                        group-hover:scale-110
                        filter saturate-50 group-hover:saturate-100 mix-blend-multiply sepia-[0.2]
                      "
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#d9c8a9] to-transparent z-10"></div>
                  </div>

                  {/* Content Area - Altura fixa para o texto, deixando a imagem crescer */}
                  <div className="relative h-[100px] p-4 flex flex-col items-center justify-center bg-[#d9c8a9] group-hover:bg-[#e8dac1] transition-colors duration-300 z-20">
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-red-700 transition-colors duration-300"></div>
                    
                    <h3 className="text-xl font-bold text-center text-amber-950 group-hover:text-red-700 transition-colors duration-300 tracking-wide leading-tight drop-shadow-sm">
                      {theme.title}
                    </h3>
                    
                    <div className="w-1/2 h-[1px] bg-amber-900/20 mt-2 group-hover:w-3/4 group-hover:bg-red-800/50 transition-all duration-500"></div>
                  </div>

                  {/* Corner Borders */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-900/40 group-hover:border-red-700 transition-colors z-20"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amber-900/40 group-hover:border-red-700 transition-colors z-20"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/40 group-hover:border-red-700 transition-colors z-20"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/40 group-hover:border-red-700 transition-colors z-20"></div>
                
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-20 w-full p-1 rounded-lg bg-gradient-to-r from-[#d9c8a9] via-amber-900/20 to-[#d9c8a9]">
            <div className="bg-[#e8dac1] p-8 rounded border-2 border-amber-900/30 text-center relative overflow-hidden w-full shadow-sm">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-800/30 to-transparent"></div>
                <h3 className="text-2xl font-bold text-red-800 mb-4 uppercase tracking-widest drop-shadow-sm">
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
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}