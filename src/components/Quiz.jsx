import React from "react";
import Question from "./Question";
import "./Quiz.css";
import Choice from "./Choice";

export default function Quiz(props) {
  const questions = props.data.map((data) => {
    const choices = data.choices.map((choice) => {
      return <Choice choice={choice} name={data.name} />;
    });
    return (
      <Question key={data.id} question={data.question} choices={choices} />
    );
  });
  return (
    <main className="quiz">
      {questions}
      <button>Show Answers</button>
    </main>
  );
}
