"use client";

import { useState } from "react";
import Link from "next/link";
import { gods } from "@/data/gods";
import { getStatusLabel, getStatusColor } from "@/types/god";

export default function DeusesPage() {
  const [selectedGod, setSelectedGod] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGods = gods
    .filter(
      (god) =>
        god.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        god.beliefs.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-100 px-6 py-12">
      {/* Navegação */}
      <div className="mb-8">
        <Link href="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
          ← Voltar ao Início
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mb-4">
          Deuses
        </h1>
        <p className="text-gray-300 text-lg">
          Em Arton, você pode trabalhar a serviço dos deuses, cumprindo seus desígnios. Um personagem que serve a uma divindade é chamado devoto e, em troca de seguir certas obrigações, recebe poderes. Ser devoto é uma escolha. Por exemplo, você pode ser um cavaleiro normal, sem obrigações, ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
        </p>
        <h1 className="text-yellow-300 text-lg">Escolhendo seu deus</h1>
        <p className="text-gray-300 text-lg">Você pode se tornar devoto na construção de seu personagem ou sempre que subir de nível. Porém, só pode ter uma devoção e não pode mudá-la (exceto sob critério do mestre). Se você for clérigo, druida ou paladino, automaticamente será um devoto.</p>
        <p className="text-gray-300 text-lg">Para ser devoto de um deus, sua raça ou sua classe devem estar listadas na seção “Devotos” do deus em questão. Humanos e clérigos são exceção — podem ser devotos de qualquer divindade.</p>
        <p className="text-gray-300 text-lg">Ao se tornar devoto, você recebe um poder concedido à sua escolha da lista do deus e passa a seguir as Obrigações & Restrições dele. Se violá-las, perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Se violá-las de novo na mesma aventura, perde todos os seus PM e não pode recuperá-los até fazer uma penitência (veja a perícia Religião).</p>
        <p><span className="text-yellow-300 text-lg">Multiclasse </span><span className="text-gray-300 text-lg leading-relaxed">No caso de classes com listas de devoções permitidas, a classe com menos opções determina a que deve ser seguida (isso permite que uma devoção anterior seja mudada). Se não houver devoções compatíveis, a multiclasse não pode ser feita.</span></p>

        <h1 className="text-yellow-300 text-lg">Características dos deuses</h1>
        <p><span className="text-yellow-300"> Crenças e Objetivos:</span><span className="text-gray-300 leading-relaxed"> Um resumo da doutrina da divindade, aquilo em que os devotos creem.</span></p>
        <p><span className="text-yellow-300"> Símbolo Sagrado:</span><span className="text-gray-300 leading-relaxed"> O símbolo do deus, normalmente usado como um medalhão ou na roupa.</span></p>
        <p><span className="text-yellow-300"> Canalizar Energia:</span><span className="text-gray-300 leading-relaxed"> O tipo de energia que a divindade canaliza. Devotos de alguns deuses podem escolher o tipo de energia (nesse caso, uma vez feita, a escolha não pode ser mudada).</span></p>
        <p><span className="text-yellow-300"> Arma Preferida:</span><span className="text-gray-300 leading-relaxed"> A arma típica de devotos do deus, importante para certas habilidades e magias.</span></p>
      </div>

      

      {/* Busca */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar por nome ou crenças..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-3 rounded-lg bg-gray-800 border border-yellow-500/30 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"
        />
      </div>

      {/* Grid de Deuses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {filteredGods.map((god) => (
          <button
            key={god.id}
            onClick={() => setSelectedGod(god)}
            className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-yellow-950/40 to-black border border-yellow-500/20 p-6 hover:border-yellow-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20 text-left"
          >
            {/* Imagem */}
            <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
              <img
                src={god.image}
                alt={god.name}
                className="w-full h-full object-contain bg-white"
              />
            </div>

            {/* Nome */}
            <h3 className="text-2xl font-bold text-yellow-300 mb-2 group-hover:text-yellow-200 transition-colors">
              {god.name}
            </h3>

            {/* Status Badge */}
            {god.status && (
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(god.status)} mb-3`}>
                {getStatusLabel(god.status)}
              </div>
            )}

            {/* Descrição Breve */}
            <p className="text-gray-400 text-sm line-clamp-3">
              {god.history}
            </p>
          </button>
        ))}
      </div>

      {filteredGods.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum deus encontrado.</p>
        </div>
      )}

      {/* Modal */}
      {selectedGod && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-yellow-500/30 rounded-xl max-w-3xl max-h-[90vh] overflow-y-auto w-full">
            {/* Header do Modal */}
            <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/80 border-b border-yellow-500/20 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                  {selectedGod.name}
                </h2>
                {selectedGod.status && (
                  <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(selectedGod.status)}`}>
                    {getStatusLabel(selectedGod.status)}
                  </div>
                )}
              </div>
              <button
                onClick={() => setSelectedGod(null)}
                className="text-yellow-400 hover:text-yellow-300 text-3xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-6 space-y-6">
              {/* Imagem */}
              <div className="w-full rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                <img
                  src={selectedGod.image}
                  alt={selectedGod.name}
                  className="max-w-full max-h-96 object-contain"
                />
              </div>

              {/* História */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">📖 História</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedGod.history}
                </p>
              </div>

              {/* Crenças e Objetivos */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">🙏 Crenças e Objetivos</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedGod.beliefs}
                </p>
              </div>

              {/* Símbolo Sagrado */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">✨ Símbolo Sagrado</h3>
                <p className="text-gray-300">
                  {selectedGod.sacredSymbol}
                </p>
              </div>

              {/* Canalizar Energia */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">⚡ Canalizar Energia</h3>
                <p className="text-gray-300">
                  {selectedGod.channelEnergy}
                </p>
              </div>

              {/* Arma Preferida */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">🗡️ Arma Preferida</h3>
                <p className="text-gray-300">
                  {selectedGod.preferredWeapon}
                </p>
              </div>

              {/* Devotos */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">👥 Devotos</h3>
                <p className="text-gray-300">
                  {selectedGod.devotees}
                </p>
              </div>

              {/* Poderes Concedidos */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">💫 Poderes Concedidos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedGod.grantedPowers.map((power, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-yellow-900/20 border border-yellow-500/30 text-yellow-300"
                    >
                      {power}
                    </div>
                  ))}
                </div>
              </div>

              {/* Obrigações e Restrições */}
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">⚠️ Obrigações e Restrições</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedGod.obligationsRestrictions}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}