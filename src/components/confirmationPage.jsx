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
          <div style={styles.message}>
            We're looking forward to meeting you at our upcoming Info Session!
          </div>

          <InfoSession />
          <br />
          <div style={styles.instructions}>
            To track your progress on your journey to becoming a Big, please
            check out your dashboard:
          </div>
          <Link to={`/dashboard`}>
            <div style={styles.confirmButton}>YOUR DASHBOARD >></div>
          </Link>
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

styles.message = {
  marginTop: "20px",
  marginBottom: "20px",
  fontSize: "30px",
  wontWeight: 600
};

styles.instructions = {
  margin: "30px",
  fontSize: "20px"
};

styles.confirmButton = {
  backgroundColor: "#663399",
  padding: "20px",
  width: "200px",
  margin: "20px auto",
  textDecorationLine: "none",
  color: "white",
  fontWeight: 600
};
