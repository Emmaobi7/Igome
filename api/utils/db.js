const { MongoClient } = require('mongodb');

class DBClient {
    constructor() {
        this.host = process.env.DB_HOST || 'localhost';
        this.port = process.env.DB_PORT || 27017;
        this.dbName = process.env.DB_DATABASE || 'igome';
        this.client = null;
        this.db = null;
        this.connect();
    }

    async connect() {
        try {
            this.client = await MongoClient.connect(`mongodb://${this.host}:${this.port}`);
            this.db = this.client.db(this.dbName);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
        }
    }

    async connectToDB() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB server');
            return this.client.db(this.dbName);
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    async closeDB() {
        try {
            await this.client.close();
            console.log('Connection to MongoDB closed');
        } catch (error) {
            console.error('Error closing MongoDB connection:', error);
            throw error;
        }
    }

    isAlive() {
        return this.client && this.client.isConnected();
    }
}

const dbClient = new DBClient();

module.exports = dbClient;
