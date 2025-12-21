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

      {/* Header */}
      <header className="p-6 border-b border-lime-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 via-lime-200 to-green-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            a-Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-cyan-400 hover:text-lime-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">Parceiros</span>
        </div>
      </header>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 mb-4">Parceiros</h1>
        <p>Parceiros são NPCs que se aventuram com o grupo. Podem ser adquiridos através de habilidades, contratados ou comprados (no caso de animais ou construtos) ou mesmo recebidos como recompensa.</p>

        <h3 className="text-1xl font-bold text-green-400 mb-2">Usando Parceiros</h3>
        <p>Em Tormenta20, o foco da história são os personagens — eles são os astros, os protagonistas, aqueles que resolvem os problemas. NPCs devem ser no máximo coadjuvantes. Assim, evite parceiros que participem da ação o tempo todo. A menos que sua campanha seja justamente sobre recrutar parceiros, eles devem ser usados apenas em situações especiais; a mais clássica é quando heróis estão perto de enfrentar um vilão poderoso, que não podem derrotar sozinhos. Antes do confronto final, recrutam parceiros para equilibrar a batalha.</p>
        <p>Parceiros podem ser recompensas por boas ideias ou missões completadas. O grupo fez amizade com um guerreiro local? Quando um monstro atacar a cidade, talvez ele apareça para dar uma mãozinha. O grupo salvou um barão? O nobre pode enviar uma cavaleira para acompanhá-los na próxima aventura.</p>
        <p>Por outro lado, evite usar parceiros apenas como bônus. Parceiros devem ter personalidade e fazer parte da história, caso contrário, serão reduzidos a um ajuste na ficha! O mestre não precisa interpretar o parceiro a cada momento — ele é um coadjuvante, não precisa de tanto “tempo de tela”. Mas, às vezes, deve dizer alguma coisa. Parceiros podem ser interpretados pelo próprio jogador que os escolheu, de acordo com a preferência do grupo.</p>
        <p>Parceiros funcionam melhor se usados com parcimônia, para serem algo especial. Mesmo que o parceiro seja amigo do grupo, arranje motivos para que ele não possa se aventurar sempre. O guerreiro precisa proteger a cidade, afinal de contas!</p>

        <h3 className="text-1xl font-bold text-green-400 mb-2">Regras de Parceiros</h3>
        <p>Parceiros não atuam como NPCs completos. Eles não têm um turno e não realizam ações. Em vez disso, cada parceiro ajuda um personagem, fornecendo um bônus. Esse bônus depende do tipo e nível de poder do parceiro (iniciante, veterano ou mestre). Essa classificação é abstrata, não indicando classe e nível do NPC, e fica a cargo do mestre. Parceiros fornecidos por habilidades só mudam de poder (de iniciante para veterano, por exemplo), quando instruído pela habilidade.</p>
        <p>Cada parceiro pode ajudar apenas um personagem por vez. No início do seu turno, você pode gastar uma ação de movimento para passar um parceiro para outro personagem em alcance curto até o fim da cena (para fazer isso com um animal, você precisa ser treinado em Adestramento).</p>
        <p>Personagens iniciantes (até o 4º nível) podem ter um parceiro, personagens veteranos e campeões (do 5º ao 16º nível) podem ter até dois e personagens lenda (do 17º nível em diante) podem ter até três parceiros. Se um efeito fornecer um parceiro temporário além do seu limite, você não se beneficiará dele — mas pode passá-lo para outro personagem como visto acima.</p>
        <p>Parceiros não podem ser alvos de ações hostis. Porém, em situações dramáticas, o mestre pode decidir que algo acontece com ele. Se um personagem é capturado por orcs, o cavalo dele pode acabar a serviço dos humanoides — ou ser devorado!</p>

        <h3 className="text-1xl font-bold text-green-400 mb-2">Tipos de Parceiros</h3>
        <p>Estes são exemplos de parceiros. O mestre pode criar outros ou misturar benefícios: por exemplo, um cavaleiro da Luz mestre pode fornecer +2 em testes de ataque e +2 na Defesa (os benefícios de um combatente veterano e um guardião iniciante).</p>
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

      <div className="mb-12">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 mb-4">Por Que Parceiros?</h1>
        <p>Parceiros são mais indicados que NPCs com fichas porque aceleram o jogo e mantêm o foco nos personagens. Se cada parceiro tivesse suas próprias ações, o jogo ficaria lento. Além disso, se agisse independentemente, um parceiro poderia acabar rolando o ataque que mata o vilão, frustrando os jogadores. Com parceiros que oferecem bônus, quem efetivamente age é sempre o jogador.</p>
      </div>
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-green-400 mb-4">Variante: Parceiros Vulneráveis</h1>

        <div>
        <p>Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
        </div>
    </main>
  );
}