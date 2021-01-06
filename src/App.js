import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import Spinner from './Components/Spinner/Spinner';
import { useSelector } from 'react-redux';
 
function App(props) {
  const isLoading = useSelector(state => state.weather.isLoading)

  return (
    <React.Fragment>

      <NavBar />

      {isLoading ? <Spinner /> : <Main />}
      
    </React.Fragment>
  );
}

export default App;
