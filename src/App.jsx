import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
