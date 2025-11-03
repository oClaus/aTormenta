"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGuerreiro } from "@/data/powers-guerreiro";
import { formatOrigin } from "@/types/power";

export default function GuerreiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPowers = powersGuerreiro
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
          <span className="text-gray-400 text-sm">Poderes de Guerreiro</span>
        </div>
      </header>

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-4">
          Poderes do Guerreiro
        </h1>
        <p className="text-gray-400 text-lg">Poderes exclusivos da classe Guerreiro:</p>
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
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Efeitos do Golpe Pessoal</h3>

        <p>
            <span className="text-purple-300 font-bold">Amplo (+3 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Atordoante (+2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Brutal (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Fornece um dado extra de dano do mesmo tipo.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Conjurador (Custo da Magia + 1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental à sua escolha). Considere que a mão da arma está livre para lançar esta magia.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Destruidor (+2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Aumenta o multiplicador de crítico em +1.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Distante (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Elemental (+2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Impactante (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Letal (+2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Penetrante (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Ignora 10 pontos de RD.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Preciso (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Qualquer Arma (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Você pode usar seu Golpe Pessoal com qualquer tipo de arma.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Ricocheteante (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Teleguiado (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Ignora penalidades por camuflagem ou cobertura leves.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Lento (–2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Seu ataque exige uma ação completa para ser usado.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Perto da Morte (–2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">Sacrifício (–2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">(Dragão Brasil) Anunciado (–1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Você precisa gastar uma ação de movimento gritando o nome de seu golpe para usá-lo. Isso significa que não pode usá-lo furtivamente ou quando estiver impedido de falar, como amordaçado ou debaixo d’água. Uma vez que grite, deve usar o golpe até o fim de seu próximo turno.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">(Dragão Brasil) Desconcertante (+1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica Vulnerável por uma rodada.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">(Dragão Brasil) Desgastante (–1 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Você fica fatigado após usar o golpe.</span>
        </p>
        <p>
            <span className="text-purple-300 font-bold">(Dragão Brasil) Paralisante (+2 PM)</span>
            <span className="text-gray-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica Paralisada por uma rodada (Fortitude CD For anula).</span>
        </p>
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
