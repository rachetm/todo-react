import React from "react";
import Add from "./Add";
import Items from "./Items/items";
import Search from "./Search";
import Counter from "./Counter";
import PropTypes from "prop-types";

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <h1>{this.props.title}</h1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "50%" }}>
            <Add />
            <Counter />
          </div>
          <div style={{ flex: "50%" }}>
            <div style={{ margin: "auto 30%" }}>
              <Search />
            </div>
            <div
              style={{
                margin: "0% 15%",
                maxHeight: "600px",
                overflow: "auto",
                padding: "1%",
                marginTop: "2%"
              }}
            >
              <Items />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
}

export default App;
