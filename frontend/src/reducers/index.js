import { combineReducers } from 'redux';
import regions from './regions.reducer';
import properties from './properties.reducer';

export default combineReducers({ regions, properties});