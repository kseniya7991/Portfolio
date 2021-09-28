import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Main></Main>
     <Footer></Footer>
     <Popup></Popup>
    </div>
  );
}

export default App;
