# Projeto INF25DW2G07 - API RESTful com Autenticação Google OAuth 2.0
Trabalho DW2 Grupo 07 (livraria)

Esta é uma API RESTful desenvolvida em Node.js com Express, utilizando o Sequelize para integração com banco de dados MySQL, autenticação via OAuth2.0, documentação com Swagger e os containers com Docker.  
Desenvolvido por: @Alessandro0012 (a039890@umaia.pt); @Tiagodebrit0 (a041587@umaia.pt); @IgorChad (a043765@umaia.pt).

### Tecnologias que utilizamos no processo
- API RESTful com Express
- Autenticação via Google (OAuth 2.0)
- Proteção de rotas com sessão (passport.js)
- Banco de dados MySQL com Sequelize ORM
- Relação 1:n entre autores e livros
- Documentação Swagger
- Docker (multi-container: Node.js + MySQL)
- Collection Postman incluída

## Pré-Requisitos
- Docker: https://www.docker.com/  
- Docker Compose: https://docs.docker.com/compose/  
- Terminal (bash, CMD ou PowerShell)

### Variáveis de Ambiente ".env"
Cria um arquivo `.env` na raiz com o seguinte conteúdo:

## DB
DB_NAME=inf25dw2g07
DB_USER=user
DB_PASSWORD=userpass
DB_HOST=mysql
DB_PORT=3306

## Autenticação Google
GITHUB_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID_HERE
GITHUB_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET_HERE

## App
PORT=3000

### Instalação das Dependências locais
npm install
## Instalação das Dependências locais
npm install express sequelize mysql2 dotenv cors express-session passport passport-google-oauth20 swagger-ui-express yamljs

### Passos úteis para Instalação e Execução
## Clonar do GitHub:
git clone https://github.com/Trabalho-inf25dw2g07/inf25dw2g07.git
cd inf25dw2g07

### Comandos do Docker:
## Upload dos containers com Docker Compose:
docker-compose up --build -d
## Dentro do container Node.js, sincronizar as tabelas:
docker exec -it node_app_container node sync.js
## Para abrir o banco com os dados inseridos:
docker exec -it node_app_container node seed.js
## Parar containers:
docker-compose down
## Apagar containers:
docker container prune -f
## Apagar imagens:
docker image prune -a -f
## Parar e remover volumes (reinicia banco do zero):
docker-compose down -v
## Ver logs de execução:
docker logs node_app_container
## Fazer a verificação:
docker ps -a OU docker images

##
Os Arquivos sync.js (para criar tabelas) e seed.js (para inserir dados) funcionando manualmente com npm run sync e npm run seed.

### Acessar a aplicação
API: http://localhost:3000/ 
Página protegida: [http://localhost:3000](http://localhost:3000)
Login: [http://localhost:3000/login](http://localhost:3000/login)
Swagger (API docs): [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura do Trabalho
```
inf25dw2g07/
├── src/
│   ├── config/           # Configurações (db, passport)
│   ├── controllers/      # Lógica dos endpoints
│   ├── models/           # Modelos Sequelize
│   ├── routes/           # Rotas REST e de autenticação
│   ├── seeders/          # Dados de seed para popular o banco
│   └── docs/             # Swagger YAML (OpenAPI)
├── public/               # HTML para login e rota protegida
├── .env                  # Variáveis de ambiente (Não precisa estar no commit)
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── app.js                # Rotas REST
├── server.js             # Entrada principal com autenticação
```

## Funcionalidades Implementadas 
- Arquitetura REST
- 3 recursos diferentes (`users`, `autores`, `livros`)
- Operações CRUD (GET, POST, PUT, DELETE)
- Relação 1:n (`autor` → `livros`)
- JSON nas respostas
- Autenticação e autorização com Google OAuth 2.0
- Proteção de rota com `passport` + sessão
- Swagger OpenAPI 3.0
- Docker multi-container (MySQL + Node.js)
- Collection Postman incluída

## Testes
Utilize o Postman (https://www.postman.com/) para testar todos os endpoints.  
Pode-se criar manualmente ou exportar uma collection.
