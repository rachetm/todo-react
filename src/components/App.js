import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Add from "./Add";
import Items from "./Items/items";
import Search from "./Search";
import Counter from "./Counter";
import PropTypes from "prop-types";
class App extends React.Component {
  render() {
    return (
      <>
        <Grid container direction="column">
          <Typography variant="h1" gutterBottom className="title">
            Todo
          </Typography>
          <Grid container style={{ flex: "1", flexWrap: "nowrap" }}>
            <Grid
              container
              item
              sm={6}
              direction="column"
              style={{ flex: "1" }}
            >
              <Add />
              <Counter />
            </Grid>
            <Grid container item sm={6} direction="column" alignItems="center">
              <Search />
              <Grid
                container
                item
                direction="column"
                spacing={2}
                sm={10}
                style={{
                  marginTop: "5%",
                  overflow: "auto",
                  flexWrap: "nowrap",
                  flex: "1 1 1px",
                  marginBottom: "20px"
                }}
              >
                <Items />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

App.propTypes = {
  title: PropTypes.string
};

export default App;