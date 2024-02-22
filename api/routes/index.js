const AppController = require('../controllers/AppController')
const paymentApi = require('../controllers/paymentController')
const express = require('express')
const router = express.Router();

//get routes
router.get('/', AppController.get);
router.get('/verifypayment/:reference', paymentApi.verifyTransaction)
router.get('/balance', paymentApi.getBalance)


//post routes
router.post('/acceptpayment', paymentApi.initializeTransaction);


module.exports = router;
