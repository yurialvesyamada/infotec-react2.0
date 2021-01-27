import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

