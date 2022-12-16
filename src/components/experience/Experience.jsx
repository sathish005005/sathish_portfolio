import React from "react";
import "./Experience.css";
import Feature from "../shared/Feature";
import Title from "../shared/Title";

const Experience = () => {
  const experience = [
    {
      title: "Front-End Developer",
      items: [
        {
          id: 1,
          title: "HTML",
          level: "Beginner",
        },
        {
          id: 2,
          title: "CSS",
          level: "Beginner",
        },
        {
          id: 3,
          title: "JavaScript",
          level: "Beginner",
        },
        {
          id: 4,
          title: "React",
          level: "Beginner",
        },
      ],
    },
    {
      title: "Back-End Developer",
      items: [
        {
          id: 1,
          title: "Java",
          level: "Begineer",
        },
        {
          id: 2,
          title: "MongoDB",
          level: "Begineer",
        },
        {
          id: 3,
          title: "MySQL",
          level: "Beginner",
        },
        
      ],
    },
  ];

  return (
    <section id="experience">
      <Title title="My Experience" text="What Skills I Have" />
      <div className="experience-container">
        {experience.map(({ title, items }) => (
          <div key={title} className="experience-item">
            <h2 className="experience-title">{title}</h2>
            <div className="experience-item-container">
              {items.map(({ id, title, level }) => (
                <Feature key={id} title={title} level={level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
