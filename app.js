const express = require("express")
const collection = require("./mongo")
const application = require("./mongodb")
const mark =require('./mar')
// const attend = require('./att')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.get("/",cors(),(req,res)=>{
    res.send("Hello")
})

// server.js

app.get("/dash", async (req, res) => {
    const mail = req.query.param1;
    const user = await collection.findOne({userid:mail})
    if(user)
    {
        // console.log(user.username)
       res.json(user)
    }
    else
    {
        console.log("some error")
        res.json({error:"User not"})
    }
  });
  

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({userid:email,password:password})

        if(check){
            if(email==="Admin5555")
            {
                res.json("Admin")
            }
            else
                res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post('/marks',async(req,res)=>{
    const{userid,dsa,se,m3,mp,ppl} = req.body
    const data ={
        userid:userid,
        DSA:dsa,
        SE:se,
        M3:m3,
        MP:mp,
        PPL:ppl
    }
    try {
        await mark.insertMany([data])
        res.send("ok")
    } catch (e) {
        console.log(e)
        res.json("fail")
    }
})
app.get('/marks', async (req, res) => {
    const mail = req.query.param1;
    const user = await mark.findOne({userid:mail})
    if(user)
    {
        // console.log(user.DSA)
       res.json(user)
    }
    else
    {
        console.log("some error")
        res.json({error:"User not"})
    }
  });

app.post("/addstud",async(req,res)=>{
    const{userid,password,username,rollno,userclass}=req.body

    const data={
        userid:userid,
        password:password,
        username:username,
        rollno:rollno,
        userclass:userclass
    }

    try{
        const check=await collection.findOne({userid:userid})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
        // const col =new collection(req.body)
        // const result = await col.save()
        // res.json("notexist")
    }
    catch(e){
        res.json("fail")
    }

})
app.post('/leave',async (req,res) =>{
    const {userid,usermsg} =req.body
    const data={
        userid:userid,
        message:usermsg
    }
    try {
        await application.insertMany([data])
        res.send("ok")
    } catch (e) {
        console.log(e)
        res.json("fail")
    }
})
app.get('/leave',async(req,res) =>{
    const user =await application.find()
    if(user)
    {
        res.json(user)
    }
    else
    {
        console.log("error")
    }
})

app.listen(8000,()=>{
    console.log("port connected");
})

