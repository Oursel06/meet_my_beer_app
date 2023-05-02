import React from "react";
import Brasseriecard from "./Brasseriecard";

function Brasserie({ brass }) {
    const brasseries = [];

    brass.forEach((brasserie) => {
        brasseries.push(<Brasseriecard key={brasserie.id} id={brasserie.id} name={brasserie.nom} adress1={brasserie.adress1} adress2={brasserie.adress2} tel={brasserie.tel} site={brasserie.site} />)
        console.log(brasserie);
    })
    return (
        <div>
            {brasseries}
        </div>
    );
}

export default Brasserie;