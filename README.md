<div align="center">

# 🐱 Escreva APIs de forma rápida com o NestJS

**Um CRUD completo de gatos para aprender os fundamentos do NestJS.**

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

[![YouTube](https://img.shields.io/badge/Assista_no_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=8UmByE2xknQ)
[![DevClub PRO](https://img.shields.io/badge/Canal-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Vídeo

Este repositório acompanha o vídeo do canal **[DevClub PRO](https://www.youtube.com/@DevClubPRO)**:

<div align="center">

<a href="https://www.youtube.com/watch?v=8UmByE2xknQ" title="Escreva API s de forma rápida com o NestJS">
  <img src="https://img.youtube.com/vi/8UmByE2xknQ/maxresdefault.jpg" alt="Escreva API s de forma rápida com o NestJS" width="720" />
</a>

**▶️ [Escreva API s de forma rápida com o NestJS](https://www.youtube.com/watch?v=8UmByE2xknQ)**

</div>

## 📖 Sobre

Uma API REST construída com **NestJS** que implementa um CRUD de gatos 🐈 em memória. É a forma ideal de entender a arquitetura do framework: módulos, controllers, services, DTOs e injeção de dependências.

## 🎯 O que você vai aprender

- Criar um projeto com a Nest CLI
- Organizar a aplicação em **módulos** (`CatsModule`)
- Criar **controllers** com os decorators `@Get`, `@Post`, `@Put`, `@Delete`, `@Param`, `@Body` e `@HttpCode`
- Separar a regra de negócio em **services** com `@Injectable` e injeção de dependências
- Tipar as entradas com **DTOs** e interfaces
- Tratar erros com `HttpException` e `HttpStatus`

## 📡 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/cats` | Lista os gatos |
| `GET` | `/cats/:id` | Busca um gato |
| `POST` | `/cats` | Cria um gato: `{ "name": "Tom", "age": 3, "breed": "Siamês" }` |
| `PUT` | `/cats/:id` | Atualiza um gato |
| `DELETE` | `/cats/:id` | Remove um gato |

## 🚀 Como rodar

> Pré-requisito: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone o repositório
git clone https://github.com/agustinhopneto/yt-nestjs-api.git
cd yt-nestjs-api

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run start:dev
```

Acesse **http://localhost:3000** 🎉

## 🛠️ Tecnologias

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

---

<div align="center">

Curtiu? Deixa um ⭐ no repositório e se inscreva no canal!

[![Inscreva-se](https://img.shields.io/badge/Inscreva--se-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Feito com 💙 por **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
