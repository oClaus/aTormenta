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
  }
];