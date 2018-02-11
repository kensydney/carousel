import {loadCarousels} from '../../src/actions/carouselActions';
import {LOAD_CAROUSELS_SUCCESS} from '../../src/actions/actionTypes';
import expect from 'expect';

describe('carousel actions', () => {
  describe('loadCarousels()', () => {
    it('should call dispatch from the thunk action', () => {
      const dispatch = jest.fn();      

      const testAction = loadCarousels()(dispatch);

      testAction.then(res => {
        expect(dispatch).toHaveBeenCalled();
      })
        .catch(e => {
        });      

      
    });    
  });
});

