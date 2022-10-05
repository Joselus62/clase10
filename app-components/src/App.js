import logo from './logo.svg';
import image from "./assets/img/netflix.png";
import './App.css';
//import HelloWorld from './component/banner/Banner';
import { Banner as Saludo } from './component/banner/Banner';
//import './component/banner/Banner';//Traigo todo lo que tengo en Banner.js
import Navbar from'./component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Saludo msg="Hola Mundo!"/>
      <Navbar src={logo} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//HelloWorld();

export default App;
