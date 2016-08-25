import React from 'react'
import ReactDOM from 'react-dom'

import Bjork from './components/Bjork'

const HelloWorld = () => (
  <div>
    <Bjork title="I love you" />
    <Bjork title="Yes!" />
  </div>
)

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
