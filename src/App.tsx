/**
 * Main App component for the portfolio website.
 * Renders all page sections in a single-page layout.
 *
 * @component
 * @returns {JSX.Element} The main application component
 */
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

/**
 * Root component of the portfolio application.
 * Composes all section components into a single-page layout.
 */
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Certifications />
      <Form />
      <Footer />
    </>
  );
}

export default App;
