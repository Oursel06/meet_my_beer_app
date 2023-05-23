
import './App.css';
import Screen from './components/Views/Screen.jsx'
import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";


// test
function App() {
  const [bieres, setBieres] = useState([]);

      // Récupération et stockage des bières, saveurs et couleurs
      useEffect(() => {
        const fetchBieres = async () => {
            try {
                const response = await fetch('https://meetmybeerapi.osc-fr1.scalingo.io/api/bieres',{mode: "cors"});
                const data = await response.json();
                setBieres(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API "biere"', error);
            }
        };

        fetchBieres();
    }, []);


    const fetchSaveurs = async (url,biere) => {
        try {
            const response = await fetch(`${url}${biere.saveurs[0]}`,{mode: "cors"});
            const data = await response.json();
            biere['saveur'] = data.libelle
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API "saveurs"', error);
        }
    };

    const fetchcouleurs = async (url,biere) => {
        try {
            const response = await fetch(`${url}${biere.couleur}`,{mode: "cors"});
            const data = await response.json();
            biere['couleurs'] = data.libelle
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API "couleurs"', error);
        }
    };


    // On ajoute dans un autre tableau toutes les informations du tableau bière en remplacant l'id couleur et saveur par leur libellé en confrontant les tableaux concernés
    useEffect(() => {
        const url = 'https://meetmybeerapi.osc-fr1.scalingo.io'

        bieres.forEach(biere => {
            fetchSaveurs(url,biere)
            fetchcouleurs(url,biere)  
            console.log(biere)
        })
    }, [bieres]);



  return (
    <div className="App">
      <BrowserRouter>
        <Screen beerData={bieres} />
      </BrowserRouter>
    </div>
  );
}

export default App;