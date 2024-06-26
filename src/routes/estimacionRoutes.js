const express = require('express');
const router = express.Router();
const estimacionController = require('../controllers/estimacionController');

router.get('/', estimacionController.getAllEstimaciones);
router.get('/:id', estimacionController.getEstimacionById);
router.post('/', estimacionController.createEstimacion);
router.put('/:id', estimacionController.updateEstimacion);
router.delete('/:id', estimacionController.deleteEstimacion);

module.exports = router;
