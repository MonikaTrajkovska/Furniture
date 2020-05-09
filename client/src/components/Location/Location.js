import React from 'react'
// YOUR_API_KEY='AIzaSyC7ELXTTJ3m8ZM16MnkcnipZzsKodHGAQ8'
 import {YOUR_API_KEY} from '../Location/locationconfig.json'
class Location extends React.Component{
    constructor(props){
    super(props);
    this.state={
        latitude:null,
        longitude:null,
        userAddress:null,
        
    }
    this.getLocation=this.getLocation.bind(this)
    this.getCoordinates=this.getCoordinates.bind(this)
    this.reverseGeocodeCoordinates=this.reverseGeocodeCoordinates.bind(this)
}
getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError);
      } else {
        alert( "Geolocation is not supported by this browser.");
      }
    }
    getCoordinates(position){
        console.log(position.coords.latitude)
        this.setState({
            latitude:position.coords.latitude,
            longitude:position.coords.longitude
         })
         this.reverseGeocodeCoordinates()
    }
    handleLocationError(error){
        
            switch(error.code) {
              case error.PERMISSION_DENIED:
                alert( "User denied the request for Geolocation.")
                break;
              case error.POSITION_UNAVAILABLE:
               alert( "Location information is unavailable.")
                break;
              case error.TIMEOUT:
               alert("The request to get user location timed out.")
                break;
              case error.UNKNOWN_ERROR:
              alert( "An unknown error occurred.")
                break;
                default:
                    alert( "An unknown error occurred.")
            }
          
            
    }
    reverseGeocodeCoordinates(){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyB40vWeXd8m18074oE5odeZ4OhpY2h59qI`)
        .then(response=>response.json())
        .then(data=>this.setState({
            userAddress:data.results[0].formatted_address
        }))
        .catch(error=>alert(error))
    }
render(){
    return(
        <React.Fragment>
            <div>
                <h2>
                   Location
                </h2>
                <button onClick={this.getLocation}>Get coordinates</button> 
                <h4>HTML Coordinates</h4>
                <p>Latitude:{this.state.latitude}</p>
                <p>Longitude:{this.state.longitude}</p>
                <h4>Google map reverse geocoding</h4>
                <p>Address:{this.state.userAddress}</p>
                {
                    this.state.latitude && this.state.longitude ?
                      <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=13&size=600x300&maptype=roadmap
                       &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
                   &markers=color:red%7Clabel:C%7C40.718217,-73.998284${this.state.latitude},${this.state.longitude}
                         &key=${YOUR_API_KEY}}`} alt="" />
                       :null
                }
                      <p width="600" height="450" frameBorder="0" style={{"border":0}}
                      src={`https://www.google.com/maps/embed/v1/place?q=${this.state.latitude},${this.state.longitude}:ChIJCUi8cJ8VVBMRscUfyNZa8uA&key=AIzaSyB40vWeXd8m18074oE5odeZ4OhpY2h59qI`} allowFullScreen></p>
                     
                  :null
                }
                
            </div>
            
        </React.Fragment>
)
}
}
export default Location
