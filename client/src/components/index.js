// Importing
import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';


// Exporting
export { default as BorderedBox } from "./BorderedBox"
export { default as Header } from "./Header"



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);