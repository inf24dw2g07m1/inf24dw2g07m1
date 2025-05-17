INF25DW2G07

Trabalho DW2 Grupo 07 (livraria)

Esta é uma API RESTful desenvolvida em Node.js com Express, utilizando o Sequelize para integração com banco de dados MYSQL, autenticação via OAuth2.0, documentação com Swagger e os conteiners com docker.
Desenvolvido por: @Alessandro0012 and @Tiagodebrit0

/// Tecnologias que utilizamos no processo
Node.js
Express
Sequelize
MySQL
OAuth 2.0
Swagger (OpenAPI 3.0)
Docker & Docker Compose
Postman (para testes)

/// Passos uteis para Instalação e Execução
// Clonar do github: 
    https://github.com/teu-usuario/api-livraria.git
    cd api-livraria

// Upload dos containers com Docker Compose:
    docker-compose up --build -d

// Dentro do Container node.js, temos de sincronizar as tabelas:
    docker exec -it node_app_container sh
    node sync.js

/// Acessar a documentação Swagger: 
API: http://localhost:3000/
Swagger UI: http://localhost:3000/api-docs

/// Utiliza-se os tokens para acessar as rotas protegidas:

Nas requisições protegidas, adicione:
Authorization: Bearer TOKEN_AQUI

```
/// Endpoints:
// Usuarios (`/api/users`)
`GET /` → Lista usuários (protegido)
`POST /` → Cria usuário
`GET /:id` → Buscar usuário (protegido)
`PUT /:id` → Atualizar usuário (protegido)
`DELETE /:id` → Remover usuário (protegido)

// Autores (`/api/autores`)
`GET /` → Lista autores (protegido)
`POST /` → Cria autor (protegido)
`GET /:id` → Buscar autor (protegido)
`PUT /:id` → Atualizar autor (protegido)
`DELETE /:id` → Remover autor (protegido)

// Livros (`/api/livros`)
`GET /` → Lista livros (protegido)
`POST /` → Cria livro (protegido)
`GET /:id` → Buscar livro (protegido)
`PUT /:id` → Atualizar livro (protegido)
`DELETE /:id` → Remover livro (protegido)


/// Documentação do Swagger:
Pode-se acessar em:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)


/// Estrutura do Trabalho
.
├── src/
│   ├── models/           # Modelos Sequelize
│   ├── controllers/      # Lógica das rotas
│   ├── routes/           # Definição de rotas
│   ├── config/           # Conexão com o banco de dados
│   └── auth/             # Configuração OAuth 2.0
├── docs/                 # Arquivo swagger.yaml
├── app.js                # Arquivo principal da API
├── sync.js               # Script para sincronizar o banco
├── docker-compose.yml    # Compose para MySQL + Node
└── README.md             # Este documento

/// Funcionalidades Implementadas:
CRUD completo para usuários, autores e livros;
Proteção de rotas com OAuth 2.0;
Documentação Swagger; 
Ambiente isolado com Docker;
Autenticação baseada em token;

---
/// Testes:
Utilize o Postman (https://www.postman.com/) para testar todos os endpoints. Pode-se criar manualmente ou exportar alguma .
