
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageA from './components/PageA';
import PageB from './components/PageB.js';
import Page404 from './components/Page404.js';

function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={PageA} />
        <Route exact path="/pageb/:word" component={PageB} />
        <Route component={Page404} />
        

      </Switch>

    </BrowserRouter>

  );

}

export default App;