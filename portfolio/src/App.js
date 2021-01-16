import React from "react";

import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Biography from "./components/Biography";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Top from "./parts/Top";

function App() {
  let mybutton;

  window.onload = function () {
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    mybutton.onmouseover = function () {
      this.style.backgroundColor = "#555";
    };

    mybutton.onmouseleave = function () {
      this.style.backgroundColor = "rgba(255, 255, 255, 0.54)";
    };
  };
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <React.Fragment>
      <Top topFunction={topFunction} />
      <Header />
      <Biography />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
