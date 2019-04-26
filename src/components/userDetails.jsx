import React, { Component } from "react";
import { connect } from "react-redux";
import {
  submitRegistrationData,
  checkProgress
} from "./../actions/registrationActions";
import Header from "./header";
import Footer from "./footer";
import ProgressBar from "./progressBar";
import InfoSession from "./infoSession";
import Dashboard1 from "./dashboard1";
import Dashboard2 from "./dashboard2";
import Dashboard3 from "./dashboard3";

class UserDetails extends Component {
  state = {};

  updateProgress = stage => {
    this.props.checkProgress(stage);
  };

  render() {
    return (
      <div style={styles.userDetailsContainer}>
        {this.props.data.full_name} | {this.props.data.city} |{" "}
        {this.props.data.phone} | {this.props.data.email}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.registrationReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitRegistrationData: data => {
      dispatch(submitRegistrationData(data));
    },
    checkProgress: stage => {
      dispatch(checkProgress(stage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);

const styles = {};

styles.userDetailsContainer = {
  margin: "10px",
  textAlign: "left"
};
