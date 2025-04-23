import React from "react";
import "../Component/Css/Portfolio.css";



function Portfolio() {
  const projects = [
    {
      title: "Hastin Containerline 📈",
      company: "Ebrain Technology",
      summary: "Developed a Hastin Containerline Application with:",
      description: [
        "Logistics-based web platform.",
        "Supports import/export container tracking.",
        "Secure login with user-based access.",
        "Real-time shipment updates.",
        "Clean UI with React and Bootstrap."
      ]
    },
    {
      title: "Quick Receipt POs 📑",
      company: "Ebrain Technology",
      summary: "Developed a Quick Receipt Application with:",
      description: [
        "PO and Receipt automation system.",
        "Generates instant purchase receipts.",
        "Integrated with backend for validation.",
        "Supports supplier and item entries.",
        "Built with React and Redux-Saga."
      ]
    }
  ];


  return (
    <section className="portfolio" id="portfolio">
      <h2 className="section-title"> My Project</h2>

      
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            {/* <img src={project.image} alt={project.title} /> */}
            <h1 className="title">{project.title}</h1>
            <h3 className="company">{project.company}</h3>
            <p className=" project-description">{project.summary}</p>
            <ul className="project-description">
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Portfolio;

