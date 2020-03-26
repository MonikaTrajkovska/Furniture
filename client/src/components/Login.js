import React from './node_modules/react'
import axios from './node_modules/axios'
import { render } from './node_modules/@testing-library/react'


class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:null,
            password:null
        }
    }
    saveValue=(event)=>{
        this.setState({[event.target.id]:event.target.value})
    }
    login=(event)=>{
        if(this.state.email === null || 
            this.state.password ===null
            )
            {
            event.preventDefault()
            alert('Please fill all the fields ')
}else if(
    this.state.email != null &&
    this.state.password != null
)
{
    event.preventDefault()
    axios.post('http://127.0.0.1:8085/api/v1/auth/login', {
        email: this.state.email,
        password: this.state.password
    })
    .then(res=>{
        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('name', res.data.first_name);
        localStorage.setItem('lastName', res.data.last_name);
      
      
    })
   
    .catch(err=>{
        console.log(err)
    });
}
    }
render(){
    return(
        <React.Fragment>
            <div className='register'>
            <h1 className='register-title'>Login</h1>
         <label className='label'>Email</label>
        <input type="text" className="text-field1" id="email" onChange={this.saveValue} />
        <br/>
        <label className='label'>Password</label>
        <input type="password" className="text-field1" id="password" onChange={this.saveValue} />
        <br/>
     
                            <button className='continue-button'>Continue</button>
        </div>
        </React.Fragment>
    )
}
}
export default Login