import React from 'react'

import Quote from '../components/Quote'
import Debug from '../components/Debug'

const ShowPage = props => (
  <div className="show">
    <h1>This is the show page</h1>
    <Quote id={props.params.id} />
    <Debug spit={props.params} />
  </div>
)

const { object } = React.PropTypes

ShowPage.propTypes = {
  params: object
}

export default ShowPage
