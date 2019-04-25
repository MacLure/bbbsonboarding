import React, { Component } from "react";
import { connect } from "react-redux";

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
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        Registration Form
        <form>
          <div>
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="eg. First Last"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="Toronto"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="eg. 4164445555"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="eg. first.last@email.com"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Password Confirm</label>
            <input type="text" name="confirm_password" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
          <div>name: {this.props.data.full_name}</div>
          <div>city: {this.props.data.city}</div>
          <div>phone: {this.props.data.phone}</div>
          <div>email: {this.props.data.email}</div>
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
