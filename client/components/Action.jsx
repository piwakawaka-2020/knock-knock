import React from 'react'
import {Link} from 'react-router-dom'


class Door extends React.Component{
  constructor(){
    super()
    this.state = {
      image: "/images/door.png",
      pathName: "Knock me"
    }
  }

  knock = () =>{
    this.setState({
      knock: "KNOCK-KNOCK!",
      who: "Who's there?",
      path: "/joke",
      pathName: "What'sup?"
    })
  }

  mat = () => {
    this.setState( {
      images: "/images/mat2.png",
      dog: "/images/pug.PNG",
      bark: "Woof Woof !!",
      text: ["Shut The Front Door", "Friends Welcome Relatives by Appointment", "Hi I'm Mat", "Come Back With A Warrant", "Leave food - Now go home", "The Neighbors have better stuff", "Shut the Front Door", "Nacho House", "We have found Jesus", "Oh Shit Not You Again", "Wizards Welcome Muggles not Tolerated", "Shoes off Biaches", "You again?", "Enter with Champange"].join('\n')
    })
  }
  
  render(){
      return(
        <>
          <div className="door">
            <div>
              <h1 className="animated pulse slow infinite">{this.state.knock}</h1>
              <h2>{this.state.who}</h2>
              <Link to={this.state.path}>{this.state.pathName}</Link>
            </div>
            <div className="animated fadeIn slow">
              <Link to={this.state.path}><img onClick={this.knock} src={this.state.image} alt="Door"/></Link>
              <div className="mat" onMouseEnter={this.mat}>
                <img src = {this.state.images}></img>
                <img className="animated heartBeat slow infinite" src = {this.state.dog}></img>
                <h3>{this.state.bark}</h3>
                {/* <p>{this.state.text}</p> */}
              </div>
            </div>
          </div>
        </>
      )
    }
}



export default Door;