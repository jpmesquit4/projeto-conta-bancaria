import { loginCliente } from "../../repository/usuarioRepository.js";

export default async function logarUsuarioService(email, senha) {
  const x = await loginCliente(email, senha)

  if (!x) 
      throw new Error('Credenciais Invalidas')
  
  return x;

}