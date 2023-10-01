import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppNew } from 'components/AppNew';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'components/redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <Provider store = {store}>
    <AppNew />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
