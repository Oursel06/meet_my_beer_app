import Section from './Section.jsx'
import Login from './Login.jsx'
import MatchForm from './MatchForm.jsx'

function Screen(Props) {
    let props = {
        title:"Connexion"
    }
    let page = <Login props={props}/>
    let size = "small"
    page = <MatchForm/>
    let componentClasses = "section "+size

    return (
        <div className="mainScreen">
            <Section page={page} classes={componentClasses} />
        </div>
    )
}

export default Screen