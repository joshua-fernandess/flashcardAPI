const { flashcards } = require('../data');

function criarFlashcard(req, res) {
    const novoFlashcard = {
    id: flashcards.length + 1,
    nome: req.body.titulo
    };
    flashcards.push(novoFlashcard)
    res.status(201).send({message: 'Flashcard criado com sucesso!', flashcard:
    novoFlashcard});
}

module.exports = criarFlashcard;