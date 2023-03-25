import React, { useState, useEffect } from "react";

export default function Home({ mensaje }) {
  let [state, setState] = useState({
    count: 0,
    name: "brian",
    input: "default",
  });

  console.log("que es input", state.input);
  // const [nombreHermano, setnombreHermano] = useState("dan lucero"); // es una forma de crear una variable

  function ChangeInput() {
    setState({ ...state, input: "Como estas?" });
  }
  // const add = () => {};
  return (
    console.log("input is real", state),
    (
      <div>
        <h1>Home</h1>
        <h3>{input}</h3>
        <p></p>
        <button onClick={ChangeInput}>Change Input</button>
      </div>
    )
  );
}
