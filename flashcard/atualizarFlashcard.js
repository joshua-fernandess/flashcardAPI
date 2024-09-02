const { flashcards } = require('../data');

const atualizarFlashcard = (req, res) => {
    const { id } = req.params;
    const novaPergunta = req.body.pergunta;

    const flashcard = flashcards.find((f) => f.id == id);

    if (!flashcard) {
        return res.status(404).send({ message: 'Flashcard não encontrado' });
    }

    flashcard.pergunta = novaPergunta;
    res.status(200).send({
        message: 'Flashcard atualizado com sucesso!',
        flashcard : flashcard
    });
}

module.exports = atualizarFlashcard;