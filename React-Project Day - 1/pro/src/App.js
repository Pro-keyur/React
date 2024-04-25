import logo from './logo.svg';
import './App.css';
import Head from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Head/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
