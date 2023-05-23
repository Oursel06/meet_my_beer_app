import NavBtn from '../Models/NavBtn.jsx'


function NavBar(Props) {
    let test = 'testLol'

    return (
        <div className="controllers">
            <NavBtn route="/form" btnName="Matcher"/>
            <NavBtn route='/brasseries' btnName="Explorer"/>
        </div>
    )
}

export default NavBar