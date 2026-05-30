import Contact from "./components/Contact";
import Experience from "./components/Experience.JSX";
import HeaderLeft from "./components/HeaderLeft";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-gray-900">
      <HeaderLeft />
      <div className="flex-3">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
export default App;
