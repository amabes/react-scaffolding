const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD':
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });

      return state.concat([newCard]);
    default:
      return state || [];
  }
};

const store = Redux.createStore(Redux.combineReducers({
  cards
}));

const App = (props) => {
  return (
  <div className="app container">
    {props.children}
  </div>);
};

const Links = React.createClass({
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.links.map((link, i) =>
          <Link link={link} key={i} />
        )}
      </ul>
    )
  }
});

const Link = React.createClass({
  isExternal(href) {
    if (href.indexOf('http') !== -1) {
      return true
    }

    return false;
  },

  handleClick() {
    if (this.props.link.href && this.isExternal(this.props.link.href)) {
      console.log('external');
    } else {
      console.log('internal')
    }
  },

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
        {this.props.link.text}
      </li>
    )
  }
});

const Sidebar = React.createClass({
  render() {
    let props = this.props;

    return(<div className="deck">
      {props.decks.map((deck, i) =>
        { deck.title }
      )}
    </div>);
  }
});

const decks = [{
  id: +new Date,
  title: 'Deck 1'
},
{
  id: +new Date,
  title: 'Deck 2'
}];

ReactDOM.render(<App>
  <Sidebar decks={decks} />
</App>, document.getElementById('root'));
