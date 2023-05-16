import React, { useState, useEffect } from "react";
import StepForm from "../../classes.js";
import steps from "../../steps.js";
import FormStepModel from "components/Models/FormStepModel";

const MatchForm = () => {
  const [finalResults, setFinalResults] = useState([]);
  const [result, setResult] = useState("");
  const [counter, setCounter] = useState(1);
  const [testValue, setTestValue] = useState("");
  const [weightValue, setWeightValue] = useState("");
  const [currentScreen, setCurrentScreen] = useState(null);

  const handleChange = (value) => {
    setTestValue(value);
  };

  const handleWeightChange = (value) => {
    setWeightValue(value);
  };

  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
    return counter;
  };

  const getMatch = () => {
    
    for (let i = 1; i < 5; i++) {
      console.log(i)
      console.log("CHOIX => "+ localStorage.getItem("Q" + i));
    }
  };
  // const dreamBeer = {}
  const stepForward = () => {
    if (testValue !== "" && weightValue !== "") {
      console.log("forwarding");
      console.log(counter);
      

      if (counter < 3 || counter === 4 ) {
        setResult((prevResult) => `${prevResult}Q${counter} : ${testValue} ${weightValue},`);
        console.log(finalResults);
        const obj = {
          Q: `Q${counter}`,
          value: testValue,
          weight: weightValue,
        };
        localStorage.setItem(`Q${counter}`,obj)
        setFinalResults((prevResults) => [...prevResults, obj]);
        console.log(finalResults);
        console.log(result);
        console.log(stepsArr[counter]);
        setCurrentScreen(stepsArr[counter]);
      }

      if (counter === 3) {
        setCurrentScreen(stepsArr[counter]);
        setResult((prevResult) => `${prevResult}Q${counter} : ${testValue} ${weightValue},`);
        const obj = {
          Q: `Q${counter}`,
          value: testValue,
          weight: weightValue,
        };
        localStorage.setItem(`Q${counter}`,obj)
        setFinalResults((prevResults) => [...prevResults, obj]);
        const stepBtn = document.getElementById("StepBtn");
        stepBtn.textContent = "Matcher !";
        stepBtn.addEventListener("click", getMatch);
      }
      increaseCounter();
      console.log(counter);
      setTestValue("");
      setWeightValue("");
    } else {
      let alert = document.getElementsByClassName("alert")[0];
      alert.textContent = "Merci de faire un choix avant de passer à l'étape suivante";
      setTimeout(() => {
        alert.textContent = "";
      }, 5000);
    }
  };

  useEffect(() => {
    if (counter === 4) {
      getMatch();
    }
  }, [counter]);

  const mySteps = steps;
  const stepsArr = mySteps.map((step) => (
    <FormStepModel props={step} value={handleChange} weight={handleWeightChange} />
  ));
  if(currentScreen === null ) setCurrentScreen(stepsArr[counter - 1])

  return (
    <div>
      <div className="alert"></div>
      {currentScreen}
      <span>{testValue}</span>
      <span>{weightValue}</span>
      <button id="StepBtn" onClick={stepForward}>
        tester
      </button>
      <span>{result}</span>
    </div>
  );
};

export default MatchForm;
