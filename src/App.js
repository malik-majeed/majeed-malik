import './App.css';

import Home from './Home'
import Contact from './Components/Contact'
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>

          <Route exact path="/kontakt">
            <Contact />
          </Route>

          <Route exact path="/tablet">
            <h1>Lol</h1>
          </Route>

          <Route path="*">
                <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
