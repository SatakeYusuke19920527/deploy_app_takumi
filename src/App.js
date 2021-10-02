import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageA from './components/PageA';
import PageB from './components/PageB.js';

function App() {

  return (

    <BrowserRouter>

      <Switch>

        <Route exact path="/" component={PageA} />
        <Route exact path="/pageb/:word" component={PageB} />
        

      </Switch>

    </BrowserRouter>

  );

}

export default App;