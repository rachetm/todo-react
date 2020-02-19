import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    return (
      <Grid item>
        <Paper elevation={2}>
          <Grid container alignItems="center" justify="center" >
            <Grid item sm={1}>
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                checked={this.props.checked}
                onClick={() => this.props.check(this.props.id)}
              />
            </Grid>
            <Grid item sm={10}>
              <Typography className={this.props.checked ? "checked" : ""} variant="body1">
                {this.props.content}
              </Typography>
            </Grid>
            <Grid item sm={1}>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => this.props.onDel(this.props.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

Item.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  content: PropTypes.string,
  check: PropTypes.func,
  onDel: PropTypes.func
};

export default Item;