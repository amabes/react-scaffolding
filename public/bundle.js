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
    props.children
  );
};

var Links = React.createClass({
  displayName: "Links",
  render: function render() {
    return React.createElement(
      "ul",
      { className: "list-group list-group-flush" },
      this.props.links.map(function (link, i) {
        return React.createElement(Link, { link: link, key: i });
      })
    );
  }
});

var Link = React.createClass({
  displayName: "Link",
  isExternal: function isExternal(href) {
    if (href.indexOf('http') !== -1) {
      return true;
    }

    return false;
  },
  handleClick: function handleClick() {
    if (this.props.link.href && this.isExternal(this.props.link.href)) {
      console.log('external');
    } else {
      console.log('internal');
    }
  },
  render: function render() {
    return React.createElement(
      "li",
      { className: "list-group-item", onClick: this.handleClick },
      this.props.link.text
    );
  }
});

var Sidebar = React.createClass({
  displayName: "Sidebar",
  render: function render() {
    var props = this.props;

    return React.createElement(
      "div",
      { className: "sidebar" },
      React.createElement(
        "h2",
        null,
        "Decks"
      ),
      props.decks.map(function (deck, i) {
        return React.createElement(
          "div",
          { className: "card col-xs-6", key: i },
          React.createElement("img", { className: "card-img-top", src: deck.url }),
          React.createElement(
            "div",
            { className: "card-block" },
            React.createElement(
              "h4",
              { className: "card-title" },
              deck.title
            ),
            React.createElement(
              "p",
              { className: "card-text" },
              deck.body
            )
          ),
          deck.links && React.createElement(Links, { links: deck.links })
        );
      }),
      props.addingDeck && React.createElement("input", { ref: "add" })
    );
  }
});

var Cards = React.createClass({
  displayName: "Cards",
  render: function render() {
    var props = this.props;

    return React.createElement(
      "div",
      { className: "row" },
      props.decks.map(function (deck, i) {
        return React.createElement(
          "div",
          { className: "col-4", key: i },
          React.createElement(
            "div",
            { className: "card" },
            deck.url && React.createElement("img", { className: "card-img-top", src: deck.url }),
            React.createElement(
              "div",
              { className: "card-block" },
              React.createElement(
                "p",
                { className: "card-text" },
                deck.body
              )
            ),
            deck.links && React.createElement(Links, { links: deck.links })
          )
        );
      })
    );
  }
});

var decks = [{
  id: +new Date(),
  url: 'http://lorempixel.com/230/151/',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  links: [{
    text: 'Cras justo odio',
    href: '#internal-unique-id'
  }, {
    text: 'Dapibus ac facilisis in',
    href: 'http://google.com'
  }, {
    text: 'Vestibulum at eros',
    href: '#internal-unique-id'
  }]
}, {
  id: +new Date(),
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  links: [{
    text: 'Cras justo odio 2',
    href: 'http://google.com'
  }, {
    text: 'Dapibus ac facilisis in 2',
    href: '#internal-unique-id'
  }, {
    text: 'Vestibulum at eros 2',
    href: 'http://google.com'
  }]
}, {
  id: +new Date(),
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}];

ReactDOM.render(React.createElement(
  App,
  { "class": "container" },
  React.createElement(Cards, { decks: decks })
), document.getElementById('root'));

},{}]},{},[1]);
