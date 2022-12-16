import React from "react";
import "./Project.css";
import Title from "../shared/Title";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "University Website Design",
      github:
        "https://github.com/sathish005005/HTML-CSS-Mini-Project-University---HTML-CSS-Project---8ni9xvgay9i1.git",
      img: "/assets/university.png",
      live: "https://visionary-frangipane-737461.netlify.app/",
    },
    {
      id: 2,
      title: "RPS Game",
      github: "https://github.com/sathish005005/sathish-JS-mini-project-1.git",
      img: "/assets/RPS Game.jpeg",
      live: "https://stupendous-rabanadas-994278.netlify.app/",
    },
    {
      id: 3,
      title: "Event Calendar",
      github: "https://github.com/sathish005005/Event-Calendar.git",
      img: "/assets/calender.jpg",
      live: "https://graceful-buttercream-76e4c5.netlify.app/",
    },
    {
      id: 4,
      title: "TVMaze-App",
      github: "https://github.com/sathish005005/TV-Maze-App",
      img: "/assets/tv-maze-app.png",
      live: "https://ornate-elf-ec13ec.netlify.app/",
    },
    {
      id: 5,
      title: "Parallax Website",
      github: "https://github.com/sathish005005/Fundamentals-of-web-development-HTML-Lists-Aside-Footer---Post-Class---HTML---CSS-Mini-Project--.git",
      img: "/assets/Parallax Website.jpeg",
      live: "https://serene-sorbet-d5ab35.netlify.app/",
    },
    {
      id: 6,
      title: "Sathish Portfolio",
      github: "https://github.com/sathish005005/sathish_portfolio.git",
      img: "/assets/portfolio.jpeg",
      live: "https://weather-app-react-aayush.vercel.app/",
    },
  ];

  return (
    <section id="portfolio">
      <Title title="Project" text="My Recent Work" />
      <div className="works-container">
        {projects.map((work) => {
          return (
            <div className="work-item" key={work.id}>
              <div className="work-img">
                <img src={work.img} alt={work.title} />
              </div>
              <div className="work-info">
                <h3>{work.title}</h3>
                <p>
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm "
                  >
                    Github
                  </a>
                  <a
                    href={work.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Live
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
