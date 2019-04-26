import React, { Component } from "react";
import RegistrationForm from "./registrationForm";
import Header from "./header";
import Footer from "./footer";
import InfoSession from "./infoSession";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  submitRegistrationData,
  checkProgress
} from "./../actions/registrationActions";

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
            We're looking forward to meeting you at our upcoming Info Session,{" "}
            {this.props.data.full_name}!
          </div>

          <InfoSession />
          <br />
          <div style={styles.instructions}>
            Keep track of your application progress on your dashboard:
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

const mapStateToProps = state => {
  return {
    data: state.registrationReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitRegistrationData: data => {
      dispatch(submitRegistrationData(data));
    },
    checkProgress: stage => {
      dispatch(checkProgress(stage));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage);

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
