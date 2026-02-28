import img1 from  '../../assets/img1.png'
import img2 from  '../../assets/img2.png'
import './Sections.css';

function Section09() {
  return (
    <section className="container py-5">

  {/* Section Header */}
  <h2 className="sec-title mb-2">Project Highlights</h2>
  <p className="sec-desc mb-3">
    Key aspects of the project demonstrating design thinking, usability, and scalability.
  </p>
 

  {/* ROW 1 */}
  <div className="row align-items-center mb-4">

    {/* LEFT COLUMN */}
    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
      <h5 className="row-title mb-2">User Research</h5>
      <ul className="row-list">
        <li>Stakeholder interviews</li>
        <li>User journey mapping</li>
        <li>Competitor analysis</li>
        <li>Usability testing</li>
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
      <h5 className="row-title mb-2">User Research</h5>
      <ul className="row-list">
        <li>Stakeholder interviews</li>
        <li>User journey mapping</li>
        <li>Competitor analysis</li>
        <li>Usability testing</li>
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