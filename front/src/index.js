import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
     
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);