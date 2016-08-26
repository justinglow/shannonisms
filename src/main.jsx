import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Landing from './components/Landing'
import About from './components/About'
import Quotes from './components/Quotes'

import { quoteCount } from './data'

const App = React.createClass({
  checkQuote (nextState, replace) {
    const { id } = nextState.params
    if (id === undefined || id >= quoteCount()) replace('/')
  },
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/quotes(/:id)" component={Quotes} onEnter={this.checkQuote} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
