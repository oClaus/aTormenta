"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { partners } from "@/data/partners";
import { Partner } from "@/types/partner";
import { formatOrigin } from "@/types/power";

// --- Componentes Auxiliares ---

// Componente Card de Parceiro (Estilo Pergaminho)
const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 hover:border-red-800/50 hover:shadow-[0_4px_20px_rgba(153,27,27,0.15)] flex flex-col transition-all duration-300 hover:-translate-y-1 font-serif h-full group">
      {/* Header */}
      <div className="mb-4 pb-3 border-b-2 border-amber-900/10">
        <h3 className="text-xl font-bold text-red-800 font-serif group-hover:text-red-700 transition-colors tracking-wide">{partner.name}</h3>
        <p className="text-sm text-amber-950/70 italic font-serif mt-1 font-medium">{partner.description}</p>
      </div>

      {/* Benefícios */}
      <div className="text-sm text-amber-950/85 space-y-4 flex-grow font-serif">
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Iniciante
          </p>
          <p className="font-medium leading-relaxed">{partner.benefits.iniciante}</p>
        </div>
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Veterano
          </p>
          <p className="font-medium leading-relaxed">{partner.benefits.veterano}</p>
        </div>
        <div className="bg-[#fbf5e6]/50 p-3 rounded-lg border border-amber-900/10 shadow-sm">
          <p className="font-bold text-red-800 uppercase text-[10px] tracking-widest mb-1 flex items-center gap-1">
             <span className="text-red-800/50">❖</span> Mestre
          </p>
          <p className="font-medium leading-relaxed">{partner.benefits.mestre}</p>
        </div>
      </div>

      {/* Origem */}
      <div className="mt-6 pt-4 border-t-2 border-amber-900/10 text-right">
        <span className="text-[10px] px-2 py-1 rounded bg-[#fbf5e6] border border-amber-900/20 text-amber-950/70 uppercase tracking-widest shadow-sm font-bold">{formatOrigin(partner.origin)}</span>
      </div>
    </div>
  );
};


// --- Página Principal ---

