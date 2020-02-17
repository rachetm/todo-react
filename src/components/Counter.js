import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <div className="counterContainer">
      <p>
        <span className="countNumber">{props.totalCount}</span> Todos
      </p>
      <p>
        <span className="countNumber">{props.doneCount}</span> Done
      </p>
      <p>
        <span className="countNumber">{props.notDoneCount}</span> Not Done
      </p>
    </div>
  );
}

const mapStateToProps = state => {
  let totalCount = state.items.length,
    doneCount = 0,
    notDoneCount = 0;

  state.items.forEach(item => {
    item.checked === true ? doneCount++ : notDoneCount++;
  });
  return { totalCount, doneCount, notDoneCount };
};

Counter.propTypes = {
  totalCount: PropTypes.number,
  doneCount: PropTypes.number,
  notDoneCount: PropTypes.number
}

export default connect(mapStateToProps, null)(Counter);
