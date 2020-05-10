import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Sprite from "../../assets/sprite.svg";
import "./navigation.scss";

class Navigation extends Component {
  state = {
    open: false
    // checked: false
  };
  openNavHandler = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open
      };
    });
  };

  render() {
    // #### here we are opening and closing the ul tag with assignedClasses and changing menu burger to cancle button with labelClasses
    const assignedClasses = []; 
    const labelClasses = [];
    if (this.state.open) {
      labelClasses.push("navigation__buttonLong");
      assignedClasses.push("show");
    } else {
      assignedClasses.push("hide");
      labelClasses.push("navigation__button");
    }
 
    return (
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label
          htmlFor="navi-toggle"
          className={labelClasses.join(" ")}
          onClick={this.openNavHandler}
        >
          <span className="navigation__icon">&nbsp;</span>

          {/* #### we going to use redirect instead of navlink to adjust the burger menu */}

          <ul className={assignedClasses.join(" ")} htmlFor="navi-toggle">
            <li
              className="navigation__detail--home"
              onClick={this.redirectHome}
            >
              <NavLink to="/">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-home`} />
                </svg>
                <h4>home</h4>
              </NavLink>
            </li>
            <li
              className="navigation__detail--about"
              onClick={this.props.redirectAbout}
            >
              <NavLink to="/about">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-user`} />
                </svg>
                <h4>about</h4>
              </NavLink>
            </li>
            <li
              className="navigation__detail--portfolio"
              onClick={this.props.redirectPortf}
            >
              <NavLink to="/portfolio">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-briefcase`} />
                </svg>
                <h4>portfolio</h4>
              </NavLink>
            </li>
            <li
              className="navigation__detail--contact"
              onClick={this.props.redirectContact}
            >
              <NavLink to="/contact">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-message`} />
                </svg>
                <h4>contact</h4>
              </NavLink>
            </li>
          </ul>
        </label>
      </div>
    );
  }
}

export default Navigation;
