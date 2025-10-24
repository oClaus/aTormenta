# Compêndio Tormenta RPG

Site desenvolvido em **Next.js** para organizar informações do RPG Tormenta em um único local padronizado.

## 🎨 Design

O site utiliza uma paleta de cores temática:
- **Roxo** (#8b5cf6, #6d28d9, #a78bfa) - cor principal
- **Preto** (#0a0a0a) - fundo
- **Neon Vermelho** (#ef4444) - destaques e página de Chefes
- **Neon Rosa** (#ec4899) - acentos
- **Neon Amarelo** (#eab308) - para a raridade "Final Fantasy"

## 📁 Estrutura do Projeto

```
tormenta-rpg/
├── app/
│   ├── page.tsx           # Página inicial com grid de categorias
│   ├── comidas/
│   │   └── page.tsx       # Página de comidas
│   ├── chefes/
│   │   └── page.tsx       # Página de chefes finais
│   ├── globals.css        # Estilos globais e variáveis de cores
│   └── layout.tsx         # Layout principal
├── data/                  # 📂 DADOS SEPARADOS (NOVO!)
│   ├── foods.ts           # Array de comidas
│   └── bosses.ts          # Array de chefes
├── types/                 # 📂 TIPOS TYPESCRIPT (NOVO!)
│   ├── food.ts            # Interface Food
│   └── boss.ts            # Interface Boss
├── public/
│   └── chefes/            # Imagens dos chefes
└── package.json          # Dependências do projeto
```

## 🚀 Como Executar

1. **Instalar dependências**:
   ```bash
   cd tormenta-rpg
   pnpm install
   ```
   
   Se você não tiver o `pnpm` instalado, pode usar `npm install` ou `yarn install`.

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   pnpm dev
   ```

3. **Acessar no navegador**:
   ```
   http://localhost:3000
   ```
   *Note: Se a porta 3000 estiver em uso, o Next.js pode usar a porta 3001 ou outra disponível.*

## ✨ Funcionalidades Implementadas

### Página Inicial (`/`)
- Logo "Tormenta" estilizado no topo esquerdo com efeito neon roxo
- Grid responsivo com 5 categorias de temas (Comidas, **Chefes**, Itens, Personagens, Locais)
- Cards interativos com efeitos hover (escala, brilho neon, bordas animadas)
- Navegação para páginas de cada categoria
- Design dark com gradientes roxos e rosas

### Página de Comidas (`/comidas`)
- Breadcrumb de navegação
- Sistema de busca por nome ou descrição
- Filtro por raridade (Comum, Incomum, Raro, Lendário, **Final Fantasy**)
- Cards de comidas com:
  - Nome e raridade (com cores distintas)
  - Descrição detalhada
  - **CD (Classe de Dificuldade)** - destacado em rosa neon
  - Efeitos de jogo
  - Preço
  - Efeitos hover com brilho neon
- Design responsivo (grid adaptativo)

### Página de Chefes (`/chefes`) ⚔️
- Breadcrumb de navegação
- Sistema de busca por nome ou tipo de criatura
- Grid de cards com fotos dos chefes (emoji placeholder, pode ser substituído por imagens)
- **Modal detalhado** ao clicar em um chefe, exibindo:
  - **História** do personagem
  - **Dicas de uso** (como o chefe se comporta)
  - **Estatísticas de Combate**: ND, Iniciativa, Percepção, Defesa, PV
  - **Resistências**: Fort, Ref, Von, Resistência a Dano
  - **Movimento**: Deslocamento e Pontos de Mana
  - **Ataques**: Corpo a corpo e à distância
  - **Habilidades Especiais**: Lista completa de habilidades, passivas e ataques especiais
  - **Atributos**: For, Des, Con, Int, Sab, Car
  - **Perícias**: Lista de perícias com bônus
  - **Equipamentos**: Itens que o chefe possui
  - **Tesouro**: Recompensas ao derrotar o chefe
- Design responsivo com modal scrollável
- Efeitos hover com brilho neon vermelho

## 📝 Como Adicionar Novas Comidas

### ✅ Método Recomendado (Arquivos Separados)

Edite o arquivo **`data/foods.ts`** e adicione novos objetos ao array `foods`:

```typescript
{
  id: "11",
  name: "Nome da Comida",
  description: "Descrição detalhada da comida",
  price: "10 PO",
  cd: 15, // Classe de Dificuldade (opcional)
  rarity: "comum", // comum | incomum | raro | lendário | final-fantasy
  effects: "Descrição dos efeitos no jogo"
}
```

### Campos Disponíveis:
- **id**: Identificador único (string)
- **name**: Nome da comida (string)
- **description**: Descrição detalhada (string)
- **price**: Preço (string) - ex: "10 PO", "5 PC", "Somente Craftado"
- **cd**: Classe de Dificuldade (number, opcional) - ex: 10, 15, 20
- **rarity**: Raridade (string) - "comum", "incomum", "raro", "lendário" ou **"final-fantasy"**
- **effects**: Efeitos no jogo (string, opcional)

### 🎨 Cores por Raridade:
- **Comum**: Cinza
- **Incomum**: Verde
- **Raro**: Azul
- **Lendário**: Roxo
- **Final Fantasy**: Amarelo

## ⚔️ Como Adicionar Novos Chefes

### ✅ Método Recomendado (Arquivos Separados)

Edite o arquivo **`data/bosses.ts`** e adicione novos objetos ao array `bosses`:

```typescript
{
  id: "3",
  name: "Nome do Chefe",
  image: "/chefes/nome-do-chefe.png", // Caminho para a imagem
  tipo: "Tipo de Criatura",
  nd: 10,
  historia: "História completa do personagem...",
  dicas: "Dicas de como usar o chefe na aventura...",
  tamanho: "Médio",
  iniciativa: 5,
  percepcao: 15,
  defesa: 20,
  resistenciaDano: "Corte 5", // Opcional
  fort: 10,
  ref: 8,
  von: 12,
  pv: 150,
  deslocamento: "9m",
  pm: 50,
  ataqueDistancia: "Arco +10 (1d8+3)", // Opcional
  ataqueCorpoACorpo: "Espada +12 (2d6+5)", // Opcional
  habilidades: [
    "Habilidade 1: Descrição completa",
    "Habilidade 2: Descrição completa",
  ],
  for: 18,
  des: 14,
  con: 16,
  int: 12,
  sab: 14,
  car: 10,
  pericias: ["Atletismo +8", "Percepção +15"],
  equipamentos: ["Espada Longa +2", "Armadura de Couro"],
  tesouro: "1000 PO, 5 gemas valiosas"
}
```

### 🖼️ Como Adicionar Imagens dos Chefes

1. Coloque as imagens dos chefes na pasta `public/chefes/`
2. Nomeie as imagens de acordo com o valor do campo `image` no código
3. Formatos suportados: PNG, JPG, WEBP
4. Recomendação: Use imagens quadradas (aspect ratio 1:1) para melhor visualização

Exemplo:
- Se `image: "/chefes/drakor.png"`, coloque o arquivo `drakor.png` em `public/chefes/`

## 🏗️ Vantagens da Nova Estrutura

### ✅ Organização Melhorada
- **Separação de responsabilidades**: Dados separados da lógica de apresentação
- **Fácil manutenção**: Edite apenas os arquivos de dados sem mexer no código da página
- **Reutilização**: Os tipos TypeScript podem ser usados em outras partes do projeto

### ✅ Escalabilidade
- Adicione centenas de comidas ou chefes sem deixar o arquivo `page.tsx` gigantesco
- Fácil de encontrar e editar dados específicos
- Possibilidade futura de migrar para banco de dados mantendo as interfaces

### ✅ Tipagem Forte
- TypeScript garante que todos os dados seguem a estrutura correta
- Autocomplete no editor ao adicionar novos itens
- Erros detectados antes de rodar o código

## 🎯 Próximos Passos

Para expandir o site, você pode:

1. **Criar novas páginas de categorias** (Itens, Personagens, Locais):
   - Copie a estrutura de `app/comidas/page.tsx` ou `app/chefes/page.tsx`
   - Crie um diretório `app/[categoria]/page.tsx`
   - Crie arquivos de dados em `data/[categoria].ts`
   - Crie interfaces em `types/[categoria].ts`

2. **Adicionar banco de dados**:
   - Integrar com Supabase, Firebase ou outro serviço
   - Criar API routes no Next.js
   - Implementar CRUD completo
   - As interfaces TypeScript já existentes facilitarão a migração!

3. **Implementar autenticação**:
   - Permitir que usuários façam login
   - Criar sistema de favoritos
   - Adicionar permissões de edição

4. **Melhorias de UX**:
   - Adicionar paginação
   - Implementar ordenação
   - Criar visualização em lista/grid
   - Adicionar modo de impressão
   - Filtro por ND (range slider) na página de Chefes
   - Sistema de upload de imagens

## 🛠️ Tecnologias Utilizadas

- **Next.js 15.5.5** - Framework React com Turbopack
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização utilitária
- **React 19** - Biblioteca UI

## 📦 Deploy

Para fazer deploy do site, você pode usar:

- **Vercel** (recomendado para Next.js):
  ```bash
  pnpm build
  # Deploy automático ao conectar repositório Git
  ```

- **Netlify**, **Railway**, ou qualquer plataforma que suporte Next.js

## 🎨 Personalização de Cores

As cores podem ser ajustadas no arquivo `app/globals.css`:

```css
:root {
  --purple-primary: #8b5cf6;
  --purple-dark: #6d28d9;
  --neon-purple: #a78bfa;
  --neon-red: #ef4444;
  --neon-pink: #ec4899;
}
```

## 📄 Licença

Projeto pessoal para organização de informações de RPG.

---

**Desenvolvido com ❤️ para jogadores de Tormenta RPG**

