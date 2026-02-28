import React from "react";
import "./Sections.css";

const processData = [
  {
    title: " RESEARCH & UNDERSTANDING",
    points: [
      "Understand IoT ecosystem (devices, sensors, data flow)",
      "Stakeholder interviews",
      "User research (admins, operators, customers)",
      "Define user needs & pain points"
    ],
  },
  {
    title: "STRATEGY & PLANNING",
    points: [
      "Define problem statements",
      "Feature prioritization",
      "Information Architecture",
      "User flows for device management & dashboards",
      "Define KPIs & success metrics",
    ],
  },
  {
    title: "WIREFRAMING",
    points: [
      "Low-fidelity wireframes",
      "Dashboard layout structure",
      "Data visualization planning",
      "Real-time interaction design (alerts, status updates)",
      "Responsive experience planning",
    ],
  },
  {
    title: "UI DESIGN & PROTOTYPING",
    points: [
      "High-fidelity UI design",
      "Design system creation",
      "Interactive prototypes",
      "Micro-interactions (notifications, device states)"
    ],
  },
  {
    title: "TESTING & LAUNCH",
    points: [
      "Usability testing",
      "Performance & accessibility testing",
      "Design handoff to development",
      "UX QA & iteration",
      "Post-launch improvements",
    ],
  },
];

const Section03 = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 text-center" style={{color:'#5a5a5a'}}>Process review</h2>

      <div className="process-timeline">
        {processData.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="process-marker">{index + 1}</div>

            <div className="process-content">
              <h5 className="fw-bold mb-3" style={{color:'#5a5a5a'}}>{step.title}</h5>
              <ul className="process-list">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section03;