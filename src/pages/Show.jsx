import React from 'react'
import { sample } from 'lodash'

import Debug from '../components/Debug'

import RawQuotes from '../quotes'
const quotes = RawQuotes.quotes

const { object, array, string } = React.PropTypes

const ShowPage = React.createClass({
  propTypes: {
    params: object,
    routes: array,
    quote: string
  },
  getInitialState () {
    return {
      quote: ''
    }
  },
  updateQuote (quoteID) {
    this.setState({ quote: quoteID ? quotes[quoteID] : sample(quotes) })
  },
  componentWillMount () {
    this.updateQuote(this.props.params.id)
  },
  componentDidUpdate () {
    console.log('updated')
  },
  render () {
    return <div className="show">
      <h1>This is the show page</h1>
      <u>{this.state.quote}</u>
      <Debug spit={this.props} />
    </div>
  }
})

export default ShowPage
