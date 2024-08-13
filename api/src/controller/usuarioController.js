import { Router } from "express";

import cadastrarClienteService from '../service/usuario/cadastrarClienteService.js';
import logarUsuarioService from "../service/usuario/logarUsuarioService.js";
import depositarSaldoUsuarioService from "../service/usuario/depositarSaldoUsuarioService.js";

const server = Router();

server.post('/usuario/login', async (req, resp) => {
    
  try {
      const {email, senha} = req.body;
      let x = logarUsuarioService(email, senha);

      resp.send(x);

  } catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

server.post('/usuario/cadastro', async (req, resp) => {
  try {
      const novoUsuario = req.body;

      const resposta = await cadastrarClienteService(novoUsuario);

      resp.send(resposta);

  } catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

server.put('/usuario/saldo', async (req, resp) => {
  try {

    let { saldo } = req.body;

    await adicionarSaldoService(saldo, id);

    resp.status(204).send();

  }
  catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

server.put('/usuario/saldo/:id', async (req, resp) => {
  try {

    let { saldo } = req.body;
    let id = req.params.id;

    await depositarSaldoUsuarioService(saldo, id);

    resp.status(204).send();

  }
  catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})



export default server;