import React, { useState, useEffect } from "react";
import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";
import AddFriend from './AddFriend';
import {NavLink} from "react-router-dom";


const FriendsList = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
      const getFriends = () => {
        axiosWithLoginAuth()
          .get('/api/friends')
          .then(response => {
            setFriends(response.data);
          })
          .catch(error => {
            console.error('Server Error', error);
          });
      }
      
      getFriends();
    },[]);


    const logout = () => {
        localStorage.removeItem("token");
    }
    
        return (
            
            <div>
                <AddFriend friends={friends}/>
                {friends.map(friend => (
                    <div key={friend.id}>
                        <h1>{friend.name}</h1>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                    </div>
                ))}
                <NavLink to='/login'>
                    <button onClick={logout}>Log Out</button>
                </NavLink>
            </div>
            
        )
}

export default FriendsList
