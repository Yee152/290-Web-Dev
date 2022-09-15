import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './user_model.mjs';

const app = express();

const PORT = process.env.PORT;


app.get("/create", asyncHandler(async(req,res) => {
    const user = await users.createUser(req.query.name, req.query.age, req.query.email, req.query.phoneNumber)
    res.send(user);
}));


app.get("/retrieve",asyncHandler(async(req,res) => {
    const filter = {};
    if(req.query.name !== undefined){
        filter.name = req.query.name
    }
    if(req.query.age !== undefined){
        filter.age = req.query.age
       
    }
    
    if(req.query._id !== undefined){
        filter._id = req.query._id
    }
    if(req.query.email !== undefined){
        filter.email = req.query.email
    }
    if(req.query.phoneNumber !== undefined){
        filter.phoneNumber = req.query.phoneNumber
    }
    const result = await users.findUsers(filter)
    res.send(result)
}));

app.get("/update", asyncHandler(async(req,res) => {;
    const update = {};
    if(req.query.name !== undefined){
        update.name = req.query.name
    }
    if(req.query.age !== undefined){
        update.age = req.query.age
    }
    if(req.query.phoneNumber != undefined){
        update.phoneNumber = req.query.phoneNumber
    }
    const updates = await users.updateUser({_id: req.query._id},update)
    if(updates === 1){
        res.send({modifiedCount: updates})
    }
    if (updates === 0){
        res.send({Error: "Not Found"})
    }
    
    
}));


app.get("/delete", asyncHandler(async(req,res) => {;
    const deletes = {};
    if(req.query.name !== undefined){
        deletes.name = req.query.name
    }
    if(req.query.age !== undefined){
        deletes.age = req.query.age
    }
    if(req.query.phoneNumber != undefined){
        deletes.phoneNumber = req.query.phoneNumber
    }
    if(req.query._id != undefined){
        deletes._id = req.query._id
    }
    if(req.query.email != undefined){
        deletes.email = req.query.email
    }
        
    const resultVal = await users.deleteUser(deletes)
    res.send({deletedCount: resultVal})

   
}));



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});