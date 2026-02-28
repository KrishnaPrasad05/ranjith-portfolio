import React from "react";
import '../App.css'
const ProjectsCard = ({ image, title, description, timeline, role, device, onClick }) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-4">
      <div className="card h-100 shadow-sm project-card p-4" style={{border:'1px solid #e4e0e0ff'}}>

        {/* Image */}
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column">

          {/* Title + Button Row */}
         <div className="row mb-3 align-items-start">

  {/* Title + Description */}
  <div className="col-12 col-lg-8 ">
    <p className="mb-1 project-title">{title}</p>
    <p className="text-muted small mb-0">{description}</p>
  </div>

  {/* Button */}
  <div className="col-12 col-lg-4 d-flex justify-content-md-end mt-2 mt-md-0">
    <button
      className="btn btn-dark w-100 w-md-auto project-btn mt-3"
      onClick={onClick}
    >
      Click to Open
    </button>
  </div>

</div>

          {/* Timeline | Role | Device */}
          <div className="mt-auto">

  {/* Timeline */}
  <div className="d-flex justify-content-between small ">
    <span className="text-muted">Timeline</span>
    <span className="fw-normal mb-2">{timeline}</span>
  </div>
  <div className="border-bottom border-secondary mb-2"></div>

  {/* Role */}
  <div className="d-flex justify-content-between small ">
    <span className="text-muted">Role</span>
    <span className="fw-normal mb-2">{role}</span>
  </div>
  <div className="border-bottom border-secondary mb-2"></div>

  {/* Device */}
  <div className="d-flex justify-content-between small ">
    <span className="text-muted">Device</span>
    <span className="fw-normal mb-2" style={{ whiteSpace: "pre-line" }}>{device}</span>
  </div>
 

</div>

        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;