const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const sequelize = require('./src/config/database');
const User = require('./src/models/user'); // Importando o modelo Cliente
// Importe os outros modelos conforme necessário

const app = express();
app.use(express.json());

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Livraria',
      description: 'Documentação das APIs de um sistema de livraria',
      version: '1.0.0',
    },
  },
  apis: ['./server.js'], // Arquivo onde você definirá as rotas
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas de exemplo
/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await User.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Retorna um cliente específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */
app.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await User.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).send('Cliente não encontrado');
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
app.post('/clientes', async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const cliente = await Cliente.create({ nome, email, password });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.listen(3000, async () => {
  console.log('Servidor rodando na porta 3000');
  try {
    await sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso');
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
  }
});
