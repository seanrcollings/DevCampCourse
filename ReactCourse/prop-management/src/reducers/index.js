import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import auth from './authReducer';
import newsletters from './newsletterReducer'
import requests from './requestReducer'


const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  requests
});

export default rootReducer;