const registrationReducer = (
  state = {
    full_name: "DEFAULT_NAME"
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
