import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar #{this.props.counterLength} has value bigger than zero.
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
