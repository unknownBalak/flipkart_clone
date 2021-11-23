import "./App.scss";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Card from "./components/card/Card.jsx";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/cart" component={Card} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
