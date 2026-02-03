import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
