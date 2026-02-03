import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profileData } from "../../data/profileData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a
          href={profileData.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={profileData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href={`mailto:${profileData.email}`} aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
      <p>
        © {currentYear} {profileData.name}. Powered by{" "}
        <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
          Vite
        </a>{" "}
        &{" "}
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          React
        </a>
        . Theme inspired by{" "}
        <a
          href="https://academicpages.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Academic Pages
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
