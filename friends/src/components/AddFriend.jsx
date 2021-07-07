import React, { useState } from 'react';
import { axiosWithLoginAuth } from './utils/axiosWithLoginAuth';
import styled from 'styled-components'

const H1 = styled.h1 `
    margin: 3% 0 2%;
    padding-top:1%;
`

const Div = styled.div `
    text-align:center;
    height:13vh;
    width:40%;
    margin: 0 30% 0 30%;
    background:silver;
`

const Form = styled.form `
`

const Input = styled.input `
    margin: 3% 1%;
`

const Button = styled.button `
    border-radius:5px;
    background:white
    width:10%;
    font-size:1em;
        :hover{background:blue;
        color:white;
        }
`

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
        <>
            
            <Div>
                <H1>Add New Friend</H1>
                <Form onSubmit={submitItem}>
                    <Input 
                    type="text"
                    name="name"
                    value={props.friends.name}
                    onChange={handleChanges}
                    placeholder='Name'
                    />
                    <Input 
                    type="text"
                    name="age"
                    value={props.friends.age}
                    onChange={handleChanges}
                    placeholder='Age'
                    />
                    <Input 
                    type="text"
                    name="email"
                    value={props.friends.email}
                    onChange={handleChanges}
                    placeholder='Email'
                    />
                    <Button>Add</Button>
                </Form>
            </Div>
        </>

    )
    
}

export default AddFriend