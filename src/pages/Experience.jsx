import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import FolderIcon from "@mui/icons-material/Folder";
import { experience } from "../data/profileData";

const Experience = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          marginBottom: 4,
          color: "#494e52",
          borderBottom: "none",
        }}
      >
        Professional Experience
      </Typography>

      <Box className="space-y-6">
        {experience.map((job, index) => (
          <Card
            key={job.id}
            elevation={0}
            sx={{
              border: "1px solid #e6e6e6",
              borderRadius: 2,
              overflow: "visible",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              },
              transition: "box-shadow 0.3s ease",
            }}
          >
            <CardContent sx={{ padding: 3 }}>
              {/* Header */}
              <Box className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, marginBottom: 0.5 }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#52adc8", fontWeight: 600 }}
                  >
                    @ {job.company}
                  </Typography>
                </Box>
                <Chip
                  label={job.duration}
                  variant="outlined"
                  size="small"
                  sx={{
                    borderColor: "#52adc8",
                    color: "#52adc8",
                    fontWeight: 500,
                  }}
                />
              </Box>

              {/* Meta Info */}
              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                useFlexGap
                sx={{ marginBottom: 2, color: "#7a8288" }}
              >
                <Box className="flex items-center gap-1">
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body2">{job.location}</Typography>
                </Box>
                <Box className="flex items-center gap-1">
                  <BusinessIcon fontSize="small" />
                  <Typography variant="body2">{job.type}</Typography>
                </Box>
                {job.project && (
                  <Box className="flex items-center gap-1">
                    <FolderIcon fontSize="small" />
                    <Typography variant="body2">
                      Project: {job.project}
                    </Typography>
                  </Box>
                )}
              </Stack>

              <Divider sx={{ marginBottom: 2 }} />

              {/* Responsibilities */}
              <Box
                component="ul"
                sx={{ paddingLeft: 0, listStyle: "none", margin: 0 }}
              >
                {job.responsibilities.map((item, idx) => (
                  <Box
                    key={idx}
                    component="li"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      padding: "6px 0",
                    }}
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
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
