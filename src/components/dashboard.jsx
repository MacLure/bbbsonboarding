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
import UserDetails from "./userDetails";

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
        <div style={styles.contentWrap}>
          <UserDetails />
          <ProgressBar
            big101={this.props.data.big101}
            application={this.props.data.application}
            vss={this.props.data.vss}
            assessmentInterview={this.props.data.assessmentInterview}
            training={this.props.data.training}
            match={this.props.data.match}
          />
          {!this.props.data.big101 ? <Dashboard1 /> : null}
          {this.props.data.big101 && !this.props.data.application ? (
            <Dashboard2 />
          ) : null}
          {this.props.data.big101 &&
          this.props.data.application &&
          !this.props.data.vss ? (
            <Dashboard3 />
          ) : null}
          <div>
            {this.props.data.full_name} | {this.props.data.city} |{" "}
            {this.props.data.phone} | {this.props.data.email}
          </div>
          <div
            onClick={e => {
              this.updateProgress("big101");
            }}
          >
            Info Session Attended: {this.props.data.big101 ? "true" : "false"}
          </div>
          <div
            onClick={e => {
              this.updateProgress("application");
            }}
          >
            application: {this.props.data.application ? "true" : "false"}
          </div>
          <div
            onClick={e => {
              this.updateProgress("vss");
            }}
          >
            vss: {this.props.data.vss ? "true" : "false"}
          </div>
          <div
            onClick={e => {
              this.updateProgress("assessmentInterview");
            }}
          >
            assessmentInterview:{" "}
            {this.props.data.assessmentInterview ? "true" : "false"}
          </div>
          <div
            onClick={e => {
              this.updateProgress("training");
            }}
          >
            training: {this.props.data.training ? "true" : "false"}
          </div>
          <div
            onClick={e => {
              this.updateProgress("match");
            }}
          >
            match: {this.props.data.match ? "true" : "false"}
          </div>
        </div>

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
