import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { profileData } from "../../data/profileData";

const Sidebar = () => {
  // Get initials for profile placeholder
  const initials = profileData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-placeholder">{initials}</div>

        <h3>{profileData.name}</h3>
        <p className="bio">{profileData.title}</p>

        <p className="location">
          <FaMapMarkerAlt style={{ marginRight: "0.5em" }} />
          {profileData.address.split(",")[0]}
        </p>

        <div className="social-links">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href={`mailto:${profileData.email}`}>
            <FaEnvelope /> Email
          </a>
          <a href={`tel:${profileData.phone}`}>
            <FaPhone /> Phone
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
