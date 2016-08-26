import React from 'react'

const Landing = props => (
  <div className="landing">
    <h2>This is the landing page</h2>
    <pre>
      <code>{JSON.stringify(props, null, 4)}</code>
    </pre>
  </div>
)

const { object } = React.PropTypes

Landing.propTypes = {
  route: object.isRequired
}

export default Landing
