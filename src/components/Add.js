import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";
import { Grid } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import PlusIcon from "@material-ui/icons/AddRounded";

function Add(props) {
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
    <Grid container spacing={2} justify="center" alignItems="flex-end">
      <Grid item>
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PlusIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" id="addBtn" onClick={onClick}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: id => dispatch(addTodo(id))
  };
};

Add.propTypes = {
  addTodo: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Add);
