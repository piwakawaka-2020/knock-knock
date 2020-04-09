import React from 'react'
import Form from './Form'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Home></Home>
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