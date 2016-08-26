import React from 'react'

import Debug from './Debug'
import { getQuote, randomID } from '../store'

const { number } = React.PropTypes

const Quotes = React.createClass({
  getInitialState () {
    return {
      quoteID: this.props.id
    }
  },
  propTypes: {
    id: number
  },
  componentDidMount () {
    if (!this.state.quoteID) {
      this.setState({ quoteID: randomID() })
    }
  },
  render () {
    return (
      <div className="quote">
        <h1>{getQuote(this.state.quoteID)}</h1>
        <Debug spit={this.state} />
      </div>
    )
  }
})

export default Quotes
