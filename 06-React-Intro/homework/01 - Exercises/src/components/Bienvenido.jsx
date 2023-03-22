import Renderer from "markdown-it/lib/renderer";
import React from "react";
import Botones from "./Botones";

const studentName = "Brian Lucero";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
    return (  
      <div>
          <h1>Hola Mundo!!</h1>
          <h3>{studentName}</h3>
          <ul>
            {
              techSkills && techSkills.map((Element,index) => {
                return <li key={index}>{Element}</li>;
              })
            }
          </ul>
          <Botones alerts ={alerts}/>
      </div>
    )
  }
  
  // Esto lo exportamos para los tests
  export { studentName, techSkills, alerts };
  
  
  // <li>{techSkills.map((element)=><li key={index}>{element}</li>)}</li>