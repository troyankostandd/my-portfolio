import { Box, Typography, Card, CardContent, Chip, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import WebIcon from "@mui/icons-material/Web";
import BuildIcon from "@mui/icons-material/Build";
import { skills, skillsIntro } from "../data/profileData";

const iconMap = {
  "Programming Languages": <CodeIcon />,
  "Databases & Data Search": <StorageIcon />,
  "Cloud & DevOps": <CloudIcon />,
  "Frameworks and Libraries": <WebIcon />,
  "Other Technologies": <BuildIcon />,
};

const Skills = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          marginBottom: 2,
          color: "#494e52",
          borderBottom: "none",
        }}
      >
        Technical Skills
      </Typography>

      <Typography
        variant="body1"
        sx={{ marginBottom: 4, color: "#7a8288", fontSize: "1.1rem" }}
      >
        {skillsIntro}
      </Typography>

      <Grid container spacing={3}>
        {Object.values(skills).map((category, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                backgroundColor: "#f2f3f327",
                // borderLeft: "4px solid #52adc8",
                border: "1px solid #e6e6e6",
                borderRadius: 2,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent>
                <Box className="flex items-center gap-2 mb-3">
                  <Box sx={{ color: "#52adc8" }}>
                    {iconMap[category.title] || <CodeIcon />}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#3d8ba3" }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: "#fff3",
                        border: "1px solid #e6e6e6",
                        // color: "#494e52",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "#52adc8",
                          color: "#fff",
                          borderColor: "#52adc8",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
