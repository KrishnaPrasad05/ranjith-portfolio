import React from "react";
import "./PortfolioCarousel.css";
import { useNavigate } from "react-router-dom";

const PortfolioCarousel = ({ projects }) => {
  const navigate = useNavigate();

  function viewProjectDetails() {
    navigate("/project-details");
  }

  return (
    <div className="portfolio-wrapper container mb-5">
      <div className="portfolio-scroll-wrapper">

        {projects.map((project, idx) => (
          <div className="portfolio-card" key={idx}>
            <div className="row align-items-center g-1">

              {/* Left Section */}
              <div className="col-12 col-lg-4 mb-2 mb-lg-0">

                <h3 className="carousel-title">
                  {project.title}
                </h3>

                <p className="text-muted carousel-desc">
                  {project.description}
                </p>

                <div className="d-flex justify-content-between small info-row">
                  <span className="text-muted">Timeline</span>
                  <span>{project.timeline}</span>
                </div>

                <div className="border-bottom divider"></div>

                <div className="d-flex justify-content-between small info-row">
                  <span className="text-muted">Role</span>
                  <span>{project.role}</span>
                </div>

                <div className="border-bottom divider"></div>

                <div className="d-flex justify-content-between small info-row device-row">
  <span className="text-muted">Device</span>
  <span className="device-value">{project.device}</span>
</div>

                <button
                  className="btn btn-dark open-btn"
                  onClick={viewProjectDetails}
                >
                  Click to Open
                </button>

              </div>

              {/* Right Section */}
              <div className="col-12 col-lg-8 image-container">

                <img
                  src={project.image}
                  alt={project.title}
                  className="carousel-image img-fluid rounded"
                />

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default PortfolioCarousel;