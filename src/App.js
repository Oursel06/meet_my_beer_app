import logo from './logo.svg';
import './style/App.css';
import Header from "./composants/Header"
import { useEffect, useState } from 'react';
import Brasserie from './composants/Brasseries';

function App() {

  // const [biereData, setBiereData] = useState([]);
  const [brasserieData, setBrasserieData] = useState([]);
  const [search, searchText] = useState("");

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
    <div className="app">
      <Header />
      <Brasserie brass={brasserieData} />
    </div>
  );



  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
