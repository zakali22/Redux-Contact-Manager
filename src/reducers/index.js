import { combineReducers } from 'redux';
import contactReducers from './contactReducer';

export default combineReducers({
	contact: contactReducers
});