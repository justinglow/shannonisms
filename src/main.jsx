import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'

import ShowPage from './pages/Show'
import DisclaimerPage from './pages/Disclaimer'
import SubmitPage from './pages/Submit'
import QuotesPage from './pages/Quotes'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={ShowPage} />
      <Route path="/disclaimer" component={DisclaimerPage} />
      <Route path="/submit" component={SubmitPage} />
      <Route path="/quotes" component={QuotesPage} />
      <Route path="/quote/:id" component={ShowPage} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
