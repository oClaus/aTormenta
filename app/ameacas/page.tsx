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
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-rose-800 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Ameaças</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
        {/* Título e Descrição */}
        <div className="mb-8">
            <button 
            onClick={scrollToGrid}
            className="group flex items-center gap-2 px-6 py-3 mb-8 bg-red-950/30 border border-red-500/30 rounded-lg hover:bg-red-600 hover:border-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.1)] hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
          >
            <span className="text-red-200 group-hover:text-white font-semibold">Ir para a Lista</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-5 h-5 text-red-400 group-hover:text-white animate-bounce group-hover:animate-none"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </button>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Ameaças
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            As seções a seguir trazem criaturas para o mestre usar como inimigos. As seções são divididas por temas, para ajudar o mestre na seleção dos adversários. Porém, o mestre é livre para misturar os grupos!
          </p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Nome e ND</h1>
          <p className="text-gray-400 text-lg">O nome e o nível de desafio (ND) da criatura. O ND funciona como o nível da criatura (mas uma criatura terá sempre pelo menos 1 nível).</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Tipo e tamanho</h1>
          <p className="text-gray-400 text-lg">O tipo (e subtipo, quando houver) representa a natureza da criatura dentro do mundo. Ele determina que habilidades podem afetar a criatura. Além disso, alguns tipos fornecem habilidades específicas.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Papel de Combate</h1>
          <p className="text-gray-400 text-lg">O papel de combate da criatura indica como ela deve ser usada pelo mestre. Existem três papeis: solo, lacaio e especial, indicados por um ícone (no livro, aqui constará apenas a informação).</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Solo: </strong>A criatura foi construída para enfrentar os personagens sozinha. Ela possui estatísticas equilibradas; especialmente, possui muitos pontos de vida, para garantir que o combate dure um tempo bom (por volta de 3 a 5 rodadas). Este papel é ocupado principalmente por grandes monstros e vilões.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Lacaio: </strong>A criatura foi construída para enfrentar os personagens em grandes quantidades. Por conta disso, você normalmente usará lacaios de ND menor do que o nível do grupo. Por exemplo, um grupo de 5º nível pode enfrentar um bando de lacaios de ND 1. Lacaios possuem valores de ataque e dano mais altos, para garantir que continuem sendo uma ameaça real para personagens, mesmo considerando que seu ND será menor que o nível deles, mas menos pontos de vida, para serem derrotadas mais rapidamente e não deixarem o combate excessivamente lento. Este papel é ocupado primariamente por humanoides e monstros pequenos.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Especial: </strong>A criatura possui diversas habilidades especiais e/ou foi feita para ser usada em situações fora de combate direto (por exemplo, pode ser usada para enganar ou roubar os personagens). Este papel é ocupado também por conjuradores ou líderes (criaturas cujas habilidades fortalecem outras, e consequentemente devem ser usadas em conjunto com lacaios). Procure analisar a ficha de uma criatura especial antes de usá-la!</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Iniciativa e percepção</h1>
          <p className="text-gray-400 text-lg">Os valores de Iniciativa e Percepção da criatura e quaisquer habilidades relacionadas a sentidos.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Defesa e Resistências</h1>
          <p className="text-gray-400 text-lg">A Defesa e os valores de Fortitude, Reflexos e Vontade da criatura, além de quaisquer habilidades especiais defensivas, como redução de dano.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Pontos de Vida</h1>
          <p className="text-gray-400 text-lg">O total de pontos de vida da criatura.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Deslocamento</h1>
          <p className="text-gray-400 text-lg">A quantidade de metros que a criatura consegue percorrer com uma ação de movimento (e, entre parênteses, a quantidade de quadrados de 1,5m). O número padrão é o deslocamento terrestre da criatura. Uma criatura pode possuir outras formas de deslocamento, como voo e natação.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Pontos de Mana</h1>
          <p className="text-gray-400 text-lg">A quantidade de PM que a criatura possui. Caso a criatura não possua habilidades com custo em PM, esta linha não aparecerá.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Ações</h1>
          <p className="text-gray-400 text-lg">Todos os ataques e habilidades que a criatura pode fazer (e, entre parênteses, a ação necessária e seu custo em PM, se houver). Habilidades sem ação exigida são passivas (estão sempre ativas). Algumas habilidades terminam com o termo “recarga” e um tipo de ação. Nesse caso, sempre que usar a habilidade, a criatura precisará gastar a ação determinada para recarregá-la antes de poder usá-la novamente.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Atributos</h1>
          <p className="text-gray-400 text-lg">Os valores de atributos da criatura. Algumas criaturas possuem um valor de atributo nulo (–). Nesse caso, a criatura não possui o atributo em questão e não pode usá-lo. Uma criatura com “For –” não pode exercer força física sobre o mundo; uma criatura com “Des –” não pode se mover, e uma criatura com “Int –” não é capaz de pensar, agindo apenas conforme uma programação prévia.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Perícias</h1>
          <p className="text-gray-400 text-lg">Os valores totais das demais perícias da criatura (além de Iniciativa, Percepção, Fortitude, Reflexos e Vontade, que já apareceram). Caso a criatura não possua outras perícias, esta linha não aparecerá.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Equipamento e Tesouro</h1>
          <p className="text-gray-400 text-lg">Itens utilizados pela criatura, se houver. Após os itens, a categoria de tesouro da criatura. Algumas criaturas possuem recursos que podem ser extraídos de seu corpo. Extrair um recurso exige uma hora de trabalho e um teste de Sobrevivência, ou de um Ofício relacionado ao recurso, com CD 15 + ND da criatura. Em caso de falha, os recursos são estragados.</p>

          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent mb-3">Tipos de criaturas</h1>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Animais: </strong>Bestas e feras irracionais (Int –5 ou –4), sem poderes mágicos.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Construtos: </strong>Objetos animados ou criaturas artificiais. Possuem visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno, não recuperam PV por descanso e efeitos de cura, e a perícia Cura não funciona com eles — mas Ofício (artesão) pode ser usada no lugar dela com os mesmos efeitos.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Espíritos: </strong>Nativos de outros planos.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Humanoides: </strong>Seres parecidos com os humanos: racionais e com culturas próprias. Este tipo é subdivido em raças (humano, anão, goblin...).</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Monstros: </strong>Criaturas de anatomia estranha e/ ou com habilidades fantásticas.</p>
          <p className="text-gray-400 text-lg"><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400 mb-4">Mortos-vivos: </strong>Cadáveres animados por energia negativa. Mortos-vivos possuem visão no escuro; imunidade a efeitos de cansaço, metabólicos, de trevas e de veneno; sofrem dano por efeitos mágicos de cura de luz (Vontade CD do efeito reduz à metade) e recuperam PV com dano de trevas.</p>
        

        </div>

        {/* Busca */}
        <div 
          id="ameacas-grid" 
          className="mb-8 p-6 rounded-xl bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 scroll-mt-8"
        >
          <label className="block text-sm font-medium text-red-300 mb-2">
            Buscar Ameaça
          </label>
          <input
            type="text"
            placeholder="Digite qualquer informação da criatura..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-black/50 border border-red-900/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
          />
        </div>

        {/* Grid de Ameaças */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredThreats.map((threat) => (
            <div
              key={threat.id}
              onClick={() => setSelectedThreat(threat)}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black border-l-4 border-l-red-600 border-y border-r border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] cursor-pointer p-5 flex flex-col justify-between min-h-[180px]"
            >
              {/* --- 1. IMAGEM DE FUNDO (Lateral Direita Completa) --- */}
              <div className="absolute right-0 top-0 h-full w-[60%] opacity-20 grayscale group-hover:opacity-30 group-hover:grayscale-0 transition-all duration-500 pointer-events-none select-none">
                {threat.image ? (
                  <>
                    {/* Máscara de gradiente */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-900 via-gray-900/40 to-transparent" />
                    
                    <img
                      src={threat.image}
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                     <span className="text-8xl block translate-x-4">🐉</span>
                  </div>
                )}
              </div>

              {/* --- 2. CONTEÚDO DE TEXTO --- */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full">
                
                {/* TOPO: Nome e ND */}
                <div className="flex justify-between items-start gap-3 pr-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors leading-tight drop-shadow-md line-clamp-2">
                    {threat.name}
                  </h3>
                  
                  {/* Badge ND */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-red-950 to-black border border-red-800 shadow-[0_0_10px_rgba(153,27,27,0.3)] group-hover:border-red-500 transition-colors">
                    <span className="text-[0.6rem] uppercase text-red-400 font-bold tracking-wider">ND</span>
                    <span className="text-lg font-black text-white leading-none">{threat.nd}</span>
                  </div>
                </div>

                {/* RODAPÉ: Separador, Tipo, Tamanho, Papel, Origem */}
                <div className="mt-6">
                  {/* Separador Animado */}
                  <div className="w-12 h-[2px] bg-red-800 mb-3 group-hover:w-full group-hover:bg-red-600 transition-all duration-500 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>

                  {/* Linha de Metadados */}
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide bg-purple-900/40 border border-purple-500/30 text-purple-200">
                      {threat.tipo}
                    </span>
                    
                    {threat.tamanho && (
                      <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span>{threat.tamanho}</span>
                      </div>
                    )}

                    {threat.papel && (
                      <div className="flex items-center gap-2 text-xs font-medium">
                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                        <span className="text-red-400/90 uppercase tracking-wider text-[10px]">
                          {threat.papel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Origem com Ícone */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-red-700 shrink-0">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="uppercase tracking-widest truncate max-w-[180px]">
                      {threat.origin || "Desconhecida"}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredThreats.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nenhuma ameaça encontrada.</p>
          </div>
        )}
      </main>

      {/* Modal Detalhado (Igual ao Boss, mas foto no final) */}

      {selectedThreat && (

        <div

          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"

          onClick={() => setSelectedThreat(null)}

        >

          <div

            className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/50 rounded-2xl max-w-5xl w-full my-8 shadow-[0_0_50px_rgba(239,68,68,0.3)]"

            onClick={(e) => e.stopPropagation()}

          >

            {/* Header Modal */}

            <div className="relative p-6 border-b border-red-900/50">

              <button

                onClick={() => setSelectedThreat(null)}

                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"

              >

                ✕

              </button>

              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">

                {selectedThreat.name}

              </h2>

              <div className="flex flex-wrap gap-4 mt-2 text-sm">

                <span className="text-gray-400">{selectedThreat.tipo}</span>

                <span className="text-gray-400">•</span>

                <span className="text-red-400 font-semibold">{selectedThreat.tamanho}</span>

                <span className="text-gray-400">•</span>

                <span className="text-red-400 font-semibold">{selectedThreat.papel}</span>

                <span className="text-gray-400">•</span>

                <span className="text-red-400 font-semibold">ND {selectedThreat.nd}</span>

                {selectedThreat.origin && (

                  <>

                    <span className="text-gray-400">•</span>

                    <span className="text-purple-400">{selectedThreat.origin}</span>

                  </>

                )}

              </div>

            </div>



            {/* Conteúdo Scrollável */}

            <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">

             

              {/* Descrição */}

              <section className="mb-6">

                <h3 className="text-xl font-bold text-red-300 mb-2 flex items-center gap-2">

                  📖 Descrição

                </h3>

                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">

                  {selectedThreat.description}

                </p>

              </section>



              {/* Estatísticas (Iniciativa, Defesa, PV, PM) */}

              <section className="mb-6">

                <h3 className="text-xl font-bold text-red-300 mb-3">⚔️ Estatísticas</h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">

                    <div className="text-xs text-red-300 font-semibold mb-1">INICIATIVA</div>

                    <div className="text-2xl font-bold text-white">

                      {selectedThreat.iniciativa >= 0 ? "+" : ""}{selectedThreat.iniciativa}

                    </div>

                  </div>

                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">

                    <div className="text-xs text-red-300 font-semibold mb-1">PERCEPÇÃO</div>

                    <div className="text-2xl font-bold text-white">

                      {selectedThreat.percepcao >= 0 ? "+" : ""}{selectedThreat.percepcao}

                    </div>

                  </div>

                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">

                    <div className="text-xs text-red-300 font-semibold mb-1">DEFESA</div>

                    <div className="text-2xl font-bold text-white">{selectedThreat.defesa}</div>

                  </div>

                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">

                    <div className="text-xs text-red-300 font-semibold mb-1">PV</div>

                    <div className="text-2xl font-bold text-white">{selectedThreat.pv}</div>

                  </div>

                </div>

              </section>



              {/* Resistências (Fort, Ref, Von) */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">🛡️ Resistências</h3>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">FORT</div>
                    <div className="text-xl font-bold text-white">
                      {selectedThreat.fort >= 0 ? "+" : ""}{selectedThreat.fort}
                    </div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">REF</div>
                    <div className="text-xl font-bold text-white">
                      {selectedThreat.ref >= 0 ? "+" : ""}{selectedThreat.ref}
                    </div>
                  </div>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">
                    <div className="text-xs text-red-300 font-semibold mb-1">VON</div>
                    <div className="text-xl font-bold text-white">
                      {selectedThreat.von >= 0 ? "+" : ""}{selectedThreat.von}
                    </div>
                  </div>
                </div>
                {selectedThreat.resistenciaDano && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <span className="text-red-300 font-semibold text-sm mr-2">Vantagens/RD:</span>
                    <span className="text-white">{selectedThreat.resistenciaDano}</span>
                  </div>
                )}
              </section>

              {/* Movimento e Mana */}
              <section className="mb-6">
                <div className={`grid gap-3 ${selectedThreat.pm != null ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">DESLOCAMENTO</div>
                    <div className="text-white">{selectedThreat.deslocamento}</div>
                  </div>
                  {selectedThreat.pm != null && (
                    <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                      <div className="text-xs text-red-300 font-semibold mb-1">PM</div>
                      <div className="text-white">{selectedThreat.pm}</div>
                    </div>
                  )}
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-6">
                <h3 className="text-xl font-bold text-red-300 mb-3">⚡ Ataques</h3>
                {selectedThreat.ataqueCorpoACorpo && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30 mb-3">
                    <div className="text-xs text-red-300 font-semibold mb-1">CORPO A CORPO</div>
                    <div className="text-white">{selectedThreat.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedThreat.ataqueDistancia && (
                  <div className="p-3 bg-black/30 rounded-lg border border-red-900/30">
                    <div className="text-xs text-red-300 font-semibold mb-1">À DISTÂNCIA</div>
                    <div className="text-white">{selectedThreat.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades Especiais */}

              {selectedThreat.habilidades.length > 0 && (

                <section className="mb-6">

                  <h3 className="text-xl font-bold text-red-300 mb-3">✨ Habilidades</h3>

                  <div className="space-y-2">

                    {selectedThreat.habilidades.map((hab, index) => (

                      <div key={index} className="p-3 bg-black/30 rounded-lg border border-purple-900/30">

                        <p className="text-gray-300 text-sm">{hab}</p>

                      </div>

                    ))}

                  </div>

                </section>

              )}



              {/* Atributos Básicos (GRID DE 6) */}

              <section className="mb-6">

                <h3 className="text-xl font-bold text-red-300 mb-3">📊 Atributos</h3>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">

                  {[

                    { label: "FOR", val: selectedThreat.for },

                    { label: "DES", val: selectedThreat.des },

                    { label: "CON", val: selectedThreat.con },

                    { label: "INT", val: selectedThreat.int },

                    { label: "SAB", val: selectedThreat.sab },

                    { label: "CAR", val: selectedThreat.car },

                  ].map((attr) => (

                    <div key={attr.label} className="p-3 bg-black/30 rounded-lg border border-red-900/30 text-center">

                      <div className="text-xs text-red-300 font-semibold mb-1">{attr.label}</div>

                      <div className="text-xl font-bold text-white">{attr.val}</div>

                    </div>

                  ))}

                </div>

              </section>



              {/* Perícias e Equipamentos */}

              <section className="mb-6">

                <h3 className="text-xl font-bold text-red-300 mb-3">🎯 Perícias & Equipamento</h3>

                <div className="flex flex-wrap gap-2 mb-3">

                  {selectedThreat.pericias.map((pericia, index) => (

                    <span key={index} className="px-3 py-1 bg-black/30 rounded-full border border-red-900/30 text-gray-300 text-sm">

                      {pericia}

                    </span>

                  ))}

                </div>

                {selectedThreat.equipamentos.length > 0 && (

                   <div className="space-y-1 mt-2">

                      {selectedThreat.equipamentos.map((equip, idx) => (

                          <div key={idx} className="text-sm text-gray-400">• {equip}</div>

                      ))}

                   </div>

                )}

              </section>



              {/* Tesouro */}

              <section className="p-4 mb-8 bg-gradient-to-br from-yellow-950/30 to-black border border-yellow-900/30 rounded-lg">

                <h3 className="text-xl font-bold text-yellow-300 mb-2 flex items-center gap-2">

                  💰 Tesouro

                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">{selectedThreat.tesouro}</p>

              </section>



              {/* IMAGEM (NO FINAL) */}

              {selectedThreat.image && (

                <section className="mt-8 pt-8 border-t border-gray-800">

                  <h3 className="text-gray-500 text-sm uppercase tracking-widest mb-4 text-center">

                    Registro Visual

                  </h3>

                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-red-900/20 shadow-2xl bg-black max-w-2xl mx-auto">

                    <img

                      src={selectedThreat.image}

                      alt={selectedThreat.name}

                      className="w-full h-auto object-cover"

                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                  </div>

                </section>

              )}



            </div>

          </div>

        </div>

      )}



      {/* Footer */}

      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">

        <p>Compêndio Tormenta RPG © 2025</p>

      </footer>

    </div>

  );

}