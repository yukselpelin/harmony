import { configureStore } from '@reduxjs/toolkit';
import BasketReducer from '../slice/basket';
export const store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
