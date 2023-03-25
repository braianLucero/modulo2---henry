import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const message = "why";
  return (
    <div className="App">
      <Home message={message} />
    </div>
  );
}

export default App;
