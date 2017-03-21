import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';

const mapStateToProps = ({decks, addingDeck}) => ({
  decks,
  addingDeck
});

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
