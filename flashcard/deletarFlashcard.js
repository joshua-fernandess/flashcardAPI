const { flashcards } = require('../data')

const deletarFlashcard = (req, res) => {
    const { id } = req.params;
    const index = flashcards.find((f) => f.id == id);

    if (index === -1) {
        return res.status(404).send('Flashcard não encontrado!');
    }

    const flashcardDeletado = flashcards.splice(index, 1)[0];

    res.status(200).send({
    message: 'Flashcard deletado com sucesso!',
    flashcard: flashcardDeletado
    })
}

module.exports = deletarFlashcard;