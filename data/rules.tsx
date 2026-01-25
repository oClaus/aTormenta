// data/rules.ts

// Certifique-se de importar React se precisar de Fragments (<></>) ou de outros elementos React
import React from 'react'; 
import { Difficulty, RuleSection, ExtendedTest, AgeGroup, AgeComplication, HeroicGoal, GroupRole } from "@/types/rule";

// Tabela 5-1: Dificuldades (Sem Alteração)
export const difficulties: Difficulty[] = [
  { task: "Fácil*", cd: 5, example: "Suber uma encosta íngreme (Atletismo)" },
  { task: "Média", cd: 10, example: "Ouvir um guarda se aproximando (Percepção)" },
  { task: "Difícil", cd: 15, example: "Estancar um sangramento (Cura)" },
  { task: "Desafiadora", cd: 20, example: "Nadar contra uma correnteza (Atletismo)" },
  { task: "Formidável", cd: 25, example: "Sabotar uma armadilha complexa (Ladinagem)" },
  { task: "Heroica", cd: 30, example: "Decifrar um pergaminho antigo em um idioma morto (Conhecimento)" },
  { task: "Quase Impossível", cd: 40, example: "Fabricar uma \"obra-prima\", ou seja, um item com quatro melhorias (Ofício)" },
];

export const extendedTests: ExtendedTest[] = [
  { successes: 3, complexity: "Baixa", example: "Escalar um paredão (Atletismo)" },
  { successes: 5, complexity: "Média", example: "Atravessar o Pântano dos Juncos (Sobrevivência)" },
  { successes: 7, complexity: "Alta", example: "Compreender um ritual antigo (Misticismo)" },
];

export const difficultiesNote = "*Testes fáceis aparecem na tabela para fornecer senso de escala, mas normalmente não são exigidos — caso um personagem tente uma tarefa fácil, o mestre pode considerar que ele passa automaticamente, para acelerar o jogo.";

export const specialSituations = {
  attacker: [
    { condition: "Caído", modifier: "-5" },
    { condition: "Cego", modifier: "50% de chance de falha" },
    { condition: "Em posição elevada", modifier: "+2" },
    { condition: "Flanqueando o alvo", modifier: "+2 (apenas corpo a corpo)" },
    { condition: "Invisível", modifier: "+5 (não se aplica a alvos cegos)" },
    { condition: "Ofuscado", modifier: "-2" },
  ],
  target: [
    { condition: "Caído", modifier: "-5 contra corpo a corpo, +5 à distância" },
    { condition: "Cego", modifier: "-5" },
    { condition: "Desprevenido", modifier: "-5" },
    { condition: "Sob camuflagem leve", modifier: "20% de chance de falha" },
    { condition: "Sob camuflagem total", modifier: "50% de chance de falha" },
    { condition: "Sob cobertura leve", modifier: "+5" },
    { condition: "Sob cobertura total", modifier: "O alvo não pode ser atacado" },
  ]
};

export const objectStats = {
  geral: [
    { example: "Pergaminho", size: "Minúsculo", def: 15, rd: 0, pv: 1 },
    { example: "Corda", size: "Minúsculo", def: 15, rd: 0, pv: 2 },
    { example: "Corrente", size: "Minúsculo", def: 15, rd: 10, pv: 2 },
    { example: "Cadeira", size: "Pequeno", def: 12, rd: 5, pv: 5 },
    { example: "Barril", size: "Médio", def: 10, rd: 5, pv: 10 },
    { example: "Porta de madeira", size: "Grande", def: 8, rd: 5, pv: 20 },
    { example: "Porta de pedra", size: "Grande", def: 8, rd: 8, pv: 100 },
    { example: "Porta de ferro", size: "Grande", def: 8, rd: 10, pv: 100 },
    { example: "Carroça", size: "Grande", def: 8, rd: 5, pv: 50 },
    { example: "Casebre", size: "Enorme", def: 5, rd: 5, pv: 100 },
    { example: "Celeiro", size: "Colossal", def: 0, rd: 5, pv: 200 },
  ],
  equipamento: [
    { example: "Arma leve de madeira (machadinha)", rd: 5, pv: 2 },
    { example: "Arma de uma mão de madeira (clava)", rd: 5, pv: 5 },
    { example: "Arma de duas mãos de madeira (bordão)", rd: 5, pv: 10 },
    { example: "Arma leve de metal (adaga)", rd: 10, pv: 2 },
    { example: "Arma de uma mão de metal (espada longa)", rd: 10, pv: 5 },
    { example: "Arma de duas mãos de metal (montante)", rd: 10, pv: 10 },
    { example: "Escudo leve", rd: 5, pv: 10 },
    { example: "Escudo pesado", rd: 10, pv: 20 },
    { example: "Armadura leve", rd: 5, pv: 20 },
    { example: "Armadura pesada", rd: 10, pv: 40 },
  ]
};

export const ageGroups: AgeGroup[] = [
  { name: "Criança", age: "9-12", modifiers: "For –2, Con –1, Sab –1, Tamanho Menor, Protegido dos Deuses, Sem Origem" },
  { name: "Adolescente", age: "13-17", modifiers: "Sab –1, Ímpeto Juvenil, Origem em Construção" },
  { name: "Jovem", age: "18-24", modifiers: "Nenhum" },
  { name: "Adulto", age: "25-39", modifiers: "Um poder geral extra, uma complicação de idade (opcional)" },
  { name: "Maduro", age: "40-59", modifiers: "Um nível extra, duas complicações de idade" },
  { name: "Velho", age: "60-79", modifiers: "For –1, Des –1, Con –1, dois níveis extras, três complicações, Atributo físico bloqueado" },
  { name: "Ancião", age: "80+", modifiers: "For –2, Des –2, Con –2, três níveis extras, quatro complicações, Atributo físico bloqueado" },
];

// Texto completo das complicações
export const ageComplications: AgeComplication[] = [
  { name: "Abatido", effect: "Seu vigor se foi. Você recebe –2 PV por nível." },
  { name: "Catarata", effect: "Seus olhos já não são os mesmos. Você sofre –5 em Percepção e Pontaria." },
  { name: "Dedos Trêmulos", effect: "Você sofre –2 em Luta e Pontaria. Além disso, quando usa um item que esteja empunhando, role 1d4. Em um resultado 1, você derruba esse item." },
  { name: "Definhamento", effect: "A idade roubou seu peso, deixando-o um fiapo do que era antes. Você sofre –5 em Fortitude e em testes de manobras de combate." },
  { name: "Desatento", effect: "Você já não é mais tão atento quanto outrora. Na primeira rodada de qualquer cena de ação, role um dado. Em um resultado ímpar, você fica surpreendido (mesmo que um efeito possa evitar isso)." },
  { name: "“Devagar, Jovem!”", effect: "Você já não anda no mesmo ritmo que antes. Seu deslocamento diminui em –3m e você não pode correr ou fazer investidas." },
  { name: "Gota", effect: "Sempre que faz um teste de Destreza ou de perícias baseadas nesse atributo você perde 1d6 pontos de vida. Você só pode recuperar esses PV com descanso." },
  { name: "Juntas Duras", effect: "Suas articulações doem. Você sofre –5 em testes de Acrobacia e Reflexos." },
  { name: "Melancólico", effect: "Você já não tem mais tanta motivação para realizar grandes façanhas. Você perde 1 PM por nível." },
  { name: "Memórias Tristes", effect: "Você passou por um trauma, como a perda de um ente querido ou a culpa por um erro que cometeu e pelo qual nunca se perdoou. Sempre que rola um resultado 1 natural em qualquer teste, você fica pasmo por 1 rodada e frustrado até o fim do dia (cumulativo)." },
  { name: "“No Meu Tempo...”", effect: "Você se prende a visões idealizadas de um passado que nunca existiu e se torna presa fácil para manipulação. Você sofre –5 em Intuição e Vontade." },
  { name: "Pulmão Ruim", effect: "Quando corre ou prende a respiração, você precisa fazer testes de Fortitude para não ficar fatigado a partir da primeira rodada (normalmente, personagens só precisam fazer esses testes após um número de rodadas igual a sua Constituição +1). Além disso, sempre que faz uma investida, você fica fatigado até o fim da cena." },
  { name: "Rabugento", effect: "Você reclama de tudo. Você sofre –5 em testes de Carisma e de perícias baseadas nesse atributo, exceto Intimidação." },
  { name: "Recurvado", effect: "A idade dobrou suas costas. Você conta como uma categoria de tamanho menor para alcance natural, modificador de manobras e armas que pode empunhar (mas não para espaço ocupado, modificador de Furtividade ou dano de armas naturais)." },
  { name: "Sono Ruim", effect: "Você acorda várias vezes no meio da noite, o que atrapalha seu descanso. Sua recuperação de PM e PV é sempre uma categoria pior. Se a condição de descanso já é ruim, você recupera apenas 1 PM e 1 PV, independentemente do seu nível. Se já recupera apenas 1 PM e 1 PV, não recupera nada!" },
  { name: "Teimoso", effect: "Sempre que falha em um teste de atributo ou de perícia que possa tentar novamente, você é obrigado a tentar pelo menos mais uma vez (mesmo que isso possa prejudicá-lo). Teimoso é quem teima com você!" },
  { name: "Tosse", effect: "Em cenas de ação, role 1d6 no início de cada rodada. Num resultado 1, você tem uma crise de tosse e fica atordoado por 1 rodada. Em cenas de interpretação, role 1d6 sempre que fizer um teste de perícia baseada em Carisma. Num resultado 1, você tem uma crise de tosse e sofre uma penalidade de –5 nesse teste." },
  { name: "Turrão", effect: "Você faz tudo sempre do seu jeito e tem dificuldade de lidar com coisas nas quais não é perito. Você não recebe o bônus de metade do nível em perícias nas quais não é treinado." },
  { name: "Velha Ferida", effect: "Você tem um machucado antigo, que nunca cicatrizou direito. Sempre que você sofre um acerto crítico, o multiplicador de dano aumenta em +1 e você fica fraco (mesmo que seja imune, cumulativo)." },
];

export const heroicGoals: HeroicGoal[] = [
  {
    name: "Desafio",
    description: "Você quer fazer algo muito difícil, apenas porque é difícil. Deseja escalar o Monte do Dragão Adormecido sem equipamento, sem magias e vendado; ou vencer Laan numa corrida a pé; ou derrotar Maquius em combate desarmado após ter bebido mais do que ele.",
    benefit: "Você recebe +2d4 PM temporários.",
    penalty: "Você fica fatigado.",
    conclusion: "Você recebe +1 em dois atributos diferentes a sua escolha."
  },
  {
    name: "Descoberta",
    description: "Você deseja aprender um conhecimento específico, formular uma teoria ou desvendar um mistério: quer visitar todos os reinos dos deuses, descobrir como criar uma nova raça de seres vivos ou solucionar o assassinato do Rei de Salistick.",
    benefit: "Você recebe um bônus de +2 em testes de Inteligência e de perícias baseadas nesse atributo.",
    penalty: "Você fica frustrado.",
    conclusion: "Você recebe +1 em Inteligência e um poder geral a sua escolha."
  },
  {
    name: "Liderança",
    description: "Você quer ascender socialmente e conquistar uma posição de destaque: Alto Comandante da Ordem da Luz, irmão mais velho da Companhia dos Irmãos ou o próximo Ayrrak de Lamnor. Você é movido pela ambição, ou talvez seja o legítimo herdeiro de algum título.",
    benefit: "Você recebe +2 em testes de Carisma e de perícias baseadas nesse atributo.",
    penalty: "Você fica alquebrado.",
    conclusion: "Você recebe +1 em Carisma e uma estrutura ou benefício equivalente, a critério do mestre."
  },
  {
    name: "Obra",
    description: "Você deseja construir uma obra monumental, algo nunca visto em Arton. Por exemplo, uma estátua maior que a de Sckhar, uma ponte ligando os dois continentes ou uma embarcação capaz de cruzar o éter divino.",
    benefit: "Você recebe +2 em testes de resistência e 1d4 PM temporários.",
    penalty: "Você fica abalado.",
    conclusion: "Você recebe +1 em Constituição e os benefícios de sua obra (provavelmente uma base, domínio, negócio ou veículo, a critério do mestre)."
  },
  {
    name: "Riqueza",
    description: "Você quer dinheiro, pura e simplesmente. Não é o mesmo que ascensão social, pois não envolve reconhecimento ou legitimidade. Para cumprir este objetivo, você deve acumular uma quantidade de tibares decidida pelo mestre (provavelmente um milhão!). Equipamento, patrimônio, domínios, propriedades e outros bens não contam para o cumprimento do objetivo, apenas dinheiro vivo!",
    benefit: "O custo em PM de suas habilidades é reduzido em –1.",
    penalty: "Você fica alquebrado.",
    conclusion: "Escolha uma habilidade com custo em PM. O custo em PM para usá-la é reduzido em –2 PM (cumulativo com outras reduções). Além disso, agora você pode gastar o dinheiro guardado!"
  },
  {
    name: "Salvação",
    description: "Você deseja ajudar, encontrar ou resgatar uma pessoa necessitada, perdida ou aprisionada. Como alternativa, pode querer ajudar toda uma população. Por exemplo, quer libertar seu irmão da Fortaleza Hardof, devolver a divindade a Tilliann ou reformar toda a Favela dos Goblins.",
    benefit: "Você recebe +2 na Defesa.",
    penalty: "Você fica vulnerável.",
    conclusion: "Você recebe +2 na Defesa e em testes de resistência, além de um parceiro mestre de um tipo a sua escolha."
  },
  {
    name: "Vingança",
    description: "Você quer matar, prender ou punir uma pessoa ou monstro que lhe fez um grande mal. Seja quem for, deve ser um vilão poderoso: Hermann Von Krauser, Ferren Asloth ou mesmo Gatzvalith!",
    benefit: "Uma vez por rodada, você recebe +5 em uma rolagem de dano.",
    penalty: "Você fica fraco.",
    conclusion: "Você recebe +1 em Força e um poder de combate a sua escolha."
  }
];

