import React from "react";
import "./Choice.css";
export default function Choice(props) {
  return (
    <>
      <input
        className="choice"
        type="radio"
        id={props.choice}
        name={props.name}
        value={props.choice}
      />
      <label htmlFor={props.choice}>{props.choice}</label>
    </>
  );
}
