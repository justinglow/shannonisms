import React from 'react'

import Nav from '../Nav'

const Layout = (props) => (
  <div className="l-parent">
    <Nav />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
