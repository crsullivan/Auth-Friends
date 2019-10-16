import React, { useState, useEffect } from "react";
import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";
import AddFriend from './AddFriend';
import styled from 'styled-components'

const FriendCard = styled.div `
margin: 2% 5%;
width:20%;
text-align:center;
background:white;
border-radius:5px;
border:2px solid darkgrey;
`

const Div = styled.div `
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;

`

const ButtonDiv = styled.div `
    margin-bottom:3%;
        
`

const EditButton = styled.button `
    font-size:1em;
    margin-right:3%;
        :hover{
            background:yellow;
        }
`

const DeleteButton = styled.button `
    font-size:1em;
        :hover{
            background:red;
            color:white;
        }
`

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
    
        return (
            <>
                <AddFriend friends={friends}/>
                <Div>
                    {friends.map(friend => (
                        <FriendCard key={friend.id}>
                            <h2>{friend.name}</h2>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                            <ButtonDiv>
                                <EditButton>Edit Info</EditButton>
                                <DeleteButton>Delete</DeleteButton>
                            </ButtonDiv>
                        </FriendCard>
                    ))}
                    
                </Div>
            </>
        )
}

export default FriendsList
