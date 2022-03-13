import React, { Component } from "react";

const NavBar = ({ totalCounter }) => {
  console.log("NavBar - render");
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar #{totalCounter} has value bigger than zero.
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
