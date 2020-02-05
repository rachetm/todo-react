/* eslint-disable react/prop-types */
import React from "react";
import Container from "@material-ui/core/Container";
import Add from "./Add";
import Items from "./Items/items";

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="sm">
        <h1>{this.props.title}</h1>
        <hr />
        <Add/>
        <Items/>
      </Container>
    );
  }
}

export default App;