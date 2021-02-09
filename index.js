const express = require('express'); // framework
const app = express(); 
const port = 3000;
const bodyParser = require('body-parser'); // interpretação do json
const { Pessoa } = require('./models');

app.use(bodyParser.json());

// listagem de todas as pessoas
app.get('/pessoas', async (req, res) => {
    const pessoas = await Pessoa.findAll(); 
    res.send(pessoas);
});

// listagem de pessoa por id
app.get('/pessoas/:id', async (req, res) => {
    const pessoa = await Pessoa.findAll({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(pessoa);
});

// listagem de pessoa por tipo  '/pessoas/tipo/:tipo
app.get('/pessoas/tipo/:tipo', async (req, res) =>{
    const pessoas = await Pessoa.findAll({
        where:{
            tipo: req.params.tipo
        }
    });
    res.status(200).json(pessoas);
});

// cadastro de nova pessoa
app.post('/pessoas', async (req, res)=>{
    const pessoa = await Pessoa.create(req.body);
    res.status(201).json(pessoa);
});

// atualização de pessoa
app.put('/pessoas/:id', async (req, res)=>{
    const pessoa = await Pessoa.update(req.body, {
        where:{
            
            id: req.params.id
        }
    });
    res.status(200).json(pessoa);
});

// remoção de pessoa
app.delete('/pessoas/:id', async (req, res)=>{
    const pessoa = await Pessoa.destroy({
        where:{
            id: req.params.id
        }
    });
    res.status(200).json(pessoa);
});

app.listen(port);