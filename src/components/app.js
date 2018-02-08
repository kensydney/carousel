import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        test 12       
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  debugger;
  return {
    carousels: state.carousels
  };
}

export default connect(mapStateToProps)(App);