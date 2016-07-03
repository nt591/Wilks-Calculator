import React from 'react'
import Header from 'components/Header/Header.js'
import styles from './styles.module.css'

const Container =  React.createClass({
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        Hello from the container
      </div>
    )
  }
})

export default Container