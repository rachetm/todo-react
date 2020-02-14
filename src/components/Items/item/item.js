import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";

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

Item.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.string,
  check: PropTypes.func,
  onDel: PropTypes.func
}

export default Item;
