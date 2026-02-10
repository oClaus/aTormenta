"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { food } from "@/data/food";
import { Gear } from "@/types/comidas";

// --- Componentes Auxiliares ---

interface GearTableProps {
  allGear: Gear[];
  title?: string;
  showCookingStats?: boolean; // Nova prop para ativar colunas de culinária
}

// 2. Componente para a Tabela Filtrável de Equipamentos
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
    <div className="space-y-6 w-full">
      {/* Título Opcional da Seção */}
      {title && (
        <h2 className="text-3xl font-bold text-amber-900 mb-2 border-b border-amber-900/30 pb-2 mt-8">
          {title}
        </h2>
      )}

      {/* Barra de Busca - Fundo mais escuro (#dcc8a9) */}
      <div className="p-4 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)]">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // Input com fundo bege médio (#efe5d5)
            className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-amber-800 focus:ring-1 focus:ring-amber-800 transition-all font-serif shadow-sm"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
              🔍
          </div>
        </div>
      </div>

      {/* Tabela de Equipamentos */}
      <div className="overflow-x-auto rounded border-2 border-amber-900/40 shadow-lg w-full">
        <table className="min-w-full divide-y divide-amber-900/20 text-left font-serif">
          {/* Header mais escuro (#c4b090) */}
          <thead className="bg-[#c4b090] text-amber-950 border-b-2 border-amber-900/30">
            <tr>
              <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Item</th>
              
              {/* Colunas Condicionais de Culinária */}
              {showCookingStats && (
                <>
                  <th scope="col" className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider border-r border-amber-900/20 min-w-[150px]">Ingredientes</th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Custo (Fabr.)</th>
                  <th scope="col" className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">CD</th>
                </>
              )}

              <th scope="col" className="w-24 px-4 pr-4 py-4 text-right text-xs font-bold uppercase tracking-wider border-r border-amber-900/20">Preço</th>
              <th scope="col" className="w-20 px-4 pr-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Espaços</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-900/10">
            {filteredGear.map((item, index) => (
              // Alternância de cores suave: #e6dcc5 (par) e #dbcfb4 (ímpar)
              <tr key={item.id} className={`transition-colors hover:bg-[#c9bb9e] ${index % 2 === 0 ? "bg-[#e6dcc5]" : "bg-[#dbcfb4]"}`}>
                <td className="px-4 py-3 text-sm font-medium text-amber-950 border-r border-amber-900/20 align-top">
                  <div className="font-bold text-amber-900 font-serif text-lg">{item.name}</div>
                  <div className="text-sm text-amber-900/90 break-words font-serif italic mt-1">{item.description}</div>
                  <div className="mt-2 text-xs text-amber-800 font-bold uppercase tracking-widest opacity-80">{item.origin}</div>
                </td>

                {/* Células Condicionais de Culinária */}
                {showCookingStats && (
                  <>
                    <td className="px-4 py-3 text-sm text-amber-900/90 font-serif border-r border-amber-900/20 align-top italic">
                       {item.ingredients || "—"}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-amber-900/90 font-serif border-r border-amber-900/20 align-top">
                       {item.cookingCost || "—"}
                    </td>
                    <td className="px-4 py-3 text-center text-sm font-serif border-r border-amber-900/20 align-top text-amber-800 font-bold">
                       {item.cookingDC || "—"}
                    </td>
                  </>
                )}

                <td className="w-24 px-4 pr-4 py-3 text-right text-sm text-red-900 font-bold font-serif align-top border-r border-amber-900/20">{item.price}</td>
                <td className="w-20 px-4 pr-4 py-3 text-center text-sm text-amber-950 font-serif align-top">{item.spaces}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredGear.length === 0 && (
          <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border-t border-amber-900/20 italic">Nenhum item encontrado com os filtros aplicados.</div>
        )}
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function GearPage() {
  
  // Separar dados por categoria
  const foods = food.filter(item => item.category === 'Alimentação');
  const drinks = food.filter(item => item.category === 'Bebida');
  const ingredients = food.filter(item => item.category === 'Ingrediente');

  return (
    // Fundo escurecido #e0d2b4
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-amber-900 selection:text-amber-100 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-800 via-red-900 to-black drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/70 hover:text-red-800 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <Link href="/equipamentos" className="text-amber-900/70 hover:text-red-800 transition-colors">
                    Equipamentos
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Alimentação</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full px-6 py-12">

        {/* Seção de Texto Introdutório */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
          <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-900 via-amber-800 to-red-900 mb-4 drop-shadow-sm">
              Alimentação
            </h1>
            <p className="text-amber-900/90 text-lg italic font-medium">
              Um prato especial deve ser consumido assim que é comprado ou fabricado. O bônus que ele oferece dura um dia, e você só pode receber um bônus de alimentação por dia.
            </p>
            <p className="text-amber-900/90 font-medium">
               Para fabricar um prato especial, você precisa de 1 hora e deve realizar um teste de Ofício (cozinheiro) contra CD 15 (ou a CD listada na tabela de culinária avançada). 
            </p>
          </div>
        </section>
        
        {/* Nova Seção: Regras Opcionais - Culinária Avançada */}
        <section className="mb-12 p-8 bg-[#dcc8a9]/40 rounded border border-amber-900/20 w-full relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                 <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-amber-800"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
             </div>
             
             <div className="space-y-4 text-amber-900 leading-relaxed font-serif relative z-10">
                <h2 className="text-3xl font-bold text-amber-800 mb-4 border-b border-amber-900/30 pb-2">Regra Opcional: Culinária Avançada</h2>
                <p className="text-amber-900/80 italic mb-4 font-medium">Esta seção traz regras alternativas para culinária, com mecânicas mais concretas e detalhadas.</p>
                
                <h3 className="text-xl font-bold text-amber-800">Fabricando Pratos Especiais</h3>
                <p>Para preparar um prato especial, você precisa saber sua receita, gastar seus ingredientes e fazer um teste de Ofício (cozinheiro).</p>
                <ul className="list-disc pl-5 space-y-2 text-amber-900/90 marker:text-amber-800 font-medium">
                    <li><strong className="text-amber-950">Receitas:</strong> Ao se tornar treinado em Ofício (cozinheiro), você aprende um número de receitas igual a 1 + Inteligência. Aprender novas receitas leva 1 dia e custa T$ 100.</li>
                    <li><strong className="text-amber-950">Ingredientes:</strong> Cada prato exige ingredientes específicos (veja a tabela abaixo).</li>
                    <li><strong className="text-amber-950">Teste:</strong> Exige 1 hora, gasto dos ingredientes e teste de Ofício (cozinheiro). Se passar, você prepara comida suficiente para seu grupo inteiro (aprox. 5 pessoas).</li>
                </ul>
             </div>
        </section>

        {/* Tabelas Separadas */}
        <section className="w-full space-y-12">
            {/* Tabela de Pratos (Com colunas de Culinária ativas) */}
            <GearFilterableTable 
                allGear={foods} 
                title="Pratos Especiais" 
                showCookingStats={true} 
            />

            {/* Tabela de Bebidas */}
            <GearFilterableTable 
                allGear={drinks} 
                title="Bebidas" 
                showCookingStats={true} // Algumas bebidas também têm CD de fabricação
            />

            {/* Tabela de Ingredientes */}
            <GearFilterableTable 
                allGear={ingredients} 
                title="Ingredientes" 
                showCookingStats={false} 
            />
        </section>

        <section className="mb-12 mt-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 w-full">
          <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
            <h1 className="text-3xl font-bold text-amber-800 mb-4 border-b border-amber-900/20 pb-2">Mais informações</h1>
            <h1 className="text-xl font-bold text-amber-800 mb-2">Culinária Sckharjagar</h1>
            <p className="text-amber-900/90 font-medium">As receitas dos pratos com "Culinária Sckharjagar" são conhecidas apenas em Sckharshantallas.</p>
            <p className="text-amber-900/90 font-medium">Dizem até que ensinar um estrangeiro a cozinhá-las seria um crime! Isso não passa de boato, mas incentiva muitos cozinheiros a guardarem suas receitas com todas as forças. Um personagem treinado em Ofício (cozinheiro) pode aprender a fabricar esses pratos ouvindo as instruções, lendo uma receita ou observando sua preparação.</p>
          </div>
        </section>

        <section className="mb-12 mt-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 w-full">
          <div className="space-y-4 text-amber-950 leading-relaxed font-serif">
            <h1 className="text-xl font-bold text-amber-800 mb-2">Eu Bebo Sim</h1>
            <p className="text-amber-900/90 font-medium">Fabricar uma bebida exige um teste de Ofício (cozinheiro) com CD 20 e segue as regras normais de fabricação de itens consumíveis (com 1 dia você faz uma bebida, ou duas se aceitar uma penalidade de –5 no teste).</p>
            <p className="text-amber-900/90 font-medium">Consumir uma bebida leva alguns minutos — embora seja possível tomar alguns goles rapidamente, para receber os benefícios dela você precisa ingeri-la com calma! Benefícios de bebida duram 1 dia e se acumulam com outros benefícios de alimentação (incluindo de bebidas diferentes).</p>
            <p className="text-amber-900/90 font-medium">Quando você ingere uma bebida alcoólica, deve fazer um teste de Fortitude (CD indicada no item; cada dose adicional no mesmo dia aumenta a CD em +5). Se falhar, fica embriagado (–2 em testes baseados em Destreza e Carisma). Se já estava embriagado, fica bebum (desprevenido, –5 em testes baseados em Destreza e Carisma). Por fim, se já estava bebum, cai inconsciente. Todas as condições duram até o fim do dia.</p>
            <p className="text-amber-900/90 font-medium">Efeitos que evitem penalidades impostas por bebidas também anulam seus benefícios, pois eles andam lado a lado. Afinal, um personagem só recebe redução de dano ou bônus em perícias sociais ao beber por estar levemente embriagado! Um personagem com imunidade a efeitos prejudiciais de itens ingeríveis (como pelo poder Vida Rústica) pode abrir mão dessa imunidade ao beber para receber os benefícios da bebida. Nesse caso, ele recebe +5 em seu teste de Fortitude.</p>
            <p className="text-amber-900/90 font-medium">Use estas regras apenas se todos os membros do grupo forem maiores de idade. E, por mais que tavernas e bebidas alcoólicas sejam comuns em obras de fantasia, não custa lembrar: na vida real, consuma com moderação!</p>
          </div>
        </section>
      
      </main>
      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}