import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers as needed
});

const store = configureStore({
  reducer: rootReducer,
  // Optional: Add middleware, dev tools configuration, etc.
});

export default store;
