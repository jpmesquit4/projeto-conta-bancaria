import con from './connection.js'


export async function loginCliente(email, senha) {
  
  const comando = 
  `
  SELECT
  id_usuario        AS id,
  ds_email          AS email,
  nm_usuario        AS nome,
  ds_senha          AS senha
  FROM              tb_usuario  
  WHERE             DS_Email = ?  
  AND               DS_Senha = ?   
  `;
  
  const [linhas] = await con.query(comando, [email, senha])
  return linhas[0];
  
}

export async function inserirCliente(usuario) {
  
  const [existeEmail] = await con.query('SELECT COUNT(*) as count FROM tb_usuario WHERE ds_email = ?', [usuario.email]);
  const [existeCpf] = await con.query('SELECT COUNT(*) as count FROM tb_usuario WHERE ds_cpf = ?', [usuario.cpf]);

  if (existeEmail[0].count > 0) {
      throw new Error('O email já está cadastrado.');
  }

  if (existeCpf[0].count > 0) {
      throw new Error('O cpf já está cadastrado.');
  }
  
  let saldo = 0;
  let despesas = 0;
  let rendas = 0;

  // Inserir novo usuário
  const comando = `INSERT INTO tb_usuario (nm_usuario, ds_email, ds_senha, ds_cpf, vl_saldo, vl_despesas, vl_rendas) 
                                   VALUES (?, ?, ?, ?, ?, ?, ?);`;
  const [resposta] = await con.query(comando, [usuario.usuario, usuario.email, usuario.senha, usuario.cpf, saldo, despesas, rendas]);

  usuario.id = resposta.insertId;

  return usuario;
}

export async function listarSaldoPorId(id) {
  let comando = `
  select  vl_saldo as saldo
          id_usuario as id
  from    tb_usuario
  where   id_usuario = ?
  ` 

  let respostas2 = await con.query(comando, [id]);
  let saldoAtual = respostas2[0];
  return saldoAtual[0].vl_saldo;
}

export async function depositarSaldoUsuario(saldo, id) {

  let comando = `
    update  tb_usuario
    set     vl_saldo = ?
    where   id_usuario = ?
  `

  let respostas = await con.query(comando, [saldo, id]);
  let linhas = respostas[0];
  let linhasAfetadas = linhas.affectedRows;

  return linhasAfetadas;

}

