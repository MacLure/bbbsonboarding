import React, { Component } from "react";
import RegistrationForm from "./registrationForm";
import Header from "./header";
import Footer from "./footer";
import InfoSession from "./infoSession";
import { Link } from "react-router-dom";

class ConfirmationPage extends Component {
  state = {};
  render() {
    return (
      <div style={styles.pageContainer} className="App">
        <div style={styles.header}>
          <Header />
        </div>
        <div style={styles.contentWrap}>
          <div>CONFIRMATION PAGE</div>
          <InfoSession />
          <br />
          <Link to={`/dashboard`}>CONFIRM</Link>
        </div>
        <div style={styles.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ConfirmationPage;

const styles = {};

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
