import { configureStore } from '@reduxjs/toolkit';
import { ContactApi } from './redux/ContactApi';


// Configure the store with the API slice reducer
const store = configureStore({
  reducer: {
    [ContactApi.reducerPath]: ContactApi.reducer, // Add the reducer to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ContactApi.middleware), // Add the middleware for caching, polling, etc.
});

export default store;
