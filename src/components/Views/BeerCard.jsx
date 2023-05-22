import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'

function BeerCard({}) {
    const location = useLocation()
    const biere = location.state
    const url = 'https://meetmybeerapi.osc-fr1.scalingo.io'
    const [saveurs,setSaveurs] = useState([])
    const [couleurs,setCouleurs] = useState([])
    const [biereObj,setBiereObj] = useState({})


    const fetchSaveurs = async () => {
        try {
            const response = await fetch(`${url}${biere.saveurs[0]}`);
            const data = await response.json();
            setSaveurs(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API "saveurs"', error);
        }
    };

    const fetchcouleurs = async () => {
        try {
            const response = await fetch(`${url}${biere.couleur}`);
            const data = await response.json();
            setCouleurs(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API "couleurs"', error);
        }
    };

    useEffect(() =>{
        
        fetchcouleurs()
        fetchSaveurs()
        
    },[biere])

    return (
        <div >
            {biere.nom}<br/>
            {saveurs.libelle}|{couleurs.libelle}
            <hr/>
        </div>
    )
}

export default BeerCard