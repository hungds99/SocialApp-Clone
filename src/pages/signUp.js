import React, { Component } from 'react'
import LoginForm from '../component/LoginForm'
import RegisterForm from '../component/RegisterForm'

class SignUp extends Component {
    render() {
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
                    <LoginForm />
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
