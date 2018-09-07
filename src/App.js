import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewPost from "./NewPost.js";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost />
          </div>
          <div className="col-md-6">Display Post</div>
        </div>
      </div>
    );
  }
}

export default App;
