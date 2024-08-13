import { adicionarSaldo } from "../../repository/adminRepository.js";

export default async function adicionarSaldoService(saldo, id) {

  if (isNaN(saldo))
    throw new Error("Informe o saldo!")

  let linhasAfetadas = adicionarSaldo(saldo, id);
  
  if (linhasAfetadas == 0)
    throw new Error("Nenhum Saldo alterado!");

}