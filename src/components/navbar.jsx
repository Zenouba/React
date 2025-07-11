import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = () => {
  const [lang, setLang] = useState("English");

  useEffect(() => {
    const handleTouchStart = () => {
      window.history.pushState(null, null, document.URL);
    };

    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);
 
  const handleSelect = (eventKey) => {
    setLang(eventKey);
    console.log("Langue sélectionnée :", eventKey);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="logo"
            width="100px"
            className="me-2"
          />
        </Link>

        {/* Sélecteur de langue */}
        <img src={`${process.env.PUBLIC_URL}/assets/earth.png`} alt="earth" className="ms-4" />
        <DropdownButton
          id="dropdown-language"
          title={lang}
          variant="light"
          className="mt-2 mb-2"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="français">Français</Dropdown.Item>
          <Dropdown.Item eventKey="arabe">Arabe</Dropdown.Item>
          <Dropdown.Item eventKey="English">English</Dropdown.Item>
        </DropdownButton>

        {/* Bouton menu mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-lg-center gap-lg-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faqs">FAQs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>
          </ul>

          {/* Boutons Connexion  */}
          <div className="d-flex justify-content-end d-lg-none text-center mt-3">
            <Link to="/signin" className="btn btn-outline-dark bg-white me-2">Log in</Link>
            <Link to="/signup" className="btn btn-danger rounded-5 mt-2">Get Started</Link>
          </div>

          <div className="d-none d-lg-flex ms-auto">
            <Link to="/signin" className="btn btn-outline-dark me-2 bg-white">Log in</Link>
            <Link to="/signup" className="btn btn-danger rounded-5">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
