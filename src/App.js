import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Logo from './components/logo/Logo';
import Filtered from './components/filtered/Filtered';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Commission from './pages/commission/Commission';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/catalog" exact component={Catalog} />
          <Route path="/catalog/filtered" component={Filtered} />
          <Route path="/commissions" component={Commission} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
