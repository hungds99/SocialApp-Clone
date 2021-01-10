import React, { Component } from 'react'
import { connect } from 'react-redux'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            day: '',
            month: '',
            year: ''
        }
    }

    // Show option date in select
    showDate = () => {
        var date = []
        for (var i = 1; i <= 31; i++) {
            date.push(
                <option key={i} value={i}>
                    {i}
                </option>
            )
        }
        return date
    }

    // Show option month in select
    showMonth = () => {
        var month = []
        for (var i = 1; i <= 12; i++) {
            month.push(
                <option key={i} value={i}>
                    {i}
                </option>
            )
        }
        return month
    }

    // Show option year in select
    showYear = () => {
        var month = []
        for (var i = 2020; i >= 1920; i--) {
            month.push(
                <option key={i} value={i}>
                    {i}
                </option>
            )
        }
        return month
    }

    // Handle input
    isChangeInput = (event) => {
        const { name } = event.target
        const { value } = event.target

        this.setState({ [name]: value })
    }

    // Push to redux
    isSaveInput = () => {
        let account = {}
        account.firstName = this.state.firstName
        account.lastName = this.state.lastName
        account.email = this.state.email
        account.password = this.state.password
        account.day = this.state.day
        account.month = this.state.month
        account.year = this.state.year

        this.props.createAccount(account)
    }
    render() {
        return (
            <div
                className="modal fade"
                id="createAccount"
                tabIndex={-1}
                aria-labelledby="createAccountLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className=" d-flex flex-column justify-content-start">
                                <h3
                                    className="modal-title"
                                    id="createAccountLabel"
                                >
                                    Đăng ký
                                </h3>
                                <p>Nhanh chóng và dễ dàng.</p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        {/* Body Modal */}
                        <div className="modal-body row">
                            <form>
                                <div className="form-row row">
                                    <div className="form-group col-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Họ"
                                            name="firstName"
                                            onChange={(event) =>
                                                this.isChangeInput(event)
                                            }
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Tên"
                                            name="lastName"
                                            onChange={(event) =>
                                                this.isChangeInput(event)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <input
                                        type="Email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        onChange={(event) =>
                                            this.isChangeInput(event)
                                        }
                                    />
                                </div>
                                <div className="form-group mt-2">
                                    <input
                                        type="Password"
                                        className="form-control"
                                        placeholder="Mật khẩu mới"
                                        name="password"
                                        onChange={(event) =>
                                            this.isChangeInput(event)
                                        }
                                    />
                                </div>
                                <div className="form-row mt-2">
                                    <label className="label-login mb-1">
                                        Ngày sinh
                                        <i className="fas fa-question-circle"></i>
                                    </label>
                                    <div className="form-row row">
                                        <div className="form-group col-4">
                                            <select
                                                className="form-control"
                                                name="day"
                                                onChange={(event) =>
                                                    this.isChangeInput(event)
                                                }
                                            >
                                                <option>Ngày</option>
                                                {this.showDate()}
                                            </select>
                                        </div>
                                        <div className="form-group col-4">
                                            <select
                                                className="form-control"
                                                name="month"
                                                onChange={(event) =>
                                                    this.isChangeInput(event)
                                                }
                                            >
                                                <option>Tháng</option>
                                                {this.showMonth()}
                                            </select>
                                        </div>
                                        <div className="form-group col-4">
                                            <select
                                                value={this.state.year}
                                                className="form-control"
                                                name="year"
                                                onChange={(event) =>
                                                    this.isChangeInput(event)
                                                }
                                            >
                                                <option defaultValue>
                                                    Năm
                                                </option>
                                                {this.showYear()}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row mt-2">
                                    <label className="label-login mb-1">
                                        Giới tính
                                        <i className="fas fa-question-circle"></i>
                                    </label>
                                    <div className="form-row gender-area row">
                                        <div className="form-check-inline gender-label">
                                            <label className="form-check-label d-flex justify-content-between">
                                                Nữ
                                                <input
                                                    type="radio"
                                                    className="form-check-input p-2"
                                                    name="gender"
                                                    value="woman"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-check-inline  gender-label">
                                            <label className="form-check-label  d-flex justify-content-between">
                                                Nam
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="gender"
                                                    value="man"
                                                />
                                            </label>
                                        </div>
                                        <div className="form-check-inline  gender-label">
                                            <label className="form-check-label d-flex justify-content-between">
                                                Khác
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="gender"
                                                    value="more"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="commit mt-3">
                                    <p className="commit-content">
                                        Bằng cách nhấp vào Đăng ký, bạn đồng ý
                                        với{' '}
                                        <a
                                            href="/legal/terms/update"
                                            id="terms-link"
                                            target="_blank"
                                            rel="nofollow"
                                        >
                                            Điều khoản
                                        </a>
                                        ,{' '}
                                        <a
                                            href="/about/privacy/update"
                                            id="privacy-link"
                                            target="_blank"
                                            rel="nofollow"
                                        >
                                            Chính sách dữ liệu
                                        </a>{' '}
                                        và{' '}
                                        <a
                                            href="/policies/cookies/"
                                            id="cookie-use-link"
                                            target="_blank"
                                            rel="nofollow"
                                        >
                                            Chính sách cookie
                                        </a>{' '}
                                        của chúng tôi. Bạn có thể nhận được
                                        thông báo của chúng tôi qua SMS và hủy
                                        nhận bất kỳ lúc nào.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="reset"
                                        className="btn register-btn"
                                        onClick={() => this.isSaveInput()}
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* End Body Modal */}
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
        createAccount: (account) => {
            dispatch({ type: 'REGISTER', account })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
