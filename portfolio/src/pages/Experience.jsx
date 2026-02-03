import { experience } from "../data/profileData";

const Experience = () => {
  return (
    <div className="experience-page">
      <h1 className="page-title">Professional Experience</h1>

      {experience.map((job) => (
        <article key={job.id} className="experience-card">
          <div className="experience-header">
            <h3 className="experience-title">
              {job.title}{" "}
              <span className="experience-company">@ {job.company}</span>
            </h3>
            <span className="experience-meta">{job.duration}</span>
          </div>

          <div className="experience-meta">
            <span>📍 {job.location}</span>
            <span>🏢 {job.type}</span>
            {job.project && <span>📂 Project: {job.project}</span>}
          </div>

          <div className="experience-description">
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Experience;
