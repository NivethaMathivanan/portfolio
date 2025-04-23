import React from "react";
import "../Component/Css/Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
  FaBold,
  FaSitemap,
} from "react-icons/fa";
import { FaRoute, FaProjectDiagram, FaWpforms, FaLayerGroup, FaCode, FaChrome } from 'react-icons/fa';
function Skills() {
  const skillData = [
    { name: "React", icon: <FaReact /> },
    { name: "Redux-Saga", icon: <FaLaptopCode /> },
    { name: "Tailwind CSS", icon: <FaCodeBranch /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Bootstrap", icon: <FaBold /> },
    { name: "Swagger", icon: <FaSitemap /> },
    { name: "React Router", icon: <FaRoute /> },
    { name: "Redux Toolkit", icon: <	FaProjectDiagram /> },
    { name: "Formik", icon: <FaWpforms /> },
    { name: "Material-UI", icon: <FaLayerGroup /> },
    { name: "VS Code	", icon: <FaCode /> },
    { name: "Chrome DevTools", icon: <FaChrome /> }, 
    { name: "IntelliJ", icon: <FaLaptopCode/> },





  ];


  return (
    <section className="skills-container" id="Skills">
      <div className="skills-content">
        <div className="skills-left  ">
          <h2 className="skillOne">
            My Skills

          </h2>
          <h1 className="SkillsSecond">You Can Imagine<br />I Can Do</h1>
          <p className="skillThree">
            As a passionate Frontend Developer, I craft elegant, responsive interfaces using modern tools like React, Redux-Saga, and Tailwind CSS.
          </p>
        </div>
        <div className="skills-right">
          <div className="skill-boxes">
            {skillData.map((skill, index) => (
              <div key={index} className="skill-box">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
