
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
 import store from '../components/redux/store'
  import { connect } from "react-redux";
  // import moni from '../../../uploads/moni.jpg'
import { getFurnitures,Update } from "../components/redux/actions/furnitureActions";
class FileUpload extends Component {
  
  state = {
    furnitures: [],
    Update: false,
      align:null,
      setSearchTerms:'',
      searchTerms:''
  }
  refilter = (event) => {
    this.setState({ Update: true, align: event.target.value })
  }
  onchangeSearch=(event)=>{
    this.setState({searchTerms:event.target.value})
}

  componentDidMount() {
           axios.get("http://localhost:8081/api/v1/furnitures",
             { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
             .then(blob => {
               
               store.dispatch(getFurnitures(blob.data))
          
    
            })
          .catch(err => {
            console.log(err)
           })
       }
       componentDidUpdate() {
        if (this.state.Update && this.state.align === null) {
          axios.get('http://localhost:8081/api/v1/furnitures?name',
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
              store.dispatch(getFurnitures(res.data))
             
            })
            .catch(err => {
              console.log(err)
            })
          this.setState({ Update: false })
        } else if (this.state.align != null) {
          axios.get(`http://localhost:8081/api/v1/furnitures?name=${this.state.align}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
              store.dispatch(getFurnitures(res.data))
            
            
            })
            .catch(err => {
              console.log(err)
            })
           this.setState({
             Update: false,
            align: null
           })
        } else {
          console.log('Error ')
        }
      }
  render() {

       let furnitureList = null;
     if (this.props.furnitures) {
              furnitureList = this.props.furnitures.map(furniture => {

         return (

          <tr key={furniture._id}>
            <td>{furniture.name}</td>
           <td>{furniture.code}</td>
             <td>{furniture.dimension}</td>
             <td>{furniture.description}</td>
             <td>{furniture.price}</td>
             <td>{furniture.sold}</td>
             <img  src ={furniture.filename}/>
           
              <td>
              {/* <img src={`filename:pqRm7AzIFQ_download.jpg;base64,${furniture.filename}`} /> */}
             {/* <button className="delete-btn" id="delete-button"  onClick={() => { this.fetchImages() }}>Delete</button>  */}
                        </td>
                      </tr >
        );        });
     }
   return (
        <React.Fragment>
      <div>
    <input  onChange={this.onchangeSearch} placeholder="Search by typing..."></input>
    </div>
          <div className="col-md-4">
                    <label > Filter By Nmae
               <select className="form-control" onChange={this.refilter}>
                            <option value="">Soho</option>
                            <option value="Moni">Moni</option>
                            <option value="Soho">Table</option>
                            <option value="m">Chair</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            
          <div className="main-div5">

           <h3>Products</h3>
     
         </div>

         <table className="table table-dark">
            {this.state.showModal}
            <thead>
             <tr>
                <th>Product name</th>
                <th>Product type</th>
                <th>Product description</th>
                <th>Purchase date</th>
               <th>Product price </th>
               <th>Purchase date</th>
               <th>Product price </th>
               <th></th>
               <th></th>
              

            </tr>
           </thead>
           <tbody>{furnitureList}</tbody>
         </table>
       
       </React.Fragment >
            );
   }
  }
  
  function mapStateToProps(state) {
    return {
      furnitures: state.furnitureReducers.furnitures,
      //  furnitures:state.furnitureReducers.filterProducts

    };
  } 
  function mapDispatchToProps(dispatch) {   
   return {
      getFurnitures: data => dispatch(getFurnitures(data)),
      // filterProducts:furnitures=>dispatch(filterProducts(furnitures.name))
   
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FileUpload);

// export default FileUpload;