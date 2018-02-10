import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CarouselPrev from './carouselPrev';
import CarouselNext from './carouselNext';
import CarouselContainer from './carouselContainer';
import CarouselTrack from './carouselTrack';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToItem = this.goToItem.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
    this.goToNext = this.goToNext.bind(this);

    this.state = {
      activeIndex: 0,
      isMouseInside: false
    };

    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.startAutoCarousel();
  }

  componentWillUnMount(){
    this.stopAutoCarousel();
  }

  switchItem(){
    this.moveToNext();
  }

  goToItem(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrev(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let {carousels} = this.props;
    let carouselsLength = carousels.length;

    if (index < 1) {
      index = carouselsLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNext(e) {
    e.preventDefault();
    this.moveToNext();
  }

  moveToNext(){
    let index = this.state.activeIndex;
    let {carousels} = this.props;
    let carouselsLength = carousels.length - 1;

    if (index === carouselsLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  mouseEnter(){
    this.setState({isMouseInside: true});   
    this.stopAutoCarousel(); 
  }

  mouseLeave(){
    this.setState({isMouseInside: false});
    this.startAutoCarousel();
  }

  stopAutoCarousel(){
    clearInterval(this.runCarousel);
  }

  startAutoCarousel(){
    this.runCarousel = setInterval(
      () => {
        this.switchItem();                
      }, 1000);
  }

  render() {
    return (
      <div className="carousels" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        {this.state.isMouseInside ? 
          <CarouselPrev onClick={e => this.goToPrev(e)} />
          :null}

        <ul>
          {this.props.carousels.map((carousel, index) =>
            <CarouselContainer
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              carousel={carousel}
            />
          )}
        </ul>

        {this.state.isMouseInside ? 
          <CarouselNext onClick={e => this.goToNext(e)} />
          :null}

        <ul className="carousel-tracks">
          {this.props.carousels.map((carousel, index) =>
            <CarouselTrack
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              isActive={this.state.activeIndex==index} 
              onClick={e => this.goToItem(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

Carousel.propTypes = {
  carousels: PropTypes.array.isRequired
};

