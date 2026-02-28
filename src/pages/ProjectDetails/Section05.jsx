import './Sections.css';
import map from '../../assets/map.png'
function Section05() {
  return (
    <section className="container py-5">

  {/* Section Header */}
  <h2 className="section-title mb-2">Research Insights</h2>
  <p className="text-muted">
    Understanding user behaviour and identifying usability gaps
    through structured research methods.
  </p>
  <div className="section-divider mb-4"></div>

  <div className="row align-items-center">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">

      <h6 className="fw-bold">Key Findings</h6>
      <ul className="dot-list mb-3">
        <li>Users struggled with navigation flow</li>
        <li>Low visibility of primary actions</li>
        <li>Information hierarchy was unclear</li>
        <li>Mobile layout caused friction</li>
      </ul>

      <h6 className="fw-bold">Impact</h6>
      <p className="text-muted small">
        These issues led to increased drop-offs and reduced task
        completion rates across critical journeys.
      </p>

    </div>

    {/* RIGHT COLUMN */}
    <div className="col-12 col-lg-8 text-center">
      <img
        src={map}
        alt="Research"
        className="img-fluid rounded"
      />
    </div>

  </div>

</section>
  )
}

export default Section05