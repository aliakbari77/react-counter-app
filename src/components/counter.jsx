import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  constructor(props) {
    super(props);
    console.log("Counter - constructor");
  }

  componentDidMount() {
    console.log("Counter - componentDicMount");
  }

  render() {
    console.log("Counter - render");
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-1">
              <span className={this.getBadgeClasses()}>
                {this.formatCount()}
              </span>
            </div>
            <div className="col">
              {" "}
              <button
                onClick={() => {
                  this.props.onIncrement(this.props.counter);
                }}
                className="btn btn-secondary m-2"
              >
                +
              </button>
              <button
                className="btn btn-secondary m-2"
                onClick={() => {
                  this.props.onDecrement(this.props.counter);
                }}
                disabled={this.getStatusButton()}
              >
                -
              </button>
              <button
                onClick={() => this.props.onDelete(this.props.counter)}
                className="btn btn-danger m-2 sm"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getStatusButton() {
    return this.props.counter.value > 0 ? false : true;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
