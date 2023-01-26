require('dotenv').config();
const dbConfig = {
    "dsn": `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.peuabyi.mongodb.net/editor`,
    "booksCollection": "books",
    "usersCollection": "users"
}

const mongo = require("mongodb").MongoClient;


const database = {
    getDb: async function getDb () {
        let dsn = dbConfig.dsn;
 
        if (process.env.NODE_ENV === 'development') {
            dsn = "mongodb://localhost:27017/reading-list";
        } else if (process.env.NODE_ENV === 'test') {
            dsn = "mongodb://localhost:27017/test";
        };

        const client  = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = await client.db();
        const booksCollection = await db.collection(dbConfig.booksCollection);
        const usersCollection = await db.collection(dbConfig.usersCollection);

        return {
            booksCollection: booksCollection,
            usersCollection: usersCollection,
            client: client,
            db: db
        };
    }
};

module.exports = database;