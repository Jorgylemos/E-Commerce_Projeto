import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/** @Middlewares */
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

/** @Others files import */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
