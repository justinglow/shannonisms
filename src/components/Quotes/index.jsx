import React from 'react'

import { getQuote } from '../../data'

const { object } = React.PropTypes

const Quotes = React.createClass({
  propTypes: {
    params: object.isRequired
  },
  render () {
    return (
      <div className="quotes">
        <h2>This is the quotes page</h2>
        {getQuote(this.props.params.id)}
        <pre>
          <code>{JSON.stringify(this.props, null, 4)}</code>
        </pre>
      </div>
    )
  }
})

export default Quotes
