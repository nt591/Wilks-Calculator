import { expect } from 'chai'
import WilksCalculator from "./wilks-calculator.js"

describe("WilksCalculator", () => {
  it("should accept male as a gender", () =>
    expect(WilksCalculator("male", 75, 100))
      .to.be.ok
  )

  it("should accept female as a gender", () =>
    expect(WilksCalculator("female", 75, 100))
      .to.be.ok
  )

  it("should not accept anything else as a gender", () =>
    expect(function () {
      WilksCalculator("banana", 75, 100)
    })
      .to.throw(Error, /unknown gender for Wilks score/)
  )

  it("should calculate correct Wilks scores for men assuming KG", () => {
    expect(WilksCalculator("male", 66, 510))
      .to.be.closeTo(400.45, 0.05)
    expect(WilksCalculator("male", 93, 930))
      .to.be.closeTo(584.23, 0.05)
  })

  it("should calculate correct Wilks scores for women assuming KG", () => {
    expect(WilksCalculator("female", 63, 400))
      .to.be.closeTo(429.60, 0.05)
    expect(WilksCalculator("female", 85, 500))
      .to.be.closeTo(443.30, 0.05)
  })
})