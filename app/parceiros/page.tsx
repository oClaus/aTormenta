"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { partners } from "@/data/partners";
import { Partner } from "@/types/partner";

// --- Componentes Auxiliares ---

// Componente Card de Parceiro
const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="p-4 rounded-xl bg-gray-800/70 border border-green-500/30 shadow-lg flex flex-col">
      {/* Header */}
      <div className="mb-3 pb-2 border-b border-green-500/30">
        <h3 className="text-xl font-bold text-green-300">{partner.name}</h3>
        <p className="text-sm text-gray-400 italic">{partner.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-gray-300 space-y-3 flex-grow">
        <div>
          <p className="font-bold text-green-400">Iniciante:</p>
          <p>{partner.benefits.iniciante}</p>
        </div>
        <div>
          <p className="font-bold text-green-400">Veterano:</p>
          <p>{partner.benefits.veterano}</p>
        </div>
        <div>
          <p className="font-bold text-green-400">Mestre:</p>
          <p>{partner.benefits.mestre}</p>
        </div>
      </div>

      {/* Origem */}
      <div className="mt-3 pt-2 border-t border-green-500/20 text-right">
        <span className="text-xs text-gray-500 italic">Origem: {partner.origin}</span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ParceirosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPartners = useMemo(() => {
    let filtered = partners;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // Filtrar por Busca (Nome, Descrição, Benefícios)
    if (lowerCaseSearch) {
      filtered = filtered.filter(partner => 
        partner.name.toLowerCase().includes(lowerCaseSearch) ||
        partner.description.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.iniciante.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.veterano.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.mestre.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [searchTerm]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
          ← Voltar para o Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 mb-4">
          🤝 Parceiros
        </h1>
        <p className="text-gray-400 text-lg">
          Tipos de parceiros que podem acompanhar os aventureiros e seus benefícios por nível.
        </p>
      </div>

      {/* Barra de Busca */}
      <input
        type="text"
        placeholder="Buscar por nome ou descrição do parceiro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 mb-8 rounded-lg bg-gray-800 border border-green-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
      />

      {/* Grid de Parceiros */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-400 mb-4">
          {filteredPartners.length} Parceiros Encontrados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
        {filteredPartners.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-green-500/20">
            Nenhum parceiro encontrado com o termo de busca aplicado.
          </div>
        )}
      </div>
    </main>
  );
}