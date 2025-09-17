const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://sachinrv19:PvNCWOTzbIDyOi7h@cluster0.1qoem00.mongodb.net/todos")
const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model("todos", todoSchema);
module.export={
    todo
}