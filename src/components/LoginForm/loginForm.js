import React, { Component } from 'react'
import isEmail from 'validator/lib/isEmail'
// import { connect } from 'react-redux'
import isEmpty from 'validator/lib/isEmpty'
import './loginForm.css'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            ErrorMessage: {}
        }
    }

    // handle input
    isChangeInput = (event) => {
        const { name } = event.target
        const { value } = event.target

        this.setState({ [name]: value })
    }

    // Validate input Login
    isValidate = () => {
        const msg = {}
        if (isEmpty(this.state.email)) {
            msg.email = 'Nhập địa chỉ email của bạn!!!'
        } else if (!isEmail(this.state.email)) {
            msg.email = 'Nhập đúng địa chỉ email của bạn!!!'
        }

        if (isEmpty(this.state.password)) {
            msg.password = 'Nhập mật khẩu của bạn'
        }

        this.setState({ ErrorMessage: msg })
        if (Object.keys(msg).length > 0) return false
        return true
    }

    // Send account to Login
    isSubmit = () => {
        // event.preventDefault()
        const isValid = this.isValidate()
        if (!isValid) return

        let account = {}
        account.email = this.state.email
        account.password = this.state.password

        this.props.handleLogin(account)
    }

    // Render message error password or email
    isShowMess = () => {
        if (this.props.ErrorMessage !== '') {
            return this.props.ErrorMessage
        } else return ''
    }

    render() {
        return (
            <div className="right-login col-lg-6 col-md-12">
                <div className="login-area">
                    <form className="login-form p-3">
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                className="form-control p-3"
                                placeholder="Email hoặc số điện thoại"
                                onChange={(event) => this.isChangeInput(event)}
                            />
                        </div>
                        <small className="font-italic text-danger mb-3">
                            {this.state.ErrorMessage.email}
                        </small>
                        <div className="mt-3 ">
                            <input
                                type="password"
                                name="password"
                                className="form-control p-3"
                                placeholder="Mật khẩu"
                                onChange={(event) => this.isChangeInput(event)}
                            />
                        </div>
                        <small className="font-italic text-danger mb-3">
                            {this.state.ErrorMessage.password}
                        </small>
                        <small className="font-italic text-danger mb-3">
                            {this.isShowMess()}
                        </small>
                        <button
                            type="reset"
                            className="submit-login btn btn-primary mt-3"
                            onClick={() => this.isSubmit()}
                        >
                            Đăng nhập
                        </button>

                        <div className="forgot-password text-center mt-3">
                            <a href="/">Quên mật khẩu?</a>
                        </div>
                        <hr />
                        <div className="create-account text-center">
                            <button
                                type="button"
                                className="create-account_btn"
                                data-bs-toggle="modal"
                                data-bs-target="#createAccount"
                            >
                                Tạo tài khoản mới
                            </button>
                        </div>
                    </form>
                    <div className="create-page m-3">
                        <a href="/createPage">Tạo trang</a> dành cho người nổi
                        tiếng, nhãn hiệu hoặc doanh nghiệp.
                    </div>
                </div>
            </div>
        )
    }
}
