import React from "react";
import user from "../user.json";
import photo from "./me.jpg";
import "./AboutSection.css";

const AboutSection = () => {
  const {
    firstName,
    lastName,
    city,
    age,
    email,
    skype,
    educations: { university, speciality },
    languages: [...language],
  } = user;
  return (
    <section className="home_banner">
      <div className="container">
        <div className="banner_inner">
          <div className="banner_content">
            <div className="media">
              <img src={photo} alt="" />

              <div className="media-body">
                <div className="personal_text">
                  <h6>Hello Everybody, i am</h6>
                  <h3>
                    {firstName} {lastName}
                  </h3>
                  <h4>Junior Frontend Developer</h4>
                  <ul className="list basic_info">
                    <li>
                      <i class="fa-regular fa-calendar"></i>Age: {age}
                    </li>
                    <li>
                      <i class="fa-solid fa-house-user"></i>City: {city}
                    </li>
                    <li>
                      <i class="fa-regular fa-envelope"></i>Email: {email}
                    </li>
                    <li>
                      <i class="fa-brands fa-skype"></i>Skype: {skype}
                    </li>

                    <li>
                      <i class="fa-solid fa-building-columns"></i>Education:{" "}
                      {university}
                    </li>
                    <li>
                      <i class="fa-solid fa-leaf"></i>Speciality: {speciality}
                    </li>
                    {language.map((item) => (
                      <li key={item}>
                        <i class="fa-solid fa-language"></i>Language: {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
