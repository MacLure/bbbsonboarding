import React from "react";
import RegistrationForm from "./registrationForm";
import Header from "./header";
import Footer from "./footer";
import InfoSession from "./infoSession";
import RegistrationPage from "./registrationPage";
import { Link } from "react-router-dom";

function infoSessionSelectPage() {
  return (
    <div style={styles.pageContainer} className="App">
      <div style={styles.header}>
        <Header />
      </div>
      <div style={styles.contentWrap}>
        <div>Step 1: Sign Up for an Upcoming Info Session:</div>
        <Link to={`/register`}>
          <InfoSession />
        </Link>
        <Link to={`/register`}>
          <InfoSession />
        </Link>{" "}
        <Link to={`/register`}>
          <InfoSession />
        </Link>
        <div style={styles.orangeBox}>Show More</div>
        <div style={styles.requestCall}>
          <div style={styles.cantMakeSession}>Can't make an info session?</div>
          <div style={styles.requestCallText}>Request a call</div>
        </div>
        <div style={styles.orangeBox}>How It Works</div>
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default infoSessionSelectPage;

const styles = {};

styles.pageContainer = {
  position: "relative",
  minHeight: "100vh"
};

styles.contentWrap = {
  margin: "20px",
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

styles.requestCall = {
  margin: "0 auto",
  backgroundColor: "green",
  width: "500px",
  color: "white",
  backgroundColor: "#69BE28",
  padding: "20px 100px",
  textAlign: "left"
};

styles.cantMakeSession = {};

styles.requestCallText = {
  fontSize: "2em"
};

styles.orangeBox = {
  margin: "20px auto",
  width: "660px",
  color: "#F39636",
  border: "2px dashed #F39636",
  padding: "20px",
  fontWeight: 600,
  fontSize: "1.2em"
};
