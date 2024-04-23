const express = require('express');
const cors = require('cors');
const Java = require('./DB/QueAns');

const app = express();
// It is mandatory to save data to database
app.use(express.json());
app.use(cors());

require('./DB/connect')

app.get('/', (req, res)=>{
    res.send("App is working")
})

app.get('/getData', async(req, res)=>{
    let result = await Java.find({});
    res.send(result);
})

app.get('/getData/:key', async(req, res)=>{
    let result = await Java.find({
        "$or":[
            {language: {$regex : req.params.key}}
        ]
    })
    res.send(result);
})

app.post('/setData', async(req, res)=>{
    let data = new Java(req.body);
    if(data.question && data.answer && data.difficulty){
        let result = await data.save().then((result)=>res.send(result)).catch((e)=>console.log("Error on posting data"));
    }
    else{
        res.send("Check all fields");
    }
   
})

app.listen(5000);