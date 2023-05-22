import {Link} from 'react-router-dom'

function NavBtn({route,btnName}) {
    let test = 'testLol'

    return (
        <Link to={route} className="navButtonContainer">
            <button className="navButton">
                <div className="filtre"></div>
                <p>{btnName}</p>
            </button>
            <div className="btnContainer"></div>
        </Link>
    )
}

export default NavBtn