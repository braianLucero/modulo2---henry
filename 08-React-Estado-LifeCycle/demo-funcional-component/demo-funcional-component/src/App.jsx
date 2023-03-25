import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  const mensaje = "jimy esta todo ok";
  return (
    <div className="App">
      <h1>
        <Home mensaje={mensaje} />
      </h1>
    </div>
  );
}

export default App;
