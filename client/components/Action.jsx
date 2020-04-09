import React from 'react'
import {Link} from 'react-router-dom'


class Door extends React.Component{
  constructor(){
    super()
    this.state = {
      image: "/images/door.png",
    }
  }

  knock = () =>{
    this.setState({
      knock: "Knock-knock",
      who: "Who's there?",
      path: "/joke"
    })
  }
  
  render(){
      return(
        <>
          <div className="door">
            <img onClick={this.knock} src={this.state.image} alt="Door"/>
            <div>
              <h1>{this.state.knock}</h1>
              <h2>{this.state.who}</h2>
              <button><Link to={this.state.path}>Knock Me</Link></button>
            </div>
          </div>
        </>
      )
    }
}



export default Door;