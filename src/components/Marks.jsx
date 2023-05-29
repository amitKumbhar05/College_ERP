import React, { useEffect, useState } from 'react';
import axios from "axios"
import '../Extras/extra.css'; // Import CSS file for styling
import { useLocation, useNavigate } from 'react-router-dom';

const Marks = () => {
  const history = useNavigate()
  const location = useLocation();
  let userid = location.state.id;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/marks', {
        params: {
          param1: userid,
        },
      })
      .then((response) => {
        setData(response.data);
        const arrData = Array.from(response.data)
        // console.log(arrData[0].username);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data Structure Algorithm</td>
            <td>{data.DSA}</td>
          </tr>
          <tr>
            <td>Software Eniginering</td>
            <td>{data.SE}</td>
          </tr>
          <tr>
            <td>Microprocessor</td>
            <td>{data.MP}</td>
          </tr>
          <tr>
            <td>Engineering Mathematics III</td>
            <td>{data.M3}</td>
            </tr>
          <tr>
            <td>Principles Of Programming Languages</td>
            <td>{data.PPL}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Marks;
