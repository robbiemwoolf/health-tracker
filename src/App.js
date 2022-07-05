import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NoMatch from './NoMatch';
import Pull from "./Pull";
import Push from "./Push";
import Lower from "./Lower";
import Upper from "./Upper";
import Legs from "./Legs";
import Skeleton from './Skeleton';

function App() {
  return (
    <Router>
      <Header />
      <main className='container'>
        <div className='row'>
          <div className='col-2'>
            <Nav />
          </div>
          <div className='col'>     
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path='/push'>
                <Push />
              </Route>
              <Route path='/pull'>
                <Pull />
              </Route>
              <Route path='/lower'>
                <Lower />
              </Route>
              <Route path='/upper'>
                <Upper />
              </Route>
              <Route path='/legs'>
                <Legs />
              </Route>
              <Route path='/skeleton'>
                <Skeleton />
              </Route>
              <Route >
                <NoMatch />
              </Route>
            </Switch>
          </div> 
        </div>
      </main>
    </Router>
  );
}

export default App;
