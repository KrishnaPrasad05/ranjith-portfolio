import './Sections.css';
import useTest from '../../assets/useTest.png';

function Section08() {
  return (
    <section className="container py-5">

  <div className="row align-items-center">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <h2 className="ux-section-title mb-3">Usability Improvements</h2>

      <p className="ux-section-desc mb-0">
        Focused on simplifying complex workflows, improving navigation clarity,
        and creating a consistent visual hierarchy. The redesigned interface
        reduced cognitive load and enhanced overall task efficiency across
        multiple user scenarios.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-12 col-lg-6 text-center">
      <img
        src={useTest}
        alt="Usability Improvements"
        className="img-fluid rounded ux-section-img"
      />
    </div>

  </div>

</section>
  )
}

export default Section08