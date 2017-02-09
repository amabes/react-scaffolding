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
  <div className="app">
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

    return(<div className="sidebar">
    <h2>Decks</h2>

    {props.decks.map((deck, i) =>
      <div className="card col-xs-6" key={ i }>
        <img className="card-img-top" src={ deck.url } />
        <div className="card-block">
          <h4 className="card-title">{ deck.title }</h4>
          <p className="card-text">{ deck.body }</p>
        </div>
        { deck.links && <Links links={deck.links}  /> }
      </div>
    )}

    { props.addingDeck && <input ref="add" /> }
    </div>);
  }
});

const Cards = React.createClass({
  render() {
    let props = this.props;

    return(<div className="row">
    {props.decks.map((deck, i) =>
      <div className="col-4" key={ i }>
        <div className="card">
          { deck.url && <img className="card-img-top" src={ deck.url } />}
          <div className="card-block">
            <p className="card-text">{ deck.body }</p>
          </div>
          { deck.links && <Links links={deck.links}  /> }
        </div>
      </div>
    )}
    </div>);
  }
});

const decks = [{
  id: +new Date,
  url: 'http://lorempixel.com/230/151/',
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  links: [{
      text: 'Cras justo odio',
      href: '#internal-unique-id'
    },
    {
      text: 'Dapibus ac facilisis in',
      href: 'http://google.com'
    },
    {
      text: 'Vestibulum at eros',
      href: '#internal-unique-id'
  }]
},
{
  id: +new Date,
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  links: [
    {
      text: 'Cras justo odio 2',
      href: 'http://google.com'
    },
    {
      text: 'Dapibus ac facilisis in 2',
      href: '#internal-unique-id'
    },
    {
      text: 'Vestibulum at eros 2',
      href: 'http://google.com'
    }
  ]
},
{
  id: +new Date,
  body: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}];

ReactDOM.render(<App class="container">
  <Cards decks={decks} />
</App>, document.getElementById('root'));
