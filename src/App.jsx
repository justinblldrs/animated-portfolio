import "./AppStyle.scss"
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero"
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";
const App = () => { 
  return <div>
    <Cursor/>
    <section id="Homepage">
      <NavBar/>
      <Hero/>
      </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services/>
      </section>
    <section id="Portfolio">
    <Parallax type="portfolio"/>
    </section>
    <Portfolio/>
  
    <section id="Contact">
      <Contact/>
    </section>
    


  </div>;
};

export default App;
