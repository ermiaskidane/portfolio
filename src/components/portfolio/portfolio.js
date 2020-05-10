import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Sprite from "../../assets/sprite.svg";
// import SubPortfolio from "../subportfolio/subportfolio";
// import Model from "../model/model";
// import Backdrop from "../backdrop/backdrop";

// import Coffee1 from "../../assets/coffee-1.jpg";
import Coffee1 from "../../assets/mega-food (Custom).png";

import Coffee2 from "../../assets/coffee-2.jpg";
// import Coffee3 from "../../assets/coffee-3.jpg";
// import Coffee4 from "../../assets/coffee-4.jpg";
// import CoffeeShop from "../../assets/coffee-shop-1.jpg";
// import Tea1 from "../../assets/tea-1.jpg";
// import Tea2 from "../../assets/tea-2.jpg";
// import Tea3 from "../../assets/tea-3.jpg";
import "./portfolio.scss";

class Portfolio extends Component {
  state = {
    open: false,
    pro2: false,
    pro3: false,
    show: false,
  };

  //#######
  // notice for the first project I use onclick method to direct me to github but
  // others project is using <a> tag
  directGithub = () => {
    this.props.history.createHref(
      (window.location = "https://github.com/ermiaskidane/takeaway")
    );
  };

  //### here what I am doing is onClick of the MegaHandler, makes "open" true then rerender my singleApp.This triggers image and circle-with-cross to open. not only this the "open" also triggers to run assignedClasses1 so that it make sures the value takes "subportfolio" instead of "subPortfolioClose". The same does apply for the others

  MegaHandler = () => {
    this.setState((prevState) => {
      return {
        open: !prevState.open,
      };
    });
  };

  proj2Handler = () => {
    this.setState((prevState) => {
      return {
        pro2: !prevState.pro2,
      };
    });
  };

  modelClosedHandler = () => {
    this.setState({ show: false });
  };
  render() {
    console.log(this.state.open);
    console.log(this.state.show);
    let singleApp = null;
    let proj2 = null;

    if (this.state.open) {
      singleApp = (
        <figure className="subPortfolio__content--img">
          <img src={Coffee1} alt="project1" />
          <button id="close" onClick={this.MegaHandler}>
            <svg>
              <use xlinkHref={`${Sprite}#icon-circle-with-cross`} />
            </svg>
          </button>
        </figure>
      );
    } else if (this.state.pro2) {
      proj2 = (
        <figure className="subPortfolio__content--img">
          <img src={Coffee2} alt="project2" />
          <button id="close" onClick={this.proj2Handler}>
            <svg>
              <use xlinkHref={`${Sprite}#icon-circle-with-cross`} />
            </svg>
          </button>
        </figure>
      );
    }

    const assignedClasses1 = [];
    if (this.state.open) {
      assignedClasses1.push("subPortfolio");
    } else {
      assignedClasses1.push("subPortfolioClose");
    }

    const assignedClasses2 = [];
    if (this.state.pro2) {
      assignedClasses2.push("subPortfolio");
    } else {
      assignedClasses2.push("subPortfolioClose");
    }

    return (
      <div className="portfolio">
        <div className="portfolio__header">
          <h1>
            My <span>Portfolio</span>
          </h1>
          <p>
            Lets see a recent desings and projects, want to contact ? email me.
          </p>
        </div>
        <div className="portfolio__body">
          <figure className="portfolio__body--img">
            <NavLink to="/portfolio">
              <img className="project--image" src={Coffee1} alt="project" />
              <figcaption onClick={this.MegaHandler}>
                <h3>Mega Food</h3>
              </figcaption>
            </NavLink>
            <div className={assignedClasses1.join(" ")}>
              <div className="subPortfolio__content">
                {singleApp}
                <div className="subPortfolio__content--detail">
                  <h2>Mega Food</h2>
                  <div className="subPortfolio__content--refer">
                    <p>
                      Mega Food project is a takeaway food shop, a user friendly
                      with a multipage site.The technologies involved in this
                      app are JAVASCRIPT, HTML5, CSS3, REACT and SASS.
                    </p>
                    <div className="subPortfolio__content--button">
                      <button
                        id="github"
                        type="button"
                        onClick={this.directGithub}
                      >
                        github
                      </button>
                      <button id="show">
                        <a href="https://takeaway-food.herokuapp.com">show</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
          <figure className="portfolio__body--img">
            <img className="project--image" src={Coffee2} alt="project" />
            <figcaption onClick={this.proj2Handler}>
              <h3>Linda Shop</h3>
            </figcaption>
            <div className={assignedClasses2.join(" ")}>
              <div className="subPortfolio__content">
                {proj2}
                <div className="subPortfolio__content--detail">
                  <h2>Linda Shop</h2>
                  <div className="subPortfolio__content--refer">
                    <p>
                      {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptates sed reprehenderit omnis corrupti laborum ab
                      enim assumenda, maiores quia molestiae optio atque cum
                      inventore? Dolores fugit mollitia reiciendis nostrum et! */}
                    </p>
                    <div className="subPortfolio__content--button">
                      <button id="github" type="button">
                        <a href="https://github.com/ermiaskidane">github</a>
                      </button>
                      <button id="show">
                        <a href="#">show</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>

          {/* <figure className="portfolio__body--img">
            <img className="project--image" src={Coffee4} alt="project" />
          </figure>
          <figure className="portfolio__body--img">
            <img className="project--image" src={CoffeeShop} alt="project" />
          </figure>
          <figure className="portfolio__body--img">
            <img className="project--image" src={Tea1} alt="project" />
          </figure>
          <figure className="portfolio__body--img">
            <img className="project--image" src={Tea2} alt="project" />
          </figure>
          <figure className="portfolio__body--img">
            <img className="project--image" src={Tea3} alt="project" />
          </figure>
        */}
        </div>
      </div>
    );
  }
}

export default Portfolio;
