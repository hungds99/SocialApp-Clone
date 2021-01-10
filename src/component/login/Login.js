import React, { Component } from 'react'
import Register from '../register/Register'
import LoginForm from './LoginForm'
import SaveAccount from './SaveAccount'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    handleAccount = (account) => {
        console.log(this.props.account)
    }

    render() {
        {
            this.handleAccount()
        }
        return (
            // Login
            <div className="body-login">
                <div className="container-login row">
                    {/* left */}
                    <SaveAccount
                        handleAccount={(account) => this.handleAccount(account)}
                    />
                    {/* End left */}

                    {/* Right */}
                    <LoginForm />
                    {/* End right */}

                    {/* Modal */}
                    <Register />
                    {/* End modal */}
                </div>
            </div>
        )
    }
}

export default Login
