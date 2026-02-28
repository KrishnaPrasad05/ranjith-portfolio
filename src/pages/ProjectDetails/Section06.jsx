import './Sections.css';
import acc1 from '../../assets/acc1.png';
import acc2 from '../../assets/acc2.png';

function Section06() {
  return (
    <section className="container info-section py-5">

  {/* Section Header */}
  <h2 className="info-sec-title mb-2">Accessibility</h2>
  <p className="info-sec-desc mb-4">
I want to ensure our design is universal and works for everyone.  </p>

  <div className="row align-items-start">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-6">

      <div className="info-block mb-3">
        <h5 className="info-title">WCAG VALIDATION</h5>
        <p className="info-text">
          I’m working on the website to fully comply with industry’s Web Content Accessibility Guidelines.
        </p>
      </div>

      <div className="info-block">
        <ul className="info-list">
          <li>Text size is legible & can be easily changed</li>
          <li>Content is not cropped</li>
          <li>Optimal colour contrast ratio</li>
          <li>System is accessible on different screen sizes</li>
          <li>Interface is navigable using keyboard</li>
          <li>System is responsive & doesn’t take long to load</li>
        </ul>
      </div>

      <div className="info-block mb-3">
        <h5 className="info-title">INCLUSIVE DESIGN</h5>
        <p className="info-text">
          To get a buy-in from the business, I’ve arranged activities from Microsoft’s Inclusive Design Toolkit to introduce empathetic problem solving.
        </p>
      </div>

      <div className="info-block mb-3">
        <h5 className="info-title">PERFORMANCE</h5>
        <p className="info-text">
         I’ve analysed the website using PageSpeed service for any performance issues, which are likely to affect accessibility and conversion rates. I’ve discussed these with our developer starting from optimising hi-res images that should improve loading times by 20%.
        </p>
      </div>

      

    </div>

    {/* RIGHT COLUMN */}
    <div className="col-12 col-lg-6">

      <div className="img-block mb-4">
        <h6 className="img-title mb-2">Strong Call-To-Action Visibility – Pass ✅</h6>
        <img
          src={acc1}
          alt="Wireframe"
          className="img-fluid rounded info-img"
        />
      </div>

      <div className="img-block">
        <h6 className="img-title mb-2">Device Mockups Support Context – Pass✅</h6>
        <img
          src={acc2}
          alt="Prototype"
          className="img-fluid rounded info-img"
        />
      </div>

    </div>

  </div>

</section>
  )
}

export default Section06