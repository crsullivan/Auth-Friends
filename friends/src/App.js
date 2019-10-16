import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from './components/FriendsList';
import NavBar from './components/NavBar';
import styled from 'styled-components'
import './App.css';

const Container = styled.div `
  
`

function App() {
  return (
    <Container>
      
        <Router>
          <NavBar />
          <Switch>
            <PrivateRoute path="/friendslist" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
            </Switch>
        </Router>

    </Container>
  );
}

export default App;
