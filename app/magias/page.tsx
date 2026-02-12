"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { spells } from "@/data/spells";
import { Spell, SpellType, SpellSchool } from "@/types/speel";

// --- Constantes de Filtro ---
const ALL_SPELL_TYPES: SpellType[] = ["Arcana", "Divina", "Universal"];
const ALL_SPELL_SCHOOLS: [
  "Abjuração",
  "Adivinhação",
  "Convocação",
  "Encantamento",
  "Evocação",
  "Ilusão",
  "Necromancia",
  "Transmutação"
] = [
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

const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-amber-950 font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const SpellCard = ({ spell }: { spell: Spell }) => {
  const typeColor = spell.type === "Arcana" 
    ? "bg-purple-100 text-purple-900 border-purple-300" 
    : spell.type === "Divina" 
      ? "bg-amber-100 text-amber-900 border-amber-300" 
      : "bg-stone-200 text-stone-800 border-stone-400";
      
  const circleColor = spell.circle === 5 ? "text-amber-900" : "text-amber-700";

  return (
    <div className="p-5 rounded-xl bg-[#e6dcc5] border-2 border-amber-900/20 hover:border-amber-900/60 shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1">
      <div className="h-1 w-10 bg-amber-900/20 mb-3 rounded-full"></div>

      <div className="mb-3 pb-2 border-b border-amber-900/20">
        <h3 className="text-xl font-bold text-amber-950 font-serif">{spell.name}</h3>
        <div className="flex justify-between items-center text-sm mt-2">
          <span className={`px-2 py-0.5 rounded-sm text-xs font-serif uppercase tracking-wide border font-bold ${typeColor}`}>
            {spell.type}
          </span>
          <span className="text-amber-900/70 italic font-serif font-bold">
            {spell.school}
          </span>
        </div>
      </div>

      <div className="text-sm text-amber-900/90 space-y-1 mb-3 font-serif">
        <p><strong className={`${circleColor} font-bold`}> {spell.circle}° Círculo</strong></p>
        <p><strong className="text-amber-950">Execução:</strong> {spell.execution}</p>
        <p><strong className="text-amber-950">Alcance:</strong> {spell.range}</p>
        <p><strong className="text-amber-950">Alvo/Área:</strong> {spell.target}</p>
        <p><strong className="text-amber-950">Duração:</strong> {spell.duration}</p>
        <p><strong className="text-amber-950">Resistência:</strong> {spell.resistance}</p>
      </div>

      <div className="text-sm text-amber-900/80 mb-4 flex-grow font-serif leading-relaxed" style={{ whiteSpace: 'pre-wrap' }}>
        {renderTextWithBold(spell.description)}
      </div>

      {spell.enhancements && spell.enhancements.length > 0 && (
        <div className="mt-2 pt-3 border-t border-amber-900/20 bg-[#dcc8a9]/30 p-3 rounded">
          <p className="text-xs font-bold text-red-900 mb-2 uppercase tracking-wider font-serif">Aprimoramentos:</p>
          <ul className="text-xs text-amber-900 space-y-1.5 font-serif">
            {spell.enhancements.map((enh, index) => (
              <li key={index} className="flex gap-1">
                <span className="font-bold text-red-800 whitespace-nowrap">{enh.cost}:</span> 
                <span className="italic">{enh.effect}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 pt-2 border-t border-amber-900/10 text-right">
        <span className="text-[10px] text-amber-900/60 italic font-serif uppercase tracking-wider font-bold">{spell.origin}</span>
      </div>
    </div>
  );
};

export default function MagiasPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<SpellType | "Todos">("Todos");
  const [selectedSchools, setSelectedSchools] = useState<SpellSchool[]>([]);
  const [selectedCircle, setSelectedCircle] = useState<number | "Todos">("Todos");
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  const toggleSchool = (school: SpellSchool) => {
    setSelectedSchools(prevSchools => 
      prevSchools.includes(school) ? prevSchools.filter(s => s !== school) : [...prevSchools, school]
    );
  };

  const filteredSpells = useMemo(() => {
    let filtered = spells;
    const lowerCaseSearch = searchTerm.toLowerCase();

    if (selectedType !== "Todos") filtered = filtered.filter(spell => spell.type === selectedType);
    if (selectedSchools.length > 0) filtered = filtered.filter(spell => selectedSchools.includes(spell.school));
    if (selectedCircle !== "Todos") filtered = filtered.filter(spell => spell.circle === selectedCircle);

    if (lowerCaseSearch) {
      filtered = filtered.filter(spell => 
        spell.name.toLowerCase().includes(lowerCaseSearch) ||
        spell.description.toLowerCase().includes(lowerCaseSearch) ||
        spell.origin.toLowerCase().includes(lowerCaseSearch) ||
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

    return filtered.sort((a, b) => {
      if (a.circle !== b.circle) return a.circle - b.circle;
      return a.name.localeCompare(b.name, "pt-BR");
    });
  }, [searchTerm, selectedType, selectedSchools, selectedCircle]);

  return (
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-amber-900 selection:text-amber-100 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
             <div className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase">
                <Link href="/" className="text-amber-900/60 hover:text-red-700 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Magias</span>
            </div>
        </div>
      </header>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12"> 

        {/* --- ACORDEÃO COM TEXTO INTEGRAL --- */}
        <div className="mb-12 overflow-hidden rounded border border-amber-900/30 bg-[#dcc8a9]/60 shadow-sm transition-all">
          <button 
            onClick={() => setIsRulesOpen(!isRulesOpen)}
            className="w-full p-8 flex justify-between items-center hover:bg-[#dcc8a9]/80 transition-colors group"
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 drop-shadow-sm">
              Magias
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-widest text-amber-900/60 group-hover:text-amber-900 transition-colors">
                {isRulesOpen ? "Ocultar Regras" : "Clique para abrir as Regras"}
              </span>
              <span className={`text-2xl text-amber-900 transition-transform duration-300 ${isRulesOpen ? 'rotate-180' : ''}`}>▼</span>
            </div>
          </button>

          <div className={`transition-all duration-500 ease-in-out ${isRulesOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-8 pt-0 space-y-6 text-amber-950 font-serif leading-relaxed border-t border-amber-900/10">
                <p>Dádiva da deusa Wynna, a magia é a força mais poderosa de Arton, capaz de produzir efeitos diversos. Uma magia pode criar uma bola de fogo ou curar ferimentos; fazer alguém adormecer ou distorcer o próprio tempo e espaço. Esta página traz as regras para lançar magias, além da lista e descrição de todas elas.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 font-bold">Classificação</h2>
                <p>Todas as magias são classificadas em tipos (arcana ou divina) e círculos (do 1º ao 5º).</p>
                <p><strong className="text-amber-950">Magia Arcana: </strong>Manipula diretamente as energias do mundo, permitindo ao conjurador violar as leis naturais e alterar a realidade. Este tipo de mágica pode ser dominado por estudo ou aptidão natural. Seus efeitos costumam ser impressionantes, destruidores e fantásticos — como produzir relâmpagos, metamorfosear criaturas, transportar por longas distâncias e criar imagens ilusórias.</p>
                <p><strong className="text-amber-950">Magia Divina: </strong>Provém de uma causa ou entidade poderosa — normalmente um deus maior. Através da devoção a essa causa ou entidade, o conjurador recebe poder mágico. A magia divina geralmente envolve proteção, fortalecimento e cura.</p>
                <p><strong className="text-amber-950">Círculos: </strong>Magias são divididas em círculos, do 1º ao 5º. Quanto mais alto o círculo da magia, mais poderosa ela é. Magias de 1º círculo são pouco mais que truques, mal excedendo capacidades mundanas. Já magias de 5º círculo podem invocar chuvas de meteoros, parar o tempo e até mesmo realizar desejos!</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Atributo-chave</h2>
                <p>A magia é intensa em Arton e pode ser dominada de várias formas.</p>
                <ul className="list-disc ml-6 space-y-2 marker:text-amber-800 font-medium">
                    <li><strong className="text-amber-950">Inteligência: </strong>Atributo-chave dos bruxos e magos. Eles seguem métodos e fórmulas antigas, herméticas, registradas em livros e pergaminhos. Para eles, magia é ciência.</li>
                    <li><strong className="text-amber-950">Sabedoria: </strong>Atributo-chave dos clérigos e druidas. É a magia espiritual, baseada no contato com os deuses e a percepção da natureza. Para eles, magia é fé.</li>
                    <li><strong className="text-amber-950">Carisma: </strong>Atributo-chave dos bardos e feiticeiros. Eles invocam seu próprio poder interior, alimentando magias com autoconfiança e força de personalidade. Para eles, magia é arte.</li>
                </ul>
                <p>O atributo-chave afeta seus pontos de mana e a CD dos testes de resistência para resistir a suas magias.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Aprendendo Magias</h2>
                <p>Sua classe diz que tipo de magia você pode lançar: arcanistas e bardos lançam magias arcanas; clérigos e druidas lançam magias divinas. Sua classe também diz com quantas magias você começa e quantas ganha por nível. Algumas habilidades permitem que você aprenda magias novas. Caso a habilidade não diga qual magia você aprende, você pode escolher qualquer magia de um tipo e círculo que possa lançar.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Lançando Magias</h2>
                <p>Magias são habilidades mágicas e seguem todas as regras impostas no jogo.</p>
                <p><strong className="text-amber-950">Custo em PM: </strong>Lançar uma magia exige gastar uma ação (varia de magia para magia) e pontos de mana (de acordo com o círculo da magia).</p>

                <div className="w-full lg:w-1/3 overflow-x-auto rounded border-2 border-amber-900/40 my-4 shadow-sm">
                    <table className="w-full text-sm">
                        <thead>
                        <tr className="bg-[#c4b090] border-b border-amber-900/30 text-amber-950">
                            <th className="px-6 py-3 text-center font-bold uppercase tracking-wider">Círculo</th>
                            <th className="px-6 py-3 text-center font-bold uppercase tracking-wider">Custo</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-amber-900/10">
                        {[{ c: "1°", cost: "1 PM" }, { c: "2°", cost: "3 PM" }, { c: "3°", cost: "6 PM" }, { c: "4°", cost: "10 PM" }, { c: "5°", cost: "15 PM" }].map((row, i) => (
                            <tr key={i} className="bg-[#efe5d5] hover:bg-[#e6dcc5] transition-colors font-bold">
                                <td className="px-6 py-3 text-center text-amber-900">{row.c}</td>
                                <td className="px-6 py-3 text-center text-amber-950">{row.cost}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <p><strong className="text-amber-950">Gestos e Palavras: </strong>Lançar uma magia envolve pronunciar palavras mágicas e gesticular com pelo menos uma mão livre. É um ato chamativo, perceptível por aqueles ao redor. Um conjurador amordaçado ou incapaz de usar as mãos não pode lançar magias.</p>
                <p><strong className="text-amber-950">Concentração: </strong>Lançar uma magia também exige calma e concentração. Por isso, um conjurador em situação difícil deve passar em um teste de Vontade. Se falhar no teste a magia é perdida, mas os PM são gastos mesmo assim.</p>
                <ul className="list-disc ml-6 space-y-2 marker:text-amber-800 font-medium">
                    <li><strong>Ser ferido durante a execução da magia: </strong>CD igual ao dano. Para magias que exigem uma ação padrão ou menos, o conjurador só pode ser ferido durante a execução se for atacado como uma reação ou se estiver sofrendo dano contínuo (por chamas ou veneno, por exemplo).</li>
                    <li><strong>Condição ruim: </strong>CD 15 + custo em PM da magia. Exemplos incluem movimento vigoroso, como montado a galope, caído ou em uma tempestade.</li>
                    <li><strong>Condição terrível: </strong>CD 20 + custo em PM da magia. Exemplos incluem movimento violento, como uma carroça desgovernada, agarrado ou em um terremoto.</li>
                </ul>
                <p><strong className="text-amber-950">Armaduras e Magia Arcana: </strong>O uso de armaduras atrapalha os gestos necessários para lançar magias arcanas. Lançar uma magia arcana usando armadura exige um teste de Misticismo (CD 20 + o custo em PM da magia). O teste sofre penalidade de armadura. Se falhar, a magia não funciona, mas gasta PM. Magias lançadas por habilidades de raça, poderes ou itens mágicos não sofrem esta limitação.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Aprimoramentos</h2>
                <p>Algumas magias permitem gastar mais pontos de mana ao serem lançadas para aumentar seu efeito. Estas opções são chamadas de aprimoramentos.</p>
                <p><strong className="text-amber-950">Limite de PM: </strong>Como qualquer habilidade com custo variável, o máximo de PM que você pode gastar ao lançar uma magia obedece às regras para gasto de PM.</p>
                <p><strong className="text-amber-950">Aprimoramentos Cumulativos: </strong>Para aprimoramentos que aumentam um valor (o texto começa com a palavra “aumenta”), você pode gastar aquela quantidade de PM várias vezes para acumular o aumento. A magia Bola de Fogo causa 6d6 pontos de dano e tem um aprimoramento que aumenta esse dano em +2d6 por +2 PM. Um arcanista de 11º nível pode gastar até 11 PM ao lançar essa magia, causando 14d6 pontos de dano.</p>
                <p><strong className="text-amber-950">Aprimoramentos que Mudam Magias: </strong>Alguns aprimoramentos alteram a descrição da magia (o texto começa com a palavra “muda”). Nesse caso, a magia continua igual em tudo, exceto a parte mudada pelo aprimoramento. Mudanças na mesma característica da magia nunca se acumulam.</p>
                <p><strong className="text-amber-950">Truque: </strong>Este aprimoramento transforma a magia em uma versão mais simples e reduz seu custo em PM para zero. Truques não podem ser usados em conjunto com outros aprimoramentos.</p>
                <p><strong className="text-amber-950">Pré-requisitos: </strong>Alguns aprimoramentos exigem que você seja capaz de lançar magias de determinado círculo. Para magias de classe, você deve cumprir o requisito com a classe com a qual aprendeu a magia. Para magias aprendidas de outra forma, você não tem como cumprir esses pré-requisitos.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Escolas</h2>
                <p>Todas as magias, sejam arcanas ou divinas, pertencem a uma escola. A escolha de uma magia indica como ela utiliza e manipula energia.</p>
                <p>Escolas de magia contam como tipos de efeitos (veja a página 228), o que indica sua relação com outros efeitos. Por exemplo, um bônus em testes de resistência contra ilusões se aplica contra quaisquer magias de ilusão.</p>
                <p><strong className="text-amber-950">Abjuração (Abjur): </strong>Magias de proteção, que anulam outras magias ou expulsam criaturas invocadas de volta a seus planos de existência nativos. </p>
                <p><strong className="text-amber-950">Adivinhação (Adiv): </strong>Magias de detecção ou que vasculham passado e futuro. </p>
                <p><strong className="text-amber-950">Convocação (Conv): </strong>Magias que transportam matéria. Esse transporte é realizado através do Éter Entre Mundos; por isso, qualquer efeito que bloqueia viagens etéreas também impede convocações. Criaturas convocadas surgem em uma superfície desocupada e, quando destruídas, desaparecem e são devolvidas a seus mundos nativos. </p>
                <p><strong className="text-amber-950">Encantamento (Encan): </strong>Magias que afetam a mente. Todas as magias de encantamento são efeitos mentais. </p>
                <p><strong className="text-amber-950">Evocação (Evoc): </strong>Magias que manipulam ou geram energia pura. Ácido, eletricidade, fogo e frio são as energias geradas pelos quatro elementos, respectivamente terra, ar, fogo e água. Magias de fogo funcionam sob a água, mas criam vapor quente em vez de chamas abertas. Luz é energia positiva, cuja manifestação é capaz de iluminar, curar e causar dano de luz. Por fim, essência é energia mágica pura. </p>
                <p><strong className="text-amber-950">Ilusão: </strong>Essas magias fazem outros perceberem algo que não existe ou ignorarem algo real. Todas as magias de ilusão são efeitos mentais. </p>
                <p><strong className="text-amber-950">Necromancia (Necro): </strong>Magias que canalizam energia negativa, criando escuridão, drenando a força vital de criaturas vivas e criando mortos-vivos. Magias de necromancia são efeitos de trevas. </p>
                <p><strong className="text-amber-950">Transmutação (Trans): </strong>Magias que alteram as propriedades físicas de uma criatura ou objeto. </p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Execução</h2>
                <p>A ação necessária para lançar a magia.</p>
                <p><strong className="text-amber-950">Ação Livre: </strong>Você só pode lançar uma magia com execução de ação livre por rodada. Isso inclui magias afetadas por habilidades como Magia Acelerada.</p>
                <p><strong className="text-amber-950">Reação: </strong>Magias com execução de reação só podem ser lançadas em reação àquilo contra o qual se aplicam (por exemplo, uma magia que fornece bônus na Defesa pode ser lançada em reação a um ataque).</p>
                <p><strong className="text-amber-950">Ação Completa: </strong>No caso de magias com execução maior do que uma ação completa, você fica desprevenido enquanto estiver lançando a magia.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Alcance</h2>
                <p>Indica a distância máxima a partir do conjurador que a magia alcança.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Efeito</h2>
                <p>Determina se a magia afeta um alvo, uma área ou cria algo.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Duração</h2>
                <p>A duração indica por quanto tempo a magia mantém seu efeito. Quando ela termina, a energia mágica se dissipa e a magia acaba. Uma magia permanente ainda pode ser dissipada para encerrar sua duração.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Resistência</h2>
                <p>Magias prejudiciais normalmente permitem que seus alvos façam um teste de resistência para evitar ou reduzir seus efeitos.</p>
                <p><strong className="text-amber-950">Dificuldade: </strong>A CD do teste de resistência contra uma magia é 10 + metade do nível do personagem + atributo-chave da magia. (Samira é uma qareen feiticeira de 8º nível com Carisma 5. A CD para resistir a suas magias é 19 (10 +4 +5 = 19).)</p>
                <p><strong className="text-amber-950">Sucesso em Testes de Resistência: </strong>Uma criatura que passe em seu teste contra uma magia sem efeitos óbvios sente um tipo de formigamento ou força hostil, mas não pode deduzir a natureza exata do ataque. O conjurador também sente que a magia falhou — não é possível fingir ter sido enfeitiçado por Enfeitiçar, pois o conjurador saberá. No entanto, você não sabe se um alvo passou em um teste de resistência contra magias de área ou efeito.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Custos Especiais</h2>
                <p>Algumas magias poderosas exigem outros custos além de pontos de mana. Se uma magia possuir custo especial, isso estará indicado no fim do texto descritivo dela.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">Anulando Magias</h2>
                <p>Você pode anular uma magia conjurada por outra pessoa, fazendo uma contramágica. Para isso, use a ação preparar para agir quando uma criatura lançar uma magia. Nesse instante, você deve lançar uma magia que possa anular a magia original.</p>
                <p>Normalmente, uma magia só pode ser anulada por outra igual — se um inimigo lança Bola de Fogo, você deve lançar outra Bola de Fogo para anulá-la. Mas algumas magias podem anular outras: por exemplo, Luz anula Escuridão (e vice-versa). Em caso de dúvida, cabe ao mestre julgar se uma magia anula outra. Como regra geral, uma magia nunca pode anular outra de círculo maior.</p>
                <p>Dissipar Magia é uma exceção — pode ser usada para anular qualquer magia (mesmo de círculos maiores), mas você deve fazer um teste de Misticismo oposto por Misticismo ou Vontade de quem está lançando a magia (o que for maior). Se você vencer, seu Dissipar Magia funciona como contramágica.</p>
                <p>Tanto a magia anulada quanto a usada como contramágica desfazem-se instantaneamente.</p>

                <h2 className="text-2xl text-amber-900 border-b border-amber-900/20 pb-2 pt-4 font-bold">“Mas é outro deus!”</h2>
                <p>Algumas magias trazem o nome de um deus no título. Isso significa que a magia é tipicamente ofertada (ou foi criada) por aquela divindade. Mas então, sendo devoto de outra fé, ainda posso aprendê-la e lançá-la?</p>
                <p>A resposta é sim. Embora existam rivalidades e inimizades, deuses maiores ainda formam um Panteão, são irmãos unidos sob uma mesma liderança. Poderes divinos são exclusivos, mas magias não (exceto quando sua descrição diz o contrário). Além disso, apesar de suas naturezas díspares, deuses são orgulhosos e vaidosos. Ficam satisfeitos quando devotos de outros entoam seu nome, recorrem a seus milagres. A divindade padroeira, contudo, talvez se aborreça um pouquinho...</p>
                <p>Como regra opcional, quando você lança uma magia com o nome de um deus inimigo ou rival, o mestre pode estabelecer que essa transgressão cobra um pequeno preço. Se falhar em um teste de Religião (CD 20) para conseguir perdão adequado, você sofre –2 em seu próximo teste de perícia e recebe uma breve visão de sua divindade, levemente desapontada...</p>
            </div>
          </div>
        </div>

        {/* Filtros e Busca */}
        <section id="secao-magias" className="mb-8 p-6 bg-[#dcc8a9] rounded border border-amber-900/30 shadow-inner space-y-6">
            <div>
                <label className="block text-sm font-bold text-amber-900/70 mb-3 uppercase tracking-wider font-serif">Buscar Magia</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar por nome, descrição, escola ou efeito..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 focus:outline-none focus:border-amber-900 transition-all font-serif shadow-sm"
                    />
                </div>
            </div>

            <div className="space-y-6 font-serif">
                {/* Tipo */}
                <div>
                    <h4 className="text-sm font-bold text-amber-800 mb-2 uppercase tracking-wide">Tipo de Magia</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedType("Todos")} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedType === "Todos" ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>Todos</button>
                        {ALL_SPELL_TYPES.map(type => (
                            <button key={type} onClick={() => setSelectedType(type)} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedType === type ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>{type}</button>
                        ))}
                    </div>
                </div>

                {/* Escola */}
                <div>
                    <h4 className="text-sm font-bold text-amber-800 mb-2 uppercase tracking-wide">Escola de Magia</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedSchools([])} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedSchools.length === 0 ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>Todas</button>
                        {ALL_SPELL_SCHOOLS.map(school => (
                            <button key={school} onClick={() => toggleSchool(school)} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedSchools.includes(school) ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>{school}</button>
                        ))}
                    </div>
                </div>

                {/* Círculo */}
                <div>
                    <h4 className="text-sm font-bold text-amber-800 mb-2 uppercase tracking-wide">Círculo</h4>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => setSelectedCircle("Todos")} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedCircle === "Todos" ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>Todos</button>
                        {ALL_CIRCLES.map(circle => (
                            <button key={circle} onClick={() => setSelectedCircle(circle)} className={`px-3 py-1 text-xs rounded border transition-all font-bold ${selectedCircle === circle ? "bg-amber-900 text-amber-100 border-amber-950" : "bg-[#efe5d5] text-amber-900/60 border-amber-900/20 hover:border-amber-700"}`}>{circle}º</button>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Grid de Magias */}
        <div className="mb-8">
            <h2 className="text-xl font-bold text-amber-800 mb-6 font-serif border-b border-amber-900/20 pb-2">
                {filteredSpells.length} Magias Encontradas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSpells.map((spell) => (
                    <SpellCard key={spell.id} spell={spell} />
                ))}
            </div>
        </div>
      </div>

      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2026 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}