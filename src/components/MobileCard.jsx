import './MobileCard.css';

const MobileCard = ({
  title,
  description,
  timeline,
  role,
  device,
  image,
  onClick,
}) => {
  return (
    <div className="col-12 mb-4">
      <div className="case-card row g-0 align-items-stretch">

        {/* Left Column */}
        <div className="col-12 col-lg-6 p-4 d-flex flex-column">
          <h4 className="fw-bold mb-2">{title}</h4>

          <p className="text-muted mb-3">{description}</p>

          <button
            className="btn btn-dark btn-sm align-self-start mb-3"
            onClick={onClick}
          >
            View Case Study
          </button>

          {/* Timeline | Role | Device */}
          <div className="mt-auto">

            <div className="d-flex justify-content-between small mb-1">
              <span className="text-muted">Timeline</span>
              <span>{timeline}</span>
            </div>
            <div className="border-bottom border-secondary mb-2"></div>

            <div className="d-flex justify-content-between small mb-1">
              <span className="text-muted">Role</span>
              <span>{role}</span>
            </div>
            <div className="border-bottom border-secondary mb-2"></div>

            <div className="d-flex justify-content-between small">
              <span className="text-muted">Device</span>
              <span style={{ whiteSpace: "pre-line" }}>{device}</span>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className="col-12 col-lg-6 case-image-wrapper">
          <img
            src={image}
            alt={title}
            className="case-image mt-2 mb-2"
          />
        </div>

      </div>
    </div>
  );
};

export default MobileCard;