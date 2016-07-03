import React from "react"
import styles from "./styles.module.css"

const Form = React.createClass({
  render() {
    return(
      <form>
        <select id="gender">
          <option className={styles.gender} value="male" name="male">Male</option>
          <option className={styles.gender} value="female" name="female">Female</option>
        </select>
      </form>
    )
  }
});

export default Form