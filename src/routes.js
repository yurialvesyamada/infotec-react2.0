import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Produtos from './pages/Produtos/index';
import Loja from './pages/Loja/index';
import Contato from './pages/Contato/index';
import Pedidos from './pages/Pedidos/index';
import Tecnologias from './pages/Tecnologias/index';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/faleconosco" component={Contato} />
            <Route exact path="/loja" component={Loja} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/curiosidades" component={Tecnologias} />
        </Switch>
    );
}
export default Routes;
