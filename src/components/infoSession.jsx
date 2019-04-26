import React, { Component } from "react";

class InfoSession extends Component {
  state = {};
  render() {
    return (
      <div style={styles.eventBox}>
        <div>Wed, May 15</div>
        <div>6:00 PM - 7:30 PM</div>
        <div>BIGS 101</div>
        <div>INFO SESSION</div>
        <div>Yonge & Eglinton Office</div>
        <div>2345 Yonge St. Suite 501</div>
      </div>
    );
  }
}

export default InfoSession;

const styles = {};

styles.eventBox = {
  backgroundColor: "#663399",
  color: "white",
  padding: "10px",
  margin: "10px"
};
