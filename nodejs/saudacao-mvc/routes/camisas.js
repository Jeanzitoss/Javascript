const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// rota /camisas -> registrada em app.js como app.use('/camisas', camisasRoutes)
router.get('/', siteController.camisas);

module.exports = router;
