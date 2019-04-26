export function submitRegistrationData(data) {
  return { type: "SUBMIT_REGISTRATION_DATA", payload: data };
}

export function checkProgress(stage) {
  return { type: "CHECK_PROGRESS", payload: stage };
}
