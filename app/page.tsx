import Link from "next/link";

export default function Home() {
  const themes = [
    { id: "chefes", title: "Chefes", icon: "/temas/chefes.png", color: "from-red-600 to-red-900" },
    { id: "pequenas-aventuras", title: "Pequenas Aventuras", icon: "/temas/pequenas_aventuras.png", color: "from-pink-700 to-purple-900" },
    { id: "racas", title: "Raças", icon: "/temas/racas.png", color: "from-green-700 to-emerald-900" },
    { id: "atributos-basicos", title: "Atributos Básicos", icon: "/temas/atributos-basicos.png", color: "from-blue-700 to-cyan-900" },
    { id: "classes", title: "Classes", icon: "/temas/classes.png", color: "from-amber-700 to-yellow-800" },
    { id: "poderes", title: "Poderes", icon: "/temas/poderes.png", color: "from-orange-700 to-red-800" },
    { id: "origem", title: "Origem", icon: "/temas/origem.png", color: "from-cyan-600 to-blue-800" },
    { id: "deuses", title: "Deuses", icon: "/temas/deuses.png", color: "from-indigo-600 to-violet-900" },
    { id: "caracteristicas", title: "Características", icon: "/temas/caracteristicas.png", color: "from-fuchsia-700 to-purple-900" },
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
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - AJUSTADO: Centralização forçada */}
      <header className="relative z-10 p-8 border-b-2 border-stone-800 bg-stone-950/80 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center w-full">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center" style={{ textShadow: '0 0 20px rgba(220, 38, 38, 0.4)' }}>
            a-Tormenta
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3 w-full">
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-700"></div>
                <p className="text-amber-700/80 text-sm tracking-[0.2em] uppercase font-bold text-center">
                Compêndio de Tormenta
                </p>
                <div className="hidden sm:block h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-700"></div>
            </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 w-full max-w-[1920px] mx-auto px-6 py-12">
        <div className="mb-12 text-center w-full">
          <h2 className="text-4xl font-bold text-stone-100 mb-2 drop-shadow-lg">
            Grimório de Conteúdos
          </h2>
          <p className="text-stone-500 italic">
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
                <div className="relative h-full min-h-[300px] flex flex-col bg-stone-900 border border-stone-800 rounded-lg overflow-hidden transition-all duration-300 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.8)] group-hover:border-amber-700/50">
                  
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${theme.color}`}
                  />
                  
                  {/* Icon Container - AJUSTADO: flex-1 para ocupar o espaço todo acima do texto */}
                  <div className="relative flex-1 w-full overflow-hidden border-b border-stone-800 bg-black">
                    <div className="absolute inset-0 z-10 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"></div>
                    
                    <img
                      src={theme.icon}
                      alt={theme.title}
                      className="
                        w-full h-full
                        object-cover
                        opacity-80 group-hover:opacity-100
                        transition-all duration-500
                        group-hover:scale-110
                        filter saturate-50 group-hover:saturate-100
                      "
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-stone-900 to-transparent z-10"></div>
                  </div>

                  {/* Content Area - Altura fixa para o texto, deixando a imagem crescer */}
                  <div className="relative h-[100px] p-4 flex flex-col items-center justify-center bg-stone-900 group-hover:bg-stone-800/50 transition-colors duration-300 z-20">
                    <div className="w-2 h-2 bg-amber-900/40 rotate-45 mb-2 group-hover:bg-amber-500 transition-colors duration-300"></div>
                    
                    <h3 className="text-xl font-bold text-center text-stone-300 group-hover:text-amber-400 transition-colors duration-300 tracking-wide leading-tight">
                      {theme.title}
                    </h3>
                    
                    <div className="w-1/2 h-[1px] bg-stone-800 mt-2 group-hover:w-3/4 group-hover:bg-amber-900/50 transition-all duration-500"></div>
                  </div>

                  {/* Corner Borders */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-600 group-hover:border-amber-500 transition-colors z-20"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stone-600 group-hover:border-amber-500 transition-colors z-20"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-600 group-hover:border-amber-500 transition-colors z-20"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-600 group-hover:border-amber-500 transition-colors z-20"></div>
                
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-20 w-full p-1 rounded-lg bg-gradient-to-r from-stone-800 via-amber-900/20 to-stone-800">
            <div className="bg-stone-950 p-8 rounded border border-stone-800 text-center relative overflow-hidden w-full">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent"></div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4 uppercase tracking-widest">
                Sobre o Compêndio
                </h3>
                <p className="text-stone-400 leading-relaxed w-full mx-auto">
                Este tomo contém o conhecimento acumulado sobre o mundo de Tormenta.
                O conteúdo ainda está sendo transcrito pelos escribas. Sugestões são bem-vindas na taverna mais próxima.
                </p>
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}