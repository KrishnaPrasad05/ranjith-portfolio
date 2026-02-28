import './Sections.css';
import projectImg from "../../assets/screen.png";

const Section01 = () => {
  return (
    <div className="project-details">

      <section className="project-details container py-5">

        <div className="row align-items-center g-4">

          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <h4 className="project-title">IoT Enterprise Platform – 55+ Page Website Design</h4>

            <p className="project-meta">
              <strong>Role:</strong> Solo UX/UI Designer <br />
              <strong>Duration:</strong> 6 Months <br />
              <strong>Scope:</strong> 35+ Solution Pages | 20+ Product Pages | Full Website Design
            </p>

            <p className="project-desc">
              I led the end-to-end UX/UI design for a large-scale IoT solutions website, translating complex industrial technologies into a user-friendly and visually understandable digital experience
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-6 text-lg-end text-center">

            {/* Live Link */}
            <button
  className="live-link-btn"
  onClick={() => window.open("#", "_blank")}
>
  Live Project ↗
</button>

            {/* Image */}
            <div className="project-image mt-3">
              <img
                src={projectImg}
                alt="Project preview"
                className="img-fluid rounded"
              />
            </div>

          </div>

        </div>

        {/* BELOW CONTENT */}
        <div className="mt-5">

          <h2 className='text-center'>This project was designed for an IoT solution provider serving both</h2>
          <p className='text-center'>
            Enterprise / Premium industrial clients
          </p>

          <p className='text-center'>
            General business owners & non-technical decision makers
          </p>

          <h6 className='text-center'>The key challenge was making highly technical IoT systems understandable to both technical experts and normal users</h6>

          <h5 className="mt-3 text-center">A thousand minds , one heartbeat</h5>

          <div className="row mt-3">

            {/* COLUMN 1 */}
           <div className="col-md-6">
              <h6>IoT solutions are often</h6>
              <ul>
                <li>Highly technicale</li>
                <li>Filled with jargon</li>
                <li>Difficult for non-technical users to understand</li>
                <li>Poorly structured across multiple solutions</li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="col-md-6">
              <h6>The company had</h6>
              <ul>
                <li>35+ Solution offerings</li>
                <li>20+ Hardware products</li>
                <li>Multiple industries served</li>
                <li>But no structured digital storytelling.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Section01;