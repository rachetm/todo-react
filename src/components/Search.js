/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import TextField from "@material-ui/core/TextField";
import {searchTodo} from '../actions/actions' ;

function Search(props){
    return (
      <div id="searchField">
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

export default connect(null, mapDispatchToProps)(Search);