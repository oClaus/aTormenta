"use client";

import { useState } from "react";
import Link from "next/link";
import { powersCavaleiro } from "@/data/powers-cavaleiro";
import { formatOrigin } from "@/types/power";

export default function CavaleiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersCavaleiro
    .filter(
      (power) =>
        power.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        power.origin.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-2 border-stone-800 bg-stone-950/90 backdrop-blur-md shadow-lg mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-red-600 to-red-900 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 10px rgba(220, 38, 38, 0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-stone-500 hover:text-blue-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-blue-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Cavaleiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 mb-6 drop-shadow-md">
            Poderes de Cavaleiro
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes de Cavaleiro:</p>
        </div>

        {/* Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-stone-900 border border-stone-800 shadow-inner w-full">
            <label className="block text-sm font-bold text-stone-400 mb-3 uppercase tracking-wider font-serif">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome, descrição ou origem..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-900 transition-all font-serif"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-600">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-blue-900/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-blue-500 mb-3 group-hover:text-blue-400 transition-colors font-serif">
                {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                <p className="text-stone-400 text-sm leading-relaxed font-serif group-hover:text-stone-300">
                    {power.description}
                </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                {/* Pré-requisito */}
                {power.prerequisite && (
                    <div className="mb-4 pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                    <p className="text-xs text-stone-500 font-serif">
                        <span className="font-bold text-blue-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
                    </p>
                    </div>
                )}

                {/* Origem */}
                <div className="flex items-center justify-end pt-4 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-950 border border-stone-700 text-stone-500 font-serif uppercase tracking-widest">
                    {formatOrigin(power.origin)}
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>

        {filteredPowers.length === 0 && (
            <div className="text-center py-12 text-stone-500 italic border border-dashed border-stone-800 rounded-xl font-serif">
            <p className="text-lg">Nenhum poder encontrado.</p>
            </div>
        )}

        {/* Seção de Informação: Posturas de Combate */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-blue-500 mb-4 font-serif">Posturas de Combate</h3>
                <p className="text-stone-300 leading-relaxed font-serif">
                Alguns poderes do cavaleiro são Posturas de Combate. Esses poderes compartilham as seguintes regras:
                </p>
            </div>

            <div className="space-y-2 text-stone-400 font-serif border-l-2 border-stone-800 pl-4">
                <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Assumir uma postura gasta uma ação de movimento e 2 PM.</p>
                <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Os efeitos de uma postura duram até o final da cena, a menos que sua descrição diga o contrário.</p>
                <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Você só pode manter uma postura por vez.</p>
            </div>
        </div>

        {/* Seção de Informação: Poderes de Paixão */}
        <div className="mt-8 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-8">
            
            {/* Introdução e Regras das Paixões */}
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold text-blue-500 mb-4 font-serif">Poderes de Paixão</h3>
                    <p className="text-stone-300 leading-relaxed font-serif">
                    Paixões são aspectos da vida de um cavaleiro aos quais ele se entrega com dedicação total. São crenças tão importantes que, em nome delas, ele é capaz de se inspirar e sobrepujar quaisquer limitações. Contudo, se um cavaleiro é derrotado enquanto está inspirado por sua Paixão, a vergonha pode abalá-lo profundamente. Esses poderes compartilham as seguintes regras:
                    </p>
                </div>

                <div className="space-y-3 text-stone-400 font-serif border-l-2 border-stone-800 pl-4">
                    <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Evocar uma Paixão é uma ação livre.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Quando evoca uma Paixão, você faz um teste de Carisma (CD 10 +5 por teste dessa Paixão na mesma aventura). Se passar, recebe o benefício da Paixão. Se falhar, não pode mais usá-la até o fim da aventura.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Paixões que não têm um efeito instantâneo duram até o fim da cena.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Sempre que rola 20 natural em um teste de Paixão, ou obtém uma vitória significativa em uma cena em que usou uma Paixão com sucesso, você recebe um bônus permanente e cumulativo de +1 nos testes de atributo para ativá-la.</p>
                    <p className="text-stone-300 leading-relaxed"><span className="text-blue-700 font-bold">•</span> Sempre que rola 1 natural em um teste de Paixão, ou sofre uma falha significativa em uma cena em que usou uma Paixão com sucesso, você recebe uma penalidade permanente e cumulativa de –1 nos testes de atributo para ativá-la.</p>
                </div>

                <p className="text-stone-400 italic text-sm">Lista de Paixões: (Verifique os poderes acima)</p>
            </div>

            <div className="border-t border-stone-800 my-8"></div>

            {/* Box Explicativo: Significados */}
            <div className="bg-stone-950/50 p-6 sm:p-8 rounded border border-stone-800/60 shadow-inner">
                <h4 className="text-lg font-bold text-stone-200 mb-4 uppercase tracking-widest border-b border-stone-800 pb-2">
                    Paixões e Resultados Significativos
                </h4>
                
                <div className="space-y-4 text-stone-400 text-sm leading-relaxed font-serif text-justify">
                    <p>
                        Sempre que o cavaleiro evoca uma Paixão, está colocando à prova um sentimento que faz parte das fundações de sua alma. Nenhum cavaleiro que tenha uma Paixão ousa tratá-la como uma mera ferramenta, nem espera que o objeto de sua Paixão o defenda. Pelo contrário: ele está disposto a entregar a vida pelo objeto da Paixão.
                    </p>
                    <p>
                        Assim, uma <span className="text-stone-200 font-bold">“vitória significativa”</span> ao usar uma Paixão nunca se refere ao próprio cavaleiro. Para que uma vitória seja significativa, deve beneficiar diretamente o alvo da Paixão e não pode servir a interesses pessoais ou egoístas do cavaleiro. Por exemplo, uma cavaleira que tenha Paixão: Amor (sua esposa) pode obter uma vitória significativa ao salvá-la de um vilão, mas não ao derrotar esse mesmo vilão se ela não estiver sendo ameaçada por ele. Se a mesma cavaleira tiver Paixão: Lealdade (a Ordem da Luz), pode obter uma vitória significativa ao defender o Castelo da Luz contra uma invasão, mas não ao vencer os mesmos inimigos em uma circunstância na qual a Ordem não esteja ameaçada.
                    </p>
                    <p>
                        Da mesma forma, uma <span className="text-stone-200 font-bold">“falha significativa”</span> é uma circunstância em que o cavaleiro não consegue proteger o alvo de sua Paixão e, por omissão ou incompetência, permite que ele seja prejudicado. A mesma cavaleira teria uma falha significativa se sua esposa fosse aprisionada e levada embora pelo vilão, ou se o Castelo da Luz fosse invadido.
                    </p>
                    <p className="border-t border-stone-800/50 pt-4 mt-4 italic text-stone-500">
                        O mestre tem a palavra final sobre o que é uma vitória ou uma falha significativas no uso de uma Paixão. Como regra geral, o jogador deve se esforçar ao máximo para proteger e beneficiar o alvo da Paixão. Se negligenciá-la ou colocá-la em segundo plano, atrás de coisas como sua própria segurança, uma recompensa ou o grupo de aventureiros, pode sofrer uma penalidade, como se tivesse rolado 1 natural em um teste de Paixão.
                    </p>
                </div>
            </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}