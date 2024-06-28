const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const proyectoRoutes = require('./routes/proyectoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const frenteRoutes = require('./routes/frenteRoutes');
const catalogoRoutes = require('./routes/catalogoRoutes');
const estimacionRoutes = require('./routes/estimacionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/frentes', frenteRoutes);
app.use('/api/catalogos', catalogoRoutes);
app.use('/api/estimaciones', estimacionRoutes);

db.sequelize.sync().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = app; // Export the app instance
