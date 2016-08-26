import React from 'react'

const Debug = props => (
  <pre>
    <code>{JSON.stringify(props.spit, null, 2)}</code>
  </pre>
)

const { object } = React.PropTypes

Debug.propTypes = {
  spit: object
}

export default Debug
