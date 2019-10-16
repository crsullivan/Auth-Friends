import React from "react";
import { axiosWithLoginAuth } from "./utils/axiosWithLoginAuth";
import styled from 'styled-components'

const Div = styled.div `
  text-align:center;
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

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithLoginAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/friendslist");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <Div>
        <Form onSubmit={this.login}>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <Button>Log in</Button>
        </Form>
      </Div>
    );
  }
}

export default Login;
