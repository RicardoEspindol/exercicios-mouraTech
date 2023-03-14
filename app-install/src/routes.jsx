import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemplo1 from './pages/Exemplo1'

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/exemplo1', element: <Exemplo1 /> },
];
export default routes;