import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { profileData } from "../data/profileData";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">Contact</h1>

      <p>
        I'm always open to discussing new opportunities, interesting projects,
        or just connecting with fellow developers. Feel free to reach out
        through any of the following channels:
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope />
          <div>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
          </div>
        </div>

        <div className="contact-item">
          <FaPhone />
          <div>
            <strong>Phone</strong>
            <br />
            <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
          </div>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt />
          <div>
            <strong>Location</strong>
            <br />
            <span>{profileData.address}</span>
          </div>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <div>
            <strong>LinkedIn</strong>
            <br />
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="contact-item">
          <FaGithub />
          <div>
            <strong>GitHub</strong>
            <br />
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>

      <section style={{ marginTop: "2em" }}>
        <h2>Work Preferences</h2>
        <ul>
          <li>
            <strong>Work Type:</strong> Remote / Hybrid
          </li>
          <li>
            <strong>Availability:</strong> Open to new opportunities
          </li>
          <li>
            <strong>Experience Level:</strong> Senior (8+ years)
          </li>
          <li>
            <strong>Preferred Stack:</strong> React, Next.js, Node.js,
            TypeScript, PostgreSQL
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
