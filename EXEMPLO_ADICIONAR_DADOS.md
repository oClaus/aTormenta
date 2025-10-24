# 📝 Guia Rápido: Como Adicionar Dados

Este guia mostra exemplos práticos de como adicionar novas comidas e chefes ao seu compêndio.

## 🍖 Adicionando uma Nova Comida

### Passo 1: Abra o arquivo de dados
Abra o arquivo `data/foods.ts` no seu editor.

### Passo 2: Adicione um novo objeto ao array
Copie o exemplo abaixo e cole no final do array `foods`, antes do `];`:

```typescript
{
  id: "11",  // Incremente o ID
  name: "Elixir Supremo",
  description: "Uma poção mágica que restaura completamente a saúde e mana do aventureiro. Seu sabor é adocicado com mel de abelhas gigantes.",
  price: "500 PO",
  cd: 25,
  rarity: "lendário",
  effects: "Restaura 100% PV e PM, remove todas condições negativas"
},
```

### Passo 3: Salve o arquivo
Salve o arquivo e o Next.js irá recarregar automaticamente a página!

### Exemplo Completo do Arquivo:

```typescript
import { Food } from "@/types/food";

export const foods: Food[] = [
  {
    id: "1",
    name: "Batatas Grelhadas",
    description: "Embora as batatas russet maravilhosamente saborosas sejam a atração principal...",
    price: "Somente Craftado",
    cd: 15,
    rarity: "final-fantasy",
    effects: "Ofício +4"
  },
  // ... suas outras comidas ...
  {
    id: "11",  // ← NOVA COMIDA AQUI
    name: "Elixir Supremo",
    description: "Uma poção mágica que restaura completamente a saúde e mana do aventureiro...",
    price: "500 PO",
    cd: 25,
    rarity: "lendário",
    effects: "Restaura 100% PV e PM, remove todas condições negativas"
  },
];
```

## ⚔️ Adicionando um Novo Chefe

### Passo 1: Abra o arquivo de dados
Abra o arquivo `data/bosses.ts` no seu editor.

### Passo 2: Adicione um novo objeto ao array
Copie o exemplo abaixo e cole no final do array `bosses`, antes do `];`:

```typescript
{
  id: "3",
  name: "Tharok, o Devorador de Almas",
  image: "/chefes/tharok.png",  // Adicione a imagem em public/chefes/
  tipo: "Demônio",
  nd: 18,
  historia: "Tharok é um demônio ancestral que foi aprisionado nas profundezas do Abismo há milênios. Sua sede por almas mortais é insaciável, e ele comanda legiões de servos demoníacos.",
  dicas: "Tharok é extremamente inteligente e manipulador. Ele tentará dividir o grupo usando ilusões e mentiras. Seus ataques drenam a força vital dos adversários. Prepare-se com proteções contra energia negativa.",
  tamanho: "Grande",
  iniciativa: 10,
  percepcao: 25,
  defesa: 32,
  resistenciaDano: "Corte 15, Perfuração 15, Fogo 10",
  fort: 20,
  ref: 15,
  von: 22,
  pv: 450,
  deslocamento: "12m, voo 18m",
  pm: 200,
  ataqueDistancia: "Raio Sombrio +18 (6d6 necrótico, alcance 36m)",
  ataqueCorpoACorpo: "Garra +22 (3d6+12 + 2d6 necrótico), Mordida +20 (2d8+10)",
  habilidades: [
    "Drenar Alma: Ao atingir com garra, drena 1d4 pontos de Constituição (Fort CD 26 anula).",
    "Aura de Desespero: Criaturas a 9m sofrem -2 em todos os testes (Von CD 24 anula por 1 hora).",
    "Teleporte: Pode se teleportar até 30m como ação de movimento.",
    "Invocar Demônios: 1/dia pode invocar 1d4 demônios menores.",
    "Imunidade: Imune a fogo, veneno, eletricidade e efeitos mentais.",
    "Resistência à Magia: +8 em testes de resistência contra magias.",
    "Visão no Escuro: Enxerga perfeitamente no escuro até 36m.",
    "Regeneração: Regenera 10 PV por rodada (não funciona contra dano sagrado)."
  ],
  for: 28,
  des: 20,
  con: 26,
  int: 22,
  sab: 24,
  car: 18,
  pericias: [
    "Intimidação +24",
    "Percepção +25",
    "Conhecimento (Planos) +20",
    "Enganação +18",
    "Furtividade +16"
  ],
  equipamentos: [
    "Corrente Infernal +3 (arma exótica)",
    "Amuleto de Proteção +4"
  ],
  tesouro: "100.000 PO em gemas e artefatos demoníacos, 3 itens mágicos aleatórios de nível alto, fragmento de alma aprisionada (artefato único)"
},
```

### Passo 3: Adicione a imagem (opcional)
1. Coloque a imagem `tharok.png` na pasta `public/chefes/`
2. Se não tiver imagem, o emoji 👹 será exibido como placeholder

### Passo 4: Salve o arquivo
Salve o arquivo e veja seu novo chefe aparecer na página!

## 🎨 Dicas de Raridade para Comidas

Escolha a raridade baseada na potência e disponibilidade:

- **comum**: Comidas básicas, fáceis de encontrar (pão, água, frutas simples)
- **incomum**: Comidas de qualidade, requerem preparo (ensopados, assados)
- **raro**: Iguarias especiais, ingredientes raros (pratos élficos, bebidas anãs)
- **lendário**: Comidas mágicas ou extremamente raras (néctar divino, frutos de árvores milenares)
- **final-fantasy**: Comidas craftadas especiais com efeitos únicos

## ⚔️ Dicas de ND para Chefes

Escolha o ND baseado no nível do grupo:

- **ND 1-5**: Chefes para grupos iniciantes (nível 1-3)
- **ND 6-10**: Chefes para grupos intermediários (nível 4-7)
- **ND 11-15**: Chefes para grupos experientes (nível 8-12)
- **ND 16-20**: Chefes para grupos veteranos (nível 13-17)
- **ND 21+**: Chefes épicos para grupos lendários (nível 18+)

## 🔧 Solução de Problemas

### Erro de TypeScript
Se você ver um erro de TypeScript, verifique se:
- Todos os campos obrigatórios estão preenchidos
- A raridade está escrita corretamente (minúsculas)
- Não há vírgulas faltando ou sobrando
- As aspas estão fechadas corretamente

### Página não atualiza
Se a página não atualizar automaticamente:
1. Salve o arquivo novamente
2. Recarregue a página no navegador (F5)
3. Se ainda não funcionar, pare o servidor (Ctrl+C) e inicie novamente (`pnpm dev`)

## 📚 Referências Rápidas

### Campos Obrigatórios - Comida
- `id`, `name`, `description`, `price`, `rarity`

### Campos Opcionais - Comida
- `cd`, `effects`

### Campos Obrigatórios - Chefe
Todos os campos são obrigatórios, exceto:
- `resistenciaDano` (opcional)
- `ataqueDistancia` (opcional)
- `ataqueCorpoACorpo` (opcional)

---

**Dica Final**: Sempre salve seus arquivos antes de testar! O Next.js detectará as mudanças automaticamente. 🚀

