import AboutMe from './components/About/AboutMe';
import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <div className="page">
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
