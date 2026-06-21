"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { Threat } from "@/types/threat";
import { threats } from "@/data/threats";

const createUrlSafeId = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
};

export default function AmeacasPage() {
  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  // Novos estados para os filtros
  const [selectedND, setSelectedND] = useState("");
  const [selectedRegiao, setSelectedRegiao] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isIntroOpen, setIsIntroOpen] = useState(false);

  // --- Sistema de URL e Modal ---
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const foundThreat = threats.find(t => createUrlSafeId(t.id) === hash);
        setSelectedThreat(foundThreat || null);
        
        // Rola a página para o card se ele existir
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        setSelectedThreat(null);
      }
    };

    // Executa ao carregar e quando o histórico muda
    handleHashChange();
    window.addEventListener('popstate', handleHashChange);
    return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  const openModal = (threat: Threat) => {
    setSelectedThreat(threat);
    window.history.pushState(null, '', `#${createUrlSafeId(threat.id)}`);
  };

  const closeModal = () => {
    setSelectedThreat(null);
    setCopiedId(null);
    window.history.pushState(null, '', window.location.pathname);
  };

  const copyLink = (threat: Threat, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const safeId = createUrlSafeId(threat.id);
    const url = `${window.location.origin}${window.location.pathname}#${safeId}`;
    navigator.clipboard.writeText(url);
    setCopiedId(threat.id);
    setTimeout(() => setCopiedId(null), 2000); // Remove a mensagem após 2 segundos
  };

  // Memoizando os valores únicos para não recalcular a cada renderização
  const uniqueNDs = useMemo(() => {
    return Array.from(new Set(threats.map((t) => String(t.nd)))).sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true })
    );
  }, []);

  const uniqueRegioes = useMemo(() => {
    return Array.from(
      new Set(threats.map((t) => t.tema || "Desconhecido"))
    ).sort();
  }, []);

  // Lógica de filtro atualizada
  const filteredThreats = threats
    .filter((threat) => {
      const searchLower = searchTerm.toLowerCase();
      
      const matchSearch =
        threat.name.toLowerCase().includes(searchLower) ||
        threat.tipo.toLowerCase().includes(searchLower) ||
        threat.tamanho.toLowerCase().includes(searchLower) ||
        String(threat.nd).includes(searchLower) ||
        (threat.origin || "").toLowerCase().includes(searchLower) ||
        (threat.description || "").toLowerCase().includes(searchLower);

      const threatRegiao = threat.tema || "Desconhecido";
      
      const matchND = selectedND === "" || String(threat.nd) === selectedND;
      const matchRegiao = selectedRegiao === "" || threatRegiao === selectedRegiao;

      return matchSearch && matchND && matchRegiao;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const renderFormattedText = (text: string) => {
    if (!text) return "";
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-bold text-red-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">
      
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header - 100% Width */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm font-serif">
        <div className="w-full px-2 sm:px-6 md:px-12 lg:px-20 xl:px-28 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="inline-block group">
                <h1 className="text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            <div className="flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors">
                    Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Ameaças</span>
            </div>
        </div>
      </header>

      {/* Main Content - 100% Width */}
      <main className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-8">
        
        {/* Título e Descrição */}
        <div className="mb-10 md:mb-12 w-full font-serif flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 md:mb-6 border-b-2 border-amber-900/20 pb-4 tracking-wider w-full drop-shadow-sm">
            Ameaças
          </h2>
          <p className="text-amber-950/85 text-base md:text-lg italic border-l-4 border-red-800/60 pl-4 md:pl-5 font-medium text-left md:text-justify leading-relaxed">
            As seções a seguir trazem criaturas para o mestre usar como inimigos. As seções são divididas por temas, para ajudar o mestre na seleção dos adversários. Porém, o mestre é livre para misturar os grupos!
          </p>
        </div>

        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-amber-700/80 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">❖</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif tracking-wide">
                  Regras de Ameaças
                </h2>
                <p className="text-sm text-amber-900/70 font-serif italic font-bold">
                  Clique para expandir ou recolher as regras básicas sobre Ameaças.
                </p>
              </div>
            </div>
            <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[5000000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
  
  {/* Contêiner Principal: Padroniza fonte, cor, responsividade e alinhamento */}
  <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">

  <section>
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 tracking-wide">Fichas de Criaturas</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Nome & ND</h3>
                    <p>O nome e o nível de desafio (ND) da criatura. O ND funciona como o nível da criatura (mínimo 1). Criaturas de ND “S” e “S+” são casos especiais. Contam como ND 20, mas são ainda mais perigosas — os seres mais poderosos da Criação.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Tipo</h3>
                    <p>O tipo (e subtipo, quando houver) representa a natureza da criatura dentro do mundo e determina que efeitos podem afetá-la. Além disso, alguns tipos fornecem habilidades específicas.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Tamanho</h3>
                    <p>O tamanho determina o espaço que a criatura ocupa, seu alcance natural e seu modificador em Furtividade e manobras de combate. A Tabela 1-1 traz os modificadores por tamanho.</p>
                  </div>
                  <div className="my-6 shadow-sm rounded-xl border-2 border-amber-900/20 overflow-x-auto bg-[#e8dac1]">
                    <table className="w-full min-w-max divide-y-2 divide-amber-900/20">
                      <thead className="bg-[#d9c8a9] text-amber-950/80">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs sm:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                            Categoria de Tamanho
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs sm:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                            Exemplos
                          </th>
                          <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-widest border-r-2 border-amber-900/20">
                            Espaço Ocupado¹/<br/>Alcance Natural
                          </th>
                          <th scope="col" className="px-4 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-widest">
                            Modificador de<br/>Furtividade/Manobras
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-900/10 bg-[#fbf5e6] font-medium text-amber-950/85">
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#fbf5e6]">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Minúsculo</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Falcão, rato, sílfide</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">1,5m</td>
                          <td className="px-4 py-3 text-center">+5/–5</td>
                        </tr>
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#e8dac1]/30">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Pequeno</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Cão, goblin, hynne</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">1,5m</td>
                          <td className="px-4 py-3 text-center">+2/–2</td>
                        </tr>
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#fbf5e6]">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Médio</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Humano, anão, elfo</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">1,5m</td>
                          <td className="px-4 py-3 text-center">0</td>
                        </tr>
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#e8dac1]/30">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Grande</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Cavalo, ogro, serpe</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">3m</td>
                          <td className="px-4 py-3 text-center">–2/+2</td>
                        </tr>
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#fbf5e6]">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Enorme</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Ente, gigante, hidra</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">4,5m</td>
                          <td className="px-4 py-3 text-center">–5/+5</td>
                        </tr>
                        <tr className="transition-colors hover:bg-[#e8dac1]/50 bg-[#e8dac1]/30">
                          <td className="px-4 py-3 font-bold border-r-2 border-amber-900/10 text-amber-950 text-left">Colossal</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-left">Colosso, dragão, kraken</td>
                          <td className="px-4 py-3 border-r-2 border-amber-900/10 text-center">9m</td>
                          <td className="px-4 py-3 text-center">–10/+10</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="bg-[#d9c8a9] p-3 text-xs md:text-sm text-left text-amber-950/80 font-medium border-t-2 border-amber-900/20">
                      ¹Espaço ocupado pela criatura. “3m”, por exemplo, significa que a criatura ocupa um espaço de 3m x 3m, ou seja, 2x2 quadrados num mapa.
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Papel de Combate</h3>
                    <p className="mb-3">O papel de combate da criatura indica como ela deve ser usada pelo mestre. Existem três papéis: solo, lacaio e especial, cada um indicado por um ícone.</p>
                    <ul className="space-y-3 pl-4 border-l-2 border-amber-900/20">
                      <li>
                        <strong className="text-amber-950">Solo.</strong> A criatura foi construída para enfrentar os personagens sozinha. Ela possui estatísticas equilibradas; em especial possui muitos pontos de vida, para garantir que o combate dure um tempo bom (por volta de 3 a 5 rodadas). Este papel é ocupado principalmente por grandes monstros e vilões.
                      </li>
                      <li>
                        <strong className="text-amber-950">Lacaio.</strong> A criatura foi construída para enfrentar os personagens em grandes quantidades. Assim, ao usar lacaios, normalmente você usará várias criaturas de ND menor que o nível do grupo, em vez de uma única criatura de ND igual ao nível do grupo. Por exemplo, um grupo de 5º nível pode enfrentar quatro lacaios de ND 1 (o que gera um encontro de ND 5). Lacaios possuem valores de ataque e dano mais altos, para garantir que continuem sendo um risco real para os personagens, mesmo considerando que seu ND será menor que o nível deles, mas menos pontos de vida, para serem derrotados rapidamente, mantendo o combate acelerado. Este papel é ocupado primariamente por humanoides e monstros pequenos.
                      </li>
                      <li>
                        <strong className="text-amber-950">Especial.</strong> A criatura possui diversas habilidades especiais e/ou foi feita para ser usada em situações fora de combate direto (por exemplo, para enganar ou roubar os personagens). Este papel é ocupado também por conjuradores ou líderes — criaturas cujas habilidades fortalecem outras, e consequentemente devem ser usadas em conjunto com lacaios.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Iniciativa & Percepção</h3>
                    <p>Os valores de Iniciativa e Percepção da criatura e quaisquer habilidades relacionadas a seus sentidos.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Defesa & Resistências</h3>
                    <p>A Defesa e os valores de Fortitude, Reflexos e Vontade da criatura, além de quaisquer habilidades especiais defensivas, como redução de dano.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Pontos de Vida</h3>
                    <p>O total de pontos de vida da criatura.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Deslocamento</h3>
                    <p>A quantidade de metros que a criatura consegue percorrer com uma ação de movimento (e, entre parênteses, a quantidade de quadrados de 1,5m). O número padrão é o deslocamento terrestre da criatura. Uma criatura pode possuir outras formas de deslocamento, como voo e natação.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Pontos de Mana</h3>
                    <p>A quantidade de PM que a criatura possui. A maior parte das criaturas não possui pontos de mana, pois gerenciar esse recurso para diversas fichas ao mesmo tempo seria bastante trabalhoso para o mestre. Via de regra, apenas conjuradores possuem PM. Caso a criatura não possua pontos de mana, esta linha não aparecerá.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Ações</h3>
                    <p>Todos os ataques e habilidades que a criatura pode fazer (e, entre parênteses, a ação necessária e seu custo em PM, se houver). Habilidades sem ação exigida são passivas (estão sempre ativas). Algumas habilidades terminam com o termo “recarga”. Nesse caso, sempre que usar a habilidade, a criatura precisará gastar a ação determinada, ou cumprir a condição descrita, antes de poder usá-la novamente.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Atributos</h3>
                    <p>Os valores de atributos da criatura. Algumas criaturas possuem um valor de atributo nulo (–). Nesse caso, a criatura não possui o atributo em questão e não pode usá-lo. Uma criatura com “For –” não pode exercer força física sobre o mundo; uma criatura com “Des –” não pode se mover e uma criatura com “Int –” não é capaz de pensar, agindo apenas conforme uma programação prévia.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Perícias</h3>
                    <p>Os valores totais das demais perícias da criatura (além de Iniciativa, Percepção, Fortitude, Reflexos e Vontade). Caso a criatura não possua outras perícias, esta linha não aparecerá. Assim como personagens, criaturas podem usar perícias que não exijam treinamento. Nesse caso, seu valor na perícia será igual à metade de seu ND + o atributo-chave da perícia.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Equipamento e Tesouro</h3>
                    <p>Itens utilizados pela criatura, se houver. Após os itens, a categoria de tesouro da criatura. Algumas criaturas possuem recursos que podem ser extraídos de seu corpo. Extrair um recurso exige uma hora de trabalho e um teste de Sobrevivência ou de um Ofício relacionado ao recurso (CD 15 + ND da criatura). Em caso de falha, os recursos são estragados.</p>
                  </div>
                </div>
              </section>

              {/* Tipos de Criaturas */}
              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 drop-shadow-sm font-serif tracking-wider">Tipos de Criaturas</h2>
                <p className="mb-8">Todas as criaturas pertencem a um dos seguintes tipos, que também determinam habilidades inerentes.</p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Animais</h3>
                    <p className="mb-3">A maior parte dos animais reais (cães, gatos, cavalos…) também existe em Arton. No entanto, a influência de forças mágicas e deuses caprichosos também provocou o surgimento de bestas espantosas. De lagartos-trovão a insetos gigantes, Arton é habitada por um sem número de feras fantásticas — que, no entanto, ainda são consideradas animais normais. Mesmo que tenham sido criadas por forças mágicas no passado, hoje elas se reproduzem e fazem parte do mundo natural.</p>
                    <p>De modo geral, animais são seres vivos sem inteligência suficiente para desenvolver um idioma (Int –5 ou –4) e sem habilidades sobrenaturais. Um animal inteligente ou com poderes mágicos é considerado um monstro, mas muitos animais têm habilidades “naturais” como venenos e toxinas, apêndices adaptados (tentáculos, ferrões, chifres) ou órgãos especializados, como estômagos enormes capazes de engolir e digerir criaturas de seu tamanho.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Construtos</h3>
                    <p className="mb-3">Objetos animados ou criaturas fabricadas artificialmente, seja por magia, seja por ciência. Normalmente, construtos não possuem inteligência real; em vez disso, são programados para realizar apenas certas tarefas (como proteger um lugar).</p>
                    <p>Construtos possuem as seguintes habilidades: visão no escuro; imunidade a cansaço, efeitos de metabolismo e veneno; não recuperam PV por descanso, e efeitos de cura e a perícia Cura não funcionam com eles — mas a perícia Ofício (artesão) pode ser usada no lugar dela com os mesmos efeitos.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Espíritos</h3>
                    <p>Seres nativos de outros Planos — dimensões muito além de Arton. Têm uma profunda conexão com as energias primais da Criação, desde os próprios elementos até as forças primordiais do Bem, do Mal, da Ordem e do Caos, passando por aspectos dos próprios deuses. Espíritos geralmente possuem visão no escuro, mas isso não é uma característica inerente do tipo.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Humanoides</h3>
                    <p>Este grupo inclui membros de raças que lembram os humanos, com a mesma anatomia básica. Têm cabeça, tronco, dois braços e duas pernas. Ou quase isso. Todos os humanoides são inteligentes, com sua próprias culturas e sociedades. Todo humanoide possui uma raça (como humano, anão etc.) ou subtipo (como gigante etc.).</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Monstros</h3>
                    <p>Dos majestosos dragões aos aberrantes lefeu, monstros são criaturas de anatomia estranha ou com habilidades mágicas. Muitos têm origem ligada à Tormenta, mesmo que não tenham características lefeu — a própria existência da Tempestade Rubra causa o surgimento de seres aberrantes. Outros, como dragões e entes, são criações dos deuses.</p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-red-800 mb-3 tracking-wide">Mortos-Vivos</h3>
                    <p className="mb-3">Duvidosa “dádiva” oferecida por Tenebra e outros deuses, mortos-vivos são cadáveres animados por meio de energia negativa. A maior parte dos mortos-vivos perde toda e qualquer capacidade de pensar. Outros ficam insanos, presos a recordações passadas. Alguns poucos, porém, conservam — ou mesmo superam — a inteligência que tinham em vida.</p>
                    <p className="mb-3">Debates sobre a “moralidade” dos mortos-vivos são constantes. Muitas destas criaturas não são capazes de pensamento racional — portanto, não fazem escolhas boas ou más, só agem de acordo com as ordens de seus criadores. No entanto, quando não estão sob controle de alguém, sua tendência é atacar e devorar os vivos. Este é o caso de mortos-vivos encontrados em masmorras e lugares assombrados. Devotos de Tenebra e certos arcanistas, porém, argumentam que mortos-vivos deveriam ser empregados como soldados e força de trabalho, deixando os vivos livres para as artes e ciências.</p>
                    <p>Mortos-vivos possuem as seguintes habilidades: visão no escuro; imunidade a cansaço, efeitos de metabolismo, trevas e veneno; sofrem dano por efeitos mágicos de cura de luz (Von CD do efeito reduz à metade), e recuperam PV com dano de trevas.</p>
                  </div>
                </div>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6 drop-shadow-sm font-serif tracking-wider">Habilidades Gerais</h2>
                <p className="mb-8 font-medium">Estas são habilidades comuns a várias ameaças.</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Agarrar Aprimorado</h3>
                    <p>Se a criatura acertar um ataque com uma arma natural (especificada na habilidade), poderá fazer a manobra agarrar com esta arma como uma ação livre. Enquanto está usando a arma natural para agarrar, a criatura não pode usá-la para desferir outros ataques. A descrição da habilidade pode limitar o tipo ou tamanho de criatura que pode ser agarrada desta forma e também descrever efeitos adicionais.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Ataque Furtivo</h3>
                    <p>A criatura é capaz de desferir ataques furtivos, como um ladino. Uma vez por rodada, ela causa a quantidade de dano adicional indicada com ataques corpo a corpo, ou à distância em alcance curto, contra alvos desprevenidos ou que ela esteja flanqueando. Se o ataque furtivo da ameaça tiver qualquer efeito adicional, ele também será descrito aqui.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Bando</h3>
                    <p>A criatura é formada por um grupo de indivíduos, geralmente seres do mesmo tipo, embora possam existir bandos mistos. Se um ataque do bando exceder a Defesa do inimigo por 10 ou mais, ele causa o dobro do dano. Se um ataque do bando errar, ele ainda assim causa metade do dano. Um bando é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas tem vulnerabilidade a dano de área. Um personagem com o poder Trespassar que acerte a criatura pode usá-lo para fazer um ataque adicional contra ela (mas apenas uma vez por turno). Criaturas com esta habilidade possuem o ícone em sua linha de tipo.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Cura Acelerada</h3>
                    <p>No início de seu turno, a criatura recupera pontos de vida iguais ao seu valor de cura acelerada (por exemplo, 5 PV com cura acelerada 5). Se houver algum tipo de dano listado após uma barra, esta habilidade não recupera dano do tipo listado. Por exemplo, uma criatura com cura acelerada 10/ácido recupera 10 PV no início de seu turno, a menos que o dano tenha sido causado por ácido. Cura acelerada não cura perda de PV, apenas dano.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Derrubar</h3>
                    <p>Se a criatura acertar um ataque com uma arma (especificada na habilidade), poderá fazer a manobra derrubar com esta arma como uma ação livre. A descrição da habilidade pode limitar o tipo ou tamanho de criatura que pode ser derrubada desta forma e também descrever efeitos adicionais.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-3">Deslocamento Especial</h3>
                    <p className="mb-3">A criatura possui um ou mais modos de deslocamento especiais, listados após seu deslocamento básico. Se não houver um deslocamento básico, a criatura só pode usar os modos especiais listados.</p>
                    <ul className="space-y-4 pl-4 border-l-2 border-amber-900/20">
                      <li>
                        <strong className="text-amber-950">Escalada.</strong> Pode caminhar por superfícies verticais ou mesmo de cabeça para baixo. Isso segue as demais regras de movimento e é afetado pelas características da superfície (uma parede acidentada pode ser considerada terreno difícil, por exemplo). Uma criatura que esteja escalando e perca seu deslocamento de escalada ou a capacidade de realizar ações (como por ficar inconsciente ou paralisada) cai.
                      </li>
                      <li>
                        <strong className="text-amber-950">Escavação.</strong> Pode se mover sob terreno granular, como terra e areia (mas não rocha sólida). Após a passagem da criatura, o terreno atrás dela se fecha devido aos restos de material deixados para trás. Deslocamento de escavação pode ser afetado pelas características do solo: por exemplo, solo pedregoso pode ser considerado terreno difícil.
                      </li>
                      <li>
                        <strong className="text-amber-950">Natação.</strong> Pode se deslocar na água sem precisar fazer testes de Atletismo. Porém, assim como criaturas terrestres precisam de testes de Acrobacia e Atletismo em certas circunstâncias (como um terremoto), uma criatura com deslocamento de natação pode precisar desses testes em circunstâncias como correnteza forte ou redemoinho. A criatura pode respirar debaixo d’água, mas não fora dela, a menos que tenha outra forma de deslocamento. Ela pode falar e lançar magias debaixo d’água e não sofre as penalidades de –2 em testes de ataque e –5 em Percepção por estar submersa, nem a redução no dano de suas armas naturais. Para mais informações, veja “Personagens Submersos” em Tormenta20, p. 269.
                      </li>
                      <li>
                        <strong className="text-amber-950">Voo.</strong> Pode voar. Uma criatura com deslocamento de voo pode encerrar seu deslocamento em pleno ar. Uma criatura que esteja voando e perca seu deslocamento de voo ou a capacidade de realizar ações cai 150m por rodada. Uma criatura que esteja voando e sofra uma manobra derrubar bem-sucedida cai 1d6 x 1,5m antes de recuperar o voo.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Doença</h3>
                    <p>Um dos ataques da criatura transmite uma doença. Um personagem que sofra dano desse ataque deve passar num teste de Fortitude ou é contaminado. Uma vez que contraia a doença, o personagem não sofre efeitos adicionais por ser atingido novamente.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Engolir</h3>
                    <p>Se a ameaça começar seu turno agarrando uma criatura uma ou mais categorias de tamanho menor, poderá fazer um teste de agarrar contra ela. Se vencer, engole a criatura. Uma criatura engolida continua agarrada, fica cega, tem cobertura total contra efeitos vindos do lado de fora da ameaça (e vice-versa) e sofre o dano indicado no início de cada turno da ameaça. Ela pode escapar vencendo um teste de agarrar ou de Acrobacia contra o valor de agarrar da ameaça ou causando dano à ameaça até atingir o valor indicado (exceto quando descrito o contrário, o interior da ameaça tem todas as suas habilidades). Isso faz com que a ameaça regurgite todas as criaturas engolidas, que ficam caídas em espaços adjacentes desocupados na frente dela, e reinicia a contagem de dano. A menos que indicado o contrário, a ameaça só pode manter uma criatura engolida por vez.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Enxame</h3>
                    <p>A criatura é um aglomerado de seres menores que agem em conjunto. Pode entrar no espaço ocupado por um personagem e, no fim de seu turno, causa um efeito (geralmente dano) indicado em sua descrição a qualquer personagem em seu espaço, automaticamente. Um enxame é imune a manobras de combate e efeitos que afetam apenas uma criatura e não causam dano, mas tem vulnerabilidade a dano de área. Além disso, sofre apenas metade do dano de ataques com armas. Estar dentro de um enxame conta como condição ruim para lançar magias. Enxames possuem o ícone em sua linha de tipo.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Evasão</h3>
                    <p>Quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, a criatura não sofre dano algum se passar. Ela ainda sofre dano normal se falhar no teste de Reflexos. Esta habilidade exige liberdade de movimentos; a criatura não pode usá-la se estiver de armadura pesada ou imóvel.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Evasão Aprimorada</h3>
                    <p>Como Evasão, mas, se a criatura falhar no teste de Reflexos, sofre apenas metade do dano.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Familiar</h3>
                    <p>A criatura pode ser invocada como um familiar. Veja o poder Familiar.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Faro</h3>
                    <p>A criatura tem olfato apurado. Contra inimigos que não possa ver, ela não fica desprevenida e camuflagem total lhe causa apenas 20% de chance de falha em alcance curto.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Fortificação</h3>
                    <p>A criatura tem uma chance (indicada por uma porcentagem) de ignorar o dano adicional de acertos críticos e ataques furtivos. Jogue 1d100 sempre que a criatura sofrer um acerto crítico ou ataque furtivo. Se o resultado for igual ou menor que seu valor de fortificação, a criatura ignora o dano adicional do ataque, exatamente como se tivesse Imunidade a esse efeito.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Imunidade</h3>
                    <p>A criatura é imune a um tipo de efeito ou outro elemento (como um tipo de dano, uma condição ou uma habilidade). Ela não sofre nenhuma consequência direta daquilo contra a qual é imune. Ela ainda pode ser afetada indiretamente — por exemplo, uma criatura imune a efeitos mágicos ainda é afetada por terreno difícil criado por magias. Imunidade a acertos críticos e/ou ataques furtivos os transforma em acertos normais.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Incorpóreo</h3>
                    <p>A criatura não tem corpo físico. Só pode ser afetada por armas e efeitos mágicos ou outras criaturas incorpóreas. Ela pode atravessar objetos sólidos, mas não manipulá-los, e tem Força nula.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Magias</h3>
                    <p className="mb-3">A criatura lança magias. A descrição da habilidade indica o nível e classe de conjurador da criatura, a CD para resistir às suas magias e seu limite de PM (se nenhum limite for indicado, use o ND da criatura). A criatura segue todas as regras de magias, bem como as regras e limitações específicas de sua classe (por exemplo, se lança magias como um bruxo, ela possui um foco arcano e deve empunhá-lo). Considere que a criatura tem todos os componentes materiais para suas magias. Além disso, a habilidade também apresenta regras específicas das magias da criatura. Algumas criaturas possuem um tipo de conjurador (arcano ou divino) em vez de uma classe. Neste caso, suas magias são do tipo indicado, mas ela não sofre nenhuma limitação específica de classe.</p>
                    <p>Criaturas com a habilidade Magias possuem uma lista de magias. Esta lista é apresentada para conveniência do mestre e descreve as magias mais comumente conhecidas pela criatura, descritas na forma como ela costuma lançá-las. Ela pode lançar essas magias em outras versões (dentro de seu nível de conjurador) e, a critério do mestre, pode conhecer magias diferentes.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Maior que a morte</h3>
                    <p>Enquanto tiver pelo menos metade de seus PV, a criatura é imune a habilidades de “morte instantânea”. Isso inclui efeitos que reduzem seus PV a 0 ou menos instantaneamente (como Assassino Fantasmagórico), que aprisionam ou destroem sua alma ou corpo (como Roubar a Alma e Buraco Negro) e similares. O mestre tem a palavra final se um efeito é ou não de morte instantânea. A criatura ainda pode ser reduzida a 0 PV ou menos por dano ou perda de vida.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Natureza Vegetal</h3>
                    <p>A criatura é um vegetal senciente, ou possui traços vegetais em sua fisiologia. Ela é imune a atordoamento e metamorfose, mas é afetada especificamente por efeitos que afetem plantas monstruosas. No caso de magias sem teste de resistência, ela tem direito a um teste de Fortitude (CD da magia) para evitar o efeito.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Parceiro</h3>
                    <p>A criatura pode ser empregada como um parceiro.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Percepção às Cegas</h3>
                    <p>A criatura usa sentidos diferentes da visão (como radar, sonar, sensibilidade a vibrações etc.). Efeitos relacionados à visão, como escuridão e invisibilidade, não a afetam. Ela pode fazer testes de Percepção para observar usando estes sentidos, em vez da visão. Esta habilidade tem alcance curto (a menos que especificado em contrário).</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Redução de Dano (RD)</h3>
                    <p>A criatura ignora parte do dano que sofre. Por exemplo, se uma criatura com RD 5 sofre um ataque que causa 8 pontos de dano, perde apenas 3 PV. A redução pode ser contra um ou mais tipos de dano específicos. Assim, uma criatura com redução de fogo 10 ignora 10 pontos de dano de fogo, mas sofre dano de outros tipos normalmente. Caso haja um ou mais tipos de dano listados após uma barra, a RD não se aplica àqueles tipos. Por exemplo, uma criatura com RD 10/mágico ignora 10 pontos de dano de todos os ataques que sofrer — exceto dano causado por habilidades e armas mágicas.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Resistência a &lt;Efeito&gt;</h3>
                    <p>A criatura recebe um bônus em testes de resistência contra efeitos do tipo especificado. Por exemplo, resistência a magia +2 fornece +2 em testes de Fortitude, Reflexos e Vontade contra efeitos mágicos.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Sensibilidade a Luz</h3>
                    <p>A criatura é suscetível a luz. Quando exposta à luz do sol ou similar, ela fica ofuscada.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Visão na Penumbra</h3>
                    <p>A criatura enxerga em escuridão leve em alcance curto (exceto mágica). Ela ignora camuflagem leve por esse tipo de escuridão (veja Tormenta20, p. 238).</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Visão no Escuro</h3>
                    <p>A criatura enxerga em escuridão total em alcance curto (exceto mágica). Ela ignora camuflagem total por esse tipo de escuridão (veja Tormenta20, p. 238).</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-red-800 tracking-wide mb-2">Vulnerabilidade a &lt;Efeito&gt;</h3>
                    <p>A criatura sofre +50% de dano ou de perda de vida (conforme apropriado) de um tipo ou característica específicos. Por exemplo, se uma criatura com vulnerabilidade a frio sofre um ataque que causa 15 pontos de dano de frio, ela sofre 22 pontos de dano (15 x 1,5 = 22).</p>
                  </div>

                </div>
              </section>

    <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
      <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Aspectos e Avatares</h3>
      <div className="space-y-4">
          <p>Dispondo de tantos devotos em todos os pontos de Arton, pode parecer estranho que os deuses necessitem de ainda mais agentes para cuidar de seus assuntos. A verdade é que nem todas as tarefas divinas cabem a servos mortais — algumas, por demandar muito, e outras, pouco.</p>
          <p>As mais poderosas criaturas a serviço dos deuses são seus avatares. Um avatar é a versão encarnada de uma divindade, uma parte de sua essência. Equiparamse, em poder, aos maiores heróis de Arton. Mas a manifestação de um avatar é evento raro, reservado apenas a situações extremas — porque um deus investe neles parte significativa de sua força vital, e sua eventual perda pode enfraquecer a própria divindade. A queda de Glórienn e a derrota de seu avatar nas mãos de Thwor Ironfist não foram eventos sem ligação.</p>
          <p>Quando um servo mortal não basta e a convocação de um avatar seria imprudente, entram em cena os aspectos dos deuses. Assim como um avatar, um aspecto é a encarnação de sua divindade, mas usando uma quantidade de poder muito menor. Em geral são invocados por curtos períodos para realizar tarefas simples, porém importantes — tipicamente lutar. Um aspecto pode surgir, por exemplo, atendendo à súplica de um clérigo durante um combate atroz.</p>
          <p>Embora alguns estudiosos os descrevam como “avatares menores”, isso não é totalmente correto. Um aspecto dos deuses é, em quase todos os sentidos, uma criatura mortal de existência temporária. Tem a mesma aparência da divindade original (ou uma de suas aparências), mas pode apresentar pequenas diferenças; ou estar totalmente disfarçado, conforme o propósito da missão. Ao contrário de avatares, um deus pode manifestar quantos aspectos quiser (mas é raro designar mais de um para cada tarefa).</p>
          <p>Aspectos normalmente têm tamanho humano, embora alguns sejam maiores. Usam vestes e equipamentos mundanos (mas frequentemente de qualidade superior) que desaparecem quando afastados do aspecto por mais de um dia.</p>
          <p>Aspectos podem se manifestar naturalmente durante eventos grandiosos — por exemplo, uma batalha entre exércitos de devotos —, ou então ser invocados a partir de rituais complexos. Diferente de outras criaturas conjuradas, um aspecto não obedece necessariamente a seu invocador; ele o faz apenas se assim quiser, agindo conforme seus próprios objetivos.</p>
          <p>A personalidade dos aspectos é um tópico muito intrigante. Eles pensam e agem como seus deuses originais, mas são mais limitados em pensamento, e muito exagerados em comportamento — chegam a ser quase caricaturas. Um aspecto de Arsenal pode se portar como um guerreiro feroz e descuidado, sem a inteligência estratégica do Deus da Guerra. Um aspecto de Khalmyr pode ser um anão paladino de mente estreita, atacando qualquer monstro à primeira vista, e assim por diante. Talvez por sua existência tão breve, aspectos são muito afoitos, impetuosos, ansiosos para agir. E podem, sim, cometer erros.</p>
          <p><strong className="text-red-800 font-bold">Outros Aspectos. </strong>Os aspectos apresentados aqui, e também em outros grupos, são apenas aqueles mais comumente manifestados em situações de batalha. Uma mesma divindade pode ter aspectos muito diferentes. O mestre é livre para construir quaisquer NPCs ou criaturas que julgar interessantes, conforme a personalidade e os objetivos de cada deus.</p>
      </div>
    </section>

    <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
      <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Invocando Aspectos</h3>
      <div className="space-y-4">
          <p>Sob certas condições, é possível que um devoto consiga invocar um aspecto na esperança de que ele possa auxiliá-lo. Essa é uma tarefa complexa, que exige habilidade e recursos, e nem sempre tem o resultado esperado.</p>
          <p>Invocar um aspecto é um ritual especial, que só pode ser realizado por um devoto da divindade em questão que seja treinado em Religião e tenha o poder Celebrar Ritual. Para realizar o ritual, o celebrante deve gastar 1 hora, 10 PM e T$ 3.000 em materiais litúrgicos apropriados à divindade. Então deve passar em um teste de Religião (CD 25 + ND do aspecto invocado). Ao executar o ritual, o celebrante pode empregar até três auxiliares, que não precisam ser devotos. Cada auxiliar faz um teste de Religião para ajudar (Tormenta20, p. 221) o teste do celebrante e, se for devoto da divindade em questão, reduz o custo do ritual em –1 PM.</p>
          <p>Em um ritual bem-sucedido, o aspecto é invocado. Sua atitude inicial depende da divindade que ele representa e fica a critério do mestre. Da mesma forma, o tempo de permanência do aspecto depende da capacidade do celebrante em persuadilo a ajudar.</p>
          <p>Um ritual falho não causa maiores problemas, além do gasto dos PM e dos materiais. Entretanto, em um resultado 1 natural no teste de Religião, o ritual foi um desastre: o celebrante pode inadvertidamente ter ofendido o seu deus ou invocado outro aspecto (que será hostil ao celebrante e a seus aliados).</p>
          <p>A critério do mestre, um deus pode exigir custos específicos para o ritual (que serão de conhecimento do celebrante). Deuses malignos, em especial, podem exigir sacrifícios em troca de sua atenção.</p>
      </div>
    </section>

    <section className="border-t-2 border-amber-900/20 pt-8 first:border-0 first:pt-0">
      <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 tracking-wide">Aspectos e Avatares</h3>
      <div className="space-y-4">
          <p>Cada deus do Panteão tem apenas um avatar — uma forma poderosa, que a divindade utiliza para descer ao mundo material e lidar com grandes problemas e crises. Glórienn veio em forma de avatar para enfrentar Thwor Khoshkothruk, Megalokk enviou um avatar (o dragão Morte Branca) para devastar o Reino das Torres em Moreania. O avatar pode surgir com diferentes formas físicas, mas suas capacidades e poder são constantes. O avatar é uma materialização de todas as facetas do deus. Essencialmente, uma versão muito menos poderosa (mas ainda magnífica) da própria divindade.</p>
          <p>Já aspectos são partes de deuses. Alguns podem ser versões da representação típica do deus — Khalmyr enviou um aspecto para guiar a Paladina em Nova Malpetrim. Outros podem ter formas totalmente diversas: Khalmyr pode surgir na forma de um cubo flutuando no ar, de um juiz com um púlpito, de pura luz radiante... Outros ainda podem ou não lembrar fisicamente as representações da divindade, mas são a encarnação de apenas uma de suas facetas. Por exemplo, quando Khalmyr se manifesta na forma de um cubo, ele é apenas ordem e simetria, não justiça ou bondade.</p>
          <p>Aspectos podem ter autonomia e consciência plenas (às vezes até parecendo diferir do deus), ou podem ser conceitos materializados, incapazes de tomar decisões ou mesmo agir fora de seu escopo. Diz-se que Keenn, o antigo Deus da Guerra, surgiu na forma de um aspecto para uma clériga na estrada. O aspecto era um pistoleiro que estava lá apenas para cobrar de sua devota um preço alto — a perda de um olho — pelas façanhas que ela pretendia realizar. O aspecto tinha seu próprio nome e comportamento, mas não podia fazer nada exceto encontrá-la na estrada e arrancar seu olho.</p>
          <p>Por isso, embora avatares sejam sempre poderosos, aspectos variam muito em poder. Um mero mascate pode ser um aspecto de Nimb; um pássaro flamejante capaz de imensa destruição pode ser um aspecto de Thyatis. Tudo depende do propósito do aspecto e da(s) faceta(s) do deus que ele personifica.</p>
          <p>A única constante é: quando o aspecto de um deus está presente, coisas extraordinárias tendem a acontecer...</p>
      </div>
    </section>

    

  </div>
</div>
        </div>

        {/* Filtros e Busca (Atualizado para grid) */}
        <div 
          id="ameacas-grid" 
          className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full scroll-mt-24 font-serif"
        >
          <label className="block text-sm font-bold text-amber-950/70 mb-4 uppercase tracking-widest">
            Filtros e Busca
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input de Texto */}
            <div className="relative">
                <input
                  type="text"
                  placeholder="Nome, tipo, tamanho ou descrição..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                  🔍
              </div>
            </div>

            {/* Select de ND */}
            <div className="relative">
              <select
                value={selectedND}
                onChange={(e) => setSelectedND(e.target.value)}
                className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm appearance-none cursor-pointer"
              >
                <option value="">Todos os Níveis de Desafio</option>
                {uniqueNDs.map((nd) => (
                  <option key={nd} value={nd}>
                    ND {nd}
                  </option>
                ))}
              </select>
              {/* Setinha customizada para o Select */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none text-sm">
                  ▼
              </div>
            </div>

            {/* Select de Tema */}
              <div className="relative">
                <select
                  value={selectedRegiao}
                  onChange={(e) => setSelectedRegiao(e.target.value)}
                  className="w-full px-5 py-3 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm appearance-none cursor-pointer"
                >
                  <option value="">Todos os Temas</option>
                  {uniqueRegioes.map((regiao) => (
                    <option key={regiao} value={regiao}>
                      {regiao}
                    </option>
                  ))}
                </select>
                {/* Setinha customizada para o Select */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 pointer-events-none text-sm">
                    ▼
                </div>
              </div>
            </div>
          </div>

        {/* Grid de Ameaças */}
        <h2 className="text-2xl font-bold text-red-800 mb-6 font-serif border-b-2 border-amber-900/20 pb-2 tracking-wide">
          {filteredThreats.length} Ameaças Encontradas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full">
          {filteredThreats.map((threat) => (
            <div
              key={threat.id}
              id={createUrlSafeId(threat.id)}
              onClick={() => openModal(threat)}
              className="group relative overflow-hidden rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] cursor-pointer p-5 flex flex-col justify-between min-h-[190px] scroll-mt-24 font-serif"
            >
              
              {/* --- 1. BOTÃO DE COPIAR NO TOPO DIREITO --- */}
              <button 
                onClick={(e) => copyLink(threat, e)}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-amber-900/10 hover:bg-amber-900/20 rounded-full text-amber-950/70 hover:text-red-800 z-30"
                title="Copiar link direto para esta ameaça"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>

              {/* --- 2. BADGE DE ND NO CANTO INFERIOR DIREITO --- */}
              <div className="absolute bottom-3 right-3 z-20 shrink-0 flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-[#fbf5e6]/90 backdrop-blur-sm border-2 border-amber-900/20 shadow-sm group-hover:border-red-800/50 transition-colors">
                <span className="text-[0.6rem] uppercase text-amber-950/60 font-bold tracking-wider">ND</span>
                <span className="text-xl font-black text-red-800 leading-none font-sans">{threat.nd}</span>
              </div>

              {/* --- 3. IMAGEM E MARCA D'ÁGUA --- */}
              <div className="absolute right-0 top-0 h-full w-full opacity-80 pointer-events-none select-none flex justify-end overflow-hidden z-0">
                {threat.image ? (
                  <>
                    {/* Gradiente atualizado para a cor exata do card (#e8dac1) */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#e8dac1] via-[#e8dac1]/60 to-transparent" />
                    <img
                      src={threat.image}
                      alt=""
                      className="h-full w-[60%] object-cover object-top drop-shadow-sm"
                    />
                  </>
                ) : (
                  /* Alternativa para cards sem imagem */
                  <div className="absolute inset-0 flex items-center justify-end pr-6 opacity-10">
                    <span className="text-[12rem] font-black italic text-amber-950 leading-none translate-y-4">
                      {threat.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* --- 4. CONTEÚDO DE TEXTO --- */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-none">
                
                {/* TOPO: Adicionado pr-10 para o texto não ficar embaixo do botão de copiar */}
                <div className="pr-10"> 
                  <h3 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors leading-tight drop-shadow-sm line-clamp-2 tracking-wide">
                    {threat.name}
                  </h3>
                </div>

                {/* RODAPÉ: Adicionado pr-14 para o texto não ficar embaixo do escudo de ND */}
                <div className="mt-6 pr-14">
                  <div className="w-12 h-[2px] bg-red-800/60 mb-3 group-hover:w-1/3 transition-all duration-500"></div>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 shadow-sm">
                      {threat.tipo}
                    </span>
                    
                    {threat.tamanho && (
                      <div className="flex items-center gap-1 text-xs text-amber-950/70 font-bold">
                        <span className="w-1 h-1 rounded-full bg-amber-900/40"></span>
                        <span>{threat.tamanho}</span>
                      </div>
                    )}

                    {threat.papel && (
                      <div className="flex items-center gap-1 text-xs font-bold">
                        <span className="w-1 h-1 rounded-full bg-amber-900/40"></span>
                        <span className="text-red-800/90 uppercase tracking-widest text-[10px]">
                          {threat.papel}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 text-[10px] text-amber-950/60 group-hover:text-red-800 transition-colors font-bold">
                    <span className="uppercase tracking-widest truncate">
                    {threat.origin || "Desconhecida"}
                    </span>
                  </div>
                </div>

              </div>
              
              {/* Detalhes nos cantos atualizados para borda 2px e arredondamento suave */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-amber-900/40 opacity-0 group-hover:opacity-100 group-hover:border-red-800/60 transition-all rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-amber-900/40 opacity-0 group-hover:opacity-100 group-hover:border-red-800/60 transition-all rounded-br-lg"></div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredThreats.length === 0 && (
        <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center">
          <p className="text-amber-950/70 text-lg italic tracking-wide">
            Nenhuma Ameaça encontrada nos registros.
          </p>
        </div>
      )}
      </main>

      {/* Modal Detalhado */}
      {selectedThreat && (
        <div
          className="fixed inset-0 bg-[#2a1810]/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto"
          onClick={closeModal}
        >
          {/* Fundo do modal padronizado com a cor mais clara do pergaminho, borda dupla e font-serif herdada */}
          <div
            className="bg-[#fbf5e6] border-4 border-double border-amber-900/40 rounded-xl shadow-[0_0_60px_rgba(69,26,3,0.3)] max-w-5xl w-full my-4 md:my-8 relative custom-scrollbar bg-[url('/noise.png')] font-serif text-amber-950/85"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="relative p-5 md:p-8 border-b-2 border-amber-900/20 bg-[#e8dac1]/50 rounded-t-xl">
              <div className="absolute top-4 right-4 md:top-6 md:right-6 flex gap-2 z-10">
                <button 
                  onClick={(e) => copyLink(selectedThreat, e)}
                  className="p-2 bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:text-red-800 rounded-full text-amber-950/70 transition-colors flex items-center shadow-sm"
                  title="Copiar link direto para esta ameaça"
                >
                  {copiedId === selectedThreat.id ? (
                    <span className="text-xs font-bold px-2 py-0.5">✓ Copiado</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  )}
                </button>
                <button 
                  onClick={closeModal}
                  className="p-2 bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:text-red-800 rounded-full text-amber-950/70 transition-colors flex items-center justify-center shadow-sm"
                  title="Fechar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-red-800 mb-2 md:mb-3 tracking-wider pr-20 md:pr-24 drop-shadow-sm">
                {selectedThreat.name}
              </h2>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="text-amber-950/70 bg-[#fbf5e6] px-2 py-1 rounded border border-amber-900/20 shadow-sm">{selectedThreat.tipo}</span>
                <span className="text-amber-950/80">{selectedThreat.tamanho}</span>
                <span className="text-amber-900/40">•</span>
                <span className="text-red-800">{selectedThreat.papel}</span>
                <span className="text-amber-900/40">•</span>
                <span className="text-amber-950 font-black">ND {selectedThreat.nd}</span>
                
                <span className="text-amber-900/40 hidden sm:inline">•</span>
                <span className="text-amber-950/60 w-full sm:w-auto mt-1 sm:mt-0">Origem: {selectedThreat.origin || "Desconhecida"}</span>
                
                <span className="text-amber-900/40 hidden sm:inline">•</span>
                <span className="text-amber-950/60">Tema: {selectedThreat.tema || "Desconhecido"}</span>
              </div>
            </div>

            {/* Conteúdo Scrollável */}
            <div className="p-5 md:p-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
              
              {/* Descrição */}
              <section className="mb-8">
                <p className="text-amber-950/85 leading-relaxed whitespace-pre-wrap font-medium text-base md:text-lg text-left md:text-justify italic border-l-4 border-amber-900/30 pl-4">
                  {selectedThreat.description}
                </p>
              </section>

              {/* Estatísticas (Iniciativa, Defesa, PV, PM) */}
              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide">Estatísticas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 shadow-sm text-center">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">INICIATIVA</div>
                    <div className="text-2xl md:text-3xl font-bold text-amber-950">
                      {selectedThreat.iniciativa >= 0 ? "+" : ""}{selectedThreat.iniciativa}
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 shadow-sm text-center">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">PERCEPÇÃO</div>
                    <div className="text-2xl md:text-3xl font-bold text-amber-950">
                      {selectedThreat.percepcao >= 0 ? "+" : ""}{selectedThreat.percepcao}
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 shadow-sm text-center">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">DEFESA</div>
                    <div className="text-2xl md:text-3xl font-bold text-amber-950">{selectedThreat.defesa}</div>
                  </div>
                  {/* PV destacado sem perder a textura de pergaminho */}
                  <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-red-800/30 text-center shadow-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-800/5 pointer-events-none"></div>
                    <div className="text-[10px] md:text-xs text-red-800/70 font-bold uppercase tracking-widest mb-1 relative z-10">PV</div>
                    <div className="text-2xl md:text-3xl font-bold text-red-800 relative z-10">{selectedThreat.pv}</div>
                  </div>
                </div>
              </section>

              {/* Resistências (Fort, Ref, Von) */}
              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide">Resistências</h3>
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
                  <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 text-center shadow-sm">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">FORT</div>
                    <div className="text-xl md:text-2xl font-bold text-amber-950">
                      {selectedThreat.fort >= 0 ? "+" : ""}{selectedThreat.fort}
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 text-center shadow-sm">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">REF</div>
                    <div className="text-xl md:text-2xl font-bold text-amber-950">
                      {selectedThreat.ref >= 0 ? "+" : ""}{selectedThreat.ref}
                    </div>
                  </div>
                  <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 text-center shadow-sm">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">VON</div>
                    <div className="text-xl md:text-2xl font-bold text-amber-950">
                      {selectedThreat.von >= 0 ? "+" : ""}{selectedThreat.von}
                    </div>
                  </div>
                </div>
                {selectedThreat.resistenciaDano && (
                  <div className="p-4 bg-[#e8dac1]/50 rounded-xl border-2 border-amber-900/20 shadow-sm">
                    <span className="text-red-800 font-bold text-sm md:text-base mr-2 uppercase tracking-wide">Vantagens/RD: </span>
                    <span className="text-amber-950/85 text-sm md:text-base font-medium">{selectedThreat.resistenciaDano}</span>
                  </div>
                )}
              </section>

              {/* Movimento e Mana */}
              <section className="mb-8">
                <div className={`grid gap-3 md:gap-4 ${selectedThreat.pm != null ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 shadow-sm flex flex-col items-center justify-center">
                    <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">DESLOCAMENTO</div>
                    <div className="text-amber-950 font-bold text-lg">{selectedThreat.deslocamento}</div>
                  </div>
                  {selectedThreat.pm != null && (
                    <div className="p-3 md:p-4 bg-[#fbf5e6] rounded-xl border-2 border-blue-800/30 shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-blue-800/5 pointer-events-none"></div>
                      <div className="text-[10px] md:text-xs text-blue-800/70 font-bold uppercase tracking-widest mb-1 relative z-10">PM</div>
                      <div className="text-blue-800 font-bold text-xl relative z-10">{selectedThreat.pm}</div>
                    </div>
                  )}
                </div>
              </section>

              {/* Ataques */}
              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide">Ataques</h3>
                {selectedThreat.ataqueCorpoACorpo && (
                  <div className="p-4 md:p-5 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 mb-3 shadow-sm">
                    <div className="text-[10px] md:text-xs text-red-800/80 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> CORPO A CORPO
                    </div>
                    <div className="text-amber-950/85 font-medium text-base md:text-lg">{selectedThreat.ataqueCorpoACorpo}</div>
                  </div>
                )}
                {selectedThreat.ataqueDistancia && (
                  <div className="p-4 md:p-5 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 shadow-sm">
                    <div className="text-[10px] md:text-xs text-red-800/80 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-800 rotate-45"></span> À DISTÂNCIA
                    </div>
                    <div className="text-amber-950/85 font-medium text-base md:text-lg">{selectedThreat.ataqueDistancia}</div>
                  </div>
                )}
              </section>

              {/* Habilidades Especiais */}
              {selectedThreat.habilidades.length > 0 && (
                <section className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide">Habilidades</h3>
                  <div className="space-y-3">
                    {selectedThreat.habilidades.map((hab, index) => (
                      <div key={index} className="p-4 md:p-5 bg-[#fbf5e6] rounded-xl border-2 border-amber-900/20 shadow-sm">
                        <p className="text-amber-950/85 text-base md:text-lg font-medium whitespace-pre-line leading-relaxed text-left md:text-justify">{hab}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Atributos Básicos (GRID DE 6) */}
              <section className="mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-4 border-b-2 border-amber-900/20 pb-2 tracking-wide">Atributos</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                  {[
                    { label: "FOR", val: selectedThreat.for },
                    { label: "DES", val: selectedThreat.des },
                    { label: "CON", val: selectedThreat.con },
                    { label: "INT", val: selectedThreat.int },
                    { label: "SAB", val: selectedThreat.sab },
                    { label: "CAR", val: selectedThreat.car },
                  ].map((attr) => (
                    <div key={attr.label} className="p-3 bg-[#e8dac1] rounded-xl border-2 border-amber-900/20 text-center shadow-sm">
                      <div className="text-[10px] md:text-xs text-amber-950/60 font-bold uppercase tracking-widest mb-1">{attr.label}</div>
                      <div className="text-xl md:text-2xl font-bold text-amber-950">{attr.val}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Perícias e Equipamentos */}
              <section className="mb-8">
                <h3 className="text-lg md:text-xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/20 pb-2">Perícias & Equipamento</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedThreat.pericias.map((pericia, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#fbf5e6] rounded-lg border border-amber-900/20 text-amber-950/80 text-sm md:text-base font-bold shadow-sm">
                      {pericia}
                    </span>
                  ))}
                </div>
                {selectedThreat.equipamentos.length > 0 && (
                  <div className="space-y-2 mt-2 bg-[#e8dac1]/50 p-4 rounded-xl border-2 border-amber-900/20">
                    {selectedThreat.equipamentos.map((equip, idx) => (
                      <div key={idx} className="text-base text-amber-950/70 italic font-medium flex items-start gap-2">
                        <span className="text-amber-900/40 mt-1">•</span> {equip}
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Tesouro */}
              <section className="p-5 md:p-6 mb-8 bg-[#e8dac1] border-2 border-amber-900/20 rounded-xl shadow-inner">
                <h3 className="text-xl md:text-2xl font-bold text-red-800 mb-3 flex items-center gap-2 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Tesouro
                </h3>
                <p className="text-amber-950/85 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
                  {renderFormattedText(selectedThreat.tesouro)}
                </p>
              </section>

              {/* IMAGEM (NO FINAL) */}
              {selectedThreat.image && (
                <section className="mt-8 pt-8 border-t-2 border-amber-900/20">
                  <h3 className="text-amber-950/50 text-xs md:text-sm uppercase tracking-widest mb-6 text-center font-bold">
                    Registro Visual
                  </h3>
                  <div className="relative w-full rounded-xl overflow-hidden border-2 border-amber-900/30 shadow-md bg-[#e8dac1] max-w-2xl mx-auto">
                    <img
                      src={selectedThreat.image}
                      alt={selectedThreat.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#e8dac1]/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </section>
              )}

            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}