import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeepList from './Components/PeepList';
import samplePeeps from './samplePeeps.json';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm';


function App() {
  return (
    <div className="App bg-secondary">
      {/* <header className="App-header">
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
      </header> */}
      <Header loggedIn={false} username={"fred"} />
      <PeepList peeps={samplePeeps} />
      <Footer />
      <RegisterForm />
    </div>
  );
}

export default App;
