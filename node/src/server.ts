import express from 'express';

const port = 3333;
const app = express();

app.get("/", (request, response) => {
    return response.json({message:'Hello Familia'});
})

app.post('/', (request, response) => {

    return response.json({message:'Os dados foram salvos com sucesso'});

})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));