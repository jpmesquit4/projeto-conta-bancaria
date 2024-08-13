import con from './connection.js';

export async function loginAdmin(email, senha) {
  
  const comando = 
  `
  SELECT
  nm_adm            AS nome,
  ds_email          AS email,
  ds_senha          AS senha
  FROM              tb_admin 
  WHERE             ds_email = ?  
  AND               ds_senha = ?
  `;
  
  const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];
  
}

export async function adicionarSaldo(saldo, id) {
  
  let comando = `
    update  tb_usuario
    set     vl_saldo = ?
    where   id_usuario = ?;
  `

  let respostas = await con.query(comando, [saldo, id]);
  let linhas = respostas[0];
  let linhasAfetadas = linhas.affectedRows;

  return linhasAfetadas;

}

