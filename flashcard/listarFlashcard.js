const { flashcards } = require('../data');

const listarFlashcard = (req, res) => {
res.status(200).send(flashcards);
};

module.exports = listarFlashcard;