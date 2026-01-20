"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Gear } from "@/types/gear";

// --- Componentes Auxiliares ---

// 2. Componente para a Tabela Filtrável de Equipamentos
const GearFilterableTable = ({ allGear }: { allGear: Gear[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Nome ou Descrição
    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6 w-full">
      {/* Barra de Busca */}
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar equipamento por nome ou descrição..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-900 transition-all font-serif"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
            🔍
        </div>
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
        <table className="min-w-full divide-y divide-stone-800">
          <thead className="bg-stone-900 text-amber-700">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">Item</th>
              <th scope="col" className="w-24 px-4 pr-4 py-3 text-right text-xs font-bold uppercase tracking-wider border-r border-stone-800">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-3 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800">
            {filteredGear.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-stone-900/30" : "bg-stone-900/60 hover:bg-amber-900/10 transition-colors"}>
                <td className="px-4 py-3 text-sm font-medium text-stone-200 border-r border-stone-800/50 align-top">
                  <div className="font-bold text-amber-600 font-serif text-lg">{item.name}</div>
                  <div className="text-sm text-stone-400 break-words font-serif italic mt-1">{item.description}</div>
                  <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest">{item.origin}</div>
                </td>
                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-stone-300 font-serif align-top border-r border-stone-800/50">{item.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-stone-300 font-serif align-top">{item.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-stone-500 bg-stone-900 border-t border-stone-800 italic">Nenhum equipamento encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/equipamentos" className="text-stone-500 hover:text-amber-600 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Veículos</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
      
        <div className="space-y-4 text-stone-300 leading-relaxed font-serif">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-600 to-red-500 mb-4 drop-shadow-md">
            Veículos
          </h1>

        </div>
      </section>

      {/* Tabela Completa e Filtrável */}
      <section className="w-full">
        <h2 className="text-3xl font-bold text-amber-700 mb-6 border-b border-stone-800 pb-2">Tabela Completa de Veículos</h2>
        <GearFilterableTable allGear={vehicles} />
      </section>

      {/* --- NOVA SEÇÃO: Texto de Regras (Adicionado) --- */}
      <section className="w-full mt-16 text-stone-300 leading-relaxed space-y-6">
        
        <p className="italic text-stone-400 border-l-4 border-amber-800 pl-4 py-2 bg-stone-900/30">
          Carroças carregando repolhos e carruagens carregando princesas. Grandes veleiros singrando os mares e ágeis ornitópteros voando pelos céus. Arton possui diversos veículos, e cada vez mais eles são parte da vida — e das aventuras — dos heróis. Esta seção apresenta regras detalhadas para uso de veículos.
        </p>

        <h2 className="text-3xl font-bold text-amber-700 mt-10 mb-4 border-b border-stone-800 pb-2">Características de Veículos</h2>
        
        <p><strong className="text-amber-600">Tamanho.</strong> O tamanho de um veículo determina o espaço que ele ocupa, bem como seus modificadores de Furtividade e manobras (Tormenta20, p. 107). Além disso, o veículo aplica seu modificador de Furtividade por tamanho nos testes de Pilotagem do piloto.</p>
        
        <p><strong className="text-amber-600">Deslocamento.</strong> Veículos seguem as regras normais para seus tipos de deslocamento, exceto que um veículo com deslocamento de natação se move apenas sobre a água, a menos que sua descrição especifica que ele podem submergir.</p>
        
        <p><strong className="text-amber-600">Defesa.</strong> Indica a dureza dos materiais que compõem o veículo. Se o veículo adiciona um atributo (ou outra característica) do piloto à sua Defesa, ele só recebe esse benefício se estiver em movimento.</p>
        
        <p><strong className="text-amber-600">Pontos de Vida.</strong> Representam a resistência dos materiais que compõem o veículo. Um veículo reduzido a 0 PV ou menos para de funcionar e, se for reduzido a um total de PV negativos igual à metade de seus pontos de vida máximos, é destruído além de qualquer conserto.</p>

        <p><strong className="text-amber-600">Consertando Veículos.</strong> Para consertar um veículo, você gasta 1 hora de trabalho e faz um teste de Ofício (artesão ou outro apropriado) com CD 15. Se passar, recupera 1d8 PV do veículo, +1d8 para cada 5 pontos pelos quais o teste superar a CD. Para cada d8 recuperado, você precisa gastar T$ 10 em materiais. A critério do mestre, várias pessoas podem reparar um veículo ao mesmo tempo, sobretudo se ele for Grande ou maior. Ao contrário de outros objetos, pontos de vida de veículos também podem ser recuperados com habilidades que recuperem PV de construtos, como a magia Transmutar Objetos.</p>
        
        <div>
            <p className="mb-2"><strong className="text-amber-600">Tripulação.</strong> Cada veículo exige um ou mais tripulantes, conforme seu tamanho e complexidade.</p>
            <ul className="list-disc pl-6 space-y-1 text-stone-400">
                <li><strong className="text-stone-300">Piloto.</strong> Responsável por conduzir o veículo. Todo veículo tripulado precisa de pelo menos um piloto.</li>
                <li><strong className="text-stone-300">Copiloto.</strong> Pode fazer testes de Pilotagem para ajudar o piloto, e pode substituí-lo se necessário.</li>
                <li><strong className="text-stone-300">Capitão.</strong> Veículos maiores, como navios, geralmente possuem um capitão. Ele desempenha diversas tarefas adequadas ao veículo e pode fazer testes para ajudar os demais tripulantes.</li>
            </ul>
            <p className="mt-2 text-sm">Certos veículos podem ter outros tripulantes especializados, como navegadores, artesãos, canhoneiros, remadores etc. Se a tripulação de um veículo for menor que o necessário, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade do necessário, a penalidade aumenta para –5.</p>
        </div>

        <p><strong className="text-amber-600">Passageiros e Carga.</strong> Indica quantos passageiros ou espaços de carga o veículo pode transportar. Como regra geral, um passageiro Pequeno ou Médio que não esteja sobrecarregado equivale a 20 espaços de carga de um veículo. Qualquer sobrecarga do passageiro conta no limite de espaços do veículo.</p>
        
        <p><strong className="text-amber-600">Cobertura.</strong> Alguns veículos fornecem cobertura, leve ou total, para seus ocupantes (indicado em sua descrição).</p>

        <h2 className="text-3xl font-bold text-amber-700 mt-10 mb-4 border-b border-stone-800 pb-2">Jogando com Veículos</h2>

        <p><strong className="text-amber-600">Embarcando.</strong> Embarcar em um veículo geralmente é uma ação de movimento. No caso de veículos maiores, como navios, alcançar posições específicas pode demorar mais tempo.</p>
        
        <p><strong className="text-amber-600">Pilotagem.</strong> Para conduzir um veículo em combate ou outras situações ruins (por exemplo, uma estrada esburacada para um veículo terrestre, ou um dia de ventania para um veículo voador) você precisa gastar uma ação de movimento e fazer um teste de Pilotagem contra CD 15. Em situações muito ruins (um bosque embarrado para um veículo terrestre, uma tempestade para um veículo voador), a CD aumenta para 25. Se passar, você avança seu deslocamento. Se falhar, avança metade desse deslocamento. Por fim, se falhar por 5 ou mais, sofre um contratempo.</p>
        <p className="pl-4 border-l-2 border-stone-700 text-stone-400 text-sm">Um contratempo pode ser perda de vida (2d6 para veículos Médios ou menores, +2d6 por categoria de tamanho acima), uma colisão ou um problema que desabilite uma roda ou incapacite uma das criaturas que puxa o veículo (veja a seguir).</p>

        <p><strong className="text-amber-600">Pilotagem Cuidadosa.</strong> No início de cada rodada, você pode pilotar cuidadosamente. Se fizer isso, nessa rodada o deslocamento do veículo diminui pela metade e você recebe +2 em Pilotagem.</p>
        
        <p><strong className="text-amber-600">Colisões.</strong> Veículos em movimento podem colidir com obstáculos, como paredes, árvores e outros veículos. Quando uma colisão ocorre, o veículo e seus ocupantes sofrem 1d6 pontos de dano de impacto para cada 3m de deslocamento do veículo (mínimo 1d6). Os ocupantes do veículo podem fazer um teste de Reflexos (CD 20 + o total de dados de dano) para reduzir esse dano à metade. A critério do mestre, obstáculos muito pequenos (três ou mais categorias de tamanho menores que o veículo) ou frágeis (como uma pilha de feno) não causam dano de colisão. Já obstáculos muito grandes (duas ou mais categorias de tamanho maiores que o veículo) podem, além do dano, forçar o veículo a parar completamente ou capotar.</p>
        
        <p><strong className="text-amber-600">Quebrando Rodas.</strong> É possível quebrar ou sabotar as rodas de um veículo ou outras partes necessárias para seu deslocamento, como remos ou velas (veja Ladinagem em Tormenta20, p. 120). Se uma dessas partes for desabilitada, o piloto sofre uma penalidade de –2 em testes de Pilotagem. Se mais da metade dessas partes for desabilitada, o piloto sofre –5 em testes de Pilotagem e o deslocamento do veículo é reduzido à metade. O mestre tem a palavra final sobre quais partes de um veículo interferem em seu deslocamento.</p>
        
        <p><strong className="text-amber-600">Animais de Tração.</strong> Para veículos puxados por criaturas, a descrição indica quantas delas são necessárias. Se a quantidade de criaturas presentes for menor que o indicado, o piloto sofre –2 em testes de Pilotagem. Se for menor que a metade, a penalidade em Pilotagem aumenta para –5 e o deslocamento do veículo é reduzido à metade.</p>
        
        <p><strong className="text-amber-600">Atacar em um Veículo.</strong> O balanço de um veículo em movimento torna mais difícil atacar à distância (–2 em testes de ataque) e conta como condição ruim para lançar magias. A critério do mestre, poderes relacionados a combater em veículos, como Pernas do Mar (Tormenta20, p. 48), podem eliminar essas penalidades.</p>
        
        <p><strong className="text-amber-600">Atropelamento.</strong> Você pode usar uma ação completa para atropelar criaturas. Faça um teste de Pilotagem para conduzir como normal. Se você passar, o veículo percorre até o dobro de seu deslocamento (mínimo 6m) em linha reta, podendo passar pelo espaço ocupado por criaturas menores que ele. Criaturas atropeladas sofrem 1d6 pontos de dano de impacto para cada 1,5m de deslocamento do veículo e ficam caídas (Ref CD igual ao resultado do teste de Pilotagem reduz à metade e evita a condição). Se encontrar uma criatura de tamanho igual ou maior que o seu, em vez de atropelá-la o veículo colide com ela (veja “Colisões”). Veículos Enormes e Colossais são ainda mais perigosos; seus dados de dano mudam respectivamente para d8 e d12.</p>
        
        <p><strong className="text-amber-600">Aeronaves.</strong> Alguns veículos voadores, como balões, podem ficar parados em pleno ar sem perder sustentação. Já outros (indicados em sua descrição) precisam percorrer pelo menos metade do seu deslocamento a cada rodada para se manter voando. Caso contrário, começam a cair e perder controle; o mestre determina quantas rodadas uma aeronave leva para chegar ao solo (como regra geral, uma queda totalmente livre percorre 150m por rodada). Ao fim disso, a aeronave atinge o chão e sofre dano de queda como normal. Da mesma forma, uma aeronave reduzida a 0 PV ou menos perde a capacidade de voar e cai. Em ambos os casos, o piloto pode fazer um teste de Pilotagem para amortecer queda (veja a perícia Acrobacia).</p>

      </section>

    </main>
    {/* Footer */}
    <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
    </footer>
    </div>
  );
}