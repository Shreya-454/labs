import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './components/Hero';
import Second from './components/Second';
import About from './components/About';
import Level from './components/Level';
import Domain from './components/Domain';
import Licensable from './components/Licensable';
import Team from './components/Team';
import What from './components/What';
function App() {
  return (
    <div className="bg-black">
      <Hero/>
      <Second/>
    <About/>
    <Level/>
    <Domain/>
    <Licensable/>
    <Team/>
    <What/>
    </div>
  );
}

export default App;
