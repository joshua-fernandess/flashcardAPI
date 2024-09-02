const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const criarBaralho = require('./baralho/criarBaralho');
const listarBaralhos = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');

const criarFlashcard = require('./flashcard/criarFlashcard');
const listarFlashcard = require('./flashcard/listarFlashcard');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');
const findFlashcardIndexById = require('./flashcard/findFlashcardIndexById');


app.post('/baralho', criarBaralho);
app.get('/baralho', listarBaralhos);
app.put('/baralho/:id', atualizarBaralho);
app.delete('/baralho/:id', deletarBaralho);

app.post('/flashcard', criarFlashcard);
app.get('/flashcard', listarFlashcard);
app.put('/flashcard/:id', atualizarFlashcard);
app.delete('/flashcard/:id', deletarFlashcard);
app.get('/baralho/:idBaralho', buscarFlashcardsPorBaralho);
app.get('/flashcard/:id', findFlashcardIndexById);
app.get('/flashcard', buscarFlashcardsPorPergunta);


app.get ('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em localhost:${port}`);
});



