import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import '../Extras/extra.css'

function Login() {
    const history=useNavigate();

    const [userid,setUserid]=useState('')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const [rollno,setRollno]=useState('')
    const [userclass,setUserclass]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/addstud",{
                userid,password,username,rollno,userclass
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    alert("Student Data added sucessfully")
                    history("/Adm")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Add Student</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setUserid(e.target.value) }} placeholder="User ID"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Name" />
                <input type="text" onChange={(e) => { setUserclass(e.target.value) }} placeholder="Class" />
                <input type="text" onChange={(e) => { setRollno(e.target.value) }} placeholder="Roll No." />
                
                <input type="submit" onClick={submit} />

            </form>

        </div>
    )
}

export default Login