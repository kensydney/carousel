import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Slide from './slide';

 
class App extends React.Component {  
  render() {
    const {carousels} = this.props; 
    debugger;   
    return (
      <div className="App">
        {/* <ul>
          { carousels.map((carousel => {            
            <Slide />;
          }))}                
        </ul> */}
        {
          carousels.map((carouse => {
            //<Slide />;
            <div>test</div>;
          }))          
        }        
      </div>
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
}

export default connect(mapStateToProps)(App);