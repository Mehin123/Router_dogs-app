import React, { Component } from 'react'
import {Route ,Switch, Redirect} from 'react-router-dom'
import DogList from "./DogList"
import DogBrowse from './DogBrowse'
 class Routes extends Component {
    render() {
 const getDog = Routeprops => {
 let name=Routeprops.match.params.name;
   let currentDog=this.props.dogs.find(dog=>dog.name.toLowerCase()===name.toLowerCase()
     );
     return <DogBrowse  {...Routeprops}  dog={currentDog} />
          }
        return (
  <Switch>
    <Route exact path='/' render={()=><DogList dogInfo={this.props.dogs}/>}/>
     <Route exact path="/dogs/:name"  render={getDog}/>
     <Redirect to="/"/>
     </Switch>
  )
    }
}

export default Routes
