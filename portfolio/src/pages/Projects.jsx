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
import { projectsIntro, projects } from "../data/profileData";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Projects = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
        Projects
      </Typography>
      <Typography variant="body1" sx={{ mb: 6 }}>
        {projectsIntro}
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
