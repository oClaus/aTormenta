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
                <Link href="/" className="text-stone-500 hover:text-red-600 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-stone-700">/</span>
                <Link href="/poderes" className="text-stone-500 hover:text-red-600 transition-colors">
                  Poderes
                </Link>
                <span className="text-stone-700">/</span>
                <span className="text-red-700">Poderes de Guerreiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Intro */}
        <div className="mb-12 p-8 bg-stone-900/50 rounded border border-stone-800 w-full">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-600 mb-6 drop-shadow-md">
            Poderes do Guerreiro
            </h1>
            <p className="text-stone-300 text-lg font-serif">Poderes exclusivos da classe Guerreiro:</p>
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
                className="w-full px-5 py-3 bg-stone-950 border border-stone-700 rounded text-stone-200 placeholder-stone-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-900 transition-all font-serif"
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
                className="rounded-xl bg-stone-900 border border-stone-800 p-6 hover:border-red-900/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-500 mb-3 group-hover:text-red-400 transition-colors font-serif">
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
                        <span className="font-bold text-red-700 uppercase tracking-wide">Pré-requisito:</span> {power.prerequisite}
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

        {/* Seção de Informação (Golpe Pessoal) */}
        <div className="mt-16 p-8 rounded bg-stone-900/50 border border-stone-800 w-full space-y-6">
            <div>
                <h3 className="text-2xl font-bold text-red-500 mb-4 font-serif">Efeitos do Golpe Pessoal</h3>
            </div>

            <div className="space-y-3 text-stone-400 font-serif">
                <p>
                    <span className="text-red-400 font-bold">Amplo (+3 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Atordoante (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Brutal (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Fornece um dado extra de dano do mesmo tipo.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Conjurador (Custo da Magia + 1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido pelo ataque (atributo-chave é um mental à sua escolha). Considere que a mão da arma está livre para lançar esta magia.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Destruidor (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Aumenta o multiplicador de crítico em +1.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Distante (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Elemental (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Impactante (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Letal (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Penetrante (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Ignora 10 pontos de RD.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Preciso (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Qualquer Arma (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você pode usar seu Golpe Pessoal com qualquer tipo de arma.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Ricocheteante (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Teleguiado (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Ignora penalidades por camuflagem ou cobertura leves.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Lento (–2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu ataque exige uma ação completa para ser usado.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Perto da Morte (–2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Sacrifício (–2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Sempre que usa seu Golpe Pessoal, você perde 10 PV.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">(Dragão Brasil) Anunciado (–1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você precisa gastar uma ação de movimento gritando o nome de seu golpe para usá-lo. Isso significa que não pode usá-lo furtivamente ou quando estiver impedido de falar, como amordaçado ou debaixo d’água. Uma vez que grite, deve usar o golpe até o fim de seu próximo turno.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">(Dragão Brasil) Desconcertante (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica Vulnerável por uma rodada.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">(Dragão Brasil) Desgastante (–1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você fica fatigado após usar o golpe.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">(Dragão Brasil) Paralisante (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Uma criatura que sofra dano do ataque fica Paralisada por uma rodada (Fortitude CD For anula).</span>
                </p>


                <p>
                    <span className="text-red-400 font-bold">Avanço (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Brando (+0 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu golpe causa dano não letal.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Carregado (+1 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Sequencial (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Sifão (+2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Golpe de Abertura (–2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu golpe só pode ser usado em seu primeiro turno do combate.</span>
                </p>
                <p>
                    <span className="text-red-400 font-bold">Truque Secreto (–2 PM)</span>
                    <span className="text-stone-300 leading-relaxed ml-2"> Seu golpe só pode ser usado uma vez contra cada alvo por cena.</span>
                </p>
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