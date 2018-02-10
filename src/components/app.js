import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Carousel from './carousel';


 
class App extends React.Component {  

  render() {
    const {carousels} = this.props;
    return(
      <Carousel carousels={carousels} />
    );         
  }
}

function mapStateToProps(state, ownProps){  
  return {
    carousels: state.carousels
  };
}

App.propTypes = {
  carousels: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(App);