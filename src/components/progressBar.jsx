import React, { Component } from "react";
import Check from "./../assets/check.svg";
import Uncheck from "./../assets/uncheck.svg";

import { relative } from "path";

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <div style={styles.progressContainer}>
        <div
          style={{
            ...styles.progressItem,
            borderBottom: this.props.big101
              ? "2px solid #663399"
              : "2px solid lightgrey"
          }}
        >
          Attend Info Session
          <img
            src={this.props.big101 ? Check : Uncheck}
            style={styles.checkbox}
          />
        </div>
        <div
          style={{
            ...styles.progressItem,
            borderBottom: this.props.application
              ? "2px solid #663399"
              : "2px solid lightgrey"
          }}
        >
          Submit Application
          <img
            src={this.props.application ? Check : Uncheck}
            style={styles.checkbox}
          />
        </div>
        <div
          style={{
            ...styles.progressItem,

            borderBottom: this.props.vss
              ? "2px solid #663399"
              : "2px solid lightgrey"
          }}
        >
          Vulnerable Sector Check
          <img src={this.props.vss ? Check : Uncheck} style={styles.checkbox} />
        </div>
        <div
          style={{
            ...styles.progressItem,

            borderBottom: this.props.assessmentInterview
              ? "2px solid #663399"
              : "2px solid lightgrey"
          }}
        >
          Assessment Interview
          <img
            src={this.props.assessmentInterview ? Check : Uncheck}
            style={styles.checkbox}
          />
        </div>
        <div
          style={{
            ...styles.progressItem,

            borderBottom: this.props.training
              ? "2px solid #663399"
              : "2px solid lightgrey"
          }}
        >
          Training Materials
          <img
            src={this.props.training ? Check : Uncheck}
            style={styles.checkbox}
          />
        </div>
        <div
          style={{
            ...styles.progressItem
          }}
        >
          Match!
          <img
            src={this.props.match ? Check : Uncheck}
            style={styles.checkbox}
          />
        </div>
      </div>
    );
  }
}

export default ProgressBar;

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

styles.progressItem = {
  position: "relative",
  textAlign: "left"
};

styles.checkbox = {
  position: "absolute",
  left: -3,
  bottom: -15,
  width: "30px"
};
