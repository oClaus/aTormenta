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

      {/* Header */}
      <header className="p-6 border-b border-blue-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Magias</span>
        </div>
      </header>

      <div className="mt-8 text-center">
                    <Link
                        href="#secao-magias"
                        passHref
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors"
                    >
                        Ver Lista de Magias
                    </Link>
                </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">
          Magias
        </h1>
        <p>Dádiva da deusa Wynna, a magia é a força mais poderosa de Arton, capaz de produzir efeitos diversos. Uma magia pode criar uma bola de fogo ou curar ferimentos; fazer alguém adormecer ou distorcer o próprio tempo e espaço. Esta página traz as regras para lançar magias, além da lista e descrição de todas elas.</p>

        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Classificação</h1>
        <p>Todas as magias são classificadas em tipos (arcana ou divina) e círculos (do 1º ao 5º).</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Magia Arcana: </strong>Manipula diretamente as energias do mundo, permitindo ao conjurador violar as leis naturais e alterar a realidade. Este tipo de mágica pode ser dominado por estudo ou aptidão natural. Seus efeitos costumam ser impressionantes, destruidores e fantásticos — como produzir relâmpagos, metamorfosear criaturas, transportar por longas distâncias e criar imagens ilusórias.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Magia Divina: </strong>Provém de uma causa ou entidade poderosa — normalmente um deus maior. Através da devoção a essa causa ou entidade, o conjurador recebe poder mágico. A magia divina geralmente envolve proteção, fortalecimento e cura.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Círculos: </strong>Magias são divididas em círculos, do 1º ao 5º. Quanto mais alto o círculo da magia, mais poderosa ela é. Magias de 1º círculo são pouco mais que truques, mal excedendo capacidades mundanas. Já magias de 5º círculo podem invocar chuvas de meteoros, parar o tempo e até mesmo realizar desejos!</p>

        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Atributo-chave</h1>
        <p>A magia é intensa em Arton e pode ser dominada de várias formas.</p>
        <ul>
            <li><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Inteligência: </strong>Atributo-chave dos bruxos e magos. Eles seguem métodos e fórmulas antigas, herméticas, registradas em livros e pergaminhos. Para eles, magia é ciência.</li>
            <li><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Sabedoria: </strong>Atributo-chave dos clérigos e druidas. É a magia espiritual, baseada no contato com os deuses e a percepção da natureza. Para eles, magia é fé.</li>
            <li><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Carisma: </strong>Atributo-chave dos bardos e feiticeiros. Eles invocam seu próprio poder interior, alimentando magias com autoconfiança e força de personalidade. Para eles, magia é arte.</li>
        </ul>
        <p>O atributo-chave afeta seus pontos de mana e a CD dos testes de resistência para resistir a suas magias.</p>

        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Aprendendo Magias</h1>
        <p>Sua classe diz que tipo de magia você pode lançar: arcanistas e bardos lançam magias arcanas; clérigos e druidas lançam magias divinas. Sua classe também diz com quantas magias você começa e quantas ganha por nível. Algumas habilidades permitem que você aprenda magias novas. Caso a habilidade não diga qual magia você aprende, você pode escolher qualquer magia de um tipo e círculo que possa lançar.</p>

        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Lançando Magias</h1>
        <p>Magias são habilidades mágicas e seguem todas as regras impostas no jogo.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Custo em PM: </strong>Lançar uma magia exige gastar uma ação (varia de magia para magia) e pontos de mana (de acordo com o círculo da magia).</p>

        <div className="w-full lg:w-1/5 overflow-x-auto rounded-xl border border-blue-900/30">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-950/40 border-b border-blue-900/30">
                    <th className="px-6 py-3 text-center text-blue-300 font-bold">Círculo</th>
                    <th className="px-6 py-3 text-center text-blue-300 font-bold">Custo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-900/20">
                  <tr className="bg-black/30 hover:bg-blue-950/20 transition-colors">
                    <td className="px-6 py-3 text-center text-gray-300">1°</td>
                    <td className="px-6 py-3 text-center text-fuchsia-400">1 PM</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-blue-950/20 transition-colors">
                    <td className="px-6 py-3 text-center text-gray-300">2°</td>
                    <td className="px-6 py-3 text-center text-fuchsia-400">3 PM</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-blue-950/20 transition-colors">
                    <td className="px-6 py-3 text-center text-gray-300">3°</td>
                    <td className="px-6 py-3 text-center text-fuchsia-400">6 PM</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-blue-950/20 transition-colors">
                    <td className="px-6 py-3 text-center text-gray-300">4°</td>
                    <td className="px-6 py-3 text-center text-fuchsia-400">10 PM</td>
                  </tr>
                  <tr className="bg-black/30 hover:bg-blue-950/20 transition-colors">
                    <td className="px-6 py-3 text-center text-gray-300">5°</td>
                    <td className="px-6 py-3 text-center text-fuchsia-400">15 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Gestos e Palavras: </strong>Lançar uma magia envolve pronunciar palavras mágicas e gesticular com pelo menos uma mão livre. É um ato chamativo, perceptível por aqueles ao redor. Um conjurador amordaçado ou incapaz de usar as mãos não pode lançar magias.</p>
            <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Concentração: </strong>Lançar uma magia também exige calma e concentração. Por isso, um conjurador em situação difícil deve passar em um teste de Vontade. Se falhar no teste a magia é perdida, mas os PM são gastos mesmo assim.</p>
            <ul>
            <li><strong>Ser ferido durante a execução da magia: </strong>CD igual ao dano. Para magias que exigem uma ação padrão ou menos, o conjurador só pode ser ferido durante a execução se for atacado como uma reação ou se estiver sofrendo dano contínuo (por chamas ou veneno, por exemplo).</li>
            <li><strong>Condição ruim: </strong>CD 15 + custo em PM da magia. Exemplos incluem movimento vigoroso, como montado a galope, caído ou em uma tempestade.</li>
            <li><strong>Condição terrível: </strong>CD 20 + custo em PM da magia. Exemplos incluem movimento violento, como uma carroça desgovernada, agarrado ou em um terremoto.</li>
            </ul>
            <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Armaduras e Magia Arcana: </strong>O uso de armaduras atrapalha os gestos necessários para lançar magias arcanas. Lançar uma magia arcana usando armadura exige um teste de Misticismo (CD 20 + o custo em PM da magia). O teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta PM. Magias lançadas por habilidades de raça, poderes ou itens mágicos não sofrem esta limitação.</p>

        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Aprimoramentos</h1>
        <p>Algumas magias permitem gastar mais pontos de mana ao serem lançadas para aumentar seu efeito. Estas opções são chamadas de aprimoramentos.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Limite de PM: </strong>Como qualquer habilidade com custo variável, o máximo de PM que você pode gastar ao lançar uma magia obedece às regras para gasto de PM.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Aprimoramentos Cumulativos: </strong>Para aprimoramentos que aumentam um valor (o texto começa com a palavra “aumenta”), você pode gastar aquela quantidade de PM várias vezes para acumular o aumento. A magia Bola de Fogo causa 6d6 pontos de dano e tem um aprimoramento que aumenta esse dano em +2d6 por +2 PM. Um arcanista de 11º nível pode gastar até 11 PM ao lançar essa magia, causando 14d6 pontos de dano.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Aprimoramentos que Mudam Magias: </strong>Alguns aprimoramentos alteram a descrição da magia (o texto começa com a palavra “muda”). Nesse caso, a magia continua igual em tudo, exceto a parte mudada pelo aprimoramento. Mudanças na mesma característica da magia nunca se acumulam.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Truque: </strong>Este aprimoramento transforma a magia em uma versão mais simples e reduz seu custo em PM para zero. Truques não podem ser usados em conjunto com outros aprimoramentos.</p>
        <p><strong className="text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 mb-4">Pré-requisitos: </strong>Alguns aprimoramentos exigem que você seja capaz de lançar magias de determinado círculo. Para magias de classe, você deve cumprir o requisito com a classe com a qual aprendeu a magia. Para magias aprendidas de outra forma, você não tem como cumprir esses pré-requisitos.</p>



      </div>

      {/* Filtros */}
      <section id="secao-magias" className="mb-8 p-6 bg-gray-900/50 rounded-xl border border-cyan-500/20 space-y-6">
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