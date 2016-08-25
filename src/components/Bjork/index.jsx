import React from 'react'

const Bjork = (props) => (
  <h1>{props.title}</h1>
)

const { string } = React.PropTypes

Bjork.propTypes = {
  title: string.isRequired
}

export default Bjork
