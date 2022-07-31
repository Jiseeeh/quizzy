import "./App.css";
import React from "react";
import { RiseLoader } from "react-spinners";

import Intro from "./Intro";
import shuffle from "../myShuffle";
function App() {
  const [loading, setLoading] = React.useState(false);
  const [isDoneFetching, setIsDoneFetching] = React.useState(false);

  const loadingSettings = {
    color: "#4D5B9E",
    loading: loading,
    size: 40,
  };
  
  const startQuizzy = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=hard"
      );
      const data = await res.json();

      setIsDoneFetching((prevValue) => !prevValue);

      const quizzy = data.results.map((e) => {
        const choices = [e.correct_answer, ...e.incorrect_answers];
        return {
          question: e.question,
          correctAnswer: e.correct_answer,
          choices: shuffle(choices),
        };
      });

      console.log(quizzy);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <RiseLoader {...loadingSettings} />
      ) : isDoneFetching ? (
        // <Quiz data={quiz} />
        <h1>Done fetching</h1>
      ) : (
        <Intro handleClick={startQuizzy} />
      )}
    </>
  );
}

export default App;
