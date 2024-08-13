import './index.scss';

export default function LoginAdmin() {
  return (
    <div className="pagina-LoginAdmin">
        <nav className="faixa"></nav>
      <div className="cabecalho">
        <h1>banco<span>.</span></h1>
      </div>

      <div className="container-menu">
        <div className="menu">
          <div className="menu-left">
            <h2>Seja bem-vindo Admin</h2>
            <h3>Faça o Login para acessar <br/> sua conta de administrador</h3>
          </div>

          <div className="menu-right">
            <h3>Login</h3>

            <input type="text" placeholder='Email:'/>
            <input type="text" placeholder='Senha:'/>

            <button>ENTRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
