import {useState} from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'

function Home({}) {
    const [shown,setShown] = useState(<Login props={{title:'connexion'}} />)
    const [btnLabel,setBtnLabel] = useState("inscription")
    
    const handleShown = () => {
        const test = btnLabel == 'inscription'
        console.log(test)
        btnLabel == 'inscription' ? setShown(<Register props={{title:'inscription'}}/>) : setShown(<Login props={{title:'connexion'}}/>)
        btnLabel == 'inscription' ? setBtnLabel('connexion') : setBtnLabel('inscription') 
    }


    return (
        <div >
            {shown}
            <div onClick={handleShown}>{btnLabel}</div>
        </div>
    )
}

export default Home