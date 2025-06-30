const Livro = require('../models/livros');

exports.getAllLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll(); // mostra todos os livros
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar livros' });
  }
};

exports.getLivroById = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado.' });
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livro.' });
  }
};

exports.createLivro = async (req, res) => {
  const { nome, autorId } = req.body;

  try {
    const novo = await Livro.create({
      nome,
      autorId,
      userId: req.user.id // <-- isso é obrigatório se estiver no modelo!
    });

    res.status(201).json(novo);
  } catch (error) {
    console.error('Erro ao criar livro:', error); // <-- Aqui imprime o erro completo
    res.status(500).json({ error: 'Erro ao criar livro.' });
  }
};


exports.updateLivro = async (req, res) => {
  const { nome } = req.body;
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado.' });

    await livro.update({ nome });
    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro.' });
  }
};

exports.deleteLivro = async (req, res) => {
  try {
    const livro = await Livro.findByPk(req.params.id);
    if (!livro) return res.status(404).json({ error: 'Livro não encontrado.' });

    await livro.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir livro.' });
  }
};
