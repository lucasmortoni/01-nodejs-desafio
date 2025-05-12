# 📦 Desafio 01 Node.js — Gerenciador de Tarefas

Este projeto é uma API RESTful desenvolvida em **Node.js**, como parte de um desafio para reforçar conceitos fundamentais de back-end da **Faculdade de Tecnologia Rocketseat**.

## 🚀 Funcionalidades

A aplicação permite o gerenciamento de tarefas com as seguintes operações:

- **Criar tarefa** (`POST /tasks`)
- **Listar todas as tarefas** (`GET /tasks`)
- **Atualizar tarefa (título e descrição)** (`PUT /tasks/:id`)
- **Remover tarefa** (`DELETE /tasks/:id`)
- **Alternar status de conclusão da tarefa** (`PATCH /tasks/:id`)

## 🛠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- `uuid` para geração de IDs únicos
- Manipulação de dados em memória (sem banco de dados)

## 📌 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/lucasmortoni/01-nodejs-desafio.git

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
