import React from 'react';
import './App.css';
import Header from './view/Header'
import UserLists from './view/UserLists'
import Footer from './view/Footer'
import Boxpost from './view/Boxpost'


const App = (props) => {
  return (
    <React.Fragment>
      <Header />
      <UserLists users={props.users} />
      <Footer />
    </React.Fragment>
  )
}

export default App;
