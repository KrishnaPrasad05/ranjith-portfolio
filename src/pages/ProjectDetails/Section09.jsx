import img1 from  '../../assets/img1.png'
import img2 from  '../../assets/img2.png'
import './Sections.css';

function Section09() {
  return (
    <section className="container py-5">

  {/* Section Header */}
  <h2 className="sec-title mb-2" style={{color:'#5a5a5a'}}>Design Handover & QA</h2>
  <p className="sec-desc mb-3">
    Each Solution and Product page followed a predefined structural logic to reduce confusion during implementation
  </p>
 

  {/* ROW 1 */}
  <div className="row align-items-center mb-4">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
      <h5 className="row-title mb-2" style={{color:'#5a5a5a'}}>Structured Component System</h5>
      <ul className="row-list">
        <li>Reusable layout templates</li>
        <li>Modular UI components</li>
        <li>Standardized spacing system</li>
        <li>Global typography and color styles</li>
      </ul>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-12 col-lg-8">
      <img
        src={img1}
        alt="User Research"
        className="img-fluid rounded row-img"
      />
    </div>

  </div>

  {/* ROW 2 */}
 <div className="row align-items-center mb-4">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
      <h5 className="row-title mb-2" style={{color:'#5a5a5a'}}>Design Documentation</h5>
      <ul className="row-list">
        <li>Detailed Figma file with organized components</li>
        <li>Auto-layout enabled structures</li>
        <li>Responsive behavior guidelines</li>
        <li>Grid system specifications</li>
        <li>Interaction notes for “How It Works” sections</li>
      </ul>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-12 col-lg-8">
      <img
        src={img2}
        alt="User Research"
        className="img-fluid rounded row-img"
      />
    </div>

  </div>

</section>
  )
}

export default Section09