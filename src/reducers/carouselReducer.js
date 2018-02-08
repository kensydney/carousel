import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function siteReducer(state = initialState.carousels, action)
{
  switch(action.type){
  case types.LOAD_CAROUSELS_SUCCESS:
    return action.carousels;
    
  default:
    return state;
  }
}