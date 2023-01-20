//Model for connecting to local or deployed MongoDB

require('dotenv').config();
const dbConfig = {
    "dsn": `mongodb+srv://reading-list-atlas:${process.env.ATLAS_PASSWORD}@reading-list.fl2tntk.mongodb.net/?retryWrites=true&w=majority`,
    "usersCollection": "users",
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

        return {
            client: client,
            db: db
        };
    }
};

module.exports = database;