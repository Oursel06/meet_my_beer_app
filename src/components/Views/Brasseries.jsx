import React, { useEffect, useState } from 'react';
import BieresBrasserie from './BieresBrasserie';

const BrasserieComponent = () => {
    const [brasserie, setbrasserie] = useState([]);

    useEffect(() => {
        fetch('https://meetmybeerapi.osc-fr1.scalingo.io/api/brasseries')
            .then(response => response.json())
            .then(data => setbrasserie(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {brasserie.map(brasserie => (
                <div className="brasserie-card" key={brasserie.id}>
                    <h1>{brasserie.nom}</h1>
                    <a href={`https://www.google.com/maps/search/${encodeURIComponent(brasserie.adresse1)}`} target="_blank">{brasserie.adresse1}</a>
                    <p><a href={`tel:${brasserie.tel}`}>{brasserie.tel}</a></p>
                    <p><a href={`mailto:${brasserie.mail}`}>{brasserie.mail}</a></p>
                    <a href={brasserie.site}>{brasserie.site}</a>
                    <BieresBrasserie bieres={brasserie.bieres} />
                </div>
            ))}
        </div>
    );
};

export default BrasserieComponent;