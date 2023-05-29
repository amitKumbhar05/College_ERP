const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const attenSchema = new mongoose.Schema({
    userid:{
        type:String
    },
    DSA:{
        type:String
    },
    SE:{
        type:String
    },
    M3:{
        type:String
    },
    MP:{
        type:String
    },
    PPL:{
        type:String
    }
})

const attend = mongoose.model("marks",attenSchema)

module.exports=attend