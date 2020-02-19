import React from "react";
import Item from "./item/item";
import { connect } from "react-redux";
import { mark_checked, removeTodo } from "../../actions/actions";

function Items(props) {
  const unchecked_items = [];
  const checked_items = [];
  const { items = [], filtered_items = [], onDel, check} = props;
  const itemsToRender = filtered_items.length ? filtered_items : items;

  const itemToPush = (item) => {
    const {id} = item;
    return <Item key={id} {...item} onDel={onDel} check={check} />;
  }

  itemsToRender.forEach(item => {
    if (item.checked)
      checked_items.push(
        itemToPush(item)
      );
    else
      unchecked_items.push(
        itemToPush(item)
      );
  });
  return unchecked_items.concat(checked_items);
}

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    check: id => dispatch(mark_checked(id)),
    onDel: id => dispatch(removeTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);