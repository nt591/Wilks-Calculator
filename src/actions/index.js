export const ADD_CALCULATION = "ADD_CALCULATION"

export function addCalculation(gender, bodyweight, total, wilks) {
  type: ADD_CALCULATION,
  gender,
  bodyweight,
  total,
  wilks
}