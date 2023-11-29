import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './seacrh'

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;