import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { profileData } from "../../data/profileData";
import MyImage from "/src/assets/me.png";

const Sidebar = () => {
  // Get initials for profile placeholder
  const initials = profileData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Box
      component="aside"
      className="w-full lg:w-64 lg:flex-shrink-0 lg:pr-8 lg:border-r border-border mb-8 lg:mb-0 text-center lg:text-left"
      sx={{
        position: { lg: "sticky" },
        top: { lg: 100 }, // 80px from the top for desktop
        alignSelf: { lg: "flex-start" },
        zIndex: 2,
      }}
    >
      <Box>
        {/* Profile Avatar */}
        <Avatar
          className="mx-auto lg:mx-0 mb-4"
          sx={{
            width: 160,
            height: 160,
            fontSize: "3.5rem",
            fontWeight: 700,
            background: "linear-gradient(135deg, #52adc8, #3d8ba3)",
            border: "4px solid #e6e6e6",
            margin: { xs: "0 auto 1rem", lg: "0 0 1rem 0" },
          }}
        >
          <img src={MyImage} />
        </Avatar>

        {/* Name and Title */}
        <Typography
          variant="h5"
          className="font-bold text-text mb-1"
          sx={{ fontWeight: 700 }}
        >
          {profileData.name}
        </Typography>
        <Typography
          variant="body2"
          className="italic mb-4"
          sx={{ color: "#7a8288", fontStyle: "italic", marginBottom: 2 }}
        >
          {profileData.title}
        </Typography>

        {/* Location */}
        <Box
          className="flex items-center justify-center lg:justify-start gap-2 mb-4"
          sx={{ color: "#7a8288" }}
        >
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">
            {profileData.address.split(",")[0]}
          </Typography>
        </Box>

        <Divider className="my-4" />

        {/* Social Links */}
        <List dense className="flex flex-wrap justify-center lg:block gap-2">
          <ListItem
            component="a"
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-sidebar-bg rounded-lg transition-colors cursor-pointer"
            sx={{
              color: "#494e52",
              "&:hover": { backgroundColor: "#f2f3f3", color: "#52adc8" },
              padding: "8px 12px",
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <GitHubIcon sx={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="GitHub" />
          </ListItem>

          <ListItem
            component="a"
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-sidebar-bg rounded-lg transition-colors cursor-pointer"
            sx={{
              color: "#494e52",
              "&:hover": { backgroundColor: "#f2f3f3", color: "#52adc8" },
              padding: "8px 12px",
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <LinkedInIcon sx={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>

          <ListItem
            component="a"
            href={`mailto:${profileData.email}`}
            className="hover:bg-sidebar-bg rounded-lg transition-colors cursor-pointer"
            sx={{
              color: "#494e52",
              "&:hover": { backgroundColor: "#f2f3f3", color: "#52adc8" },
              padding: "8px 12px",
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <EmailIcon sx={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>

          <ListItem
            component="a"
            href={`tel:${profileData.phone}`}
            className="hover:bg-sidebar-bg rounded-lg transition-colors cursor-pointer"
            sx={{
              color: "#494e52",
              "&:hover": { backgroundColor: "#f2f3f3", color: "#52adc8" },
              padding: "8px 12px",
              borderRadius: 1,
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <PhoneIcon sx={{ color: "inherit" }} />
            </ListItemIcon>
            <ListItemText primary="Phone" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
