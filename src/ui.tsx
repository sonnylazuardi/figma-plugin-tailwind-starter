import * as React from "react";
import * as ReactDOM from "react-dom";
import "./ui.css";
import Radio from "./radio";
import Toggle from "./toggle";
import DialogButton from "./dialog";

function Example() {
  return (
    <>
      <Radio />
      <Toggle />
      <DialogButton />
    </>
  );
}

ReactDOM.render(<Example />, document.getElementById("react-page"));
