import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productReducer, { productsFetch } from './features/productsSlice';
import { productsApi } from './features/productsApi';

// passing reducer object
const store = configureStore({
  reducer:{
    products: productReducer,
  [productsApi.reducerPath]: productsApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
})

store.dispatch(productsFetch());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)