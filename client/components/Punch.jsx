import React from 'react'
import { Link } from 'react-router-dom'

import jokesData from '../../data/jokes'

class Punch extends React.Component {
    state = {
        who: "",
        joke: "",
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let punchLine = jokesData.find((joke) => {
            return joke.name === this.state.who
        })

        const newState = {
            who: this.state.who,
            joke: punchLine.answer,
        }

        this.setState(newState)
        
    }

    render () {
        const names = jokesData.map((joke) => {
            return joke.name
        })
        return (
            <div>
                <h1>{this.state.joke}</h1>
            </div>
        )
    }

}

export default Punch

