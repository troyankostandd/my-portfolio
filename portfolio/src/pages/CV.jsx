import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  profileData,
  skills,
  experience,
  education,
} from "../data/profileData";

const CV = () => {
  return (
    <div className="cv-page">
      <h1 className="page-title">Curriculum Vitae</h1>

      {/* Contact Info */}
      <section className="cv-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope />
            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
          </div>
          <div className="contact-item">
            <FaPhone />
            <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>{profileData.address}</span>
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="contact-item">
            <FaGithub />
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="cv-section">
        <h2>Professional Summary</h2>
        <p>{profileData.summary}</p>
      </section>

      {/* Skills */}
      <section className="cv-section">
        <h2>Technical Skills</h2>
        {Object.values(skills).map((category, index) => (
          <div key={index} style={{ marginBottom: "1em" }}>
            <strong>{category.title}:</strong>{" "}
            <span>{category.items.join(", ")}</span>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="cv-section">
        <h2>Professional Experience</h2>
        {experience.map((job) => (
          <article key={job.id} className="experience-card">
            <div className="experience-header">
              <h3 className="experience-title" style={{ fontSize: "1.1em" }}>
                {job.title}{" "}
                <span className="experience-company">@ {job.company}</span>
              </h3>
              <span className="experience-meta">{job.duration}</span>
            </div>
            <div className="experience-meta">
              <span>
                {job.location} • {job.type}
              </span>
              {job.project && <span> • Project: {job.project}</span>}
            </div>
            <div className="experience-description">
              <ul>
                {job.responsibilities.slice(0, 5).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Education */}
      <section className="cv-section">
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

      {/* Languages */}
      <section className="cv-section">
        <h2>Languages</h2>
        <p>{profileData.languages.join(", ")}</p>
      </section>
    </div>
  );
};

export default CV;
