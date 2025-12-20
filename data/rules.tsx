// data/rules.ts

// Certifique-se de importar React se precisar de Fragments (<></>) ou de outros elementos React
import React from 'react'; 
import { Difficulty, RuleSection, ExtendedTest } from "@/types/rule";

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






];