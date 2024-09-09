import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import CodingProfiles from "./components/codingprofiles/CodingProfiles";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <CodingProfiles />
      <Footer />
    </div>
  );
}

export default App;
