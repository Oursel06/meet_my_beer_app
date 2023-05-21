import React, { useState, useEffect, useRef } from "react";
import steps from "../../steps.js";
import FormStepModel from "components/Models/FormStepModel";



const MatchForm = () => {
  
  const [answerValue, setAnswerValue] = useState('')
  const [weightValue, setWeightValue] = useState('');
  const [btnLabel, setButtonLabel] = useState('Continuer')

  const handleAnswer = (answer) => {
    console.log(answer);
    setAnswerValue(answer)
  };
  const handleWeightChange = (value) => {
    console.log(value/10);
    setWeightValue(value);
  };

  const mySteps = steps;
  const stepsArrRef = useRef([]);

  useEffect(() => {
    console.log('in stepArr construction')
    stepsArrRef.current = mySteps.map((step) => (
      <FormStepModel props={step} value={handleAnswer} weight={handleWeightChange} />
    ));
  }, [mySteps]);



  const [steper,setSteper] = useState(0)
  const [currentStep,setCurrentStep] = useState(stepsArrRef.current[0])
  const [dreamBeer, setDreamBeer] = useState([]) 
  const [dreamBeerValue, setDreamBeerValue] = useState([])
  const [dreamBeerWeight,setDreamBeerWeight] = useState([])

  const upSteper = () => {
    if(answerValue !== '' && weightValue !== ''){
      setSteper((steper) => steper + 1)
      console.log('step up')
    }
    else{
      alert('Merci de selectionner vos réponses avant de continuer')
    }
  }



  useEffect(()=> steper === 4 ? console.log("It's a match !"+dreamBeer) : setCurrentStep(stepsArrRef.current[steper]),[dreamBeer])

  useEffect(()=>{

    if( dreamBeerValue.length > 0 && dreamBeerWeight.length > 0 ) {

      switch(steper) {
        case 1 :
        case 2 :
          setDreamBeer([]);
          break;
        case 3 :
          setButtonLabel('Matcher !')
          setDreamBeer([]);
          break;
        case 4 :
          setDreamBeer(prev=>([...prev, dreamBeerValue,dreamBeerWeight]));
          break;
      }
    }
  },[dreamBeerValue, dreamBeerWeight])


  useEffect(()=>{
    console.log('Steper effect triggered ' + steper)

    if(steper === 0){
      setCurrentStep(stepsArrRef.current[steper])
    }
    else{
      const objValue = [answerValue];
      const objWeight = [weightValue]
      if (answerValue !== '' && weightValue !== '') {
        setDreamBeerValue(prev => ([...prev, objValue])) 
        setDreamBeerWeight(prev=>([...prev,objWeight])) 
      }
      else console.log('no values'); 
    }

    return () => {
      console.log('wait while i clean up')
      setAnswerValue('')
      setWeightValue('')
    }
  },[steper])

  return (
    <div className="fullStepContainer">
      <div className="stepCounter">étape(s): {steper+1}/4</div>
      {currentStep}
      <div className="stepBtn" onClick={upSteper}>
        {btnLabel}
      </div>
    </div>
  );
};

export default MatchForm;