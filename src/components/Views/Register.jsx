import { useState } from "react"
import InputModel from "components/Models/InputModel"

function Register({props}) {
    const {title} = props
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
        setPasswdValue(event.target.value.toLowerCase());
    };
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
            <input type="text" placeHolder='username'></input>
        </div>
    )
}

export default Register