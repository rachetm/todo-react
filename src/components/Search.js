import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import { searchTodo } from "../actions/actions";
import PropTypes from "prop-types";

function Search(props) {
  return (
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
