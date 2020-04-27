import React from 'react'
import axios from 'axios'



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
    axios.post('https://furniture-app-deploy.herokuapp.com/api/v1/auth/login', {
        email: this.state.email,
        password: this.state.password
    })
    .then(res=>{
        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('name', res.data.name);
        localStorage.setItem('lastName', res.data.surname);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('_id', res.data.id);
      
      
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
     
                            <button className='continue-button3' onClick={this.login}>Log in</button>
        </div>
        </React.Fragment>
    )
}
}
export default Login