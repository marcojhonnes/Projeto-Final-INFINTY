const express = require('express');
const bodyParser = require('body-parser');
const tarefasRouter = require('./routes/tarefas'); // ajuste o caminho conforme necessário

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/tarefas', tarefasRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
