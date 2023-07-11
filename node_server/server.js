const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;


const server = express();
server.use(cors());
server.use(bodyParser.json());

// server.use(express.static('static'));

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
    const data = await collection.find({}).sort({ "q_no": 1 }).toArray();
    res.send(data);
});

server.listen(port, () => {
    console.log('server started');
})