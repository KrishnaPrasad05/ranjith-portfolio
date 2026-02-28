import ajith from "../assets/ajith.png";
import arokya from "../assets/arokya.png";
import culture from "../assets/culture.png";
import elint from "../assets/elint.png";
import epitome from "../assets/epitome.png";
import hbs from "../assets/hbs.png";
import horical from "../assets/horical.png";
import klin from "../assets/klin.png";
import medi from "../assets/medi.png";
import prince from "../assets/prince.png";
import skyline from "../assets/skyline.png";
import ProjectsCard from "../components/ProjectsCard";
import '../App.css'

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

const Projects = () => {
  const handleOpen = (title) => {
    alert(`Open project: ${title}`);
  };

  return (
    <div className="container py-5">
        <p style={{textAlign:'center',color:'#565656ff',fontWeight:400,fontSize:'42px'}} >Research Think Design Develop</p>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            {...project}
            onClick={() => handleOpen(project.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;