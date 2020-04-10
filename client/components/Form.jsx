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
            <div className="jokeForm animated bounceInLeft">
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        <p>Choose a name</p>
                        <select className="jokeDrop" name="who" onChange={this.handleChange}>
                            <option value="">---Choose One ---</option>
                            {names.map ((name ,i) => {
                                return <option key={i} value={name}>{name}</option>
                            })}
                        </select>
                    </label>
                    <h2>
                        {this.state.who}
                    </h2>
                    <input className="submit animated pulse infinite" type="submit" value="Who??"/>
                </form>
                <h2>{this.state.joke}</h2>
            </div>
        )
    }
}
export default Form
