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
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/poderes" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Poderes
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Poderes Gerais</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Poderes de Druida
        </h1>
        <p className="text-gray-400 text-lg">Poderes de Druida:</p>
      </div>

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou origem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-purple-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
        />
      </div>

      {/* Grid de Poderes - items-stretch para garantir que cards tenham mesma altura */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
        {filteredPowers.map((power) => (
          <div
            key={power.id}
            className="rounded-lg bg-gradient-to-br from-purple-950/20 to-black border border-purple-500/20 p-6 hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex flex-col h-full"
          >
            {/* Nome do Poder */}
            <h3 className="text-xl font-bold text-purple-300 mb-3">{power.name}</h3>

            {/* Descrição: wrapper flex-1 para ocupar espaço e empurrar o footer */}
            <div className="flex-1 mb-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                {power.description}
              </p>
            </div>

            {/* Rodapé com mt-auto para ficar sempre no final do card */}
            <div className="mt-auto">
              {/* Pré-requisito (se houver) */}
              {power.prerequisite && (
                <div className="mb-4 pt-4 border-t border-purple-500/20">
                  <p className="text-xs text-purple-400">
                    <span className="font-semibold">Pré-requisito:</span> {power.prerequisite}
                  </p>
                </div>
              )}

              {/* Origem */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                <span className="text-xs px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300">
                  {formatOrigin(power.origin)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPowers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum poder encontrado.</p>
        </div>
      )}

      {/* Seção de Informação */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-yellow-900/30">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Forma Selvagem</h3>
        <p className="text-gray-300 leading-relaxed">Você pode gastar uma ação completa e 3 PM para adquirir a forma de uma criatura selvagem. Em termos de jogo, quando usa esta habilidade você adquire os modificadores de uma das formas abaixo. Características não mencionadas não mudam. Na forma selvagem você não pode falar, empunhar itens ou lançar magias. Seu equipamento desaparece (mas você mantém os benefícios de quaisquer itens vestidos), ressurgindo quando você volta ao normal. Outras criaturas podem fazer um teste de Percepção oposto pelo seu teste de Enganação para perceber que você não é um animal comum (você recebe +10 neste teste). Cada transformação dura pelo tempo que você quiser, mas você reverte à forma normal se ficar inconsciente ou morrer.</p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4"> Forma Ágil </h3>
        <p className="text-gray-300 leading-relaxed"> Você recebe Destreza +2 e duas armas naturais que causam $1d6$ pontos de dano e possuem margem de ameaça 19. Se atacar com ambas, sofre –2 em todos os testes de ataque até o seu próximo turno.</p>
        <p><span className="text-purple-300"> Aprimorada: </span><span className="text-gray-300 leading-relaxed">Você recebe Destreza +4, deslocamento +3m e duas armas naturais (como acima, mas com dano de 1d8). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span></p>
        <p><span className="text-purple-300"> Superior: </span><span className="text-gray-300 leading-relaxed">Você recebe Destreza +6, deslocamento +6m e duas armas naturais (como acima, mas com dano de 1d10). Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span></p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4"> Forma Feroz </h3>
        <p className="text-gray-300 leading-relaxed"> Você recebe Força +3, +2 na Defesa e uma arma natural que causa 1d8 pontos de dano. </p>
        <p><span className="text-purple-300"> Aprimorada: </span><span className="text-gray-300 leading-relaxed">Você recebe Força +5, +4 na Defesa e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span></p>
        <p><span className="text-purple-300"> Superior: </span><span className="text-gray-300 leading-relaxed">Você recebe Força +10, +6 na Defesa e uma arma natural que causa 4d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</span></p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4"> Forma Resistente </h3>
        <p className="text-gray-300 leading-relaxed"> Você recebe +5 na Defesa, redução de dano 5 e uma arma natural que causa 1d6 pontos de dano. </p>
        <p><span className="text-purple-300"> Aprimorada: </span><span className="text-gray-300 leading-relaxed">Você recebe Força +3, +8 na Defesa, redução de dano 8 e uma arma natural que causa 1d8 pontos de dano. Seu tamanho muda para Grande (–2 em Furtividade, +2 em testes de manobra).</span></p>
        <p><span className="text-purple-300"> Superior: </span><span className="text-gray-300 leading-relaxed"></span>Você recebe Força +5, +10 na Defesa, redução de dano 10 e uma arma natural que causa 2d6 pontos de dano. Seu tamanho muda para Enorme (–5 em Furtividade, +5 em testes de manobra).</p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4"> Forma Sorrateira </h3>
        <p className="text-gray-300 leading-relaxed"> Você recebe Destreza +2 e uma arma natural que causa 1d4 pontos de dano. Seu tamanho muda para Pequeno (+2 em Furtividade, –2 em testes de manobra). </p>
        <p><span className="text-purple-300"> Aprimorada: </span><span className="text-gray-300 leading-relaxed">Você recebe Destreza +4. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</span></p>
        <p><span className="text-purple-300"> Superior: </span><span className="text-gray-300 leading-relaxed">Você recebe Destreza +6 e deslocamento de voo 18m. Seu tamanho muda para Minúsculo (+5 em Furtividade, –5 em testes de manobra).</span></p>

        <h3 className="text-2xl font-bold text-purple-300 mb-4"> Forma Veloz</h3>
        <p className="text-gray-300 leading-relaxed"> Você recebe Destreza +2, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 15m, deslocamento de escalada 9m ou deslocamento de natação 9m. </p>
        <p><span className="text-purple-300"> Aprimorada: </span><span className="text-gray-300 leading-relaxed"> Você recebe Destreza +4, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento 18m, deslocamento de escalada 12m ou deslocamento de natação 12m.</span></p>
        <p><span className="text-purple-300"> Superior: </span><span className="text-gray-300 leading-relaxed">Você recebe Destreza +6, uma arma natural que causa 1d6 pontos de dano e um dos benefícios a seguir: deslocamento de natação 18m ou deslocamento de voo 24m.</span></p>

        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-pink-950/30 to-black border border-yellow-900/30">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Companheiro Animal</h3>
        <p className="text-gray-300 leading-relaxed">Um companheiro animal é um amigo valoroso e fiel. Você decide de qual espécie é seu companheiro. Vocês têm um vínculo mental, sendo capazes de entender um ao outro. Seu companheiro animal obedece a você, mesmo que isso arrisque a vida dele. Em termos de jogo, seu companheiro animal é um parceiro ajudante, assassino, atirador, combatente, fortão, guardião, perseguidor, ou uma montaria, do nível iniciante. No 7º nível ele muda para veterano e, no 15º nível, para mestre (se tiver mais de um tipo, todos mudam de nível). Se o companheiro animal morrer, você fica atordoado por uma rodada. Você pode invocar um novo companheiro após um dia inteiro de prece e meditação.</p>
        <p className="text-gray-300 leading-relaxed"> A seguir, alguns exemplos de animais (mas você é livre para escolher outros):</p>
        <p><span className="text-purple-300"> Ajudante </span><span className="text-gray-300 leading-relaxed">Corvo, macaco, raposa, serpente ou outro animal ágil ou esperto.</span></p>
        <p><span className="text-purple-300"> Assassino </span><span className="text-gray-300 leading-relaxed">Lince, onça ou outro animal treinado para abater presas.</span></p>
        <p><span className="text-purple-300"> Atirador </span><span className="text-gray-300 leading-relaxed">Águia, falcão ou outro animal capaz de mergulhar rapidamente nos alvos de seus ataques à distância.</span></p>
        <p><span className="text-purple-300"> Fortão </span><span className="text-gray-300 leading-relaxed">Crocodilo, javali, leão, lobo ou outro animal capaz de lutar ao seu lado.</span></p>
        <p><span className="text-purple-300"> Guardião </span><span className="text-gray-300 leading-relaxed">Alce, cão, coruja, tartaruga, urso ou outro animal pesado ou atento.</span></p>
        <p><span className="text-purple-300"> Perseguidor </span><span className="text-gray-300 leading-relaxed">Gambá, sabujo ou outro animal farejador</span></p>
        </div>
        
        <div>
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Importante lembrar!</h3>
        <p className="text-gray-300 leading-relaxed">
          Aqui temos poderes oficiais dos livros mas também da Dragão Brasil, podendo ou não ser disponibilizado em futuros complementos, para utilizar, conversar com mestre da mesa.
        </p>
      </div>
    </main>
  );
}
