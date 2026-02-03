import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import TranslateIcon from "@mui/icons-material/Translate";
import WorkIcon from "@mui/icons-material/Work";
import { profileData, education } from "../data/profileData";

const About = () => {
  const focusAreas = [
    "Building scalable web applications with modern JavaScript/TypeScript stacks",
    "Cloud infrastructure and DevOps practices (AWS, Docker, Kubernetes)",
    "Performance optimization and system reliability",
    "API design and microservices architecture",
    "Database optimization and data management",
    "Team collaboration in distributed, remote-first environments",
  ];

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        className="font-bold mb-6"
        sx={{
          fontWeight: 700,
          marginBottom: 3,
          color: "#494e52",
          borderBottom: "none",
        }}
      >
        About Me
      </Typography>

      <Typography
        variant="body1"
        className="text-lg leading-relaxed mb-8"
        sx={{ fontSize: "1.125rem", lineHeight: 1.8, marginBottom: 4 }}
      >
        {profileData.summary}
      </Typography>

      {/* Education Section */}
      <Box className="mb-8">
        <Box className="flex items-center gap-2 mb-4">
          <SchoolIcon sx={{ color: "#52adc8" }} />
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              borderBottom: "none",
              marginTop: 0,
              paddingBottom: 0,
            }}
          >
            Education
          </Typography>
        </Box>
        {education.map((edu) => (
          <Card
            key={edu.id}
            elevation={0}
            sx={{
              backgroundColor: "#f2f3f3",
              borderLeft: "4px solid #52adc8",
              marginBottom: 2,
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, marginBottom: 0.5 }}
              >
                {edu.university}
              </Typography>
              <Typography
                sx={{ color: "#52adc8", fontWeight: 600, marginBottom: 1 }}
              >
                {edu.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: "#7a8288" }}>
                {edu.location} • {edu.duration}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Languages Section */}
      <Box className="mb-8">
        <Box className="flex items-center gap-2 mb-4">
          <TranslateIcon sx={{ color: "#52adc8" }} />
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              borderBottom: "none",
              marginTop: 0,
              paddingBottom: 0,
            }}
          >
            Languages
          </Typography>
        </Box>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {profileData.languages.map((lang, index) => (
            <Chip
              key={index}
              label={lang}
              variant="outlined"
              sx={{
                borderColor: "#52adc8",
                color: "#52adc8",
                "&:hover": { backgroundColor: "#52adc8", color: "#fff" },
              }}
            />
          ))}
        </Stack>
      </Box>

      {/* Professional Focus Section */}
      <Box>
        <Box className="flex items-center gap-2 mb-4">
          <WorkIcon sx={{ color: "#52adc8" }} />
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 700,
              borderBottom: "none",
              marginTop: 0,
              paddingBottom: 0,
            }}
          >
            Professional Focus
          </Typography>
        </Box>
        <Box
          component="ul"
          className="space-y-2 pl-0"
          sx={{ listStyle: "none", padding: 0 }}
        >
          {focusAreas.map((area, index) => (
            <Box
              key={index}
              component="li"
              className="flex items-start gap-3 py-2"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 1.5,
                padding: "8px 0",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#52adc8",
                  marginTop: "8px",
                  flexShrink: 0,
                }}
              />
              <Typography>{area}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
