import React, { Component } from 'react'
import {NavLink} from 'react-router-dom' 
import './DogList.css'
class DogList extends Component {
   
    render() {
       return (
        <div className="DogList">
        <h1 className='Display-5 text-center mt-3 mb-5'>Dog List!</h1>
       <div className="row">
        {this.props.dogInfo.map(d=> 
          <div className='Dog col-lg-4 text-center' key={d.name}>
          <img src={d.src} alt={d.name} />
          <h3 className='mt-3'>
            <NavLink className='underline' to={`/dogs/${d.name}`}>
              {d.name}
            </NavLink>
          </h3>
        </div>
        
        )  
      }
     </div>
</div>

)
        }
 


}


   
        




export default DogList
