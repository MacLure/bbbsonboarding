import React, { Component } from "react";
import { connect } from "react-redux";
import { submitRegistrationData } from "./../actions/registrationActions";
import { withRouter } from "react-router-dom";
import { blockStatement } from "@babel/types";

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
      <div style={styles.registrationForm}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="full_name" style={styles.label}>
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              placeholder="eg. First Last"
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="city" style={styles.label}>
              City
            </label>
            <input
              type="text"
              name="city"
              placeholder="Toronto"
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="phone" style={styles.label}>
              Phone
            </label>
            <input
              type="number"
              name="phone"
              placeholder="eg. 4164445555"
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="eg. first.last@email.com"
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="confirm_password" style={styles.label}>
              Password Confirm
            </label>
            <input type="text" name="confirm_password" style={styles.input} />
          </div>
          <div>
            <button style={styles.submitButton} type="submit">
              Register >>
            </button>
          </div>
        </form>
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

styles.registrationForm = {
  color: "#663399",
  textAlign: "left",
  marginTop: "10px",
  marginLeft: "300px"
};

styles.label = {
  display: "block",
  marginTop: "10px"
};

styles.input = {
  border: "1px solid #663399",
  display: "block",
  height: "30px",
  width: "400px",
  marginBottom: "20px"
};

styles.submitButton = {
  border: "none",
  background: "#663399",
  color: "white",
  padding: "10px",
  fontSize: "1.2em"
};
