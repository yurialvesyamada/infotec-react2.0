import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

