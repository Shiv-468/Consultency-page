import './App.css';
import React,{useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import Analysis from './components/Analysis';
import Fault from './components/Fault';
import FindOut from './components/FindOut';
import Footer from './components/Footer';
import GetGoal from './components/GetGoal';
import HeroSection from './components/HeroSection';
import OurClients from './components/OurClients';
import Strategy from './components/Strategy';
import TargetGroup from './components/TargetGroup';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once:true,
      }
    );
  }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bodyStyle = {
    width: windowWidth > 1920 ? '1920px' : '100%',
    margin: windowWidth > 1920 ? '0 auto' : '0',
  };
  return (
    <div className=' overflow-hidden' style={bodyStyle}>
     <HeroSection/>
     <Fault/>
     <GetGoal/>
     <TargetGroup/>
     <Analysis/>
     <FindOut/>
     <About/>
     <OurClients/>
     <Strategy/>
     <Footer/>
    </div>
  );
}

export default App;
