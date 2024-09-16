# 🎮 Minha Lista de Jogos

Este é um projeto simples feito com **React** onde os usuários podem listar jogos que estão jogando, que já finalizaram, ou que abandonaram. A lista é salva localmente no navegador usando **localStorage**, então mesmo que o usuário feche o navegador ou recarregue a página, os dados da lista permanecem.

## 🛠️ Funcionalidades

- Adicionar novos jogos à lista
- Atualizar o status de um jogo (Jogando, Finalizado, Abandonado)
- Remover jogos da lista
- Armazenamento de dados no **localStorage** para persistência entre sessões

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/rickzyinho/que-jogos-vc-jogou.git
   ```

2. **Acesse a pasta do projeto**

   ```
   cd que-jogos-vc-jogou
   ```

3. **Instale as dependências**

   Se estiver usando npm:

   ```
   npm install
   ```

   Ou se estiver usando yarn:

   ```
   yarn install
   ```

4. **Inicie o servidor de desenvolvimento**

   Se estiver usando npm:

   ```
   npm start
   ```

   Ou se estiver usando yarn:

   ```
   yarn start
   ```

5. **Abra o projeto no navegador**

   O projeto estará rodando localmente. Abra o navegador e acesse:

   ```
   http://localhost:3000
   ```

## 🧑‍💻 Tecnologias Utilizadas

- [React](https://react.dev/)
- [localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) para persistência de dados
