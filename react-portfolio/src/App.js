import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {//<Route exact path="/contact" component={Contact} />
        //<Route exact path="/portfolio" component={Portfolio} />
        }
      </Wrapper>
      <Footer />
      
    </Router>
    );
}

export default App;
