import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
 
function App(props) {
  return (
    <React.Fragment>

      <NavBar />

      <Main />
      
    </React.Fragment>
  );
}

export default App;
