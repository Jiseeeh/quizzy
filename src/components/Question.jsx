import React from "react";

export default function Question(props) {
  return (
    <div className="question-container">
      <h1>{props.question}</h1>
      <div className="choices">{props.choices}</div>
    </div>
  );
}
