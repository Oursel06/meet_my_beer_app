import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

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
        <div className="section">
            {biereList.length > 0 ? (
                <div>
                    <h3>{biereList.length} Bières proposées :</h3>
                    <ul>
                        {biereList.map(biere => (
                            <Link to='/biere' state={biere} key={biere.id}>{biere.nom}</Link>
                        ))}
                    </ul>
                </div>
            ) : (
                <h3>aucune bière proposée</h3>
            )}
        </div>
    );
};

export default BieresBrasserie;