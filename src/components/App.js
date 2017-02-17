import React from 'react';
import Navbar from './Navbar';

const App = (props) => {
  return (
  <div className="app">
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        {props.children}
      </div>
    </div>
  </div>);
};

export default App;
