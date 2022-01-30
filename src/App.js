
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageA from './components/PageA';
import PageB from './components/PageB.js';
import PageC from './components/PageC.js';
import Uranai from './components/Uranaigame/Uranai.js';
import Mondai1 from './components/Uranaigame/Monndai1.js';
import Mondai2 from './components/Uranaigame/Monndai2.js';
import Mondai3 from './components/Uranaigame/Monndai3.js';
import Mondai4 from './components/Uranaigame/Monndai4.js';
import Kekka from './components/Uranaigame/Kekka.js';
import Page404 from './components/Page404.js';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageA} />
        <Route exact path="/pageb/:word" component={PageB} />
        <Route exact path="/pagec/:word" component={PageC} />
        <Route exact path='/uranai/:word' component={Uranai} />
        <Route exact path='/mondai1/:word' component={Mondai1} />
        <Route exact path='/mondai2/:word' component={Mondai2} />
        <Route exact path='/mondai3/:word' component={Mondai3} />
        <Route exact path='/mondai4/:word' component={Mondai4}/>
        <Route exact path='/kekka/:word' component={Kekka}/> 
         <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );

}

export default App;