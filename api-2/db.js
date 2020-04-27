const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    answers:[{
        content : String,
        votes : Number
    }]
})

module.exports = {
    Question: mongoose.model('Question', questionSchema)
}