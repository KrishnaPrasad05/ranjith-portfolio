import run from "../../assets/run.png";
import think from "../../assets/think.png";
import './Sections.css';
function Section02() {
  return (
    <section className="container py-5">

  {/* ROW 1 */}
  <div className="row align-items-center g-4 mb-5">
    
    {/* LEFT */}
    <div className="col-lg-6">
      <h3 className="fw-bold mb-3" style={{color:'#5a5a5a'}}>My Goal</h3>
      <ul className="custom-list mt-3">
        <li>Simplify complex IoT systems visually</li>
        <li>Improve solution discovery across industries</li>
        <li>Design scalable page templates for 55+ pages</li>
        <li>Create a consistent visual system</li>
        <li>Explain “How It Works” clearly for every solution & product</li>
      </ul>
    </div>

    {/* RIGHT */}
    <div className="col-lg-6 text-center">
      <img
        src={run}
        alt="Research"
        className="img-fluid rounded"
      />
    </div>
  </div>

  {/* ROW 2 */}
  <div className="row align-items-start">

    {/* LEFT */}
    <div className="col-lg-6">
      <h3 className="fw-bold mb-3" style={{color:'#5a5a5a'}}>Design Decisions</h3>

      <p>I’ve reviewed the current website to evaluate what works and what doesn’t – assumptions from my professional point of view.</p>

      <ul className="custom-list mb-4">
        <li><b style={{color:'#5a5a5a'}}>Understood IoT products & technical architecture</b></li>
        <li><b style={{color:'#5a5a5a'}}>Discussed with product & engineering teams</b></li>
        <li>Identified primary user groups</li>
        <li>Industrial decision makers</li>
        <li><b style={{color:'#5a5a5a'}}>Technical engineers</b></li>
        <li><b style={{color:'#5a5a5a'}}>Non-technical business owners</b></li>
        <li><b style={{color:'#5a5a5a'}}>Discussed with product & engineering teams</b></li>
      </ul>

      {/* TAG WITH TICK ICON */}
     <div className="highlight-tag">
  
  <span className="tag-text">
    Outcome : <b style={{color:'#5a5a5a'}}> Clear understanding of user knowledge levels</b>
  </span>
  <div className="tick-box">✔</div>
</div>
    </div>

    {/* RIGHT (empty for spacing or future image) */}
    <div className="col-lg-6">
        <img
        src={think}
        width={400}
        height={400}
        alt="Research"
        className="img-fluid rounded" 
      />
    </div>

  </div>
</section>
  )
}

export default Section02