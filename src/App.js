import React, { Component } from "react";
import "./App.css";
import CreatePost from "./containers/CreatePost";
import PostList from "./containers/PostList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
