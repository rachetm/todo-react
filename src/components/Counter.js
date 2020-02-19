import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function Counter(props) {
  const { totalCount, doneCount, notDoneCount } = props;
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        style={{ marginTop: "10%" }}
        direction="column"
      >
        <Grid
          container
          item
          spacing={2}
          alignItems="baseline"
          justify="space-between"
          sm={3}
        >
          <Grid item>
            <Typography variant="h2">
              {totalCount > 9 ? totalCount : "0" + totalCount}
            </Typography>
          </Grid>
          <Grid container style={{ flex: 1, marginLeft: "4px" }} item>
            <Typography variant="h5">
              Todo{totalCount > 1 || totalCount === 0 ? "s" : ""}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="baseline"
          justify="space-between"
          sm={3}
        >
          <Grid item>
            <Typography variant="h2">
              {doneCount > 9 ? doneCount : "0" + doneCount}
            </Typography>
          </Grid>
          <Grid container style={{ flex: 1, marginLeft: "4px" }} item>
            <Typography variant="h5">Done</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          alignItems="baseline"
          justify="space-between"
          sm={3}
        >
          <Grid item>
            <Typography variant="h2">
              {notDoneCount > 9 ? notDoneCount : "0" + notDoneCount}
            </Typography>
          </Grid>
          <Grid container style={{ flex: 1, marginLeft: "4px" }} item>
            <Typography variant="h5">Not Done</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  let totalCount = state.items ? state.items.length : 0,
    doneCount = 0,
    notDoneCount = 0;
  if (state.items)
    state.items.forEach(item => {
      item.checked === true ? doneCount++ : notDoneCount++;
    });
  return { totalCount, doneCount, notDoneCount };
};

Counter.propTypes = {
  totalCount: PropTypes.number,
  doneCount: PropTypes.number,
  notDoneCount: PropTypes.number
};

export default connect(mapStateToProps, null)(Counter);