import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateRegistrationData } from "./actions/registrationActions";
import RegistrationForm from "./components/registrationForm";

function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch(updateRegistrationData(name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
