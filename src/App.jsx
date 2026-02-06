import React, { useState } from 'react';
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

  return (
  <>
{!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)} />}
  <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"}`}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home />
    <About />
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
   </>
  );
}

export default App;