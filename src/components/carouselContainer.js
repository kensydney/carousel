import React, {Component} from 'react';
import PropTypes from 'prop-types';
const images = require.context('../../images');

class CarouselContainer extends Component {
  render() {
    const carousel = this.props.carousel;
    let img_src = images(`./${carousel.imageurl.split('/')[1]}`);
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel-container carousel-active"
            : "carousel-container"
        }
      >
        <a href={'http://' + carousel.link} target="_blank">
          <img src={img_src} />
        </a>
        <span className="title">{carousel.title}</span>
        <span className="synosis">{carousel.synopsis}</span>
      </li>
    );
  }
}

CarouselContainer.propTypes = {
  index: PropTypes.number.isRequired,
  carousel: PropTypes.object.isRequired,
  activeIndex: PropTypes.number.isRequired
};

export default CarouselContainer;
