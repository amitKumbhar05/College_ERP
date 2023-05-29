import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



function Leave() {

    const location =useLocation()
    const user_id =location.state.id
    const history = useNavigate()
    const [userid,setUserid] = useState('')
    const [usermsg,setUsermsg] = useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/leave",{
                userid,usermsg
            })
            .then(res=>{
                
                if(res.data=="ok"){
                    alert("submited succesfully")
                    history("/dash",{state:{id:user_id}})
                }
                else if(res.data=="fail")
                {
                    alert("Invalid Details!!!")
                }
            })
            .catch(e=>{
                alert("wrong details")
            })

        }
        catch(e){
            console.log(e);

        }

    }






  return (
    <div>
      <form action="POST">
      <input type="text" onChange={(e) => { setUserid(e.target.value) }} placeholder="User ID"  />
      <textarea name="message" id="message" placeholder="Enter your message or description" rows="5" cols="40" onChange={(e) => { setUsermsg(e.target.value)}}></textarea>
      <input type="submit" onClick={submit} />

      </form>
    </div>
  )
}

export default Leave
