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
import { useEffect, useState } from 'react';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState(``);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
      setUsername(JSON.parse(localStorage.getItem("user")).validUser.username);
    }
  }, [])

  return (
    <Router>
      <div className="App bg-secondary">
        <Header loggedIn={loggedIn} username={username} setLoggedIn={setLoggedIn} />
        <Switch>
          <Route exact path="/">
            <PeepList loggedIn={loggedIn} peeps={samplePeeps} />
          </Route>

          <Route path="/register">
            <RegisterForm />
          </Route>

          <Route path="/login">
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUsername={setUsername} />
          </Route>

          <Route path="/addPeep" >
            <AddPeep loggedIn={loggedIn} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
