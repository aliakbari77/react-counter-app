import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters - constructor");
  }

  componentDidMount() {
    console.log("Counters - componentDidMount");
  }
  render() {
    console.log("Counters - render");
    const { onDelete, onIncrement, counters, onReset } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
