/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Add from "./components/Add/add";
import Items from "./components/Items/items";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.check = this.check.bind(this);
  }

  add(content) {
    const items = this.state.items;
    this.setState({
      items: items.concat({
        id: Date.now().toString(),
        content: content,
        checked: false
      })
    });
  }

  delete(id) {
    const items = this.state.items;
    this.setState({
      items: items.filter(item => {
        return item.id !== id;
      })
    })
  }

  check(id){
    const items = this.state.items;
    this.setState({
      items: items.map(item => {
        if(item.id === id)
          item.checked = item.checked? false : true;
        return item;
      })
    })
  }

  render() {
    return (
      <Container maxWidth="sm">
        <h1>{this.props.title}</h1>
        <hr />
        <Add onAdd={this.add} />
        <Items items={this.state.items} onDel={this.delete} onCheck={this.check}/>
      </Container>
    );
  }
}

ReactDOM.render(<App title="Todo" />, document.getElementById("root"));
