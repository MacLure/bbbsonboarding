import React, { Component } from "react";
import { connect } from "react-redux";
import { submitRegistrationData } from "./../actions/registrationActions";
import Header from "./header";
import Footer from "./footer";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div style={styles.pageContainer} className="App">
        <div style={styles.header}>
          <Header />
        </div>
        <div style={styles.progressContainer}>
          <div
            style={{
              borderBottom: this.props.data.big101 ? "2px solid #663399" : ""
            }}
          >
            Big101
          </div>
          <div
            style={{
              borderBottom: this.props.data.Application
                ? "2px solid #663399"
                : ""
            }}
          >
            Application
          </div>
          <div
            style={{
              borderBottom: this.props.data.vss ? "2px solid #663399" : ""
            }}
          >
            VSS
          </div>
          <div
            style={{
              borderBottom: this.props.data.assessmentInterview
                ? "2px solid #663399"
                : ""
            }}
          >
            Assessment Interview
          </div>
          <div
            style={{
              borderBottom: this.props.data.fraining ? "2px solid #663399" : ""
            }}
          >
            Training
          </div>
          <div
            style={{
              borderBottom: this.props.data.match ? "2px solid #663399" : ""
            }}
          >
            Match!
          </div>
        </div>
        DASHBOARD
        <div>name: {this.props.data.full_name}</div>
        <div>city: {this.props.data.city}</div>
        <div>phone: {this.props.data.phone}</div>
        <div>email: {this.props.data.email}</div>
        <div>step: {this.props.data.step}</div>
        <div>big101: {this.props.data.big101 ? "true" : "false"}</div>
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
