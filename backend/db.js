const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://sachinrv19:PvNCWOTzbIDyOi7h@cluster0.1qoem00.mongodb.net/todos")
const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo= mongoose.model("todo", todoSchema);
module.exports = { todo };