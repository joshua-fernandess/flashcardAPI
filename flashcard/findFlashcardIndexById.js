const { flashcards } = require('../data');

const findFlashcardIndexById = (req, res) => {
    const { id } = req.params;
    const flashcard = flashcards.find(flashcard => flashcard.id == id);
    if (!flashcard){
        return res.status(404).send({message: 'Flashcard não encontrado.'});
    }
    res.status(200).send(flashcard);
}

module.exports = findFlashcardIndexById;