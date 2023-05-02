function Screen(Props) {
    let test = 'testLol'
    let title = Props.title

    return (
        <div className="section">
            <h2>{title}</h2>
            <div className="cube"></div>
        </div>
    )
}

export default Screen