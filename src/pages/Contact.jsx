import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import SendIcon from "@mui/icons-material/Send";
import { profileData } from "../data/profileData";

const workPreferences = [
  { label: "Work Type", value: "Remote / Hybrid" },
  { label: "Availability", value: "Open to new opportunities" },
  { label: "Experience Level", value: "Senior (8+ years)" },
  {
    label: "Preferred Stack",
    value: "React, Next.js, Node.js, TypeScript, PostgreSQL",
  },
];

const Contact = () => {
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
        Contact
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: 4,
          color: "#7a8288",
          fontSize: "1.1rem",
          lineHeight: 1.7,
        }}
      >
        I'm always open to discussing new opportunities, interesting projects,
        or just connecting with fellow developers. Feel free to reach out
        through any of the following channels:
      </Typography>

      {/* Contact Cards */}
      <Box className="grid md:grid-cols-2 gap-4 mb-8">
        <Card
          elevation={0}
          sx={{
            backgroundColor: "#f2f3f3",
            borderRadius: 2,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent>
            <Typography
              component="a"
              href={`mailto:${profileData.email}`}
              sx={{
                color: "#52adc8",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Box className="flex items-center gap-3">
                <Box
                  sx={{
                    backgroundColor: "#52adc8",
                    borderRadius: "50%",
                    padding: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EmailIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#7a8288" }}>
                    Email
                  </Typography>
                  {profileData.email}
                </Box>
              </Box>
            </Typography>
          </CardContent>
        </Card>

        <Card
          elevation={0}
          sx={{
            backgroundColor: "#f2f3f3",
            borderRadius: 2,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent>
            <Typography
              component="a"
              href={`tel:${profileData.phone}`}
              sx={{
                color: "#52adc8",
                fontWeight: 500,
                // "&:hover": { textDecoration: "underline" },
              }}
            >
              <Box className="flex items-center gap-3">
                <Box
                  sx={{
                    backgroundColor: "#52adc8",
                    borderRadius: "50%",
                    padding: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#7a8288" }}>
                    Phone
                  </Typography>
                  {profileData.phone}
                </Box>
              </Box>
            </Typography>
          </CardContent>
        </Card>

        <Card
          elevation={0}
          sx={{
            backgroundColor: "#f2f3f3",
            borderRadius: 2,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent>
            <Typography
              component="a"
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box className="flex items-center gap-3">
                <Box
                  sx={{
                    backgroundColor: "#52adc8",
                    borderRadius: "50%",
                    padding: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LinkedInIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#7a8288" }}>
                    Linkedin
                  </Typography>
                </Box>
              </Box>
            </Typography>
          </CardContent>
        </Card>

        <Card
          elevation={0}
          sx={{
            backgroundColor: "#f2f3f3",
            borderRadius: 2,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            },
          }}
        >
          <CardContent>
            <Typography
              component="a"
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box className="flex items-center gap-3">
                <Box
                  sx={{
                    backgroundColor: "#52adc8",
                    borderRadius: "50%",
                    padding: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <GitHubIcon sx={{ color: "#fff" }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#7a8288" }}>
                    Github
                  </Typography>
                </Box>
              </Box>
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Work Preferences */}
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
            Work Preferences
          </Typography>
        </Box>
        <Card
          elevation={0}
          sx={{
            backgroundColor: "#f2f3f3",
            borderLeft: "4px solid #52adc8",
            borderRadius: 2,
          }}
        >
          <CardContent>
            <Box className="grid md:grid-cols-2 gap-4">
              {workPreferences.map((pref, index) => (
                <Box key={index}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "#7a8288", marginBottom: 0.5 }}
                  >
                    {pref.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 500, color: "#494e52" }}>
                    {pref.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* CTA */}
      <Box className="text-center mt-8">
        <Button
          variant="contained"
          size="large"
          startIcon={<SendIcon />}
          href={`mailto:${profileData.email}`}
          sx={{
            backgroundColor: "#52adc8",
            "&:hover": { backgroundColor: "#3d8ba3" },
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "1rem",
          }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
