import React from "react";

export const Item = props => {
  return (
    <div style={styles.item}>
      <h1 style={styles.title}>{props.item.title}</h1>
      <img style={styles.image} src={props.item.url} alt={props.item.title} />
    </div>
  );
};

const styles = {
  item: {
    padding: "8px",
    backgroundColor: "#f1f1f1",
    margin: "12px 0"
  },
  title: {
    fontSize: "22px",
    textAlign: "center"
  },
  image: {
    width: "100%"
  }
};

export default Item;
