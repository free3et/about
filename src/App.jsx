import "./App.css";
import HobbiesSection from "./HobbiesSection/HobbiesSection";
import AboutSection from "./AboutSection/AboutSection";
import WorkingExpirience from "./WorkingExpirience/WorkingExpirience";
import SkillsSection from "./SkillsSection/SkillsSection";

function App() {
  return (
    <main className="App">
      <AboutSection />
      <HobbiesSection />
      <WorkingExpirience />
      <SkillsSection />
    </main>
  );
}

export default App;
