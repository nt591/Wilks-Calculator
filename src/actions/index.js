export const ADD_WILKS = "ADD_WILKS"

export function addWilks(gender, bodyweight, total, wilks) {
  type: ADD_WILKS,
  gender,
  bodyweight,
  total,
  wilks
}