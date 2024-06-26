const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/catalogoController');

router.get('/', catalogoController.getAll);
router.get('/:id', catalogoController.getById);
router.post('/', catalogoController.create);
router.put('/:id', catalogoController.update);
router.delete('/:id', catalogoController.delete);

module.exports = router;
