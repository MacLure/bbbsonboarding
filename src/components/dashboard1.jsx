import React, { Component } from "react";
import { connect } from "react-redux";
import {
  submitRegistrationData,
  checkProgress
} from "../actions/registrationActions";
import InfoSession from "./infoSession";

class Dashboard1 extends Component {
  state = {};

  updateProgress = stage => {
    this.props.checkProgress(stage);
  };

  render() {
    return (
      <div style={styles.dashboard1Container}>
        <div>
          <div style={styles.yourInfoSession}>Your Info Session:</div>
          <div
            onClick={e => {
              this.updateProgress("big101");
            }}
          >
            <InfoSession />
            <div style={styles.orangeBox}>Change Appointment</div>
          </div>
        </div>
        <div style={styles.inactiveContainer}>
          <div style={styles.inactiveSteps}>Application Form</div>
          <div style={styles.inactiveSteps}>Vulnerable Sector Check</div>
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
)(Dashboard1);

const styles = {};

styles.dashboard1Container = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

styles.orangeBox = {
  margin: "20px auto",
  width: "180px",
  color: "#F39636",
  border: "2px dashed #F39636",
  padding: "20px",
  fontWeight: 600,
  fontSize: "1em"
};

styles.yourInfoSession = {
  fontSize: "1.2em",
  fontWeight: 600
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
