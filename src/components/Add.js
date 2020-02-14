/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addTodo } from "../actions/actions";


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
      />
      <Button variant="contained" id="addBtn" onClick={() => onClick()}>
        <i className="fas fa-plus"></i>Add
      </Button>
    </div>
  );
}



// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     }

//     this.onKeyDown = this.onKeyDown.bind(this);
//     this.onClick = this.onClick.bind(this);
//   }

//   onKeyDown(e) {
//     if (e.keyCode === 13 && !/^\s*$/.test(e.target.value)) {
//       this.props.addTodo(e.target.value);
//       this.setState({
//         value: ""
//       });
//     }
//   }
  
//   onClick() {
//     if (!/^\s*$/.test(this.state.value)) {
//       this.props.addTodo(this.state.value);
//       this.setState({
//         value: ""
//       });
//     }
//   }

//   render() {
//     return (
//       <div id="add-list">
//         <TextField
//           id="add-todo-field"
//           label="Add an item"
//           className="add-todo"
//           onKeyDown={(e) => this.onKeyDown(e)}
//           onChange={(e) => {
//           this.setState({
//             value: e.target.value
//             })
//             }}
//           value={this.state.value}
//         />
//         <Button variant="contained" id="addBtn" onClick={this.onClick}>
//           <i className="fas fa-plus"></i>Add
//         </Button>
//       </div>
//     );
//   }
// }

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

export default connect(mapStateToProps, mapDispatchToProps)(Add);
