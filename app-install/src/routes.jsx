import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Exemplo1 from './pages/Exemplo1'
import Multistep from './pages/Multistep';



const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/exemplo1', element: <Exemplo1 /> },
  { path: '/multistep', element: <Multistep /> },


];
export default routes;