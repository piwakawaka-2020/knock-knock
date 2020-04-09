import React from 'react'

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
                <h1>WHO'S THERE??</h1>
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

                <h1>{this.state.joke}</h1>
            </div>
        )
    }
}
export default Form
