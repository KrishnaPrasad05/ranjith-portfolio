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
  <h2 className="section-title mb-2" style={{color:'#5a5a5a'}}>A/B testing</h2>
  <p className="text-muted">
    My aim was to pick the best performing design variation based on facts rather than gut feeling.
  </p>

      <div>
        <h6 className="fw-bold" style={{color:'#5a5a5a'}}>Design A – Left Aligned CTA</h6>
        <ul className="dot-list mb-3">
          <li>CTA positioned on the left side</li>
          <li>Left-aligned content structure</li>
          <li>Traditional layout pattern</li>
          <li>Emphasis on content-first approach</li>
        </ul>

        <h6 className="fw-bold" style={{color:'#5a5a5a'}}>Design B – Center Aligned CTA</h6>
        <ul className="dot-list mb-3">
          <li>CTA positioned at the center</li>
          <li>Centrally aligned content structure</li>
          <li>Balanced and symmetrical layout</li>
          <li>Stronger visual focus on main message</li>
        </ul>

        <h6 className="fw-bold mt-5" style={{color:'#5a5a5a'}}>Stakeholder Review Process</h6>
        <ul className="dot-list mb-3">
          <li>Project Manager</li>
          <li>Key Stakeholders</li>
          <li>Visual clarity</li>
          <li>Message hierarchy</li>
          <li>CTA visibility</li>
          <li>Overall layout balance</li>
        </ul>
      </div>

      <div>
        <h6 className="fw-bold" style={{color:'#5a5a5a'}}>Final Decision Approach</h6>
        <p className="text-muted small mb-0">
          The final design selection was made after stakeholder discussion, ensuring alignment with business goals and user experience clarity.
        </p>
      </div>

    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="col-12 col-lg-8 d-flex">
    <div className="w-100 d-flex flex-column">

      <div className="flex-grow-1 d-flex flex-column">
        <h6 className="mb-2" style={{color:'#5a5a5a'}}><b>Design A (35%) </b>– The background slightly distracts and the content focus is not as strong as B.</h6>
        <div className="image-wrapper flex-grow-1">
          <img src={testA} alt="Wireframes" className="equal-img" />
        </div>
      </div>

      <div className="flex-grow-1 d-flex flex-column mt-3">
        <h6 className="mb-2" style={{color:'#5a5a5a'}}><b>Preferred Design: B (65%) </b>– It is clearer, more balanced, and makes the main message and CTA easier to notice quickly.</h6>
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