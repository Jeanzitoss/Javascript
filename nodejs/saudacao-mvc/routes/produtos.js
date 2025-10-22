const express = require('express');
const router = express.Router();
const produtosControler = require('../controllers/produtosControler');

/* GET users listing. */
router.get('/', produtosControler.produtos);
router.get('/camisas', produtosControler.camisas);

module.exports = router;
