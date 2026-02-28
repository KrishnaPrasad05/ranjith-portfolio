import './Sections.css';
import map from '../../assets/map.png'
function Section05() {
  return (
    <section className="container py-5">

  {/* Section Header */}
  <h2 className="section-title mb-2" style={{color:'#5a5a5a'}}>Information architecture</h2>
  <p className="text-muted">
    Since there were 55+ pages, structure was critical
  </p>

  <div className="row align-items-center">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-4 mb-4 mb-lg-0">

      <h6 className="fw-bold" style={{color:'#5a5a5a'}}>I created:</h6>
      <ul className="dot-list mb-3">
        <li>Industry-wise solution grouping</li>
        <li>Product categorization by function</li>
        <li>Consistent page hierarchy</li>
        <li>Navigation logic for scalability</li>
      </ul>

      <h6 className="fw-bold" style={{color:'#5a5a5a'}}>Focus</h6>
      <p className="text-muted small">
        Users should not feel overwhelmed.
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