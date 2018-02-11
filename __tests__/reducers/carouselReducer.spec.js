import expect from 'expect';
import carouselReducer from '../../src/reducers/carouselReducer';
import {LOAD_CAROUSELS_SUCCESS} from '../../src/actions/actionTypes';
import {loadCarousels} from '../../src/actions/carouselActions';

describe('SearchReducer', () => {
  it('returns the initial state', () => {
    expect(carouselReducer(undefined, {})).toEqual(
      []);
  });

  it('handles the set search term action', () => {
    const testData = [
      {"imageurl": "images/bike.png", "title":"A Guy On A Bike", "synopsis":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "link": "www.good.com"},
      {"imageurl": "images/library.png", "title":"Books And Stuff", "synopsis":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", "link": "www.bad.com"},     
    ];
    const testAction = {
      type: LOAD_CAROUSELS_SUCCESS,
      carousels:testData
    };
    expect(carouselReducer(undefined, testAction).length).toEqual(
      2
    );
  });
});
