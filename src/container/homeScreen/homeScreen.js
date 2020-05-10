import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Sprite from "../../assets/sprite.svg";

import Profile from "../../assets/eru-2 (Custom).jpg";
import "./homeScreen.scss";

class HomeScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="homeScreen">
        <div className="homeScreen__content">
          <figure className="homeScreen__content--img">
            <img src={Profile} alt="profile" />
          </figure>
          <div className="homeScreen__content--detail">
            <h4>Hi There!</h4>
            <h2>I'M a FullStack Developer</h2>
            <p>
              I am a FullStack Developer who fall in love with programming based
              in Leicester, Uk. I enjoy writing code, Like to explore a new
              technologies and passionate about web development. I build a web
              application which passed through careful attention and
              understanding the mechanism of code.
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tempora provident nobis cum sint vero vel rerum, repellat porro
              veritatis nemo? Dolorem iste nulla, quas in, repellendus maiores
              aspernatur quibusdam obcaecati commodi atque magni amet. */}
            </p>
            <div className="homeScreen__content--buttons">
              <button id="Button--user">
                <NavLink to="/about" className="button__user--link">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-user`} />
                    </svg>
                  </span>
                  More About me
                </NavLink>
              </button>
              <button id="Button--suitcase">
                <NavLink to="/portfolio" className="button__suitcase--link">
                  <span>
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-suitcase`} />
                    </svg>
                  </span>
                  Portfolio
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
