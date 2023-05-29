const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const applicationSchema = new mongoose.Schema({
    userid:{
        type:String
    },
    message:{
        type:String
    }
})

const application = mongoose.model("application",applicationSchema)

module.exports=application