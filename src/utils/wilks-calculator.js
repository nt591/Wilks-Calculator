import Coefficients from "constants/coefficients.js"
import R from "ramda"

// using the formula from Wikipedia to take a gender and input lifts
// in order to calculate a Wilks score
// https://en.wikipedia.org/wiki/Wilks_Coefficient


function WilksCalculator (gender, bodyweight, total) {
  if (!R.is(String, gender)) {
    throw new Error("gender must be a string")
  }
  if (!R.is(Number, bodyweight)) {
    throw new Error("bodyweight must be a number")
  }
  if (!R.is(Number, total)) {
    throw new Error("total must be a number")
  }
  const coefficients = getCoefficientsFromGender(gender)
  return calculateScoreFromTotal(coefficients, bodyweight, total)
}

function getCoefficientsFromGender (gender) {
  if (gender !== "male" && gender !== "female") {
    throw new Error("unknown gender for Wilks score")
  }
  return Coefficients[gender]
}

function calculateScoreFromTotal (coefficients, bodyweight, total) {
  const {a, b, c, d, e, f} = coefficients
  const numerator = 500
  const denominator = R.sum([ 
    a, 
    b * bodyweight, 
    c * Math.pow(bodyweight, 2), 
    d * Math.pow(bodyweight, 3),
    e * Math.pow(bodyweight, 4),
    f * Math.pow(bodyweight, 5)
  ])
  const wilksCoefficient = numerator / denominator
  return (wilksCoefficient * total * 1e2) / 1e2
}
export default WilksCalculator