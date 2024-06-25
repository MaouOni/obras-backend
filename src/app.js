const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const proyectoRoutes = require('./routes/proyectoRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/proyectos', proyectoRoutes);

db.sequelize.sync().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

db.sequelize.authenticate().then(() => {
  console.log('Database connected.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
