import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/projects/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import Experience from "./components/experience/experience";
import Tech from "./components/techs/Tech";
import About from "./components/about/about";
import Certificates from "./components/certificates/certificates";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <ToastContainer />
      <Intro />
      <About />
      <Portfolio />
      <Experience />
      <Tech />
      <Certificates />
      <Contact />
    </div>
  </div>
}

export default App;

