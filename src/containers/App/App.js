import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

const App = React.createClass({
  propTypes: {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  },

  content() {
    return(
      <Router routes={this.props.routes} 
              history={this.props.history}/>
    )
  },

  render() {
    return (
      <div className={styles.wrapper}>
        {this.content()}
      </div>
    )
  }
});

module.exports = App;