import './Sections.css';
import testA from '../../assets/TestA.png'
import testB from '../../assets/TestB.png'

function Section07() {
  return (
    <section className="container py-5">

  
 

  <div className="row align-items-stretch">

  {/* LEFT COLUMN */}
  <div className="col-12 col-lg-4 d-flex">
    <div className="w-100 d-flex flex-column justify-content-between">
      {/* Section Header */}
  <h2 className="section-title mb-2">Design Process</h2>
  <p className="text-muted">
    Structured workflow followed to solve usability challenges and
    improve overall user experience.
  </p>

      <div>
        <h6 className="fw-bold">User Research</h6>
        <ul className="dot-list mb-3">
          <li>Stakeholder interviews</li>
          <li>User journey mapping</li>
          <li>Competitor analysis</li>
          <li>Heuristic evaluation</li>
        </ul>

        <h6 className="fw-bold">Information Architecture</h6>
        <ul className="dot-list mb-3">
          <li>Content structuring</li>
          <li>Navigation redesign</li>
          <li>Task flow optimization</li>
          <li>Labeling improvements</li>
        </ul>

        <h6 className="fw-bold mt-5">Wireframing</h6>
        <ul className="dot-list mb-3">
          <li>Low-fidelity sketches</li>
          <li>Mid-fidelity layouts</li>
          <li>Interaction patterns</li>
          <li>Responsive grids</li>
          <li>Component planning</li>
          <li>Usability checkpoints</li>
        </ul>
      </div>

      <div>
        <h6 className="fw-bold">Outcome</h6>
        <p className="text-muted small mb-0">
          The refined structure improved task completion and created
          a scalable design system for future product expansion.
        </p>
      </div>

    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="col-12 col-lg-8 d-flex">
    <div className="w-100 d-flex flex-column">

      <div className="flex-grow-1 d-flex flex-column">
        <h6 className="fw-bold mb-2">Wireframe Exploration</h6>
        <div className="image-wrapper flex-grow-1">
          <img src={testA} alt="Wireframes" className="equal-img" />
        </div>
      </div>

      <div className="flex-grow-1 d-flex flex-column mt-3">
        <h6 className="fw-bold mb-2">Final UI Screens</h6>
        <div className="image-wrapper flex-grow-1">
          <img src={testB} alt="Final UI" className="equal-img" />
        </div>
      </div>

    </div>
  </div>

</div>

</section>
  )
}

export default Section07