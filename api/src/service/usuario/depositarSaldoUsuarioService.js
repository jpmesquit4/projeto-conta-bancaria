import { depositarSaldoUsuario, listarSaldoPorId } from "../../repository/usuarioRepository.js";

export default async function depositarSaldoUsuarioService(saldo, id) {

  let saldoAtual = await listarSaldoPorId(id);

  if (saldo === String(saldo))
    throw new Error("saldo invalido");

  if (saldo < 1)
    throw new Error("Deposito precisa ser maior que 0");
    

  let saldoNovo = saldoAtual + saldo;


  let linhasAfetadas = await depositarSaldoUsuario(saldoNovo, id);

  if (linhasAfetadas == 0)
    throw new Error("Saldo nao depositado");
    

}