const express = require('express');
const app = express();
app.use(express.json());

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id: parseInt(id), nome, quantidade: parseInt(qtd) });
    res.send('Produto adicionado ao estoque com sucesso!');
});


app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== parseInt(id));
    res.send('O produto foi removido do estoque com sucesso!');
});


app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(produto => produto.id === parseInt(id));
    if (produto) {
        produto.quantidade = parseInt(qtd);
        res.send('A quantidade do produto foi atualizada com sucesso!');
    } else {
        res.status(404).send('Produto não foi encontrado no estoque.');
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});