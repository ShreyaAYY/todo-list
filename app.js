const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');


const app = express();

app.use(express.json());

// Connect to database
mongoose
    .connect("mongodb+srv://shreyaAPI:Shreya0416$@cluster0.wc2t5ia.mongodb.net/Todo?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => { console.log("Successfully connected to database") })
    .catch(error => {
        console.log("[-] Mongoose error")
        console.log(error)
    })

app.use('/api/todo', router);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening to port ${port}`));
