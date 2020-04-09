import React from 'react'
import Form from './Form'
import Door from './Action'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Form from './Form'
import Punch from './Punch'

const App = () => {
  return (
    <>
      <Router>
        <Route path="/">
          <Door></Door>
          {/* Click the door, the door link to /joke route - form display*/}
          {/* WHO'S THERE */}
        </Route>
        <Route path="/joke">
          <Form/>
          {/* write a CSS on the form component and put punchline on another component */}
          {/* Don't need <h1>WHO THERE</h1> */}
          {/* Try to figure out to display the joke only when name choosed */}
        </Route>
      </Router>
    </>
  )
}
export default App