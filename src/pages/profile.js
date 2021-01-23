import React, { Component } from 'react'

// const questionIcon = require('../assets/image/question.png')
import questionIcon from '../assets/image/question.png'
import man from '../assets/image/man.png'
import maleGender from '../assets/image/male-gender.png'
import editProfile from '../assets/image/edit-user-profile.png'
import LeftMenu from '../component/LeftMenu/LeftMenu'
export default class Profile extends Component {
    render() {
        // console.log(questionIcon);
        return (
            <body className="body">
                <div className="container">
                    <div className="profile">
                        <div className="background">
                            <img src="https://www.designveloper.com/wp-content/uploads/2019/10/web-development-neko.jpg" />
                        </div>
                        <div className="avatar">
                            <img
                                src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/118309863_1393099320881022_3186202248172424337_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=H8IVD6SK0gsAX-iuACK&_nc_ht=scontent.fdad2-1.fna&oh=c2e219f7197202ed22a03dfdfd63cc37&oe=6022A29D"
                                className="rounded-circle"
                            />
                        </div>
                    </div>
                    <div className="profile-content">
                        <h1 className="profile-name">Nguyễn Đình Việt</h1>
                        <div className="box-zodiac">
                            <img
                                src="https://www.flaticon.com/premium-icon/icons/svg/3131/3131947.svg"
                                width="20px"
                            />
                            <span>Song Ngư</span>
                        </div>
                        <div>
                            Mô tả ngắn về bản thân bạn.
                            <a className="text">Thêm mô tả</a>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="profile-nav">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="/navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">
                                            Dòng thời gian{' '}
                                            <span className="sr-only">
                                                (current)
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            Giới thiệu
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            Bạn bè
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            Ảnh
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <LeftMenu />
                </div>
            </body>
        )
    }
}
