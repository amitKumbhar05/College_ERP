// import React from "react"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import Navbar from "../Extras/Navbar";
import Profile from "../Extras/Profile";
import { useLocation, useNavigate } from 'react-router-dom';
import '../Extras/extra.css'





function Home() {
  const history = useNavigate()
  const location = useLocation();
  let userid = location.state.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/dash', {
        params: {
          param1: userid,
        },
      })
      .then((response) => {
        setData(response.data);
        const arrData = Array.from(response.data)
        // console.log(arrData[0].username);
        const user ={
          userid:response.data.userid
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className="homepage">

      <Navbar />
      <Profile username={data.username} rollno={data.rollno} userclass={data.userclass}/>
      <button className='btncl' onClick={()=>{{history('/leave',{state:{id:data.userid}})}}}>
        Apply for leave 
      </button>
      {/* <button className='btncl'  onClick={()=>{{history('/atendence',{state:{id:data.userid}})}}}>
        View atendence
      </button> */}
      <button className='btncl'  onClick={()=>{{history('/marks',{state:{id:data.userid}})}}}>
        View scores 
      </button>
    </div>
  )
}

export default Home