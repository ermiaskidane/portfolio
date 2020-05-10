import React from "react";
import Profile from "../../assets/eru-2 (Custom).jpg";
import Sprite from "../../assets/sprite.svg";
import "./about.scss";
import "./aboutMedia.scss";

const about = () => {
  return (
    <div className="about">
      {/* ###### start of about me ####### */}
      <div className="about__me">
        <div className="about__me--heading">
          <h1>
            About <span>Me</span>
          </h1>
          <p>I design and code beautiful web apps, And I love what I do.</p>
        </div>
        <div className="about__me--details">
          <figure className="about__me--image">
            <img src={Profile} alt="profile" />
          </figure>
          <div className="about__me--detail">
            <ul className="about__me--lists1">
              <li className="about__me--name">
                First Name <span>Ermias</span>
              </li>
              <li className="about__me--surname">
                Last Name <span>Kidane</span>
              </li>
              <li className="about__me--birthDate">
                Birthdate <span>01 september 1994</span>
              </li>
              <li className="about__me--experience">
                Experience <span>2 Years</span>
              </li>
              <li className="about__me--address">
                Address <span>Leicester</span>
              </li>
            </ul>
            <ul className="about__me--lists2">
              <li className="about__me--freelance">
                Freelance <span>Available</span>
              </li>
              <li className="about__me--language">
                Language <span>English</span>
              </li>
              <li className="about__me--phone">
                Phone <span>+447411844906</span>
              </li>
              <li className="about__me--email">
                Email <span>hadeklte21@gmail.com</span>
              </li>
              <li className="about__me--skype">
                Skype <span>Ermias Kid</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ###### end of about me ####### */}

      {/* ###### start of about background ####### */}
      <div className="about__background">
        <div className="about__background--experience">
          <h2>Experience</h2>
          {/* ###### start of about item ####### */}
          <div className="about__background--item">
            <span className="item-circle"></span>
            <div className="about__background--card card--padding-bottom">
              <div className="about__background--cardheader">
                <div className="card--years">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-calendar`} />
                  </svg>
                  <span>2017-2019</span>
                </div>
                <div className="card--header">
                  <h3>
                    Web Developer <span className="separator"></span>
                    <span>Personal</span>
                  </h3>
                </div>
              </div>
              <div className="about__background--cardbody">
                <p>
                  I was gaining the neccessary skills for web development and
                  most of my work are personal projects.Keeping up with new
                  technologies and strive to make an impressive web application
                  have gained on this time.
                </p>
              </div>
            </div>
            <span className="item-circle2"></span>
          </div>
          {/* #### end of about item ####### */}
        </div>
      </div>
      {/* #### end of about background ####### */}

      {/* ###### start of about skills ####### */}
      <div className="about__skills">
        <div className="about__skills--head">
          <h2>Skills</h2>
        </div>
        <div className="about__skills--body">
          <div className="about__skills--item">
            <h5>React</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="70%"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
          <div className="about__skills--item">
            <h5>Html</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="85%"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div className="about__skills--item">
            <h5>Css</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="80%"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div> 

          <div className="about__skills--item">
            <h5>Javascript</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="60%"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div className="about__skills--item">
            <h5>Node.Js</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="55%"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
          <div className="about__skills--item">
            <h5>Sass</h5>
            <div className="about__skills--progress">
              <div
                className="skills--progressbar"
                data-value="70%"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* ###### end of about skills ####### */}
    </div>
  );
};

export default about;
