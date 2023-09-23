import Navbar from '../components/navbar'
import  { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import Home from '../components/home'
import Contact from '../components/contact'
import About from '../components/about'
import refreshPage from '../index';
function Main() {
    
    return (
        <div>
            <HashRouter>
                <Navbar></Navbar>
                <div className="content">
                
                    <Switch>
                        <Route exact path="/"onClick={refreshPage} component={Home}/>
                        <Route path="/contact" onClick={refreshPage} component={Contact}/>
                        <Route path="/about" onClick={refreshPage} component={About}/>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    )
}

export default Main;
