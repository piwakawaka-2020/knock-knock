import React from 'react'

import jokesData from '../../data/jokes'

class Form extends React.Component {
    render () {
        const names = jokesData.map((joke) => {
            return joke.name
        })
        return (
            <div>
                <form>
                    <label>
                        <select>
                            {names.map ((name) => {
                                return <option value="{name}">{name}</option>
                            })}
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}
export default Form
