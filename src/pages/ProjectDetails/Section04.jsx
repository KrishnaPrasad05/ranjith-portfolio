import './Sections.css';
import sampleImg from "../../assets/spin.png";

const Section04 = () => {
  return (
    <section className="container py-5">
      <div className="row g-4 align-items-center">

        {/* COLUMN 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <h5 className="fw-bold">Challenges</h5>

          <ul className="dash-list">
            <li>Complex user workflow</li>
            <li>Low engagement rate</li>
            <li>Inconsistent UI patterns</li>
            <li>Navigation confusion</li>
            <li>Poor mobile responsiveness</li>
          </ul>

          <h5 className="fw-bold mt-4">Approach</h5>
          <p className="text-muted">
            Focused on simplifying flows, improving visual hierarchy,
            and creating a scalable design system for consistency.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <h5 className="fw-bold">Research Insights</h5>
          <p className="text-muted">
            Conducted stakeholder interviews and usability testing to
            identify pain points and user expectations.
          </p>

          <h5 className="fw-bold mt-4">Design Solution</h5>
          <p className="text-muted">
            Delivered a modular UI with improved accessibility,
            faster navigation, and better task completion rate.
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