import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import productReducer from './features/productsSlice';

// passing reducer object
const store = configureStore({
  reducer:{
    products: productReducer,
  }
})


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)