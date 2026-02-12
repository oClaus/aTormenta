"use client";

import { useState } from "react";
import Link from "next/link";
import { powersDruida } from "@/data/powers-druida";
import { formatOrigin } from "@/types/power";

export default function DruidaPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersDruida
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
                <Link href="/" className="text-stone-500 hover:text-emerald-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-emerald-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Druida</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 mb-6 drop-shadow-md">
            Poderes de Druida
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes de Druida:</p>
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
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-900 transition-all font-serif"
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
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-emerald-900/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-emerald-500 mb-3 group-hover:text-emerald-400 transition-colors font-serif">
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
                        <span className="font-bold text-emerald-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
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

        {/* Seção de Informação (Forma Selvagem) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-emerald-500 mb-4 font-serif">Forma Selvagem</h3>
                <p className="text-stone-300 leading-relaxed font-serif">
                Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam. Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.
                </p>
            </div>

            {/* Formas */}
            <div className="space-y-6">
                <div className="border-t border-stone-800 pt-4">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif"> Forma Ágil </h3>
                    <p className="text-stone-300 leading-relaxed font-serif mb-2"> Você recebe Destreza +2 e duas armas naturais que causam 1d6 pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Aprimorada: </span>Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Superior: </span>Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
                </div>

                <div className="border-t border-stone-800 pt-4">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif"> Forma Feroz </h3>
                    <p className="text-stone-300 leading-relaxed font-serif mb-2"> Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano. </p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Aprimorada: </span>Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Superior: </span>Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</p>
                </div>

                <div className="border-t border-stone-800 pt-4">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif"> Forma Resistente </h3>
                    <p className="text-stone-300 leading-relaxed font-serif mb-2"> Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano. </p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Aprimorada: </span>Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Superior: </span>Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</p>
                </div>

                <div className="border-t border-stone-800 pt-4">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif"> Forma Sorrateira </h3>
                    <p className="text-stone-300 leading-relaxed font-serif mb-2"> Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra). </p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Aprimorada: </span>Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Superior: </span>Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</p>
                </div>

                <div className="border-t border-stone-800 pt-4">
                    <h3 className="text-xl font-bold text-emerald-400 mb-2 font-serif"> Forma Veloz</h3>
                    <p className="text-stone-300 leading-relaxed font-serif mb-2"> Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m. </p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Aprimorada: </span> Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.</p>
                    <p className="text-stone-400 font-serif"><span className="text-emerald-500 font-bold"> Superior: </span>Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m.</p>
                </div>
            </div>
        </div>

        {/* Seção de Informação (Companheiro Animal) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-emerald-500 mb-4 font-serif">Companheiro Animal</h3>
                <p className="text-stone-300 leading-relaxed font-serif">
                Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele. Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação.
                </p>
                <p className="text-stone-400 leading-relaxed font-serif italic mt-4">
                A seguir, alguns exemplos de animais (mas você é livre para escolher outros):
                </p>
            </div>

            <div className="space-y-2 text-stone-400 font-serif">
                <p><span className="text-emerald-400 font-bold"> Ajudante </span><span className="text-stone-300 leading-relaxed">Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</span></p>
                <p><span className="text-emerald-400 font-bold"> Assassino </span><span className="text-stone-300 leading-relaxed">Lince, onça ou outro animal treinado para abater presas.</span></p>
                <p><span className="text-emerald-400 font-bold"> Atirador </span><span className="text-stone-300 leading-relaxed">Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância.</span></p>
                <p><span className="text-emerald-400 font-bold"> Fortão </span><span className="text-stone-300 leading-relaxed">Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</span></p>
                <p><span className="text-emerald-400 font-bold"> Guardião </span><span className="text-stone-300 leading-relaxed">Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</span></p>
                <p><span className="text-emerald-400 font-bold"> Perseguidor </span><span className="text-stone-300 leading-relaxed">Gambá, sabujo ou outro animal farejador</span></p>
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