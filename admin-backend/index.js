// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const funcionariosRouter = require('./routes/funcionarios'); // Importa as rotas de funcionários

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para interpretar JSON no corpo das requisições

// Rotas
app.use('/api/funcionarios', funcionariosRouter); // Define a rota base para funcionários

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
