import React, { Component } from "react";
import { connect } from "react-redux";
import {
  submitRegistrationData,
  checkProgress
} from "../actions/registrationActions";
import InfoSession from "./infoSession";
import ApplicationForm from "./applicationForm";

class Dashboard2 extends Component {
  state = {};

  updateProgress = stage => {
    this.props.checkProgress(stage);
  };

  render() {
    return (
      <div style={styles.dashboard1Container}>
        <div>
          <div style={styles.vssContainer}>
            <span style={styles.vssHeading}>Vulnerable Sector Check</span>
            <div>Please obtain and upload a vulnerable sectore check.</div>
            <br />
            <div>
              More information on how to obtain one can be found here...
            </div>
          </div>
        </div>
        <div style={styles.inactiveContainer}>
          <div style={styles.inactiveSteps}>Assessmenbt Interview</div>
          <div style={styles.inactiveSteps}>Training Materials</div>
        </div>
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
)(Dashboard2);

const styles = {};

styles.dashboard1Container = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};
styles.vssContainer = {
  marginTop: "30px"
};

styles.inactiveContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  gridGap: "5px",
  paddingTop: "23px"
};

styles.inactiveSteps = {
  backgroundColor: "grey",
  color: "white",
  fontWeight: 600,
  fontSize: "1.2em",
  margin: "5px",
  display: "inline-block",
  writingMode: "tb-rl",
  padding: "10px",
  borderRadius: " 5px"
};

styles.vssHeading = {
  fontWeight: 600,
  fontSize: "1.2em"
};
