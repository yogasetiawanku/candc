import "./App.css";
import "./style/LandingPage.css";
import "./style/intro.css";
import "./style/Heading.css";
import "./style/Header.css";
import "./style/Biografi.css";
import "./style/Outro.css";
import "./style/Contact.css";
import LandingPage from "./components/LandingPage";
import Intro from "./components/Intro";
import Heading from "./components/Heading";
import Header from "./components/Header";
import Biografi from "./components/Biografi";
import Outro from "./components/Outro";
import Contact from "./components/Contact";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <LandingPage />
      <Intro />
      <Heading />
      <Header />
      <Biografi />
      <Outro />

      <Contact />
    </div>
  );
}

export default App;
