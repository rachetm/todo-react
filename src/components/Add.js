/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addTodo } from "../actions/actions";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.value = "";

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode === 13 && !/^\s*$/.test(e.target.value)) {
      this.props.addTodo(this.value);
      // this.value = "";
    }
  }
  
  onClick() {
    if (!/^\s*$/.test(this.value)) {
      this.props.addTodo(this.value);
    }
  }

  render() {
    return (
      <div id="add-list">
        <TextField
          id="add-todo-field"
          label="Add an item"
          className="add-todo"
          onKeyDown={(e) => this.onKeyDown(e)}
          onChange={(e) => {
            this.value = e.target.value;
            }}
        />
        <Button variant="contained" id="addBtn" onClick={this.onClick}>
          <i className="fas fa-plus"></i>Add
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => dispatch(addTodo(id))
  };
};


export default connect(null, mapDispatchToProps)(Add);
