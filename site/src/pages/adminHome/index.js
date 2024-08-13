import './index.scss'
import LeftAdmin from '../../components/leftAdmin';

export default function AdminHome() {
  
  return (
    
    <div className="pagina-AdminHome">
      <LeftAdmin />
      
      <div className='right'>
        <div className="cabecalho">
            <h1>Seja bem-vindo, Admin!</h1>
        </div>
      </div>
    </div>

  );

}