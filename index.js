const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.Port || 5000

//middle wares
app.use(cors());
app.use(express.json());


app.get('/',(req,res) => {
    res.send('Service Review Server is Running');
})


app.listen(port,() => {
    console.log(`Service  Review Server is Running on Port ${port}`);
})