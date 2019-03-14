import React, { Component } from "react";
import "./App.css";
import { List } from "./components/feed/List";
import Add from "./components/feed/Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handleAdd = item => {
    const list = [...this.state.list];
    list.unshift(item);
    this.setState({
      list
    });
  };

  render() {
    return (
      <div className="app">
        <Add onNewPost={this.handleAdd} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
