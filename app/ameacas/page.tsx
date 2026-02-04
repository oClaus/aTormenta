"use client";

import Link from "next/link";
import { useState } from "react";
import { Threat } from "@/types/threat";
import { threats } from "@/data/threats";

export default function AmeacasPage() {
  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // --- FUNÇÃO PARA O SCROLL ---
  const scrollToGrid = () => {
    const element = document.getElementById("ameacas-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredThreats = threats.filter(threat => {
    const searchLower = searchTerm.toLowerCase();
    
    return (
      threat.name.toLowerCase().includes(searchLower) ||
      threat.tipo.toLowerCase().includes(searchLower) ||
      threat.tamanho.toLowerCase().includes(searchLower) ||
      String(threat.nd).includes(searchLower) ||
      (threat.origin || "").toLowerCase().includes(searchLower) ||
      (threat.description || "").toLowerCase().includes(searchLower)
    );
  })
  .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header - 100% Width */}
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
                <span className="text-red-800">Ameaças</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Descrição */}
        <div className="mb-12 w-full">
            <button 
            onClick={scrollToGrid}
            className="group flex items-center gap-3 px-6 py-3 mb-8 bg-[#e8dac1] border border-amber-900/30 rounded hover:border-red-600 hover:bg-[#d9c8a9] transition-all duration-300 shadow-sm"
          >
            <span className="text-amber-900/70 group-hover:text-red-800 font-bold uppercase tracking-wider text-xs">Ir para a Lista</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-4 h-4 text-amber-900/50 group-hover:text-red-700 animate-bounce group-hover:animate-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </button>

          <h2 className="text-5xl font-bold text-red-800 mb-6 border-b border-amber-900/20 pb-4">
            Ameaças
          </h2>
          <p className="text-amber-900/80 text-lg mb-8 italic border-l-4 border-red-800/50 pl-4 font-medium">
            As seções a seguir trazem criaturas para o mestre usar como inimigos. As seções são divididas por temas, para ajudar o mestre na seleção dos adversários. Porém, o mestre é livre para misturar os grupos!
          </p>

          <div className="space-y-6 text-amber-900/90 font-medium">
            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Nome e ND</h1>
                <p>O nome e o nível de desafio (ND) da criatura. O ND funciona como o nível da criatura (mas uma criatura terá sempre pelo menos 1 nível).</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Tipo e tamanho</h1>
                <p>O tipo (e subtipo, quando houver) representa a natureza da criatura dentro do mundo. Ele determina que habilidades podem afetar a criatura. Além disso, alguns tipos fornecem habilidades específicas.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Papel de Combate</h1>
                <p className="mb-2">O papel de combate da criatura indica como ela deve ser usada pelo mestre. Existem três papeis: solo, lacaio e especial, indicados por um ícone (no livro, aqui constará apenas a informação).</p>
                <div className="space-y-2 mt-2 pl-4 border-l-2 border-amber-900/20">
                    <p><strong className="text-1xl text-red-700 block mb-1">Solo: </strong>A criatura foi construída para enfrentar os personagens sozinha. Ela possui estatísticas equilibradas; especialmente, possui muitos pontos de vida, para garantir que o combate dure um tempo bom (por volta de 3 a 5 rodadas). Este papel é ocupado principalmente por grandes monstros e vilões.</p>
                    <p><strong className="text-1xl text-red-700 block mb-1">Lacaio: </strong>A criatura foi construída para enfrentar os personagens em grandes quantidades. Por conta disso, você normalmente usará lacaios de ND menor do que o nível do grupo. Por exemplo, um grupo de 5º nível pode enfrentar um bando de lacaios de ND 1. Lacaios possuem valores de ataque e dano mais altos, para garantir que continuem sendo uma ameaça real para personagens, mesmo considerando que seu ND será menor que o nível deles, mas menos pontos de vida, para serem derrotadas mais rapidamente e não deixarem o combate excessivamente lento. Este papel é ocupado primariamente por humanoides e monstros pequenos.</p>
                    <p><strong className="text-1xl text-red-700 block mb-1">Especial: </strong>A criatura possui diversas habilidades especiais e/ou foi feita para ser usada em situações fora de combate direto (por exemplo, pode ser usada para enganar ou roubar os personagens). Este papel é ocupado também por conjuradores ou líderes (criaturas cujas habilidades fortalecem outras, e consequentemente devem ser usadas em conjunto com lacaios). Procure analisar a ficha de uma criatura especial antes de usá-la!</p>
                </div>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Iniciativa e percepção</h1>
                <p>Os valores de Iniciativa e Percepção da criatura e quaisquer habilidades relacionadas a sentidos.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Defesa e Resistências</h1>
                <p>A Defesa e os valores de Fortitude, Reflexos e Vontade da criatura, além de quaisquer habilidades especiais defensivas, como redução de dano.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Pontos de Vida</h1>
                <p>O total de pontos de vida da criatura.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Deslocamento</h1>
                <p>A quantidade de metros que a criatura consegue percorrer com uma ação de movimento (e, entre parênteses, a quantidade de quadrados de 1,5m). O número padrão é o deslocamento terrestre da criatura. Uma criatura pode possuir outras formas de deslocamento, como voo e natação.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Pontos de Mana</h1>
                <p>A quantidade de PM que a criatura possui. Caso a criatura não possua habilidades com custo em PM, esta linha não aparecerá.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Ações</h1>
                <p>Todos os ataques e habilidades que a criatura pode fazer (e, entre parênteses, a ação necessária e seu custo em PM, se houver). Habilidades sem ação exigida são passivas (estão sempre ativas). Algumas habilidades terminam com o termo “recarga” e um tipo de ação. Nesse caso, sempre que usar a habilidade, a criatura precisará gastar a ação determinada para recarregá-la antes de poder usá-la novamente.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Atributos</h1>
                <p>Os valores de atributos da criatura. Algumas criaturas possuem um valor de atributo nulo (–). Nesse caso, a criatura não possui o atributo em questão e não pode usá-lo. Uma criatura com “For –” não pode exercer força física sobre o mundo; uma criatura com “Des –” não pode se mover, e uma criatura com “Int –” não é capaz de pensar, agindo apenas conforme uma programação prévia.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Perícias</h1>
                <p>Os valores totais das demais perícias da criatura (além de Iniciativa, Percepção, Fortitude, Reflexos e Vontade, que já apareceram). Caso a criatura não possua outras perícias, esta linha não aparecerá.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Equipamento e Tesouro</h1>
                <p>Itens utilizados pela criatura, se houver. Após os itens, a categoria de tesouro da criatura. Algumas criaturas possuem recursos que podem ser extraídos de seu corpo. Extrair um recurso exige uma hora de trabalho e um teste de Sobrevivência, ou de um Ofício relacionado ao recurso, com CD 15 + ND da criatura. Em caso de falha, os recursos são estragados.</p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-amber-800 mb-2">Tipos de criaturas</h1>
                <div className="space-y-2">
                    <p><strong className="text-1xl text-red-700">Animais: </strong>Bestas e feras irracionais (Int –5 ou –4), sem poderes mágicos.</p>
                    <p><strong className="text-1xl text-red-700">Construtos: </strong>Objetos animados ou criaturas artificiais. Possuem visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno, não recuperam PV por descanso e efeitos de cura, e a perícia Cura não funciona com eles — mas Ofício (artesão) pode ser usada no lugar dela com os mesmos efeitos.</p>
                    <p><strong className="text-1xl text-red-700">Espíritos: </strong>Nativos de outros planos.</p>
                    <p><strong className="text-1xl text-red-700">Humanoides: </strong>Seres parecidos com os humanos: racionais e com culturas próprias. Este tipo é subdivido em raças (humano, anão, goblin...).</p>
                    <p><strong className="text-1xl text-red-700">Monstros: </strong>Criaturas de anatomia estranha e/ ou com habilidades fantásticas.</p>
                    <p><strong className="text-1xl text-red-700">Mortos-vivos: </strong>Cadáveres animados por energia negativa. Mortos-vivos possuem visão no escuro; imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno; sofrem dano por efeitos mágicos de cura de luz (Vontade CD do efeito reduz à metade) e recuperam PV com dano de trevas.</p>
                </div>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-900 to-transparent my-12 opacity-30"></div>

        {/* Busca */}
        <div 
          id="ameacas-grid" 
          className="mb-8 p-6 rounded bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] scroll-mt-24 w-full"
        >
          <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider">
            Buscar Ameaça
          </label>
          <div className="relative">
             <input
                type="text"
                placeholder="Nome, tipo, tamanho ou descrição..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all font-serif shadow-sm"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                🔍
            </div>
          </div>
        </div>

        {/* Grid de Ameaças - ATENÇÃO: bg-[#d9c8a9] usado aqui nos cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
          {filteredThreats.map((threat) => (
            <div
              key={threat.id}
              onClick={() => setSelectedThreat(threat)}
              className="group relative overflow-hidden rounded bg-[#d9c8a9] border border-amber-900/30 hover:border-red-700/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] cursor-pointer p-5 flex flex-col justify-between min-h-[180px]"
            >
              {/* --- 1. IMAGEM DE FUNDO (Ajustada para o fundo bege) --- */}
              <div className="absolute right-0 top-0 h-full w-[60%] opacity-80 group-hover:opacity-100 transition-all duration-500 pointer-events-none select-none mask-gradient-left flex justify-end">
                {threat.image ? (
                  <>
                    {/* Máscara de gradiente ajustada para a cor #d9c8a9 */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#d9c8a9] via-[#d9c8a9]/20 to-transparent" />
                    
                    <img
                      src={threat.image}
                      alt=""
                      className="h-full w-auto drop-shadow-sm mix-blend-multiply filter sepia-[0.3]"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-10">
                      <span className="text-8xl block translate-x-4 grayscale text-amber-900">☠️</span>
                  </div>
                )}
              </div>

              {/* --- 2. CONTEÚDO DE TEXTO --- */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full">
                
                {/* TOPO: Nome e ND */}
                <div className="flex justify-between items-start gap-3 pr-2">
                  <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-700 transition-colors leading-tight drop-shadow-sm line-clamp-2 max-w-[65%]">
                    {threat.name}
                  </h3>
                  
                  {/* Badge ND */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-11 h-11 rounded bg-[#f5e6d0] border border-amber-900/20 shadow-sm group-hover:border-red-600 transition-colors">
                    <span className="text-[0.6rem] uppercase text-amber-900/50 font-bold tracking-wider">ND</span>
                    <span className="text-lg font-black text-red-800 leading-none font-sans">{threat.nd}</span>
                  </div>
                </div>

                {/* RODAPÉ: Separador, Tipo, Tamanho, Papel, Origem */}
                <div className="mt-6">
                  {/* Separador Animado */}
                  <div className="w-12 h-[2px] bg-red-800/60 mb-3 group-hover:w-1/2 transition-all duration-500"></div>

                  {/* Linha de Metadados */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide bg-[#e8dac1] border border-amber-900/20 text-amber-900/80">
                      {threat.tipo}
                    </span>
                    
                    {threat.tamanho && (
                      <div className="flex items-center gap-2 text-xs text-amber-900/70 font-medium">
                        <span className="w-1 h-1 rounded-full bg-amber-900/40"></span>
                        <span>{threat.tamanho}</span>
                      </div>
                    )}

                    {threat.papel && (
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <span className="w-1 h-1 rounded-full bg-amber-900/40"></span>
                        <span className="text-red-800/90 uppercase tracking-wider text-[10px] font-bold">
                          {threat.papel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Origem com Ícone */}
                  <div className="flex items-center gap-1.5 text-xs text-amber-900/50 group-hover:text-amber-900/80 transition-colors">
                    <span className="uppercase tracking-widest truncate max-w-[150px]">
                      {threat.origin || "Desconhecida"}
                    </span>
                  </div>
                </div>

              </div>
              
              {/* Detalhes de Canto */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredThreats.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed border-amber-900/30 rounded bg-[#e8dac1]/50">
            <p className="text-amber-900/60 text-lg italic">Nenhuma ameaça encontrada nos registros.</p>
          </div>
        )}
      </main>

      {/* Modal Detalhado */}
      {selectedThreat && (
        <div
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedThreat(null)}
        >
          <div
            className="bg-[#f2e8d5] border-4 border-double border-amber-900/40 rounded shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-5xl w-full my-8 relative custom-scrollbar bg-[url('/noise.png')]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="relative p-6 border-b border-amber-900/20 bg-[#e8dac1]/50">
              <button
                onClick={() => setSelectedThreat(null)}
                className="absolute top-4 right-4 text-amber-900/60 hover:text-red-800 transition-colors text-2xl bg-[#f2e8d5] rounded-full w-8 h-8 flex items-center justify-center shadow-sm border border-amber-900/10"
              >
                ✕
              </button>
              <h2 className="text-3xl font-bold text-red-800 mb-1 font-serif tracking-wide">
                {selectedThreat.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-2 text-sm font-bold uppercase tracking-wide">
                <span className="text-amber-900/70">{selectedThreat.tipo}</span>
                <span className="text-amber-900/40">•</span>
                <span className="text-amber-800">{selectedThreat.tamanho}</span>
                <span className="text-amber-900/40">•</span>
                <span className="text-red-700">{selectedThreat.papel}</span>
                <span className="text-amber-900/40">•</span>
                <span className="text-amber-950">ND {selectedThreat.nd}</span>
                {selectedThreat.origin && (
                  <>
                    <span className="text-amber-900/40">•</span>
                    <span className="text-amber-900/60">{selectedThreat.origin}</span>
                  </>
                )}
              </div>
            </div>

            {/* Conteúdo Scrollável */}
            <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              
              {/* Descrição */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2 font-serif border-b border-amber-900/10 pb-1">
                  📖 Descrição
                </h3>
                <p className="text-amber-900/90 leading-relaxed whitespace-pre-wrap font-medium">
                  {selectedThreat.description}
                </p>
              </section>

              {/* Estatísticas (Iniciativa, Defesa, PV, PM) */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-3 font-serif border-b border-amber-900/10 pb-1">⚔️ Estatísticas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="p-3 bg-[#e8dac1] rounded border border-amber-900/20 shadow-sm text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">INICIATIVA</div>
                    <div className="text-2xl font-bold text-amber-950">
                      {selectedThreat.iniciativa >= 0 ? "+" : ""}{selectedThreat.iniciativa}
                    </div>
                  </div>
                  <div className="p-3 bg-[#e8dac1] rounded border border-amber-900/20 shadow-sm text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">PERCEPÇÃO</div>
                    <div className="text-2xl font-bold text-amber-950">
                      {selectedThreat.percepcao >= 0 ? "+" : ""}{selectedThreat.percepcao}
                    </div>
                  </div>
                  <div className="p-3 bg-[#e8dac1] rounded border border-amber-900/20 shadow-sm text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">DEFESA</div>
                    <div className="text-2xl font-bold text-amber-950">{selectedThreat.defesa}</div>
                  </div>
                  <div className="p-3 bg-red-100 rounded border border-red-900/20 text-center shadow-sm">
                    <div className="text-xs text-red-700 font-bold uppercase mb-1">PV</div>
                    <div className="text-2xl font-bold text-red-800">{selectedThreat.pv}</div>
                  </div>
                </div>
              </section>

              {/* Resistências (Fort, Ref, Von) */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-3 font-serif border-b border-amber-900/10 pb-1">🛡️ Resistências</h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="p-3 bg-[#fbf5e6] rounded border border-amber-900/10 text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">FORT</div>
                    <div className="text-xl font-bold text-amber-950">
                      {selectedThreat.fort >= 0 ? "+" : ""}{selectedThreat.fort}
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf5e6] rounded border border-amber-900/10 text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">REF</div>
                    <div className="text-xl font-bold text-amber-950">
                      {selectedThreat.ref >= 0 ? "+" : ""}{selectedThreat.ref}
                    </div>
                  </div>
                  <div className="p-3 bg-[#fbf5e6] rounded border border-amber-900/10 text-center">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">VON</div>
                    <div className="text-xl font-bold text-amber-950">
                      {selectedThreat.von >= 0 ? "+" : ""}{selectedThreat.von}
                    </div>
                  </div>
                </div>
                {selectedThreat.resistenciaDano && (
                  <div className="p-3 bg-[#e8dac1]/50 rounded border border-amber-900/10">
                    <span className="text-amber-800 font-bold text-sm mr-2">Vantagens/RD:</span>
                    <span className="text-amber-900/90 text-sm font-medium">{selectedThreat.resistenciaDano}</span>
                  </div>
                )}
              </section>

              {/* Movimento e Mana */}
              <section className="mb-6">
                <div className={`grid gap-3 ${selectedThreat.pm != null ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <div className="p-3 bg-[#fbf5e6] rounded border border-amber-900/10">
                    <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">DESLOCAMENTO</div>
                    <div className="text-amber-950 font-bold">{selectedThreat.deslocamento}</div>
                  </div>
                  {selectedThreat.pm != null && (
                    <div className="p-3 bg-blue-50 rounded border border-blue-900/10">
                      <div className="text-xs text-blue-700 font-bold uppercase mb-1">PM</div>
                      <div className="text-blue-900 font-bold">{selectedThreat.pm}</div>
                    </div>
                  )}
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-800 mb-3 font-serif border-b border-red-900/20 pb-1">⚡ Ataques</h3>
                {selectedThreat.ataqueCorpoACorpo && (
                  <div className="p-3 bg-[#fbf5e6] rounded border-l-4 border-red-800 mb-3 shadow-sm">
                    <div className="text-xs text-red-800/70 font-bold uppercase mb-1">CORPO A CORPO</div>
                    <div className="text-amber-950 font-serif font-medium">{selectedThreat.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedThreat.ataqueDistancia && (
                  <div className="p-3 bg-[#fbf5e6] rounded border-l-4 border-amber-800 shadow-sm">
                    <div className="text-xs text-amber-800/70 font-bold uppercase mb-1">À DISTÂNCIA</div>
                    <div className="text-amber-950 font-serif font-medium">{selectedThreat.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades Especiais */}
              {selectedThreat.habilidades.length > 0 && (
                <section className="mb-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-3 font-serif border-b border-amber-900/10 pb-1">✨ Habilidades</h3>
                  <div className="space-y-2">
                    {selectedThreat.habilidades.map((hab, index) => (
                      <div key={index} className="p-3 bg-[#e8dac1]/50 rounded border border-amber-900/10">
                        <p className="text-amber-900/90 text-sm font-medium">{hab}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Atributos Básicos (GRID DE 6) */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-amber-800 mb-3 font-serif border-b border-amber-900/10 pb-1">📊 Atributos</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {[
                    { label: "FOR", val: selectedThreat.for },
                    { label: "DES", val: selectedThreat.des },
                    { label: "CON", val: selectedThreat.con },
                    { label: "INT", val: selectedThreat.int },
                    { label: "SAB", val: selectedThreat.sab },
                    { label: "CAR", val: selectedThreat.car },
                  ].map((attr) => (
                    <div key={attr.label} className="p-3 bg-[#fbf5e6] rounded border border-amber-900/20 text-center shadow-sm">
                      <div className="text-xs text-amber-900/60 font-bold uppercase mb-1">{attr.label}</div>
                      <div className="text-xl font-bold text-amber-950">{attr.val}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Perícias e Equipamentos */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-amber-900/60 mb-3 font-serif uppercase text-sm border-b border-amber-900/10 pb-1">🎯 Perícias & Equipamento</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedThreat.pericias.map((pericia, index) => (
                    <span key={index} className="px-3 py-1 bg-[#e8dac1] rounded-sm border border-amber-900/20 text-amber-900/80 text-sm font-bold shadow-sm">
                      {pericia}
                    </span>
                  ))}
                </div>
                {selectedThreat.equipamentos.length > 0 && (
                   <div className="space-y-1 mt-2">
                      {selectedThreat.equipamentos.map((equip, idx) => (
                          <div key={idx} className="text-sm text-amber-900/60 italic font-medium">• {equip}</div>
                      ))}
                   </div>
                )}
              </section>

              {/* Tesouro */}
              <section className="p-4 mb-8 bg-[#e6d5b8] border border-amber-900/20 rounded shadow-inner">
                <h3 className="text-xl font-bold text-amber-800 mb-2 flex items-center gap-2 font-serif">
                  💰 Tesouro
                </h3>
                <p className="text-amber-900/90 text-sm leading-relaxed font-medium">{selectedThreat.tesouro}</p>
              </section>

              {/* IMAGEM (NO FINAL) */}
              {selectedThreat.image && (
                <section className="mt-8 pt-8 border-t border-amber-900/20">
                  <h3 className="text-amber-900/50 text-sm uppercase tracking-widest mb-4 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded overflow-hidden border-2 border-amber-900/30 shadow-md bg-[#e8dac1] max-w-2xl mx-auto">
                    <img
                      src={selectedThreat.image}
                      alt={selectedThreat.name}
                      className="w-full h-auto object-cover mix-blend-multiply filter sepia-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d9c8a9]/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </section>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 p-6 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}