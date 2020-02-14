import React from 'react';
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import {searchTodo} from '../actions/actions' ;
import PropTypes from "prop-types";

function Search(props){
    return (
      <div id="searchField">
        <i className="fas fa-search"></i>
        <TextField
          id="search-todo-field"
          label="Search"
          className="search-todo"
          onChange={e => {
            props.searchTodo(e.target.value);
          }}
        />
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
    searchTodo: keyword => dispatch(searchTodo(keyword))
  };
};

Search.propTypes = {
  searchTodo: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Search);