import Section from './Section.jsx'

function Screen(Props) {
    let test = 'testLol'
    let props = {
        title:'myTitle'
    }

    return (
        <div className="mainScreen">
            <Section Props={props} />
        </div>
    )
}

export default Screen