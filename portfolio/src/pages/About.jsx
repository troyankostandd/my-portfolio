import { profileData, education } from "../data/profileData";

const About = () => {
  return (
    <div className="about-page">
      <h1 className="page-title">About Me</h1>

      <section>
        <p style={{ fontSize: "1.1em", lineHeight: "1.7" }}>
          {profileData.summary}
        </p>
      </section>

      <section>
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <h4>{edu.university}</h4>
            <p className="degree">{edu.degree}</p>
            <p className="meta">
              {edu.location} • {edu.duration}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <p>{profileData.languages.join(", ")}</p>
      </section>

      <section>
        <h2>Professional Focus</h2>
        <ul>
          <li>
            Building scalable web applications with modern JavaScript/TypeScript
            stacks
          </li>
          <li>
            Cloud infrastructure and DevOps practices (AWS, Docker, Kubernetes)
          </li>
          <li>Performance optimization and system reliability</li>
          <li>API design and microservices architecture</li>
          <li>Database optimization and data management</li>
          <li>Team collaboration in distributed, remote-first environments</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
