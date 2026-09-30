<div align="center">

# 🐱 Build APIs Fast with NestJS

**A complete cats CRUD to learn the fundamentals of NestJS.**

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

[![YouTube](https://img.shields.io/badge/Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=8UmByE2xknQ)
[![DevClub PRO](https://img.shields.io/badge/Channel-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Video

This repository accompanies a video from the **[DevClub PRO](https://www.youtube.com/@DevClubPRO)** channel:

<div align="center">

<a href="https://www.youtube.com/watch?v=8UmByE2xknQ" title="Build APIs Fast with NestJS">
  <img src="https://img.youtube.com/vi/8UmByE2xknQ/maxresdefault.jpg" alt="Build APIs Fast with NestJS" width="720" />
</a>

**▶️ [Build APIs Fast with NestJS](https://www.youtube.com/watch?v=8UmByE2xknQ)**

<sub>🇧🇷 The video is in Brazilian Portuguese.</sub>

</div>

## 📖 About

A REST API built with **NestJS** that implements an in-memory cats CRUD 🐈. It is a great way to understand the framework’s architecture: modules, controllers, services, DTOs and dependency injection.

## 🎯 What you’ll learn

- Create a project with the Nest CLI
- Organize the application into **modules** (`CatsModule`)
- Build **controllers** with the `@Get`, `@Post`, `@Put`, `@Delete`, `@Param`, `@Body` and `@HttpCode` decorators
- Move business logic into **services** with `@Injectable` and dependency injection
- Type inputs with **DTOs** and interfaces
- Handle errors with `HttpException` and `HttpStatus`

## 📡 Endpoints

| Method | Route | Description |
|---|---|---|
| `GET` | `/cats` | List cats |
| `GET` | `/cats/:id` | Get a cat |
| `POST` | `/cats` | Create a cat: `{ "name": "Tom", "age": 3, "breed": "Siamese" }` |
| `PUT` | `/cats/:id` | Update a cat |
| `DELETE` | `/cats/:id` | Delete a cat |

## 🚀 Getting started

> Prerequisite: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repository
git clone https://github.com/agustinhopneto/yt-nestjs-api.git
cd yt-nestjs-api

# 2. Install the dependencies
npm install

# 3. Run in development mode
npm run start:dev
```

Open **http://localhost:3000** 🎉

## 🛠️ Tech stack

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

---

<div align="center">

Enjoyed it? Leave a ⭐ on the repo and subscribe to the channel!

[![Subscribe](https://img.shields.io/badge/Subscribe-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Made with 💙 by **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
