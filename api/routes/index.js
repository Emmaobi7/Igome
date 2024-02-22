const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/UserControllers');

// Parse incoming request bodies
router.use(express.urlencoded({ extended: true }));

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
