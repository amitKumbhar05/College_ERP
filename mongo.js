const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

// const postSchema = new mongoose.Schema({
//     title: String,
//     content: String,
//   });

const newSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    rollno:{
        type:String
    },
    userclass:{
        type:String
    },
})

const collection = mongoose.model("collections",newSchema);


module.exports=collection
