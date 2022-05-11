import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import generateStore from './Reducers/Store';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const store=generateStore()
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