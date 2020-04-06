import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    render() {
     return (
 <div className="Navbar">  
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <NavLink className="navbar-brand"  exact to="/">DogShelter</NavLink>
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>
 <div className="collapse navbar-collapse" id="navbar">
   <ul className="navbar-nav mr-auto">
    <NavLink activeClassName="active"   className="nav-link "  exact to="/">Home</NavLink>
      {this.props.dogs.map(d=> 
        <li className="nav-item" key={d.name} >
     <NavLink  activeClassName="active"  className="nav-link " exact to={`/dogs/${d.name}`}> {d.name} <span className="sr-only">(current)</span></NavLink>
       </li>)}
   </ul>
   
 </div>
  </nav>
 </div>
        )
    }
}

export default Navbar
