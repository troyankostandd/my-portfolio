import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ mode, toggleMode }) => {
  return (
    <Box className="min-h-screen flex flex-col">
      <Header mode={mode} toggleMode={toggleMode} />
      <Container maxWidth="lg" component="main" className="flex-1 py-8">
        <Box className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <Box className="flex-1 max-w-3xl">
            <Outlet />
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
