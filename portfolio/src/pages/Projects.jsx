import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Stack,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

// Import images from assets/projects
import imgSquareup from "../assets/projects/developer.squareup.com.png";
import imgSpotify from "../assets/projects/engineering.atspotify.com.png";
import imgLine from "../assets/projects/engineering.linecorp.com.png";
import imgSchibsted from "../assets/projects/schibsted-vend.pl.png";
import imgBigeng from "../assets/projects/www.bigeng.io.png";
import imgEventbrite from "../assets/projects/www.eventbrite.com.png";
import imgHostinger from "../assets/projects/www.hostinger.com.png";

// Example portfolio projects (replace with your real projects)
const projects = [
  {
    title: "Squareup Developer Portal",
    description:
      "Developer portal for Squareup, providing API documentation and tools for payment integration.",
    tech: ["React", "Next.js", "Node.js", "API"],
    github: "https://github.com/troyankostandd",
    image: imgSquareup,
    live: "https://developer.squareup.com",
  },
  {
    title: "Spotify Engineering Blog",
    description:
      "Engineering blog platform for Spotify, featuring articles on backend, frontend, and data engineering.",
    tech: ["React", "Gatsby", "GraphQL"],
    github: "https://github.com/troyankostandd",
    image: imgSpotify,
    live: "https://engineering.atspotify.com",
  },
  {
    title: "LINE Engineering",
    description:
      "Technical blog and showcase for LINE's engineering team, covering large-scale messaging infrastructure.",
    tech: ["Vue.js", "Nuxt.js", "Node.js"],
    github: "https://github.com/troyankostandd",
    image: imgLine,
    live: "https://engineering.linecorp.com",
  },
  {
    title: "Schibsted Vend Platform",
    description:
      "E-commerce platform for Schibsted, supporting high-traffic classified ads and secure transactions.",
    tech: ["React", "Redux", "Node.js", "AWS"],
    github: "https://github.com/troyankostandd",
    image: imgSchibsted,
    live: "https://schibsted-vend.pl",
  },
  {
    title: "BigEng.io Blog",
    description:
      "Engineering blog for BigEng.io, focused on distributed systems, cloud, and DevOps best practices.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/troyankostandd",
    image: imgBigeng,
    live: "https://www.bigeng.io",
  },
  {
    title: "Eventbrite Engineering",
    description:
      "Showcase of Eventbrite's engineering projects, including event management and ticketing solutions.",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/troyankostandd",
    image: imgEventbrite,
    live: "https://www.eventbrite.com",
  },
  {
    title: "Hostinger Tech Blog",
    description:
      "Technical blog for Hostinger, sharing insights on web hosting, scaling, and performance optimization.",
    tech: ["React", "Gatsby", "GraphQL", "Cloud"],
    github: "https://github.com/troyankostandd",
    image: imgHostinger,
    live: "https://www.hostinger.com",
  },
];

const Projects = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
        Projects
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        Selected projects and products I've built or contributed to as a full
        stack developer.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <Card
              elevation={1}
              sx={{
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" gap={1} mb={1}>
                  <WorkIcon color="primary" />
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {project.title}
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
                <Stack direction="row" spacing={1}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Chip
                      icon={<GitHubIcon />}
                      label="View on GitHub"
                      clickable
                    />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Chip
                        icon={<LanguageIcon />}
                        label="Live Demo"
                        clickable
                        color="primary"
                        sx={{ ml: 1 }}
                      />
                    </a>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
