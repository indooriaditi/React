import Header from "./components/Header"
import Results from "./components/Results"
import UserInput from "./components/UserInput"

import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validInput = userInput.duration >= 1;

  function handleChange(input, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [input]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!validInput && <p className="center">Please enter a duration greater than zero</p> }
      { validInput && <Results userInput={userInput} /> }
    </>
  )
}

export default App
