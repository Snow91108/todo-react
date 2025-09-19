const express =require ("express");
const {createTodo}= require("./types");
const {todo}= require("./db");
const cors= require("cors")
const app= express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    try{
    const createPayload= req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
      
    }
    await todo.create({
        title: createPayload.title,
        description:createPayload.description
    })
    res.json({
        msg:"Todo Created"
    });
}catch (err){
    console.error("error in post todos",err);
    res.status(500).json({msg:"internal server error"});
    
}
})

app.get("/todos", async function(req, res){
    try{
    const todos= await todo.find({});
    res.json({
        todos
    })
}catch(err){
    console.error("error in get todos",err);
    res.status(500).json({msg:"internal server error"});
}
})

app.put("/completed", async function(req, res){
    try{
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411)({
            msg:"you sent a wrong input"
        });
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo marked as completed"
    })
}catch(err){
    console.error("error in put", err);
    res.status(500).json({msg:"internal server error"});
}
})

app.listen(4000);