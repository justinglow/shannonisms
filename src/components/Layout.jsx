import React from 'react'

import Nav from './Nav'

const Layout = (props) => (
  <div className="l-parent">
    <Nav />
    {props.children}
  </div>
)

const { element, array } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired,
  routes: array.isRequired
}

export default Layout
