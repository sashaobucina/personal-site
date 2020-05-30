import React, { Component } from "react";
import HeaderNoToggle from "./HeaderNoToggle";
import HeaderWithToggle from "./HeaderWithToggle";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, collapseID: "" };
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  toggleCollapse = (collapseId) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseId ? collapseId : "",
    }));
  };

  render() {
    const { collapseID, width } = this.state;

    return (
      <header>
        {width >= 900 ? (
          <HeaderNoToggle />
        ) : (
          <HeaderWithToggle
            collapseID={collapseID}
            toggleHandler={this.toggleCollapse}
          />
        )}
      </header>
    );
  }
}

export default Header;
