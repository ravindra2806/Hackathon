import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getIssues } from "../actions/authentication";
import classnames from "classnames";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    console.log("this.props");
    console.log(this.props);

    return (
      <div className="container" style={{ marginTop: "50px", width: "700px" }}>
        <p>something</p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getIssues: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  issues: state.issues,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getIssues }
)(Dashboard);
