require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const phoneRoutes = require('./routes/phone.routes');
const path = require('path');

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. Servir archivos estáticos (IMPORTANTE: Debe ir antes de las rutas de texto)
// Esto permitirá que al entrar a "/" busque automáticamente index.html en /client
app.use(express.static(path.join(__dirname, '..', 'client')));

// 3. Rutas de la API
app.use('/api/phones', phoneRoutes);

// 4. Conectar a la base de datos
connectDB();

// 5. Arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`nodemonSirviendo cliente desde: ${path.join(__dirname, '..', 'client')}`);
});