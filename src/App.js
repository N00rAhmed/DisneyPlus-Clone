import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* debugging Switch error which is not being found in react-router-dom */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
