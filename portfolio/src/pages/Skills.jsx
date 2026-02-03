import { skills } from "../data/profileData";

const Skills = () => {
  return (
    <div className="skills-page">
      <h1 className="page-title">Technical Skills</h1>

      <p>
        Over 8 years of experience working with a diverse set of technologies
        across the full stack. Here's an overview of my technical expertise:
      </p>

      <div className="skills-grid">
        {Object.values(skills).map((category, index) => (
          <div key={index} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skill-tags">
              {category.items.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
