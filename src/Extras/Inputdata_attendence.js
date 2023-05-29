import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Inputdata_attendence() {

    const history=useNavigate();

    const [userid,setUserid]=useState('')
    const [dsa,setDsa]=useState('')
    const [se,setSe]=useState('')
    const [m3,setM3]=useState('')
    const [ppl,setPpl]=useState('')
    const [mp,setMp]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/marks",{
                userid,dsa,se,m3,mp,ppl
            })
            .then(res=>{
                if(res.data=="ok"){
                    history("/Adm")
                }
                else if(res.data=="notexist"){
                    alert("Invalid Details!!!")
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

            <h1>Login</h1>

            <form action="POST">
                <input type="text" onChange={(e) => { setUserid(e.target.value) }} placeholder="User ID"  />
                <input type="text" onChange={(e) => { setDsa(e.target.value) }} placeholder="DSA"  />
                <input type="text" onChange={(e) => { setSe(e.target.value) }} placeholder="SE"  />
                <input type="text" onChange={(e) => { setM3(e.target.value) }} placeholder="M3"  />
                <input type="text" onChange={(e) => { setMp(e.target.value) }} placeholder="MP"  />
                <input type="text" onChange={(e) => { setPpl(e.target.value) }} placeholder="PPL"  />
                <input type="submit" onClick={submit} />

            </form>

        </div>
    )
}

export default Inputdata_attendence