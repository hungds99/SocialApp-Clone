import React, { Component } from 'react'
import { connect } from 'react-redux'
class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    // hanlde input
    isChangeInput = (event) => {
        const { name } = event.target
        const { value } = event.target

        this.setState({ [name]: value })
    }

    // Send account to Login
    isSubmit = () => {
        let account = {}
        account.email = this.state.email
        account.password = this.state.password

        this.props.handleLogin(account)
    }
    render() {
        return (
            <div className="right-login col-lg-6 col-md-12">
                <div className="login-area">
                    <form className="login-form p-3">
                        <div className="mb-3">
                            <input
                                type="email"
                                name="email"
                                className="form-control p-3"
                                placeholder="Email hoặc số điện thoại"
                                onChange={(event) => this.isChangeInput(event)}
                            />
                        </div>
                        <div className="mb-3 ">
                            <input
                                type="password"
                                name="password"
                                className="form-control p-3"
                                placeholder="Mật khẩu"
                                onChange={(event) => this.isChangeInput(event)}
                            />
                        </div>
                        <button
                            type="reset"
                            className="submit-login btn btn-primary"
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
const mapStateToProps = (state, ownProps) => {
    return {
        account: state.account
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleLogin: (account) => {
            dispatch({ type: 'CHECK_LOGIN', account })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
