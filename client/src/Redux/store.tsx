// import { createStore } from '@reduxjs/toolkit';
import rootReducers from './reducers/index';

/** Deprecated */
import { legacy_createStore as createStore } from 'redux';


const store = createStore(rootReducers);

export default store;