import React from "react";
import style from "./StateButton.css";

const StateButton = (props) => {
  return <button style={{ ...style.button }}>{props.children}</button>;
};

export default StateButton