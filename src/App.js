import React, {useContext} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import Header from './Header';
import NewComment from './NewComment';
import Comments from './Comments';
import CreateUser from './CreateUser';
import UserInfo from './UserInfo';
import SignInUser from './SignInUser'
import {Container, ListGroup} from 'react-bootstrap';

import {AuthProvider} from './auth';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Container>
        <CreateUser />
        <SignInUser />
        <ListGroup variant="flush">
          <Comments />
        </ListGroup>
        <UserInfo />
        <NewComment />
      </Container>
    </AuthProvider>
  );
}

export default App;
