// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const funcionariosRoutes = require('./routes/funcionarios'); // Importa as rotas de funcionários
const armaduraBatmanRoutes = require('./route/armaduraBatman'); // Importa as rotas de armaduras
const veiculosRoutes = require('./route/veiculos'); // Importa as rotas de veículos
const tarefasRoutes = require('./routes/tarefas');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para interpretar JSON no corpo das requisições

// Rotas
app.use('/api/funcionarios', funcionariosRoutes); // Define a rota base para funcionários
app.use('/api/armaduras', armaduraBatmanRoutes);  // Define a rota base para armaduras Batman
app.use('/api/veiculos', veiculosRoutes);  // Define a rota base para veículos
app.use('/tarefas', tarefasRoutes); // Define a rota base para tarefas
// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
