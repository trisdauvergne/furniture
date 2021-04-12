import logo from './logo.svg';
import './App.css';
import Logo from './components/logo/Logo.js';
import About from './pages/about/About.js';
import Catalog from './pages/catalog/Catalog.js';
import Commission from './pages/commission/Commission.js';
import Contact from './pages/contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Logo />
      <About />
      <Catalog />
      <Commission/>
      <Contact />
    </div>
  );
}

export default App;
