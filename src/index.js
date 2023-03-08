import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <App />

    < RouterProvider router={ router } />

  </React.StrictMode>

  
);
reportWebVitals();
