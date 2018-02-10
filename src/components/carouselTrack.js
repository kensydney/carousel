import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CarouselTrack extends Component {
  render() {
    return (
      <li>
        <div className="carousel-track-container">
          <a
            className={
              this.props.index == this.props.activeIndex
                ? "carousel-track carousel-track-active"
                : "carousel-track"
            }
            onClick={this.props.onClick}
          />
        </div>
      </li>
    );
  }
}

CarouselTrack.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default CarouselTrack;
