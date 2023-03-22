import React from "react";
// import React, { Component } from 'react'

export default class Botones extends React.Component {
  render() {
    const  {m1,m2} = this.props.alerts;
    return (    
      <div>
            <button onClick={() => alert( this.props.alerts.m1)}>Modulo1</button>
            <button onClick={() => alert (this.props.alerts.m2)}>Modulo2</button>
      </div>
    )
  }
}
