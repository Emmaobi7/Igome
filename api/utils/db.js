const { MongoClient } = require('mongodb')

class DBClient {
  constructor() {
    // const host = process.env.DB_HOST || 'localhost';
    // const port = process.env.DB_PORT || 27017;
    // const database = process.env.DB_DATABASE || 'igome';
    //const url = `mongodb://${host}:${port}/${database}`;
    const url = `mongodb+srv://emma46574:${process.env.DB_USER_PASSWORD}@cluster0.cobdi6z.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
    this.client = new MongoClient(url)
    this.usersCollection;
    this.client.connect()
      .then(() => {
        this.usersCollection = this.client.db().collection('users');
        console.log('MongoDB connected successfully');
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
      });

  }

 
}

const dbClient = new DBClient();
module.exports = dbClient;
