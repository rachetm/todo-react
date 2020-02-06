import React from "react";
import Item from "./item/item";
import { connect } from "react-redux";
import { mark_checked, removeTodo} from "../../actions/actions";

function Items(props){
    let unchecked_items = [];
    let checked_items = [];
    const {items=[], filtered_items = []} = props;
    const itemsToRender = filtered_items.length ? filtered_items : items;
    
    itemsToRender.forEach(item => {
        if (item.checked === true)
            checked_items.push(
                <Item key={item.id} {...item} onDel={props.onDel} check={props.check}/>
            );
        else
                unchecked_items.push(
                    <Item key={item.id} {...item} onDel={props.onDel} check={props.check}/>
                );
    })
    return unchecked_items.concat(checked_items)
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