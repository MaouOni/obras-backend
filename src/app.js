require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models/db');
const proyectoRoutes = require('./routes/proyectoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const frenteRoutes = require('./routes/frenteRoutes');
const catalogoRoutes = require('./routes/catalogoRoutes');
const estimacionRoutes = require('./routes/estimacionRoutes');

const app = express();
const port = process.env.PORT || 8080;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Obras Backend API');
});

module.exports = app;
