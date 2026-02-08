"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { God, getStatusLabel, getStatusColor } from "@/types/god";
import { gods } from "@/data/gods";

// --- Componente de Galeria ---
// Mantido estrutura, alterado apenas cores dos "pontinhos" para combinar com o tema
function ImageGallery({ images, alt }: { images: string | string[]; alt: string }) {
  const imageList = Array.isArray(images) ? images : [images];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4 segundos
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imageList.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain p-2 transition-opacity duration-1000 ease-in-out mix-blend-multiply filter sepia-[0.2] ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
       {/* Indicadores (pontinhos) - Cores ajustadas para o tema claro */}
       {imageList.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {imageList.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentIndex ? "bg-red-700 w-3" : "bg-amber-900/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function DeusesPage() {
  const [selectedGod, setSelectedGod] = useState<God | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGods = gods
    .filter(
      (god) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        god.beliefs.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  // Função para fechar o modal clicando fora
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedGod(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Deuses</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Introdução e Explicação */}
        <div className="mb-12 w-full space-y-6 text-lg leading-relaxed">
            <div>
                <h1 className="text-5xl font-bold text-amber-800 mb-6 border-b-2 border-amber-900/20 pb-2">
                Deuses
                </h1>
                <p className="text-amber-900/80 font-medium">
                Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Escolhendo seu deus</h2>
                <p className="text-amber-900/80 font-medium mb-2">Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
                <p className="text-amber-900/80 font-medium mb-2">Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
                <p className="text-amber-900/80 font-medium mb-2">Ao se tornar devoto, você recebe um poder concedido à sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião).</p>
                <p className="text-amber-900/80 font-medium mb-2">Devotos são todos os personagens, aventureiros ou não, que aceitam venerar uma divindade do Panteão, seguindo suas Obrigações & Restrições. Em troca, passam a ter acesso aos poderes concedidos. Um personagem pode se tornar devoto através de habilidade de classe (clérigo, druida, frade, paladino) ou pertencendo a uma raça ou classe permitida para cada deus.</p>
                <p><span className="text-amber-700 font-bold">Raças </span><span className="text-amber-900/80 font-medium">Humanos, meios-elfos, meios-orcs, minauros, moreau e finntroll (vistos em Ameaças de Arton) são livres para escolher qualquer divindade. Membros de outras raças podem se tornar devotos de certas divindades quando a raça aparece em sua lista de devotos, não importando a classe.</span></p>
                <p><span className="text-amber-700 font-bold">Exceção </span><span className="text-amber-900/80 font-medium">Suraggel sempre podem ser devotos da divindade relacionada a sua herança planar.</span></p>
                <p><span className="text-amber-700 font-bold">Classes </span><span className="text-amber-900/80 font-medium">Clérigos e frades são livres para escolher qualquer divindade como padroeira, não importando sua raça. Druidas e paladinos são restritos a certos deuses, listados em suas habilidades de classe. Membros de outras classes podem se tornar devotos de uma divindade quando a classe aparece em sua lista de devotos, não importando a raça.</span></p>
                <p><span className="text-amber-700 font-bold">Exceção </span><span className="text-amber-900/80 font-medium">feiticeiros abençoados sempre podem ser devotos do deus de sua herança de linhagem.</span></p>
                <p><span className="text-amber-700 font-bold">Multiclasse </span><span className="text-amber-900/80 font-medium">No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</span></p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-amber-800 mb-2">Características dos deuses</h2>
                <div className="space-y-2 pl-4 border-l-4 border-amber-900/30">
                    <p><span className="text-amber-700 font-bold"> Crenças e Objetivos:</span><span className="text-amber-900/80 font-medium"> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</span></p>
                    <p><span className="text-amber-700 font-bold"> Símbolo Sagrado:</span><span className="text-amber-900/80 font-medium"> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</span></p>
                    <p><span className="text-amber-700 font-bold"> Canalizar Energia:</span><span className="text-amber-900/80 font-medium"> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</span></p>
                    <p><span className="text-amber-700 font-bold"> Arma Preferida:</span><span className="text-amber-900/80 font-medium"> A arma típica de devotos do deus, importante para certas habilidades e magias.</span></p>
                </div>
            </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
             <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar por nome ou crenças..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
                />
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Deuses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
            {filteredGods.map((god) => (
            <button
                key={god.id}
                onClick={() => setSelectedGod(god)}
                className="group relative rounded overflow-hidden bg-[#e8dac1] border border-amber-900/30 hover:border-amber-700/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] text-left flex flex-col"
            >
                {/* Imagem - Alterada para usar o componente ImageGallery */}
                <div className="w-full h-56 border-b border-amber-900/10 bg-[#f0e6d2] flex items-center justify-center relative overflow-hidden">
                    <ImageGallery images={god.image} alt={god.name} />
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 flex-1 flex flex-col bg-[#e8dac1]">
                    <h3 className="text-2xl font-bold text-amber-950 group-hover:text-red-700 transition-colors mb-2 font-serif">
                        {god.name}
                    </h3>
                    
                    {/* ADIÇÃO: Subtítulo no card (se existir) */}
                    {god.subtitle && (
                        <p className="text-amber-900/60 text-xs font-bold uppercase tracking-widest mb-2 -mt-1">
                            {god.subtitle}
                        </p>
                    )}

                    {/* Status Badge */}
                    {god.status && (
                        <div className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider text-amber-50 bg-[#7f1d1d] border border-red-900 mb-3`}>
                        {getStatusLabel(god.status)}
                        </div>
                    )}

                    {/* Descrição Breve */}
                    <p className="text-amber-900/80 text-sm line-clamp-3 font-serif leading-relaxed font-medium">
                        {god.history}
                    </p>
                </div>

                {/* Corner Borders */}
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/30 group-hover:border-red-600 transition-colors"></div>
            </button>
            ))}
        </div>

        {filteredGods.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhum deus encontrado nos registros sagrados.</p>
            </div>
        )}

        {/* Modal */}
        {selectedGod && (
            <div 
                onClick={handleBackdropClick}
                className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
            {/* Container do Modal */}
            <div className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded-lg shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar bg-[url('/noise.png')] relative">
                
                {/* Header do Modal */}
                <div className="sticky top-0 bg-[#f2e8d5]/95 backdrop-blur border-b border-amber-900/20 p-6 flex items-start justify-between z-10">
                    <div>
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 via-red-800 to-amber-950 mb-2 font-serif tracking-wide">
                            {selectedGod.name}
                        </h2>
                        {/* ADIÇÃO: Subtítulo no header do modal */}
                        {selectedGod.subtitle && (
                            <p className="text-amber-900/60 text-lg font-serif italic mb-2">{selectedGod.subtitle}</p>
                        )}

                        {selectedGod.status && (
                            <div className={`inline-block px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest text-amber-50 bg-[#7f1d1d] border border-red-900`}>
                            {getStatusLabel(selectedGod.status)}
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setSelectedGod(null)}
                        className="text-amber-900/60 hover:text-red-800 text-3xl transition-colors leading-none"
                    >
                        ✕
                    </button>
                </div>

                {/* Conteúdo do Modal */}
                <div className="p-8 md:p-10 space-y-10 font-serif">
                    
                    {/* Imagem de Destaque no Modal */}
                    <div className="w-full bg-[#fbf5e6] h-80 flex items-center justify-center border border-amber-900/20 rounded overflow-hidden relative shadow-inner">
                          <ImageGallery images={selectedGod.image} alt={selectedGod.name} />
                    </div>

                    {/* História */}
                    <div className="bg-[#fffaf0] p-6 rounded border border-amber-900/20 shadow-sm">
                        <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                             <span>📖</span> História
                        </h3>
                        <p className="text-amber-900/90 leading-relaxed text-lg whitespace-pre-line font-medium text-justify">
                        {selectedGod.history}
                        </p>
                    </div>

                    {/* Motivações */}
                    {selectedGod.motivations && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>🔥</span> Motivações
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.motivations}
                            </p>
                        </div>
                    )}

                    {/* Relações */}
                    {selectedGod.relationships && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>🤝</span> Relações
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.relationships}
                            </p>
                        </div>
                    )}

                    {/* Igreja e Clero */}
                    {selectedGod.churchAndClergy && (
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>⛪</span> Igreja e Clero
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed whitespace-pre-line font-medium">
                            {selectedGod.churchAndClergy}
                            </p>
                        </div>
                    )}

                    {/* Grid com os dados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Outros Nomes */}
                        {selectedGod.otherNames && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <span>🗣️</span> Outros Nomes
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.otherNames}</p>
                            </div>
                        )}

                        {/* Áreas de Influência */}
                        {selectedGod.areasOfInfluence && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <span>🌍</span> Áreas de Influência
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.areasOfInfluence}</p>
                            </div>
                        )}

                        {/* Crenças e Objetivos */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>🙏</span> Crenças e Objetivos
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.beliefs}
                            </p>
                        </div>
                        
                        {/* Lema */}
                        {selectedGod.motto && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <span>💬</span> Lema
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed italic font-medium">"{selectedGod.motto}"</p>
                            </div>
                        )}

                         {/* Cores Significativas */}
                         {selectedGod.significantColors && (
                            <div>
                                <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                    <span>🎨</span> Cores Significativas
                                </h3>
                                <p className="text-amber-900/80 leading-relaxed font-medium">{selectedGod.significantColors}</p>
                            </div>
                        )}

                        {/* Símbolo Sagrado */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>✨</span> Símbolo Sagrado
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.sacredSymbol}
                            </p>
                        </div>

                         {/* Canalizar Energia */}
                         <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>⚡</span> Canalizar Energia
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.channelEnergy}
                            </p>
                        </div>

                        {/* Arma Preferida */}
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                                <span>🗡️</span> Arma Preferida
                            </h3>
                            <p className="text-amber-900/80 leading-relaxed font-medium">
                            {selectedGod.preferredWeapon}
                            </p>
                        </div>
                    </div>

                    {/* Devotos */}
                    <div className="border-t border-amber-900/20 pt-8">
                        <h3 className="text-2xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                             <span>👥</span> Devotos
                        </h3>
                        <p className="text-amber-900/80 leading-relaxed text-lg font-medium">
                        {selectedGod.devotees}
                        </p>
                    </div>

                    {/* Poderes Concedidos */}
                    <div>
                        <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                            <span>💫</span> Poderes Concedidos
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedGod.grantedPowers.map((power: string, index: number) =>  (
                            <div
                            key={index}
                            className="p-4 rounded bg-[#e8dac1] border border-amber-900/20 text-amber-950 font-bold hover:border-amber-700/50 transition-colors shadow-sm"
                            >
                            {power}
                            </div>
                        ))}
                        </div>
                    </div>

                    {/* Obrigações e Restrições */}
                    <div className="p-6 bg-[#fbf5e6] border-2 border-dashed border-red-900/30 rounded">
                        <h3 className="text-2xl font-bold text-red-800 mb-3 flex items-center gap-2">
                            <span>⚠️</span> Obrigações e Restrições
                        </h3>
                        <p className="text-amber-900/90 leading-relaxed font-medium">
                        {selectedGod.obligationsRestrictions}
                        </p>
                    </div>
                </div>
            </div>
            </div>
        )}
      </main>
       {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}