import React from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
//  import { render } from '@testing-library/react'
import './Register.css'

class Register extends React.Component{
    constructor(){
        super()
        this.state={
            name:null,
            surname:null,
            email:null,
            telephone:null,
            password:null,
            address:null,
            country:null,
            city:null,
        }
    }
    saveValue=(event)=>{
        this.setState({[event.target.id]: event.target.value})
    }
    sendToProducts = () => {
        if (this.state.redirect) {
            return <Redirect to="/products" />
}
    }
register=(event)=>{
    if(this.state.name === null || 
        this.state.surname === null || 
        this.state.email === null || 
        this.state.telephone === null || 
        this.state.password === null || 
        this.state.address === null || 
        this.state.country === null || 
        this.state.city === null 
        
     ){
            event.preventDefault()
            alert('Please fill all the fields')
        }
        else if(this.state.name != null && 
            this.state.surname != null &&
            this.state.email != null &&
            this.state.telephone!= null &&
            this.state.password != null &&
            this.state.address != null &&
            this.state.country != null &&
            this.state.city != null 
             ){
                 event.preventDefault()
                axios.post('http://127.0.0.1:8080/api/v1/auth/register',{
                    name:this.state.name,
                    surname:this.state.surname,
                    email:this.state.email,
                    telephone:this.state.telephone,
                    password:this.state.password,
                    address:this.state.address,
                    country:this.state.country,
                    city:this.state.country

                })
                .then(res=>{
                    console.log(res)
                    axios.post('http://127.0.0.1:8080/api/v1/auth/login', {
                     email: this.state.email,
                     password: this.state.password
                 })
                 .then(res=>{
                     localStorage.setItem('jwt',res.data.jwt);
                     localStorage.setItem('name',this.state.name);
                     localStorage.setItem('surname',this.state.surname)
                     localStorage.setItem('email', res.data.email);
                     localStorage.setItem('_id',res.data.id)
                 })
                 .catch(err=>{
                     console.log(err)
                 })
                })
                .catch(err=>{
                    console.log(err)
                })
            
             }
            }
            render(){
                return(
                    <React.Fragment>
                        <div className='register'>
                        <h1 className='register-title'>Register</h1>
                            <label className='label'>Name</label>
                            <input type="text" className="text-field1" id="name" onChange={this.saveValue} />
                            <br/>
                            <label className='label'>Surname</label>
                            <input type="text" className="text-field1" id="surname" onChange={this.saveValue} />
                            <label className='label'>Email</label>
                            <input type="text" className="text-field1" id="email" onChange={this.saveValue} />
                            <br/>
                            <label className='label' >Telephone</label>
                            <input type="number" className="text-field1" id="telephone" onChange={this.saveValue} />
                            <label className='label'>Password</label>
                            <input type="password" className="text-field1" id="password" onChange={this.saveValue} />
                            <br/>
                            <label className='label'>Address</label>
                            <input type="text" className="text-field1" id="address" onChange={this.saveValue} />
                            <label className='label'>Country</label>
                            <input type="text" className="text-field1" id="country" onChange={this.saveValue} />
                            <br/>
                            <label className='label'>City</label>
                            <input type="text" className="text-field1" id="city" onChange={this.saveValue} />
                            <Link to="/SecondRegisterPage">
                            <button className='continue-button' onClick={this.register}>Continue</button></Link>
                            </div>
                    </React.Fragment>
                )
            }
}
export default Register