import React from 'react'
import { Link } from 'react-router-dom'

import jokesData from '../../data/jokes'

class Form extends React.Component {
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

    handleChange = (event) => {
        const newState = {}
        newState[event.target.name] = event.target.value
        this.setState(newState)
      }

    render () {
        const names = jokesData.map((joke) => {
            return joke.name
        })
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <select name="who" onChange={this.handleChange}>
                            <option value="">---Choose One ---</option>
                            {names.map ((name) => {
                                return <option value={name}>{name}</option>
                            })}
                        </select>
                    </label>

                    <br/>
                    <br/>
                    <p>
                        {this.state.who}
                    </p>
                    <input type="submit" value="Who??" />
                </form>
            </div>
        )
    }
}
export default Form
