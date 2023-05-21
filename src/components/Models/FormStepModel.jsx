import InputModel from "./InputModel"
import  "../styles/FormStepModel.css"
import RangeSliderModel from "./RangeSliderModel";
import RadioBtnModel from "./RadioBtnModel";
import { useState, useEffect } from "react";


const FormStepModel = ({props, value, weight}) => {
    const {stepTitle, stepDesc, labels, method} = props

    const labelStep1 = labels
    const elemStep1 = []

    const updateSelected = (e) => {
        e.classList.remove("selected")
    }
    const setSelected = (e, answer) => {
        const classValidator = "radioElemContainer"+answer
        if (e.classList.contains(classValidator)) {
            console.log('yes')
            e.classList.add("selected")
            value(answer)
        }
    }
    const handleAnswer = (answer) => {
        console.log(answer)
        let arr = document.getElementsByClassName('radioElemContainer')
        arr = [].slice.call(arr)
        console.log(arr)
        arr.forEach(e => {
            e.classList.contains('selected') ? updateSelected(e) : setSelected(e, answer)
        })
        console.log(arr)
    }

    labelStep1.forEach(step => {
        const props = {
            radioElemValue:step
        }
        elemStep1.push(
            <RadioBtnModel props={props} onClick={handleAnswer} />
        )

    })




    let answerValues = {
        weight:'',
        test:'',
    }
    const weightProps = {
        type:'range',
        min:'1',
        max:'10',
        placeholder:'Importance du choix',
        classes:'inputModel'
    }

    const [weightValue, setWeightValue] = useState(5);
    const handleWeightChange = (event) => {
        setWeightValue(event.target.value);
        weight(event.target.value)
    };

    return <div className="stepContainer">
        <div className="stepHeader">
            <h2 className="stepTitle">{stepTitle}</h2>
            <p className="stepDesc">{stepDesc}</p>
        </div>
        <div className="stepContent">
            <div className="stepQ">
                <p className="stepQ-desc">Cliquez sur votre choix</p>
                <div className="stepAnswers">
                    {elemStep1}
                </div>
            </div>
            <div className="stepQ">
                <p className="stepQ-desc">Définissez l'importance que vous souhaitez accorder à ce choix.<br/><span className="unbolded">(1=sans importance, 10=indispensable)</span></p>
                <div className="rangeSlider">
                <div className="rangeSliderValue">{weightValue}</div>
                    <RangeSliderModel
                        props={weightProps}
                        value={weightValue}
                        onChange={handleWeightChange}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default FormStepModel