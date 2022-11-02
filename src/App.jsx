import reactLogo from "./assets/react.svg";
import "./App.css";
import user from "./user.json";

function App() {
  const {
    firstName,
    lastName,
    city,

    hobbies: [...hobbie],
    educations: { university, speciality },
    workingExpirience: [...work],
    skills: [...skill],
    languages: [...language],
  } = user;
  return (
    <main className="App">
      <h1>About me</h1>

      <table border="1">
        <tbody>
          <tr>
            <td>Name / Surname</td>
            <td>
              {firstName} {lastName}
            </td>
          </tr>

          <tr>
            <td>City</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>
              <ul className="three-column">
                {hobbie.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Education</td>
            <td>{university}</td>
          </tr>
          <tr>
            <td>Speciality</td>
            <td>{speciality}</td>
          </tr>
          <tr>
            <td>Skills</td>
            <td>
              <ul className="three-column">
                {skill.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Working Expirience</td>
            <td>
              <ul className="border-list">
                {work.map((item) => {
                  return (
                    <ul key={item.company}>
                      <li>
                        <strong>Company:&nbsp;</strong> {item.company}
                      </li>
                      <li>
                        <strong>Duration:&nbsp;</strong> {item.duration}
                      </li>
                      <li>
                        <strong>Position:&nbsp;</strong> {item.position}
                      </li>
                    </ul>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>
              <ul>
                {language.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default App;
