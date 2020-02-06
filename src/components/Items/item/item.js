/* eslint-disable react/prop-types */
import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

class Item extends React.Component {
  render() {
    return (
      <div className="item-container">
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          checked={this.props.checked}
          onClick={() => this.props.check(this.props.id)}
        />
        <p className={this.props.checked? "checked" : ""}>{this.props.content}</p>
        <Button
          variant="contained"
          color="primary"
          id="btn-danger"
          onClick={() => this.props.onDel(this.props.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </Button>
      </div>
    );
  }
}

export default Item;
