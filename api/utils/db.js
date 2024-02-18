//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/igomedb')
/* eslint-disable */
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017'; // Update this with your MongoDB connection URI

// Database Name
const dbName = 'igomedb';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB server');

        const db = client.db(dbName);

        // Define the 'users' collection
        const usersCollection = db.collection('users');

        // Example data from form
        const newUser = {
            firstname: 'John',
            lastname: 'Doe',
            idnumber: '123456789',
            taxnumber: '987654321',
            age: 30,
            email: 'john.doe@example.com',
            phonenumber: '123-456-7890'
        };

        // Insert the new user into the 'users' collection
        const result = await usersCollection.insertOne(newUser);
        console.log("New user added with ID: ${result.insertedId}");

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection
        await client.close();
        console.log('Connection to MongoDB closed');
    }
}

// Call the function to connect to the database and insert the user
connectToDB();