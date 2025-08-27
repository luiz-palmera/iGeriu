# iGeriu - Teste Técnico

Este projeto foi desenvolvido como parte do teste técnico solicitado.  
O objetivo é avaliar a organização de código, estruturação de componentes e solução de telas em **React + TypeScript + TailwindCSS**.

---

## ✨ Funcionalidades implementadas

### 🏠 Tela inicial
- Exibe dois **cards de navegação** para acessar as telas:
  - **Listagem de Faturas**
  - **Conta Digital**

### 📄 Tela de Faturas
- Tabela com listagem de faturas contendo:
  - ID do cliente
  - Nome do cliente
  - Data de geração
  - Data de vencimento
  - Data de pagamento (quando houver)
  - Valor total
  - Método de pagamento
  - Status da fatura
- **Menu de ações** (mock): exibe opções como marcar como paga, visualizar detalhes, baixar PDF etc.  
  > ⚠️ As ações são apenas ilustrativas e **não alteram os dados da tabela**, servindo como exemplo de UI.


### 💳 Tela de Conta Digital
- Exibição do **saldo disponível**.
- Ações de:
  - **Solicitar saque** (transação fica marcada como *pendente*).
  - **Depositar**.
  - **Adicionar limite de saldo**.
- Configuração de **saques automáticos** (ativar/desativar e valor-alvo).
- Histórico de transações em formato de tabela:
  - Possibilidade de filtrar por **pendentes** ou **concluídas**.

---

## 📦 Dados Mockados

Este projeto utiliza **dados mockados** para simular o comportamento do sistema sem depender de um backend real.  
Os dados foram definidos em **arrays estáticos** e são utilizados em dois contextos principais:

---

### 1) Uso direto dentro de componentes (ex.: **Tabela de Faturas**)
- As **faturas** são carregadas diretamente dentro do componente que renderiza a tabela.
- Isso permite que o componente funcione de forma independente, simulando a **listagem** como se viesse de uma API.
- O **menu de Ações** é apenas visual (mock), **não altera** o estado real da tabela.

**Exemplo:**
~~~ts
type Invoice = {
  id: number;
  clienteId: string;
  clienteNome: string;
  dataGeracao: string;
  dataVencimento: string;
  dataPagamento: string | null;
  valor: number;
  metodoPagamento: string;
  status: "Pago" | "Pendente" | "Atrasada";
};

const invoices: Invoice[] = [
  {
    id: 1,
    clienteId: "C001",
    clienteNome: "João Silva",
    dataGeracao: "2025-07-01",
    dataVencimento: "2025-07-15",
    dataPagamento: "2025-07-10",
    valor: 1200,
    metodoPagamento: "Cartão de Crédito",
    status: "Pago",
  },
  {
    id: 2,
    clienteId: "C002",
    clienteNome: "Maria Souza",
    dataGeracao: "2025-07-05",
    dataVencimento: "2025-07-20",
    dataPagamento: null,
    valor: 800,
    metodoPagamento: "Boleto",
    status: "Pendente",
  },
];
~~~

---

### 2) Uso **passado como parâmetro** (ex.: **Transações da Conta Digital**)
- As **transações** são definidas em um módulo/arquivo separado e **injetadas via props** nos componentes (ex.: tabela de extrato).
- Favorece **reutilização** e **testabilidade**, permitindo trocar o dataset facilmente.

**Exemplo:**
~~~ts
type Transaction = {
  id: number;
  tipo: "Depósito" | "Saque";
  valor: number;
  status: "Pendente" | "Concluída";
  data: string;
};

const transactions: Transaction[] = [
  { id: 1, tipo: "Depósito", valor: 500, status: "Concluída", data: "2025-08-01" },
  { id: 2, tipo: "Saque", valor: 200, status: "Pendente",  data: "2025-08-05" },
];

<TransactionTable data={transactions} />
~~~

**Comportamento simulado:**
- **Saldo** é calculado considerando **apenas transações concluídas** (depósitos – saques).
- **Solicitar saque** adiciona uma transação com `status: "Pendente"` (não afeta o saldo até concluir).
- **Depositar** adiciona uma transação com `status: "Concluída"` (atualiza saldo imediatamente).
- Filtros por **Todas / Pendentes / Concluídas** são aplicados sobre o array mockado.

---

### ✅ Benefícios
- Permite **testar UI e interações** sem backend.
- Facilita a migração para API real: basta **substituir os arrays por chamadas** (ex.: Inertia/Laravel) mantendo os mesmos contratos de dados.


## 🛠️ Tecnologias utilizadas
- **React**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações de cards e transições)

---

> **Nota 1:** Todos os commits foram realizados diretamente na branch `main` devido ao **prazo curto do projeto** e pelo fato de ter sido desenvolvido **individualmente**.  
> **Nota 2:** O **design da tabela de faturas** foi **inspirado nas referências do sistema iGeriu**, enquanto o **design da tela de conta digital** foi **criado do zero, sem referências prévias**.

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js >= 18
- npm ou yarn ou pnpm

### Passos
```bash
# Clonar o repositório
git clone <url-do-repo>

# Entrar na pasta do projeto
cd igeriu

# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
