const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

router.get('/', proyectoController.getProyectos);
router.post('/', proyectoController.createProyecto);

module.exports = router;
