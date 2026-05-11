"use client";

import { useState } from "react";
import Link from "next/link";
import { powersCavaleiro } from "@/data/powers-cavaleiro";
import { formatOrigin } from "@/types/power";

export default function CavaleiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersCavaleiro
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e6d5b8]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/poderes" className="text-amber-900/60 hover:text-red-700 transition-colors">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poderes de Cavaleiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12">

        {/* Título Principal */}
        <div className="mb-8 w-full">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 drop-shadow-sm font-serif">
            Poderes de Cavaleiro
          </h1>
        </div>

        {/* Acordeão de Introdução (COMEÇA FECHADO) */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif">
                  Regras
                </h2>
                <p className="text-sm text-amber-900/60 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[100000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-8 sm:p-10">          
                <div className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                    <h3 className="text-2xl font-bold text-red-800 mb-1 font-serif pb-2">Posturas de Combate</h3>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif">Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras:</p>
                
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Assumir uma postura gasta uma ação de movimento e 2 PM.</span></p>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.</span></p>
                    <p className="text-amber-900/90 font-medium text-serif">Você só pode manter uma postura por vez.</p>
                </div>

                <div  className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                    <h3 className="text-2xl font-bold text-red-800 mb-1 mt-6 font-serif border-t-2 border-amber-900/10 pb-2">Poderes de Paixão</h3>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif">Paixões são aspectos da vida de um cavaleiro aos quais ele se entrega com dedicação total. São crenças tão importantes que, em nome delas, ele é capaz de se inspirar e sobrepujar quaisquer limitações. Contudo, se um cavaleiro é derrotado enquanto está inspirado por sua Paixão, a vergonha pode abalá-lo profundamente. Esses poderes compartilham as seguintes regras:</p>
                
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Evocar uma Paixão é uma ação livre.</span></p>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Quando evoca uma Paixão, você faz um teste de Carisma (CD 10 +5 por teste dessa Paixão na mesma aventura). Se passar, recebe o benefício da Paixão. Se falhar, não pode mais usá-la até o fim da aventura.</span></p>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Paixões que não têm um efeito instantâneo duram até o fim da cena.</span></p>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Sempre que rola 20 natural em um teste de Paixão, ou obtém uma vitória significativa em uma cena em que usou uma Paixão com sucesso, você recebe um bônus permanente e cumulativo de +1 nos testes de atributo para ativá-la.</span></p>
                    <p className="text-amber-900/90 font-medium mb-4 text-serif"><span className="text-red-800 font-bold">•</span><span className="font-medium"> Sempre que rola 1 natural em um teste de Paixão, ou sofre uma falha significativa em uma cena em que usou uma Paixão com sucesso, você recebe uma penalidade permanente e cumulativa de –1 nos testes de atributo para ativá-la.</span></p>

                    <h3 className="text-2xl font-bold text-red-800 mb-1 mt-6 font-serif border-t-2 border-amber-900/10 pb-2">Paixões e Resultados Significativos</h3>
                    <div className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                    <p className="text-amber-900/90 font-medium mb-2 text-serif">Sempre que o cavaleiro evoca uma Paixão, está colocando à prova um sentimento que faz parte das fundações de sua alma. Nenhum cavaleiro que tenha uma Paixão ousa tratá-la como uma mera ferramenta, nem espera que o objeto de sua Paixão o defenda. Pelo contrário: ele está disposto a entregar a vida pelo objeto da Paixão.</p>
                    <p className="text-amber-900/90 font-medium mb-2 text-serif">Assim, uma <span className="text-red-800 font-bold">“vitória significativa”</span> ao usar uma Paixão nunca se refere ao próprio cavaleiro. Para que uma vitória seja significativa, deve beneficiar diretamente o alvo da Paixão e não pode servir a interesses pessoais ou egoístas do cavaleiro. Por exemplo, uma cavaleira que tenha Paixão: Amor (sua esposa) pode obter uma vitória significativa ao salvá-la de um vilão, mas não ao derrotar esse mesmo vilão se ela não estiver sendo ameaçada por ele. Se a mesma cavaleira tiver Paixão: Lealdade (a Ordem da Luz), pode obter uma vitória significativa ao defender o Castelo da Luz contra uma invasão, mas não ao vencer os mesmos inimigos em uma circunstância na qual a Ordem não esteja ameaçada.</p>
                    <p className="text-amber-900/90 font-medium mb-2 text-serif">Da mesma forma, uma <span className="text-red-800 font-bold">“falha significativa”</span> é uma circunstância em que o cavaleiro não consegue proteger o alvo de sua Paixão e, por omissão ou incompetência, permite que ele seja prejudicado. A mesma cavaleira teria uma falha significativa se sua esposa fosse aprisionada e levada embora pelo vilão, ou se o Castelo da Luz fosse invadido.</p>
                    <p className="border-t border-amber-800/50 text-amber-900/90 font-medium mb-2 text-serif">
                        O mestre tem a palavra final sobre o que é uma vitória ou uma falha significativas no uso de uma Paixão. Como regra geral, o jogador deve se esforçar ao máximo para proteger e beneficiar o alvo da Paixão. Se negligenciá-la ou colocá-la em segundo plano, atrás de coisas como sua própria segurança, uma recompensa ou o grupo de aventureiros, pode sofrer uma penalidade, como se tivesse rolado 1 natural em um teste de Paixão.</p>
                </div>
                    
                </div>
            </div>
          </div>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/60 mb-3 uppercase tracking-wider font-serif">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-900 placeholder-amber-900/40 focus:outline-none focus:border-red-800 focus:ring-1 focus:ring-red-800 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-[#d9c8a9] border-2 border-amber-900/30 p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(69,26,3,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-700 transition-colors font-serif drop-shadow-sm">
                {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                <p className="text-amber-900/90 text-sm leading-relaxed font-serif font-medium">
                    {power.description}
                </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                    <p className="text-xs text-amber-900/70 font-serif font-medium">
                        <span className="font-bold text-red-800 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                {/* Origem */}
                <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/10 group-hover:border-amber-900/30 transition-colors">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-900/80 font-serif uppercase tracking-widest font-bold shadow-sm">
                    {formatOrigin(power.origin)}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-12 text-amber-900/60 font-bold italic border-2 border-dashed border-amber-900/30 rounded-xl font-serif bg-[#e8dac1]/50 mt-8">
            <p className="text-lg">Nenhum poder encontrado.</p>
            </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/40 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}

        

     