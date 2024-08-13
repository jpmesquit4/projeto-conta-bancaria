import adicionarSaldoService from "../service/admin/adicionarSaldoService.js";
import logarAdminService from "../service/admin/logarAdminService.js";
import { Router } from "express";

const server = Router();

server.post('/login/admin', async (req, resp) => {
  try {

    const { email, senha } = req.body;

    const x = await logarAdminService(email, senha);

    resp.send(x);

  }
  catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

server.put('/saldo/:id', async (req, resp) => {
  try {

    let { saldo } = req.body;
    let id = req.params.id;

    await adicionarSaldoService(saldo, id);

    resp.status(204).send();

  }
  catch (err) { 
    logError(err);
    resp.status(400).send(criarErro(err));
  }
})

export default server;