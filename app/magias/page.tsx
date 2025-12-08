"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { spells } from "@/data/spells";
import { Spell, SpellType, SpellSchool } from "@/types/speel";

// --- Constantes de Filtro ---
const ALL_SPELL_TYPES: SpellType[] = ["Arcana", "Divina", "Universal"];
const ALL_SPELL_SCHOOLS: SpellSchool[] = [
  "Abjuração",
  "Adivinhação",
  "Convocação",
  "Encantamento",
  "Evocação",
  "Ilusão",
  "Necromancia",
  "Transmutação",
];
const ALL_CIRCLES: number[] = [1, 2, 3, 4, 5];

// --- Componentes Auxiliares ---

// Função auxiliar para renderizar o texto com negrito (Mantida)
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-cyan-300">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Componente Card de Magia
const SpellCard = ({ spell }: { spell: Spell }) => {
  const typeColor = spell.type === "Arcana" ? "bg-purple-600" : spell.type === "Divina" ? "bg-yellow-600" : "bg-gray-600";
  const circleColor = spell.circle === 5 ? "text-red-400" : "text-cyan-400";

  return (
    <div className="p-4 rounded-xl bg-gray-800/70 border border-cyan-500/30 shadow-lg flex flex-col">
      {/* Header */}
      <div className="mb-3 pb-2 border-b border-cyan-500/30">
        <h3 className="text-xl font-bold text-cyan-300">{spell.name}</h3>
        <div className="flex justify-between items-center text-sm mt-1">
          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold text-white ${typeColor}`}>
            {spell.type}
          </span>
          <span className="text-gray-400">
            {spell.school}
          </span>
        </div>
      </div>

      {/* Detalhes Principais */}
      <div className="text-sm text-gray-400 space-y-1 mb-3">
        <p><strong className={circleColor}>Círculo {spell.circle}</strong></p>
        <p><strong>Execução:</strong> {spell.execution}</p>
        <p><strong>Alcance:</strong> {spell.range}</p>
        <p><strong>Alvo/Área:</strong> {spell.target}</p>
        <p><strong>Duração:</strong> {spell.duration}</p>
        <p><strong>Resistência:</strong> {spell.resistance}</p>
      </div>

      {/* Descrição */}
      <p className="text-sm text-gray-300 mb-3 flex-grow line-clamp-4">
        {renderTextWithBold(spell.description)}
      </p>

      {/* Aprimoramentos */}
      {spell.enhancements && spell.enhancements.length > 0 && (
        <div className="mt-2 pt-2 border-t border-cyan-500/20">
          <p className="text-xs font-semibold text-cyan-400 mb-1">Aprimoramentos:</p>
          <ul className="text-xs text-gray-400 space-y-0.5">
            {spell.enhancements.map((enh, index) => (
              <li key={index}>
                <span className="font-mono text-purple-300">{enh.cost}:</span> {enh.effect}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Origem */}
      <div className="mt-3 pt-2 border-t border-cyan-500/20 text-right">
        <span className="text-xs text-gray-500 italic">Origem: {spell.origin}</span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function MagiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<SpellType | "Todos">("Todos");
  const [selectedSchool, setSelectedSchool] = useState<SpellSchool | "Todas">("Todas");
  const [selectedCircle, setSelectedCircle] = useState<number | "Todos">("Todos");

  const filteredSpells = useMemo(() => {
    let filtered = spells;
    const lowerCaseSearch = searchTerm.toLowerCase();

    // 1. Filtrar por Tipo
    if (selectedType !== "Todos") {
      filtered = filtered.filter(spell => spell.type === selectedType);
    }

    // 2. Filtrar por Escola
    if (selectedSchool !== "Todas") {
      filtered = filtered.filter(spell => spell.school === selectedSchool);
    }

    // 3. Filtrar por Círculo
    if (selectedCircle !== "Todos") {
      filtered = filtered.filter(spell => spell.circle === selectedCircle);
    }

    // 4. Filtrar por Busca (Nome, Descrição, Efeito, Aprimoramentos)
    if (lowerCaseSearch) {
      filtered = filtered.filter(spell => 
        spell.name.toLowerCase().includes(lowerCaseSearch) ||
        spell.description.toLowerCase().includes(lowerCaseSearch) ||
        spell.school.toLowerCase().includes(lowerCaseSearch) ||
        spell.type.toLowerCase().includes(lowerCaseSearch) ||
        spell.execution.toLowerCase().includes(lowerCaseSearch) ||
        spell.range.toLowerCase().includes(lowerCaseSearch) ||
        spell.target.toLowerCase().includes(lowerCaseSearch) ||
        spell.duration.toLowerCase().includes(lowerCaseSearch) ||
        spell.resistance.toLowerCase().includes(lowerCaseSearch) ||
        (spell.enhancements && spell.enhancements.some(enh => enh.effect.toLowerCase().includes(lowerCaseSearch)))
      );
    }

    // Ordenação: Círculo (crescente) e depois Nome (alfabética)
    return filtered.sort((a, b) => {
      if (a.circle !== b.circle) {
        return a.circle - b.circle;
      }
      return a.name.localeCompare(b.name, "pt-BR");
    });
  }, [searchTerm, selectedType, selectedSchool, selectedCircle]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
          ← Voltar para o Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">
          🧙‍♂️ Magias
        </h1>
        <p className="text-gray-400 text-lg">
          Catálogo completo de magias, com detalhes de execução, alcance, duração e aprimoramentos.
        </p>
      </div>

      {/* Filtros */}
      <section className="mb-8 p-6 bg-gray-900/50 rounded-xl border border-cyan-500/20 space-y-6">
        {/* Barra de Busca */}
        <input
          type="text"
          placeholder="Buscar por nome, descrição, escola ou efeito..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-cyan-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />

        {/* Filtros de Botão */}
        <div className="space-y-4">
          {/* Filtro por Tipo */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 mb-2">Tipo de Magia</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType("Todos")}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedType === "Todos"
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Todos
              </button>
              {ALL_SPELL_TYPES.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    selectedType === type
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por Escola */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 mb-2">Escola de Magia</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSchool("Todas")}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedSchool === "Todas"
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Todas
              </button>
              {ALL_SPELL_SCHOOLS.map(school => (
                <button
                  key={school}
                  onClick={() => setSelectedSchool(school)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    selectedSchool === school
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {school}
                </button>
              ))}
            </div>
          </div>

          {/* Filtro por Círculo */}
          <div>
            <h4 className="text-sm font-bold text-cyan-300 mb-2">Círculo</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCircle("Todos")}
                className={`px-3 py-1 text-xs rounded-full transition-colors ${
                  selectedCircle === "Todos"
                    ? "bg-cyan-600 text-white shadow-md"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                Todos
              </button>
              {ALL_CIRCLES.map(circle => (
                <button
                  key={circle}
                  onClick={() => setSelectedCircle(circle)}
                  className={`px-3 py-1 text-xs rounded-full transition-colors ${
                    selectedCircle === circle
                      ? "bg-cyan-600 text-white shadow-md"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {circle}º
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Magias */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-400 mb-4">
          {filteredSpells.length} Magias Encontradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpells.map((spell) => (
            <SpellCard key={spell.id} spell={spell} />
          ))}
        </div>
        {filteredSpells.length === 0 && (
          <div className="text-center py-12 text-gray-500 bg-gray-900/50 rounded-xl border border-cyan-500/20">
            Nenhuma magia encontrada com os filtros e termos de busca aplicados.
          </div>
        )}
      </div>
    </main>
  );
}