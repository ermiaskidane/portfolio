import React from "react";
import { NavLink } from "react-router-dom";

import "./contact.scss";
import Sprite from "../../assets/sprite.svg";

const contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1>
          Get <span>In Touch</span>
        </h1>
        <p>I'M always open to discussing product desing work or partnerShips</p>
      </div>

      <div className="contact__body">
        <div className="contact__body--left">
          <ul className="contact__body--lists">
            <li className="contact__body--item">
              <span>Phone</span>
              <svg>
                <use xlinkHref={`${Sprite}#icon-whatsapp`} />
              </svg>
              <span>+447862005858</span>
            </li>

            <li className="contact__body--item">
              <span>Email</span>
              <svg>
                <use xlinkHref={`${Sprite}#icon-mail`} />
              </svg>
              <span>Hadeklte21@gmail.com</span>
            </li>

            <li className="contact__body--item">
              <span>Instagram</span>
              <svg>
                <use xlinkHref={`${Sprite}#icon-instagram-with-circle`} />
              </svg>
              <span>eriKidane</span>
            </li>
            <li className="contact__body--item">
              <span>Github</span>
              <svg>
                <use xlinkHref={`${Sprite}#icon-github`} />
              </svg>
              <span>Ermiaskidane</span>
            </li>
            <li className="contact__body--item social--profile">
              <span>Social Profile</span>
              <div className="svg--facebook">
                <NavLink to="/contact">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-facebook`} />
                  </svg>
                </NavLink>
              </div>
              <div className="svg--twitter">
                <NavLink to="/contact">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-twitter`} />
                  </svg>
                </NavLink>
              </div>
              <div className="svg--youtube">
                <NavLink to="/contact">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-youtube`} />
                  </svg>
                </NavLink>
              </div>
              <div className="svg--github">
                <NavLink to="/contact">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-github`} />
                  </svg>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="contact__body--right">
          <div className="contact__body--content">
            <p>
              If you have any suggestion, project to be build or you want to
              contact me ... please fill out the form below and I will reply you
              shortly.
            </p>

            <form className="contact__form" action="#">
              <div className="form__name">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-user`} />
                </svg>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  id="placeholder--padding"
                />
              </div>
              <div className="form__email">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-mail`} />
                </svg>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  id="placeholder--padding"
                />
              </div>

              <div className="form__comment">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-chat`} />
                </svg>
                <textarea
                  name="message"
                  placeholder="YOUR MESSAGE"
                  id="placeholder--padding"
                ></textarea>
              </div>
              <div className="form__button">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-paper-plane`} />
                </svg>
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
