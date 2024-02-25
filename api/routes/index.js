
/*
contains all routes for this server
*/
const AppController = require('../controllers/AppController')
const paymentApi = require('../controllers/paymentController')
const express = require('express')
const router = express.Router();
const { createUser } = require('../controllers/UserControllers');
//get routes
router.get('/', AppController.get);
router.get('/verifypayment/:reference', paymentApi.verifyTransaction)
router.get('/balance', paymentApi.getBalance)


//post routes
router.post('/acceptpayment', paymentApi.initializeTransaction);
router.post('/create_user', paymentApi.createCustomer);


// Route for serving the registration form
router.get('/register', (req, res) => {
    res.sendFile('register.html', { root: __dirname + '/../public' });
});


// Route for handling form submission
router.post('/register', createUser);

router.post('/transaction', (req,res) => {
    res.json(req.body)
})


module.exports = router;
