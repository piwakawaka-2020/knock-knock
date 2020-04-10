import React from 'react'
import Form from './Form'
import Door from './Action'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Route path="/">
          <Door></Door>
        </Route>
        <Route path="/joke">
          <Form></Form>
        </Route>
      </Router>
    </> 
  )
} 
export default App