import React from 'react';
import {shallow} from 'enzyme';
import CarouselTrack from '../../src/components/carouselTrack';
import renderer from 'react-test-renderer';


const carousel = {"imageurl": "images/bike.png", "title":"A Guy On A Bike", "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link": "www.good.com"};

describe('<CarouseTrack />', () => {
  it('should show hype link', () => {
    const wrapper = shallow(<CarouselTrack carousel = {carousel} index = {1} activeIndex = {1} />);    
    expect(wrapper.find('a').length).toBe(1);
  });
});

describe('CarouseTrack Snapshot',()=>{
  it('capturing Snapshot of CarouselTrack', () => {
    const renderedValue =  renderer.create(<CarouselTrack carousel={carousel} index = {1} activeIndex = {1} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});