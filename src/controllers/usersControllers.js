const User = require('../models/user');

// GET todos
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};

// GET por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
  }
};

// POST
exports.createUser = async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const novo = await User.create({ nome, email, password });
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

// PUT
exports.updateUser = async (req, res) => {
  const { nome, email, password } = req.body;
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

    await user.update({ nome, email, password });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });

    await user.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
};
