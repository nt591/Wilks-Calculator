import React from 'react'
import Header from 'components/Header/Header.js'

const Container =  React.createClass({
  render() {
    return (
      <div>
        <Header />
        Hello from the container
      </div>
    )
  }
})

export default Container