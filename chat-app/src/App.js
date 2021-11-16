import { Route, Switch } from "react-router";

// components
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
