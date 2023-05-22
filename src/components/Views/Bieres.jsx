import React, { useEffect, useState } from 'react';

const Bieres = () => {
    const [bieres, setBieres] = useState([]);
    const [saveurs, setSaveurs] = useState([]);
    const [couleurs, setCouleurs] = useState([]);
    const [biereData, setBiereData] = useState([]);

    // Récupération et stockage des bières, saveurs et couleurs
    useEffect(() => {
        const fetchBieres = async () => {
            try {
                const response = await fetch('https://meetmybeerapi.osc-fr1.scalingo.io/api/bieres');
                const data = await response.json();
                setBieres(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API "biere"', error);
            }
        };

        const fetchSaveurs = async () => {
            try {
                const response = await fetch('https://meetmybeerapi.osc-fr1.scalingo.io/api/saveurs');
                const data = await response.json();
                setSaveurs(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API "saveurs"', error);
            }
        };

        const fetchcouleurs = async () => {
            try {
                const response = await fetch('https://meetmybeerapi.osc-fr1.scalingo.io/api/couleurs');
                const data = await response.json();
                setCouleurs(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de l\'API "saveurs"', error);
            }
        };

        fetchBieres();
        fetchSaveurs();
        fetchcouleurs();
    }, []);

    // On ajoute dans un autre tableau toutes les informations du tableau bière en remplacant l'id couleur et saveur par leur libellé en confrontant les tableaux concernés
    useEffect(() => {
        const mapsaveursTobieres = () => {
            const biereData = bieres.map((beer) => {
                const saveurId = beer.saveurs.map((saveurUrl) => {
                    const savId = saveurUrl.split('/').pop();
                    return savId;
                });

                const couleurId = beer.saveurs.map((couleurUrl) => {
                    const coulId = couleurUrl.split('/').pop();
                    return coulId;
                });

                const biereSaveur = saveurs.filter((save) => saveurId.includes(save.id.toString()));
                const biereCouleur = couleurs.filter((coul) => couleurId.includes(coul.id.toString()));

                return {
                    ...beer,
                    saveurs: biereSaveur.map((flavor) => flavor.libelle),
                    couleurs: biereCouleur.map((coul) => coul.libelle),
                };
            });
            setBiereData(biereData);
        };
        mapsaveursTobieres();
    }, [bieres, saveurs, couleurs]);

    return (
        <div class="container">
            {biereData.map((beer) => (
                <div key={beer.id} class="beer-card">
                    <h2>Nom: {beer.nom}</h2>
                    <p>Degrés: {beer.nbDegres}</p>
                    <p>Saison: {beer.saison ? 'Oui' : 'Non'}</p>
                    <p>Couleur: {beer.couleurs.join(', ')}</p>
                    <p class="saveurs">Saveurs: {beer.saveurs.join(', ')}</p>
                    <p>Amertume: {beer.amertume}</p>
                </div>
            ))}
        </div>
    );
};

export default Bieres;