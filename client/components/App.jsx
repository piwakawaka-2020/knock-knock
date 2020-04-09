import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Form from './Form'
import Punch from './Punch'

const App = () => {
  return (
    <Router>
      <div>
        <h1>KNOCK-KNOCK</h1>
        <div>
          <Route path="/joke" component={Form} />
          <Route path="/joke/:who" component={Punch} />
        </div>
      </div>
    </Router>
  )
}
export default App