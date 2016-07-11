import { expect } from 'chai'
import {wilksCalculations} from "reducers/calculations"
import {ADD_WILKS} from "actions/index.js"

describe("wilksCalculations()", () => {
  it("adds a wilks score to the store with ADD_WILKS", () => {
    const stats = {
      gender: "female",
      wilks: 400.06,
      total: 372.5,
      bodyweight: 63
    }
    const testAction = Object.assign({}, stats, {type: ADD_WILKS})
    expect(wilksCalculations({}, testAction))
      .to.deep.equal( 
        {
          previousWilks: [
            stats
          ]
        }
      )
  })

  it("should have a default case", () => {
    const state = {}
    expect(wilksCalculations(state, {type: "NEVER_GONNA_HAPPEN"})).
      to.equal(state)
  })
})