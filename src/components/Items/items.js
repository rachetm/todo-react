import React from "react";
import Item from "./item/item";

function Items(props){
    let unchecked_items = [];
    let checked_items = [];

    props.items.forEach(item => {
        if (item.checked === true)
            checked_items.push(
                <Item key={item.id} {...item} onDel={props.onDel} check={props.onCheck}/>
            );
        else
                unchecked_items.push(
                    <Item key={item.id} {...item} onDel={props.onDel} check={props.onCheck}/>
                );
    })
    return unchecked_items.concat(checked_items)
}

export default Items;