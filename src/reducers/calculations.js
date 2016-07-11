import {ADD_CALCULATIONS} from "../actions"

function calculations(state, action) {
  switch (action.type) {
    case ADD_CALCULATIONS:
      const previousCalculations = (state.previousCalculations || [])
      const {gender, bodyweight, total, wilks} = action
      return Object.assign({}, state, {
        previousCalculations: previousCalculations.concat(
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