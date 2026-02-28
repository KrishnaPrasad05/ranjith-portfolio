import React from "react";
import "./Sections.css";

const processData = [
  {
    title: "Research",
    points: [
      "Stakeholder interviews",
      "User surveys",
      "Competitor analysis",
      "Market insights",
      "Problem definition",
    ],
  },
  {
    title: "Define",
    points: [
      "User personas",
      "Journey mapping",
      "Pain point identification",
      "HMW statements",
      "Success metrics",
    ],
  },
  {
    title: "Ideate",
    points: [
      "Brainstorming sessions",
      "User flows",
      "Information architecture",
      "Sketching concepts",
      "Wireframe planning",
    ],
  },
  {
    title: "Design",
    points: [
      "Low-fidelity wireframes",
      "High-fidelity UI",
      "Design system setup",
      "Prototyping",
      "Accessibility checks",
    ],
  },
  {
    title: "Test",
    points: [
      "Usability testing",
      "A/B testing",
      "Feedback analysis",
      "Iteration cycles",
      "Final validation",
    ],
  },
];

const Section03 = () => {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Process</h2>

      <div className="process-timeline">
        {processData.map((step, index) => (
          <div className="process-step" key={index}>
            <div className="process-marker">{index + 1}</div>

            <div className="process-content">
              <h5 className="fw-bold mb-3">{step.title}</h5>
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