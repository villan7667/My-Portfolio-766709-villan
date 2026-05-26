import { useState } from "react";


const skills = [
  { name: "HTML5",      img: "./assets/images/html5.png" },
  { name: "CSS3",       img: "./assets/images/css3.png" },
  { name: "JavaScript", img: "./assets/images/javascript.png" },
  { name: "Node Js",    img: "./assets/images/nodejs.png" },
  { name: "jQuery",     img: "./assets/images/jquery.png" },
  { name: "Bootstrap",  img: "./assets/images/bootstrap.png" },
  { name: "Express Js", img: "./assets/images/express.png" },
  { name: "React",      img: "./assets/images/react.png" },
  { name: "Mongo db",   img: "./assets/images/mdb.png" },
  { name: "Firebase",   img: "./assets/images/firebase.png" },
  { name: "Python",     img: "./assets/images/python.png" },
  { name: "Tailwind",   img: "./assets/images/Tailwind.png" },
];

const tools = [
  
  { name: "Render",       img: "./assets/images/Render.png",   imgStyle: { width: "56px", height: "auto", maxHeight: "32px", objectFit: "contain" } },
  { name: "Figma",        img: "./assets/images/figma.png" },
  { name: "Post Man",     img: "./assets/images/postman.png" },
  { name: "Git",          img: "./assets/images/git.png" },
  { name: "Npm",          img: "./assets/images/npm.png" },
  { name: "Command Line", img: "./assets/images/command.png" },
  { name: "VS Code",      img: "./assets/images/vs-code.png" },
  { name: "Unity",        img: "./assets/images/unity.png" },
  { name: "PyCharm",      img: "./assets/images/PyCharm.png" },
  { name: "Power BI",     img: "./assets/images/Power BI.png" },
  { name: "vite",         img: "./assets/images/vite.png",     imgStyle: { width: "44px", height: "44px", objectFit: "contain" } },
  { name: "Netlify",      img: "./assets/images/netlify.png" },
];

const defaultImgStyle = {
  width: "52px",
  height: "52px",
  objectFit: "contain",
};

function SkillCard({ name, img, imgStyle }) {
  return (
    <div className="skill-card">
      <div className="tooltip">{name}</div>
      <div className="card-icon">
        <img
          src={img}
          alt={`${name} logo`}
          style={imgStyle || defaultImgStyle}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [showTools, setShowTools] = useState(false);

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My Skills</p>
        <h2 className="h3 section-title">What Technologies and Tools Do I Use?</h2>
        <p className="section-text">
          I specialize in building responsive, high-performance, and secure web applications. I work with a modern
          tech stack including both frontend and backend technologies. I also use essential tools for development,
          design, version control, and collaboration to streamline workflows and deliver effective solutions.
        </p>
        <div className={`skills-toggle${showTools ? " active" : ""}`} data-toggle-box>
          <button className={`toggle-btn${!showTools ? " active" : ""}`} onClick={() => setShowTools(false)}>
            Skills
          </button>
          <button className={`toggle-btn${showTools ? " active" : ""}`} onClick={() => setShowTools(true)}>
            Tools
          </button>
        </div>
      </div>

      <div className={`skills-box${showTools ? " active" : ""}`} data-skills-box>
        <ul className="skills-list">
          {skills.map((s) => (
            <li key={s.name}>
              <SkillCard {...s} />
            </li>
          ))}
        </ul>
        <ul className="tools-list">
          {tools.map((t) => (
            <li key={t.name}>
              <SkillCard {...t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
