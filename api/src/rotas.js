import express from 'express';

import usuarioController from './controller/usuarioController.js';
import adminController from './controller/adminController.js';

export default function adicionarRotas(servidor) {
  servidor.use(usuarioController);
  servidor.use(adminController);
}