import React from 'react'
import { Link, IndexLink } from 'react-router'

const Nav = (props) => (
  <nav>
    <h1>This is my nav. Need some links.</h1>
    <ol>
      <li><IndexLink to="/" activeClassName="active">Shannonisms</IndexLink></li>
      <li><Link to="/quotes" activeClassName="active">All Quotes</Link></li>
      <li><Link to="/submit" activeClassName="active">Submit</Link></li>
      <li><Link to="/disclaimer" activeClassName="active">Disclaimer</Link></li>
    </ol>
  </nav>
)

export default Nav
