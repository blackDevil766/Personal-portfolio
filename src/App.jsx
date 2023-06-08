// import './App.css';
import React, { useEffect } from "react"
import NavBar from "./component/navBar/Nav";
import Footer from "./component/sections/10Footer/Footer";
import WelcomeToMyWorld from "./component/sections/1Welcome/WelcomeToMyWorld";
import AboutMe from "./component/sections/2About/AboutMe";
import Portfolio from "./component/sections/3Portfolio/Portfolio";
import Resume from "./component/sections/4Resume/Resume";
import Contact from "./component/sections/9Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import motion from "framer-motion";
function App() {


  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <NavBar />
      <div className="appcontainer">

        {/* <div className="navAndWelcomeSection"> */}
          <WelcomeToMyWorld />
        {/* </div> */}
        {/* <div className="onlyAbout" > */}
        <AboutMe />
        {/* </div> */}
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>


      {/* <div className="container2">
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>

      </div> */}
    </div>
  );
}

export default App;
