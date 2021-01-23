import React, { Component } from 'react'
import questionIcon from '../../assets/image/question.png'
import man from '../../assets/image/man.png'
import maleGender from '../../assets/image/male-gender.png'
import editProfile from '../../assets/image/edit-user-profile.png'
export default class LeftMenu extends Component {
    render() {
        return (
            <div className="row">
                <div className="col col-360">
                    <div className="question">
                        <img className="ask-icon" src={questionIcon} />
                        <p className="detail">
                            Hãy trả lời những thắc mắc về bạn
                        </p>
                        <span className="count-ask-question">1</span>
                    </div>
                    <div className="interactive">
                        <div className="interactive-child">
                            <div className="child">
                                <div className="number">2tr</div>
                                <div className="text">Lượt theo dõi</div>
                            </div>
                            <div className="child">
                                <div className="number">79</div>
                                <div className="text">Bài viết</div>
                            </div>
                            <div className="child1">
                                <div className="number">1999</div>
                                <div className="text">Lượt thích</div>
                            </div>
                        </div>
                    </div>
                    <div className="introduce">
                        <p>Giới thiệu</p>
                        <div className="introduce-child">
                            <div className="icon-info">
                                <img className="icon-info1" src={man} />
                            </div>
                            <div className="body-info">
                                <div className="user-info">
                                    <span>Giới tính</span>
                                    <span className="gender">
                                        <img src={maleGender} width="16" />
                                        <span>Nam</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="line"></div>
                        <p>Sở thích</p>
                        <div className="edit-info">
                            <a className="btn-primary-light">
                                <img src={editProfile} />
                                <span>Chỉnh sửa thông tin</span>
                            </a>
                        </div>
                    </div>
                    <div className="images">
                        <p>Ảnh</p>
                        <a href="#">Xem tất cả</a>
                    </div>
                    <div className="friends">
                        <p>Bạn bè</p>
                        <a href="#">Tất cả bạn bè</a>
                    </div>
                </div>
            </div>
        )
    }
}
