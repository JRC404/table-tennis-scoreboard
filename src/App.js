import React, { useState } from "react";
import Scorecard from "./Components/Scorecard";
import "./App.css";

function Display(props) {
  return <div>{props.message}</div>;
}

function HomeButton(props) {
  // this will be the home button
  return (
    <button
      className="homeButton"
      onClick={() => props.onClickFunction(props.increment)}
    >
      Home point
    </button>
  );
}

function AwayButton(props) {
  // this will be the away button
  return (
    <button
      className="awayButton"
      onClick={() => props.onClickFunction(props.increment)}
    >
      Away point
    </button>
  );
}

function SubmitButton(props) {
  return <button className="submitButton">Submit button</button>;
}

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const incrementHome = incrementValue =>
    setHomeScore(homeScore + incrementValue);
  const [awayScore, setAwayScore] = useState(0);
  const incrementAway = incrementValue =>
    setAwayScore(awayScore + incrementValue);
  return (
    <>
      <h1>Table Tennis Scoreboard</h1>
      <div></div>
      <div>
        <h2>Home Name</h2>
        <HomeButton onClickFunction={incrementHome} increment={1} />
        <Display message={homeScore} />
      </div>
      <div>
        <h2>Away Name</h2>
        <AwayButton onClickFunction={incrementAway} increment={1} />
        <Display message={awayScore} />
      </div>
      <div>
        <SubmitButton />
      </div>
      <div>
        <Scorecard />
      </div>
    </>
  );
}

export default App;