export const groupRoles: GroupRole[] = [
  {
    name: "Advogado",
    description: "O papel do advogado é simples: ajudar o grupo com regras. Ao contrário de outros papéis, o jogador deve conhecer bem o sistema e saber onde encontrar a maior parte das informações. Faz parte de seu trabalho auxiliar jogadores novatos, achar regras no livro quando o mestre pede e até dar palpites (quando for solicitado) sobre otimização de fichas de seus colegas. Em suma, é um auxiliar de regras da mesa toda.",
    benefit: "Se for o advogado, você recebe +1 ponto de mana."
  },
  {
    name: "Arquivista",
    description: "O arquivista anota nomes de NPCs e lugares, acontecimentos importantes, objetivos que outros jogadores tenham declarado e que possam esquecer (“Se um dia formos a Valkaria, quero procurar Lorde Niebling!”), além das relações entre os coadjuvantes mais importantes. Em suma, ele ajuda o mestre e os jogadores a lembrar de informações da história, impedindo que sejam ignoradas ou confundidas.",
    benefit: "Se for o arquivista, você recebe +1 em Diplomacia."
  },
  {
    name: "Bibliotecário",
    description: "O bibliotecário é o guardião das informações que o grupo possui sobre o cenário. O jogador não precisa necessariamente conhecer muito sobre Arton. Contudo, assim que o grupo descobre algo digno de nota (por exemplo, a história da Revolta dos Três ou a estrutura dos exércitos da Supremacia Purista), o bibliotecário faz uma anotação sobre isso, com o livro e a página onde a informação pode ser encontrada para consulta. Grupos que estejam conhecendo o cenário aos poucos podem se beneficiar muito de um bibliotecário.",
    benefit: "Se for o bibliotecário, você recebe +1 em Conhecimento."
  },
  {
    name: "Cartógrafo",
    description: "O cartógrafo mapeia o terreno onde o grupo está — seja uma masmorra, sejam ermos em que eles possam se perder. Em grupos que não usam mapas de batalha, o cartógrafo deve manter um controle sobre onde cada personagem e NPC está num combate, além de suas posições relativas (para flanquear, por exemplo). Caso a campanha envolva longas viagens, o cartógrafo deve saber a distância aproximada dos principais pontos de interesse. Se o grupo calcular mantimentos de forma rígida, o cartógrafo pode auxiliar o tesoureiro a manter esse controle durante viagens.",
    benefit: "Se for o cartógrafo, você recebe +1 em Sobrevivência."
  },
  {
    name: "Enfermeiro",
    description: "O enfermeiro mantém o controle de condições e penalidades que afetam os membros do grupo, totais de PV e suprimentos de cura. Se houver personagens sangrando, ele lembra dos testes de Constituição. Além disso, alerta os demais sobre companheiros prestes a morrer.",
    benefit: "Se for o enfermeiro, você recebe +1 em Cura."
  },
  {
    name: "Estrategista",
    description: "O estrategista mantém o controle da iniciativa e das informações dos efeitos que afetam os personagens em combate. É dever dele lembrar os demais de bônus temporários (como pelo poder Comandar ou pela Aura Sagrada do paladino) e ter uma ideia geral dos principais poderes de combate de cada um, para que o grupo não ignore possibilidades em batalha.",
    benefit: "Se for o estrategista, você recebe +1 em Guerra."
  },
  {
    name: "Teratólogo",
    description: "O teratólogo mantém o controle sobre habilidades e fraquezas de monstros e inimigos que os personagens conheçam. Por exemplo, depois que o grupo encontra pela primeira vez um troll, o teratólogo pode anotar sua habilidade de regeneração, então lembrar a todos do que sabem da próxima vez. Não serve apenas para limitar as ações dos jogadores: também registra estratégias e vulnerabilidades. Este papel também pode ser útil para lembrar o mestre de habilidades e fraquezas de inimigos.",
    benefit: "Se for o teratólogo, você recebe +1 em Misticismo."
  },
  {
    name: "Tesoureiro",
    description: "Responsável por anotar os bens do grupo. Quando o grupo encontra um tesouro, o tesoureiro divide-o entre todos igualmente, tendo a palavra final sobre quem ficará com um item específico. Uma vez que o item esteja com um personagem, não é mais responsabilidade do tesoureiro. Bens de propriedade coletiva são de responsabilidade do tesoureiro. Ele também mantém o controle sobre quanto cada um investiu em uma propriedade coletiva, para garantir que todos estejam contribuindo.",
    benefit: "Se for o tesoureiro, você recebe +1 em Nobreza ou em um Ofício."
  },
  {
    name: "Xerife",
    description: "Alguns grupos têm pouco tempo para jogar. Assim, qualquer indecisão exagerada (como demorar uma hora para abrir uma porta) pode prejudicar a sessão. O xerife é um jogador que o mestre pode contactar discretamente (pela internet, sussurrando ou por um bilhete) para ajudá-lo a empurrar o grupo para a frente. Não se trata de fazer a história acontecer de uma determinada maneira — apenas de fazê-la acontecer! Outras responsabilidades do xerife podem ser ajudar o mestre a conter o número de piadas (desde que isso não vá prejudicar a diversão do grupo) ou servir de “voz do bom senso”, evitando decisões absurdas ou que resultarão no fim da campanha. Em suma, o xerife é um auxiliar do mestre, alguém que abre mão de algumas surpresas e ajuda o jogo a “andar”.",
    benefit: "Se for o xerife, você recebe +1 em Iniciativa."
  }
];

