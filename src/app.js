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

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
       <button className="btn btn-primary btn-sm" type="submit">New Deck</button>
      </div>
   </nav>);
  }
})

const Sidebar = React.createClass({
  render() {
    return(<nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <ul className="nav nav-pills flex-column">
        {this.props.decks.map((deck, i) =>
          <li key={i} className="nav-item">{ deck.title }</li>
        )}
      </ul>
    </nav>);
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
  <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
    <br />
    <br />
    <br />
    Hello
  </main>
</App>, document.getElementById('root'));
