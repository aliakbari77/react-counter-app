import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";

import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 2,
      },
      {
        id: 3,
        value: 3,
      },
      {
        id: 4,
        value: 4,
      },
    ],
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => {
      return c.id !== counter.id;
    });

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          counterLength={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <Counters
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
