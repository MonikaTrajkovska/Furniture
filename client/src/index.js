import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from './node_modules/react-redux'
import { BrowserRouter as Router, Route, Switch } from './node_modules/react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Firstpage from './components/Firstpage'
import Contact from './components/Contact'
import Register from './components/Register'
import SecondRegisterPage from './components/SecondRegisterPage'
import Login from './components/Login'



const app = document.getElementById('root')
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route exact path='/Header' component={Header}/> */}
                <Route exact path='/About' render={()=>
                <>
                <Header />
                <About />
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
   <Routes/>,app
)