/**@Imports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/** @Middlewares */
import store from './Redux/store';

/** @Others files import */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
