import React, { useState } from 'react';
import { axiosWithLoginAuth } from './utils/axiosWithLoginAuth';

const AddFriend = (props) => {

    const initialValue = {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    }

    const [friend, setFriend] = useState(initialValue)

       
    const handleChanges = event => {
        setFriend({
            ...friend,
             [event.target.name]: event.target.value
        })
   }

   const submitItem = event => {
        event.preventDefault();
        axiosWithLoginAuth()
      .post("/api/friends", friend)
      .then(res => {
          setFriend(res.data)
      })
      .catch(err => console.log(err.res));
  }
   

    return (
        <div>
            <form onSubmit={submitItem}>
                <input 
                type="text"
                name="name"
                value={props.friends.name}
                onChange={handleChanges}
                placeholder='Name'
                />
                 <input 
                type="text"
                name="age"
                value={props.friends.age}
                onChange={handleChanges}
                placeholder='Age'
                />
                 <input 
                type="text"
                name="email"
                value={props.friends.email}
                onChange={handleChanges}
                placeholder='Email'
                />

                <button>Add</button>
            </form>
        </div>
    )
    
}

export default AddFriend