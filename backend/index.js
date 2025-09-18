const express =require ("express");
const {createTodo}= require("./types");
const {todo}= require("./db");
const app= express();

app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload= req.body;
    const parsedPayload= createTodo.safePayload(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description:createPayload.title
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos", async function(req, res){
    const todos= await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safePayload(updatePayload);
    if(!parsedPayload.success){
        res.status(411)({
            msg:"you sent a wrong input"
        });
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true;
    })
    res.json({
        msg:"todo marked as completed"
    })
})

