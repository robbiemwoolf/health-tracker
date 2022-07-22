import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './Home'
import Header from './utils/header/Header'
import Nav from './utils/nav/Nav'
import NoMatch from './utils/NoMatch'
import Pull from './days/pull/Pull'
import Push from './days/push/Push'
import Lower from './days/lower/Lower'
import Upper from './days/upper/Upper'
import Legs from './days/legs/Legs'
import Skeleton from './utils/Skeleton'

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
