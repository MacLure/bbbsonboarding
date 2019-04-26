import React, { Component } from "react";
import InfoSession from "./infoSession";

class InfoSessions extends Component {
  state = {};
  render() {
    return (
      <div style={styles.infoSessionsContainer}>
        <InfoSession />
        <InfoSession />
        <InfoSession />
      </div>
    );
  }
}

export default InfoSessions;

const styles = {};

styles.infoSessionsContainer = {
  margin: "10px auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};
