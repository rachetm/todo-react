import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import { searchTodo } from "../actions/actions";
import PropTypes from "prop-types";

function Search(props) {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item>
        <TextField
          id="search-todo-field"
          label="Search"
          className="search-todo"
          onChange={e => {
            props.searchTodo(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    searchTodo: keyword => dispatch(searchTodo(keyword))
  };
};

Search.propTypes = {
  searchTodo: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Search);
