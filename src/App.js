import React from "react";
import "./App.css";
import RegistrationForm from "./components/registrationForm";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div style={styles.pageContainer} className="App">
      <div style={styles.header}>
        <Header />
      </div>
      <div style={styles.contentWrap}>
        <RegistrationForm />
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

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
