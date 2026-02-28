import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg portfolio-navbar px-3 py-2">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/#home">
          RANJITH<span className="text-success">.</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="portfolioNavbar"
        >
          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">

            <li className="nav-item">
              <Link className="nav-link" to="/#home">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#projects">Projects</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#contact">Contact</Link>
            </li>

          </ul>

          {/* Right Button */}
          <div className="d-flex justify-content-center justify-content-lg-end">
            <button className="btn btn-dark get-touch-btn">
              Get in Touch
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;