import React from "react";
import "./PortfolioCarousel.css";
import { useNavigate } from "react-router-dom";

const PortfolioCarousel = ({ projects }) => {
  const navigate=useNavigate();
  function viewProjectDetails(){
    navigate("/project-details")
  }
  return (
    <div
      className="container mb-5"
      style={{ border: "1px solid #e5e3e3ff", borderRadius: "10px", padding: "10px" }}
    >
      <div
        id="portfolioCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1500"   // ⬅️ Slide interval in milliseconds (1.5 seconds)
      >
        <div className="carousel-inner">
          {projects.map((project, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
              <div className="row align-items-center">
                
                {/* Left Column */}
                <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                  <h3 className="mb-2" style={{fontSize:'36px',color:'#656464ff'}}>{project.title}</h3>
                  <p className="text-muted mb-3">{project.description}</p>

                  <div className="d-flex justify-content-between small mb-2">
                    <span className="text-muted">Timeline</span>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="border-bottom border-secondary mb-2"></div>

                  <div className="d-flex justify-content-between small mb-2">
                    <span className="text-muted">Role</span>
                    <span>{project.role}</span>
                  </div>
                  <div className="border-bottom border-secondary mb-2"></div>

                  <div className="d-flex justify-content-between small mb-2">
                    <span className="text-muted">Device</span>
                    <span style={{ whiteSpace: "pre-line" }}>{project.device}</span>
                  </div>

                  <button
                    className="btn btn-dark mt-3"
                    onClick={viewProjectDetails}
                  >
                    Click to Open
                  </button>
                </div>

                {/* Right Column */}
                <div className="col-12 col-lg-8 text-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid mb-3 rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hide navigation buttons */}
        {/* <button className="carousel-control-prev" ...>...</button>
        <button className="carousel-control-next" ...>...</button> */}
      </div>
    </div>
  );
};

export default PortfolioCarousel;