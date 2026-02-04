import {
  Box,
  Container,
  IconButton,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { profileData } from "../../data/profileData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      className="bg-footer-bg text-footer-text py-8 mt-auto"
      sx={{ backgroundColor: "#494e52", color: "#bebcbc" }}
    >
      <Container maxWidth="lg" className="text-center">
        <Box className="flex justify-center gap-4 mb-4">
          <IconButton
            component="a"
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-footer-text hover:text-white transition-colors"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-footer-text hover:text-white transition-colors"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href={`mailto:${profileData.email}`}
            aria-label="Email"
            className="text-footer-text hover:text-white transition-colors"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ color: "#bebcbc" }}>
          © {currentYear} {profileData.name}. Powered by{" "}
          <MuiLink
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            Vite
          </MuiLink>{" "}
          &{" "}
          <MuiLink
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            React
          </MuiLink>
          . Styled with{" "}
          <MuiLink
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            Tailwind CSS
          </MuiLink>{" "}
          &{" "}
          <MuiLink
            href="https://mui.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#bebcbc", "&:hover": { color: "#fff" } }}
          >
            Material UI
          </MuiLink>
          .
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
