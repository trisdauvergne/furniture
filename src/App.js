import './App.css';
import Logo from './components/logo/Logo.js';
import About from './pages/about/About.js';
import Catalog from './pages/catalog/Catalog.js';
import Commission from './pages/commission/Commission.js';
import Contact from './pages/contact/Contact.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className="App">
        <Logo />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/commissions" component={Commission} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
