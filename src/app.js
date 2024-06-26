const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const proyectoRoutes = require('./routes/proyectoRoutes');
const empresaRoutes = require('./routes/empresaRoutes');
const catalogoRoutes = require('./routes/catalogoRoutes');
const estimacionRoutes = require('./routes/estimacionRoutes');
const frenteRoutes = require('./routes/frenteRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/catalogos', catalogoRoutes);
app.use('/api/estimaciones', estimacionRoutes);
app.use('/api/frentes', frenteRoutes);

db.sequelize.sync().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

db.sequelize.authenticate().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
