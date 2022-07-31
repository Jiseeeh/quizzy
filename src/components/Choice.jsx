import React from "react";

export default function Choice(props) {
  return (
    <>
      <input
        type="radio"
        id={props.choice}
        name={props.name}
        value={props.choice}
      />
      <label htmlFor={props.choice}>{props.choice}</label>
    </>
  );
}
