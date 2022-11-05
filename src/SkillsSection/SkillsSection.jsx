import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <>
      <section className="white_fullwidth_area">
        <div className="container">
          <div className="row white_fullwidth_inner">
            <div className="welcome_text">
              <h4>Skills</h4>

              <ul className="three-column">
                {skills.map((item) => (
                  <li key={item}>
                    <i class="fa-solid fa-bolt"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
