import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

const getBaseTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#f48fb1" : "#9c27b0",
      },
      background: {
        default: mode === "dark" ? "#181c20" : "#f6f8fa",
        paper: mode === "dark" ? "#23272f" : "#fff",
      },
      text: {
        primary: mode === "dark" ? "#e3e3e3" : "#494e52",
        secondary: mode === "dark" ? "#b0b8c1" : "#7a8288",
      },
    },
    typography: {
      fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 8,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          },
        },
      },
    },
  });

function App() {
  const [mode, setMode] = useState("light");
  const theme = React.useMemo(() => getBaseTheme(mode), [mode]);
  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Layout mode={mode} toggleMode={toggleMode} />}
          >
            <Route index element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="cv" element={<CV />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
