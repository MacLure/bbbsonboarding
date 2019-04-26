import React, { Component } from "react";
import { connect } from "react-redux";
import {
  submitRegistrationData,
  checkProgress
} from "./../actions/registrationActions";
import Header from "./header";
import Footer from "./footer";
import ProgressBar from "./progressBar";

class Dashboard extends Component {
  state = {};

  updateProgress = stage => {
    this.props.checkProgress(stage);
  };

  render() {
    return (
      <div style={styles.pageContainer} className="App">
        <div style={styles.header}>
          <Header />
        </div>
        <ProgressBar
          big101={this.props.data.big101}
          application={this.props.data.application}
          vss={this.props.data.vss}
          assessmentInterview={this.props.data.assessmentInterview}
          training={this.props.data.training}
          match={this.props.data.match}
        />
        DASHBOARD
        <div>name: {this.props.data.full_name}</div>
        <div>city: {this.props.data.city}</div>
        <div>phone: {this.props.data.phone}</div>
        <div>email: {this.props.data.email}</div>
        <div>step: {this.props.data.step}</div>
        <div
          onClick={e => {
            this.updateProgress("big101");
          }}
        >
          big101: {this.props.data.big101 ? "true" : "false"}
        </div>
        <div>application: {this.props.data.application ? "true" : "false"}</div>
        <div>vss: {this.props.data.vss ? "true" : "false"}</div>
        <div>
          assessmentInterview:{" "}
          {this.props.data.assessmentInterview ? "true" : "false"}
        </div>
        <div>training: {this.props.data.training ? "true" : "false"}</div>
        <div>match: {this.props.data.match ? "true" : "false"}</div>
        <div style={styles.footer}>
          <Footer />
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
)(Dashboard);

const styles = {};

styles.progressContainer = {
  padding: "10px",
  margin: "0 auto",
  display: "grid",
  width: "90%",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
  height: "30px"
};

styles.pageContainer = {
  position: "relative",
  minHeight: "100vh"
};

styles.contentWrap = {
  paddingBottom: "400px"
};

styles.footer = {
  position: "absolute",
  bottom: 0,
  width: "100%"
};

styles.registrationGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

styles.yourInfoSession = {
  textAlign: "center",
  margin: "20px",
  color: "#663399",
  fontWeight: 800,
  fontSize: " 1.5em"
};
