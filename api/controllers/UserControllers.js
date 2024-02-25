// UserControllers.js
const dbClient = require('../utils/db');
const { ObjectId } = require('mongodb');

class UserController {
    static async createUser(req, res) {
       
        const { firstname, lastname, email, phonenumber } = req.body
        const newUser = {firstname, lastname, email, phonenumber}
         
        try {
            const result = await dbClient.usersCollection.insertOne(newUser);
            console.log(`New user added with ID: ${result.insertedId}`);
            return res.status(200).json({success: 'user created'})
        } catch(err){
            console.log(err)
            return res.status(500).json({error: 'Internal server error'})
        }
       
    }

    static async getUser(req, res) {
        const { email } = req.user
        console.log(email)
        try {
            const user = await dbClient.usersCollection.findOne({email})
            if (user) { return res.status(200).json({success: 'user found'}) }
            if (!user) { return res.status(404).json({error: 'user not found'}) }
        } catch(err) {
            console.log(err)
            return res.status(500).json({error: 'Internal server error'})
        }
    }
}

module.exports = UserController;
