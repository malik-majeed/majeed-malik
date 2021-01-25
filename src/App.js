import './App.css';

import Home from './Home'
import Contact from './Components/Contact'
import 'antd/dist/antd.css';
import { HashRouter, Switch, Route } from "react-router-dom"

function App() {
  return (

    <div>
      <HashRouter basename='/'>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/kontakt">
            <Contact />
          </Route>

          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </HashRouter >
    </div>
  );
}

export default App;
