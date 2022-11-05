import "./App.css";
import HobbiesSection from "./HobbiesSection/HobbiesSection";
import AboutSection from "./AboutSection/AboutSection";
import WorkingExpirience from "./WorkingExpirience/WorkingExpirience";
import SkillsSection from "./SkillsSection/SkillsSection";
import user from "./user.json";

function App() {
  const {
    firstName,
    lastName,
    city,
    age,
    email,
    skype,
    hobbies,
    educations: { university, speciality },
    workingExpirience: [...work],
    languages,
    skills,
  } = user;
  return (
    <main className="App">
      <AboutSection
        firstName={firstName}
        lastName={lastName}
        city={city}
        age={age}
        email={email}
        skype={skype}
        languages={languages}
        university={university}
        speciality={speciality}
      />
      <HobbiesSection hobbies={hobbies} />
      <WorkingExpirience work={work} />
      <SkillsSection skills={skills} />
    </main>
  );
}

export default App;
