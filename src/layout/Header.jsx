import './Header.css'

const Header = () => {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg portfolio-navbar px-3 py-2">

        {/* Name / Logo */}
        <a className="navbar-brand fw-bold" href="#">
          RANJITH<span className='text-success'>.</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links + Button */}
        <div className="collapse navbar-collapse justify-content-center" id="portfolioNavbar">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
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