import './Sections.css';
import projectImg from "../../assets/screen.png";

const Section01 = () => {
  return (
    <div className="project-details">

      <section className="project-details container py-5">

        <div className="row align-items-center g-4">

          {/* LEFT COLUMN */}
          <div className="col-lg-6">
            <h1 className="project-title">IoT Enterprise Platform – 55+ Page Website Design</h1>

            <p className="project-meta">
              <strong className='mb-2'>Role:</strong> Solo UX/UI Designer <br />
              <strong className='mb-2'>Duration:</strong> 6 Months <br />
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

          <h2 className='text-center' style={{color:'#5a5a5a'}}>This project was designed for an IoT solution provider serving both</h2>
          <p className='text-center'>
            Enterprise / Premium industrial clients
          </p>

          <p className='text-center'>
            General business owners & non-technical decision makers
          </p>

          <h6 className='text-center'  style={{color:'#5a5a5a'}}>The key challenge was making highly technical IoT systems understandable to both technical experts and normal users</h6>

          <h3 className="mt-3 text-center"  style={{color:'#5a5a5a'}}>A thousand minds , one heartbeat</h3>

          <div className="row mt-3">

            {/* COLUMN 1 */}
           <div className="col-md-6">
              <h5  style={{color:'#5a5a5a'}}>IoT solutions are often</h5>
              <ul>
                <li>Highly technicale</li>
                <li>Filled with jargon</li>
                <li>Difficult for non-technical users to understand</li>
                <li>Poorly structured across multiple solutions</li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div className="col-md-6">
              <h5  style={{color:'#5a5a5a'}}>The company had</h5>
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