(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var cards = function cards(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      var newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date()
      });

      return state.concat([newCard]);
    default:
      return state || [];
  }
};

var store = Redux.createStore(Redux.combineReducers({
  cards: cards
}));

var App = function App(props) {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "row" },
        props.children
      )
    )
  );
};

var Navbar = React.createClass({
  displayName: "Navbar",
  render: function render() {
    return React.createElement(
      "nav",
      { className: "navbar navbar-toggleable-md navbar-inverse bg-inverse" },
      React.createElement(
        "a",
        { className: "navbar-brand", href: "javascript:void(0);" },
        "React Scaffolding"
      ),
      React.createElement(
        "div",
        { className: "collapse navbar-collapse", id: "navbarsExampleDefault" },
        React.createElement(
          "button",
          { className: "btn btn-primary btn-sm", type: "submit" },
          "New Deck"
        )
      )
    );
  }
});

var Sidebar = React.createClass({
  displayName: "Sidebar",
  render: function render() {
    return React.createElement(
      "nav",
      { className: "col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar" },
      React.createElement(
        "ul",
        { className: "nav nav-pills flex-column" },
        this.props.decks.map(function (deck, i) {
          return React.createElement(
            "li",
            { key: i, className: "nav-item" },
            deck.title
          );
        })
      )
    );
  }
});

var decks = [{
  id: +new Date(),
  title: 'Deck 1'
}, {
  id: +new Date(),
  title: 'Deck 2'
}];

ReactDOM.render(React.createElement(
  App,
  null,
  React.createElement(Sidebar, { decks: decks }),
  React.createElement(
    "main",
    { className: "col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3" },
    React.createElement("br", null),
    React.createElement("br", null),
    React.createElement("br", null),
    "Hello"
  )
), document.getElementById('root'));

},{}]},{},[1]);
