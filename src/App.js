import React from "react";
import "./App.css";
import RegistrationForm from "./components/registrationForm";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div style={styles.pageContainer} className="App">
      <div style={styles.header}>
        <Navbar />
      </div>
      <div>
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

styles.header = {};

styles.pageContainer = {
  position: "relative",
  minHeight: "100vh"
};

styles.footer = {
  position: "absolute",
  bottom: 0,
  width: "100%"
};
