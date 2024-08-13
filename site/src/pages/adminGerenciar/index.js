import './index.scss'

export default function adminGerenciar() {
  
  return (
    <div className="pagina-AdminGerenciar">
      <LeftAdmin />
      
      <div className='right'>
        <div className="cabecalho">
            <h1>Seja bem-vindo, Admin!</h1>
        </div>

        <div className="info">
          <table></table>
        </div>

      </div>
    </div>

  );

}