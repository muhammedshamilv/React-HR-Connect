import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './user/index';
const store = configureStore({
  reducer: {
    name: nameReducer,
  },
});
export default store;
