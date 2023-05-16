import logo from './logo.svg';
import './App.css';
import Screen from './components/Views/Screen.jsx'
import NavBar from './components/Views/NavBar.jsx';
import { useEffect, useState } from 'react';
import Brasseries from './components/Views/Brasseries';

// test
function App() {

  const [brasserieData, setBrasserieData] = useState([]);
  // const [search, searchText] = useState("");

  useEffect(() => {
    function fetchBrasserie() {
      fetch('https://127.0.0.1:8000/brasseries')
        .then(response => {
          return response.json();
        })
        .then(result => {
          // console.log(result["hydra:member"][0])
          setBrasserieData(result["hydra:member"])
        });
    }
    fetchBrasserie();
  }, []);

  return (
    <div className="App">
      <Screen />
      <Brasseries brass={brasserieData} />
      <NavBar />
    </div>
  );
}

export default App;