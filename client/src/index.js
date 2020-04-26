import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Navigation/Header'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Firstpage from './components/Pages/Firstpage'
import Contact from './components/Pages/Contact'
import Register from './components/Authentication/Register'
import SecondRegisterPage from './components/Authentication/SecondRegisterPage'
import Login from './components/Authentication/Login'
// import FileUpload from './components/FileUpload'
import store from './components/redux/store'
import Location from './components/Location/Location'
import Filter from './components/Filter'
import Basket from './components/Products/Basket'
import BasketCart from './components/Products/BasketCart'
import Products from './components/Products/Products'





 import Input from './components/Input/Input'


 import Info from './components/UserInfo/Info'
 import Head from './components/Head'

const app = document.getElementById('root')
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                 {/* <Route exact path='/Probno' component={FileUpload}/>  */}
                 <Route exact path='/Location' component={Location}/> 
                  <Route exact path='/basket' component={Basket}/> 
                 <Route exact path='/Filter' component={Filter}/> 
                 <Route exact path='/BasketCart' component={BasketCart}/> 
                 
                     <Route exact path="/input" component={Input} />
                     
                   
                     <Route exact path="/user-info" render={() => <Info header={Header} />} />
                    {/* <Route exact path='/user' component={SignOut}/>     */}
                <Route exact path='/About' render={()=>
                <>
                <Header />
                <About />
            </>
        } />
        
                <Route exact path="/Products" render={() =>
                    <>
                        <Header />
                        <Products />
           
                    </>
                } />
            
                <Route exact path="/Firstpage" render={() =>
                    <>
                        <Header />
                        <Firstpage />
                    </>
                } />
               <Route exact path="/Contact" render={() =>
                    <>
                        <Header />
                        <Contact />
                    </>
                } />
                  <Route exact path="/Register" render={() =>
                    <>
                        <Header />
                        <Register />
                    </>
                } />
                  <Route exact path="/SecondRegisterPage" render={() =>
                    <>
                        <Header />
                        <SecondRegisterPage /> 
                    </>
                } /> 
                 <Route exact path="/Login" render={() =>
                    <>
                         <Header /> 
                        <Login /> 
                    </>
                } /> 
                
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>, app)