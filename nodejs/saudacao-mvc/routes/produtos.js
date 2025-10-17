const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

/* GET users listing. */
router.get('/', siteController.produtos);
router.get('/camisas', siteController.camisas);

module.exports = router;
