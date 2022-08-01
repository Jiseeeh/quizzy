import React from "react";
import { decode } from "html-entities";

import "./Question.css";

export default function Question(props) {
  return (
    <div className="question-container">
      <h1>{decode(props.question)}</h1>
      <div className="choices">{props.choices}</div>
    </div>
  );
}
