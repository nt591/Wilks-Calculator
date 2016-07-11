import { expect } from "chai"
import * as actions from './index'
import * as types from 'constants/actionTypes'

describe("actions", () => {
  it("should create an action to add a Wilks score", () => {
    const stats = {
      gender: "female",
      wilks: 400.06,
      total: 372.5,
      bodyweight: 63
    }
    const expectedAction = Object.assign(
      {},
      {type: types.ADD_WILKS},
      stats
    )

    expect(actions.addWilks(stats.gender, stats.bodyweight, stats.total, stats.wilks))
      .to.deep.equal(expectedAction)
  })
})