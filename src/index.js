import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
