import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = (e) => {
    console.log("Increment Clicked.", e);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log("props:", this.props);

    return (
      <React.Fragment>
        <div className="container">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={(e) => {
              this.handleIncrement(e);
            }}
            className="btn btn-secondary m-2"
          >
            Increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
