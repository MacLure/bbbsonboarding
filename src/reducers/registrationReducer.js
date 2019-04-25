const registrationReducer = (
  state = {
    full_name: "DEFAULT_NAME",
    city: "DEFAULT_CITY",
    phone: "DEFAULT_PHONE",
    email: "DEFAULT_EMAIL"
  },
  action
) => {
  switch (action.type) {
    case "UPDATE_REGISTRATION_DATA":
      state = {
        ...state,
        full_name: action.payload
      };
      break;
  }
  return state;
};

export default registrationReducer;
