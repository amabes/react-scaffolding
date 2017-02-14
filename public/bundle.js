(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addDeck = exports.addDeck = function addDeck(name) {
  return { type: 'ADD_DECK', data: name };
};
var showAddDeck = exports.showAddDeck = function showAddDeck() {
  return { type: 'SHOW_ADD_DECK' };
};
var hideAddDeck = exports.hideAddDeck = function hideAddDeck() {
  return { type: 'HIDE_ADD_DECK' };
};

},{}],2:[function(require,module,exports){
'use strict';

var _actions = require('./actions');

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

var decks = function decks(state, action) {
  switch (action.type) {
    case 'ADD_DECK':
      var newDeck = { name: action.data, id: +new Date() };

      return state.concat([newDeck]);
    default:
      return state || [];
  }
};

var addingDeck = function addingDeck(state, action) {
  switch (action.type) {
    case 'SHOW_ADD_DECK':
      return true;
    case 'HIDE_ADD_DECK':
      return false;
    default:
      return state || false;

  }
};

var store = Redux.createStore(Redux.combineReducers({
  cards: cards,
  decks: decks,
  addingDeck: addingDeck
}));

var App = function App(props) {
  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(Navbar, null),
    React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'div',
        { className: 'row' },
        props.children
      )
    )
  );
};

var Navbar = React.createClass({
  displayName: 'Navbar',
  render: function render() {
    return React.createElement(
      'nav',
      { className: 'navbar navbar-toggleable-md navbar-inverse bg-inverse' },
      React.createElement(
        'a',
        { className: 'navbar-brand', href: 'javascript:void(0);' },
        'React Scaffolding'
      ),
      React.createElement('div', { className: 'collapse navbar-collapse', id: 'navbarsExampleDefault' })
    );
  }
});

var Sidebar = React.createClass({
  displayName: 'Sidebar',
  render: function render() {
    var _this = this;

    var props = this.props;

    return React.createElement(
      'nav',
      { className: 'col-sm-4 col-lg-3 hidden-xs-down bg-faded sidebar' },
      React.createElement(
        'h5',
        null,
        'All Decks'
      ),
      React.createElement(
        'ul',
        { className: 'nav nav-pills flex-column' },
        props.decks.map(function (deck, i) {
          return React.createElement(
            'li',
            { key: i, className: 'nav-item' },
            deck.name
          );
        })
      ),
      props.addingDeck && React.createElement('input', { autoFocus: true, ref: 'add', onKeyPress: this.createDeck }),
      React.createElement(
        'button',
        { onClick: function onClick(e) {
            return _this.props.showAddDeck();
          }, className: 'btn btn-primary btn-sm', type: 'submit' },
        'New Deck'
      )
    );
  },
  createDeck: function createDeck(e) {
    if (e.which !== 13) return;
    var name = ReactDOM.findDOMNode(this.refs.add).value;

    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

function run() {
  var state = store.getState();

  ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(Sidebar, {
      decks: state.decks,
      addingDeck: state.addingDeck,
      addDeck: function addDeck(name) {
        return store.dispatch((0, _actions.addDeck)(name));
      },
      showAddDeck: function showAddDeck() {
        return store.dispatch((0, _actions.showAddDeck)());
      },
      hideAddDeck: function hideAddDeck() {
        return store.dispatch((0, _actions.hideAddDeck)());
      }
    }),
    React.createElement(
      'main',
      { className: 'col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3' },
      React.createElement('br', null),
      React.createElement('br', null),
      React.createElement('br', null),
      'Hello'
    )
  ), document.getElementById('root'));
}

run();

store.subscribe(run);

},{"./actions":1}]},{},[2]);
