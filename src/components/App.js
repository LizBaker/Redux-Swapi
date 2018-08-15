import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
import {fetching} from '../actions';

class App extends Component {
  componentDidMount() {
   this.props.fetching()
  }
  render() {
    return (
      <div className="App">
        {this.props.loading ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chars: state.chars,
    loading: state.loading,
    error: state.error
  }
};


// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {fetching})(App);
