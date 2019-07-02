import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeConfig from './redux/storeConfig';
import { BrowserRouter } from 'react-router-dom';

const store = storeConfig ();

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById ( 'root' )
);
