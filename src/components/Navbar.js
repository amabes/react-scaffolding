import React from 'react';
import { createStore, combineReducers } from 'redux';

const Navbar = React.createClass({
  render() {
    return(<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <a className="navbar-brand" href="javascript:void(0);">React Scaffolding</a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault"></div>
   </nav>);
  }
});

export default Navbar;
