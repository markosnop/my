import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

//1- configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './Sobre';
import Contato from './Contato';
import Contents from './Contents';

const nome = "Wisner";
const ano = 2023;

const listaTarefas = [
  { id: 1, nome_tarefa: "Estudar HTML" },
  { id: 2, nome_tarefa: "Estudar CSS" },
  { id: 3, nome_tarefa: "Estudar Javascript" },
  { id: 4, nome_tarefa: "Estudar React" },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Contents lista={listaTarefas} nome={nome} ano={ano}/>
      },
      {
        path: '/sobre',
        element: <Sobre />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

