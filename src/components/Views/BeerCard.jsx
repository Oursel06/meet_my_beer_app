import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ratapignata} from '../../assets/ratapignata.png'

function BeerCard({}) {
    const location = useLocation()
    const biere = location.state
    const url = 'https://meetmybeerapi.osc-fr1.scalingo.io'
    const [saveurs,setSaveurs] = useState([])
    const [couleurs,setCouleurs] = useState([])


    const fetchSaveurs = async () => {
        try {
            const response = await fetch(`${url}${biere.saveurs[0]}`,{mode: "cors"});
            const data = await response.json();
            setSaveurs(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données de l\'API "saveurs"', error);
        }
    };

    const fetchcouleurs = async () => {
        try {
            const response = await fetch(`${url}${biere.couleur}`,{mode: "cors"});
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
        <div className="section">
            <h3>{biere.nom}</h3>
            <hr/>
            <img className="cannette" src={require("../../assets/"+biere.asset+".png")} alt="photo d'une canette" />
            <br/>
            <p>Informations :</p>
            <div className="beerInfo">
                <div className="beerDetails">
                    <div className="beerDetail"><span>Saveurs :</span> <span>{saveurs.libelle}</span></div>
                    <div className="beerDetail"><span>Degrés :</span> <span>{biere.nbDegres}°</span></div>
                </div>
                <div className="beerDetails">
                    <div className="beerDetail"><span>Robe :</span> <span>{couleurs.libelle}</span></div>
                    <div className="beerDetail"><span>Amertume :</span> <span>{biere.amertume}</span></div>
                </div>
            </div>
        </div>
    )
}

export default BeerCard