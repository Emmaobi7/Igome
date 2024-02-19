const AppController = require('../controllers/AppController')
const UserController = require('../controllers/UserControllers')
const express = require('express')
const router = express.Router();

//get routes
router.get('/', AppController.get);
router.post('/users', UserController.createUser);

module.exports = router;
