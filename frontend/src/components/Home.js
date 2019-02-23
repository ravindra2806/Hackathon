import React, { Component } from "react";
import ChatComponent from "./ChatComponent";

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontWeight: "700",
          fontSize: "60px"
        }}
      >
        <ChatComponent />
      </div>
    );
  }
}
