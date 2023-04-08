const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    mongoose.set('strictQuery', true)
    await mongoose.connect('mongodb://127.0.0.1:27017/goeazydb');
    console.log('db connected')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  
  const StudentSchema = new mongoose.Schema({
    name: String,
    SmartId: String,
    password: String
  });

  const Students = mongoose.model('Students', StudentSchema);

  const server = express();

  server.use(cors());
  server.use(bodyParser.json()); 


//Routes
server.post('/login', (req,res)=> {
    const { SmartId, password } = req.body
    Students.findOne({ SmartId: SmartId}, (err, user) => {
        if(user){
            if(password === user.password){
                res.send({message: "login successfull", user: user})
            }else{
                res.send({message: "password do not match"})
            }
        }else{
            res.send({message: "user not registered"})
        }
    })
})
server.post('/register', (req,res)=> {
    const {name, SmartId, password}= req.body
    Students.findOne({SmartId: SmartId}, (err, user) => {
        if(user){
            res.send({ message: "user already registered!"})
        }
        else{
            const user = new Students({
                name,
                SmartId,
                password
           })
           user.save(err => {
               if(err){
                   res.send(err)
               }else{
                   res.send( { message: "Successfully Registered" })
               }
           })
        }
    })
    
})

server.listen(9002,()=> {
    console.log("started at port 9002")
})