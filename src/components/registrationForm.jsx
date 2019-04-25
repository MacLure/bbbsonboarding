import React, { Component } from "react";
import { connect } from "react-redux";

class RegistrationForm extends Component {
  render() {
    return (
      <div>
        Registration Form
        <form>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="full_name" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" />
          </div>
          <div>
            <label htmlFor="confirm_password">Password Confirm</label>
            <input type="text" name="confirm_password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>name: {this.props.data.full_name}</div>
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
    updateRegistrationData: name => {
      dispatch({
        type: "UPDATE_REGISTRATION_DATA",
        payload: name
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
