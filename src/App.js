import './App.css';

import Home from './Home'
import Contact from './Components/Contact'
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <div className="App">
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
      </div>
    </BrowserRouter  >
  );
}

export default App;
