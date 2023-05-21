import Section from './Section.jsx'
import Login from './Login.jsx'
import MatchForm from './MatchForm.jsx'
import { useState, useEffect } from 'react'

function Screen(Props) {

    let props = {
        title:"Connexion"
    }
    let page = <Login props={props}/>
    let size = "small"

    const [dreamBeer, setDreamBeer] = useState({})
    
    const handleDreamBeer = (userDreamBeer) => {
        setDreamBeer(userDreamBeer)
    }

    const getBeerinfo = ()=> {
        console.log(`
            type: ${dreamBeer.type.value[0]}(${dreamBeer.type.weight[0]}),
            gout: ${dreamBeer.gout.value[0]}(${dreamBeer.gout.weight[0]}),
            amertume: ${dreamBeer.amertume.value[0]}(${dreamBeer.amertume.weight[0]}),
            degres: ${dreamBeer.degres.value[0]}(${dreamBeer.degres.weight[0]})
        `)
        setCurrentSection(<div>
            type: {dreamBeer.type.value[0]}({dreamBeer.type.weight[0]}),
            gout: {dreamBeer.gout.value[0]}({dreamBeer.gout.weight[0]}),
            amertume: {dreamBeer.amertume.value[0]}({dreamBeer.amertume.weight[0]}),
            degres: {dreamBeer.degres.value[0]}({dreamBeer.degres.weight[0]})
        </div>)
    }

    useEffect(()=>{
        Object.keys(dreamBeer).length > 0 ? getBeerinfo() : console.log('no dream beer found')

    },[dreamBeer])

    page = <MatchForm userDreamBeer={handleDreamBeer}/>
    let componentClasses = "section "+size


    const [currentSection,setCurrentSection] = useState(<MatchForm userDreamBeer={handleDreamBeer}/>) 

    return (
        <div className="mainScreen">
            <Section page={currentSection} classes={componentClasses} />
        </div>
    )
}

export default Screen