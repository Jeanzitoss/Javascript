const express = require('express');
const router = express.Router();
const produtosControler = require('../controllers/produtosControler');

/* GET users listing. */
router.get('/', produtosControler.produtos);
router.get('/camisas', produtosControler.camisas);
router.get('/cadastrar', produtosControler.formCadastrar);
router.post('/cadastrar', produtosControler.cadastrar);

module.exports = router;
