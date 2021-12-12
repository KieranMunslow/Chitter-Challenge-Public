import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeepList from './Components/PeepList';
import samplePeeps from './samplePeeps.json';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RegisterForm from './Components/RegisterForm';
import Login from './Components/Login';
import AddPeep from './Components/AddPeep';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App bg-secondary">
        <Header loggedIn={false} username={"fred"} />
        <Switch>
          <Route exact path="/">
            <PeepList peeps={samplePeeps} />
          </Route>

          <Route path="/register">
            <RegisterForm />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/addPeep" >
            <AddPeep />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
