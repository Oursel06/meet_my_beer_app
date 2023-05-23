import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import InputModel from "components/Models/InputModel"

function Login({props}) {
    const {title} = props
    const navigate = useNavigate()
    const emailProps = {
        type:'email',
        placeholder:'E-mail',
        classes:'inputModel'
    }
    const passwdProps = {
        type:'password',
        placeholder:'Mot de passe',
        classes:'inputModel'
    }
    const [emailValue, setEmailValue] = useState('');
    const [passwdValue, setPasswdValue] = useState('');
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value.toLowerCase());
    };
    const handlePasswdChange = (event) => {
        setPasswdValue(event.target.value);
    };

    const request = async () => {
        const data = {
            email:emailValue,
            password:passwdValue
        }
        const url = 'https://meetmybeerapi.osc-fr1.scalingo.io/api/user/login'
        const response = await fetch(url, {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body:JSON.stringify(data), 
        });

        if(response.status === 200){
            navigate('/form')
        }

        return response.json();
    }


    const loginUser = () => {
        emailValue && passwdValue !== '' ? request() : alert('veuillez entrer un mot de passe et un email valide')
    }


    return (
        <div className="loginDetails">
            <h2>{title}</h2>
            <InputModel
                props={emailProps}
                value={emailValue}
                onChange={handleEmailChange}
            />
            <InputModel
                props={passwdProps}
                value={passwdValue}
                onChange={handlePasswdChange}
            />
            <div className="classicBtn valid" onClick={loginUser}>Confirmer</div>
        </div>
    )
}

export default Login