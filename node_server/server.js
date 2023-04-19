const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;


// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/Leetcode');
//     console.log('db connected');
// }
// const QuestionsSchema = new mongoose.Schema({
//     question: Number,
//     code: String
// });

const server = express();
server.use(cors());
server.use(bodyParser.json());

const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://Deepak:kris1234@cluster0.moctqsw.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const database = 'Leetcode';

server.get('/getQuestions', async(req, res) => {
    console.log('connect db');
    const result = await client.connect((err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Connected to MongoDB');
    });

    const collection = result.db(database).collection('Questions');
    const data = await collection.find({}).toArray();
    res.send(data);
});

server.listen(port, () => {
    console.log('server started');
})