"use client";

import Link from "next/link";
import {
  creatureSizeTable,
  creatureSizeTableFootnote,
} from "@/data/caracteristicas";

export default function CaracteristicasPage() {
    
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-serif selection:bg-red-900 selection:text-white relative overflow-x-hidden">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Header - 100% Width */}
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
                <span className="text-amber-700">Características</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 py-12">
        
        {/* Título e Introdução */}
        <div className="mb-12 w-full space-y-8">
            
            {/* Bloco PV */}
            <div>
                <h2 className="text-2xl font-bold text-red-700 mb-2 border-l-4 border-red-800 pl-3 flex items-center gap-2">
                    Pontos de Vida • <span className="text-stone-500 text-lg">PV</span>
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm hover:border-red-900/30 transition-colors">
                    <p className="text-stone-300 leading-relaxed text-lg">Pontos de vida são uma medida de seu vigor físico, tolerância a dor e experiência em combate. Eles indicam a quantidade de dano que você pode sofrer antes de cair inconsciente. Enquanto tiver pelo menos 1 ponto de vida, você pode agir e lutar normalmente. Se ficar com 0 ou menos PV, você cai inconsciente e sangrando.</p>
                </div>
            </div>

            {/* Bloco PM */}
            <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-2 border-l-4 border-blue-900 pl-3 flex items-center gap-2">
                    Pontos de Mana • <span className="text-stone-500 text-lg">PM</span>
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm hover:border-blue-900/30 transition-colors">
                    <p className="text-stone-300 leading-relaxed text-lg">Pontos de mana são uma medida de sua energia, determinação e força interior. Eles indicam quantas habilidades você consegue usar. Você não pode gastar mais pontos de mana do que tem, mas não sofre penalidades por ficar com 0 ou menos PM.</p>
                </div>
            </div>

            {/* Bloco Recuperação */}
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2 border-l-4 border-amber-800 pl-3">
                    Recuperando PV e PM
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl select-none">💤</div>
                    <p className="text-stone-300 leading-relaxed text-lg mb-4">Com uma noite de descanso (pelo menos oito horas de sono), você recupera PV e PM de acordo com seu nível e condições de descanso.</p>
                    
                    <div className="space-y-2 bg-black/20 p-4 rounded border border-stone-800/50 mb-4">
                        <p className="text-stone-400 leading-relaxed text-lg"><strong className="text-red-500"> - Ruim:</strong> Recuperação igual à metade do nível. Dormir ao relento, sem um saco de dormir e um acampamento, constitui condição ruim.</p>
                        <p className="text-stone-400 leading-relaxed text-lg"><strong className="text-stone-200"> - Normal:</strong> Recuperação igual ao nível. Dormir em uma estalagem comum constitui condição normal.</p>
                        <p className="text-stone-400 leading-relaxed text-lg"><strong className="text-amber-500"> - Confortável:</strong> Recuperação igual ao dobro do nível.</p>
                        <p className="text-stone-400 leading-relaxed text-lg"><strong className="text-amber-400"> - Luxuosa:</strong> Recuperação igual ao triplo do nível.Exemplo: Helior, elfo caçador de 7º nível, recupera 7 PV e 7 PM com uma noite de sono numa estalagem. Mas, como vive com o pé na estrada, dormindo ao relento, se acostumou a recuperar apenas 3 PV e 3 PM.</p>
                    </div>

                    <p className="text-stone-500 leading-relaxed text-base italic border-t border-stone-800 pt-2"> Certas habilidades, magias e itens também recuperam PV e PM. Você nunca pode recuperar mais pontos de vida ou mana do que perdeu — ou seja, não pode ultrapassar seu máximo.</p>
                </div>
            </div>

            {/* Bloco Temporários */}
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2 border-l-4 border-amber-800 pl-3">
                    Pontos Temporários
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm">
                    <p className="text-stone-300 leading-relaxed text-lg">Certos efeitos fornecem PV ou PM temporários. Eles são somados a seus pontos atuais, mesmo que ultrapassem o máximo. Pontos temporários são sempre os primeiros a serem gastos. Caso não seja especificado o contrário, pontos temporários desaparecem no fim do dia.</p>
                </div>
            </div>

            {/* Bloco Defesa */}
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2 border-l-4 border-amber-800 pl-3">
                    Defesa
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm">
                    <p className="text-stone-300 leading-relaxed text-lg">A Defesa representa o quão difícil é acertá-lo em combate. Sua Defesa é: 10 + sua Destreza + seu bônus de armadura e escudo. Quando você ataca um inimigo, a CD do seu teste de ataque é à Defesa dele.</p>
                </div>
            </div>

            {/* Bloco Tamanho */}
            <div>
                <h2 className="text-2xl font-bold text-amber-700 mb-2 border-l-4 border-amber-800 pl-3">
                    Tamanho
                </h2>
                <div className="p-6 rounded bg-stone-900 border border-stone-800 shadow-sm">
                    <p className="text-stone-300 leading-relaxed text-lg">O tamanho de uma criatura é classificado em seis categorias: Minúsculo, Pequeno, Médio, Grande, Enorme e Colossal. Por padrão, seu tamanho é Médio, mas sua raça pode alterar isso. Criaturas menores recebem bônus em Furtividade e penalidade em manobras de combate. Para criaturas maiores, esses bônus e penalidades são invertidos. Criaturas Minúsculas usam armas reduzidas, que causam um passo a menos de dano. Criaturas Grandes e Enormes usam armas aumentadas, que causam um passo a mais de dano, e criaturas Colossais usam armas gigantes, que causam dois passos a mais de dano. Uma criatura pode usar uma arma feita para até uma categoria de tamanho maior ou menor que a dela, mas sofre –5 nos testes de ataque e a arma ocupa um espaço a mais ou a menos, respectivamente (mínimo meio espaço).</p>
                </div>
            </div>
        </div>

        {/* Seção da Tabela (Renderização Direta) */}
        <section className="mb-12 w-full">
            <div className="overflow-x-auto shadow-2xl rounded border border-stone-800 w-full">
                <table className="min-w-full divide-y divide-stone-800">
                <caption className="p-4 text-xl font-bold text-amber-600 bg-stone-950 border-b border-stone-800 uppercase tracking-widest">
                    Tabela Tamanho de Criaturas
                </caption>
                <thead className="bg-stone-900 text-stone-400">
                    <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                        Categoria de Tamanho
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                        Exemplos
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-stone-800">
                        Espaço Ocupado / Alcance Natural
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">
                        Modificador de Furtividade / Manobras
                    </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-stone-800 bg-stone-950/50">
                    {creatureSizeTable.map((row, index) => (
                    <tr key={row.category} className={index % 2 === 0 ? "bg-stone-900/30" : "bg-transparent hover:bg-stone-900/50 transition-colors"}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-amber-700 border-r border-stone-800/50">
                        {row.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-400 italic border-r border-stone-800/50">
                        {row.examples}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300 border-r border-stone-800/50 font-mono">
                        {row.spaceAndReach}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300 font-mono">
                        {row.stealthAndManeuverModifier}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <p className="p-4 text-xs text-stone-500 bg-stone-900 border-t border-stone-800 italic">
                    {creatureSizeTableFootnote}
                </p>
            </div>
        </section>

        <div className="mb-12 w-full p-6 rounded bg-stone-900 border border-stone-800">
            <h1 className="text-2xl font-bold text-amber-700 mb-2 border-l-4 border-amber-800 pl-3">
            Deslocamento
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed">
            Sua velocidade, medida em quantos metros você anda com uma ação de movimento. Por padrão, seu deslocamento é 9 metros (6 quadrados no mapa), mas algumas habilidades podem mudar esse valor.
            </p>
        </div>

      </main>
      
      {/* Footer */}
      <footer className="mt-12 p-6 border-t border-stone-900 bg-black text-center text-stone-600 text-sm relative z-10">
        <p>Compêndio Tormenta RPG © 2025</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}