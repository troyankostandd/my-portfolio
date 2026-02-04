import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

import TranslateIcon from "@mui/icons-material/Translate";
import {
  profileData,
  skills,
  experience,
  education,
} from "../data/profileData";

const CV = () => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#494e52",
            borderBottom: "none",
          }}
        >
          Curriculum Vitae
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="/cv.pdf"
          download
          startIcon={<DownloadIcon />}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Download PDF
        </Button>
      </Stack>

      {/* Contact Info */}
      <Box sx={{ marginBottom: 4 }}>
        <Box className="flex items-center gap-2 mb-3">
          <EmailIcon sx={{ color: "#52adc8" }} />
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
            Contact Information
          </Typography>
        </Box>
        <Card
          elevation={0}
          sx={{ backgroundColor: "#f2f3f327", borderRadius: 2 }}
        >
          <CardContent>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "#52adc8" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-primary hover:underline"
                    >
                      {profileData.email}
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon sx={{ color: "#52adc8" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-primary hover:underline"
                    >
                      {profileData.phone}
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon sx={{ color: "#52adc8" }} />
                </ListItemIcon>
                <ListItemText primary={profileData.address} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon sx={{ color: "#52adc8" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon sx={{ color: "#52adc8" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub Profile
                    </a>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>

      {/* Summary */}
      <Box sx={{ marginBottom: 4 }}>
        <Box className="flex items-center gap-2 mb-3">
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
            Professional Summary
          </Typography>
        </Box>
        <Typography sx={{ lineHeight: 1.7 }}>{profileData.summary}</Typography>
      </Box>

      {/* Skills */}
      <Box sx={{ marginBottom: 4 }}>
        <Box className="flex items-center gap-2 mb-3">
          <CodeIcon sx={{ color: "#52adc8" }} />
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
            Technical Skills
          </Typography>
        </Box>
        <Box className="space-y-3">
          {Object.values(skills).map((category, index) => (
            <Box key={index}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, color: "#3d8ba3", marginBottom: 1 }}
              >
                {category.title}
              </Typography>
              <Stack direction="row" flexWrap="wrap" useFlexGap gap={1}>
                {category.items.map((item, idx) => (
                  <Chip
                    key={idx}
                    label={item}
                    size="small"
                    sx={{
                      backgroundColor: "#fff3",
                      border: "1px solid #e6e6e6",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Experience */}
      <Box sx={{ marginBottom: 4 }}>
        <Box className="flex items-center gap-2 mb-3">
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
            Professional Experience
          </Typography>
        </Box>
        <Box className="space-y-4">
          {experience.map((job) => (
            <Card
              key={job.id}
              elevation={0}
              sx={{ border: "1px solid #e6e6e6", borderRadius: 2 }}
            >
              <CardContent>
                <Box className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-2">
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {job.title}{" "}
                    <span style={{ color: "#52adc8" }}>@ {job.company}</span>
                  </Typography>
                  <Chip
                    label={job.duration}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: "#52adc8", color: "#52adc8" }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "#7a8288", marginBottom: 2 }}
                >
                  {job.location} • {job.type}
                  {job.project && ` • Project: ${job.project}`}
                </Typography>
                <Box component="ul" sx={{ paddingLeft: 2, margin: 0 }}>
                  {job.responsibilities.slice(0, 5).map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{ marginBottom: 0.5, display: "flex", gap: 1.5 }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: "#52adc8",
                          marginTop: "8px",
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box sx={{ marginBottom: 4 }}>
        <Box className="flex items-center gap-2 mb-3">
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
              backgroundColor: "#f2f3f327",
              // borderLeft: "4px solid #52adc8",
              border: "1px solid #e6e6e6",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {edu.university}
              </Typography>
              <Typography sx={{ color: "#52adc8", fontWeight: 600 }}>
                {edu.degree}
              </Typography>
              <Typography variant="body2" sx={{ color: "#7a8288" }}>
                {edu.location} • {edu.duration}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Languages */}
      <Box>
        <Box className="flex items-center gap-2 mb-3">
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
        <Stack direction="row" spacing={1}>
          {profileData.languages.map((lang, index) => (
            <Chip
              key={index}
              label={lang}
              sx={{
                backgroundColor: "#52adc8",
                color: "#fff",
                fontWeight: 500,
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CV;
