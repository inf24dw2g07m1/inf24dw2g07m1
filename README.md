### Projeto API RESTful - Livraria
Trabalho DW2 Grupo 07 (livraria)

Contém o desenvolvimento de uma aplicação web com uma API RESTful protegida por autenticação OAuth 2.0, usando Node.js, Express, Sequelize e MySQL. O projeto foi desenvolvido no contexto curricular da unidade curricular de Desenvolvimento Web II (DW2) 
Desenvolvido por: @Alessandro0012 (a039890@umaia.pt); @Tiagodebrit0 (a041587@umaia.pt).

##  Descrição do Projeto
O projeto simula uma API de livraria, permitindo a gestão de usuários, autores e livros. A aplicação está protegida por autenticação local e via GitHub (OAuth 2.0).

## Estrutura do Projeto
```
inf24dw2g07/
├── app.js               # Inicialização das rotas da API
├── docker-compose.yml   # Configuração dos containers Docker
├── Dockerfile           # Build da aplicação Node.js
├── public/              # HTML estático (login, página protegida)
├── seed.js              # Popula a base de dados com dados fictícios
├── sync.js              # Criação/sincronização do schema do banco
├── server.js            # Inicialização do servidor Express
├── src/
│   ├── config/
│   │   ├── database.js  # Configuração Sequelize
│   │   └── passport.js  # Estratégias de autenticação
│   ├── controllers/     # Controladores REST
│   ├── models/          # Modelos Sequelize (User, Autor, Livro)
│   ├── routes/          # Rotas protegidas e públicas
│   └── docs/            # Documentação Swagger
```

## Tecnologias que utilizamos no processo:
- API RESTful com Express
- Autenticação local e via GitHub (OAuth 2.0).
- Proteção de rotas com sessão (passport.js)
- Banco de dados MySQL com Sequelize ORM
- Relação 1:n entre autores e livros
- Documentação Swagger
- Docker (multi-container: Node.js + MySQL)
- Collection Postman incluída

## Pré-Requisitos:
* Docker: https://www.docker.com/  
* Docker Compose: https://docs.docker.com/compose/  
* Terminal (bash, CMD ou PowerShell)

## Funcionalidades:
* API REST com Express e Sequelize
* CRUD completo com os 4 verbos HTTP: GET, POST, PUT, DELETE
* Três recursos diferentes: `users`, `autores`, `livros`
* Relação 1\:N entre `autor` e `livros`
* Retorno em JSON
* Autenticação e autorização com Passport.js (Local e OAuth2 com GitHub)
* Usuário autenticado só acede aos seus próprios dados (em users)
* Detalhe do usuário logado apresentado no console
* Documentação OpenAPI 3.0 (Swagger UI)
* Multi-container: Docker + Docker Compose (MySQL + Node)

### Passos para Execução:
## 1. Clonar o Repositório
```bash
* git clone https://github.com/inf24dw2g07/livraria-api.git
* cd livraria-api
```

## 2. Criar e configurar o `.env`
```
```
* Editar o `.env` com as suas variáveis:
```env
SESSION_SECRET=topsecret
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx
```
## 3. Instalação das Dependências locais
* npm install

## 3.1 Instalação das Dependências locais:
* npm install express sequelize mysql2 dotenv cors express-session passport passport-google-oauth20 swagger-ui-express yamljs

## 4. Arrancar o projeto com Docker Compose
* docker-compose up --build

* Funcionalidades deste comando:
    * Instala as dependências
    * Sincroniza tabelas com `sync.js`
    * Insere dados com `seed.js`
    * Inicia o servidor com `server.js`

## 5. Acessar a aplicação
* App funciona em: [http://localhost:3000](http://localhost:3000)
* Swagger: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
* Login: [http://localhost:3000/login](http://localhost:3000/login)

## 6. Testar com o Postman
Importar a coleção Postman disponível em `postman_collection.json`

### Autenticação
* Local (e-mail/senha)
* GitHub OAuth 2.0

Após login, o usuário pode acessar rotas protegidas e visualizar apenas seus dados (recurso users).

### Rotas Protegidas
* `GET /protected`
* `GET /api/users` → apenas dados do usuário logado
* `GET /api/autores`, `POST /api/autores` etc.
* `GET /api/livros`, `POST /api/livros` etc.

### DockerHub
As imagens dos containers estão disponíveis publicamente em:
Backend Node.js: 
* [DockerHub - Node App](https://hub.docker.com/r/inf24dw2g07/livraria-node)
Base de Dados MySQL:
* [DockerHub - MySQL](https://hub.docker.com/r/inf24dw2g07/livraria-mysql)

* Pode-se fazer pull das imagens com:
```bash
* docker pull inf24dw2g07/livraria-node
* docker pull inf24dw2g07/livraria-mysql
```

### Documentação Swagger
A documentação Swagger (OpenAPI 3.0) está disponível em:
```bash
GET /api/docs
```
### Contribuidores
* @Alessandro0012 (a039890@umaia.pt);
* @Tiagodebrit0 (a041587@umaia.pt).
---
# Projeto desenvolvido para a unidade curricular de Desenvolvimento Web II - Universidade da Maia
