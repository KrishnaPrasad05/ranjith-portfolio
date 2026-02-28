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
import PortfolioCarousel from "../../components/PortfolioCarousel"; // adjust path if needed
import PortfolioMarquee from "../../components/PortfolioMarquee";

const PortfolioMarqueePage = () => {
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

  return (
    <div>
      {/* Optional Hero or Page Title */}
      <section className="text-center my-4">
        <h2 className="fw-bold">My Portfolio Projects</h2>
        <p className="text-muted">Check out some of my recent work</p>
      </section>

      {/* Portfolio Carousel */}
      <PortfolioMarquee projects={projects} />
    </div>
  );
};

export default PortfolioMarqueePage;