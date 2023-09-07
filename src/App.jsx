import AboutMe from './components/About/AboutMe';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="page">
      <Menu />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
