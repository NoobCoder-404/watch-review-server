const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express();
const port = process.env.Port || 5000




//middle wares
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rqwof3p.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const productCollection = client.db('watchReview').collection('products');

        app.get('/services',async(req,res) => {
        const query ={};
        const cursor = productCollection.find(query);
        const products = await cursor.toArray();
        res.send(products);
        })
        
    }
    finally{

    }
}
run().catch(error => console.log(error.message));



app.get('/',(req,res) => {
    res.send('Service Review Server is Running');
})


app.listen(port,() => {
    console.log(`Service  Review Server is Running on Port ${port}`);
})