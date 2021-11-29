import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './views/Header';
import reportWebVitals from './reportWebVitals';
import Filters from './views/Filters';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Filters />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
