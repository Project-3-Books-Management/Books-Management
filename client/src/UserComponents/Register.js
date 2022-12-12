import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            name: '',
            phone: '',
            email: '',
            password: '',
            address: {
                street: '',
                city: '',
                pincode: ''
            }
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            address: {
                street: this.state.street,
                city: this.state.city,
                pincode: this.state.pincode
            }
        }

        axios.post('https://localhost:5000/register', data).then(() => {

            this.setState = {
                title: '',
                name: '',
                phone: '',
                email: '',
                password: '',
                address: {
                    street: '',
                    city: '',
                    pincode: ''
                }
            }

        }).catch((err) => console.log("this is error in posting" + err))
    }


    render() {
        return (

            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            Already have an account ?
                            <br />
                            <Link to="/login" className="btn btn-outline-warning float-left"> Login Here
                            </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Register</h1>
                            <p className="lead text-center">
                                Create new Account
                            </p>

                            <form noValidate onSubmit={this.onSubmit}>

                                <div className='form-group' >

                                    <input
                                        type='radio'
                                        placeholder='Select Title'
                                        id="mr"
                                        name='title' //same for radio check one at a time
                                        className='radio-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                    <label htmlFor="mr" style={{ "marginLeft": "10px" }}>Mr</label>

                                    <input style={{ "marginLeft": "50px" }}
                                        type='radio'
                                        placeholder='Select Title'
                                        id="mrs"      // htmlFor uses id to select input
                                        name='title'
                                        className='radio-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />

                                    <label htmlFor="mrs" style={{ "marginLeft": "10px" }}>Mrs</label>

                                    <input style={{ "marginLeft": "50px" }}
                                        type='radio'
                                        placeholder='Select Title'
                                        id="miss"
                                        name='title'
                                        className='radio-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />

                                    <label style={{ "marginLeft": "10px" }} htmlFor="miss">Miss</label>
                                </div>
                                <br />



                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Name'
                                        name='name'
                                        className='form-control'
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Phone Number'
                                        name='phone'
                                        className='form-control'
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Email Address'
                                        name='email'
                                        className='form-control'
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Password'
                                        name='password'
                                        className='form-control'
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>


                                    <input
                                        type='text'
                                        placeholder='Enter Street Number'
                                        name='address'
                                        className='form-control'
                                        value={this.state.address.street}
                                        onChange={this.onChange}
                                    />
                                    <br />
                                    <input
                                        type='text'
                                        placeholder='Enter City'
                                        name='address'
                                        className='form-control'
                                        value={this.state.address.city}
                                        onChange={this.onChange}
                                    />
                                    <br />
                                    <input
                                        type='text'
                                        placeholder='Enter Your Pincode'
                                        name='address'
                                        className='form-control'
                                        value={this.state.address.pincode}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }



}
export default Register