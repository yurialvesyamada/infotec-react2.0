import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './routes';

/* Footer esta sendo renderizado pelo Servidor, SSR */

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes />
          <Footer info={<> &copy; 2021 InfoTec </>} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

