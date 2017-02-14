import { addDeck, showAddDeck, hideAddDeck } from './actions';

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

const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      let newDeck = { name: action.data, id: +new Date };

      return state.concat([newDeck]);
    default:
      return state || [];
  }
}

const addingDeck = (state, action) => {
  switch(action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default: return state || false;

  }
}

const store = Redux.createStore(Redux.combineReducers({
  cards,
  decks,
  addingDeck
}));

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

const Navbar = React.createClass({
  render() {
    return(<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <a className="navbar-brand" href="javascript:void(0);">React Scaffolding</a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault"></div>
   </nav>);
  }
})

const Sidebar = React.createClass({
  render() {
    let props = this.props;

    return(<nav className="col-sm-4 col-lg-3 hidden-xs-down bg-faded sidebar">
      <h5>All Decks</h5>
      <ul className="nav nav-pills flex-column">
        {props.decks.map((deck, i) =>
          <li key={i} className="nav-item">{ deck.name }</li>
        )}
      </ul>
      { props.addingDeck && <input autoFocus ref="add" onKeyPress={this.createDeck}/> }
      <button onClick={e => this.props.showAddDeck()} className="btn btn-primary btn-sm" type="submit">New Deck</button>
    </nav>);
  },
  createDeck(e){
    if (e.which !== 13) return;
    var name = ReactDOM.findDOMNode(this.refs.add).value;

    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

function run() {
  let state = store.getState();

  ReactDOM.render(<App>
    <Sidebar
      decks={state.decks}
      addingDeck={state.addingDeck}
      addDeck={name => store.dispatch(addDeck(name))}
      showAddDeck={() => store.dispatch(showAddDeck())}
      hideAddDeck={() => store.dispatch(hideAddDeck())}
    />
    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
      <br />
      <br />
      <br />
      Hello
    </main>
  </App>, document.getElementById('root'));
}

run();

store.subscribe(run);
