import React from "react";
import RegistrationForm from "./registrationForm";
import Header from "./header";
import Footer from "./footer";
import InfoSessions from "./infoSessions";

function RegistrationPage() {
  return (
    <div style={styles.pageContainer} className="App">
      <div style={styles.header}>
        <Header />
      </div>
      <div style={styles.contentWrap}>
        <div style={styles.registrationGrid}>
          <RegistrationForm />
          <InfoSessions />
        </div>
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default RegistrationPage;

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
  gridTemplateColumns: "2fr 1fr"
};
