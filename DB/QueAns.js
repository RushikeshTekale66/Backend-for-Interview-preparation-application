const mongoose = require('mongoose');

let questionSchema = mongoose.Schema({
    question: {
        type: String,
        require: true
    },
    answer: {
        type: String,
        require: true
    },
    difficulty: {
        type: String,
        require: true
    },
    language:{
        type:String,
        require:true
    }

})
module.exports = mongoose.model("questions", questionSchema);