import { useEffect, useState } from "react";

const BieresBrasserie = ({ bieres }) => {
    const [biereList, setBiereList] = useState([]);

    useEffect(() => {
        const fetchBieres = async () => {
            const promises = bieres.map(biereUrl => fetch(`https://meetmybeerapi.osc-fr1.scalingo.io${biereUrl}`).then(response => response.json()));
            const biereData = await Promise.all(promises);
            setBiereList(biereData);
        };

        fetchBieres();
    }, [bieres]);

    return (
        <div>
            {biereList.length > 1 ? (
                <div>
                    <h3>{biereList.length} Bières proposées :</h3>
                    <ul>
                        {biereList.map(biere => (
                            <li key={biere.id}>{biere.nom}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3>Bière proposée : {biereList[0]?.nom}</h3>
            )}
        </div>
    );
};

export default BieresBrasserie;