import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class CarouselNext extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-next"
        onClick={this.props.onClick}
      >
        <span>
          <Glyphicon glyph="chevron-right" />
        </span>
      </a>
    );
  }
}

CarouselNext.propTypes = {
  onClick: PropTypes.func
};

export default CarouselNext;