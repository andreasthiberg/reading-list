const database = require("./database.js");
const ObjectId = require('mongodb').ObjectId;

const books = {
    getAll: async function getAll() {
        let db;
        
        db = await database.getDb();

        let result = await db.booksCollection.find({}).toArray();

        await db.client.close();

        return result;
    }
};

module.exports = books;
