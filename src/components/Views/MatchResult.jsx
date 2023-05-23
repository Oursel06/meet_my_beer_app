import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function MatchResult({beerData,userChoices}) {

    const [data, setData] = useState(userChoices)
    const [match,setMatch] = useState([])
    const navigate = useNavigate()

    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }
    const graduation = (e) => {
        const notes = []
        console.log(data[0])
        e.couleurs[0] != data[0].type.value ? notes.push(roundToTwo(6*(1-data[0].type.weight/10))) : notes.push(10)
        e.saveur[0] != data[0].gout.value ? notes.push(roundToTwo(6*(1-data[0].gout.weight/10))) : notes.push(10)
        e.amertume != data[0].amertume.value ? notes.push(roundToTwo(6*(1-data[0].amertume.weight/10))) : notes.push(10)
        let degres = ''
        e.nbDegres < 5 ? degres = 'Faible' : degres < 8 ? degres = 'Moyen' : degres = 'Fort'  
        degres !== data[0].degres.value ? notes.push(roundToTwo(6*(1-data[0].degres.weight/10))) : notes.push(10)

        return notes
    }

    useEffect(()=>{
        console.log(data)
        let winner = ''
        beerData.forEach(e => {
            e['notes'] = graduation(e)
            console.log(e)
            e['score'] = e.notes[0]+e.notes[1]+e.notes[2]+e.notes[3]/10
            winner == '' ? winner = e : winner.score < e.score ? winner = e : winner = winner
        })
        setMatch([
            <div>
                {winner.nom}
            </div>
        ])
        navigate('/biere',{state:winner})
    },[data])


    return (
        <div >
            It's a match !
            {match}
        </div>
    )
}

export default MatchResult