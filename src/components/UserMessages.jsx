import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Extras/extra.css';

const UserMessages = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/leave');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-messages-container">
      {users.map((user) => (
        <div key={user.userid} className="user-message-block">
          <div className="user-id"> <span id='23'>User ID:</span> {user.userid}</div>
          <div className="user-message"><span id='23'>User Message:</span> {user.message}</div>
        </div>
      ))}
    </div>
  );
};

export default UserMessages;
