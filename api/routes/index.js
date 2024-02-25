
/*
contains all routes for this server
*/
const AppController = require('../controllers/AppController')
const paymentApi = require('../controllers/paymentController')
const express = require('express')
const router = express.Router();
const UserController = require('../controllers/UserControllers');


//get routes
router.get('/', AppController.get);
router.get('/verifypayment/:reference', paymentApi.verifyTransaction)
router.get('/balance', paymentApi.getBalance)
router.get('/transactions', paymentApi.getAllTransactions)



//post routes
router.post('/acceptpayment', paymentApi.initializeTransaction);
router.post('/create_customer', paymentApi. createCustomer);
router.post('/create_virtual_account', paymentApi.createDedicatedAccount);
router.post('/create_user', UserController.createUser);
router.post('/get_user', UserController.getUser)


module.exports = router;
