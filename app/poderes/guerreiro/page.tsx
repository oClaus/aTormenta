"use client";

import { useState } from "react";
import Link from "next/link";
import { powersGuerreiro } from "@/data/powers-guerreiro";
import { formatOrigin } from "@/types/power";

export default function GuerreiroPodersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  const filteredPowers = powersGuerreiro
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

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/poderes" className="text-amber-950/70 hover:text-red-800 transition-colors">
                  Poderes
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Poderes de Guerreiro</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Poderes de Guerreiro
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full"></div>
        </div>

        {/* Acordeão de Introdução */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para expandir ou recolher as informações.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              {/* Seção: Efeitos do Golpe Pessoal */}
              <section>
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">
                  Efeitos do Golpe Pessoal
                </h3>
                <p className="font-medium mb-6">
                  Seu Golpe Pessoal é único e moldado por você. Abaixo estão os efeitos que podem ser aplicados ao seu ataque:
                </p>

                {/* Grid de 2 colunas para facilitar a leitura da lista enorme */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  
                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Amplo <span className="text-amber-950/60 font-black text-[10px]">(+3 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu ataque atinge todas as criaturas em alcance curto (incluindo aliados, mas não você mesmo). Faça um único teste de ataque e compare com a Defesa de cada criatura.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Atordoante <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Uma criatura que sofra dano do ataque fica atordoada por uma rodada (apenas uma vez por cena; Fortitude CD For anula).</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Brutal <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Fornece um dado extra de dano do mesmo tipo.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Conjurador <span className="text-amber-950/60 font-black text-[10px]">(Magia +1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Escolha uma magia de 1º ou 2º círculos que tenha como alvo uma criatura ou que afete uma área. Se acertar seu golpe, você lança a magia como uma ação livre, tendo como alvo a criatura atingida ou como centro de sua área o ponto atingido (atributo-chave é um mental à sua escolha). Considere que a mão da arma está livre.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Destruidor <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Aumenta o multiplicador de crítico em +1.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Distante <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Aumenta o alcance em um passo (de corpo a corpo para curto, médio e longo). Outras características não mudam (um ataque corpo a corpo com alcance curto continua usando Luta e somando sua Força no dano).</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Elemental <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Causa +2d6 pontos de dano de ácido, eletricidade, fogo ou frio. Você pode escolher este efeito mais vezes para aumentar o dano em +2d6 (do mesmo tipo ou de outro), por +2 PM a cada vez.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Impactante <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Empurra o alvo 1,5m para cada 10 pontos de dano causado (arredondado para baixo). Por exemplo, 3m para 22 pontos de dano.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Letal <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Aumenta a margem de ameaça em +2. Você pode escolher este efeito duas vezes para aumentar a margem de ameaça em +5.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Penetrante <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Ignora 10 pontos de RD do alvo.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Preciso <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Quando faz o teste de ataque, você rola dois dados e usa o melhor resultado.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Qualquer Arma <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você pode usar seu Golpe Pessoal com qualquer tipo de arma.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Ricocheteante <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">A arma volta pra você após o ataque. Só pode ser usado com armas de arremesso.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Teleguiado <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Ignora penalidades por camuflagem ou cobertura leves.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Lento <span className="text-amber-950/60 font-black text-[10px]">(–2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu ataque exige uma ação completa para ser usado.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Perto da Morte <span className="text-amber-950/60 font-black text-[10px]">(–2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">O ataque só pode ser usado se você estiver com um quarto de seus PV ou menos.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Sacrifício <span className="text-amber-950/60 font-black text-[10px]">(–2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Sempre que usa seu Golpe Pessoal, você perde 10 PV.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 flex-wrap">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Anunciado <span className="text-amber-950/60 font-black text-[10px]">(–1 PM)</span> <span className="bg-amber-900/20 text-amber-950/60 px-1.5 py-0.5 rounded text-[8px] ml-auto">Dragão Brasil</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você precisa gastar uma ação de movimento gritando o nome de seu golpe para usá-lo. Isso significa que não pode usá-lo furtivamente ou impedido de falar. Uma vez que grite, deve usar o golpe até o fim de seu próximo turno.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 flex-wrap">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Desconcertante <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span> <span className="bg-amber-900/20 text-amber-950/60 px-1.5 py-0.5 rounded text-[8px] ml-auto">Dragão Brasil</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Uma criatura que sofra dano do ataque fica Vulnerável por uma rodada.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 flex-wrap">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Desgastante <span className="text-amber-950/60 font-black text-[10px]">(–1 PM)</span> <span className="bg-amber-900/20 text-amber-950/60 px-1.5 py-0.5 rounded text-[8px] ml-auto">Dragão Brasil</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você fica fatigado após usar o golpe.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 flex-wrap">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Paralisante <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span> <span className="bg-amber-900/20 text-amber-950/60 px-1.5 py-0.5 rounded text-[8px] ml-auto">Dragão Brasil</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Uma criatura que sofra dano do ataque fica Paralisada por uma rodada (Fortitude CD For anula).</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Avanço <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você pode percorrer até o seu deslocamento em linha reta antes de desferir o golpe.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Brando <span className="text-amber-950/60 font-black text-[10px]">(+0 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu golpe causa dano não letal.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Carregado <span className="text-amber-950/60 font-black text-[10px]">(+1 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você pode gastar uma ação padrão para energizar seu ataque. Se você fizer isso e atacar até a próxima rodada, seu ataque causa +2d8 pontos de dano.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Sequencial <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu golpe causa +1d6 pontos de dano. A cada vez que você acerta o golpe na mesma cena, esse bônus aumenta em um passo.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Sifão <span className="text-amber-950/60 font-black text-[10px]">(+2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Você recebe 1 PM temporário para cada 10 pontos da rolagem de dano. Você pode receber um máximo de PM temporários por cena igual ao seu nível e eles desaparecem no fim da cena.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Golpe de Abertura <span className="text-amber-950/60 font-black text-[10px]">(–2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu golpe só pode ser usado em seu primeiro turno do combate.</p>
                  </div>

                  <div className="bg-[#e8dac1]/50 p-4 md:p-5 rounded-xl border border-amber-900/10 shadow-sm">
                    <h4 className="text-red-800 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> Truque Secreto <span className="text-amber-950/60 font-black text-[10px]">(–2 PM)</span>
                    </h4>
                    <p className="text-amber-950/85 font-medium text-sm md:text-base">Seu golpe só pode ser usado uma vez contra cada alvo por cena.</p>
                  </div>

                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Busca */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full font-serif">
            <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
                Buscar Poder
            </label>
            <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nome, descrição ou origem..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Poderes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 items-stretch">
            {filteredPowers.map((power) => (
            <div
                key={power.id}
                className="rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 p-5 md:p-6 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 font-serif"
            >
                {/* Nome do Poder */}
                <h3 className="text-xl font-bold text-red-800 mb-3 group-hover:text-red-800 transition-colors tracking-wide border-b-2 border-amber-900/10 pb-2">
                  {power.name}
                </h3>

                {/* Descrição */}
                <div className="flex-1 mb-4">
                  <p className="text-amber-950/85 text-sm md:text-base leading-relaxed font-medium">
                      {power.description}
                  </p>
                </div>

                {/* Rodapé do Card */}
                <div className="mt-auto">
                  {/* Pré-requisito */}
                  {power.prerequisite && (
                      <div className="mb-4 pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <p className="text-xs md:text-sm text-amber-950/70 font-medium">
                          <span className="font-bold text-red-800 uppercase tracking-widest">Pré-requisito:</span> {power.prerequisite}
                      </p>
                      </div>
                  )}

                  {/* Origem */}
                  <div className="flex items-center justify-end pt-4 border-t-2 border-amber-900/20 group-hover:border-red-800/30 transition-colors">
                      <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {formatOrigin(power.origin)}
                      </span>
                  </div>
                </div>
            </div>
            ))}
        </div>

        {/* Empty State */}
        {filteredPowers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
              <span className="text-4xl opacity-40 mb-4">📜</span>
              <p className="text-amber-950/70 text-lg italic tracking-wide">
                Nenhum poder de guerreiro encontrado.
              </p>
            </div>
        )}
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}