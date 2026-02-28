
import processImg from "../../assets/profblack.png"; // your image

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Column 1 – Title + Description */}
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <p className="mb-3" style={{color:'#686868ff',fontSize:'48px'}}>About Me</p>

          <p className="text-muted" style={{lineHeight:'25px'}}>
            I’m Ranjith from Chennai, a passionate UX/UI Designer focused on creating meaningful and user-friendly digital experiences. My goal is to design products that are simple, intuitive, and impactful—where functionality meets clarity.
          </p>

          <p className="text-muted mb-0" style={{lineHeight:'25px'}}>
            I believe great design is not just about visuals, but about understanding people, solving real problems, and delivering experiences that truly connect. Every project is an opportunity for me to learn, grow, and create value through thoughtful design
          </p>
        </div>

        {/* Column 2 – Image */}
        <div className="col-12 col-md-6 col-lg-4 text-center mb-4 mb-lg-0">
          <img
            src={processImg}
            alt="Design Process"
            className="img-fluid rounded"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Column 3 – Repeated Items */}
        <div className="col-12 col-md-6 col-lg-4">

          {/* Item 1 */}
          <div style={{marginBottom:'26px'}}>
            <p className="mb-1 expText" style={{ fontSize: "42px", color:'#5e5e5eff',fontWeight:600 }}>2</p>
            <p className="text-muted mb-0" >
              YEARS OF EXPERIENCE
            </p>
            <hr />
          </div>

          {/* Item 2 */}
          <div style={{marginBottom:'26px'}}>
            <h6 className="mb-1 expText" style={{ fontSize: "42px", color:'#5e5e5eff',fontWeight:600 }}>16+</h6>
            <p className="text-muted small mb-0">
              PROJECTS  COMPLETED
            </p>
            <hr />
          </div>

          {/* Item 3 */}
          <div>
            <h6 className="mb-1 expText" style={{ fontSize: "42px", color:'#5e5e5eff',fontWeight:600 }}>18</h6>
            <p className="text-muted small mb-0">
              DESIGN AWARDS
            </p>
            <hr />
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;