import React from "react";

import Question from "./Question";
import "./Quiz.css";
import Choice from "./Choice";

export default function Quiz(props) {
  // stores the correct answers into an object.
  let correct = {};
  for (let i in props.data) {
    correct[i] = props.data[i].correctAnswer;
  }

  // map each questions and choices
  const questions = props.data.map((data) => {
    const choices = data.choices.map((choice, index) => {
      return <Choice key={index} choice={choice} name={data.name} />;
    });
    return (
      <Question key={data.id} question={data.question} choices={choices} />
    );
  });

  const [doneChecking, setIsDoneChecking] = React.useState(false);
  const [score, setScore] = React.useState(0);

  const checkAnswers = () => {
    let answers = {};

    let i = 0;
    const inputs = document.querySelectorAll("input");

    // get user's answers.
    inputs.forEach((input) => {
      if (input.checked) {
        answers[i] = input.value;
        i++;
      }
    });

    // compare user's answers to the correct answers.
    for (let i in Object.keys(correct)) {
      if (answers[i] === correct[i]) setScore((prevScore) => prevScore + 1);
    }

    // style label whether they are correct or not.
    let j = 0;
    inputs.forEach((input) => {
      if (correct[j] === input.value) {
        const label = input.nextElementSibling;

        if (!input.checked) label.classList.add("wrong");
        else label.classList.add("correct");
        j++;
      }

      // disable inputs so that they can't be clicked again.
      input.disabled = true;
      setIsDoneChecking(true);
    });
  };

  return (
    <main className="quiz">
      {questions}
      {console.log(doneChecking, score)}
      {doneChecking && <span>{`You scored ${score}/5!`}</span>}
      {doneChecking ? (
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          {" "}
          Play again!
        </button>
      ) : (
        <button onClick={checkAnswers}>Show Answers</button>
      )}
    </main>
  );
}
