import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

class IssuesTable extends Component {
  renderContent() {
    let { user } = this.props.auth;
  }
  render() {
    console.log("PRASANNA");
    console.log(this.props);
    return (
      <div
        className="container"
        style={{ marginTop: "50px", width: "700px" }}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  issues: state.issues
});

export default connect(mapStateToProps)(withRouter(IssuesTable));