export default function ParceirosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isIntroOpen, setIsIntroOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#f5e6d0] text-amber-950 font-serif selection:bg-amber-800 selection:text-amber-50 relative overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f5e6d0] to-[#e6d5b8]">

      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(69,26,3,0.15)_100%)]" />

      {/* Header Responsivo */}
      <header className="relative z-10 w-full p-6 border-b-4 border-double border-amber-900/40 bg-[#e8dac1]/90 backdrop-blur-md shadow-sm mb-8 md:mb-12 sticky top-0 font-serif">
        <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto">
            
            <Link href="/" className="inline-block group self-start md:self-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-700 via-red-800 to-red-950 drop-shadow-sm transition-all group-hover:brightness-125" style={{ textShadow: '0 1px 2px rgba(69,26,3,0.1)' }}>
                    a-Tormenta
                </h1>
            </Link>
            
            <div className="flex items-center gap-2 flex-wrap text-xs sm:text-sm font-bold tracking-widest uppercase self-end md:self-auto">
                <Link href="/" className="text-amber-950/70 hover:text-red-800 transition-colors whitespace-nowrap">
                  Início
                </Link>
                <span className="text-amber-900/40">/</span>
                <span className="text-red-800">Parceiros</span>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-12 max-w-screen-2xl mx-auto">

        {/* Título Principal */}
        <div className="mb-10 md:mb-12 w-full flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-red-800 mb-3 drop-shadow-sm font-serif tracking-wider">
            Parceiros
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-800 to-transparent rounded-full mb-6"></div>
        </div>

        {/* Acordeão de Regras */}
        <div className="mb-12 w-full">
          <button 
            onClick={() => setIsIntroOpen(!isIntroOpen)}
            className="w-full flex items-center justify-between p-6 bg-[#e8dac1] border-2 border-amber-900/30 rounded-t-xl hover:border-red-800/40 transition-all group shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl opacity-70">📜</span>
              <div className="text-left">
                <h2 className="text-xl font-bold text-amber-950 group-hover:text-red-800 transition-colors font-serif uppercase tracking-wide">
                  Regras de Parceiros
                </h2>
                <p className="text-sm text-amber-950/70 font-serif italic font-bold">
                  Clique para mais informações sobre os Parceiros.
                </p>
              </div>
            </div>
            <span className={`text-red-800 text-2xl transition-transform duration-300 ${isIntroOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ease-in-out border-x-2 border-b-2 border-amber-900/30 rounded-b-xl bg-[#fbf5e6] ${isIntroOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
            <div className="p-5 md:p-10 font-serif text-amber-950/85 text-base md:text-lg text-left md:text-justify leading-relaxed flex flex-col gap-8">
              
              <section>
                <p className="font-medium text-lg leading-relaxed mb-6">Parceiros são NPCs que se aventuram com o grupo. Podem ser adquiridos através de habilidades, contratados ou comprados (no caso de animais ou construtos) ou mesmo recebidos como recompensa.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Usando Parceiros</h3>
                <p className="font-medium mb-4">Em Tormenta20, o foco da história são os personagens — eles são os astros, os protagonistas, aqueles que resolvem os problemas. NPCs devem ser no máximo coadjuvantes. Assim, evite parceiros que participem da ação o tempo todo. A menos que sua campanha seja justamente sobre recrutar parceiros, eles devem ser usados apenas em situações especiais; a mais clássica é quando heróis estão perto de enfrentar um vilão poderoso, que não podem derrotar sozinhos. Antes do confronto final, recrutam parceiros para equilibrar a batalha.</p>
                <p className="font-medium mb-4">Parceiros podem ser recompensas por boas ideias ou missões completadas. O grupo fez amizade com um guerreiro local? Quando um monstro atacar a cidade, talvez ele apareça para dar uma mãozinha. O grupo salvou um barão? O nobre pode enviar uma cavaleira para acompanhá-los na próxima aventura.</p>
                <p className="font-medium mb-4">Por outro lado, evite usar parceiros apenas como bônus. Parceiros devem ter personalidade e fazer parte da história, caso contrário, serão reduzidos a um ajuste na ficha! O mestre não precisa interpretar o parceiro a cada momento — ele é um coadjuvante, não precisa de tanto “tempo de tela”. Mas, às vezes, deve dizer alguma coisa. Parceiros podem ser interpretados pelo próprio jogador que os escolheu, de acordo com a preferência do grupo.</p>
                <p className="font-medium">Parceiros funcionam melhor se usados com parcimônia, para serem algo especial. Mesmo que o parceiro seja amigo do grupo, arranje motivos para que ele não possa se aventurar sempre. O guerreiro precisa proteger a cidade, afinal de contas!</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Regras de Parceiros</h3>
                <p className="font-medium mb-4">Parceiros não atuam como NPCs completos. Eles não têm um turno e não realizam ações. Em vez disso, cada parceiro ajuda um personagem, fornecendo um bônus. Esse bônus depende do tipo e nível de poder do parceiro (iniciante, veterano ou mestre). Essa classificação é abstrata, não indicando classe e nível do NPC, e fica a cargo do mestre. Parceiros fornecidos por habilidades só mudam de poder (de iniciante para veterano, por exemplo), quando instruído pela habilidade.</p>
                <p className="font-medium mb-4">Cada parceiro pode ajudar apenas um personagem por vez. No início do seu turno, você pode gastar uma ação de movimento para passar um parceiro para outro personagem em alcance curto até o fim da cena (para fazer isso com um animal, você precisa ser treinado em Adestramento).</p>
                <p className="font-medium mb-4">Personagens iniciantes (até o 4º nível) podem ter um parceiro, personagens veteranos e campeões (do 5º ao 16º nível) podem ter até dois e personagens lenda (do 17º nível em diante) podem ter até três parceiros. Se um efeito fornecer um parceiro temporário além do seu limite, você não se beneficiará dele — mas pode passá-lo para outro personagem como visto acima.</p>
                <p className="font-medium">Parceiros não podem ser alvos de ações hostis. Porém, em situações dramáticas, o mestre pode decidir que algo acontece com ele. Se um personagem é capturado por orcs, o cavalo dele pode acabar a serviço dos humanoides — ou ser devorado!</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">Tipos de Parceiros</h3>
                <p className="font-medium">Estes são exemplos de parceiros. O mestre pode criar outros ou misturar benefícios: por exemplo, um cavaleiro da Luz mestre pode fornecer +2 em testes de ataque e +2 na Defesa (os benefícios de um combatente veterano e um guardião iniciante).</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Por Que Parceiros?
                </h1>
                <p className="font-medium">Parceiros são mais indicados que NPCs com fichas porque aceleram o jogo e mantêm o foco nos personagens. Se cada parceiro tivesse suas próprias ações, o jogo ficaria lento. Além disso, se agisse independentemente, um parceiro poderia acabar rolando o ataque que mata o vilão, frustrando os jogadores. Com parceiros que oferecem bônus, quem efetivamente age é sempre o jogador.</p>
              </section>

              <section className="border-t-2 border-amber-900/20 pt-8">
                <h1 className="text-2xl md:text-3xl font-bold text-red-800 mb-4 tracking-wide border-b-2 border-amber-900/10 pb-2">
                  Variante: Parceiros Vulneráveis
                </h1>
                <p className="font-medium italic border-l-4 border-red-800 pl-4 py-2 bg-[#e8dac1]/50 rounded-r">Com esta variante, parceiros podem se ferir e morrer. Sempre que um personagem sofre dano, deve rolar um dado para cada parceiro. Com um resultado “1”, o parceiro fica ferido. Por si só, isso não tem efeito em jogo. Porém, caso o jogador role um novo 1 para um parceiro que já esteja ferido, esse parceiro morre. O dado rolado depende do poder do parceiro: d4 para iniciantes, d6 para veteranos e d8 para mestres. Esta variante coloca sobre o jogador a decisão de continuar ou não usando um parceiro ferido — o personagem abre mão da ajuda para não arriscar o amigo? Recomendamos esta variante apenas para parceiros circunstanciais, não aqueles recebidos por habilidades de classe.</p>
              </section>

            </div>
          </div>
        </div>

        {/* Barra de Busca - ESTILO CAIXA PADRÃO */}
        <div className="mb-12 p-6 rounded-xl bg-[#e8dac1] border-2 border-amber-900/30 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] font-serif">
          <label className="block text-sm font-bold text-amber-950/70 mb-3 uppercase tracking-widest">
              Buscar Parceiro
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar por nome ou benefício do parceiro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pr-12 bg-[#fbf5e6] border-2 border-amber-900/20 rounded-lg text-amber-950/85 placeholder-amber-900/40 focus:outline-none focus:border-red-800/50 focus:ring-1 focus:ring-red-800/50 transition-all shadow-sm"
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
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-900/40 text-lg">
                  🔍
              </div>
            )}
          </div>
        </div>

        {/* Grid de Parceiros */}
        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-950 mb-6 font-serif border-b-2 border-amber-900/10 pb-2 tracking-wide flex items-center gap-3">
                <span className="text-red-800 text-3xl">❖</span> {filteredPartners.length} Parceiros Encontrados
            </h2>
            
            {filteredPartners.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {filteredPartners.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} />
                ))}
                </div>
            ) : (
                <div className="text-center py-20 border-2 border-dashed border-amber-900/30 rounded-xl bg-[#e8dac1]/50 font-serif flex flex-col items-center justify-center mt-8">
                  <span className="text-4xl opacity-40 mb-4">📜</span>
                  <p className="text-amber-950/70 text-lg italic tracking-wide">
                    Nenhum parceiro encontrado com o termo de busca aplicado.
                  </p>
                </div>
            )}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 p-8 border-t-4 border-double border-amber-900/40 bg-[#2a1810] text-center font-serif shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
        <span className="text-red-900/40 text-2xl mb-3">❖</span>
        <p className="mb-2 text-[#e8dac1]/60 text-sm md:text-base tracking-widest uppercase font-bold">
          Compêndio Tormenta RPG © 2025 • Feito por um fã para fãs
        </p>
        <p className="text-[#e8dac1]/40 text-xs md:text-sm tracking-wide">
          Tormenta 20 pertence a Jambo Editora. Todos os direitos são reservados a editora.
        </p>
      </footer>
    </div>
  );
}