// Seções de Regras (Acordeão) - Conteúdo agora em JSX
export const ruleSections: RuleSection[] = [
  { id: "testes",
    title: "Testes",
    content: (
        <>
            <p>Sempre que um personagem tenta fazer uma ação cujo resultado é incerto, o jogador faz um teste. Um teste é uma rolagem de 1d20 + um modificador.</p>
            <p>Testes são classificados pela característica utilizada (atributo ou perícia) e pelo que define sua CD (comuns ou opostos).</p>
        </>
    ),
  },
  { id: "testes-atributo",
    title: "Testes de Atributo",
    content: (
        <>
            <p>Você usa testes de atributo para tarefas básicas, para as quais nenhuma perícia se aplica. Para fazer um teste de atributo, role 1d20 e some o valor do atributo apropriado.</p>
            
            <p className="font-bold text-red-300 my-2">TESTE DE ATRIBUTO = 1D20 + ATRIBUTO</p>

            <p>Aqui estão alguns exemplos de testes de atributo, seguidos pelo atributo testado:</p>
            <ul className="list-disc ml-6 space-y-1">
                <li><strong>Erguer um objeto pesado</strong> (Força).</li>
                <li><strong>Amarrar cordas</strong> (Destreza).</li>
                <li><strong>Estabilizar sangramento</strong> (Constituição).</li>
                <li><strong>Resolver um enigma</strong> (Inteligência).</li>
                <li><strong>Decidir se algo é prudente</strong> (Sabedoria).</li>
                <li><strong>Causar boa impressão</strong> (Carisma).</li>
            </ul>
        </>
    ),
  },
  { id: "testes-pericia",
    title: "Testes de Perícia",
    content: (
        <>
            <p>Um teste de perícia funciona como um teste de atributo. Porém, você soma o valor da perícia em questão.</p>
            
            <p className="font-bold text-red-300 my-2">TESTE DE PERÍCIA = 1D20 + VALOR DE PERÍCIA</p>
        </>
    ),
  },
  { id: "testes-comuns",
    title: "Testes Comuns",
    content: (
        <>
            <p>Testes comuns são usados quando um personagem está competindo contra o ambiente. Eles são realizados contra uma CD determinada pelo mestre, de acordo com a tarefa sendo realizada. Consulte a TABELA: DIFICULDADES para exemplos.</p>
            <p>O mestre pode estipular as dificuldades de todos os testes usando a tabela abaixo como guia.</p>
        </>
    ),
  },
  { id: "Testes Opostos",
    title: "Testes Opostos",
    content: (
        <>
            <p>Testes opostos são usados quando dois ou mais personagens estão competindo entre si. Cada personagem envolvido faz seu teste. Aquele com maior valor é o vencedor. Em caso de empate, aquele com o maior valor vence. Se os valores forem iguais, outra rolagem deve ser feita.</p>
        </>
    ),
  },
  { id: "Misturando Testes Comuns e Opostos",
    title: "Misturando Testes Comuns e Opostos",
    content: (
        <>
            <p>Um teste pode ser comum e oposto ao mesmo tempo. Por exemplo, se três personagens estão disputando para ver quem atravessa um lago primeiro, todos devem fazer um teste de Atletismo contra uma CD. Aqueles que passarem atravessam o lago. Dentre esses, aquele com o maior resultado chega primeiro.</p>
        </>
    ),
  },
  { id: "Sucessos e Falhas Automáticos",
    title: "Sucessos e Falhas Automáticos",
    content: (
        <>
            <p>Ao fazer um teste, um 20 natural (quando o resultado do d20 é 20) sempre é um sucesso, e um 1 natural (quando o resultado do d20 é 1) sempre é uma falha, não importando o valor a ser alcançado.</p>
        </>
    ),
  },
  { id: "Condições Favoráveis e Desfavoráveis",
    title: "Condições Favoráveis e Desfavoráveis",
    content: (
        <>
            <p>Certas situações podem tornar um teste mais fácil ou mais difícil. Para representar isso, o mestre pode alterar o teste de duas maneiras.</p>
            <p>Aqui estão alguns exemplos de testes de atributo, seguidos pelo atributo testado:</p>
            <ul className="list-disc ml-6 space-y-1">
                <li>Conceder ao personagem um bônus de +2 ou mais para representar circunstâncias que melhorem seu desempenho. Por exemplo, procurar por um livro em uma biblioteca bem organizada com um teste de Investigação.</li>
                <li>Impor ao personagem uma penalidade de –2 ou mais para representar circunstâncias que atrapalham seu desempenho, como procurar por um frasco específico em um laboratório bagunçado com um teste de Investigação.</li>
            </ul>
        </>
    ),
  },
  { id: "Novas Tentativas",
    title: "Novas Tentativas",
    content: (
        <>
            <p>Em geral, você pode tentar um teste de novo em caso de falha e continuar tentando por toda a eternidade. Contudo, alguns testes acarretam penalidades (ou problemas!) em caso de falha. Por exemplo, um personagem que falhe em um teste de Atletismo para subir uma encosta pode tentar novamente. Mas, se falhar por 5 ou mais, cairá. Ele pode se levantar e tentar de novo, supondo que a queda não tenha sido muito dolorida...</p>
        </>
    ),
  },
  { id: "Ferramentas",
    title: "Ferramentas",
    content: (
        <>
            <p>Algumas perícias requerem ferramentas. Se isso for necessário, será mencionado na descrição da perícia. Se você não possui o item apropriado, ainda pode usar a perícia, mas sofre uma penalidade de –5 no teste.</p>
        </>
    ),
  },
  { id: "Ajudar",
    title: "Ajudar",
    content: (
        <>
            <p>Às vezes, os personagens trabalham juntos e se ajudam. Um personagem (normalmente aquele com o maior bônus) é considerado o líder, e faz o teste normal, enquanto cada ajudante faz um teste contra CD 10 (usando a mesma perícia ou outra que faça sentido). Um teste de ajuda concede ao líder um bônus de +1, e +1 adicional para cada 10 pontos acima da CD (+2 para um resultado 20, +3 para 30 e assim por diante).</p>
            <p>Em muitos casos, ajuda externa não traz benefícios — você não pode ajudar um colega a ser mais silencioso em seu teste de Furtividade. Ou então apenas um número limitado de ajudantes pode auxiliar alguém ao mesmo tempo (não há espaço para muitas pessoas à volta de uma mesma fechadura). O mestre limita a ajuda como achar melhor, de acordo com a tarefa e as condições.</p>
        </>
    ),
  },
  { id: "Testes sem Rolagens",
    title: "Testes sem Rolagens",
    content: (
        <>
            <p>Um teste representa a realização de uma tarefa desafiadora — com alta dificuldade ou feita em situação de perigo. Quando este não é o caso, você pode usar as opções a seguir para dispensar as rolagens. Elas são úteis para acelerar o jogo e não interromper a história com rolagens desnecessárias.</p>
            <ul className="list-disc ml-6 space-y-1">
                <li><strong>Escolher 0</strong> Quando seu bônus total em um teste é igual ou maior que a CD, você não precisa fazer o teste — você automaticamente passa. A tarefa é trivial para alguém com suas habilidades. Por exemplo, um personagem com Sobrevivência +15 não precisa fazer testes para montar acampamento em uma planície (uma tarefa com CD 15). Caso o teste tenha variados graus de sucesso, você obtém o mínimo possível. Você ainda pode fazer uma rolagem para alcançar um grau maior de sucesso, se quiser, mas arrisca falhar se rolar um 1 natural.</li>
                <li><strong>Escolher 10</strong> Quando não há pressão para realizar uma tarefa, você pode escolher 10. Isso significa realizar a tarefa com calma, sem chance para erros. Em vez de rolar 1d20, considere um resultado 10 automático. Isso costuma bastar para muitas tarefas.</li>
                <li><strong>Escolher 20</strong> Quando não há pressão e a tarefa não oferece nenhuma consequência ou penalidade em caso de falha, você pode escolher 20. Isso significa gastar todo o tempo do mundo e tentar todas as possibilidades, até passar. Em vez de rolar 1d20, considere um resultado 20 automático. Escolher 20 exige vinte vezes mais tempo que o normal para executar a perícia (ou, para simplificar, a cena inteira, de acordo com o mestre).</li>
            </ul>
        </>
    ),
  },
  { id: "Testes Estendidos",
    title: "Testes Estendidos",
    content: (
        <>
            <p>A maioria das tarefas pode ser resolvida com um único teste. Se um personagem quer escalar um muro, o sucesso ou a falha são aparentes após um único teste. Entretanto, para situações complexas e que consomem tempo — como escalar uma montanha —, ou quando o mestre quer criar clima de tensão, esta regra pode ser usada.</p>
            <p>Em um teste estendido, o grupo deve acumular uma quantidade de sucessos antes de três falhas, o que indica uma falha total. Quanto mais complexa a tarefa, mais sucessos são exigidos — veja a tabela</p>
            <p>Por exemplo, os personagens estão procurando o esconderijo de uma guilda de ladrões. Para isso precisam fazer perguntas na cidade. Pela complexidade da tarefa, o mestre pede um teste estendido de Investigação com complexidade média e CD 20. Isso significa que os heróis devem fazer testes de Investigação contra CD 20 até acumularem cinco sucessos. Se conseguirem, descobrem as pistas. Porém, se acumularem três falhas antes dos cinco sucessos, têm uma falha total — nesse caso, o grupo pode ter sido descuidado e alertado os membros da guilda, além de não conseguir a informação que queria.</p>
            <p>Testes estendidos podem envolver mais de uma perícia. Por exemplo, infiltrar-se em uma base purista pode exigir um sucesso em Atletismo, para escalar o muro, e dois em Furtividade, para não ser visto pelas sentinelas. Um julgamento pode exigir dois sucessos em Nobreza, para conhecer a lei, mais três em Diplomacia, para convencer o magistrado.</p>
        </>
    ),
  },
  { id: "Testes Estendidos Abertos",
    title: "Testes Estendidos Abertos",
    content: (
        <>
            <p>O mestre pode permitir que os jogadores decidam quais perícias vão usar em um teste estendido. O jogador escolhe a perícia, então explica como vai utilizá-la para resolver o desafio.</p>
            <p>Por exemplo, em um julgamento, um personagem poderia usar Enganação (“vou corromper o magistrado”); Intimidação (“vou assustar os jurados para que decidam em meu favor”); Intuição (“vou analisar a situação para determinar qual o melhor argumento”) etc.</p>
            <p>Permitir que os jogadores descrevam quais perícias vão usar irá envolvê-los mais com a cena. Se o mestre permitir isso, cada teste avulso dentro do teste estendido precisa ser feito com uma perícia diferente. Se combinada com as opções que dificultam os testes estendidos (veja abaixo), essa opção exige pensamento tático por parte do grupo!</p>
        </>
    ),
  },
  { id: "Testes Estendidos em Grupo",
    title: "Testes Estendidos em Grupo",
    content: (
        <>
            <p>Por serem feitos ao longo do tempo, testes estendidos podem ser feitos por mais de um personagem, ou mesmo pelo grupo todo. De fato, colocar o grupo inteiro para fazer um único teste estendido é uma ótima forma de unir os jogadores!</p>
            <p>Caso mais de um personagem esteja participando do teste estendido, resolva o teste por “rodadas”; a cada rodada, cada jogador faz um teste. Some os sucessos e falhas de todos para definir se o teste estendido é bem-sucedido ou não.</p>
            <p>Fazer testes estendidos em grupo é muito útil em testes estendidos abertos (veja acima), nas quais cada perícia só pode ser usada uma vez. Com vários personagens participando do teste, a chance deles terem mais perícias treinadas diferentes é maior.</p>
        </>
    ),
  },
  { id: "Ajuda e Testes Estendidos",
    title: "Ajuda e Testes Estendidos",
    content: (
        <>
            <p>Personagens podem ajudar em testes estendidos, usando a regra de ajuda padrão. Porém, uma perícia usada para ajudar não poderá ser usada novamente no teste estendido, seja para ajudar, seja para realizar o teste principal.</p>
        </>
    ),
  },
  { id: "Dificultando testes estendidos",
    title: "Dificultando testes estendidos",
    content: (
        <>
            <p>Para testes estendidos especialmente desafiadores, o mestre pode usar dificuldades cumulativas e penalidades por falhas.</p>
            <p>No primeiro caso, a CD aumenta em +2 a cada teste (independentemente de o teste ser um sucesso ou uma falha), representando a dificuldade crescente. Por exemplo, num teste estendido para se infiltrar até os aposentos reais do castelo, a CD pode aumentar a cada teste, pois quanto mais perto do quarto do rei, maior a segurança.</p>
            <p>No segundo caso, o mestre aplica uma penalidade para cada falha — isto é, além de chegar mais perto da falha total. Digamos que um personagem esteja envolvido em uma negociação intrincada com um aristocrata, exigindo um teste estendido de Diplomacia. Cada vez que falha, pode sofrer uma penalidade cumulativa de –2 nos testes seguintes — isso significa que o aristocrata está ficando cada vez mais ofendido. Da mesma forma, um personagem escalando uma montanha com um teste estendido de Atletismo pode sofrer 3d6 pontos de dano para cada falha, representando ferimentos durante a subida.</p>
        </>
    ),
  },
  { id: "Interrupções e Novas Tentativas",
    title: "Interrupções e Novas Tentativas",
    content: (
        <>
            <p>A maioria dos testes estendidos pode ser interrompida sem problemas. Entretanto, o mestre pode determinar que uma interrupção conte como uma falha ou até mesmo como uma falha completa no teste estendido.</p>
            <p>Normalmente pode-se fazer novas tentativas de testes estendidos. Entretanto, da mesma forma que com testes normais, alguns testes estendidos têm consequências que devem ser levadas em conta. Por exemplo, uma armadilha que exige um teste estendido de Ladinagem pode disparar em caso de falha.</p>
        </>
    ),
  },
  { id: "Habilidades",
    title: "Habilidades",
    content: (
        <>
            <p>Além de atributos e perícias, personagens possuem habilidades fornecidas por sua raça, origem, classe, itens e outras fontes.</p>
        </>
    ),
  },
  { id: "Usando Habilidades",
    title: "Usando Habilidades",
    content: (
        <>
            <p>Habilidades podem ser passivas (seus efeitos estão sempre funcionando) ou ativadas (precisam ser usadas para gerar seus efeitos). O poder Coração da Selva, do druida é uma habilidade passiva, enquanto a Fúria do bárbaro é uma habilidade ativada. Para usar habilidades ativadas você precisa gastar uma ação e, provavelmente, pontos de mana.</p>
        </>
    ),
  },
  { id: "Ação Necessária",
    title: "Ação Necessária",
    content: (
        <>
            <p>Habilidades podem ser passivas (seus efeitos estão sempre funcionando) ou ativadas (precisam ser usadas para gerar seus efeitos). O poder Coração da Selva, do druida é uma habilidade passiva, enquanto a Fúria do bárbaro é uma habilidade ativada. Para usar habilidades ativadas você precisa gastar uma ação e, provavelmente, pontos de mana.</p>
            <p className="mt-4">
          <strong>Habilidades Engatilhadas:</strong> Habilidades ativadas por decorrência de outro evento (como fazer um ataque), são ativadas como uma <strong>reação</strong> e somente uma vez por instância do evento.
        </p>
        <blockquote className="border-l-4 border-gray-500 pl-4 italic my-2 text-sm">
          A habilidade Frenesi, do bárbaro, diz que quando você usa a ação agredir, pode gastar 2 PM para realizar um ataque adicional. Ativar Frenesi é uma reação que só pode ser feita uma vez por ação agredir.
        </blockquote>
        </>
    ),
  },
  { id: "Custo de Pontos de Mana",
    title: "Custo de Pontos de Mana",
    content: (
      <>
        <p>
          A descrição da habilidade determina se são necessários PM para usá-la. Nesse caso, você gasta os PM <strong>mesmo em caso de falha</strong>. Por exemplo, se um guerreiro usa Ataque Especial e erra o ataque, ainda assim gasta os pontos de mana.
        </p>
        <p className="mt-2">
          Para habilidades com custo variável, o máximo de PM que você pode gastar por uso é igual ao seu <strong>nível na classe</strong> que fornece a habilidade (mas você sempre pode usar a habilidade em seu custo mínimo). Para habilidades de raça, origem ou poderes gerais, o limite é o seu <strong>nível de personagem</strong>.
        </p>
        
        <h4 className="font-bold mt-4 mb-2 underline">Custos Especiais</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Componente Material:</strong> A habilidade exige ingredientes que devem estar na mão do personagem e são consumidos (mesmo que a habilidade falhe).</li>
          <li><strong>Penalidade de PM:</strong> Reduz seus PM máximos enquanto estiver ativa (você não recupera esses PM até a duração acabar).</li>
          <li><strong>Sacrifício de PM:</strong> Você deve sacrificar <strong>permanentemente</strong> certa quantidade de PM para usá-las.</li>
        </ul>
      </>
    ),
  },
  { id: "alcance",
    title: "Alcance",
    content: (
      <>
        <p>Muitas habilidades possuem um alcance, isto é, a distância máxima a partir do personagem da qual o efeito pode se originar. Caso alguma parte da área da habilidade esteja além do alcance, a área é afetada normalmente.</p>
        <ul className="list-none space-y-2 mt-2">
          <li><strong>Pessoal:</strong> A habilidade afeta somente o personagem e/ou objetos que ele esteja carregando. Também pode ser uma habilidade de área que se inicia a partir do personagem e só o afeta se mencionar</li>
          <li><strong>Toque:</strong> O personagem precisa tocar o alvo em seu alcance natural para afetá-lo, mas não precisa gastar uma ação ou fazer testes para isso (tocar o alvo faz parte da ação da habilidade).</li>
          <li><strong>Curto:</strong> A habilidade alcança alvos a até 9m (6 quadrados em um mapa).</li>
          <li><strong>Médio:</strong> A habilidade alcança alvos a até 30m (20 quadrados em um mapa).</li>
          <li><strong>Longo:</strong> A habilidade alcança alvos a até 90m (60 quadrados em um mapa).</li>
          <li><strong>Ilimitado:</strong> A habilidade alcança qualquer lugar no mesmo mundo. A maioria das habilidade com este alcance exige que você conheça e/ou já tenha estado no ponto de origem da habilidade.</li>
        </ul>
      </>
    ),
  },
  { id: "alvos-areas",
    title: "Alvos & Áreas",
    content: (
      <>
        <p>Toda habilidade gera um efeito — causar dano em um alvo, fornecer um bônus a você ou qualquer outra coisa. A seguir estão regras gerais para efeitos. Muitos efeitos possuem um tipo.</p>
        <p><strong>Linha de Efeito:</strong>  Um caminho direto e sem obstruções até onde a habilidade pode ter efeito. Você deve ter linha de efeito para qualquer alvo ou ponto de origem da área que queira afetar, ou para qualquer espaço onde queira criar um efeito. Qualquer barreira sólida, visível ou não, anula a linha de efeito.</p>
        <p className="mt-2"><strong>Alvo:</strong> A habilidade afeta um ou mais alvos, que podem ser criaturas ou objetos. Você usa a habilidade sobre os alvos e deve ser capaz de percebê-los. Uma habilidade usada sobre um tipo de alvo errado falha automaticamente. Por exemplo, a magia Tranca Arcana não tem efeito se lançada sobre algo que não seja uma porta, baú ou semelhante.</p>
        <p className="mt-2"><strong>Objetos e Tamanhos:</strong> Algumas habilidades se referem a objetos em termos de espaços. Outras habilidades se referem a objetos em termos de categorias de tamanho. Nesse caso, o mestre deve arbitrar a categoria do objeto comparando-o com criaturas. Por exemplo, uma adaga é um objeto Minúsculo, uma carroça é um objeto Grande e um galeão é um objeto Colossal.</p>
        <p className="mt-2"><strong>Área:</strong> A habilidade afeta uma área. Normalmente, você escolhe um ponto dentro do alcance e que possa perceber para ser a origem da área, mas não controla quais criaturas ou objetos serão afetados — qualquer coisa na área estará sujeita aos efeitos, incluindo você. De acordo com o mestre, você pode usar uma habilidade numa área que não possa perceber com um teste de Percepção (Misticismo no caso de magias) contra CD 20 + custo em PM. Para habilidades com alcance pessoal, você é o ponto de origem e não é afetado (exceto quando dito o contrário). Áreas avançam até seu limite ou até serem interrompidas por uma barreira capaz de bloqueá-las. Em geral, áreas se enquadram em uma das categorias a seguir.</p>
        
        <div className="grid grid-cols-2 gap-2 mt-4 text-sm">
          <p><strong>Cilindro:</strong> Surge na interseção de quatro quadrados, estendendo-se pela largura indicada e subindo até o fim da altura indicada.</p>
          <p><strong>Cone:</strong> Surge adjacente a você e se afasta de você na direção escolhida, ficando mais largo com a distância, conforme os modelos da ilustração abaixo.</p>
          <p><strong>Esfera:</strong> Surge na interseção de quatro quadrados, estendendo-se em todas as direções até o limite de seu raio.</p>
          <p><strong>Linha:</strong> Surge adjacente a você e se afasta de você reta até o fim do alcance. A menos que indicado o contrário, uma linha tem 1,5m de largura.</p>
          <p><strong>Quadrado/Cubo:</strong> Surge no quadrado ou quadrados escolhidos, afetando o piso. Um “cubo” é como um quadrado, mas afeta também a altura.</p>
          <p><strong>Outros:</strong> Algumas habilidades podem ter áreas específicas, citadas em sua descrição.</p>
        </div>

        <p className="mt-2"><strong>Criação:</strong> Caso a habilidade crie ou invoque alguma coisa, a coisa aparece em um local a sua escolha dentro do alcance e para o qual você tenha linha de efeito. Após surgir, a coisa pode se mover ou ser movida para fora da linha de efeito. Por exemplo, você não pode conjurar um monstro dentro de uma sala fechada. Mas, uma vez conjurado, o monstro pode entrar na sala, mesmo que você ainda não tenha linha de efeito para o interior dela.</p>
        <p className="mt-2"><strong>Redirecionando Efeitos:</strong> Algumas habilidades permitem redirecionar seu efeito para novos alvos ou áreas após serem usadas. Quando isso for possível, redirecionar a habilidade é uma ação padrão.</p>
      </>
    ),
  },
  { id: "clarificacoes-regras",
    title: "Clarificações de Regras",
    content: (
      <>
        <p><strong>Arredondando:</strong> A menos que indicado o contrário, sempre que um efeito indica uma divisão, arredonde para baixo. Por exemplo, se um ataque causa 7 pontos de dano e um efeito reduz esse dano à metade, o ataque causa apenas 3 pontos de dano.</p>
        <p className="mt-2"><strong>Ordem:</strong> Se mais de um efeito afetar um valor, siga a ordem de operações padrão. Ou seja, aplique primeiro multiplicações e divisões, depois somas e subtrações. O resultado de um teste de resistência é sempre o primeiro a ser aplicado.</p>
        
        <blockquote className="border-l-4 border-red-400 pl-4 bg-gray-900/50 p-2 my-4 text-sm">
          Por exemplo: um guerreiro usando uma armadura incandescente (que fornece redução de fogo 10) é atingido por uma Bola de Fogo que causa 26 pontos de dano. Primeiro, ele faz seu teste de Reflexos. Se passar, reduz o dano à metade, para 13 (26/2=13). Então, o guerreiro pode usar a habilidade Durão. Se tiver passado no teste de resistência, sofrerá 6 pontos de dano (13/2=6). Se tiver falhado, sofrerá 13 pontos de dano (26/2=13). Por fim, ele aplica sua RD 10. Se tiver passado no teste de resistência e usado a habilidade Durão, não sofrerá dano. Se tiver passado no teste de resistência ou usado a habilidade Durão, sofrerá 3 pontos de dano (13–10=3). Por fim, se não tiver passado no teste nem usado Durão, sofrerá 16 pontos de dano (26–10=16).
        </blockquote>

        <p><strong>Multiplicações:</strong> Se mais de um efeito fizer você multiplicar um valor, combine-os em um único multiplicador, com cada efeito além do primeiro adicionando seu multiplicador –1. Por exemplo, dois efeitos que dobrem o valor (x2 + x2) irão triplicar o valor (2 + [2–1] = 3) em vez de quadruplicá-lo.</p>
      </>
    ),
  },
  { id: "acumulando-efeitos",
    title: "Acumulando Efeitos",
    content: (
      <>
      <p>A interação entre diferentes efeitos depende de sua origem. As fontes de efeitos são habilidades, perícias, itens, magias, parceiros e o ambiente.</p>
      <p>Efeitos de habilidades e perícias acumulam entre si, exceto quando vierem da mesma habilidade ou perícia. Assim, o bônus na Defesa da Pele de Ferro do bárbaro acumula com o bônus na Defesa da Esquiva Sagaz do bucaneiro. Isso não inclui magias.</p>
      <p>Efeitos de itens, magias, parceiros e o ambiente acumulam com os de outras fontes, mas não entre si. Assim, um personagem com um item que forneça +1 em Fortitude e uma magia que também forneça +1 em Fortitude terá um bônus de +2 nessa perícia. Porém, um personagem com dois itens ou duas magias que forneçam +1 em Fortitude não terá +2 — como os efeitos são da mesma fonte, não acumulam.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Armaduras:</strong> Bônus na Defesa e penalidade de armadura de escudos se acumulam com os de armaduras e um outro item adicional a sua escolha.</li>
          <li><strong>Atributos:</strong> O valor de um mesmo atributo não se acumula em características do personagem. Ou seja, um clérigo/druida não soma duas vezes sua Sabedoria nos pontos de mana, assim como um bucaneiro/nobre não soma duas vezes seu Carisma na Defesa. A exceção são perícias: é possível somar um atributo a uma perícia que use este mesmo atributo-chave, mas apenas uma vez. Por exemplo, um caçador pode usar Explorador para somar sua Sabedoria em Percepção e Sobrevivência (perícias que usam Sabedoria).</li>
          <li><strong>Chance de Falha:</strong> Chance de falha nunca acumula acima de 75%. Sempre há no mínimo uma chance de 1 em 4 de acertar o alvo.</li>
          <li><strong>Reduções de Custo:</strong> Reduções no custo de PM não são cumulativas. Uma habilidade nunca pode ter seu custo reduzido para menos de 1 PM.</li>
        </ul>
      </>
    ),
  },
  { id: "Efeitos que Afetam Testes",
    title: "Efeitos que Afetam Testes",
    content: (
      <>
        <p>Efeitos que fornecem um bônus a um teste ou modificam sua dificuldade devem ser usados antes de rolar o dado. Efeitos que permitem que você role novamente o dado devem ser usados antes de o mestre declarar se você passou ou não no teste (e você deve ficar com o segundo valor rolado, mesmo que seja pior que o primeiro).</p>
        <p>A habilidade Orgulho, do nobre, que fornece um bônus para um teste, deve ser usada antes de rolar o teste. A habilidade Mestre em Arma, do guerreiro, que permite que você role novamente um ataque recém realizado, deve ser usada antes de o mestre declarar se o ataque acertou ou não.</p>
      </>
    ),
  },
  { id: "limites-nivel",
    title: "Limites de Nível",
    content: (
      <>
        <p>Algumas habilidades são limitadas pelo seu nível. Para classes, use seu nível naquela classe. Para outros casos, seu nível de personagem.</p>
        <p className="text-sm italic">
          A habilidade Insolência, do bucaneiro, permite que você some seu Carisma na Defesa, limitado pelo seu nível. Assim, um bucaneiro de 2º nível com Car 3 soma +2 na Defesa. Quando subir para o 3º nível, passará a somar +3. Da mesma forma, um lutador de 4º nível usando a habilidade Voadora soma no máximo +4d6 de dano, mesmo que tenha se deslocado mais de 8 quadrados.
        </p>
      </>
    ),
  },
  { id: "duracao", 
    title: "Duração", content: ( <> <p>A duração indica por quanto tempo a habilidade mantém seu efeito.</p> <ul className="list-disc ml-6 space-y-2"> <li><strong>Instantânea.</strong> O efeito da habilidade termina assim que ela é usada, mas suas consequências podem durar mais tempo. Por exemplo, uma magia <em>Curar Ferimentos</em> age instantaneamente, mas os ferimentos continuam curados.</li> <li><strong>Cena.</strong> A habilidade dura uma cena inteira, encerrando-se quando esse momento da história acaba. Uma cena não tem medida fixa: pode ser algumas rodadas (um combate), alguns minutos (uma conversa), horas (atravessar um bosque) ou até dias (uma viagem sem incidentes).</li> <li><strong>Sustentada.</strong> A habilidade precisa de um fluxo constante de mana. O personagem deve gastar 1 PM como ação livre no início de cada turno para manter o efeito ativo. Se não o fizer, a habilidade termina. É possível manter várias habilidades sustentadas, pagando o custo de cada uma, mas apenas uma magia sustentada por vez.</li> <li><strong>Definida.</strong> A duração pode ser medida em rodadas, horas, dias ou outra unidade de tempo.</li> <li><strong>Permanente.</strong> A habilidade fica ativa para sempre, mas ainda pode ser encerrada de outras formas.</li> </ul> <p><strong>Duração e Áreas.</strong> Caso a habilidade afete uma área, seus efeitos permanecem nessa área pela sua duração. Criaturas e objetos válidos que entrem na área são afetados, deixando de sê-lo quando saem.</p> <p><strong>Descarregar.</strong> Algumas habilidades duram até serem ativadas e descarregadas. A habilidade permanece “dormente” até que determinado evento aconteça, quando é ativada e descarregada, ou até que sua duração transcorra.</p> <p><strong>Encerrando suas habilidades.</strong> Um personagem pode encerrar uma habilidade sua e seus respectivos efeitos como uma ação livre.</p> <p><strong>Morte e Duração.</strong> A morte de um personagem não afeta suas habilidades (exceto sustentadas) — elas permanecem até que sua duração termine.</p> </> ), 
  },
  { id: "testes-resistencia", 
    title: "Testes de Resistência", content: ( <> <p>Habilidades prejudiciais normalmente permitem que seus alvos façam um teste de resistência para evitar ou reduzir seus efeitos. O tipo de teste (Fortitude, Reflexos ou Vontade) e a maneira como ele altera o efeito serão descritos na habilidade.</p> <p>A CD do teste de resistência para qualquer efeito gerado por um personagem é <strong>10 + metade do nível do personagem + atributo</strong>. O atributo aparecerá entre parênteses na descrição da fonte do efeito (habilidade ou item; para magias, será sempre o atributo-chave da magia).</p> <blockquote className="border-l-4 border-red-500 pl-4 italic text-sm text-gray-300"> Exemplo: A habilidade <strong>Presença Aristocrática</strong>, do nobre, tem CD baseada em Carisma. Para Marsha Yleus, uma humana nobre de 10º nível com Carisma 4, a CD para resistir é 19 (10 + 5 + 4). </blockquote> <ul className="list-disc ml-6 space-y-2"> <li><strong>Anula.</strong> A habilidade não tem efeito sobre um alvo que passe no teste.</li> <li><strong>Parcial.</strong> O efeito é menor em um alvo que passe no teste.</li> <li><strong>Reduz à Metade.</strong> O efeito é reduzido à metade em um alvo que passe no teste.</li> <li><strong>Desacredita.</strong> Termo específico para ilusões. Se uma criatura interagir com a ilusão (examinando ou tocando), tem direito a um teste para perceber que não é real. A ilusão continua funcionando mesmo que seja percebida; a criatura pode avisar aliados como ação livre, permitindo que eles façam testes para desacreditar.</li> </ul> <p><strong>Objetos e Dano.</strong> A menos que a descrição diga o contrário, itens carregados não sofrem dano por habilidades. Objetos soltos sofrem dano se a habilidade puder afetar objetos ou áreas.</p> <p><strong>Objetos e Testes de Resistência.</strong> Para habilidades que afetam objetos e permitem testes de resistência: itens mundanos soltos falham automaticamente; itens mundanos carregados usam o bônus do portador; itens mágicos sempre podem fazer teste, usando seu próprio bônus ou o do portador, o que for maior.</p> <p><strong>Testes de Perícia.</strong> Algumas habilidades incluem testes de perícia para resistir a efeitos. A dificuldade desses testes é igual à CD para resistir à habilidade, salvo indicação contrária.</p> </> ), 
  },
  { id: "tipos-efeitos",
  title: "Tipos de Efeitos",
  content: (
    <>
      <p>
        Muitos efeitos são categorizados em um (ou mais de um) dos tipos a seguir. 
        Por si só, a maioria dos tipos não possui efeito em regras. Contudo, indicam 
        como o efeito interage com outros. Por exemplo, uma criatura com imunidade 
        a medo não será afetada por efeitos do tipo medo.
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Arcano.</strong> Gerado pelas energias místicas de Arton. Todos efeitos arcanos são mágicos.</li>
        <li><strong>Atordoamento.</strong> Afeta a capacidade de agir do alvo.</li>
        <li><strong>Cansaço.</strong> Diminui as capacidades físicas do alvo. Construtos e mortos-vivos são imunes a efeitos de cansaço.</li>
        <li><strong>Climático.</strong> Gerado pelas forças da natureza.</li>
        <li><strong>Cura.</strong> Cura pontos de vida do alvo.</li>
        <li><strong>Dano.</strong> Reduz os PV do alvo. Efeitos deste tipo são subdivididos em tipos de dano.</li>
        <li><strong>Divino.</strong> Gerado pela energia de um deus, direta ou indiretamente. Todos efeitos divinos são mágicos.</li>
        <li><strong>Luz.</strong> Relacionados a dano e cura de luz, iluminação e energia positiva.</li>
        <li><strong>Mágico.</strong> Energizados por forças arcanas ou divinas, envolvem magias ou efeitos de itens mágicos. Podem ser subdivididos em escolas de magia.</li>
        <li><strong>Medo.</strong> Medo capaz de prejudicar o alvo. Criaturas com Inteligência nula são imunes a medo.</li>
        <li><strong>Mental.</strong> Afeta a mente do alvo, diminuindo suas capacidades ou influenciando-a. Criaturas com Inteligência nula são imunes.</li>
        <li><strong>Metabolismo.</strong> Afeta a fisiologia do alvo. Inclui doenças, sangramento e fome. Construtos e mortos-vivos são imunes.</li>
        <li><strong>Metamorfose.</strong> Altera a forma ou composição corporal do alvo. Inclui petrificação.</li>
        <li><strong>Movimento.</strong> Afeta ou remove a capacidade de se movimentar do alvo.</li>
        <li><strong>Perda de Vida.</strong> Reduz os PV do alvo. Ao contrário de dano, não é afetado por redução de dano.</li>
        <li><strong>Sentidos.</strong> Afeta os sentidos físicos do alvo, por exemplo, deixando-o cego ou surdo.</li>
        <li><strong>Trevas.</strong> Relacionados a necromancia, escuridão e energia negativa.</li>
        <li><strong>Veneno.</strong> Efeitos gerados por venenos. Construtos e mortos-vivos são imunes.</li>
      </ul>
    </>
  ),
  },
  { id: "habilidades-gerais",
  title: "Habilidades Gerais",
  content: (
    <>
      <p>
        As habilidades a seguir podem ser fornecidas por diversas fontes, como raça ou magias.
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Agarrar Aprimorado.</strong> Se a criatura acertar um ataque com uma arma natural (especificada na habilidade), poderá fazer a manobra agarrar com esta arma como uma ação livre. Enquanto usa a arma natural para agarrar, não pode usá-la para outros ataques.</li>
        <li><strong>Cura Acelerada.</strong> No início de seu turno, a criatura recupera pontos de vida iguais ao seu valor de cura acelerada. Se houver algum tipo de dano listado após uma barra, esta habilidade não recupera esse tipo de dano. Cura acelerada não cura perda de PV, apenas dano.</li>
        <li><strong>Deslocamento de Escalada.</strong> Pode caminhar por superfícies verticais e até mesmo de cabeça para baixo como se fossem o chão. O movimento de escalada segue as regras de movimento e é afetado pelas características da superfície. Se perder o deslocamento de escalada ou a capacidade de realizar ações físicas, cai.</li>
        <li><strong>Deslocamento de Escavação.</strong> Pode se mover sob terreno granular, como terra e areia (mas não rocha sólida). Após a passagem, o terreno atrás se fecha. Pode ser afetado pelas características do solo.</li>
        <li><strong>Deslocamento de Natação.</strong> Pode se deslocar na água sem precisar de testes de Atletismo. Pode respirar debaixo d’água, mas não fora dela, a menos que tenha outra forma de deslocamento. Não sofre penalidades por estar submersa.</li>
        <li><strong>Deslocamento de Voo.</strong> Pode voar. Uma criatura voando que perca o deslocamento de voo ou a capacidade de realizar ações cai. Se sofrer uma manobra derrubar bem-sucedida, cai uma distância antes de recuperar o voo.</li>
        <li><strong>Faro.</strong> Tem olfato apurado. Contra inimigos em alcance curto que não possa ver, não fica desprevenida e camuflagem total lhe causa apenas 20% de chance de falha.</li>
        <li><strong>Imunidade.</strong> É imune a um tipo de efeito ou elemento. Não sofre consequências diretas, mas pode ser afetada indiretamente. Imunidade a críticos os transforma em acertos normais.</li>
        <li><strong>Incorpóreo.</strong> Não tem corpo físico. Só pode ser afetada por armas e efeitos mágicos ou outras criaturas incorpóreas. Pode atravessar objetos sólidos, mas não manipulá-los, e tem Força nula.</li>
        <li><strong>Percepção às Cegas.</strong> Usa sentidos diferentes da visão. Efeitos relacionados à visão não a afetam. Pode fazer testes de Percepção usando esses sentidos. Tem alcance curto, salvo especificação.</li>
        <li><strong>Redução de Dano (RD).</strong> Ignora parte do dano que sofre. A redução pode ser contra tipos específicos. Caso haja tipos listados após uma barra, a RD não se aplica a eles.</li>
        <li><strong>Resistência a &lt;Efeito&gt;.</strong> Recebe bônus em testes de resistência contra efeitos do tipo especificado. Exemplo: resistência a magia +2 concede +2 em testes contra habilidades mágicas.</li>
        <li><strong>Visão na Penumbra.</strong> Enxerga em escuridão leve em alcance curto (exceto mágica). Ignora camuflagem leve por esse tipo de escuridão.</li>
        <li><strong>Visão no Escuro.</strong> Enxerga em escuridão total em alcance curto (exceto mágica). Ignora camuflagem total por esse tipo de escuridão.</li>
        <li><strong>Vulnerabilidade a Dano.</strong> Sofre +50% de dano de um tipo específico. Exemplo: vulnerabilidade a frio faz sofrer 22 pontos de dano em vez de 15.</li>
      </ul>
    </>
  ),
  },
  { id: "combate",
  title: "Combate",
  content: (
    <>
      <p>
        Embora seja possível superar obstáculos e vencer inimigos de muitas formas, às vezes os heróis ficam sem escolha além de sacar suas armas, preparar suas magias e partir para a batalha.
      </p>
    </>
  ),
  },
  { id: "estatisticas-combate",
  title: "Estatísticas de Combate",
  content: (
    <>
      <p>
        A seguir estão as explicações das estatísticas usadas em combate.
      </p>

      <h4 className="mt-4 font-bold text-red-300">Teste de Ataque</h4>
      <p>
        Este é um tipo específico de teste de perícia, para acertar um alvo com um ataque. Normalmente é um teste de <strong>Luta</strong>, para um ataque corpo a corpo, ou de <strong>Pontaria</strong>, para um ataque à distância.
      </p>
      <p>
        A dificuldade do teste é a <strong>Defesa</strong> do alvo. Se o resultado é igual ou maior que a Defesa, você acerta e causa dano. Um teste de ataque pode sofrer modificadores por habilidades, arma e condições.
      </p>

      <h4 className="mt-4 font-bold text-red-300">Dano</h4>
      <p>
        Quando você acerta um ataque, causa dano. Esse dano reduz os pontos de vida do inimigo. Você rola dados para descobrir quanto dano causou. O tipo de dado depende da arma ou ataque utilizado — por exemplo, <strong>1d4</strong> para uma adaga ou <strong>1d8</strong> para uma espada longa.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Dano com Arma Corpo a Corpo ou de Arremesso</strong> = Dano da Arma + Força do Atacante.</li>
        <li><strong>Dano com Arma de Disparo</strong> = Dano da Arma.</li>
      </ul>
      <blockquote className="border-l-4 border-red-500 pl-4 italic text-sm text-gray-300">
        Exemplo: um personagem com Força 3 usando uma espada longa causa <strong>1d8+3</strong> pontos de dano (1d8 da espada longa mais 3 da Força).
      </blockquote>

      <h4 className="mt-4 font-bold text-red-300">Tipos de Dano</h4>
      <p>
        Cada arma ou efeito que causa dano possui um tipo. Por si só, o tipo não possui efeito em regras, mas indica a relação do dano com outros efeitos.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Ácido.</strong> Certos monstros e perigos naturais, além de itens alquímicos, causam dano deste tipo. Ligado ao elemento terra.</li>
        <li><strong>Corte.</strong> Armas afiadas, como espadas e machados, causam dano de corte.</li>
        <li><strong>Eletricidade.</strong> Magias e perigos naturais, como relâmpagos, causam dano deste tipo. Ligado ao elemento ar.</li>
        <li><strong>Essência.</strong> Energia mágica pura, canalizada por magias.</li>
        <li><strong>Fogo.</strong> Causado por calor e chamas naturais e mágicas. Ligado ao elemento fogo.</li>
        <li><strong>Frio.</strong> Magias e clima severo podem causar dano de frio. Ligado ao elemento água.</li>
        <li><strong>Impacto.</strong> Causado por armas de contusão, explosões, ataques sônicos e quedas.</li>
        <li><strong>Luz.</strong> Magias e efeitos de divindades bondosas causam dano de luz.</li>
        <li><strong>Perfuração.</strong> Armas pontudas, como lanças, e mordidas de monstros causam dano de perfuração.</li>
        <li><strong>Psíquico.</strong> Ataques mentais e magias que afetam a mente causam dano psíquico.</li>
        <li><strong>Trevas.</strong> Causado por efeitos de necromancia e ligados a divindades malignas.</li>
      </ul>

      <h4 className="mt-4 font-bold text-red-300">Acertos Críticos</h4>
      <p>
        Um acerto crítico é um ataque especialmente certeiro, que atinge pontos vitais ou vulneráveis. A tabela de armas possui uma coluna “Crítico”, com margem de ameaça (18, 19 ou 20) e multiplicador (x2, x3 ou x4). Quando não aparece margem, será 20. Quando não aparece multiplicador, será x2.
      </p>
      <p>
        Você faz um acerto crítico quando acerta um ataque rolando um valor igual ou maior que a margem de ameaça da arma. Neste caso, multiplica os dados de dano do ataque pelo multiplicador da arma. Bônus numéricos de dano e dados extras (como *Ataque Furtivo*) <strong>não são multiplicados</strong>.
      </p>
      <p>
        Certas criaturas são imunes a acertos críticos. Um alvo imune ainda sofre o dano de um ataque normal.
      </p>
    </>
  ),
  },
  { id: "como-funciona-combate",
  title: "Como funciona o combate?",
  content: (
    <>
      <p>
        O combate acontece em uma série de rodadas. Uma rodada é o tempo necessário para que todos os personagens no combate tenham seu turno. Um turno é o tempo que cada personagem tem para agir. Um combate obedece aos seguintes passos:
      </p>

      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Passo 1.</strong> Cada personagem faz um teste de Iniciativa. O mestre faz um único teste para os inimigos.</li>
        <li><strong>Passo 2.</strong> O mestre diz quais personagens estão cientes de seus inimigos. Aqueles que não percebem a presença de inimigos começam o combate <strong>surpreendidos</strong>. Um personagem surpreendido fica <strong>desprevenido</strong> e não age na primeira rodada.</li>
        <li><strong>Passo 3.</strong> Todos os personagens têm seu turno na ordem da Iniciativa (exceto aqueles surpreendidos, que não agem na primeira rodada).</li>
        <li><strong>Passo 4.</strong> Quando todos os personagens tiverem seu turno, a rodada termina. Uma nova rodada se inicia, com todos agindo novamente na mesma ordem. Mesmo aqueles que estavam surpreendidos agora podem agir.</li>
      </ul>

      <h4 className="mt-4 font-bold text-red-300">Iniciativa</h4>
      <p>
        A cada rodada, todo personagem tem um turno — sua vez de agir. A Iniciativa determina a ordem dos turnos dentro da rodada.
      </p>
      <p>
        <strong>Teste de Iniciativa.</strong> No início do combate, cada jogador faz um teste de Iniciativa para seu personagem. O mestre faz um único teste para os inimigos. Aqueles com os resultados mais altos agem primeiro. Em caso de empate, o personagem com maior valor de perícia age primeiro; se persistir, fazem novo teste entre si. A ordem se mantém durante todo o combate.
      </p>
      <p>
        <strong>Entrando na Batalha.</strong> Se um personagem entra depois que o combate começou, faz um teste de Iniciativa e age quando seu turno chegar, na rodada seguinte.
      </p>
      <p>
        <strong>Surpresa.</strong> Se você não percebeu seus inimigos, está surpreendido. Se você percebeu, mas eles não, eles estão surpreendidos. Se ambos se perceberam, ninguém está surpreendido. Se nenhum lado percebe o outro, não há combate.
      </p>
      <p>
        <strong>Percebendo os Inimigos.</strong> O mestre diz quem está ciente dos inimigos. Em geral, os jogadores fazem testes de Percepção contra uma dificuldade ou opostos ao teste de Furtividade dos inimigos. Um personagem que nunca fica surpreendido (como quem tem *Esquiva Sobrenatural*) pode rolar Iniciativa e agir mesmo que falhe na Percepção.
      </p>

      <h4 className="mt-4 font-bold text-red-300">A Rodada de Combate</h4>
      <p>
        Uma rodada representa cerca de seis segundos no mundo de jogo. Durante a rodada, cada jogador (incluindo o mestre) tem o seu turno. A rodada começa no turno do personagem com maior Iniciativa e termina após o turno do último. Efeitos que duram certo número de rodadas terminam imediatamente antes do mesmo resultado de Iniciativa quando se iniciaram.
      </p>

      <h4 className="mt-4 font-bold text-red-300">Tipos de Ações</h4>
      <p>
        No seu turno, você pode fazer uma <strong>ação padrão</strong> e uma <strong>ação de movimento</strong>, em qualquer ordem. Você pode trocar sua ação padrão por uma de movimento, mas não o inverso. Também pode abrir mão das duas para fazer uma <strong>ação completa</strong>. Além disso, pode executar qualquer quantidade de <strong>ações livres</strong> e <strong>reações</strong>.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Uma ação padrão e uma ação de movimento;</li>
        <li>Duas ações de movimento;</li>
        <li>Uma ação completa;</li>
        <li>Qualquer quantidade de ações livres e reações.</li>
      </ul>
      <p><strong>Ação Padrão.</strong> Permite executar uma tarefa importante, como atacar ou lançar uma magia.</p>
      <p><strong>Ação de Movimento.</strong> Representa movimento físico: percorrer deslocamento, levantar-se, sacar arma, abrir porta, subir em montaria.</p>
      <p><strong>Ação Completa.</strong> Exige todo o tempo da rodada, substituindo ação padrão e de movimento.</p>
      <p><strong>Ação Livre.</strong> Não exige tempo significativo, mas só pode ser feita em seu turno. Exemplos: jogar-se no chão, gritar uma ordem.</p>
      <p><strong>Reação.</strong> Acontece em resposta a outra coisa, pode ocorrer fora do turno e mesmo se não puder realizar ações.</p>

      <h4 className="mt-4 font-bold text-red-300">Ações Padrão</h4>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Agredir.</strong> Ataque corpo a corpo ou à distância. Corpo a corpo: alcance natural (1,5m para criaturas Pequenas e Médias). À distância: qualquer inimigo visível no alcance da arma (até o dobro com –5). <em>Atirando em Combate Corpo a Corpo:</em> sofre –5 no ataque à distância contra inimigo dentro do alcance natural de qualquer inimigo.</li>
        <li><strong>Atropelar.</strong> Durante um movimento, avança pelo espaço ocupado por uma criatura. Se resistir, faça teste de manobra oposto; se vencer, a criatura cai e você continua.</li>
        <li><strong>Fintar.</strong> Teste de Enganação oposto ao teste de Reflexos de uma criatura em alcance curto. Se passar, ela fica desprevenida contra seu próximo ataque até o fim do próximo turno.</li>
        <li><strong>Lançar uma Magia.</strong> A maioria das magias exige uma ação padrão.</li>
        <li><strong>Preparar.</strong> Prepara uma ação para realizar mais tarde como reação. Sua Iniciativa fica imediatamente acima da qual você fez a ação preparada.</li>
        <li><strong>Usar uma Habilidade ou Item Mágico.</strong> Algumas habilidades e itens, como poções, exigem uma ação padrão.</li>
      </ul>
    </>
  ),
  },
  { id: "manobras-combate",
  title: "Manobras de Combate",
  content: (
    <>
      <p>
        Uma manobra é um ataque corpo a corpo para fazer algo diferente de causar dano — como arrancar a arma do oponente ou empurrá-lo para um abismo. <strong>Não é possível fazer manobras de combate com ataques à distância.</strong>
      </p>
      <p>
        Faça um <strong>teste de manobra</strong> (um teste de ataque corpo a corpo) oposto com a criatura. Mesmo que ela esteja usando uma arma de ataque à distância, deve fazer o teste usando seu valor de Luta. Em caso de empate, vence quem tiver maior bônus; se persistir, outro teste deve ser feito. Em geral, você pode usar qualquer arma corpo a corpo para fazer manobras.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Agarrar.</strong> Segura uma criatura, deixando-a <strong>desprevenida e imóvel</strong>. Sofre –2 nos testes de ataque e só pode atacar com armas leves. Pode se soltar com ação padrão vencendo um teste oposto. Só pode agarrar com ataque desarmado ou arma natural. Enquanto agarra, move-se com metade do deslocamento e arrasta a criatura. Pode soltá-la com ação livre. Se preferir, pode substituir um ataque por um teste de agarrar e causar dano de impacto.</li>
        <li><strong>Derrubar.</strong> Deixa o alvo <strong>caído</strong>. Se vencer por 5 pontos ou mais, também o empurra um quadrado. Se cair de um precipício, pode fazer Reflexos (CD 20) para se segurar.</li>
        <li><strong>Desarmar.</strong> Derruba um item que a criatura esteja segurando. Se vencer por 5 pontos ou mais, empurra o item um quadrado.</li>
        <li><strong>Empurrar.</strong> Empurra a criatura 1,5m. Para cada 5 pontos de diferença, empurra mais 1,5m. Pode gastar ação de movimento para avançar junto.</li>
        <li><strong>Quebrar.</strong> Atinge um item que a criatura esteja segurando.</li>
      </ul>
    </>
  ),
  },
  { id: "acoes-movimento",
  title: "Ações de Movimento",
  content: (
    <>
      <p>
        Uma ação de movimento serve para mudar algo de posição — seja você, seja um item.
      </p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Levantar-se.</strong> Levantar do chão exige uma ação de movimento.</li>
        <li><strong>Manipular Item.</strong> Pegar objeto, abrir ou fechar porta, atirar corda.</li>
        <li><strong>Mirar.</strong> Mira em um alvo visível, anulando a penalidade de –5 em Pontaria contra alvo engajado em combate corpo a corpo.</li>
        <li><strong>Movimentar-se.</strong> Percorre distância igual ao deslocamento. Outros movimentos (nadar, escalar, cavalgar) também usam esta ação.</li>
        <li><strong>Sacar ou Guardar Item.</strong> Sacar ou guardar um item exige ação de movimento. Com Ambidestria, pode sacar todas as armas.</li>
      </ul>
    </>
  ),
  },
  { id: "acoes-completas",
    title: "Ações Completas",
    content: (
      <>
        <p>
          Ações completas exigem muito tempo e esforço.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Corrida.</strong> Corre mais rápido que o deslocamento normal. Veja Atletismo.</li>
          <li><strong>Golpe de Misericórdia.</strong> Golpe letal em oponente indefeso adjacente. É um <strong>acerto crítico automático</strong>. Além do dano, chance de morte instantânea (25% para personagens importantes, 75% para NPCs secundários).</li>
          <li><strong>Investida.</strong> Avança até o dobro do deslocamento em linha reta e faz ataque corpo a corpo. Recebe +2 no ataque, mas –2 na Defesa até o próximo turno. Não pode ser feita em terreno difícil. Durante a investida, pode fazer a manobra <em>atropelar</em> como ação livre.</li>
          <li><strong>Lançar uma Magia.</strong> Magias com execução maior que uma ação completa exigem ação completa a cada rodada.</li>
        </ul>
      </>
    ),
  },
  { id: "acoes-livres",
    title: "Ações Livres",
    content: (
      <>
        <p>
          Uma ação livre demanda pouco ou nenhum tempo, esforço ou atenção.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Atrasar.</strong> Age mais tarde na ordem de Iniciativa. É o mesmo que reduzir voluntariamente sua Iniciativa. Limite: até –10 menos seu valor. Se vários atrasarem, o de maior Iniciativa original age primeiro.</li>
          <li><strong>Falar.</strong> Em geral, falar é ação livre. O mestre pode limitar (padrão de vinte palavras).</li>
          <li><strong>Jogar-se no Chão.</strong> Recebe benefícios e penalidades normais por estar caído, mas normalmente não sofre dano.</li>
          <li><strong>Largar um Item.</strong> Deixar cair um item segurado é ação livre. (Lançar para acertar algo é ação padrão; lançar para alguém agarrar é ação de movimento).</li>
        </ul>
      </>
    ),
  },
  { id: "ferimentos-morte",
    title: "Ferimentos & Morte",
    content: (
      <>
        <p>
          Sempre que você sofre dano, subtrai este valor de seus pontos de vida. O dano não o impede de agir até que seus PV cheguem a <strong>0 ou menos</strong>.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Inconsciência e Sangramento.</strong> Com 0 PV ou menos, cai inconsciente e sangra. No início do turno, faça Constituição (CD 15). Sucesso: estabiliza. Falha: perde 1d6 PV e repete na próxima rodada.</li>
          <li><strong>Estabilização Externa.</strong> Pode ser estabilizado com Cura (CD 15) ou efeito que cure ao menos 1 PV.</li>
          <li><strong>Recuperando a Consciência.</strong> Se recuperar PV até positivo (1 ou mais), recobra a consciência.</li>
          <li><strong>Morte.</strong> Morre ao chegar a –10 PV ou a um número negativo igual à metade dos PV totais (o que for mais baixo).</li>
        </ul>
        <blockquote className="border-l-4 border-red-500 pl-4 italic text-sm text-gray-300">
          Exemplo: Oberon, com 12 PV, morre se chegar a –10 PV. Mais tarde, com 30 PV, só morre se chegar a –15 PV.
        </blockquote>

        <h4 className="mt-4 font-bold text-red-300">Dano Não Letal</h4>
        <p>
          Dano não letal conta para cair inconsciente, mas não para sangrar ou morrer. Cura recupera primeiro PV perdidos por dano não letal.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Armas Letais.</strong> Podem causar dano não letal sofrendo –5 no ataque.</li>
          <li><strong>Ataques Desarmados.</strong> Causam dano não letal. Podem causar dano letal sofrendo –5 no ataque.</li>
        </ul>
      </>
    ),
  },
  { id: "movimentacao", 
    title: "Movimentação", content: ( <> <ul className="list-disc ml-6 space-y-2"> <li><strong>Deslocamento.</strong> Medida de quantos metros você percorre com uma ação de movimento (padrão 9m).</li> <li><strong>Atravessar Espaço Ocupado.</strong> Você pode atravessar o espaço de um aliado. Espaço de inimigo só pode ser atravessado se ele estiver caído/indefeso, se houver diferença de três categorias de tamanho, ou via <em>Acrobacia</em>/<em>Atropelar</em>. Espaço de inimigo conta como <strong>terreno difícil</strong>.</li> <li><strong>Carga.</strong> Se estiver sobrecarregado, seu deslocamento diminui em <strong>3m</strong>.</li> <li><strong>Diagonais.</strong> Mover-se na diagonal custa o dobro (<strong>3m por quadrado</strong>).</li> <li><strong>Subir ou Mergulhar.</strong> Na vertical, subir custa o dobro e descer custa a metade.</li> <li><strong>Terreno Difícil.</strong> Neve, raízes ou escombros. Mover-se aqui custa o dobro (<strong>3m por quadrado</strong>).</li> </ul> </> ), 
  },
  { id: "situacoes-especiais",
    title: "Situações Especiais",
    content: (
      <>
        <h4 className="mt-4 font-bold text-red-300">Camuflagem</h4>
        <p>Dificulta a visão do alvo (neblina, escuridão leve).</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Leve:</strong> 20% de chance de falha (1 ou 2 no d10).</li>
          <li><strong>Total:</strong> 50% de chance de falha (1 a 5 no d10).</li>
        </ul>

        <h4 className="mt-4 font-bold text-red-300">Cobertura</h4>
        <p>Bloqueio físico entre atacante e alvo (árvores, muralhas).</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Leve:</strong> Fornece +5 na Defesa.</li>
          <li><strong>Total:</strong> Impede que você seja atacado.</li>
        </ul>

        <h4 className="mt-4 font-bold text-red-300">Flanquear</h4>
        <p>
          Quando você e um aliado estão em lados opostos de um inimigo no corpo a corpo. 
          Ambos recebem <strong>+2 nos testes de ataque</strong>. Não se flanqueia à distância.
        </p>
      </>
    ),
  },
  { id: "quebrando-objetos",
    title: "Quebrando Objetos",
    content: (
      <>
        <p>Atacar um objeto é similar a atacar uma criatura.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Defesa:</strong> Definida pelo tamanho do objeto (+5 se estiver em movimento).</li>
          <li><strong>Quebrar:</strong> Se o objeto estiver sendo segurado, usa-se a manobra <em>Quebrar</em>.</li>
          <li><strong>Destruição:</strong> Objetos possuem <strong>Redução de Dano (RD)</strong> conforme o material. Um objeto com 0 PV é destruído.</li>
        </ul>
      </>
    ),
  },
  { id: "idades-variadas",
    title: "Idades Variadas (Opcional - Herois de Arton)",
    content: (
      <>
        <p>
          Personagens iniciantes em Tormenta20 normalmente são jovens, na casa dos 20 anos. Contudo, isso é apenas costume, não lei! Se você quiser, seu personagem pode ter uma idade diferente — a ficção está repleta de protagonistas mais novos ou mais velhos.
        </p>
        <p>
          Você pode considerar a idade de seu personagem um fator puramente descritivo, sem efeito em jogo. Se não quiser complicar as coisas, esse é o melhor caminho. Contudo, na vida real a idade é um fator determinante para diversas características pessoais — uma criança dificilmente terá a mesma força física de um adulto, por exemplo.
        </p>
        <p>
          Se você quiser que sua faixa etária tenha consequências em jogo (ou se simplesmente quiser mais um elemento mecânico com o qual construir sua ficha), pode usar as regras opcionais desta seção. Estas regras substituem os modificadores de atributos para personagens mais velhos descritos no livro básico (Tormenta20, p. 108).
        </p>
        
        <h4 className="font-bold text-red-300 mt-6">Personagens de Idades Variadas</h4>
        <p>
          Para criar um personagem de idade variada, escolha uma faixa etária para ele e aplique os efeitos dela. Existem sete faixas etárias: criança, adolescente, jovem, adulto, maduro, velho e ancião. A faixa etária padrão é jovem, a única que não altera sua ficha — todas as outras trazem benefícios e penalidades.
        </p>
        <p>
           Os efeitos de faixas etárias não são necessariamente equilibrados. No geral, crianças são menos poderosas que adultos, e os efeitos refletem isso. Se você quer um jogo balanceado, sugerimos que não use estas regras — elas são opcionais justamente por trazerem certo desequilíbrio!
        </p>

        {/* Tabela de Referência */}
        <div className="overflow-x-auto shadow-lg rounded-xl border border-stone-800 mt-6 mb-8 bg-stone-900">
          <table className="min-w-full divide-y divide-stone-800 font-serif text-sm">
            <caption className="p-3 text-lg font-bold text-red-500 bg-stone-950 border-b border-stone-800 text-left uppercase">
              Tabela: Faixas Etárias
            </caption>
            <thead className="bg-stone-950 text-red-600">
              <tr>
                <th className="px-4 py-3 text-left font-bold uppercase">Faixa Etária</th>
                <th className="px-4 py-3 text-left font-bold uppercase">Idade</th>
                <th className="px-4 py-3 text-left font-bold uppercase">Modificadores</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {ageGroups.map((group, idx) => (
                <tr key={group.name} className={idx % 2 === 0 ? "bg-stone-900" : "bg-stone-900/50"}>
                  <td className="px-4 py-3 font-bold text-stone-300 whitespace-nowrap">{group.name}</td>
                  <td className="px-4 py-3 text-stone-400 whitespace-nowrap">{group.age}</td>
                  <td className="px-4 py-3 text-stone-400 italic">{group.modifiers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detalhamento Completo */}
        <div className="space-y-6 mt-6">
          
          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Criança (9 a 12 anos)</strong>
            <p>
              A menor faixa etária possível para personagens jogadores. Obviamente existem pessoas mais novas no mundo, mas não recomendamos jogar com personagens com menos de 9 anos. Crianças nasceram durante a Guerra Artoniana, ou logo antes, mas eram muito pequenas para terem participado do conflito — provavelmente nem lembram dele. Embora não tenham se envolvido diretamente, podem ter sofrido suas consequências. Por exemplo, podem ser órfãos da guerra ou filhos de refugiados. Ou, se tiverem sorte, filhos de soldados que enriqueceram com espólios, ou mesmo de nobres que ganharam terras com as mudanças políticas.
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>Atributos:</strong> Força –2, Constituição –1, Sabedoria –1. Crianças são fisicamente mais fracas e frágeis que adultos, além de menos capazes de entender as sutilezas do mundo.</li>
              <li><strong>Tamanho Menor:</strong> Você é uma categoria de tamanho menor que o padrão de sua raça (exceto se sua raça já for Minúscula; nesse caso, a mudança é apenas estética).</li>
              <li><strong>Sem Origem:</strong> Você não recebe benefícios de origem. Você está apenas começando a viver os anos que definirão quem você será!</li>
              <li><strong>Protegido dos Deuses:</strong> Você recebe +2 na Defesa e +5 em todos os testes de resistência. Isso é uma mistura de sorte sobrenatural com o fato de que inimigos normalmente ignoram crianças, justamente por serem menos perigosas.</li>
            </ul>
          </div>

          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Adolescente (13 a 17 anos)</strong>
            <p>
              Muitos aventureiros começam suas carreiras nesta idade. Adolescentes viram a Guerra Artoniana, mas dificilmente terão participado dela. Esta é a categoria de idade mais velha para um personagem que nasceu em Tamu-ra após a libertação da ilha.
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>Atributos:</strong> Sabedoria –1. Adolescentes são conhecidos por sua impetuosidade.</li>
              <li><strong>Ímpeto Juvenil:</strong> Você recebe +3 pontos de mana. Adolescentes acham que podem fazer qualquer coisa, e essa confiança os torna mais heroicos.</li>
              <li><strong>Origem em Construção:</strong> Você recebe apenas um benefício de origem, em vez de dois (se sua origem possuir um único benefício, comece com uma perícia treinada a menos por sua classe).</li>
            </ul>
          </div>

          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Jovem (18 a 24 anos)</strong>
            <p>
              A idade padrão. Heróis jovens usam as regras básicas de construção de personagem, sem modificadores. Jovens podem ter participado da Guerra Artoniana, mas provavelmente em postos iniciais. Eles podem se lembrar de fatos históricos como as Guerras Táuricas, a Marcha de Arsenal, a batalha dos deuses em Tamu-ra, a Libertação de Valkaria e a coroação de Shivara como Rainha-Imperatriz, mas serão muito novos para terem efetivamente participado desses eventos.
            </p>
          </div>

          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Adulto (25 a 39 anos)</strong>
            <p>
              Uma idade comum para aventureiros — pelo menos para aqueles que não morreram em sua primeira caverna infestada de glops! Um personagem adulto pode ter participado dos últimos grandes acontecimentos do mundo, como a Guerra Artoniana, a queda da Flecha de Fogo ou a rebelião de escravos no Império de Tauron. Mesmo que não tenha se envolvido diretamente, pode ter sofrido as consequências deles. Um personagem desta faixa etária também terá visto acontecimentos mais antigos, como a queda do Paladino de Arton, a primeira batalha contra a Tormenta em Trebuck e a Libertação de Valkaria, mas dificilmente terá participado deles.
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>Já Vi Coisas:</strong> Você pode receber um poder geral. Nesse caso, também recebe uma complicação de idade (veja a seguir).</li>
            </ul>
          </div>

          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Maduro (40 a 59 anos)</strong>
            <p>
              Muitas figuras de autoridade, como burgomestres e capitães da guarda, são desta faixa etária. Elas talvez não tenham o vigor de pessoas mais novas, mas compensam isso com experiência. Um personagem maduro já terá visto muitas coisas. Além de tudo descrito em “Adulto”, acima, ele poderá se lembrar de eventos como a chegada de Mestre Arsenal ao mundo de Arton, a guerra civil de Bielefeld e o surgimento da Tormenta no Império de Jade. Será muito novo para ter participado desses eventos, mas poderá ter lutado contra Arsenal ou nas Guerras Táuricas, e novamente na Guerra Artoniana, sendo um veterano de diversos grandes conflitos.
            </p>
             <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>Veterano Calejado:</strong> Você começa o jogo com um nível adicional em relação aos personagens mais novos do grupo. Por exemplo, se o grupo vai começar no 1º nível, você começa no 2º. Contudo, essa experiência tem seu preço — você recebe duas complicações de idade.</li>
            </ul>
          </div>

          <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Velho (60 a 79 anos)</strong>
            <p>
              Num mundo de problemas como Arton, nem todos chegam a esta idade respeitável. Aqueles que a alcançam muitas vezes assumem posições de respeito, como mestres de guildas, alto sacerdotes ou conselheiros reais. Claro, nem todos atingem tamanha eminência. Alguns, ao chegar a esta idade, serão fazendeiros, artesãos ou estarão descansando em suas casas. Um artoniano velho terá muitas histórias para contar! Ele poderá se lembrar de eventos considerados lendários na era atual, como o eclipse solar no qual Thwor nasceu e a coroação do Rei-Imperador Thormy. Um personagem desta idade poderia até mesmo ter lutado no Dia dos Gigantes, em Valkaria, uma batalha hoje envolta em lendas e mistérios!
            </p>
             <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>Ai Minhas Costas:</strong> Você começa o jogo com dois níveis adicionais. Contudo, perde 1 ponto em todos os atributos físicos (Força, Destreza e Constituição) e recebe três complicações de idade. Além disso, não pode escolher o poder Aumento de Atributo para nenhum atributo físico — infelizmente, os tempos de vigor ficaram para trás. A partir deste ponto, mesmo o mais saudável dos aventureiros começa a sentir que a idade é um caminho sem volta…</li>
            </ul>
          </div>

           <div className="pb-4 border-b border-stone-800">
            <strong className="text-xl text-red-500 block mb-2 font-serif">Ancião (80+ anos)</strong>
            <p>
              A última faixa etária. Em Arton, poucas pessoas chegam até aqui — mesmo aqueles que não encontram um fim violento normalmente acabam morrendo de simples velhice antes de se tornarem anciões. Contudo, entre aqueles ricos o bastante para adquirir poções e magias milagrosas (ou tratamento médico de Salistick), atingir este patamar é mais comum. Um ancião é tão velho quanto o antigo Rei-Imperador Thormy. Ele terá visto diversas mudanças no mundo, como os primeiros contatos formais entre o Reinado e Tamu-ra e a chegada de Lorde Niebling a Arton. As histórias que um ancião escutava quando criança já foram praticamente esquecidas hoje, e falavam sobre o primeiro encontro de Talude e Vectorius, a fundação da Ordem da Luz e a luta contra um antigo deus chamado Sartan.
            </p>
             <ul className="list-disc ml-6 space-y-2 mt-3 text-stone-300">
              <li><strong>O Inverno da Vida:</strong> Você começa o jogo com três níveis adicionais. Porém, perde 2 pontos em todos os atributos físicos (Força, Destreza e Constituição) e recebe quatro complicações de idade. Assim como velhos, você não pode escolher o poder Aumento de Atributo para atributos físicos.</li>
            </ul>
          </div>

        </div>

        <h4 className="font-bold text-red-300 mt-8 border-b border-stone-800 pb-2 text-lg">O Peso da Idade</h4>
        <p className="mt-2">
          Personagens adultos ou mais velhos precisam escolher uma complicação de idade por faixa etária — ou seja, uma para adultos, duas para maduros, três para velhos e quatro para anciões. Como a velhice não atinge todas as pessoas da mesma forma, esta mecânica representa melhor os efeitos do envelhecimento do que os modificadores de atributos da regra padrão. Complicações de idade funcionam como complicações normais (veja p. 282). Seus efeitos se acumulam!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {ageComplications.map((comp) => (
            <div key={comp.name} className="bg-stone-950/50 p-4 rounded border border-stone-800 hover:border-red-900/30 transition-colors">
              <strong className="text-red-400 font-serif text-lg block mb-1">{comp.name}</strong>
              <p className="text-sm text-stone-300 leading-relaxed">{comp.effect}</p>
            </div>
          ))}
        </div>

        <h4 className="font-bold text-red-300 mt-8 border-b border-stone-800 pb-2 text-lg">Regras Adicionais</h4>
        <ul className="list-disc ml-6 space-y-3 mt-4 text-stone-300">
          <li>
            <strong>Envelhecendo:</strong> Quando atinge uma faixa etária maior, você ajusta seus efeitos de idade de acordo. Assim, se for criança e se tornar adolescente, aumenta uma categoria de tamanho e recebe +2 em Força, +1 em Constituição, um benefício de origem e a habilidade Ímpeto Juvenil, mas perde a habilidade Protegido dos Deuses. Se mais tarde se tornar jovem, ganha +1 em Sabedoria e um benefício de origem (completando os dois habituais), mas perde a habilidade Ímpeto Juvenil.
          </li>
          <li>
            <strong>Idades das Raças:</strong> Os intervalos de idade das faixas etárias usam as idades humanas como referência. Contudo, certas raças envelhecem em ritmos diferentes.
            <ul className="list-none mt-2 space-y-2 pl-4 border-l-2 border-stone-800">
               <li><span className="text-red-400 font-bold">Anões, meios-elfos e qareen:</span> Envelhecem mais lentamente que humanos. Multiplique os intervalos de idade deles a partir de adulto por 2.</li>
               <li><span className="text-red-400 font-bold">Dahllan, duendes, eiradaan, elfos, golens, osteon, sátiros e sílfides:</span> Envelhecem muito mais lentamente — multiplique os intervalos de idade deles a partir de adulto por 5. (Ex: um elfo se torna adulto aos 125 anos). Nota: embora essas raças sejam mais longevas, amadurecem no mesmo ritmo de humanos até a juventude.</li>
               <li><span className="text-red-400 font-bold">Goblins e trogs:</span> São menos longevos que humanos. Multiplique todos os intervalos de idade deles por 0,7 (arredonde para o valor mais próximo).</li>
            </ul>
          </li>
        </ul>
      </>
    )
  },
  { id: "objetivos-heroicos",
    title: "Objetivos Heroicos (Opcional - Herois de Arton)",
    content: (
      <>
        <p>
          Com esta regra opcional, você pode escolher um objetivo heroico para seu personagem: ascender ao trono de um reino, vingar a morte de seu mestre, tornar-se o líder de uma guilda de ladrões ou outra coisa igualmente grandiosa. Um objetivo heroico deve ser algo que marca uma virada na vida do personagem e que o modificará para sempre.
        </p>
        <p>
          Todo objetivo heroico deve ser grandioso e específico. Ser admitido na Ordem da Luz não é um objetivo heroico. Tornar-se o Alto Comandante, sim. Da mesma forma, não basta dizer que você deseja “ascender à nobreza” ou “punir um grande vilão”. Você deseja ser o rei de Bielefeld ou prender Dee. Cumprindo um objetivo heroico, você será o líder ou maior expoente de algo, terá revolucionado algum aspecto de Arton. O mestre tem a palavra final sobre o que pode ser um objetivo heroico.
        </p>
        <p>
          Você pode escolher seu objetivo durante a construção do personagem ou com a campanha já em andamento. Um objetivo heroico nunca pode começar já estando perto de ser cumprido. Por exemplo, você não pode esperar até estar em Lamnor para decidir que seu objetivo é ser o novo Ayrrak.
        </p>
        <p>
          Em termos de jogo, um personagem com um objetivo heroico recebe certos benefícios quando se aproxima de seu objetivo e sofre penalidades quando se afasta dele.
        </p>

        <h4 className="font-bold text-red-300 mt-6 border-b border-stone-800 pb-2">Mecânicas de Objetivo</h4>
        
        <div className="space-y-4 mt-4">
          <div>
            <strong className="text-red-400 block mb-1">Benefícios de Objetivo</strong>
            <p className="text-sm">
              No início de qualquer cena diretamente relacionada a seu objetivo, você recebe um benefício de acordo com seu objetivo. Esse benefício conta como uma habilidade e dura até o fim da cena.
            </p>
            <p className="text-sm mt-2">
              Você só pode receber um benefício de objetivo por aventura. Você pode escolher não receber o benefício em uma cena se achar que a aventura terá outra cena relacionada ao objetivo, que seja mais importante. O que exatamente significa uma cena diretamente relacionada a seu objetivo fica a critério do mestre. Como regra geral, se ao término da cena você estiver mais perto de seu objetivo, a cena ativa o benefício.
            </p>
          </div>

          <div>
            <strong className="text-red-400 block mb-1">Penalidades de Objetivo</strong>
            <p className="text-sm">
              Se ao fim de uma cena você estiver mais longe de seu objetivo, sofre uma penalidade ditada por seu objetivo. Você sofre essa penalidade mesmo que seja imune a seu efeito.
            </p>
            <p className="text-sm mt-2">
              Embora a maior parte das cenas não vá aproximá-lo de seu objetivo, provavelmente também não vai afastá-lo. Assim, cenas não relacionadas ao objetivo não impõem penalidades. Por exemplo, caso seu objetivo seja casar com Vladislav Tpish, uma cena longe da Academia Arcana não o afasta de seu objetivo. Contudo, uma cena em que você briga com ele o afasta.
            </p>
          </div>

          <div>
            <strong className="text-red-400 block mb-1">Concluindo um Objetivo</strong>
            <p className="text-sm">
              Se você completar seu objetivo, recebe um benefício maior e permanente. A partir desse ponto, não recebe mais benefícios ou penalidades em cenas relacionadas ao objetivo. Você não pode escolher um novo objetivo — afinal, um objetivo heroico é algo que define toda uma vida.
            </p>
          </div>
        </div>

        <h4 className="font-bold text-red-300 mt-8 border-b border-stone-800 pb-2">Tipos de Objetivos</h4>
        <p className="mt-2 mb-4">
          A seguir estão algumas categorias amplas nas quais seu objetivo pode se enquadrar. Se você quiser um objetivo que não se enquadre em nenhuma delas, você e o mestre podem criar uma nova categoria, usando estas como base.
        </p>

        <div className="grid gap-6 mt-6">
          {heroicGoals.map((goal) => (
            <div key={goal.name} className="bg-stone-900 border border-stone-800 rounded-lg p-5 hover:border-red-900/50 transition-colors shadow-sm">
              <h5 className="text-xl font-bold text-red-500 font-serif mb-2">{goal.name}</h5>
              <p className="text-stone-300 text-sm mb-4 italic border-l-2 border-stone-700 pl-3">
                "{goal.description}"
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-red-400 min-w-[80px]">Benefício:</span>
                  <span className="text-stone-200">{goal.benefit}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-red-400 min-w-[80px]">Penalidade:</span>
                  <span className="text-stone-200">{goal.penalty}</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-red-400 min-w-[80px]">Conclusão:</span>
                  <span className="text-stone-200">{goal.conclusion}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-stone-950/50 p-4 border border-red-900/20 rounded">
          <strong className="text-red-400 block mb-2 font-serif uppercase tracking-wide">Abandonando um Objetivo</strong>
          <p className="text-sm text-stone-400">
            Uma vez que um personagem escolha um objetivo, deve se esforçar para cumpri-lo. Alguns objetivos oferecem benefícios significativos apenas por tentar cumpri-los... Mas jogadores espertos podem escolhê-los sem nunca realmente almejar sua conclusão, apenas desfrutando os benefícios de tentar!
          </p>
          <p className="text-sm text-stone-400 mt-2">
            Se o mestre julgar que o personagem não está se esforçando para cumprir o objetivo, pode definir que o objetivo foi abandonado. O jogador sofre a penalidade do objetivo por uma aventura, então o perde. Nenhum benefício ou penalidade se aplicam mais, mas ele não pode escolher um novo objetivo.
          </p>
        </div>
      </>
    )
  },
  { id: "papeis-grupo",
    title: "Papéis no Grupo (Opcional - Herois de Arton)",
    content: (
      <>
        <p>
          Grupos de Tormenta20 normalmente se organizam de forma natural e espontânea, de acordo com a personalidade de cada jogador. Cada pessoa na mesa cuida de seu personagem, incluindo tesouro, condições etc., enquanto o mestre fica responsável pelos NPCs e pelo mundo.
        </p>
        <p>
          Contudo, essa forma de organização pode levar a alguns problemas. Um jogador que tenha dificuldade de ordenar suas anotações pode ignorar parte de seu tesouro, ou mesmo algum objetivo que já tinha planejado. Alguém com memória ruim e sem um sistema de controle pode se perder na duração de seus efeitos e nas condições (e bônus!) que afetam seu personagem. O próprio mestre pode se ver sobrecarregado por ter que lembrar de todos os eventos da campanha, além de todas as regras.
        </p>
        
        <h4 className="font-bold text-red-300 mt-6 border-b border-stone-800 pb-2">Como funcionam os Papéis</h4>
        <p className="mt-2">
          Para resolver esse tipo de situação, os jogadores podem se dividir em papéis. Papéis são funções que cada jogador tem na mesa, auxiliando o bom andamento do jogo. Cada um fica responsável por uma parte “burocrática” ou específica da campanha, garantindo que ninguém acabe sobrecarregado e minimizando os erros. O mestre não tem um papel, já que normalmente cuida de muitos elementos que outros papéis tomam para si.
        </p>
        <p>
          Existe um número maior de papéis do que a média de jogadores em um grupo. Isso é proposital: provavelmente alguns desses papéis serão divididos entre todos ou ficarão a cargo do mestre. Nenhum jogador pode assumir mais de um papel. Contudo, caso o grupo decida usar esta regra opcional, todos precisam assumir um. Ninguém fica isento de responsabilidades. O grupo como um todo deve decidir quais papéis são necessários e qual jogador é mais adequado para cada um deles.
        </p>
        <p>
          Embora os papéis digam respeito a tarefas da vida real, alguns podem se refletir nos personagens. Por exemplo, o cartógrafo pode interpretar um personagem que também mapeia o terreno — assim garantindo que os mapas existam dentro da campanha. A lista a seguir descreve os papéis disponíveis para personagens jogadores.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {groupRoles.map((role) => (
            <div key={role.name} className="relative bg-stone-900 border border-stone-800 rounded-lg p-6 hover:border-red-900/40 transition-all shadow-md group">
              {/* Decorative Header Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-transparent rounded-t-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <h5 className="text-xl font-bold text-stone-100 font-serif mb-3 flex items-center gap-2">
                <span className="text-red-600">✦</span> {role.name}
              </h5>
              
              <p className="text-stone-300 text-sm leading-relaxed mb-4 border-l-2 border-stone-800 pl-4">
                {role.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-stone-800/50 flex items-start gap-2">
                <span className="text-red-500 font-bold text-xs uppercase tracking-widest mt-0.5">Benefício:</span>
                <span className="text-stone-200 text-sm font-medium italic">{role.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  },

];