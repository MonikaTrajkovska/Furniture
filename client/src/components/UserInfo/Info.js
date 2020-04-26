import React from 'react'
import './Info.css'
import axios from 'axios';


import { saveUserName } from '../redux/actions/userAction'
import store from '../redux/store'
import Input from '../Input/Input'

class Info extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: '',
                surname: '',
                email: '',
                address: '',
                country: '',
                city:'',
                telephone: ''
            },
            shippingAddress: '',
            id: '',
            addressCheckbox: false,
            redirect: false
        }
    }

    saveUserInfo = (event) => {
        this.setState({ ...this.state.userInfo, userInfo: { ...this.state.userInfo, [event.target.id]: event.target.value } })
    }

    saveUserAddress = (event) => {
        this.setState({[event.target.id]: event.target.value })
    }

    checkboxClickedHandler = (event) => {
        this.setState({ addressCheckbox: event.target.checked })
    }

    componentDidMount() {
        axios.post('http://127.0.0.1:8080/api/v1/auth/user-info',
            {
                email: localStorage.getItem('email')
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            })
            .then(res => {
                this.setState({
                    ...this.state.userInfo, userInfo: {
                        name: res.data[0].name,
                        surname: res.data[0].surname,
                        email: res.data[0].email,
                        city: res.data[0].city,
                        address:res.data[0].address,
                        country: res.data[0].country,
                        telephone: res.data[0].telephone,
                        
                    },
                    shippingAddress: res.data[0].shippingAddress,
                    id: res.data[0]._id
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    updateUserInfo = (event) => {
        if (this.state.userInfo.name.length === 0 && this.state.userInfo.surname.length === 0 &&
            this.state.userInfo.email.length === 0 && this.state.userInfo.city.length === 0 && this.state.userInfo.country.length === 0 && this.state.userInfo.telephone.length === 0 && this.state.address.length ===0 && this.state.userInfo.shippingAddress.length ===0) {
            alert('Please fill the fields!')
            event.preventDefault()
        } else {
            axios.put(`http://127.0.0.1:8080/api/v1/auth/${this.state.id}`, {
                name: this.state.userInfo.name,
                surname: this.state.userInfo.surname,
                email: this.state.userInfo.email,
                city: this.state.userInfo.city,
                country: this.state.userInfo.country,
                telephone: this.state.userInfo.telephone,
                address: this.state.address,
                shippingAddress:this.state.shippingAddress
            },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    }
                }
            )
                .then(res => {
                    this.setState({ redirect: true })
                    localStorage.setItem('email', this.state.userInfo.email)
                    localStorage.setItem('name', this.state.userInfo.name)
                    localStorage.setItem('lastName', this.state.userInfo.surname)
                    const name = this.state.userInfo.name + ' ' + this.state.userInfo.surname
                    store.dispatch(saveUserName(name))
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    render() {
        var labels = ["Name", "Surname", "Email", "Telephone", "Address", "Country","City"]
        var inputs = Object.keys(this.state.userInfo).map((info, index) => {
            return (
                <Input key={index} htmlFor={info} labelName={labels[index]}
                    inputId={info} saveUser={this.saveUserInfo}
                    value={this.state.userInfo[info]}
                />
            )
        })
        return (
            <div>
                <this.props.header />
                <h3 className="general-h3">General Account Settings</h3>
                <main className="user-info-main">
                    <div className="user-form-box">
                        <form>
                            {inputs}
                            <p className="address-p">
                                <label htmlFor="addressCheckbox" className="val-label">If you want to add other Shipping Address, select: </label>
                                <input onChange={this.checkboxClickedHandler} type="checkbox" name="addressCheckbox" id="addressCheckbox" />
                            </p>
                            {this.state.addressCheckbox ?
                                <p className="input-container">
                                    <label htmlFor="address" className="val-label">Shipping Address: </label>
                                    <input onChange={this.saveUserAddress} defaultValue={this.state.address} className="val-input" type="text" name="address" id="address" />
                                </p> : null}
                        
                                <button className="save-btn" onClick={this.updateUserInfo}>Save Settings</button>
                      
                        </form>
                    </div>
                    <div className="user-info-div" style={this.state.addressCheckbox ? { height: "794px" } : null}>
                        <span><i className="fas fa-plus-circle"></i></span>
                        <h3>You are changing your user account settings</h3>
                    </div>
                </main>
            </div>
        )
    }
}

export default Info