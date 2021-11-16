import { Route, Switch } from "react-router";

// components
import Login from "./components/Login";

// context
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Switch>
        <Route to="/" component={Login}/>
      </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
