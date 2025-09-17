const express =require ("express");
const {createTodo}= require("./types");
const app= express();

app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload= req.body;
    const parsedPayload= createTodo.safePayload(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent a wrong inputs"
        })
        return;
    }
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePayload= req.body;
    const parsedPayload= updateTodo.safePayload(updatePayload);
    if(!parsedPayload.success){
        res.status(411)({
            msg:"you sent a wrong input"
        });
        return;
    }
})