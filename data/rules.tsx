// data/rules.ts

// Certifique-se de importar React se precisar de Fragments (<></>) ou de outros elementos React
import React from 'react'; 
import { Difficulty, RuleSection } from "@/types/rule";

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
];