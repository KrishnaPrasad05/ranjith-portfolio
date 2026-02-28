import { IoLogoFigma } from "react-icons/io5";
import { IoDiamond } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { BsPaletteFill } from "react-icons/bs";
import { FaSquareBehance } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Hero.css";
import profileImage from "../../assets/profile.png"; // replace with your actual image path

const Hero = () => {
  return (
    <>
    <section className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
      
      {/* Profile Image */}
      <div className="hero-image" style={{marginTop:'-25px'}}>
        <img src={profileImage} alt="Ranjith"  />
      </div>

      <div style={{marginTop:'-50px'}}>
 {/* Greeting */}
      <p className="hero-greeting mb-1">Hi, I'm</p>

      {/* Name */}
      <h1 className="hero-name mb-2">RANJITH<span style={{color:'#9b9999ff'}}>.</span></h1>

      {/* Role */}
      <p className="hero-role mb-0">UI/UX Designer & Product Designer</p>
      </div>

     

    </section>
    <section className="details-section container py-5">
      <div className="row">

        {/* Column 1 - Experience */}
        <div className="col-12 col-md-4 mb-4">
          <h3 className="details-heading mb-3">EXPERIENCE</h3>
          
          <div className="details-item mb-3">
            <p className="fw-bold mb-1">UX/UI Designer - Elint Systems</p>
            <p className="text-muted mb-1">Aug 2025 - Present</p>
            <p className="mb-1">Working on IoT, AI & ML based industrial products.</p>
            <p>Focused on dashboards, system monitoring UIs, and scalable design systems.</p>
          </div>

          <div className="details-item">
            <p className="fw-bold mb-1">Freelance UI/UX Designer</p>
            <p className="text-muted mb-1">2023 - Present</p>
            <p>Worked with startups and individuals on mobile apps, websites, and branding-focused UI solutions.</p>
          </div>
        </div>

        {/* Column 2 - Proficiency */}
        <div className="col-12 col-md-4 mb-4">
          <h3 className="details-heading mb-3">PROFICIENCY</h3>

          <div className="details-item mb-3">
            <p className="fw-bold mb-1">UX/UI Designer - Birthmarque</p>
            <p className="text-muted mb-1">Jan 2025 - Jul 2025</p>
            <p>Designed responsive websites and marketing pages with a strong focus on usability and visual consistency.</p>
          </div>

          <div className="details-item">
            <p className="fw-bold mb-1">UX/UI Designer - PetEye</p>
            <p className="text-muted mb-1">2024 - 2025</p>
            <p>Designed end-to-end user experience for a pet shopping & delivery platform, including user flows, wireframes, and UI screens.</p>
          </div>
        </div>

        {/* Column 3 - Contact */}
        <div className="col-12 col-md-4 mb-4" style={{fontSize:'18px'}}>
          <h3 className="details-heading mb-3">CONTACT</h3>

          <div className="details-item mb-3">
            <p className="fw-bold mb-1">Behance <span><FaSquareBehance/></span></p>
            <p className="text-muted">behance.net/ranjithux</p>
          </div>

          <div className="details-item mb-3">
            <p className="fw-bold mb-1">LinkedIn <span><FaLinkedin/></span></p>
            <p className="text-muted">linkedin.com/in/ranjithux</p>
          </div>

          <div className="details-item mb-3">
            <p className="fw-bold mb-1">Email <span><IoMdMail/></span></p>
            <p className="text-muted">ranjithhr2923@gmail.com</p>
          </div>

          <div className="details-item">
  <p className="fw-bold mb-1">Software</p>
  <div className="software-icons d-flex gap-3 flex-wrap justify-content-start">
    <IoLogoFigma />
    <IoDiamond/>
    <SiAdobephotoshop />
    <SiAdobeillustrator />
    <SiAdobexd />
    <BsPaletteFill/>
  </div>
</div>
        </div>

      </div>
    </section>
    </>
  );
};

export default Hero;