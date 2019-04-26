import React, { Component } from "react";
import { connect } from "react-redux";
import { submitRegistrationData } from "./../actions/registrationActions";
import { withRouter } from "react-router-dom";
import { blockStatement } from "@babel/types";
import ApplicationForm from "./../assets/applicationForm.jpg";

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: "",
      city: "",
      phone: 0,
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitRegistrationData(this.state);
    this.props.history.push("/confirmation");
  }

  render() {
    return (
      <div style={styles.applicationFormContainer}>
        APPLICATION FORM
        <div style={styles.saveButton}>SAVE</div>
        <div style={styles.submitButton}>SUBMIT</div>
        <img src={ApplicationForm} style={styles.applicationFormImage} />
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegistrationForm));

const styles = {};

styles.applicationFormContainer = {
  color: "#663399",
  textAlign: "left",
  marginTop: "28px",
  marginLeft: "300px",
  backgroundColor: "#0088CE",
  color: "white",
  textAlign: "center",
  fontWeight: 600,
  fontSize: "2em"
};

styles.saveButton = {
  display: "inline-block",
  fontSize: "14px",
  backgroundColor: "grey",
  borderRadius: "5px",
  padding: "5px",
  margin: "10px"
};

styles.submitButton = {
  display: "inline-block",
  fontSize: "14px",
  backgroundColor: "#663399",
  borderRadius: "5px",
  padding: "5px",
  margin: "10px"
};

styles.applicationFormImage = {
  width: "300px"
};
