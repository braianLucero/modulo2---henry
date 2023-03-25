import React, { Component } from "react";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: ["hola", "esto", "se", "llama", "react State"],
    };
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ ...this.state, count: 0 });
  }
  change = () => {
    // this.setState({ ...this.state, count: 101 });
    this.setState(
      (stateNew) => {
        return { ...stateNew, count: this.state.count + 1 };
      },
      () => {
        console.log("in time real", this.state);
      }
    );
    //     this.state.count = this.state.count + 1;
    //     console.log("setState es Async", this.state);
    // };
  };
  render() {
    const { message } = this.props;
    console.log("setState es Async", this.state);
    return (
      <div>
        <h2>Home</h2>
        <p>{message}</p>
        <h3> Count is: {this.state.count}</h3>
        <h3>{this.state.data[this.state.count]}</h3>
        <button onClick={this.change}>Incrementando Count</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
