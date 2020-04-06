import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DogBrowse.css'
class DogBrowse extends Component {
    render() {
  const  { dog }=this.props
     return (

<div className="DogBrowse row justify-content-center">
  <div className=" DogBrowse-column col-11 col-lg-4">
  <div className="DogBrowse-card card mt-2">
  <img className="card-img-top" src={dog.src} alt={dog.name}/>
   <div className="DogBrowse__body card-body text-left">
    <h5 className="card-title">{dog.name}</h5>
     <h6 className="card-subtitle text-muted"> {dog.age} years old</h6>
     <ul className='list-group list-group-flush'>
         {dog.facts.map((fact, i) => (
           <li className='list-group-item' key={i}>
               {fact}
            </li>
              ))}
            </ul>
     <Link className="btn btn-info mt-2" to="/">Go Back</Link>
       </div>
      
  </div>
  </div>
   </div>
        )
 }
}

export default DogBrowse
