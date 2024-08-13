
import { inserirCliente } from "../../repository/usuarioRepository.js";
import { validarCadastro} from "../../validation/usuario/usuarioValidation.js";

export default async function cadastrarClienteService(novoUsuario) {
  validarCadastro(novoUsuario);

  let id = await inserirCliente(novoUsuario);
  
  return id;

}