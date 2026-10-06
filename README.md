# 📝 Gerenciador de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **React + Vite + Tailwind CSS** como projeto prático de estudo.

O projeto foi construído para transformar conceitos fundamentais de React em uma aplicação funcional, praticando estado, efeitos, props, componentização, navegação e persistência de dados no navegador.

## 🎯 Objetivo do projeto

Este projeto teve como principal objetivo **aprofundar o aprendizado de React por meio da prática**.

Em vez de trabalhar os conceitos apenas de forma teórica, a aplicação foi construída como um laboratório para entender como diferentes recursos do React se conectam em uma aplicação real.

### Conceitos praticados

- Componentização
- `useState`
- `useEffect`
- Props
- PropTypes
- Eventos e manipulação de estado
- Renderização de listas com `map()`
- Atualização e remoção de itens
- Formulários e controle de inputs
- Persistência de dados com `localStorage`
- Navegação com React Router
- Parâmetros de URL
- Utilização de bibliotecas externas
- Estilização com Tailwind CSS
- Organização de componentes

## ✨ Funcionalidades

A aplicação permite:

- ➕ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- 🗑️ Excluir tarefas
- 💾 Manter as tarefas salvas no navegador
- ➡️ Acessar os detalhes de uma tarefa
- ↩️ Retornar para a lista de tarefas
- 🎨 Interface estilizada com Tailwind CSS
- 🧩 Utilizar ícones através do Lucide React

## 🧠 React na prática

O estado principal das tarefas é controlado pelo React:

```jsx
const [tasks, setTasks] = useState([]);
```

A persistência no navegador é realizada através do `useEffect`:

```jsx
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

Dessa forma, o fluxo estudado no projeto é:

```text
Usuário
   ↓
Interação com a interface
   ↓
Evento
   ↓
setTasks()
   ↓
Estado atualizado
   ↓
useEffect()
   ↓
localStorage
```

## 🧭 Navegação

O projeto utiliza **React Router** para trabalhar com navegação entre páginas.

A tela de detalhes recebe informações da tarefa através de parâmetros de URL, permitindo que o usuário saia da listagem e visualize os detalhes da tarefa selecionada.

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **React** | Construção da interface e componentes |
| **Vite** | Ambiente de desenvolvimento e build |
| **JavaScript** | Lógica da aplicação |
| **Tailwind CSS** | Estilização da interface |
| **React Router** | Navegação entre páginas |
| **Lucide React** | Ícones da aplicação |
| **PropTypes** | Validação das Props |
| **ESLint** | Análise e padronização do código |
| **Git** | Controle de versão |
| **GitHub** | Hospedagem do repositório |

## 📁 Estrutura

A aplicação está organizada principalmente em componentes, páginas e arquivos de entrada:

```text
src/
├── assets/
│   └── components/
│       ├── AddTask.jsx
│       ├── Tasks.jsx
│       └── ...
│
├── Pages/
│   └── TaskPage.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

A estrutura foi organizada durante o processo de aprendizado e representa uma etapa da evolução do projeto em React.

## ▶️ Como executar

### Pré-requisitos

- Node.js
- npm

### 1. Clone o repositório

```bash
git clone https://github.com/yuriadaao/gerenciador-de-tarefas.git
```

### 2. Entre na pasta

```bash
cd gerenciador-de-tarefas
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### Outros scripts

```bash
npm run build
```

Gera a build de produção.

```bash
npm run preview
```

Executa uma prévia da build de produção.

```bash
npm run lint
```

Executa a análise do código com ESLint.

## 📚 Contexto de aprendizado

Este repositório faz parte do meu processo de evolução no desenvolvimento Front-end.

A proposta foi utilizar um problema simples para praticar conceitos que posteriormente serão aplicados em projetos maiores.

O conhecimento desenvolvido aqui será utilizado como base para **futuros projetos envolvendo React, TypeScript, APIs, autenticação, CRUD e banco de dados**.

> **Este projeto está finalizado como objeto de estudo.**  
> O objetivo não é continuar expandindo esta aplicação, mas levar os conceitos aprendidos para projetos posteriores.


