import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'

function Home({isConnected}) {
    const [shown,setShown] = useState(<Login props={{title:"connexion"}} />)
    const [btnLabel,setBtnLabel] = useState("s'inscrire")
    const location = useLocation()
    const handleShown = () => {
        btnLabel == "s'inscrire" ? setShown(<Register props={{title:'inscription'}}/>) : setShown(<Login props={{title:"connexion"}}/>)
        btnLabel == "s'inscrire" ? setBtnLabel("se connecter") : setBtnLabel("s'inscrire") 
    }


    return (
        <div className="section">
            {shown}
            <div className="classicBtn util" onClick={handleShown}>{btnLabel}</div>
        </div>
    )
}

export default Home