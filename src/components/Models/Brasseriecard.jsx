import React from "react";

function Brasseriecard({ id, nom, adress1, adress2, tel, site, bieres }) {
    return (
        <div className="brasseriecards">
            <i className="brasserieid">N° : {id}</i><br />
            <h2 className="brasserienom">{nom}</h2>
            <p>{adress1}</p>
            <p>{adress2}</p>
            <p>{tel}</p>
            <p>{site}</p>
        </div>
    );
}

export default Brasseriecard;
