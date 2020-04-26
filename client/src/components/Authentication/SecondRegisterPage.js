import React from 'react'
import './SecondRegisteredPage.css'
import { Link } from 'react-router-dom'


const SecondRegisterPage =()=>{
    return(
        <React.Fragment>
        <div className='registered-page'>
            <h1>You are succesfully registered </h1>
            <p>Congratulations! You are succesfully registered! <br/>
                Now you can use our privilegies for promoting your shopping experinece.<br/>
                If you have any questions for this internet page please contact us throught e-mail.<br/>
            </p>
            <Link to='/FirstPage'>
            <button className='continue-button2'>Continue</button>
            </Link>

        </div>
        </React.Fragment>
    )
}
export default SecondRegisterPage