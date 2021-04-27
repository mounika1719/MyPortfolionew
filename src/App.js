
import React from 'react'
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import './App.css';
import ContactForm from "./pages/contact-form/contact";
import TimeLine from "./components/projects/projects";
import BgImage from './images/img/parallex/background.jpg';
import Skills from "./pages/skills/skills";
import Slide from "react-reveal/Slide";
import TitleMessage from './components/tittleMsg/tittle'
import About from './pages/about/about';
import MyCarousel from './components/carousel/myCarousel';
import MyNavbar from './components/my-navbar/mynavbar';
import FooterPanel from "./components/footer/footer";
 const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
     
  
     <MyNavbar />
     <MyCarousel />
     <TitleMessage />
     <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={300}>
              <About />
              </Fade>
            </Container>
            </div>
            </Parallax>
      
</div>
<Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container> 
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      
      <hr />
      <FooterPanel />
    </div>
    
  );
}
export default App;
