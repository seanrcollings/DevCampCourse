import { combineReducers } from 'redux';
import courses from './coursesReducer';

const rootReducer = combineReducers({
  courses
});

export default rootReducer;