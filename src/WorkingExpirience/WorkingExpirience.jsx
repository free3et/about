import React from "react";
import "./WorkingExpirience.css";
import user from "../user.json";

const WorkingExpirience = () => {
  const {
    firstName,
    lastName,
    city,
    age,
    email,
    skype,
    hobbies: [...hobbie],
    educations: { university, speciality },
    workingExpirience: [...work],
    skills: [...skill],
    languages: [...language],
  } = user;
  return (
    <>
      <section className="working_expirience_area">
        <div className="tab-pane">
          <ul className="list">
            {work.map((item, index) => {
              return (
                <li key={index}>
                  <span></span>
                  <div className="tab-media">
                    <p>{item.duration}</p>

                    <div className="tab-media-body">
                      <h4>{item.company}</h4>
                      <p>{item.position}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default WorkingExpirience;
