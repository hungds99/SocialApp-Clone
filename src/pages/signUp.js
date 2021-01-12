import React, { Component } from 'react'
import LoginForm from '../component/LoginForm'
import RegisterForm from '../component/RegisterForm'
import { dataConnect } from '../configs/firebaseConfig'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isRedirect: false,
            ErrorMessage: '',
            account: {}
        }
    }

    handleLogin = (account) => {
        // console.log(account.email)
        dataConnect.on('value', (accounts) => {
            accounts.forEach((element) => {
                if (
                    element.val().email === account.email &&
                    element.val().password === account.password
                ) {
                    Cookies.set('user', element.val())
                    this.setState({ isRedirect: true })
                    this.setState({ ErrorMessage: '' })
                } else {
                    this.setState({
                        ErrorMessage: 'Mật khẩu hoặc tài khoản không đúng'
                    })
                }
            })
        })
    }

    render() {
        if (this.state.isRedirect === true) {
            return <Redirect to="/" />
        }
        // console.log(Cookies.get('user'))
        return (
            // Login
            <div className="body-login">
                <div className="container-login row">
                    {/* left */}
                    <div className="left-login col-lg-6 col-md-12 col-sm-12">
                        <div className="text-top">
                            <img
                                className="fb_img_logo mb-1"
                                src="https://www.facebook.com/rsrc.php/y8/r/dF5SId3UHWd.svg"
                                alt="facebook"
                            />
                            <h3>Đăng nhập gần đây</h3>
                            <p>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>
                        </div>
                        <a className="" href="/">
                            <div className="quick-login">
                                <div className="quick-login_logo">
                                    <div className="quick-login_logo_icon">
                                        <i className="fas fa-plus-circle"></i>
                                    </div>
                                    <div className="quick-login_logo_text">
                                        <p>Thêm tài khoản</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* End left */}

                    {/* Right */}
                    <LoginForm
                        handleLogin={(account) => this.handleLogin(account)}
                        ErrorMessage={this.state.ErrorMessage}
                    />
                    {/* End right */}

                    {/* Modal */}
                    <RegisterForm />
                    {/* End modal */}
                </div>
            </div>
        )
    }
}

export default SignUp
