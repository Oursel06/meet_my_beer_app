import logo from './logo.svg';
import './App.css';
import Screen from './components/Views/Screen.jsx'
import NavBar from './components/Views/NavBar.jsx';
import { useEffect, useState } from 'react';
import Brasseries from './components/Views/Brasseries';
import Bieres from 'components/Views/Bieres';


// test
function App() {

  return (
    <div className="App">
      {/* <Screen /> */}
      {/* <Bieres /> */}
      <Brasseries />
      <NavBar />
    </div>
  );
}

export default App;