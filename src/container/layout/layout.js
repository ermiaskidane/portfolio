import React, { Component } from "react";

import Navigation from "../../components/navigation/navigation";
import "./layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Navigation />
        <React.Fragment>{this.props.children}</React.Fragment>
      </div>
    );
  }
}

export default Layout;
