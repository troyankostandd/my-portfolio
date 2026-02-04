import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { profileData } from "../../data/profileData";

const navItems = [
  { label: "About", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Skills", path: "/skills" },
  { label: "CV", path: "/cv" },
  { label: "Contact", path: "/contact" },
];

const Header = ({ mode, toggleMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="bg-white border-b border-border"
      sx={{ backgroundColor: "white", borderBottom: "1px solid #e6e6e6" }}
    >
      <Toolbar className="max-w-6xl mx-auto w-full px-4">
        <Link
          to="/"
          className="text-xl font-bold text-text no-underline hover:text-primary transition-colors"
        >
          {profileData.name}
        </Link>

        <Box className="flex-1" />

        {/* Desktop Navigation */}
        <Box className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `py-2 px-1 text-sm font-medium no-underline transition-all border-b-2 ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-text border-transparent hover:text-primary hover:border-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Tooltip
            title={
              mode === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <IconButton
              color="primary"
              onClick={toggleMode}
              sx={{ ml: 2 }}
              aria-label="toggle theme"
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          className="md:hidden"
          onClick={toggleMenu}
          sx={{ display: { md: "none" }, color: "#494e52" }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={closeMenu}
          sx={{ display: { md: "none" } }}
        >
          <Box className="w-64 p-4">
            <Box className="flex justify-end mb-4">
              <IconButton onClick={closeMenu}>
                <CloseIcon />
              </IconButton>
            </Box>
            <List>
              {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={closeMenu}
                    sx={{
                      "&.active": {
                        backgroundColor: "#f2f3f3",
                        color: "#52adc8",
                        borderLeft: "3px solid #52adc8",
                      },
                    }}
                  >
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
