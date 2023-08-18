import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import {createBrowserRouter, RouterProvider}   from 'react-router-dom'
import Sobre from './Sobre';
import Contato from './Contato';

const router= createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children:[
    {
      path:'home'
      
    },
    { 
      path:'sobre',
      element: <Sobre />
    },
    {
      path: 'Contato',
      element: <Contato />
    }
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={(router)}/>
  </React.StrictMode>
);

