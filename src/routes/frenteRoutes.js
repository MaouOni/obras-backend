const express = require('express');
const router = express.Router();
const frenteController = require('../controllers/frenteController');

router.get('/', frenteController.getAllFrentes);
router.get('/:id', frenteController.getFrenteById);
router.post('/', frenteController.createFrente);
router.put('/:id', frenteController.updateFrente);
router.delete('/:id', frenteController.deleteFrente);

module.exports = router;
