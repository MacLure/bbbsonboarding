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
    case "SUBMIT_REGISTRATION_DATA":
      state = {
        ...state,
        full_name: action.payload.full_name,
        city: action.payload.city,
        phone: action.payload.phone,
        email: action.payload.email
      };
      break;
  }
  return state;
};

export default registrationReducer;
