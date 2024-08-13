import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoginCliente from './pages/loginCliente';
import CadastroCliente from './pages/cadastroCliente';
import LoginAdmin from './pages/loginAdmin';
import AdminHome from './pages/adminHome';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginCliente />} />
        <Route path='/cadastro' element={<CadastroCliente />} />
        <Route path='/admin' element={<LoginAdmin />} />
        <Route path='/admin/home' element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


