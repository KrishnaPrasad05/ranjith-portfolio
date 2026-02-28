import './Sections.css';
import sampleImg from "../../assets/spin.png";

const Section04 = () => {
  return (
    <section className="container py-5">
      <h2 className="section-title mb-2" style={{color:'#5a5a5a',fontWeight:500}}>User research</h2>
  <p className="text-muted">
    I want to understand the average user’s profile based on the <br />current customer base, and prove my & business’ hypotheses..
  </p>
      <div className="row g-4 ">

        {/* COLUMN 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <h6 className="fw-bold" style={{color:'#5a5a5a'}}>AVERAGE USER PROFILE</h6>

          <ul className="dash-list">
            <li>Junior to mid-weight graphic designer</li>
            <li>21–30 years old | female</li>
            <li>UK-based</li>
            <li>interested in transitioning career into UX</li>
            <li> can’t afford 3–12 months of work to study</li>
          </ul>

          <h6 className="fw-bold mt-4" style={{color:'#5a5a5a'}}>Approach</h6>
          <p className="text-muted">
            I’ve arranged 10 calls via Zoom with previous customers to understand what influenced their decision to book for the course at The School of UX website:
7 out of 10 said it’s to do with the practical curriculum of the course, where the remaining 3 said it was affordable price.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <h6 className="fw-bold" style={{color:'#5a5a5a'}}>QUANTITATIVE STUDY</h6>
          <p className="text-muted">
            I wanted to quantify the feedback on the current website’s design. At the end of my user interviews I’ve asked attendees to assess the existing design of the website by completing a questionnaire that uses System Usability Scale (SUS).
          </p>
          <hr />
          <h6 className="fw-bold mt-4" style={{color:'#5a5a5a'}}>SUS SCORE</h6>
          <p className="text-muted">
            I’ve calculated the score using SUS calculator in Excel I’ve created using relevant formulas:
75 out of 100
          </p>
        </div>

        {/* COLUMN 3 */}
        <div className="col-12 col-lg-4 text-center">
          <img
            src={sampleImg}
            alt="Section visual"
            className="img-fluid rounded three-col-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Section04;