"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { food } from "@/data/food";
import { Gear } from "@/types/comidas";
import ThemeToggle from "@/components/ThemeToggle";

// --- Componentes Auxiliares ---

function SearchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="6.5" />
      <path d="M19 19l-4.5-4.5" />
    </svg>
  );
}

function PageGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M15 3v4h4" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" />
    </svg>
  );
}

interface GearTableProps {
  allGear: Gear[];
  title?: string;
  showCookingStats?: boolean;
}

// 2. Componente para a Tabela Filtrável de Equipamentos (Padronizado para Pergaminho)
const GearFilterableTable = ({ allGear, title, showCookingStats = false }: GearTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGear = useMemo(() => {
    let filtered = allGear;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (lowerCaseSearch) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(lowerCaseSearch) ||
        item.origin.toLowerCase().includes(lowerCaseSearch) ||
        item.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [allGear, searchTerm]);

  return (
    <div className="space-y-6 w-full relative animate-in fade-in duration-500">

      {/* Título Opcional da Seção */}
      {title && (
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-red-800 mb-6 flex items-center gap-3 tracking-wide border-b-2 border-amber-900/10 pb-2">
            <span className="text-red-800 text-3xl">❖</span> {title}
        </h2>
      )}

      {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
      <div className="mb-8 p-6 rounded-xl bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <label className="font-display block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
            Buscar Item
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nome, descrição ou origem..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 pr-12 bg-[rgb(var(--bg-inset-rgb))] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
          />
          {searchTerm ? (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-red-800 font-bold hover:scale-110 transition-transform text-lg"
              title="Limpar busca"
            >
              ✕
            </button>
          ) : (
            <SearchGlyph className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none" />
          )}
        </div>
        {searchTerm && (
          <p className="text-xs font-medium text-amber-950/70 mt-3 italic tracking-wide">
            Exibindo {filteredGear.length} resultado(s) para "{searchTerm}".
          </p>
        )}
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto rounded-xl border-2 border-amber-900/20 shadow-sm w-full bg-[rgb(var(--bg-card-rgb))]">
        <table className="min-w-full divide-y-2 divide-amber-900/20 table-fixed font-serif">
          <thead className="bg-[rgb(var(--bg-edge-rgb))] text-amber-950/80 border-b-2 border-amber-900/20">
            <tr>
              <th scope="col" className={`font-display ${showCookingStats ? 'w-[40%]' : 'w-[85%]'} px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20`}>Item</th>

              {/* Colunas Condicionais de Culinária */}
              {showCookingStats && (
                <>
                  <th scope="col" className="font-display w-[30%] px-4 py-4 text-left text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">Ingredientes</th>
                  <th scope="col" className="font-display w-[10%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20"><span className="hidden sm:inline">Custo (Fabr.)</span><span className="sm:hidden">Custo</span></th>
                  <th scope="col" className="font-display w-[5%] px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20">CD</th>
                </>
              )}

              <th scope="col" className={`font-display ${showCookingStats ? 'w-[10%]' : 'w-[10%]'} px-3 py-4 text-center text-xs font-bold uppercase tracking-widest border-r-2 border-amber-900/20`}>Preço</th>
              <th scope="col" className={`font-display ${showCookingStats ? 'w-[5%]' : 'w-[5%]'} px-3 py-4 text-center text-xs font-bold uppercase tracking-widest`}>Esp.</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10 bg-[rgb(var(--bg-inset-rgb))]">
            {filteredGear.map((item, index) => {
               const rowClass = index % 2 === 0 ? "bg-[rgb(var(--bg-inset-rgb))]" : "bg-[rgb(var(--bg-card-rgb))]/30";

               return (
                <tr key={item.id} className={`${rowClass} hover:bg-[rgb(var(--bg-card-rgb))]/60 transition-colors group`}>
                  <td className="px-4 py-4 border-r-2 border-amber-900/10 align-top">
                    <div className="font-display font-bold text-amber-950 text-lg group-hover:text-red-800 transition-colors">{item.name}</div>
                    <div className="text-sm text-amber-950/85 break-words font-medium mt-1 leading-relaxed">{item.description}</div>
                    <div className="font-display mt-4 text-[10px] inline-block px-2 py-1 rounded bg-[rgb(var(--bg-inset-rgb))] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">
                        {item.origin}
                    </div>
                  </td>

                  {/* Células Condicionais de Culinária */}
                  {showCookingStats && (
                    <>
                      <td className="px-4 py-4 text-sm text-amber-950/85 font-medium border-r-2 border-amber-900/10 align-middle italic">
                         {item.ingredients || "—"}
                      </td>
                      <td className="px-3 py-4 text-center text-sm text-amber-950/85 font-medium border-r-2 border-amber-900/10 align-middle">
                         {item.cookingCost || "—"}
                      </td>
                      <td className="px-3 py-4 text-center text-sm border-r-2 border-amber-900/10 align-middle text-red-800 font-bold">
                         {item.cookingDC || "—"}
                      </td>
                    </>
                  )}

                  <td className="px-3 py-4 text-center text-sm text-red-800 font-bold align-middle border-r-2 border-amber-900/10">{item.price}</td>
                  <td className="px-3 py-4 text-center text-sm text-amber-950/85 font-medium align-middle">{item.spaces}</td>
                </tr>
               )
            })}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-amber-950/70 bg-[rgb(var(--bg-inset-rgb))] italic text-lg border-t-2 border-amber-900/20 flex flex-col items-center gap-3">
            <PageGlyph className="text-amber-950/40" />
            Nenhum item encontrado com os filtros aplicados.
          </div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function AlimentacaoPage() {
  const [isIntroOpen, setIsIntroOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'pratos' | 'bebidas' | 'ingredientes'>('pratos');

  // Separar dados por categoria
  const foods = food.filter(item => item.category === 'Alimentação');
  const drinks = food.filter(item => item.category === 'Bebida');
  const ingredients = food.filter(item => item.category === 'Ingrediente');

  return (
    <div className="min-h-screen bg-[rgb(var(--bg-rgb))] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[rgb(var(--bg-rgb))] to-[rgb(var(--bg-edge-rgb))]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(var(--bg-rgb),0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[rgb(var(--bg-card-rgb))]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 self-end md:self-auto">
              <div className="font-display flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase">
                  <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Início
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <Link href="/equipamentos" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                      Equipamentos
                  </Link>
                  <span className="text-amber-900/40">/</span>
                  <span className="text-red-800">Alimentação</span>
              </div>
              <ThemeToggle />
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm tracking-wider" style={{ textShadow: '0 0 28px rgba(127,29,29,0.3)' }}>
                Alimentação
            </h1>
            <div className="flex items-center gap-3 w-full mb-6">
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="rgb(var(--accent-rgb))" strokeWidth="1" className="opacity-60 shrink-0">
                <path d="M1 7c4-6 8-6 10 0s6 6 10 0" />
                <circle cx="11" cy="7" r="1.4" fill="rgb(var(--accent-rgb))" stroke="none" />
              </svg>
              <div className="h-px max-w-36 flex-1 bg-gradient-to-r from-[rgba(var(--accent-rgb),0.55)] to-transparent" />
            </div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[rgb(var(--bg-card-rgb))] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <PageGlyph className="text-red-800/70 shrink-0 mt-1" />
              <div className="text-left">
                <h2 className="font-display text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors uppercase tracking-wide">
                  Regras de Alimentação
                </h2>
                <p className="text-sm text-amber-950/70 italic font-bold">
                  Clique para expandir informações sobre culinária, bebidas e mecânicas.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[rgb(var(--bg-inset-rgb))] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-6">

              {/* Introdução Básica */}
              <section>
                <p className="font-medium mb-4">
                  Um prato especial deve ser consumido assim que é comprado ou fabricado. O bônus que ele oferece dura um dia, e você só pode receber um bônus de alimentação por dia.
                </p>
                <p className="font-medium mb-4">
                  Para fabricar um prato especial, você precisa de 1 hora e deve realizar um teste de Ofício (cozinheiro) contra CD 15 (ou a CD listada na tabela de culinária avançada).
                </p>
              </section>

              {/* Culinária Avançada */}
              <section className="border-t-2 border-amber-900/20 pt-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Regra Opcional: Culinária Avançada</h2>
                <p className="font-bold text-amber-950/70 italic mb-6">Esta seção traz regras alternativas para culinária, com mecânicas mais concretas e detalhadas.</p>

                <h3 className="font-display text-xl font-bold text-red-800 mb-3 tracking-wide">Fabricando Pratos Especiais</h3>
                <p className="font-medium mb-4">Para preparar um prato especial, você precisa saber sua receita, gastar seus ingredientes e fazer um teste de Ofício (cozinheiro).</p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Receitas:</strong> Ao se tornar treinado em Ofício (cozinheiro), você aprende um número de receitas igual a 1 + Inteligência. Aprender novas receitas leva 1 dia e custa T$ 100.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Ingredientes:</strong> Cada prato exige ingredientes específicos (veja a tabela abaixo).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[10px] text-red-800/60 mt-2">◆</span>
                    <span className="font-medium"><strong className="text-red-800 uppercase tracking-widest text-sm">Teste:</strong> Exige 1 hora, gasto dos ingredientes e teste de Ofício (cozinheiro). Se passar, você prepara comida suficiente para seu grupo inteiro (aprox. 5 pessoas).</span>
                  </li>
                </ul>
              </section>

              {/* Culinária Sckharjagar */}
              <section className="border-t-2 border-amber-900/20 pt-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Culinária Sckharjagar</h2>
                <p className="font-medium mb-4">As receitas dos pratos com "Culinária Sckharjagar" são conhecidas apenas em Sckharshantallas.</p>
                <p className="font-medium">Dizem até que ensinar um estrangeiro a cozinhá-las seria um crime! Isso não passa de boato, mas incentiva muitos cozinheiros a guardarem suas receitas com todas as forças. Um personagem treinado em Ofício (cozinheiro) pode aprender a fabricar esses pratos ouvindo as instruções, lendo uma receita ou observando sua preparação.</p>
              </section>

              {/* Eu Bebo Sim */}
              <section className="border-t-2 border-amber-900/20 pt-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Eu Bebo Sim</h2>
                <p className="font-medium mb-4">Fabricar uma bebida exige um teste de Ofício (cozinheiro) com CD 20 e segue as regras normais de fabricação de itens consumíveis (com 1 dia você faz uma bebida, ou duas se aceitar uma penalidade de –5 no teste).</p>
                <p className="font-medium mb-4">Consumir uma bebida leva alguns minutos — embora seja possível tomar alguns goles rapidamente, para receber os benefícios dela você precisa ingeri-la com calma! Benefícios de bebida duram 1 dia e se acumulam com outros benefícios de alimentação (incluindo de bebidas diferentes).</p>

                <div className="p-6 bg-[rgb(var(--bg-card-rgb))]/50 rounded-xl border border-amber-900/20 shadow-sm border-l-4 border-l-red-800 mb-6">
                    <p className="font-medium mb-4">Quando você ingere uma bebida alcoólica, deve fazer um teste de Fortitude (CD indicada no item; cada dose adicional no mesmo dia aumenta a CD em +5). Se falhar, fica embriagado (–2 em testes baseados em Destreza e Carisma). Se já estava embriagado, fica bebum (desprevenido, –5 em testes baseados em Destreza e Carisma). Por fim, se já estava bebum, cai inconsciente. Todas as condições duram até o fim do dia.</p>
                    <p className="font-medium mb-4">Efeitos que evitem penalidades impostas por bebidas também anulam seus benefícios, pois eles andam lado a lado. Afinal, um personagem só recebe redução de dano ou bônus em perícias sociais ao beber por estar levemente embriagado! Um personagem com imunidade a efeitos prejudiciais de itens ingeríveis (como pelo poder Vida Rústica) pode abrir mão dessa imunidade ao beber para receber os benefícios da bebida. Nesse caso, ele recebe +5 em seu teste de Fortitude.</p>
                    <p className="font-bold text-red-800 uppercase tracking-widest text-sm mt-6">Use estas regras apenas se todos os membros do grupo forem maiores de idade. E, por mais que tavernas e bebidas alcoólicas sejam comuns em obras de fantasia, não custa lembrar: na vida real, consuma com moderação!</p>
                </div>
              </section>

            </div>
          </div>
        </div>

        {/* Sistema de Abas */}
        <div className="flex flex-wrap gap-2 mb-10 bg-[rgb(var(--bg-card-rgb))] p-2 rounded-xl border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-fit">
            <button
                onClick={() => setActiveTab('pratos')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'pratos' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Pratos Especiais
            </button>
            <button
                onClick={() => setActiveTab('bebidas')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'bebidas' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Bebidas
            </button>
            <button
                onClick={() => setActiveTab('ingredientes')}
                className={`font-display px-6 py-2.5 rounded-lg font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all ${activeTab === 'ingredientes' ? 'bg-red-800 text-[rgb(var(--bg-inset-rgb))] shadow-md' : 'text-amber-950/70 hover:text-red-800 hover:bg-[rgb(var(--bg-card-rgb))]/50'}`}
            >
                Ingredientes
            </button>
        </div>

        {/* Conteúdo das Abas (Tabelas) */}
        <section className="w-full">
            {activeTab === 'pratos' && (
              <GearFilterableTable
                  allGear={foods}
                  title="Acervo de Pratos Especiais"
                  showCookingStats={true}
              />
            )}

            {activeTab === 'bebidas' && (
              <GearFilterableTable
                  allGear={drinks}
                  title="Acervo de Bebidas"
                  showCookingStats={true}
              />
            )}

            {activeTab === 'ingredientes' && (
              <GearFilterableTable
                  allGear={ingredients}
                  title="Acervo de Ingredientes"
                  showCookingStats={false}
              />
            )}
        </section>

      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[rgb(var(--void-rgb))] text-center shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="font-display mb-2 text-white/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs
        </p>
        <p className="text-white/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}