import React, { useRef, useEffect, useState } from "react";
import "./PortfolioMarquee.css";

const PortfolioMarquee = ({ projects }) => {
  const marqueeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const marqueeProjects = [...projects, ...projects];

  // Pause on hover
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleMouseEnter = () => {
      marquee.style.animationPlayState = "paused";
    };
    const handleMouseLeave = () => {
      marquee.style.animationPlayState = "running";
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - marqueeRef.current.offsetLeft);
    setScrollLeft(marqueeRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - marqueeRef.current.offsetLeft;
    const walk = x - startX;
    marqueeRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="marquee-container">
      <div
        className="marquee-track"
        ref={marqueeRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {marqueeProjects.map((project, idx) => (
          <div className="marquee-card" key={idx}>
            <div className="card-left">
              <h5 className="fw-bold mb-1">{project.title}</h5>
              <p className="text-muted mb-2">{project.description}</p>

              <div className="d-flex justify-content-between small mb-1">
                <span className="text-muted">Timeline</span>
                <span>{project.timeline}</span>
              </div>
              <div className="border-bottom border-secondary mb-1"></div>

              <div className="d-flex justify-content-between small mb-1">
                <span className="text-muted">Role</span>
                <span>{project.role}</span>
              </div>
              <div className="border-bottom border-secondary mb-1"></div>

              <div className="d-flex justify-content-between small mb-2">
                <span className="text-muted">Device</span>
                <span style={{ whiteSpace: "pre-line" }}>{project.device}</span>
              </div>

              <button
                className="btn btn-dark btn-sm mt-2"
                onClick={() => window.open(project.liveLink || "#", "_blank")}
              >
                Click to Open
              </button>
            </div>

            <div className="card-right">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioMarquee;