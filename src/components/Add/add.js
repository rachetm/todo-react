/* eslint-disable react/prop-types */
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(e) {
    if (e.keyCode === 13 && !/^\s*$/.test(e.target.value)) {
      this.props.onAdd(e.target.value);
      e.target.value = null;
    }
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div id="add-list">
        <TextField
          id="add-todo-field"
          label="Add an item"
          className="add-todo"
          onKeyUp={this.onKeyUp}
          autoFocus={true}
        />
        <Button
          variant="contained"
          id="addBtn"
          onClick={() => {
            if (!/^\s*$/.test(this.state.value)) {
              this.props.onAdd(this.state.value);
            }
          }}
        >
          <i className="fas fa-plus"></i>Add
        </Button>
      </div>
    );
  }
}

export default Add;
