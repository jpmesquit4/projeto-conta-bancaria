import './index.scss'

export default function CadastroCliente() {
  
  return (

    <div className="pagina-CadastroCliente">
        <nav className="faixa"></nav>
      <div className="cabecalho">
        <h1>banco<span>.</span></h1>
      </div>

      <div className="container-menu">
        <div className="menu">
          <div className="menu-left">
            <h2>Seja bem-vindo ao banco</h2>
            <h3>Faça Cadastro para fazer <br />o login </h3>
          </div>

          <div className="menu-right">
            <h3>Cadastre-se</h3>

            <input type="text" placeholder='Nome:'/>
            <input type="text" placeholder='Email:'/>
            <input type="text" placeholder='Senha:'/>
            <input type="text" placeholder='CPF:'/>

            <button>LOGIN</button>

            <p>Já tem conta? Faça <span>login.</span> </p>
          </div>
        </div>
      </div>
    </div>

  );
}