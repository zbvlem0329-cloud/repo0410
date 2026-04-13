import { configureStore } from '@reduxjs/toolkit';
import popReducer from '../../features/pop/store/popSlice';

const store = configureStore({
  reducer: {
    pop: popReducer,
  },
});

export default store;
