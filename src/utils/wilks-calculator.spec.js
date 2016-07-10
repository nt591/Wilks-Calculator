import { expect } from 'chai'
import WilksCalculator, {getCoefficientsFromGender, calculateScoreFromTotal} from "./wilks-calculator.js"
import Coefficients from "constants/coefficients.js"

describe("getCoefficientsFromGender", () => {
  it("should accept male as a gender", () =>
    expect(getCoefficientsFromGender("male"))
      .to.equal(Coefficients["male"])
  )
  
  it("should accept female as a gender", () =>
    expect(getCoefficientsFromGender("female"))
      .to.equal(Coefficients["female"])
  )

  it("should throw an error with anything else", () =>
    expect(function() {getCoefficientsFromGender("banana")})
      .to.throw(Error, /unknown gender for Wilks score/)
  )
})

describe("calculateScoreFromTotal", () => {
  it("should calculate correct Wilks scores for men assuming KG", () => {
    expect(calculateScoreFromTotal(Coefficients["male"], 66, 510))
      .to.be.closeTo(400.45, 0.05)
    expect(calculateScoreFromTotal(Coefficients["male"], 93, 930))
      .to.be.closeTo(584.23, 0.05)
  })

  it("should calculate correct Wilks scores for women assuming KG", () => {
    expect(calculateScoreFromTotal(Coefficients["female"], 63, 400))
      .to.be.closeTo(429.60, 0.05)
    expect(calculateScoreFromTotal(Coefficients["female"], 85, 500))
      .to.be.closeTo(443.30, 0.05)
  })
})

describe("WilksCalculator", () => {
  it("should accept male as a gender", () =>
    expect(WilksCalculator("male", 75, 100))
      .to.be.ok
  )

  it("should accept female as a gender", () =>
    expect(WilksCalculator("female", 75, 100))
      .to.be.ok
  )

  it("should verify gender is a string", () =>
    expect(function() {WilksCalculator(1, 12, 123)})
      .to.throw(Error, /gender must be a string/)
  )

  it("should verify bodyweight is a number", () =>
    expect(function() {WilksCalculator("male", "70", 350)})
      .to.throw(Error, /bodyweight must be a number/)
  )

  it("should verify total is a number", () =>
    expect(function() {WilksCalculator("female", 70, "350")})
      .to.throw(Error, /total must be a number/)
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