const { baralhos } = require('../data');

function criarBaralho(req, res) {
    const novoBaralho = {
    id: baralhos.length + 1,
    nome: req.body.titulo
    };
    baralhos.push(novoBaralho)
    res.status(201).send({message: 'Baralho criado com sucesso!', baralho: novoBaralho});
}

module.exports = criarBaralho;