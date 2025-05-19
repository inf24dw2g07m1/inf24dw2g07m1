INF25DW2G07

Trabalho DW2 Grupo 07 (livraria)

Esta é uma API RESTful desenvolvida em Node.js com Express, utilizando o Sequelize para integração com banco de dados MySQL, autenticação via OAuth2.0, documentação com Swagger e os containers com Docker.  
Desenvolvido por: @Alessandro0012 e @Tiagodebrit0

## Tecnologias que utilizamos no processo
- Node.js  
- Express  
- Sequelize  
- MySQL  
- Swagger (OpenAPI 3.0)  
- Docker & Docker Compose  
- Postman (para testes)

## Pré-Requisitos
- Docker: https://www.docker.com/  
- Docker Compose: https://docs.docker.com/compose/  
- Terminal (bash, CMD ou PowerShell)

## Variáveis de Ambiente ".env"
Cria um arquivo `.env` na raiz com o seguinte conteúdo:

```
DB_NAME=inf25dw2g07
DB_USER=user
DB_PASSWORD=userpass
DB_HOST=mysql
DB_PORT=3306
```

## Passos úteis para Instalação e Execução

### Clonar do GitHub:
```
git clone https://github.com/teu-usuario/api-livraria.git
cd api-livraria
```

### Upload dos containers com Docker Compose:
```
docker-compose up --build -d
```

### Dentro do container Node.js, sincronizar as tabelas:
```
docker exec -it node_app_container node sync.js
```
### Para abrir o banco com os dados inseridos:
docker exec -it node_app_container node seed.js

## Acessar a documentação Swagger:
- API: http://localhost:3000/  
- Swagger UI: http://localhost:3000/api-docs

## Comandos úteis
- Parar containers:
```
docker-compose down
```

- Parar e remover volumes (reinicia banco do zero):
```
docker-compose down -v
```

- Ver logs de execução:
```
docker logs node_app_container
```

## Documentação do Swagger:
Pode-se acessar em:  
http://localhost:3000/api-docs

## Estrutura do Trabalho
```
.
├── src/
│   ├── models/           # Modelos Sequelize
│   ├── controllers/      # Lógica das rotas
│   ├── routes/           # Definição de rotas
│   ├── config/           # Conexão com o banco de dados
├── docs/                 # Arquivo swagger.yaml
├── app.js                # Arquivo principal da API
├── sync.js               # Script para sincronizar o banco
├── docker-compose.yml    # Compose para MySQL + Node
└── README.md             # Este documento
```

## Funcionalidades Implementadas
- CRUD completo para usuários, autores e livros  
- Proteção de rotas com OAuth 2.0  
- Documentação Swagger  
- Ambiente isolado com Docker

## Testes
Utilize o Postman (https://www.postman.com/) para testar todos os endpoints.  
Pode-se criar manualmente ou exportar uma collection.
