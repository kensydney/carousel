import {combineReducers} from 'redux';
import carousels from './carouselReducer';

const rootReducer = combineReducers({
  carousels
});

export default rootReducer;