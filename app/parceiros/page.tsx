"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { partners } from "@/data/partners";
import { Partner } from "@/types/partner";

// --- Componentes Auxiliares ---

// Componente Card de Parceiro (Estilo Pergaminho)
const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="p-5 rounded-xl bg-[#dcc8a9] border-2 border-amber-900/30 hover:border-emerald-800/50 shadow-md flex flex-col transition-all duration-300 hover:-translate-y-1">
      {/* Header */}
      <div className="mb-3 pb-2 border-b-2 border-amber-900/20">
        <h3 className="text-xl font-bold text-emerald-900 font-serif">{partner.name}</h3>
        <p className="text-sm text-amber-900/80 italic font-serif mt-1">{partner.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-amber-950 space-y-3 flex-grow font-serif">
        <div>
          <p className="font-bold text-emerald-800 uppercase text-xs tracking-wider mb-0.5">Iniciante:</p>
          <p>{partner.benefits.iniciante}</p>
        </div>
        <div>
          <p className="font-bold text-emerald-800 uppercase text-xs tracking-wider mb-0.5">Veterano:</p>
          <p>{partner.benefits.veterano}</p>
        </div>
        <div>
          <p className="font-bold text-emerald-800 uppercase text-xs tracking-wider mb-0.5">Mestre:</p>
          <p>{partner.benefits.mestre}</p>
        </div>
      </div>

      {/* Origem */}
      <div className="mt-4 pt-2 border-t-2 border-amber-900/20 text-right">
        <span className="text-xs text-emerald-800 italic font-serif uppercase tracking-wider">{partner.origin}</span>
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
        partner.origin.toLowerCase().includes(lowerCaseSearch) ||
        partner.description.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.iniciante.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.veterano.toLowerCase().includes(lowerCaseSearch) ||
        partner.benefits.mestre.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Ordenação Alfabética
    return filtered.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }, [searchTerm]);

    const RulesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded hover:border-amber-700/80 transition-all group shadow-sm hover:shadow-[0_4px_20px_rgba(69,26,3,0.1)]"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl opacity-70">📜</span>
          <div className="text-left">
            <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors">
              Regras de Parceiros
            </h2>
            <p className="text-sm text-amber-900/60 font-serif italic font-bold">
              Clique para mais informações sobre os Parceiros.
            </p>
          </div>
        </div>
        <span className={`text-amber-900/40 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[50000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 bg-[#fbf5e6]/80 border-x-2 border-b-2 border-amber-900/20 rounded-b text-amber-900/90 font-serif leading-relaxed space-y-6 text-lg">
          
          {/* Introdução do Texto */}
            <div className="space-y-6 text-amber-900/90 font-medium">

            <h3 className="text-2xl font-bold text-emerald-900 pt-4 border-t-2 border-amber-900/20 pb-2">Usando Parceiros</h3>
                <p>Em Tormenta20, o foco da história são os personagens — eles são os astros, os protagonistas, aqueles que resolvem os problemas. NPCs devem ser no máximo coadjuvantes. Assim, evite parceiros que participem da ação o tempo todo. A menos que sua campanha seja justamente sobre recrutar parceiros, eles devem ser usados apenas em situações especiais; a mais clássica é quando heróis estão perto de enfrentar um vilão poderoso, que não podem derrotar sozinhos. Antes do confronto final, recrutam parceiros para equilibrar a batalha.</p>
                <p>Parceiros podem ser recompensas por boas ideias ou missões completadas. O grupo fez amizade com um guerreiro local? Quando um monstro atacar a cidade, talvez ele apareça para dar uma mãozinha. O grupo salvou um barão? O nobre pode enviar uma cavaleira para acompanhá-los na próxima aventura.</p>
                <p>Por outro lado, evite usar parceiros apenas como bônus. Parceiros devem ter personalidade e fazer parte da história, caso contrário, serão reduzidos a um ajuste na ficha! O mestre não precisa interpretar o parceiro a cada momento — ele é um coadjuvante, não precisa de tanto “tempo de tela”. Mas, às vezes, deve dizer alguma coisa. Parceiros podem ser interpretados pelo próprio jogador que os escolheu, de acordo com a preferência do grupo.</p>
                <p>Parceiros funcionam melhor se usados com parcimônia, para serem algo especial. Mesmo que o parceiro seja amigo do grupo, arranje motivos para que ele não possa se aventurar sempre. O guerreiro precisa proteger a cidade, afinal de contas!</p>

                <h3 className="text-2xl font-bold text-emerald-900 border-t-2 pt-4 border-amber-900/20 pb-2">Regras de Parceiros</h3>
                <p>Parceiros não atuam como NPCs completos. Eles não têm um turno e não realizam ações. Em vez disso, cada parceiro ajuda um personagem, fornecendo um bônus. Esse bônus depende do tipo e nível de poder do parceiro (iniciante, veterano ou mestre). Essa classificação é abstrata, não indicando classe e nível do NPC, e fica a cargo do mestre. Parceiros fornecidos por habilidades só mudam de poder (de iniciante para veterano, por exemplo), quando instruído pela habilidade.</p>
                <p>Cada parceiro pode ajudar apenas um personagem por vez. No início do seu turno, você pode gastar uma ação de movimento para passar um parceiro para outro personagem em alcance curto até o fim da cena (para fazer isso com um animal, você precisa ser treinado em Adestramento).</p>
                <p>Personagens iniciantes (até o 4º nível) podem ter um parceiro, personagens veteranos e campeões (do 5º ao 16º nível) podem ter até dois e personagens lenda (do 17º nível em diante) podem ter até três parceiros. Se um efeito fornecer um parceiro temporário além do seu limite, você não se beneficiará dele — mas pode passá-lo para outro personagem como visto acima.</p>
                <p>Parceiros não podem ser alvos de ações hostis. Porém, em situações dramáticas, o mestre pode decidir que algo acontece com ele. Se um personagem é capturado por orcs, o cavalo dele pode acabar a serviço dos humanoides — ou ser devorado!</p>

                <h3 className="text-2xl font-bold text-emerald-900 pt-4 border-t-2 border-amber-900/20 pb-2">Tipos de Parceiros</h3>
                <p>Estes são exemplos de parceiros. O mestre pode criar outros ou misturar benefícios: por exemplo, um cavaleiro da Luz mestre pode fornecer +2 em testes de ataque e +2 na Defesa (os benefícios de um combatente veterano e um guardião iniciante).</p>

                <div>
                <h1 className="text-2xl font-bold text-emerald-900 pt-4 border-t-2 border-amber-900/20 pb-2">
                Por Que Parceiros?
                </h1>
                <p>Parceiros são mais indicados que NPCs com fichas porque aceleram o jogo e mantêm o foco nos personagens. Se cada parceiro tivesse suas próprias ações, o jogo ficaria lento. Além disso, se agisse independentemente, um parceiro poderia acabar rolando o ataque que mata o vilão, frustrando os jogadores. Com parceiros que oferecem bônus, quem efetivamente age é sempre o jogador.
                </p>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-emerald-900 pt-4 border-t-2 border-amber-900/20 pb-2">
                Variante: Parceiros Vulneráveis
                </h1>
                <p>Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.
                </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

  
  return (
    <div className="min-h-screen bg-[#e0d2b4] text-amber-950 font-serif selection:bg-emerald-900 selection:text-emerald-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0d2b4] to-[#cbbba0]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(60,30,10,0.10)_100%)]" />

      {/* Header Responsivo (Logo Esquerda, Menu Direita) */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#d6c6aa]/95 backdrop-blur-md shadow-md mb-8 md:mb-12">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-800 via-red-900 to-black drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-wide uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-900/70 hover:text-emerald-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-900">Parceiros</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 pb-12">

        {/* Header e Texto Introdutório */}
        <div className="mb-12 p-8 bg-[#dcc8a9]/60 rounded border border-amber-900/30 shadow-sm w-full">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 mb-6 drop-shadow-sm">
            Parceiros
            </h1>
            <div className="space-y-4 text-amber-950 font-serif leading-relaxed text-lg">
                <p>Parceiros são NPCs que se aventuram com o grupo. Podem ser adquiridos através de habilidades, contratados ou comprados (no caso de animais ou construtos) ou mesmo recebidos como recompensa.</p>

                <RulesSection />
            </div>
        </div>

        {/* Barra de Busca - ESTILO CAIXA */}
        <div className="mb-8 p-6 rounded bg-[#dcc8a9] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] w-full">
            <label className="block text-sm font-bold text-amber-900/70 mb-3 uppercase tracking-wider font-serif">
                Buscar Parceiro
            </label>
            <div className="relative">
                <input
                type="text"
                placeholder="Buscar por nome ou descrição do parceiro..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 bg-[#efe5d5] border-2 border-amber-900/20 rounded text-amber-950 placeholder-amber-900/50 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-all font-serif shadow-sm"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/50">
                    🔍
                </div>
            </div>
        </div>

        {/* Grid de Parceiros */}
        <div className="mb-12">
            <h2 className="text-xl font-bold text-emerald-900 mb-6 border-b border-amber-900/30 pb-2 font-serif uppercase tracking-wide">
            {filteredPartners.length} Parceiros Encontrados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPartners.map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
            ))}
            </div>
            {filteredPartners.length === 0 && (
            <div className="text-center py-12 text-amber-900/70 bg-[#e6dcc5] border border-amber-900/20 rounded-xl italic font-serif mt-6">
                Nenhum parceiro encontrado com o termo de busca aplicado.
            </div>
            )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 py-8 border-t-4 border-double border-amber-900/40 bg-[#2a231d] text-center text-amber-200/50 text-sm relative z-10 font-serif">
        <p>Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs</p>
        <p>Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.</p>
      </footer>
    </div>
  );
}