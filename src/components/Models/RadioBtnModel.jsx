

const RadioBtnModel = ({props, onClick}) => {
    const {radioElemValue} = props

    const testing = () => {
        onClick(radioElemValue)
    }
    

    return <div onClick={testing} className={"radioElemContainer radioElemContainer"+radioElemValue}>
        <div className="radioElemContent">
            <div className={"radioElemColor "+radioElemValue}>cadre coloré</div>
            <div className="radioElemValue">{radioElemValue}</div>
        </div>
    </div>
}

export default RadioBtnModel