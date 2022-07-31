import "./App.css";
import React from "react";
import { RiseLoader } from "react-spinners";

import Intro from "./Intro";
import Quiz from "./Quiz";
import shuffle from "../myShuffle";
function App() {
  const [loading, setLoading] = React.useState(false);
  const [isDoneFetching, setIsDoneFetching] = React.useState(false);
  const [quiz, setQuiz] = React.useState([]);

  const loadingSettings = {
    color: "#4D5B9E",
    loading: loading,
    size: 40,
  };

  const loadingCSS = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const startQuizzy = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple"
      );
      const data = await res.json();

      setIsDoneFetching((prevValue) => !prevValue);

      const quizzy = data.results.map((e, index) => {
        const correctAnswer = e.correct_answer;
        const choices = [correctAnswer, ...e.incorrect_answers];

        return {
          id: index,
          question: e.question,
          correctAnswer,
          choices: shuffle(choices),
          name: correctAnswer,
        };
      });

      setQuiz(quizzy);
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <RiseLoader {...loadingSettings} cssOverride={loadingCSS} />
      ) : isDoneFetching ? (
        <Quiz data={quiz} />
      ) : (
        <Intro handleClick={startQuizzy} />
      )}
    </>
  );
}

export default App;
