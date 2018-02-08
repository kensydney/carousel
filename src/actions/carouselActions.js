import * as types from './actionTypes';
import carouselApi from '../api/carouselApi';

export function loadCarouselsSuccess(carousels) {
  return {type: types.LOAD_CAROUSELS_SUCCESS, carousels};
}


export function loadCarousels() {
  return function(dispatch){
    return carouselApi.getAllCarousels().then(carousels => {
      dispatch(loadCarouselsSuccess(carousels));
    }).catch(error => {
      throw(error);
    });
  };
}
