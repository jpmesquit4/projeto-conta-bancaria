export function validarCadastro(novoUsuario) {
 
  let format = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

      if(!novoUsuario.usuario)
      throw new Error('Nome do usuario é obrigatório!')

      if(!novoUsuario.email)
        throw new Error('Email é obrigatório!')
      else if(novoUsuario.email.includes("@gmail.com") == false && novoUsuario.email.includes("@outlook.com") == false)
        throw new Error('Email inválido!')
    
      if(!novoUsuario.senha)
      throw new Error('Senha é obrigatória!')
      else if (format.test(novoUsuario.senha) == false)
        throw new Error('A senha é fraca!')
    
      if(!novoUsuario.cpf)
      throw new Error('CPF é obrigatório!')

      else if (novoUsuario.cpf.length != 14)
        throw new Error('CPF incompleto!')

}