import Link from "next/link";

export default function Home() {
  const themes = [
    { id: "comidas", title: "Comidas", icon: "🍖", color: "from-purple-600 to-purple-800" },
    { id: "chefes", title: "Chefes", icon: "👹", color: "from-red-600 to-red-800" },
    { id: "itens", title: "Itens", icon: "⚔️", color: "from-red-600 to-pink-600" },
    { id: "personagens", title: "Personagens", icon: "🧙", color: "from-purple-700 to-pink-700" },
    { id: "locais", title: "Locais", icon: "🏰", color: "from-pink-600 to-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          Tormenta
        </h1>
        <p className="text-gray-400 mt-2 text-sm">Seu compêndio de RPG organizado</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-purple-300 mb-2">Categorias</h2>
          <p className="text-gray-400">Selecione uma categoria para explorar</p>
        </div>

        {/* Grid de Temas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((theme) => (
            <Link
              key={theme.id}
              href={`/${theme.id}`}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${theme.color}"></div>
              
              <div className="relative p-8 flex flex-col items-center justify-center min-h-[200px]">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  {theme.icon}
                </div>
                <h3 className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {theme.title}
                </h3>
                
                {/* Efeito de brilho neon no hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Seção de Informação */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/30">
          <h3 className="text-2xl font-bold text-purple-300 mb-4">Sobre o Compêndio</h3>
          <p className="text-gray-300 leading-relaxed">
            Este é seu guia completo para o mundo de Tormenta. Aqui você encontrará informações 
            organizadas sobre comidas, itens, personagens, locais e muito mais. Navegue pelas 
            categorias acima para explorar todo o conteúdo disponível.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}

