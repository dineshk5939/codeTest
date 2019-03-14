import React from "react";
import Item from "./Item";

export const List = props => {
  return props.list.map((item, index) => <Item item={item} key={index} />);
};
