import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

class CarouselPrev extends Component {
  render() {
    return (
      <a
        href="#"
        className="carousel-arrow carousel-prev"
        onClick={this.props.onClick}
      >
        <span>
          <Glyphicon glyph="chevron-left" />
        </span>
      </a>
    );
  }
}

CarouselPrev.propTypes = {
  onClick: PropTypes.func
};

export default CarouselPrev;
