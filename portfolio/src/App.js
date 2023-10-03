import "./App.css";
import Homepage from './Homepage';

import AboutLittleLemon from './AboutLittleLemon';
import Contact from './Contact';
import { withRouter,Switch, Route, NavLink ,HashRouter} from "react-router-dom";
import {createBrowserHistory} from 'history';

export const customHistory = createBrowserHistory();  //This maintains custom history

function App() {
  return (
    <HashRouter>
    <div> 
	  <nav>
      <NavLink to="/" className="nav-item">Homepage</NavLink>
      <NavLink to="/about" className="nav-item">About Little Lemon</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
	  </nav>
      <div>
      <Switch> 
      <Route exact path='/' element={withRouter(Homepage)} />
        <Route path="/about" element={withRouter(AboutLittleLemon )}/>
        <Route path="/contact" element={withRouter(Contact)}/>
      </Switch></div>
    </div></HashRouter>
  );
};

export default App;
