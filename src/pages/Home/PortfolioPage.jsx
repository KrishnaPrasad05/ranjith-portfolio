import { BsArrowRight } from "react-icons/bs";
import ajith from "../../assets/ajith.png";
import arokya from "../../assets/arokya.png";
import culture from "../../assets/culture.png";
import elint from "../../assets/elint.png";
import epitome from "../../assets/epitome.png";
import hbs from "../../assets/hbs.png";
import horical from "../../assets/horical.png";
import klin from "../../assets/klin.png";
import medi from "../../assets/medi.png";
import prince from "../../assets/prince.png";
import skyline from "../../assets/skyline.png";
import { RiFullscreenFill } from "react-icons/ri";
import PortfolioCarousel from "../../components/PortfolioCarousel"; // adjust path if needed
import { useNavigate } from "react-router-dom";

const PortfolioPage = () => {
  const navigate =useNavigate()
  const projects = [
    {
      image: elint,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: klin,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: skyline,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Month",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: ajith,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: arokya,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: epitome,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: horical,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: prince,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: culture,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: medi,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
    {
      image: hbs,
      title: "Website 50+ Page",
      description: "An enterprise IoT website simplifying complex technologies into a clear, conversion-focused digital experience across 55+ pages.",
      timeline: "6 Months",
      role: "UI/UX Designer",
      device: "App, Responsive &\n Marketing Website",
    },
  ];

  function viewProjects(){
    navigate("/projects");
  }

  return (
    <div>
      {/* Optional Hero or Page Title */}
      <div className="projects-header container  d-flex justify-content-between align-items-center flex-wrap">
      <p className=" mb-2 mb-md-0" style={{fontSize:'36px',color:'#656464ff'}}>
        Research Think Design Develop
      </p>

      <button className="btn btn-light d-flex align-items-center" onClick={viewProjects}>
        View Full Page <RiFullscreenFill style={{fontSize:'18px'}} className="ms-2" />
      </button>
    </div>
    
      {/* Portfolio Carousel */}
      <PortfolioCarousel projects={projects} />
    </div>
  );
};

export default PortfolioPage;