import { ADD_WILKS } from "constants/actionTypes"

export function addWilks(gender, bodyweight, total, wilks) {
  return {
    type: ADD_WILKS,
    gender,
    bodyweight,
    total,
    wilks
  }
}