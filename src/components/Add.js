import React, {useState} from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addTodo } from "../actions/actions";
import PropTypes from 'prop-types';


function Add(props){

  const [value, setValue] = useState("");

  function onKeyDown(e) {
    if (e.keyCode === 13 && !/^\s*$/.test(e.target.value)) {
      props.addTodo(e.target.value);
      setValue("");
    }
  }

  function onClick() {
    if (!/^\s*$/.test(value)) {
      props.addTodo(value);
      setValue("");
    }
  }

  return (
    <div>
      <div id="add-list">
        <TextField
          id="add-todo-field"
          label="Add an item"
          className="add-todo"
          onKeyDown={e => onKeyDown(e)}
          onChange={e => {
            setValue(e.target.value);
          }}
          value={value}
          autoFocus={true}
        />
        <Button variant="contained" id="addBtn" onClick={() => onClick()}>
          <i className="fas fa-plus"></i>Add
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => dispatch(addTodo(id))
  };
};

Add.propTypes = {
  addTodo: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);