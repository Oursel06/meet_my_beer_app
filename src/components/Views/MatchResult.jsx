import {useState, useEffect} from 'react'

function MatchResult({beerData,userChoices}) {

    const [data, setData] = useState(userChoices)
    const [dreamBeer,setDreamBeer] = useState({})

    useEffect(()=>{
        data.forEach(e =>{
            setDreamBeer({
                type:{
                    value:e.type.value[0],
                    weight:e.type.weight[0]
                },
                gout:{
                    value:e.gout.value[0],
                    weight:e.gout.weight[0]
                },
                amertume:{
                    value:e.amertume.value[0],
                    weight:e.amertume.weight[0]
                },
                degres:{
                    value:e.degres.value[0],
                    weight:e.degres.weight[0]
                }
            })
        })
    },[data])

    useEffect(()=> {
        console.log(dreamBeer)
        console.log(beerData)
    },[dreamBeer])



    return (
        <div >
            It's a match !
            
        </div>
    )
}

export default MatchResult