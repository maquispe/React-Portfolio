import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Manuel Quispe</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className={window.location.pathname === "/home" ? " nav-item nav-link active" : "nav-item nav-link"} to="/home">About Me</Link>
      <Link className={window.location.pathname === "/portfolio" ? " nav-item nav-link active" : "nav-item nav-link"} to="/portfolio">Portfolio</Link>
      <Link className={window.location.pathname === "/contact" ? "nav-item nav-link active" : "nav-item nav-link"} to="/contact">Contact</Link>
    </div>
  </div>
</nav>
  );
}

export default Navbar;