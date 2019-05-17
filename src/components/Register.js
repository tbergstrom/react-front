import React, { Component } from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                phone: '',
                street: '',
                city: '',
                state: '',
                country: '',
                zip: '',
                dateOfBirth: '1986-10-07'
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        // fill out userActions!
        const userInfo = this.state.user;
        alert(userInfo.firstName);
    };


    render() {
        const { user, submitted } = this.state;

        return (
            <div>
                <h1>Register</h1>

                <form name="form" onSubmit={this.handleSubmit} >
                    <div>
                        <label>Personal Info</label>
                        <p><input type="text" name="firstName" value={user.firstName} onChange={this.handleChange} placeholder="First Name" /></p>
                        <p><input type="text" name="lastName" value={user.lastName} onChange={this.handleChange} placeholder="Last Name" /></p>
                        <p><input type="text" name="username" value={user.username} onChange={this.handleChange} placeholder="Last Name" /></p>

                        <p><input type="text" name="email" value={user.email} onChange={this.handleChange} placeholder="Email" /></p>
                        <p><input type="text" name="password" value={user.password} onChange={this.handleChange} placeholder="Password" /></p>
                        <p><input type="text" name="confirmPassword" placeholder="Confirm Password"/></p>
                        <p><input type="text" name="phone" value={user.phone} onChange={this.handleChange} placeholder="Phone"/></p>
                    </div>
                    <div>
                        <label>Address</label>
                        <p><input type="text" name="street" value={user.street} onChange={this.handleChange} placeholder="Street" /></p>
                        <p><input type="text" name="city" value={user.city} onChange={this.handleChange} placeholder="City" /></p>
                        <p><input type="text" name="state" value={user.state} onChange={this.handleChange} placeholder="State" /></p>
                        <p><input type="text" name="country" value={user.country} onChange={this.handleChange}  placeholder="Country" /></p>
                        <p><input type="text" name="zip" value={user.zip} onChange={this.handleChange} placeholder="Zip" /></p>
                    </div>
                    <div>
                        <label>Date of Birth</label>
                        <p><input type="date" name="dateOfBirth" value={user.dateOfBirth} onChange={this.handleChange} /></p>
                    </div>
                    <div>
                        <p><label>Gender</label></p>
                        <p><input type="radio" name="gender" value={user.gender} onChange={this.handleChange} />Male</p>
                        <p><input type="radio" name="gender" value={user.gender} onChange={this.handleChange} />Female</p>
                        <p><input type="radio" name="gender" value={user.gender} onChange={this.handleChange} />Other</p>
                    </div>
                    <div>
                        <label>Languages</label>
                        <p><input type="checkbox" name="language1" value="C#" />C#</p>
                        <p><input type="checkbox" name="language2" value="Python" />Python</p>
                        <p><input type="checkbox" name="language3" value="Java" />Java</p>
                        <p><input type="checkbox" name="language4" value="JavaScript" />JavaScript</p>
                    </div>
                    <p><button type="submit" value="Register">Submit</button></p>
                </form>
            </div>
            )
    }
}

export default Register;