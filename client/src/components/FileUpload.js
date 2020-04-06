// import React from "react";
// import { connect } from "react-redux";
// //  import moni from '../../../uploads/5e0ddfde6abb9841fcafb887';

//  import store from '../components/redux/store'
//   import axios from "axios";
// import { getFurnitures,   } from "../components/redux/actions/furnitureActions";



//  class FileUpload extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        showModal: null,
//        files:[],
    
     
//      };
//   }

  
 

//    componentDidMount() {
//       axios.get("http://localhost:8081/api/v1/furnitures",
//         { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
//         .then(res => {
//           store.dispatch(getFurnitures(res.data))
      

//        })
//        .catch(err => {
//         console.log(err)
//        })
//    }
// //    fetchImages = () => {
// //      const filename = 'IPed8fjdJ3_download.jpg'
// // //    var file = new File( res.data, { type: "image/jpeg" } ); 
// // //  var url = URL.createObjectURL(file);
// //       const url = `http://localhost:8002/api/v1/files/upload/:filename`
// //      axios.get(url,  { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })

// //      .then(res => {
// //         return(
// //             <img src={res.data} alt="trial" />
// //        )
// //         })
// //      }

// //    componentDidUpdate() {
     
// //    axios.get(`http://localhost:8002/api/v1/files/upload${this.state.filename}`,
// //        { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
// //          .then(res => {
  
// // // //         //  store.dispatch(getfiles(res.data))
      

// //       })
// //        .catch(err => {
// //           console.log(err)
// //          })    }
//            render() {
 
//   let furnitureList = null;
//     if (this.props.furnitures) {
//              furnitureList = this.props.furnitures.map(furniture => {

//         return (

//            <tr key={furniture._id}>
//              <td>{furniture.name}</td>
//            <td>{furniture.code}</td>
//              <td>{furniture.dimension}</td>
//              <td>{furniture.description}</td>
//              <td>{furniture.price}</td>
//              <td>{furniture.sold}</td>
//              <td>{furniture.filename}</td>
           
//              <td>
//              {/* <button className="delete-btn" id="delete-button"  onClick={() => { this.fetchImages() }}>Delete</button>  */}
//             <img src="uploads/wTu5zNotlt_Cost-Calculator.jpg" alt="productImage"/>             </td>
//                       </tr >
//          );
//        });
//      }
//    return (
//        <React.Fragment>
         
//          <div className="main-div5">

//           <h3>Products</h3>
     
//          </div>

//          <table className="table table-dark">
//            {this.state.showModal}
//            <thead>
//             <tr>
//                <th>Product name</th>
//                <th>Product type</th>
//                <th>Product description</th>
//                <th>Purchase date</th>
//                <th>Product price </th>
//                <th>Purchase date</th>
//                <th>Product price </th>
//                <th></th>
//                <th></th>


//             </tr>
//            </thead>
//           <tbody>{furnitureList}</tbody>
//         </table>
       
//       </React.Fragment >
//            );
//    }
//  }
// // //   Probno.propTypes = {
// // // //    furnitures: React.PropTypes.array.isRequired,
// // //    furnitures: PropTypes.object.isRequired,

// // //   }

//  function mapStateToProps(state) {
//    return {
//      furnitures: state.furnitureReducers.furnitures,

//    };
//  }
//  function mapDispatchToProps(dispatch) {
//    return {
//      getFurnitures: data => dispatch(getFurnitures(data)),
   
//    }
//  }
//  export default connect(
//    mapStateToProps,
//    mapDispatchToProps
//  )(FileUpload);
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
 import store from '../components/redux/store'
  import { connect } from "react-redux";
  // import moni from '../../../uploads/moni.jpg'
import { getFurnitures,   } from "../components/redux/actions/furnitureActions";
class FileUpload extends Component {
  
  state = {
    furnitures: []
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

  // componentDidMount = () =>{
  //   console.log("mounted");
  //   fetch("http://localhost:8081/api/v1/furnitures",
  //   { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
  //   .then(res => {
  //     return res.json();
  //   }).then(blob => {
  //     this.setState({furnitures: blob.data});
  //    console.log(this.state.fu)
  //   })
  // }
  render() {
    // return (
    //   <React.Fragment>
    //     <header>
    //       <h1>MERN Items</h1>
    //     </header>
      
    //       <h2>Items</h2>
    //       <div className="itemsContainer">
    //       {this.state.furnitures.map(furniture => {
    //         return(
    //           <div className="item" key={furniture._id}>
    //              <div className="cover" style={{backgroundImage: "url(" + furniture.filename + ")" }}></div>
    //               <div>
    //                <Link to={"item/" + furniture._id}><h3>{furniture.name}</h3></Link> 
    //               <p>{furniture.description}</p>
    //               </div>
    //           </div>
    //         )
    //       })}
    //       </div>
      
          
    //   </React.Fragment>
    // );
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

    };
  } 
  function mapDispatchToProps(dispatch) {   
   return {
      getFurnitures: data => dispatch(getFurnitures(data)),
   
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FileUpload);

// export default FileUpload;