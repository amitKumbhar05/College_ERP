import React from 'react';
import '../Extras/extra.css';
import { useLocation, useNavigate } from 'react-router-dom';



const Admin = () => {
    const history =useNavigate();
  const handleAddUser = () => {
    history('/addstud')
  };
  const handleMarks = () => {
    history('/addmar')
  };
  const handelreq = () => {
    history('/lmsg')
  };


  return (
    <div className="admin-component">
      <h1>Admin Panel</h1>
      <button className="add-user-button" onClick={handleAddUser}>
        Add Student
      </button>
      <button className="add-user-button" onClick={handleMarks}>
        Add Marks
      </button>
      <button className="add-user-button" onClick={handelreq}>
        Applications
      </button>
    </div>
  );
};

export default Admin;
