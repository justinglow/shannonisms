import React from 'react'
import { Link, IndexLink } from 'react-router'

const Nav = props => (
  <nav>
    <h1>This is my nav. Need some links.</h1>
    <ol>
      <li><IndexLink to="/" activeClassName="active">Shannonisms</IndexLink></li>
      <li><Link to="/quotes" activeClassName="active">All Quotes</Link></li>
      <li><Link to="/submit" activeClassName="active">Submit</Link></li>
      <li><Link to="/disclaimer" activeClassName="active">Disclaimer</Link></li>
      <li><Link to="/quote/24">Quote #24</Link></li>
      <li><Link to="/quote/25">Quote #25</Link></li>
      <li><Link to="/quote/26">Quote #26</Link></li>
    </ol>
  </nav>
)

const { func } = React.PropTypes

Nav.propTypes = {
  updateQuote: func
}

export default Nav
