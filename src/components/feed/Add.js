import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedItem: {
        url: "",
        title: ""
      }
    };
  }

  handleInputChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      feedItem: {
        ...prevState.feedItem,
        [eve.target.name]: [eve.target.value]
      }
    }));
  };

  handleAdd = event => {
    event.preventDefault();
    this.props.onNewPost(this.state.feedItem);
  };

  render() {
    return (
      <form style={styles.addForm}>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          style={styles.input}
          value={this.state.feedItem.url}
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          style={styles.input}
          value={this.state.feedItem.title}
          onChange={this.handleInputChange}
        />
        <button style={styles.button} onClick={this.handleAdd}>
          New Post
        </button>
      </form>
    );
  }
}

const styles = {
  addForm: {
    padding: "8px",
    margin: "16px 0",
    background: "#f1f1f1",
    borderRadius: "10px"
  },
  input: {
    width: "100%",
    padding: "6px 10px",
    margin: "12px 0",
    boxSizing: "border-box",
  },
  button: {
    background: "#808080",
    color: "#fff",
    border: "1px solid",
    padding: "8px 10px",
    cursor: "pointer",
    borderRadius: "10px"
  }
};

export default Add;
