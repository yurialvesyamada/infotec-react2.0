import { Container } from 'react-bootstrap';
import Adress from '../../components/table/Enderecos';
import Pagamento from '../../components/pagamento/Pagamento';


export default function Contato() {
    return (
        
 <Container className="text-center text-info">
     <div className="h1 my-4">
         <p>Conheça Já</p>
     </div>
         <Adress />
         <Pagamento />
     
  </Container> 
)
}