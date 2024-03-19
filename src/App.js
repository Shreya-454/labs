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
import Roadmap from './components/Roadmap';
import Started from './components/Started';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader/>
      </div>
    ) : (
    <div className="bg-black overflow-x-clip">
      <Hero/>
      <Second/>
    <About/>
    <Level/>
    <Domain/>
    <Licensable/>
    <Team/>
    <What/>
    <Roadmap/>
    <Started/>
    <Footer/>
    <BackToTop/>
    </div>
       )}
    </div>
  );
}

export default App;
