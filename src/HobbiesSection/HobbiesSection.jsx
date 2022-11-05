import React from "react";
import "./HobbiesSection.css";

const HobbiesSection = ({ hobbies }) => {
  return (
    <>
      <section className="white_fullwidth_area">
        <div className="container">
          <div className="row white_fullwidth_inner">
            <div className="welcome_text">
              <h4>Hobbies</h4>
              <ul className="three-column">
                {hobbies.map((item) => (
                  <li key={item}>
                    <i class="fa-regular fa-star"></i>
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

export default HobbiesSection;
