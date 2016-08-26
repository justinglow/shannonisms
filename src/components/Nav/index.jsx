import React from 'react'
import { Link, IndexLink } from 'react-router'

const Nav = (props) => (
  <nav>
    <h1>This is my nav. Need some links.</h1>
    <ol>
      <li>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
      </li>
      <li>
        <Link to="/about" activeClassName="active">About!!</Link>
      </li>
      <li>
        <Link to="/quotes/24" activeClassName="active">Quotes</Link>
      </li>
    </ol>
  </nav>
)

export default Nav
