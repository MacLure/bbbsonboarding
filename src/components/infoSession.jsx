import React, { Component } from "react";

class InfoSession extends Component {
  state = {};
  render() {
    return (
      <div style={styles.eventBox}>
        <div style={styles.eventTitle}>BIGS 101</div>
        <div style={styles.eventDesc}>INFO SESSION</div>
        <div stlye={styles.eventDateMonth}>MAY</div>
        <div stlye={styles.eventDateDate}>12</div>
        <div stlye={styles.eventDateDay}>WEDNESDAY</div>
        <div>Yonge & Eglinton Office</div>
        <div>2345 Yonge St. Suite 501</div>
      </div>
    );
  }
}

export default InfoSession;

const styles = {};

styles.eventBox = {
  display: "inline-block",
  margin: "0 auto",
  backgroundColor: "#663399",
  color: "white",
  padding: "10px",
  margin: "10px",
  width: "200px",
  height: "200px",
  fontSize: "14px"
};

styles.eventTitle = {
  fontSize: "40px",
  fontWeight: 800
};

styles.eventDesc = {
  fontSize: "20px"
};

styles.eventDateMonth = {
  fontSize: "40px",
  fontWeight: 800
};

styles.eventDateLeft = {
  gridColumnStart: 1
};

styles.eventDateDate = {
  fontSize: "40px",
  fontWeight: 800
};
