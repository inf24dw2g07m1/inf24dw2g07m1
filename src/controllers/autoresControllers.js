const Autor = require('../models/autores');

exports.getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll();
    res.status(200).json(autores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar autores.' });
  }
};

exports.getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) return res.status(404).json({ error: 'Autor não encontrado.' });
    res.status(200).json(autor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar autor.' });
  }
};

exports.createAutor = async (req, res) => {
  const { nome, email } = req.body;
  try {
    const novo = await Autor.create({ nome, email });
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar autor.' });
  }
};

exports.updateAutor = async (req, res) => {
  const { nome, email } = req.body;
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) return res.status(404).json({ error: 'Autor não encontrado.' });

    await autor.update({ nome, email });
    res.status(200).json(autor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar autor.' });
  }
};

exports.deleteAutor = async (req, res) => {
  try {
    const autor = await Autor.findByPk(req.params.id);
    if (!autor) return res.status(404).json({ error: 'Autor não encontrado.' });

    await autor.destroy();
    res.status(204).end();
  } catch (error) {
    console.error("Erro real ao buscar autores:", error);
    res.status(500).json({ error: 'Erro ao excluir autor.' });
  }
};
