const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/InterviewQuestions';

mongoose.connect(url).then(console.log("Connected to database")).catch((e)=>console.log("You got error : ", e));