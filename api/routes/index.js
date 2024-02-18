const AppController = require('../controllers/AppController')
const express = require('express')
const router = express.Router();

//get routes
router.get('/', AppController.get);
router.post('/users', UsersController.createUser);

module.exports = router;
