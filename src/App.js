import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Logo, ItemsProvider } from './components/logo/Logo';
import Filtered from './pages/filtered/Filtered';
import About from './pages/about/About';
import Catalog from './pages/catalog/Catalog';
import Commission from './pages/commission/Commission';
import Contact from './pages/contact/Contact';
// import { ItemsProvider } from './components/logo/Logo';


function App() {
  return (
    <Router>
      <ItemsProvider>
        <div className="App">
          <Logo />
          <Switch>
          <Route exact path="/"><Redirect to="/about" /></Route>
            <Route path="/about" exact component={About} />
            <Route path="/catalog" exact component={Catalog} />
            <Route path={`/catalog/:tag`} component={Filtered} />
            <Route path="/commissions" component={Commission} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </ItemsProvider>
    </Router>
  );
}

export default App;
