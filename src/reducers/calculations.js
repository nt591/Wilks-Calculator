import {ADD_WILKS} from "../actions"

export function wilksCalculations(state, action) {
  switch (action.type) {
    case ADD_WILKS:
      const previousWilks = (state.previousWilks || [])
      const {gender, bodyweight, total, wilks} = action
      return Object.assign({}, state, {
        previousWilks: previousWilks.concat(
          { gender, 
            bodyweight, 
            total, 
            wilks
          }
        )
      })
    default:
      return state
  }
}